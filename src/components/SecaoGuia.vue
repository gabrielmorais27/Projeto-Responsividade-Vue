<script setup>
import CodigoExemplo from './CodigoExemplo.vue'

defineProps({
  titulo: { type: String, required: true },
  pergunta: { type: String, required: true },
  codigo: { type: String, required: true },
  linguagem: { type: String, default: 'css' },
  fontes: {
    type: Array, // [{ nome: 'MDN', url: 'https://...' }]
    required: true,
    validator: (lista) => lista.length > 0,
  },
})
</script>

<template>
  <article class="secao">
    <h1>{{ titulo }}</h1>

    <!-- 1. Explicação curta -->
    <section class="bloco">
      <h2>Em poucas palavras</h2>
      <slot name="explicacao" />
    </section>

    <!-- 2. Exemplo de código comentado -->
    <section class="bloco">
      <h2>Exemplo</h2>
      <CodigoExemplo :codigo="codigo" :linguagem="linguagem" />
    </section>

    <!-- Laboratório (opcional) -->
    <section v-if="$slots.laboratorio" class="bloco laboratorio">
      <h2>Laboratório</h2>
      <slot name="laboratorio" />
    </section>

    <!-- 3. Pergunta-guia respondida -->
    <section class="bloco">
      <h2>Pergunta-guia</h2>
      <p class="enunciado">{{ pergunta }}</p>
      <slot name="resposta" />
    </section>

    <!-- 4. Fontes consultadas -->
    <footer class="bloco">
      <h2>Fontes consultadas</h2>
      <ul>
        <li v-for="fonte in fontes" :key="fonte.url">
          <a :href="fonte.url" target="_blank" rel="noopener">{{ fonte.nome }}</a>
        </li>
      </ul>
    </footer>
  </article>
</template>

<style scoped>
/* minmax(0, 1fr): impede que um filho largo (código) estique a página */
.secao {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--espaco-4);
}
.bloco h2 { margin-bottom: var(--espaco-1); }
.enunciado {
  padding: var(--espaco-2);
  border-left: 0.375rem solid var(--cor-marca);
  background: var(--cor-superficie);
}
.laboratorio {
  padding: var(--espaco-2);
  background: var(--cor-superficie);
  border: 2px solid var(--cor-tinta);
}
</style>
