const initBtn = document.querySelector('#initbtn');
const time = document.querySelector('#time');
let initNumber = 0;


initBtn.addEventListener('click', () => {
    initNumber++;
    console.log(initNumber)
    if (initNumber >= 23) {
     document.documentElement.classList.add("active");
     
     function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        
        heart.innerText = '❤️';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
                    heart.remove();
        }, 5000);
    }
      
    setInterval(createHeart, 300);
    }
});

const swiper = new Swiper(".mySwiper", {
    loop: true, // Loop infinito
    autoplay: {
      delay: 3000, // Troca a cada 3 segundos
      disableOnInteraction: false, // Continua mesmo após interação
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 10,
});

function calcularTempoPassado(dataString) {
  const dataPassada = new Date(dataString);

  if (isNaN(dataPassada)) {
      console.log("Data inválida. Use o formato correto: YYYY-MM-DD HH:MM AM/PM");
      return;
  }

  const agora = new Date();

  let anos = agora.getFullYear() - dataPassada.getFullYear();
  let meses = agora.getMonth() - dataPassada.getMonth();
  let dias = agora.getDate() - dataPassada.getDate();

  if (meses < 0) {
      anos--;
      meses += 12;
  }

  if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
  }

  const diffMilissegundos = agora - dataPassada;
  const minutos = Math.floor(diffMilissegundos / (1000 * 60));

  console.log(`Passaram-se ${anos} anos, ${meses} meses, ${dias} dias e ${minutos} minutos.`);
  time.textContent = `${anos > 0 ? `${anos} anos,` : ``} ${meses} meses, ${dias} dias e ${minutos} minutos.`;
}

setInterval(() => calcularTempoPassado("2024-05-23 12:50 PM"), 60000);

calcularTempoPassado("2024-05-23 12:50 PM");

document.getElementById("btnDownload").addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "assets/favicon.png"; 
  link.download = "lovejourney.apk"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
