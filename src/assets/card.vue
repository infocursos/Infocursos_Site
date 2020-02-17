<template>
  <div class="card" >
          <label> {{titulo}} </label>
          <img class="img" v-if="aimg" :src="aimg" />
          <p class="texto" v-else >Ops, houve um erro ao carregar a imagem</p> <!-- msg para quando não se é possível carregar alguma img -->
      </div>
</template>

<script>
export default {
name: 'card',

props: {titulo: null, grafTipo: null, grafCurso: null, ano: null},

data(){
    return{
        excecoes: [38, 40, 45, 49, 51, 54, 56, 64, 90, 98, 100, 102], //cursos que possuêm falta de imgs

    }
},

methods: {
    carregaImagem: function(curso=this.grafCurso, tipo=this.grafTipo, ano=this.ano){ 
        try {
            return require(`@/assets/${ano}/${tipo}/${curso}.jpeg`);
        } catch(e) {
            self.console.log(e);
            return null;
        }
    }
},

computed: {
    aimg: function(){
        return this.carregaImagem();
    }
},


}
</script>

<style>
.card{
    
    display: inline-block;
    max-width: 500px;
    margin: 0 auto;
}

.card label{
    display: block;
    text-align: center;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 700;
}

.card img{
    
    max-width: 90%;
    
}

.card p{
    background-color: #f2f2f2;
    font-weight: bold;
    font-size: 14px; 

    padding: 20px;
    width: 160px;

    margin: 100px auto 
}
</style>