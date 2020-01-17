<template>
  <div id="planilhas" class="center">
      <h3 id="titulo"> {{ getTitulo }}</h3>
      <div id="dados">
        <card class="card" v-for="itens in labels" :key="itens.id" :titulo="itens.nome" :grafTipo="itens.sigla" :grafCurso="String(getCod)" />
      </div>
  </div>
</template>

<script>
import card from './assets/card';

export default {
name: 'outro',
components:{
    card
},



data(){
    return {
        labels: [
            { nome: 'Distribuição das Idades - Alunos Ingressantes',             sigla: 'BIN' },
            { nome: 'Distribuição das Idades - Alunos Matriculados',             sigla: 'BIM' },
            { nome: 'Distribuição dos Alunos Ingressantes por Sexo',             sigla: 'PIN' },
            { nome: 'Distribuição dos Alunos Matriculados por Sexo',             sigla: 'PIM' },
            { nome: 'Distribuição dos Alunos Ingressantes por Tipo de Ingresso', sigla: 'BAR' },
            { nome: 'Distribuição dos Alunos Ingressantes por Tipo de Vaga',     sigla: 'PIT' },
            { nome: 'Nota de Corte no SISU por Tipo de Vaga',                    sigla: 'SIS' }
        ],


    }
},
computed: {
    getCod(){
        return this.$store.getters.getInfo.cod
    },
    getTitulo(){
        return this.$store.getters.getInfo.titulo
    }
}
}
</script>

<style scoped>

    h3 {
        text-align: center;
        font-size: 30px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        margin-top: 1em;
        margin-bottom: 1em
    }

    

    #dados{
        

        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        
        
    }

    .card{
        flex: 1 1 500px;
        margin: 10px;
        
        align-self: stretch;
        margin: 10px auto
    }

    .center{
        margin: 0 auto
    }
</style>