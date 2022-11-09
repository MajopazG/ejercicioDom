const title = document.getElementById("title");
const userName = document.getElementById("inputuserName");
const note_one = document.getElementById("inputNote_one");
const note_two = document.getElementById("inputNote_two");
const note_three = document.getElementById("inputNote_three");
const average = document.getElementById("average");
const textTemporary = document.getElementById("textTemporary");
const description2 = document.getElementById("description2");

window.addEventListener("DOMContentLoaded", mainView);

function mainView() {
  /* title.style.color = "blue";
  title.style.textShadow = "-2px -2px 1px violet";  */
  title.style.color = "purple";
  title.style.fontFamily = "impact";
  title.style.textShadow = "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000";
}


note_three.addEventListener("keyup", calculate);

function calculate(event) {
  if(event.code === "Enter"){
    if(note_one.value >=0 && note_one.value <= 5.0 && note_two.value >=0 && note_two.value <= 5.0 && note_three.value >=0 && note_three.value <= 5.0 ){
    textTemporary.textContent = "";
    definitive = ((parseFloat(note_one.value))*0.3 + (parseFloat(note_two.value))*0.3 + (parseFloat(note_three.value))*0.4);
    finalRounding = definitive.toFixed(2);
    average.textContent = "El promedio de las notas, del estudiante " + userName.value + " es de "+finalRounding;
    }
  }
}

note_three.addEventListener("keyup", casesOfTheNotas);

function casesOfTheNotas(event){
  if(event.code === "Enter"){
    if (finalRounding >= 4.6){
      description2.textContent = "El estudiante " + userName.value +" es considerado Excelente y gano la materia";
    }else if (finalRounding >= 3.5){
      description2.textContent = "El estudiante " + userName.value +" es considerado como Bueno y gano la materia";
    }else if (finalRounding >= 2.0){
      description2.textContent = "El estudiante " + userName.value + " perdio la materia pero puede recuperar";
    }else if (finalRounding >= 0){
      description2.textContent = "El estudiante " + userName.value + " perdio la materia y debera repetirla";
    }else{
      description2.textContent = "error";
    }
  }
}



