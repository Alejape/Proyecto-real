import React from 'react'
import image1 from "./imagenes/niña.jpeg";
import image2 from "./imagenes/comigtan.jpeg";
import "./inicio.css";

const Inicio = () => {
  return (
    <div className ='articulos' >
    
       <br/>
       <br/>
  
       <br/>
       <br/>
  
  
               <h2> <i> 1. Alejandra Abigail López Pérez</i></h2>
               <br/>
               <br/>
  
               Soy estudiante de ingeniería en sistemas computacionales, 7 ° B, 19700052
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
<h2> <i> 2.  Comitán de Dominguez, Chiapas  </i></h2>
<br/>
<br/>
Actualmente vivo en Comitán, en el barrio de Candelaria
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


export default Inicio