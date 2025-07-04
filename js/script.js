   // Script para que el boton cambie el idioma del párrafo -->
   
            
        document.getElementById("btnIdioma").addEventListener("click", function() {
            var texto = document.getElementById("info-text");

             if (texto.dataset.idioma === "es") {
                 texto.innerHTML = `<b><span style="text-transform: uppercase;">El Elefante Asiático</span></b><br><br>Es una especie de mamífero proboscídeo de la familia Elephantidae. Es el mayor mamífero del continente asiático. Su distribución original se extiende desde el sur de China e Indonesia occidental hasta las costas del golfo Pérsico y el sur de Mesopotamia, donde desapareció ya en el Neolítico.`;
                 texto.dataset.idioma = "en";
                this.innerText = "Inglés";
            } else {
                 texto.innerHTML = `<b><span style="text-transform: uppercase;">The Asian Elephant</span></b><br><br>It is a species of proboscidean mammal belonging to the Elephantidae family. It is the largest mammal on the Asian continent. Its original distribution extended from southern China and western Indonesia to the coasts of the Persian Gulf and southern Mesopotamia, where it disappeared as early as the Neolithic period`;
                 texto.dataset.idioma = "es";
                    this.innerText = "Español";
            }
         });
       
        // Script para reproducir el audio del animal
        document.getElementById("btnAudio").addEventListener("click", function() {
        var audio = document.getElementById("audioPlayer");
         audio.play();
        });
 
        // Función para desactivar la realidad aumentada del Boton "exitAr2
       
        document.getElementById("btnExitAR").addEventListener("click", function() {
        window.close(); // Intenta cerrar la WebAR antes de volver al escáner
        });

        