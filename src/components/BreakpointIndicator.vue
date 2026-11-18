<script setup>
import { useViewport } from '../composables/useViewport'
const { largura, breakpoint } = useViewport()
</script>

<template>
  <div class="indicador" role="status" aria-live="off">
    {{ largura }}px · {{ breakpoint }}
  </div>
</template>

<style scoped>
.indicador {
  position: fixed;
  right: var(--espaco-1);
  bottom: var(--espaco-1);
  padding: 0.25rem 0.75rem;
  background: var(--cor-cota);
  color: #fff;
  font-family: var(--fonte-codigo);
  font-size: 0.8125rem;
  z-index: 10;
}
</style>
