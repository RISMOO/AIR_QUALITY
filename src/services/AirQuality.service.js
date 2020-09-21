//service nous permet dce faire nos oeration http

//on importe notre fichier config et axios 
import{ config  }from "@/config/config.js"

import axios from "axios"

const baseUrl ="http://api.waqi.info/feed"//adresse de l'api
export const AirQualityService={

 async getAirQuality(cityName){//fonction qui va recuperer la qualité de l'air en fonction (de la ville en parametre)
 //async on le rajoue dans le dossier parent (mounted de city)

 try{

 
    const url = `${baseUrl}/${cityName}/?token=${config.token}`;  //lurl de la recherche
    const result = await axios.get(url);  //await 

 return result.data.data;
 }catch(error){
    alert("error !") ;
    
 }
  }  
};

//ensuite on importe ce service dans city.vue