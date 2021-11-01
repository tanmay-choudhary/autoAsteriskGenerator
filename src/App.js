
import React, { useState ,useEffect} from 'react';


export default function App() 
{ 



  const [string , setString] = useState("") ;



  useEffect(() => {
    const interval = setInterval(() => {
       setString(
         function (prevString){

          return prevString + " *";

         }
       )
    }, 2000);
    return () => clearInterval(interval);
  }, []);





  return (

     
    <div>

      <h1>

        {string}
      </h1>
     
    </div>


  )

}







