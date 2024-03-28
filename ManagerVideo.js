document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de vídeo pelo ID
    var meuVideo = document.getElementById("meuVideo");
  
    // Obtém o botão pelo ID
    var playPauseBtn = document.getElementById("playPauseBtn");
  
    // Adiciona um ouvinte de evento ao botão para lidar com cliques
    playPauseBtn.addEventListener("click", function() {
      // Verifica se o vídeo está pausado ou não
      if (meuVideo.paused) {
        meuVideo.play(); // Inicia a reprodução do vídeo
        playPauseBtn.textContent = "Pause"; // Muda o texto do botão para "Pause"
      } else {
        meuVideo.pause(); // Pausa o vídeo
        playPauseBtn.textContent = "Play"; // Muda o texto do botão para "Play"
      }
    });
  });
  