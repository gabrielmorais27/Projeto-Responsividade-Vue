<script setup>
import SecaoGuia from '../components/SecaoGuia.vue'

const codigo = `/* Dupla: coloquem aqui o exemplo de código comentado */`

const fontes = [
  { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/' },
]
</script>

<template>
  <SecaoGuia
    titulo="Boas práticas em projetos Vue"
    pergunta="Uma lista de animais é exibida com v-for, sem :key, e cada item tem um campo de texto. A pessoa digita algo no campo do segundo animal, e em seguida o primeiro animal é removido da lista. O que pode acontecer com o texto digitado, e por quê?"
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
