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
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">
        <div className="flex flex-col">
  
          <div className="flex items-center">
          <div className="qwerty">
          <img src={userData.pollo}></img>
 
</div>
  <div>
    <h1 className="font-semibold text-xl dark:text-gray-100">
      {userData.name}
    </h1>
    <p className="text-base font-light text-gray-500 dark:text-gray-300">
      {userData.designation}
    </p>
  </div>
</div>

        </div>

     

 
      </div>
  

    </div>
  );
}
