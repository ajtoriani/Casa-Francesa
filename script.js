// 1. BOLHAS DINÂMICAS ATRÁS DA LOGO
function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * (150 - 40) + 40;
    bubble.style.width = bubble.style.height = `${size}px`;
    bubble.style.left = `calc(50% + ${Math.random() * 80 - 40}%)`;
    bubble.style.top = `calc(50% + ${Math.random() * 60 - 30}%)`;
    container.appendChild(bubble);

    const tl = gsap.timeline({ onComplete: () => { bubble.remove(); createBubble(container); } });
    tl.from(bubble, { scale: 0, opacity: 0, duration: 1 })
      .to(bubble, { y: -300, x: "random(-80, 80)", duration: "random(5, 8)", ease: "sine.out" }, "-=1")
      .to(bubble, { scale: 1.4, opacity: 0, duration: 0.2 });
}

window.onload = () => {
    // Inicializar Bolhas
    const container = document.getElementById('bubble-container');
    if(container) { for(let i=0; i<12; i++) setTimeout(() => createBubble(container), i * 600); }

    // MENU MOBILE REFATORADO (☰ e ✕)
    const menu = document.getElementById('menuOverlay');
    const btn = document.getElementById('openMenu');
    const mobileLinksLi = document.querySelectorAll('.mobile-links li');

    btn.onclick = () => {
        const isOpen = menu.style.display === 'flex';
        
        if (isOpen) {
            menu.style.display = 'none';
            btn.innerText = '☰';
            document.body.style.overflow = 'auto';
        } else {
            menu.style.display = 'flex';
            btn.innerText = '✕';
            document.body.style.overflow = 'hidden';
            
            // Animação GSAP nos links
            gsap.to(mobileLinksLi, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    // Fechar menu ao clicar em links
    document.querySelectorAll('.mobile-links a').forEach(l => {
        l.onclick = () => { 
            menu.style.display = 'none'; 
            btn.innerText = '☰'; 
            document.body.style.overflow = 'auto'; 
        };
    });

    // CARROSSEL MANUAL
    let idx = 0;
    const track = document.getElementById('track');
    document.getElementById('next').onclick = () => { if(idx < 2) { idx++; move(); } };
    document.getElementById('prev').onclick = () => { if(idx > 0) { idx--; move(); } };
    function move() { track.style.transform = `translateX(${-idx * (track.children[0].offsetWidth + 25)}px)`; }
};