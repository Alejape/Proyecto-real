import React from 'react'
import image1 from "./imagenes/Kinder.jpeg";
import image2 from "./imagenes/primaria.jpeg";
import image3 from "./imagenes/telesecundaria.jpeg";
import image4 from "./imagenes/Cobach.jpg";
import "./formacion.css";

const Formación  = () => {
  return (
    <div className ='articulos' >
    
       <br/>
       <br/>
  
       <br/>
       <br/>
  
  
               <h2> <i> 1. Jardín de niños Bertha von glumer y leyva </i></h2>
               <br/>
               <br/>
  
           En mis primeros años de vida, tuve la oportunidad de ser estudiante del jardín de niños
           bertha von glumer y leva, recuerdo que recibia clases de música y dibujo. Me gustaba mucho 
           por que tenian juegos, y muchos arboles 
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
<h2> <i> 2.   Primaria cuauhtemoc  </i></h2>
<br/>
<br/>
              A mis 5 años entré a la primaria, mi primaria era muy bonita, era muy grande y podía jugar mucho
              mis maestros eran muy buenas personas, la escuela tenia una biblioteca, tambien era muy bonita 
<br/>
<br/>


<div ></div>

<div id='imagen2'>
        <img src={image2} width="500" height="400" />
      </div>

      </div>

<br/>

<div id='articulos3'>
       
<br/>
<br/>
<br/>
<br/>
<h2> <i> 3.  Telesecundaria Jaime Torres Bodet 439  </i></h2>
<br/>
<br/>
              En la telesecundaria ingresé de segundo año, es amplia, me gustó por que el horario 
              era muy comodo, las clases eran interesantes ya que en ocasiones nos daban clases en 
              la televisión
<br/>
<br/>


<div ></div>

<div id='imagen3'>
        <img src={image3} width="500" height="400" />
      </div>

      </div>

<br/>
<div id='articulos4'>
       
<br/>
       <br/>
       <br/>
       <br/>
       <h2> <i> 4. Colegio de bachilleres Cobach plantel 10 </i></h2>
       <br/>
       <br/>
        La cuarta etapa fue en el cbta numero 42 el cual lleve la carrera de tecnico en sistema de produccion 
        pecuaria y lleve lo que fue quimico biologo, fue una etapa muy divertida, donde conci a mis mejores 
        amigos y experencias muy geniales, al igual que trabaje con muchos animales fue muy agradable haber cursado 
        el cbta.

       <br/>
       <br/>
       
       
       <div ></div>
       
       <div id='imagen4'>
               <img src={image4} width="500" height="400" />
             </div>
       
             </div>
       
       <br/>






    </div>
    
    
  )


  
}


export default Formación

