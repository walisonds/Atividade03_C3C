<!DOCTYPE html>
<html>
 <head>
   <title>Cálculo de raízes</title>
       Equação do 2o grau: ax² + bx + c = 0  <br />
    Coeficiente a:<input id="num1" type="number"> <br />
    Coeficiente b:<input id="num2" type="number"> <br />
    Coeficiente c: <input id="num3" type="number"> <br />
    <button onclick="raiz()">Calcular raízes</button><br />

    <div id='resposta'></div>

    <script type="text/javascript">
     function raiz(){
       var a = parseFloat(document.getElementById("num1").value);
       var b = parseFloat(document.getElementById("num2").value);
       var c = parseFloat(document.getElementById("num3").value);
       ans = document.getElementById('resposta');

       var delta = (b*b) - 4*a*c;

       if (delta>0){
        raiz1 = (-b + Math.sqrt(delta) )/(2*a);
        raiz2 = (-b - Math.sqrt(delta) )/(2*a);

        ans.innerHTML = "Raiz 1: " + raiz1 + "<br/>" +"Raiz 2: " + raiz2;
       }else{
        if (delta==0){
         raiz = (-b + Math.sqrt(delta) )/(2*a);
         ans.innerHTML="Raiz dupla: " + raiz;
        } else{
          ans.innerHTML="Delta é negativo";
        }
       }
     }
    </script>

 </head>
</html>
