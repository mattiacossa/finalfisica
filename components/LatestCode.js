import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";


export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories);
  
//colore terziario
  return (
    <section className="-mt-30">


          <div className="bg-[#aac4a7]  dark:bg-gray-900 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10 pt-20">
          <h1 className="text-7xl lg:text-9xl max-w-lg font-bold text-[#395756] my-0 md:my-0 dark:text-gray-600 text-center lg:text-left">
          HEJ!*
          </h1>

   


          <div className="max-w-6xl mx-auto ">
            
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10">
        




   
        </div>
        
      </div>    

      


  
    
        </div>

       

      </div>
   
      <div class="block"></div>
    <div class="block"></div>









      </div>

 
    </section>
  );


}

