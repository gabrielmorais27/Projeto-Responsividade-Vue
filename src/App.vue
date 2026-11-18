<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useGuiaStore } from './stores/guia'
import BreakpointIndicator from './components/BreakpointIndicator.vue'

const guia = useGuiaStore()
const route = useRoute()
const menuAberto = ref(false)

// toda vez que a rota muda: fecha o menu e marca a seção como visitada
watch(
  () => route.path,
  (caminho) => {
    menuAberto.value = false
    guia.marcarVisitada(caminho)
  },
  { immediate: true },
)
</script>

<template>
  <header class="topo">
    <RouterLink to="/" class="marca">Largura Livre</RouterLink>

    <button
      class="botao-menu"
      type="button"
      :aria-expanded="menuAberto"
      aria-controls="menu-principal"
      @click="menuAberto = !menuAberto"
    >
      {{ menuAberto ? 'Fechar menu' : 'Abrir menu' }}
    </button>

    <nav id="menu-principal" :class="['menu', { aberto: menuAberto }]" aria-label="Seções do guia">
      <RouterLink v-for="secao in guia.secoes" :key="secao.to" :to="secao.to">
        {{ secao.texto }}
      </RouterLink>
    </nav>
  </header>

  <main class="conteudo">
    <RouterView />
  </main>

  <BreakpointIndicator />
</template>

<style scoped>
/* ---------- CELULAR (base, sem media query) ---------- */
.topo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--espaco-1);
  padding: var(--espaco-2);
  background: var(--cor-tinta);
  color: var(--cor-fundo);
}
.marca {
  font-family: var(--fonte-titulo);
  font-size: 1.375rem;
  font-weight: 800;
  color: var(--cor-marca);
  text-decoration: none;
}
.botao-menu {
  padding: 0.5rem 1rem;
  font: inherit;
  color: var(--cor-tinta);
  background: var(--cor-marca);
  border: 0;
  cursor: pointer;
}
.menu {
  display: none; /* escondido no celular: o botão abre */
  flex-direction: column;
  width: 100%;
  padding-top: var(--espaco-1);
}
.menu.aberto { display: flex; }
.menu a {
  padding: 0.75rem 0;
  color: var(--cor-fundo);
  text-decoration: none;
  border-top: 1px solid var(--cor-tinta-suave);
}
.menu a.router-link-active { color: var(--cor-marca); font-weight: 700; }

.conteudo {
  max-width: var(--largura-texto);
  margin: 0 auto;
  padding: var(--espaco-3) var(--espaco-2) var(--espaco-5);
}

/* ---------- TABLET PARA CIMA ---------- */
@media (min-width: 48em) {
  .topo { padding: var(--espaco-2) var(--espaco-4); }
  .botao-menu { display: none; }
  .menu {
    display: flex;
    flex-direction: row;
    width: auto;
    gap: var(--espaco-3);
    padding-top: 0;
  }
  .menu a { padding: 0.25rem 0; border-top: 0; }
  .menu a.router-link-active { box-shadow: inset 0 -0.2rem var(--cor-marca); }
  .conteudo { padding-top: var(--espaco-4); }
}
</style>
