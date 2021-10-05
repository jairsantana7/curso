let tbpacientes = document.querySelectorAll(".paciente");
let titulo = document.querySelector(".titulo");
let pessoa;
let imc = 0;
//titulo.addEventListener("click", mostrarMsg);

let buttonAdicionaPaciente = document.querySelector("#adicionar-paciente");

// capturar dados
/*
<tr class="paciente">
  <td class="info-nome">Erica</td>
  <td class="info-peso">54</td>
  <td class="info-altura">5000</td>
  <td class="info-gordura">14</td>
  <td class="info-imc">0</td>
</tr>;
*/

function cadastrarDados(name, peso, altura, gordura) {
  this.name = name;
  this.peso = peso;
  this.altura = altura;
  this.gordura = gordura;
}

console.log(buttonAdicionaPaciente);

//console.log(tbpacientes);

for (let i = 0; i < tbpacientes.length; i++) {
  let paciente = tbpacientes[i];

  let pesoValido = true;
  let alturaValido = true;

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;
  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  if (peso >= 1000 || peso <= 0) {
    let ivalidImc = paciente.querySelector(".info-imc");
    ivalidImc.textContent = "Peso Inválido";
    paciente.style.backgroundColor = "red";
    paciente.classList.add("ivalid");
    pesoValido = false;
  }
  if (altura >= 2000 || altura <= 0) {
    let ivalidImc = paciente.querySelector(".info-imc");
    ivalidImc.textContent = "Altura Inválido";
    paciente.style.backgroundColor = "orange";
    paciente.classList.add("ivalid");
    alturaValido = false;
  }

  if (pesoValido && alturaValido) {
    let imc = peso / (altura * altura);
    let imcPaciente = paciente.querySelector(".info-imc");
    imcPaciente.innerHTML = imc.toFixed(2);
  }
}

console.log(imc);
buttonAdicionaPaciente.addEventListener("click", function () {
  this.defaultPrevented;

  const name = document.querySelector("#nome").value;
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  const gordura = document.querySelector("#gordura").value;
  pessoa = new cadastrarDados(name, peso, altura, gordura);
  //let novaLinha = document.createElement("tr");

  let novaLinha = document.createElement("tr");
  novaLinha.classList.add("paciente");
  novaLinha.innerHTML = `  
  <td class="info-nome">${name}</td>
  <td class="info-peso">${peso}</td>
  <td class="info-altura">${altura}</td>
  <td class="info-gordura">${gordura}</td>
  <td class="info-imc">0</td>`;
  let tota = document.querySelector("#tabela-pacientes");
  tota.insertAdjacentHTML("afterbegin", novaLinha.innerHTML);
  //console.log(tota);
  console.log(novaLinha);
  console.log(pessoa);
});
