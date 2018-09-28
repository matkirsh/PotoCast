#conteneur_video {
   position: relative;
}

/* Le bouton de Pause/Lecture, recouvre la totalité de la vidéo
*  et masqué au chargement de la page via Javascript
*/

#play_pause {
   position: absolute;
   top: 0; left: 0;
   /* Le bouton  aux dimensions du lecteur */
   width: 600px; height: 490px;  
   background: transparent url(play_video.png) no-repeat 50% 50%;
}

/* Class ajoutée par Javascript lors du clic Pause */
#play_pause.pause {
   background-image: url(pause_video.png);
}

$(function() {

  // La vidéo étant lancée automatiquement, le bouton est masqué
   $('#play_pause').hide();

   // Assignation de l'élément <video>
   la_video = $('#video').get(0);

   // Le clic Bouton lance la lecture...
   $('#play_pause').click(function() {
   // ...si le bouton est visible (donc vidéo en pause)
       if ($(this).is(':visible')) {
           $(this).fadeOut("normal", function() {
               // Au masquage du bouton, on enlève la class qui affiche l'image Pause
               $(this).removeClass('pause');
           });
          la_video.play();
       }
   });

   // Clic sur vidéo = Pause + affichage du bouton
       $('#video').click(function() {
           la_video.pause();
           // on ajoute la class qui affiche l'image Pause
           $('#play_pause').addClass('pause').fadeIn("slow");
       });

   // En fin de lecture, on affiche le bouton en image Lecture
   // pour pouvoir relancer la lecture
   la_video.onended = function() {
       $('#play_pause').fadeIn("slow");
   }
});