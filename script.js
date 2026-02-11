// 1. BOLHAS DINÂMICAS CONTIDAS
function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * (100 - 30) + 30;
    bubble.style.width = bubble.style.height = `${size}px`;
    
    // Centralização
    bubble.style.left = `calc(50% + ${Math.random() * 60 - 30}%)`;
    bubble.style.bottom = "-50px"; 
    
    container.appendChild(bubble);

    const tl = gsap.timeline({ 
        onComplete: () => { 
            bubble.remove(); 
            createBubble(container); 
        } 
    });

    tl.from(bubble, { scale: 0, opacity: 0, duration: 1 })
      .to(bubble, { 
          y: -420, // Aumentado conforme a altura do wrapper no mobile
          x: "random(-40, 40)", 
          duration: "random(4, 7)", 
          ease: "power1.out" 
      }, "-=1")
      .to(bubble, { scale: 1.2, opacity: 0, duration: 0.3 });
}

window.onload = () => {
    // Inicializar Bolhas
    const container = document.getElementById('bubble-container');
    if(container) { 
        for(let i=0; i<10; i++) setTimeout(() => createBubble(container), i * 700); 
    }

    // MENU SVG
    const mobileBtn = document.getElementById("openMenu");
    const mobileMenu = document.getElementById("menuOverlay");
    const menuSvg = document.getElementById("menuSvg");

    function toggleMenu() {
        const isVisible = mobileMenu.style.display === "flex";
        if (isVisible) {
            mobileMenu.style.display = "none";
            document.body.style.overflow = "auto";
            menuSvg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
        } else {
            mobileMenu.style.display = "flex";
            document.body.style.overflow = "hidden";
            menuSvg.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
            gsap.from(".mobile-links li", { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 });
        }
    }

    if (mobileBtn) { mobileBtn.addEventListener("click", toggleMenu); }

    // Fecha ao clicar
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.style.display = "none";
            document.body.style.overflow = "auto";
            menuSvg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
        });
    });

    // CARROSSEL
    let idx = 0;
    const track = document.getElementById('track');
    if(track) {
        document.getElementById('next').onclick = () => { if(idx < 2) { idx++; move(); } };
        document.getElementById('prev').onclick = () => { if(idx > 0) { idx--; move(); } };
    }
    function move() { track.style.transform = `translateX(${-idx * (track.children[0].offsetWidth + 25)}px)`; }
};