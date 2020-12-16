var numeriDado = [1, 2, 3, 4, 5, 6];


var element = document.getElementById("gioca");
element.addEventListener('click',
function() {

  var lancio1 = Math.floor(Math.random()*6);
  var risultato1 = numeriDado[lancio1];
  document.getElementById('tu-1').innerHTML = risultato1;
  // var background = document.getElementById("tu-1");
  // if (risultato1 == 1) {
  //   risultato1 == " uno";
  //   background.className = background.className + risultato1;
  // }


  var lancio2 = Math.floor(Math.random()*6);
  var risultato2 = numeriDado[lancio2];
  document.getElementById('tu-2').innerHTML = risultato2;

  var lancio3 = Math.floor(Math.random()*6);
  var risultato3 = numeriDado[lancio3];
  document.getElementById('tu-3').innerHTML = risultato3;

  var lancio4 = Math.floor(Math.random()*6);
  var risultato4 = numeriDado[lancio4];
  document.getElementById('avv-1').innerHTML = risultato4;

  var lancio5 = Math.floor(Math.random()*6);
  var risultato5 = numeriDado[lancio5];
  document.getElementById('avv-2').innerHTML = risultato5;

  var lancio6 = Math.floor(Math.random()*6);
  var risultato6 = numeriDado[lancio6];
  document.getElementById('avv-3').innerHTML = risultato6;



  var somma1 = risultato1 + risultato2 + risultato3;
  document.getElementById('punteggio-tu').innerHTML = "IL RISULTATO E': " + somma1;
  console.log(somma1);

  var somma2 = risultato4 + risultato5 + risultato6;
  document.getElementById('punteggio-avv').innerHTML = "IL RISULTATO E': " + somma2;
  console.log(somma2);


  if (somma1 > somma2) {
    document.getElementById('vincitore').innerHTML ="HA VINTO IL GIOCATORE 1";
  } else if (somma1 < somma2) {
    document.getElementById('vincitore').innerHTML ="HA VINTO IL GIOCATORE 2";
  } else if (somma1 == somma2) {
    document.getElementById('vincitore').innerHTML ="HANNO PAREGGIATO";
  }

}
);
