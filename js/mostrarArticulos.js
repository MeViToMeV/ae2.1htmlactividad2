//Jonathan Díaz Palma 1ºASIR TARDE
function mostrarOcultar( opcion ) 
{  
 
  let contenido  = document.getElementById(opcion); 

 
   let ocultar = document.getElementById("x" + opcion); 
  
  if (contenido.style.display =='none') 
  { 
     ocultar.innerHTML = ' Contraer'; 
     contenido.style.display ="block"; 
  } 
  else 
  { 
    ocultar.innerHTML = ' Seguir leyendo '; 
    contenido.style.display ='none'; 
  } 
} 

