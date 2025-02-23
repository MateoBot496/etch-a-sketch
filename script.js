document.addEventListener("DOMContentLoaded", function(){

    let tablero = document.querySelector(".board");
    let isHeld = false;
    let clearButton = document.querySelector(".clear");
    
    

    /*FUNCIONALIDADES PARA WIDTH*/
    let widthSlider= document.querySelector(".width");
    let widthVal = document.querySelector(".width-value");

    widthSlider.addEventListener("change", function(){
        widthVal.innerHTML = widthSlider.value;
        crearCuadricula(widthSlider.value);

    });
    
    


    /*COLORES PARA PINTAR*/
    let color = "#000000";
    let colorPicker = document.querySelector(".colorPicker");

    colorPicker.addEventListener("change", function(){
        color = colorPicker.value; 
        document.documentElement.style.setProperty("--color", color); // ESTO PONE EL PIXEL : HOVER A COLOR
    });

        
    


    /* AÑADIMOS FUNCIONALIDADES A LOS PIXELES -- CUANDO HAY MOUSEDOWN CAMBIAN BGCOLOR A COLOR */
    
    function addColorFunction(pixel){
        pixel.addEventListener("mousedown", function(){
            pixel.style.backgroundColor=color;
            isHeld=true;
        });
        pixel.addEventListener("mouseover", function(){
            if(isHeld){
                pixel.style.backgroundColor = color;
            }
            
        });
        pixel.addEventListener("mouseup", function(){
            if(isHeld){
               isHeld=false;
            }
            
        });
    }

    

    /*CREAMOS LA CUADRICULA----------------------------------*/
    function crearCuadricula(numero){
        tablero.innerHTML = "";
        for(let i = 0; i<numero ; i++){

            let row = document.createElement("div");
            row.classList.add("row");
    
            tablero.appendChild(row);
    
            for(let j = 0; j<numero ; j++){
    
                let pixel = document.createElement("div");
                pixel.classList.add("pixel");
                addColorFunction(pixel);
    
    
                tablero.lastChild.appendChild(pixel);
                
            }
        } 
    }

    crearCuadricula(16);
      

    /*BOTON DE CLEAR ----------------------*/


    clearButton.addEventListener("click", function(){

        let allPixel = document.querySelectorAll(".pixel");
        for(let i = 0; i < allPixel.length; i++){
            allPixel[i].style.backgroundColor="white";
        }
    });
});