

 	function compras ()
 	 {
 	let opcion = menuDeCompra();
    let unidadesDeCompra = 0;
    if(opcion!=6)
    {
      venderProducto(opcion);
    }
    else
    {
       alert("MUCHAS GRACIAS POR SU COMPRA");
    }
   
    function menuDeCompra()
    {
       return prompt(`Seleccione una opcion: 
                     1. Clavo $1,5
                     2. Martillo $150
                     3. Lija $5
                     4. Serrucho $250
                     5. Arandela $2
                     6. FIN`);
    }

    function venderProducto(opcion)
    {
       switch (opcion) 
       {
          

         case "1":
         {
               unidades(1.5)
               break;
         }
         case "2":
         {
               unidades(150)
               break;
         }

         case "3":
         {
               unidades(5)
               break;
         }

         case "4":
         {
               unidades(250)
               break;
         }

         case "5":
         {
               unidades(2)
               break;
         }

         default:
         {
            alert("opcion invalida")
            return  compras();
         }
             
       }   
    }
       
    function unidades(precio)
    {
            while(unidadesDeCompra==0)
            {
               let cantidad = Number(prompt("Cantidad de unidades de compra"));
               
               if(cantidad ==0)
               {
                  alert("La cantidad debe ser mayor a cero")
               }
               else{
                  unidadesDeCompra+=cantidad;
               }
            }
            
               let cambio = unidadesDeCompra*precio;
               alert("el importe de su compra es AR$ " + cambio);
               return compras();      
    }
    }

    compras()
     
