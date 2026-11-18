<script setup>
import SecaoGuia from '../components/SecaoGuia.vue'

const codigo = `/* Dupla: coloquem aqui o exemplo de código comentado */`

const fontes = [
  { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org/pt-BR/' },
]
</script>

<template>
  <SecaoGuia
    titulo="Unidades CSS"
    pergunta="Uma pessoa com baixa visão aumenta o tamanho da fonte nas configurações do navegador. O texto definido em px continua do mesmo tamanho, e o definido em rem aumenta. Por que essa diferença acontece?"
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
