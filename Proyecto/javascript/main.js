document.addEventListener('DOMContentLoaded', function () {
  // 🎬 Botón PLAY: mostrar video modal y reproducir
  const btnPlay = document.querySelector('.btn.play');
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('hibikeVideo');

  btnPlay.addEventListener('click', () => {
    modal.style.display = 'block';
    video.currentTime = 0;
    video.play();
  });

  // 🖱️ Cerrar el modal al hacer clic fuera del video
  modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
      video.pause();
      video.currentTime = 0;
      modal.style.display = 'none';
    }
  });

  // 💥 Animación en íconos del footer + abrir enlaces reales
  const socialIcons = document.querySelectorAll('.footer .social-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
      e.preventDefault(); // evita que se abra de inmediato

      icon.classList.add('click');

      setTimeout(() => {
        icon.classList.remove('click');
        window.open(icon.href, '_blank'); // abre en nueva pestaña
      }, 2000); // espera que termine la animación
    });
  });
});
