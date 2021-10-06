function calImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
  //return console.log(imc);
}

console.log(calImc(30, 3.0));
