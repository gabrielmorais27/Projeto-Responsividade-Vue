<script setup>
import { useViewport } from '../composables/useViewport'
const { largura } = useViewport()
</script>

<template>
  <!-- Linha de cota, como em desenho técnico: mede a janela de ponta a ponta -->
  <figure class="cota">
    <div class="linha" aria-hidden="true"></div>
    <figcaption>
      <span class="numero">{{ largura }}</span><span class="unidade">px</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.cota { margin: 0 0 var(--espaco-3); }
.linha {
  position: relative;
  height: 0.75rem;
  border-left: 2px solid var(--cor-cota);
  border-right: 2px solid var(--cor-cota);
}
.linha::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 2px solid var(--cor-cota);
}
figcaption { margin-top: var(--espaco-1); line-height: 1; }
.numero {
  font-family: var(--fonte-titulo);
  font-size: clamp(4rem, 22vw, 9rem);
  font-weight: 800;
  color: var(--cor-cota);
}
.unidade {
  margin-left: 0.5rem;
  font-family: var(--fonte-codigo);
  font-size: 1.25rem;
  color: var(--cor-tinta-suave);
}
</style>
