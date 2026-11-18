<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// largura que a pessoa escolhe com o controle deslizante (em px)
const larguraDesejada = ref(320)
const larguraReal = ref(0)
const colunas = ref(1)

const grade = ref(null)
let observador

// Pergunta ao navegador quantas colunas ele realmente criou
function medir() {
  if (!grade.value) return
  larguraReal.value = Math.round(grade.value.clientWidth)
  // o navegador devolve algo como "224px 224px 224px"
  const trilhas = getComputedStyle(grade.value).gridTemplateColumns
  colunas.value = trilhas.split(' ').length
}

onMounted(() => {
  observador = new ResizeObserver(medir) // roda sempre que o tamanho muda
  observador.observe(grade.value)
  medir()
})
onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <div class="lab">
    <label for="largura">
      Largura do contêiner: <strong>{{ larguraDesejada }}px</strong>
    </label>
    <input id="largura" v-model.number="larguraDesejada" type="range" min="240" max="1000" step="1" />

    <p class="leitura" role="status">
      O navegador criou <strong>{{ colunas }}</strong>
      {{ colunas === 1 ? 'coluna' : 'colunas' }} em {{ larguraReal }}px.
    </p>

    <!-- o palco rola por dentro: a página nunca ganha barra horizontal -->
    <div class="palco">
      <div ref="grade" class="grade" :style="{ width: larguraDesejada + 'px' }">
        <div v-for="n in 8" :key="n" class="card">{{ n }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab { display: grid; gap: var(--espaco-2); }
input[type='range'] { width: 100%; accent-color: var(--cor-cota); }
.leitura { margin: 0; font-family: var(--fonte-codigo); }

.palco { overflow-x: auto; padding: var(--espaco-1) 0; }

/* repeat(auto-fit, minmax(14rem, 1fr)) é a regra do laboratório.
   Usamos outline (não border/padding) para a largura medida ser exatamente a escolhida. */
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
  outline: 2px dashed var(--cor-cota);
}
.card {
  padding: var(--espaco-3) var(--espaco-2);
  background: var(--cor-fundo);
  border: 1px solid var(--cor-tinta);
  text-align: center;
  font-family: var(--fonte-titulo);
  font-weight: 700;
}
</style>
