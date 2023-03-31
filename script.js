function rodarDado()
{
  //pega elementos do html
  let texto = document.getElementById("textoH1");
  
  //gera numeros aleatoriamente de 1 a 6
  let dado = (Math.floor(Math.random() * 6))+1;
  
  //mostra a imagem de do dado acordo com o número da variavel dado
  if (dado == 1)
  {
    
    texto.innerHTML = ` <img src="img/dado-01.png" class="chacolha-dado"> `;

  } else if(dado == 2)
  {

    texto.innerHTML = ` <img src="img/dado-02.png" class="chacolha-dado"> `;
    
  } else if(dado == 3)
  {

    texto.innerHTML = ` <img src="img/dado-03.png" class="chacolha-dado"> `;
    
  } else if(dado == 4)
  {

    texto.innerHTML = ` <img src="img/dado-04.png" class="chacolha-dado"> `;
    
  } else if(dado == 5)
  {

    texto.innerHTML = ` <img src="img/dado-05.png" class="chacolha-dado"> `;
    
  } else if(dado == 6)
  {

    texto.innerHTML = ` <img src="img/dado-06.png" class="chacolha-dado"> `;
    
  }
}


