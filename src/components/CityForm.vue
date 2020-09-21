<template>
   
<div class="row for-group ajouterVille">
    <div class="col-sm-2">
        Ajouter une ville
    </div>
    <div class="col-sm-3 mb-5">
        <input 
        type="text"
         id="cityField"
       
          class="form-control"
           v-model="newCity"
           /> <!--on recupere la valeur de l'input -->
    </div>
    <div class="col-sm-2">
        <b-button @click="addCityAction" variant="success">Ajouter</b-button>
    </div>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
            newCity: null
            };
        },


        
        //on creer une nouvelle mùethod pour ajouter une ville
        methods: {
            addCityAction(){
                if(this.newCity){
                    console.log("ajouter",this.newCity);
                this.$emit("cityAddEvent",this.newCity)//on emet un evenment on lui envoi newcity en parametre
                //on recupere l'evenemnt dans notre app.vue
              

            }
        }
    }
 };
</script>

<style lang="scss" scoped>
.ajouterVille{

    margin-top: 2em;
    color: azure;
    font-size: 1.2em;
}
</style>