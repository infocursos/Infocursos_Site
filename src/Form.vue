<template>
  <div id="form">
    <form id="formulario" @submit.prevent="validar">
      <div id="alerta" class="alert alert-danger" v-if="erro">{{mensagem}}</div>

      <label> Campus: </label>
      <Multiselect placeholder=" " v-model="dado.campus" :options="options.campi" :show-labels="false"></Multiselect>

      <label> Curso: </label>
      <Multiselect placeholder=" " v-model="dado.curso" :options="options.cursos" :show-labels="false"></Multiselect>

      <label> Turno: </label>
      <Multiselect placeholder=" " v-model="dado.turno" :options="options.turnos" :show-labels="false"></Multiselect>

      <label> Ano: </label>
      <Multiselect placeholder=" " v-model="dado.ano" :options="options.anos" :show-labels="false"></Multiselect>


      <input type="submit" class="btn btn-success" value="Pesquisar"> 
      <div class="btn btn-primary" @click="limparDados">Limpar dados</div>

    </form>

  </div>
</template>

<script>
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
        },

      erro: false,
      mensagem: ''
    }
  },


  methods: {

    validar: function(){
      
      if(!(this.dado.campus && this.dado.curso && this.dado.turno && this.dado.ano)){
        // avisar que todos os dados precisam estar preenchidos
        this.setErro('Alerta: Preencha todos os campos.');
      }
      else{
        this.setErro();
        this.$store.commit('setInfo', {cod: this.procurandoNemo().Cod, ...this.dado} )
      }
      
    },

    procurandoNemo: function(lista=this.lista, dado=this.dado){
      let teste = lista.find(function(e){
        return e.Campus==dado.campus && e.Curso==dado.curso && e.Turno==dado.turno && e.Ano==dado.ano;
      });

      return teste;
    },

    setErro: function(mensagem){
      mensagem ? this.erro=true : this.erro=false;
      this.mensagem = mensagem;
    },

    limparDados: function(){
      this.dado = {campus: '', curso: '', turno: '', ano: ''};
      this.setErro();
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

#alerta{
  margin-top: 15px;
}

</style>
