<script setup>
import SecaoGuia from '../components/SecaoGuia.vue'

const codigo = `/* Dupla: coloquem aqui o exemplo de código comentado */`

const fontes = [
  { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/' },
]
</script>

<template>
  <SecaoGuia
    titulo="Imagens responsivas"
    pergunta="Ao abrir uma página, o texto aparece primeiro. Quando a imagem termina de carregar, ela empurra o texto para baixo. Por que isso acontece quando a imagem não tem width e height no HTML? Qual métrica do Google mede esse problema?"
    :codigo="codigo"
    :fontes="fontes"
  >
    <template #explicacao>
      <p class="pendente">Dupla: escrevam a explicação curta (para alguém do 1º semestre entender).</p>
    </template>

    <template #resposta>
      <p class="pendente">Dupla: respondam a pergunta-guia aqui.</p>
    </template>
  </SecaoGuia>
</template>
