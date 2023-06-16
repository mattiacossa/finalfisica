import React from "react";
import userData from "@constants/data";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import{useState} from 'react'
import Confetti from "react-confetti";


export default function Projects() {
 
 
 
 

  return (
    <div>
      <img src={userData.pollo}></img>
      

        
       
       
  
  
        <div className="dark:bg-gray-900">
          
          <div className="text-container max-w-6xl mx-auto pt-10">
            <p
              className="leading-loose text-2xl md:text-3xl font-semibold mx-4 text-center text-gray-800"
              style={{lineHeight: "35px"}}
            >
      È tutta logicaa
              
              </p>

              <p
              className="leading-loose text-1xl md:text-1xl font-semibold mx-4 text-center text-gray-800"
              style={{lineHeight: "20px"}}
            >
     In questo corso esplorerai le basi fondamentali della fisica e i principi dell'ingegneria attraverso enigmi e giochi.

Gli enigmi di questo capitolo si concentrano su massa, forza peso e forza opprimente (attrito). Mentre li risolvi, dovresti essere alla ricerca di schemi: principi generali che puoi utilizzare per fare previsioni nel mondo reale.

Questo è ciò che significa pensare come uno scienziato.
              
              </p>


  </div>
</div>


    
      

      </div>
    );
}


