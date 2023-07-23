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
    <div className="qwerty mx-auto px-4 ombrasotto">
      <div className="flex   md:flex-row justify-between items-center contorno">
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

     
        <div className="space-x-8 hidden md:block">
          <Link
            href="/about"
            className={`text-base  ${
              router.asPath === "/about"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Scopri{" "}
            {router.asPath === "/about" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
          

  
          <Link
            href="/progetto"
            className={`text-base  ${
              router.asPath === "/progetto"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Progetto{" "}
            {router.asPath === "/progetto" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
          
          
          <Link
            href="/sondaggio"
            className={`text-base  ${
              router.asPath === "/sondaggio"
                ? "text-gray-800 font-bold dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300 font-normal "
            }`}
          >
            Partecipa{" "}
            {router.asPath === "/sondaggio" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
        
        </div>

        <div className="space-x-4 flex flex-row items-center">
         
         
      
        </div>
      </div>
      <div>
  <div className="space-x-8 block2 md:hidden mt-4">
    <Link
      href="/about"
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      Scopri
    </Link>
    <Link
      href="/progetto"
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      Progetto
    </Link>
    <Link
      href="/sondaggio"
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      Sondaggio
    </Link>
  </div>
</div>

 
      </div>
  

  
  );
}



