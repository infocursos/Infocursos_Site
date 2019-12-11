<template>
  <div id="form">
    <form id="formulario" @submit="validar">
      <label> Campus: </label>
      <!--<vSelect class="vSelect" :options="options.campi" @input="(event)=>{dado.campus=event}" />-->
      <Multiselect v-model="dado.campus" :options="options.campi" :show-labels="false"></Multiselect>

      <label> Curso: </label>
      <!--<vSelect class="vSelect" :options="options.cursos" @input="(event)=>{dado.curso=event}" />-->
      <Multiselect v-model="dado.curso" :options="options.cursos" :show-labels="false"></Multiselect>

      <label> Turno: </label>
      <!--<vSelect class="vSelect" :options="options.turnos" @input="(event)=>{dado.turno=event}" />-->
      <Multiselect v-model="dado.turno" :options="options.turnos" :show-labels="false"></Multiselect>

      <label> Ano: </label>
      <!--<vSelect class="vSelect" :options="options.anos" @input="(event)=>{dado.ano=event}" />-->
      <Multiselect v-model="dado.ano" :options="options.anos" :show-labels="false"></Multiselect>


      <input type="submit" class="btn btn-success" value="Pesquisar"> 
      <button class="btn btn-primary" >Limpar dados</button>

    </form>

  </div>
</template>

<script>
//import vSelect from 'vue-select';
//import 'vue-select/dist/vue-select.css';

import Multiselect from 'vue-multiselect';

import jason from './assets/relacaoDeCursos.json';


export default {
  name: 'Form',
  components: {
    Multiselect
  },

  created() {
    this.options = this.atualizaLista();

},

beforeUpdate(){
  //botar alterações dos options aqui
      this.options = this.atualizaLista();

},
  data(){
    return {
      dado: {campus: '', curso: '', turno: '', ano: ''},
      lista: jason,
      options:{
        'campi': null,
        'cursos': null,
        'turnos': null,
        'anos': null
        }
    }
  },


  methods: {

    validar: function(e){
      e.preventDefault()
    },

    limparDados: function(){
      this.dado = {campus: '', curso: '', turno: '', ano: ''}
    },

    removeCopia: function(arr){
      return arr.filter((este, i) => arr.indexOf(este) === i);
    },
    
    atualizaLista: function(dados = this.dado, lista = this.lista){
      
      //listar opções dos campi disponíveis
      let campi =  lista.filter(function(obj){return dados.curso ? dados.curso == obj.Curso : true})
                        .filter(function(obj){return dados.turno ? dados.turno == obj.Turno : true})
                        .filter(function(obj){return dados.ano ? dados.ano == obj.Ano : true})
                        .map(function(obj){return obj.Campus});

      let cursos = lista.filter(function(obj){return dados.campus ? dados.campus == obj.Campus : true})
                        .filter(function(obj){return dados.turno ? dados.turno == obj.Turno : true})
                        .filter(function(obj){return dados.ano ? dados.ano == obj.Ano : true})
                        .map(function(obj){return obj.Curso});

      let turnos = lista.filter(function(obj){return dados.curso ? dados.curso == obj.Curso : true})
                        .filter(function(obj){return dados.campus ? dados.campus == obj.Campus : true})
                        .filter(function(obj){return dados.ano ? dados.ano == obj.Ano : true})
                        .map(function(obj){return obj.Turno});

      let anos = lista.filter(function(obj){return dados.curso ? dados.curso == obj.Curso : true})
                      .filter(function(obj){return dados.turno ? dados.turno == obj.Turno : true})
                      .filter(function(obj){return dados.campus ? dados.campus == obj.Campus : true})
                      .map(function(obj){return obj.Ano});


      
      return {campi: this.removeCopia(campi), cursos: this.removeCopia(cursos), turnos: this.removeCopia(turnos), anos: this.removeCopia(anos)};

    }

  }
};

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
#form label {
  font-weight: 700;
  line-height: 20px;
  margin-top: 15px; 
}

/** Classe do 'select' */
.multiselect{
  height: 42px;
}

/** Classe do dropdown */
.multiselect__content-wrapper{
  overflow-x: hidden;
  font-size: 15px;
}

/** Classe do item sobreposto */
.multiselect__option--highlight{
  background-color: rgb(242, 242, 242);
  color: #333;
}

/** Classe para o item selecionado */
.multiselect__option--selected.multiselect__option--highlight{
  background-color: rgba(242, 242, 242, 0.5);
  color: #333;
}

</style>
