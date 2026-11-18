import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export function useViewport() {
  const largura = ref(window.innerWidth)
  const atualizar = () => { largura.value = window.innerWidth }

  onMounted(() => window.addEventListener('resize', atualizar))
  onBeforeUnmount(() => window.removeEventListener('resize', atualizar))

  // Precisam ser iguais aos breakpoints do CSS (48em = 768px, 64em = 1024px)
  const breakpoint = computed(() => {
    if (largura.value >= 1024) return 'desktop'
    if (largura.value >= 768) return 'tablet'
    return 'celular'
  })

  return { largura, breakpoint }
}
