let desplegable = document.querySelector('.desplegable');
let contenedor__nav = document.querySelector('.contenedor__nav');
let cerrar = document.querySelector('.btn');
let aux = true;
let elh1 = document.getElementById('titulo');
let texto = document.querySelector('.contenidoCuerpo');
let imagen = document.querySelector('.imagen');
let banner = document.querySelector('.main--content');
let finalidad = document.querySelector('.finalidadDiseno');
let btn__cerrar = document.querySelector('.btn--cerrar');
let btn__cerrar2 = document.querySelector('.btn--cerrar-2');

//IMG 2

let texto1 = document.querySelector('.contenidoCuerpo1');
let imagen1 = document.querySelector('.imagen1');
let banner1 = document.querySelector('.main--content1');
let finalidad1 = document.querySelector('.finalidadDiseno1');
let btn__cerrar1 = document.querySelector('.btn--cerrar1');
let btn__cerrar21 = document.querySelector('.btn--cerrar-21');


//IMG 3

let texto2 = document.querySelector('.contenidoCuerpo2');
let imagen2 = document.querySelector('.imagen2');
let banner2 = document.querySelector('.main--content2');
let finalidad2 = document.querySelector('.finalidadDiseno2');
let btn__cerrar2_2 = document.querySelector('.btn--cerrar2-2');
let btn__cerrar22 = document.querySelector('.btn--cerrar-22');

//IMG 4

let texto3 = document.querySelector('.contenidoCuerpo3');
let imagen3 = document.querySelector('.imagen3');
let banner3 = document.querySelector('.main--content3');
let finalidad3 = document.querySelector('.finalidadDiseno3');
let btn__cerrar3 = document.querySelector('.btn--cerrar3');
let btn__cerrar23 = document.querySelector('.btn--cerrar-23');


//ULTIMA IMG

let texto4 = document.querySelector('.contenidoCuerpo4');
let imagen4 = document.querySelector('.imagen4');
let banner4 = document.querySelector('.main--content4');
let finalidad4 = document.querySelector('.finalidadDiseno4');
let btn__cerrar4 = document.querySelector('.btn--cerrar4');
let btn__cerrar24 = document.querySelector('.btn--cerrar-24');

//Primer banner
banner.addEventListener('click', function(){
    finalidad.classList.add('muestra')
    
})

btn__cerrar.addEventListener('click', function(){
    finalidad.classList.remove('muestra')
})

btn__cerrar2.addEventListener('click', function(){
    finalidad.classList.remove('muestra')
})


//Segundo Banner
banner1.addEventListener('click', function(){
    finalidad1.classList.add('muestra1')
    
})

btn__cerrar1.addEventListener('click', function(){
    finalidad1.classList.remove('muestra1')
})

btn__cerrar21.addEventListener('click', function(){
    finalidad1.classList.remove('muestra1')
})

//Tercer banner

banner2.addEventListener('click', function(){
    finalidad2.classList.add('muestra2')
    
})

btn__cerrar22.addEventListener('click', function(){
    finalidad2.classList.remove('muestra2')
})

btn__cerrar2_2.addEventListener('click', function(){
    finalidad2.classList.remove('muestra2')
})

//Cuarto banner
banner3.addEventListener('click', function(){
    finalidad3.classList.add('muestra3')
    
})

btn__cerrar23.addEventListener('click', function(){
    finalidad3.classList.remove('muestra3')
})

btn__cerrar3.addEventListener('click', function(){
    finalidad3.classList.remove('muestra3')
})


//ULTIMO BANNER
banner4.addEventListener('click', function(){
    finalidad4.classList.add('muestra4')
    
})

btn__cerrar24.addEventListener('click', function(){
    finalidad4.classList.remove('muestra4')
})

btn__cerrar4.addEventListener('click', function(){
    finalidad4.classList.remove('muestra4')
})

desplegable.addEventListener('click', function (){
    if(aux){
        contenedor__nav.classList.add('view--nav');
        aux = false;
        // texto.classList.add('ocultar');
        // imagen.classList.add('ocultaImg');
    }else{
        contenedor__nav.classList.remove('view--nav');
        // texto.classList.remove('ocultar');
        // imagen.classList.remove('ocultaImg');
        aux = true;
    }
    
  })


  cerrar.addEventListener('click', function (){
        contenedor__nav.classList.remove('view--nav');
        texto.classList.remove('ocultar');
        imagen.classList.remove('ocultaImg');
        aux = true;
        
  })
    


