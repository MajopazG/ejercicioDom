const title = document.getElementById("title");
const name = document.getElementById("inputName");
const note_one = document.getElementById("inputNote_one");
const note_two = document.getElementById("inputNote_two");
const note_three = document.getElementById("inputNote_three");
const average = document.getElementById("average");
const textTemporary = document.getElementById("textTemporary");
const description1 = document.getElementById("description1");
const description2 = document.getElementById("description2");

window.addEventListener("DOMContentLoaded", mainView);

function mainView() {
  /* title.style.color = "blue";
  title.style.textShadow = "-2px -2px 1px violet";  */
  title.style.color = "purple";
  title.style.fontFamily = "impact";
  title.style.textShadow = "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
}

note_one.addEventListener("keyup", calculate);
note_two.addEventListener("keyup", calculate);
note_three.addEventListener("keyup", calculate);

function calculate(event) {
  if(event.code === "Enter"){
    textTemporary.textContent = "";
     definitive = ((parseFloat(note_one.value))*0.3 + (parseFloat(note_two.value))*0.3 + (parseFloat(note_three.value))*0.4);
     finalRounding = definitive.toFixed(1);
     average.textContent = "El promedio de las notas, del estudiante " + name.value + " es de "+finalRounding;
      if(finalRounding >= 3.5){
        description1.textContent = "Usted gano la materia";  /* > es mayor */
        } else{
        description1.textContent = "Usted no gano la materia"; 
        }
  }
}

note_one.addEventListener("keyup", casesOfTheNotas);
note_two.addEventListener("keyup", casesOfTheNotas);
note_three.addEventListener("keyup", casesOfTheNotas);

function casesOfTheNotas(event){
  if(event.code === "Enter"){
    if (finalRounding >= 4.6){
      description2.textContent = "El estudiante " + name.value +" es considerado Excelente";
    }else if (finalRounding >= 3.5){
      description2.textContent = "El estudiante " + name.value +" es considerado como Bueno";
    }else if (finalRounding >= 2.0){
      description2.textContent = "El estudiante " + name.value + " perdio la materia pero puede recuperar";
    }else if (finalRounding >= 0){
      description2.textContent = "El estudiante " + name.value + " perdio la materia y debera repetirla";
    }else{
      description2.textContent = "error";
    }
  }
}



