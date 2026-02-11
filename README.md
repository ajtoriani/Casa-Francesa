# 🧺 Casa Francesa - Landing Page Institutional Premium

![Project Status](https://img.shields.io/badge/status-concluído-success)
![Design](https://img.shields.io/badge/design-Premium%20Laundry-blue)
![Tech](https://img.shields.io/badge/tech-Vanilla%20JS-yellow)
![Animação](https://img.shields.io/badge/animation-GSAP-green)

> **Tradição, Cuidado e Excelência Têxtil.**
> Uma Landing Page institucional de alto padrão desenvolvida para a lavanderia mais tradicional de Guarulhos, unindo um legado de 30 anos com uma experiência digital moderna e fluida.

---

##  Sobre o Projeto

O projeto **Casa Francesa** foi concebido para reposicionar digitalmente uma lavanderia familiar ativa em Guarulhos desde 1995. O desafio foi transmitir a confiança de décadas de serviço através de uma interface **Clean & Minimalist**, focada na facilidade de agendamento e na exposição clara dos serviços especializados, como edredons e trajes finos.

A aplicação utiliza uma paleta de cores Navy Blue e Gold para evocar autoridade e cuidado, potencializada por animações orgânicas que remetem à limpeza e frescor.

##  Funcionalidades Principais

* **Hero Section Dinâmica:** Visual de impacto com logo centralizado e um sistema de **bolhas flutuantes procedurais** codificadas em GSAP que estouram e renascem, simulando o ambiente de lavagem de forma abstrata e elegante.
* **Prova Social Estruturada:** Seção de depoimentos reais de clientes, utilizando um sistema de carrossel manual para garantir que o usuário tenha controle total sobre a navegação.
* **Foco em Conversão (WhatsApp First):**
    * Integração direta com a API do WhatsApp em todos os botões de ação.
    * Botão flutuante persistente para suporte imediato ao cliente.
* **Acessibilidade & Inclusão:**
    * Implementação do widget **VLibras**, permitindo que a comunidade surda acesse as informações de serviço com autonomia.
* **Localização Integrada:** Mapa interativo preenchendo 100% da seção de rodapé para facilitar a jornada do cliente até a unidade física.

---

## 🛠 Tecnologias & Engenharia

O projeto segue uma arquitetura "Vanilla com Superpoderes", priorizando performance e fundamentos de desenvolvimento web.

* **HTML5 Semântico:** Estrutura otimizada para SEO local e acessibilidade.
* **CSS3 (Arquitetura Moderna):**
    * **Glassmorphism:** Aplicação de desfoque de fundo (backdrop-filter) em menus e cards para profundidade visual.
    * **Variáveis CSS (`:root`):** Centralização da identidade visual (Navy/Gold/White).
    * **Responsividade Avançada:** Uso de Flexbox e Grid para adaptação perfeita de dispositivos móveis a telas 4K.
* **JavaScript (ES6+):**
    * **GSAP (GreenSock):** Engine principal para o sistema de bolhas e transições suaves do menu mobile.
    * **Vanilla Logic:** Manipulação de DOM pura para o carrossel e controle de estado do menu, evitando dependências externas desnecessárias.

---

##  Decisões de UX/UI

Como Tech Lead e Designer, as decisões visaram equilibrar a tradição do negócio com a modernidade tecnológica:

1.  **Tipografia Estratégica:** O uso da *Playfair Display* (Serifa) para títulos evoca elegância e tradição, enquanto a *Inter* (Sans-serif) garante legibilidade técnica para o corpo do texto.
2.  **Botão Mobile de Alta Prioridade:** O botão de fechar do menu mobile foi isolado com `position: fixed` e `z-index: 10000`, garantindo que o usuário nunca fique "preso" na navegação, um ponto crítico de UX.
3.  **Equilíbrio do Hero:** No desktop, a logo e o texto foram posicionados lado a lado para um preenchimento equilibrado da tela, enquanto no mobile a ordem é invertida para priorizar a leitura.
4.  **Feedback Visual Orgânico:** As bolhas dinâmicas trazem vida ao site de forma sutil, diferenciando a marca no mercado de serviços locais.

---

##  Estrutura de Pastas

```text
casa-francesa/
├── index.html        # Estrutura principal, SEO e Widget VLibras
├── style.css         # Design, Variáveis e Glassmorphism
├── script.js         # Engine de Bolhas, Menu Mobile e Carrossel
├── logo-casa.png     # Identidade visual da marca
└── favicon.ico       # Ícone de aba do navegador
```
## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma _issue_ ou um _pull request_.



## Contato



<p align="center"> <a href="https://www.linkedin.com/in/anajuliatoriani/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/> </a> <a href="https://github.com/anajuliatoriani"> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/> </a> <a href="https://anajuliatorianipessoa.vercel.app/"> <img src="https://img.shields.io/badge/Portfólio-FF5722?style=for-the-badge&logo=html5&logoColor=white"/> </a> <a href="mailto:anajuliatoriani@gmail.com"> <img src="https://img.shields.io/badge/Email-D97706?style=for-the-badge&logo=gmail&logoColor=white"/> </a> </p>



---

## Licença

Este projeto está sob a licença MIT.



---

Desenvolvido por Ana Julia Toriani Pessoa
