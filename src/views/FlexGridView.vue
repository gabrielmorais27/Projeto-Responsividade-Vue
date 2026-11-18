<script setup>
import SecaoGuia from '../components/SecaoGuia.vue'
import LabLargura from '../components/labs/LabLargura.vue'

const codigo = `/* mobile-first: 1 coluna por padrão */
.cards {
  display: grid;
  /* cria quantas colunas de no mínimo 14rem couberem */
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}`

const fontes = [
  { nome: 'MDN — CSS Grid Layout', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout' },
  { nome: 'MDN — Flexbox', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout' },
]
</script>

<template>
  <SecaoGuia
    titulo="Flexbox e Grid"
    pergunta="Com grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)) e gap: 1rem, a partir de qual largura do contêiner os cards passam de 1 para 2 colunas?"
    :codigo="codigo"
    :fontes="fontes"
  >
    <template #explicacao>
      <p>
        Flexbox organiza itens em <strong>uma dimensão</strong> (uma linha ou uma coluna).
        Grid organiza em <strong>duas</strong> (linhas e colunas ao mesmo tempo).
      </p>
      <p class="pendente">Dupla: complete com justify-content, align-items, flex-wrap, gap e quando usar cada um.</p>
    </template>

    <template #laboratorio>
      <LabLargura />
    </template>

    <template #resposta>
      <p>
        Cada card precisa de no mínimo 14rem = 14 × 16 = <strong>224px</strong>.
        Para 2 colunas cabem 2 cards e 1 espaço (gap de 16px):
        2 × 224 + 16 = <strong>464px</strong>.
        Abaixo disso, 1 coluna; a partir de 464px, 2 colunas.
      </p>
      <p>
        Para n colunas: n × 224 + (n − 1) × 16.
        Teste no laboratório acima: arraste até 464px.
      </p>
    </template>
  </SecaoGuia>
</template>
