import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGuiaStore = defineStore('guia', () => {
  // lista única de seções: o menu e a home leem daqui
  const secoes = [
    { to: '/viewport', texto: 'Viewport', resumo: 'Por que responsividade importa' },
    { to: '/unidades', texto: 'Unidades', resumo: 'px, rem, em, %, fr, vw, vh, dvh, ch' },
    { to: '/flex-grid', texto: 'Flex e Grid', resumo: 'Uma dimensão ou duas' },
    { to: '/imagens', texto: 'Imagens', resumo: 'Imagens que não quebram o layout' },
    { to: '/boas-praticas', texto: 'Boas práticas', resumo: 'Organização e desempenho em Vue' },
    { to: '/desafio', texto: 'Desafio', resumo: 'Teste o que você aprendeu' },
  ]

  const visitadas = ref([])
  function marcarVisitada(caminho) {
    if (!visitadas.value.includes(caminho)) visitadas.value.push(caminho)
  }

  return { secoes, visitadas, marcarVisitada }
})
