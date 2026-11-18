<script setup>
import { RouterLink } from 'vue-router'
import { useGuiaStore } from '../stores/guia'
import CotaLarga from '../components/CotaLarga.vue'

const guia = useGuiaStore()
</script>

<template>
  <section class="inicio">
    <CotaLarga />
    <h1>Largura Livre</h1>
    <p class="lead">
      O número acima é a largura da sua janela agora. Estique, encolha, gire o celular: ele muda.
      Um site responsivo é um site que aguenta qualquer número.
    </p>

    <ul class="indice">
      <li v-for="secao in guia.secoes" :key="secao.to">
        <RouterLink :to="secao.to">
          <strong>{{ secao.texto }}</strong>
          <span>{{ secao.resumo }}</span>
          <em v-if="guia.visitadas.includes(secao.to)">visitada</em>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.lead { font-size: 1.125rem; max-width: 36rem; }
.indice {
  list-style: none;
  margin: var(--espaco-4) 0 0;
  padding: 0;
  display: grid;
  gap: var(--espaco-1);
}
.indice a {
  display: grid;
  gap: 0.125rem;
  padding: var(--espaco-2);
  color: var(--cor-tinta);
  background: var(--cor-superficie);
  border: 2px solid var(--cor-tinta);
  text-decoration: none;
}
.indice a:hover { background: var(--cor-marca); }
.indice em { font-size: 0.875rem; color: var(--cor-tinta-suave); }

@media (min-width: 48em) {
  .indice { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
