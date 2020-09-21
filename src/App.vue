<template>
  <div id="app">

    <div class="container">
      
<h1 class="mt-5 mb-5 text-muted">Mesure de la qualité de l'air</h1><hr class="mb-5">
<div class="row">
  <div v-for="city of cities" :key="city.index" class="col-sm-4"><!--mon composant city-->
  <City :city="city" @deleteCity="deleteCityAction"/>  <!--On execute la methode deleteCityAction-->
</div>
</div>
<CityForm @cityAddEvent="addCityAction"/>
<Alert v-if="showAlert" :type="typeAlert" :message="messageAlert"/>
<!--on appel ulevenement que lon a creer dans cityform-->


    </div>
</div>
</template>

<script>
import City from "@/components/City";
import CityForm from "@/components/CityForm";
import Alert from "@/components/Alert";

import { AirQualityService }  from "@/services/AirQuality.service";//servira ame dire si le nom de ville existe ou pas


export default {
 
  name: 'App',
  components:{
    City,
    CityForm,//je declare mon component
    Alert
  },
  data(){  //mes variables

    return {
        cities:[
        {name:"Lyon",iqa:null,image:"images/lyon.jpg"},//tableau avec 3 objets villes et iqa
        {name:"Paris",iqa:null,image:"images/paris2.jpg"},
        {name:"Brest",iqa:null,image:"images/brest.jpg"}
        ],
        typeAlert:"",
        messageAlert:"",
        showAlert:false
    };
    
  },
     methods: {
    async addCityAction(cityName){//la focntion prends en paramettre le nom de la ville
       const dataForNewCity= await AirQualityService.getAirQuality(cityName)//on verfie que le nom existe

    console.log(dataForNewCity);
    if(dataForNewCity!=="Unknown station"){//sile nom renter est diferend de unknow station je l'ajoute


    this.cities.push({
      name:cityName,
      iqa:null
    
    });//on rajoute un nomde ville a notre tableau 

   this.typeAlert="success";
   this.messageAlert="ville ajoutée avec succès";
   this.showAlert=true;
       }else{
          this.typeAlert="warning";
   this.messageAlert="ville non disponible";
   this.showAlert=true;
  
       }

    },
    deleteCityAction(city){
     // console.log("City",city);
     const indexToDelete=this.cities.findIndex ( //je recupere lindex de mon tableau des villes
       
       cityItem => cityItem.name === city.name
     );
     
 
  this.cities.splice(indexToDelete, 1);
    }
     }
};
</script>

<style>

</style>
