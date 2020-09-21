<template>
    <div>
  <b-card :title="city.name" :class="color"
          :img-src='city.image'>
     <b-card-text v-if="!loading">
   <h5 class="font-weight-light text-white"> Qualité de l'air : {{city.iqa}}</h5>
     </b-card-text>
   
    <b-button @click="deleteCityAction" variant="dark">Supprimer</b-button>
      <b-spinner v-if="loading" variant="primary" label="Spinning"></b-spinner>
  </b-card>
    
 </div>
</template>

<script>
//service
 import {AirQualityService} from "@/services/AirQuality.service"

    export default {  //je recupere mes villes
        props:{
         city: {
             type:Object,
             default: null

         },

    },
      data(){
          return {
              color:"",  //initilise ma variable color
              loading:false
           
          }

      },
    async mounted (){//au chargement de ma page avec //async
    this.loading=true;//loading au demarage
   const infosCity = await AirQualityService.getAirQuality(this.city.name);//dans une instance on ajoute un this//
   this.loading=false;
     //je stoque mon resultat dans une constante infosCity
this.city.iqa=infosCity.aqi
          if(this.city.iqa <30 )this.color="Pollution-Faible"//la classe prendra comme proprtiété polution faible
          if(this.city.iqa >=30 && this.city.iqa <=50) this.color="Pollution-Moyenne"//la classe prendra comme proprtiété polution faible
          if(this.city.iqa > 50) this.color="Pollution-Forte"//la classe prendra comme proprtiété polution faible
     },
     methods: {
       deleteCityAction(){
   this.$emit("deleteCity", this.city)//evenment de suppression

       }
     }
    };

</script>

<style lang="scss" scoped>
.Pollution-Faible
{
background:rgba(17, 144, 153, 0.411);
margin-bottom: 3rem;;
}

.Pollution-Moyenne


{

   background: rgba(156, 110, 41, 0.5); 

    
}



.Pollution-Forte

{

    background: rgba(0, 0, 0, 0.685);
    color: rgba(240, 255, 255, 0.616);
    font-weight: light;
   
}


</style>