import React from 'react'
import image1 from "./imagenes/parcels.jpg";
import image2 from "./imagenes/Rick.jpeg";
import "./pasatiempo.css";

const Pasatiempos = () => {
  return (
    <div className ='articulos' >
    
       <br/>
       <br/>
  
       <br/>
       <br/>
  
  
               <h2> <i> 1. Escuchar música (Parcels)</i></h2>
               <br/>
               <br/>
  
               escuchar musica, Una vez en la capital alemana, el grupo empezó a esmerilar su propuesta,
               que poco tenía con su país de origen o con su nuevo hogar: Parcels sintoniza con la música bailable, 
               con un pie en el pop y otro en la música disco, y sobre ese andamiaje agrega arreglos vocales.
                 <br/>
              
   

       <div id='imagen1'>
        <img src={image1} width="500" height="400"/>
      </div>

      <br/>

  
<br/>



<div id='articulos2'>
       
<br/>
<br/>
<br/>
<br/>
<h2> <i> 2.  Rick y Morty  </i></h2>
<br/>
<br/>
La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty,
 quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. 
<br/>
<br/>


<div ></div>

<div id='imagen2'>
        <img src={image2} width="500" height="400" />
      </div>

      </div>




    </div>
    
    
  )


  
}


export default Pasatiempos

