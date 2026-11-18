<script setup>
defineProps({
  codigo: { type: String, required: true },
  linguagem: { type: String, default: 'css' },
})
</script>

<template>
  <pre class="codigo" :data-lang="linguagem" tabindex="0"><code>{{ codigo }}</code></pre>
</template>

<style scoped>
.codigo {
  margin: 0;
  padding: var(--espaco-2);
  background: var(--cor-tinta);
  color: var(--cor-fundo);
  font-size: 0.8125rem;
  line-height: 1.6;
  max-width: 100%;
  overflow-x: auto; /* rola só dentro do bloco, nunca a página */
}
</style>
