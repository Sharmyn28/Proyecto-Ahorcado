
function imprimirMatriz (M) {
  	var n = M.length;
  	for (var i = 0; i < n; i++) {
        console.log(M[i]) ;
  }
}


function obtienerPalabraSecreta() {
  	var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   	var indice = Math.round ( Math.random() * 27 )
   	var cadena = new String( libreriaPalabras[indice] )
   	var palabra = cadena.split(" ")
   	palabra = palabra.join("");
   	palabra = palabra.toString();
   	return palabra;
}

var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];

function jugar (){
	var palabra = obtienerPalabraSecreta();
	var secreta = palabra;
  	var palAsteriscos = "";
  	var flagAcierto = false;
  	var flagGanar = false;
  	var fallas = 0;
    var dibujo = "";
    var piezaDibujo = "";
  	var intentos = 10;

  	for(var i = 0; i < palabra.length; i++){
  	    	palAsteriscos += "*";
  	}
  	  	//console.log (palAsteriscos);

  	do {	
  	  	var letra = prompt("Ingresa una letra para adivinar la palabra" + "\nTe quedan "+ intentos);
  	  	letra = letra.toLowerCase();
  	  	var indice = palabra.indexOf(letra);
  	
  	  	while(indice >= 0){
  		 	flagAcierto = true;
  		 	palAsteriscos = palAsteriscos.split("");
  		 	palAsteriscos[indice] = letra;
  		 	palAsteriscos = palAsteriscos.join("");
  		 	console.log(palAsteriscos);
  	
  		 	palabra = palabra.split("");
  		 	palabra[indice] = "@";
  		 	palabra = palabra.join("");
  		 	indice = palabra.indexOf(letra);
  	  	}
  	  	
  	  	//en caso que acierte o se equivoque
  	  	if(flagAcierto){
  	  		console.log("Bien hecho! Sigue adelante");
  	  	} else if(!flagAcierto){
  	  		fallas++;
          intentos--;
  	  		console.log("Te equivocaste");
  	  		dibujo += hombre[piezaDibujo++];
  	  		console.log(dibujo);
  	  	}
  	  	flagAcierto = false;

  	  //dibujarHombre(fallas);
  		
  		//para terminar el juego
  	  	if(palAsteriscos.indexOf("*") == -1){
  	  		alert("Ganaste");
  	  		flagGanar = true;
  	  	}
	}while(fallas < 10)

  	if(!flagGanar){
  		alert("Perdiste, la palabra secreta era: " + secreta);
  	}

}

jugar();