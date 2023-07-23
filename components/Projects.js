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
       
              </p>


  </div>
</div>


    
      

      </div>
    );
}


