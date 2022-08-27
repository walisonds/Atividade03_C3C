
function verificarTriangulo(x, y, z)
{
     
    //triangulo equilatero
    if (x == y && y == z){
        document.write("Equilátero");
 
    // triangulo isoceles
    }else if (x == y || y == z || z == x){
        document.write("Isoceles);
    
    //escaleno
    }else {
        document.write("Escaleno");}
}
