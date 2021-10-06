//titulo.addEventListener("click", mostrarMsg);
let pessoa;
let buttonAdicionaPaciente = document.querySelector("#adicionar-paciente");
let form = document.querySelector("form");

//Z

buttonAdicionaPaciente.addEventListener("click", function (event) {
  event.preventDefault();
  let pessoa = getFormulario(form);
  const pacienteTR = montaTabela(pessoa);

  if (validaAltura(form.altura.value) || validaPeso(form.peso.value)) {
    alert("Erro de validação! verifique os dados digitado e tente novamente");
    return;
  }

  //adicionar na table
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTR);
  console.log(pacienteTR);

  form.reset();
});

//cria linhas

function montaTabela(pessoa) {
  let pacienteTd = document.createElement("tr");
  pacienteTd.classList.add("paciente");

  pacienteTd.appendChild(montaTD(pessoa.nome, "info-nome"));
  pacienteTd.appendChild(montaTD(pessoa.peso, "info-peso"));
  pacienteTd.appendChild(montaTD(pessoa.altura, "info-altura"));
  pacienteTd.appendChild(montaTD(pessoa.gordura, "info-gordura"));
  pacienteTd.appendChild(montaTD(pessoa.imc, "info-imc"));

  return pacienteTd;
}

//captura dados
function getFormulario(form) {
  const pessoa = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calImc(form.peso.value, form.altura.value)
  };
  return pessoa;
}

function montaTD(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

//console.log(getFormulario(form));

function validaPeso(peso) {
  if (peso >= 1000 || peso <= 0) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 2000 || altura <= 0) {
    return true;
  } else {
    return false;
  }
}

//console.log(validaPeso(50));
