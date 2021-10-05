let tbpacientes = document.querySelector(".paciente");
let paciente = document.querySelector(".paciente");
let tdPeso = paciente.querySelector(".info-peso");
let peso = tdPeso.textContent;
let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

if (peso > 1000 || peso < 0) {
  console.log("Peso Inválido");
}
if (altura > 2000 || altura < 0) {
  console.log("Altura Inválido");
}
let imc = peso / (altura * altura);
let imcPaciente = paciente.querySelector(".info-imc");
imcPaciente.innerHTML = imc;

//console.log(imcPaciente);

for (let index = 0; index < tbpacientes.length; index++) {
  const element = tbpacientes[index];
  //console.log(element[index]);
}
