alert("¡Te damos la bienvenida a la tienda! Usted podrá elegir 3 productos para su compra. Si el valor de compra es igual o mayor a $12 recibirá un descuento en el total.")

let prod1 = prompt(`Elija la opción de su primer producto:
1: Manzana - $2
2: Frambuesa - $6
3: Sandía - $4`);

if (prod1 == "1") {
    prod1 = 2;
    fruit1 = "Manzana";
    }
    else if (prod1 == "2"){
    prod1 = 6;
    fruit1 = "Frambuesa"
    }
    else if (prod1 == "3"){
    prod1 = 4;
    fruit1 = "Sandía"
    }
    else {
    prod1 = 0;
    fruit1 = "NA"
    alert("No existen productos asociados al número seleccionado.");
    }

let prod2 = prompt(`Elija la opción de su segundo producto:
1: Manzana - $2
2: Frambuesa - $6
3: Sandía - $4`);
    
if (prod2 == "1") {
    prod2 = 2;
    fruit2 = "Manzana";
    }
    else if (prod2 == "2"){
    prod2 = 6;
    fruit2 = "Frambuesa"
    }
    else if (prod2 == "3"){
    prod2 = 4;
    fruit2 = "Sandía"
    }
    else {
    prod2 = 0;
    fruit2 = "NA"
    alert("No existen productos asociados al número seleccionado.");
    }

let prod3 = prompt(`Elija la opción de su tercer producto:
1: Manzana - $2
2: Frambuesa - $6
3: Sandía - $4`);
            
if (prod3 == "1") {
    prod3 = 2;
    fruit3 = "Manzana";
    }
    else if (prod3 == "2"){
    prod3 = 6;
    fruit3 = "Frambuesa"
    }
    else if (prod3 == "3"){
    prod3 = 4;
    fruit3 = "Sandía"
    }
    else {
    prod3 = 0;
    fruit3 = "NA"
    alert("No existen productos asociados al número seleccionado.");
    }     

resultado = Number(prod1 + prod2 + prod3)   

if (resultado >= 12){
alert (`¡Felicidades! Se te aplicó un 10% al total de tu compra.
Resumen de compra: ${fruit1} + ${fruit2} + ${fruit3}. 
Monto total a pagar: $${resultado - (resultado*0.1)}.`);
}
else{
alert (`Resumen de compra: ${fruit1} + ${fruit2} + ${fruit3}. 
Monto total a pagar: $${resultado}.`);
}