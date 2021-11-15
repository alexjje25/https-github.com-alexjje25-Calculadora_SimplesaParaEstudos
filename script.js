onload = () => 
{
  document.querySelector('#bt-8').onclick = () => digito(8);
  document.querySelector('#bt-7').onclick = () => digito(7);
  document.querySelector('#bt-6').onclick = () => digito(6);
  document.querySelector('#bt-5').onclick = () => digito(5);
  document.querySelector('#bt-4').onclick = () => digito(4);
  document.querySelector('#bt-3').onclick = () => digito(3);
  document.querySelector('#bt-2').onclick = () => digito(2);
  document.querySelector('#bt-1').onclick = () => digito(1); 
  document.querySelector('#bt-soma').onclick = () => operador('+'); 
  document.querySelector('#bt-subtrair').onclick = () => operador('-'); 
  document.querySelector('#bt-multiplica').onclick = () => operador('*'); 
  document.querySelector('#bt-dividir').onclick = () => operador('/');
  document.querySelector('#bt-resultado').onclick =  calcula;
 

  
};

//variaveis para armazenarmos o valor, o operador e o estado da calculadora

let sValor = '0'; // indica o valor apresentado no display
let ehnovonumero = true; //indica se o proximo sera de um  novo 
let valorAnterior = 0; // valor acumulado para uma operacao
let operacaoPendente = null; //operação acumulada

//atualizaçao do visor e colocando pontos para dividir os numeros decimal e inteiro
const atualizavisor = () => 
{
let = [parteint, partedec]  = sValor.split(',');
if(parteint.length > 10)
{
  document.querySelector('#display').innerText = '';
  return;
}
let v ='';
c = 0;
for (let i = parteint.length -1; i >= 0; i--)
{
  if(++c > 3)
  {
    v = '.' +v;
    c = 1;
  }
  v = parteint[i] +v;

}
v = v + (partedec ? ',' + partedec.substr(0, 10 - v.length) :'');
document.querySelector('#display').innerText = v;
};



//tratamento no botao de digito
const digito = (n) => 
{
  if(ehnovonumero)
  {
    sValor = ''+ n;
    ehnovonumero = false;
  }else sValor += n;
  atualizavisor();
};

const virgula = () =>
{
  if (ehnovonumero)
  {
    sValor = '0,';
    ehnovonumero = false;
  }else if (sValor.indexOf(',') == -1) sValor += ',';
  atualizavisor();
};
//converte a string do valor para numero real
const valorAtual = () => parseFloat(sValor.replace(',', '.'));

//tratamento de clique nos botoes de operadores
const operador = (op) => 
{
  calcula();
  valorAnterior = valorAtual();
  operacaoPendente = op;
  ehnovonumero = true;
  //acumula nova operacao
};

const calcula  = () => 
{
  if(operacaoPendente != null)
  { 
    let resultado;
    switch(operacaoPendente){
      case '+': 
      resultado = valorAnterior + valorAtual(); 
      break;
      case '-': 
      resultado = valorAnterior + valorAtual(); 
      break;
      case '*': 
      resultado = valorAnterior + valorAtual(); 
      break;
      case '/':
      resultado = valorAnterior + valorAtual(); 
      break;
    }
    sValor = resultado.toString().replace('.', ',');
  }
  ehnovonumero = true;
  operacaoPendente = null;
  valorAnterior = 0;
  atualizavisor();
};








/*
function startime(duration,display)
{
    var timer = duration, seconds;
    setInterval(function()
    {
      seconds = parseInt(timer % 100, 10);



    },1000);
}

const eleResult = document.getElementById('contador');
var n = 10;
window.setInterval(function() {
  eleResult.innerHTML += n+ ' ';
  n++;
}, 100);
    */