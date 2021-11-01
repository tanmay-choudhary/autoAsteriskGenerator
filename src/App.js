
/*import React, { useState ,useEffect} from 'react';


export default function App() 
{ 



  const [string , setString] = useState("https://source.unsplash.com/collection/559527") ;

  const arr = ["https://source.unsplash.com/collection/559527","https://source.unsplash.com/collection/402504"];

  useEffect(() => {
    const interval = setInterval(() => {
       setString(
           function (prevLink){
             if(prevLink===arr[0])
             {
               return arr[1];
             }
             else
             {
               return arr[0];
             }
           }
       )
    }, 2000);
    return () => clearInterval(interval);
  }, []);





  return (

     
    <div>

      <img src = {string} /> 
     
    </div>


  )

}*/



























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












/*import React, { useState } from 'react';


export default function App() 
{ 
  const [count , setCount] = useState(" ") ;

  function Increment(){
    setCount(

      function (prevSymbol){
        return prevSymbol+ " *";
      }
    )
  }

  return (

     
    <div>

      <h1>

        {count }
      </h1>
      <button onClick = {Increment}> 
        incrememnt 
      </button>
    </div>


  )

}*/


/*import React, { useState } from 'react';


export default function App() 
{ 
  const [count , setCount] = useState(0) ;

  function Increment(){
    setCount(

      function (prevCount){
        return prevCount+1;
      }
    )
  }

  return (

     
    <div>

      <h1>

        {count }
      </h1>
      <button onClick = {Increment}> 
        incrememnt 
      </button>
    </div>


  )

}*/