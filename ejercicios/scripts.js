
function holaMundo() {
    console.log('hola mundo');
}

function herencia(dineroJose, dineroJuan, herencia) {
    var mitadHerencia = herencia / 2;


    dineroJose = dineroJose + mitadHerencia;


    dineroJuan = dineroJuan + mitadHerencia;


    dineroTotal = dineroJuan + dineroJose;


    console.log('mitadHerencia', mitadHerencia);
    console.log('dineroJose', dineroJose);
    console.log('dineroJuan', + mitadHerencia);
    console.log('dineroTotal', + dineroTotal);

}

// herencia(100, 500, 2000);

function cuenta(numeroInicial, numeroFinal) {
    for(var i = numeroInicial; i <= numeroFinal; i++){
        console.log('numero', i);
    }
}

// cuenta(5, 100);

function tengoHambre(hambre) {
    if (hambre < 30) {
        console.log('Estoy triste');
    } else if (hambre > 80) {
        console.log('Estoy Feliz');
    }else{
        console.log('Medio tengo hambre');
    }
}
document.addEventListener("click", tengoHambre(40));

    // tengoHambre(40);


// tarea
    // palindromo, iniciar validacion de palindromo
    // crear piramide contruye piramide de asteriscos.

function palindromo(cadena) {

}



function piramideAsterisco(base){
    for (i = 1; i<=base; i++){
        for (j=0; j<i; j++){
              document.write("*");
        }
        document.write("<br />");
    }
}