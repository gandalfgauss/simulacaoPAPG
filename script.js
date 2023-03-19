let inputTaxaDeCrescimento = document.querySelector("#taxaDeCrescimento input");
let inputTempo = document.querySelector("#tempoDeCrescimento input");
let inputTaxaInicial = document.querySelector("#taxaInicial input");
let botaoConfirmar = document.querySelector("#confirmar");
let botaoConfirmarLetra = document.querySelector("#confirmarLetra");
let botaoConfirmarPA = document.querySelector("#confirmarPA");
let botaoConfirmarLetraPA = document.querySelector("#confirmarLetraPA");
let botaoParar = document.querySelector("#parar");
let parou = false;
let simulacao1 = document.querySelector("#simulacao1");
let textoSimulacao1 = document.querySelector("#textoSimulacao1");
let simulacao2 = document.querySelector("#simulacao2");
let textoSimulacao2 = document.querySelector("#textoSimulacao2");
let simulacao3 = document.querySelector("#simulacao3");
let textoSimulacao3 = document.querySelector("#textoSimulacao3");
let simulacao4 = document.querySelector("#simulacao4");
let textoSimulacao4 = document.querySelector("#textoSimulacao4");
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let qualIteracao = 1;
let taxaInicial = 1;
let taxaDeCrescimento = 0;
let tempo = 0;
let pararFuncao = 0;
let redimensionar = 1;
let letra = "O";
let executou = false;
let executouLetra = false;
let executouPA = false;
let executouLetraPA = false;


botaoConfirmar.addEventListener("click", ()=>{

  //Inicializar
  clearInterval(pararFuncao);
  parou = false;
  botaoParar.textContent = "Parar";
  qualIteracao = 1;
  redimensionar = 1;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  executouLetra =false;
  simulacao1.innerHTML = "";
  simulacao2.innerHTML = "";
  simulacao3.innerHTML = "";
  simulacao4.innerHTML = "";
  textoSimulacao1.textContent = "Contador: 0";
  textoSimulacao2.textContent = "Contador: 0";
  textoSimulacao3.textContent = "Contador: 0";
  textoSimulacao4.textContent = "Contador: 0";
  executou = true;
  executouLetra = false;
  executouPA = false;
  executouLetraPA = false;
  taxaDeCrescimento =  parseFloat(inputTaxaDeCrescimento.value);
  tempo = parseFloat(inputTempo.value);
  taxaInicial = parseInt(inputTaxaInicial.value);

  if(taxaInicial > 0 && tempo > 0 && taxaDeCrescimento > 0)
  {
    pararFuncao = setInterval(executarSimulacao, tempo*1000);
  }
  else
  {
    alert("Digite os dados Corretamente !");
  }
  
})


botaoConfirmarLetra.addEventListener("click", ()=>{

  //Inicializar
  clearInterval(pararFuncao);
  parou = false;
  botaoParar.textContent = "Parar";
  qualIteracao = 1;
  redimensionar = 1;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  simulacao1.innerHTML = "";
  simulacao2.innerHTML = "";
  simulacao3.innerHTML = "";
  simulacao4.innerHTML = "";
  textoSimulacao1.textContent = "Contador: 0";
  textoSimulacao2.textContent = "Contador: 0";
  textoSimulacao3.textContent = "Contador: 0";
  textoSimulacao4.textContent = "Contador: 0";
  taxaDeCrescimento =  parseFloat(inputTaxaDeCrescimento.value);
  tempo = parseFloat(inputTempo.value);
  taxaInicial = parseInt(inputTaxaInicial.value);
  executou = false;
  executouLetra = true;
  executouPA = false;
  executouLetraPA = false;


  if(taxaInicial > 0 && tempo > 0 && taxaDeCrescimento > 0)
  {
    pararFuncao = setInterval(executarSimulacao2, tempo*1000);
  }
  else
  {
    alert("Digite os dados Corretamente !");
  }
  
})


botaoConfirmarPA.addEventListener("click", ()=>{

  //Inicializar
  clearInterval(pararFuncao);
  parou = false;
  botaoParar.textContent = "Parar";
  qualIteracao = 1;
  redimensionar = 1;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  executouLetra =false;
  simulacao1.innerHTML = "";
  simulacao2.innerHTML = "";
  simulacao3.innerHTML = "";
  simulacao4.innerHTML = "";
  textoSimulacao1.textContent = "Contador: 0";
  textoSimulacao2.textContent = "Contador: 0";
  textoSimulacao3.textContent = "Contador: 0";
  textoSimulacao4.textContent = "Contador: 0";
  taxaDeCrescimento =  parseFloat(inputTaxaDeCrescimento.value);
  tempo = parseFloat(inputTempo.value);
  taxaInicial = parseInt(inputTaxaInicial.value);
  executou = false;
  executouLetra = false;
  executouPA = true;
  executouLetraPA = false;

  if(taxaInicial > 0 && tempo > 0 && taxaDeCrescimento > 0)
  {
    pararFuncao = setInterval(executarSimulacao3, tempo*1000);
  }
  else
  {
    alert("Digite os dados Corretamente !");
  }
  
})


botaoConfirmarLetraPA.addEventListener("click", ()=>{

  //Inicializar
  clearInterval(pararFuncao);
  parou = false;
  botaoParar.textContent = "Parar";
  qualIteracao = 1;
  redimensionar = 1;
  contador1 = 0;
  contador2 = 0;
  contador3 = 0;
  contador4 = 0;
  simulacao1.innerHTML = "";
  simulacao2.innerHTML = "";
  simulacao3.innerHTML = "";
  simulacao4.innerHTML = "";
  textoSimulacao1.textContent = "Contador: 0";
  textoSimulacao2.textContent = "Contador: 0";
  textoSimulacao3.textContent = "Contador: 0";
  textoSimulacao4.textContent = "Contador: 0";
  taxaDeCrescimento =  parseFloat(inputTaxaDeCrescimento.value);
  tempo = parseFloat(inputTempo.value);
  taxaInicial = parseInt(inputTaxaInicial.value);
  executou = false;
  executouLetra = false;
  executouPA = false;
  executouLetraPA = true;
  if(taxaInicial > 0 && tempo > 0 && taxaDeCrescimento > 0)
  {
    pararFuncao = setInterval(executarSimulacao4, tempo*1000);
  }
  else
  {
    alert("Digite os dados Corretamente !");
  }
  
})

botaoParar.addEventListener("click", ()=>{

  if(taxaInicial > 0 && tempo > 0 && taxaDeCrescimento > 0)
  {
    if(!parou)
    {
      parou = true;
      botaoParar.textContent="Continuar";
      clearInterval(pararFuncao);
    }
    else{
      parou = false;
      botaoParar.textContent="Parar";
      if(executou)
      {
        pararFuncao = setInterval(executarSimulacao, tempo*1000);
      }
      else if(executouLetra)
      {
        pararFuncao = setInterval(executarSimulacao2, tempo*1000);
      }
      else if(executouPA)
      {
        pararFuncao = setInterval(executarSimulacao3, tempo*1000);
      }
      else if(executouLetraPA)
      {
        pararFuncao = setInterval(executarSimulacao4, tempo*1000);
      }
      
    }
  }
  else
  {
    alert("Digite os dados Corretamente !");
  }
  
   
})


function executarSimulacao()
{
  simulacao1.innerHTML = "";

  contador1 = parseInt(taxaInicial);

  for(let i=0; i <contador1; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width= Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);

    if(i < contador2)
    {
      imagem.classList.add("imagemVermelho");
    }

    simulacao1.appendChild(imagem);
  }

  simulacao2.innerHTML = "";
  for(let i=0; i <contador2; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    imagem.classList.add("imagemVermelho");
    simulacao2.appendChild(imagem);
  }

  simulacao3.innerHTML = "";
  for(let i=0; i <contador3; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    
    simulacao3.appendChild(imagem);
  }

  simulacao4.innerHTML = "";
  for(let i=0; i <contador4; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    
    simulacao4.appendChild(imagem);
  }

  textoSimulacao1.textContent = `Contador: ${contador1} - Termo: ${qualIteracao} - Tempo(s): ${(qualIteracao-1)*tempo}`;
  textoSimulacao2.textContent = `Contador: ${contador2} - Termo: ${qualIteracao-1} - Tempo(s): ${Math.max((qualIteracao-2),0)*tempo}`;
  textoSimulacao3.textContent = `Contador: ${contador3} - Termo: ${Math.max(qualIteracao-2,0)} - Tempo(s): ${Math.max((qualIteracao-3),0)*tempo}`;
  textoSimulacao4.textContent = `Contador: ${contador4} - Termo: ${Math.max(qualIteracao-3,0)} - Tempo(s): ${Math.max((qualIteracao-4),0)*tempo}`;

  taxaInicial *= taxaDeCrescimento;

  redimensionar +=3
  qualIteracao += 1;

  contador4 = contador3;
  contador3 = contador2;
  contador2 = contador1;
}



function executarSimulacao3()
{
  simulacao1.innerHTML = "";

  contador1 = parseInt(taxaInicial);

  for(let i=0; i <contador1; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width= Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);

    if(i < contador2)
    {
      imagem.classList.add("imagemVermelho");
    }

    simulacao1.appendChild(imagem);
  }

  simulacao2.innerHTML = "";
  for(let i=0; i <contador2; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    imagem.classList.add("imagemVermelho");
    simulacao2.appendChild(imagem);
  }

  simulacao3.innerHTML = "";
  for(let i=0; i <contador3; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    
    simulacao3.appendChild(imagem);
  }

  simulacao4.innerHTML = "";
  for(let i=0; i <contador4; i++)
  {
    let imagem = document.createElement("img");
    imagem.src = "./virus.png";
    imagem.width=  Math.max(48 - contador1/120, 8);
    imagem.height= Math.max(48 - contador1/120, 8);
    
    simulacao4.appendChild(imagem);
  }

  textoSimulacao1.textContent = `Contador: ${contador1} - Termo: ${qualIteracao} - Tempo(s): ${(qualIteracao-1)*tempo}`;
  textoSimulacao2.textContent = `Contador: ${contador2} - Termo: ${qualIteracao-1} - Tempo(s): ${Math.max((qualIteracao-2),0)*tempo}`;
  textoSimulacao3.textContent = `Contador: ${contador3} - Termo: ${Math.max(qualIteracao-2,0)} - Tempo(s): ${Math.max((qualIteracao-3),0)*tempo}`;
  textoSimulacao4.textContent = `Contador: ${contador4} - Termo: ${Math.max(qualIteracao-3,0)} - Tempo(s): ${Math.max((qualIteracao-4),0)*tempo}`;

  taxaInicial += taxaDeCrescimento;

  redimensionar +=3
  qualIteracao += 1;

  contador4 = contador3;
  contador3 = contador2;
  contador2 = contador1;
}


function executarSimulacao2()
{

  // Obtém a largura da viewport em pixels
  var viewportWidth = window.innerWidth;
  console.log(viewportWidth/10);

  simulacao1.innerHTML = "";

  contador1 = parseInt(taxaInicial);

  var meuTexto="";
  for(let i=0; i <contador1; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanVermelho");
  simulacao1.appendChild(span);

  simulacao2.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador2; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanAzul");
  simulacao2.appendChild(span);
  

  simulacao3.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador3; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {

      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanVerde");
  simulacao3.appendChild(span);

  simulacao4.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador4; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanAmarelo");
  simulacao4.appendChild(span);

  textoSimulacao1.textContent = `Contador: ${contador1} - Termo: ${qualIteracao} - Tempo(s): ${(qualIteracao-1)*tempo}`;
  textoSimulacao2.textContent = `Contador: ${contador2} - Termo: ${qualIteracao-1} - Tempo(s): ${Math.max((qualIteracao-2),0)*tempo}`;
  textoSimulacao3.textContent = `Contador: ${contador3} - Termo: ${Math.max(qualIteracao-2,0)} - Tempo(s): ${Math.max((qualIteracao-3),0)*tempo}`;
  textoSimulacao4.textContent = `Contador: ${contador4} - Termo: ${Math.max(qualIteracao-3,0)} - Tempo(s): ${Math.max((qualIteracao-4),0)*tempo}`;

  taxaInicial *= taxaDeCrescimento;

  redimensionar +=3
  qualIteracao += 1;

  contador4 = contador3;
  contador3 = contador2;
  contador2 = contador1;
}



function executarSimulacao4()
{

  // Obtém a largura da viewport em pixels
  var viewportWidth = window.innerWidth;
  console.log(viewportWidth/10);

  simulacao1.innerHTML = "";

  contador1 = parseInt(taxaInicial);

  var meuTexto="";
  for(let i=0; i <contador1; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanVermelho");
  simulacao1.appendChild(span);

  simulacao2.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador2; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanAzul");
  simulacao2.appendChild(span);
  

  simulacao3.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador3; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {

      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanVerde");
  simulacao3.appendChild(span);

  simulacao4.innerHTML = "";
  var meuTexto="";
  for(let i=0; i <contador4; i++)
  {
    if(i%parseInt(viewportWidth/18)== 0 && i !==0 )
    {
      meuTexto+= "<br/>";
    }
    meuTexto += letra 
  }

  var span = document.createElement("span");
  span.innerHTML = meuTexto;
  span.classList.add("spanAmarelo");
  simulacao4.appendChild(span);

  textoSimulacao1.textContent = `Contador: ${contador1} - Termo: ${qualIteracao} - Tempo(s): ${(qualIteracao-1)*tempo}`;
  textoSimulacao2.textContent = `Contador: ${contador2} - Termo: ${qualIteracao-1} - Tempo(s): ${Math.max((qualIteracao-2),0)*tempo}`;
  textoSimulacao3.textContent = `Contador: ${contador3} - Termo: ${Math.max(qualIteracao-2,0)} - Tempo(s): ${Math.max((qualIteracao-3),0)*tempo}`;
  textoSimulacao4.textContent = `Contador: ${contador4} - Termo: ${Math.max(qualIteracao-3,0)} - Tempo(s): ${Math.max((qualIteracao-4),0)*tempo}`;

  taxaInicial += taxaDeCrescimento;

  redimensionar +=3
  qualIteracao += 1;

  contador4 = contador3;
  contador3 = contador2;
  contador2 = contador1;
}