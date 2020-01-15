<template>
  <div class="card" >
          <label> {{titulo}} </label>
          <img :src="require(`./2017/${grafTipo}/${grafCurso}.jpeg`)" />
      </div>
</template>

<script>
export default {
name: 'card',

props: {titulo: String, grafTipo: String, grafCurso: String},

data(){
    return{

    }
}

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
</style>