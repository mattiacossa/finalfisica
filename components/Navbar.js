import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";




export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="qwertyq mx-auto px-4 ">
      <div className="flex   md:flex-row justify-between items-center">
        <div className="flex flex-col">
  
          <div className="flex items-center">
          <div className="riduzioneimmagine">
          <img src={userData.pollo}></img>
 
</div>
  <div>
    <h1 className="font-semibold text-xl dark:text-gray-100">
      {userData.name}
    </h1>
    
  </div>
</div>

        </div>

     

 
      </div>
  

    </div>
  );
}
