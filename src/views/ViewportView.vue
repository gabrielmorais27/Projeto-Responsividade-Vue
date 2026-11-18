<script setup>
import SecaoGuia from '../components/SecaoGuia.vue'

const codigo = `/* Dupla: coloquem aqui o exemplo de código comentado */`

const fontes = [
  { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/' },
]
</script>

<template>
  <SecaoGuia
    titulo="Por que responsividade importa"
    pergunta="Um site tem media queries bem escritas, mas não tem a meta tag viewport. No celular, ele aparece como a versão de computador, só que minúscula. Por que isso acontece, e o que a meta viewport muda?"
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
