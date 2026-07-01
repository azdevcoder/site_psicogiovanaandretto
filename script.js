 function alternarFaq(botao) {
            const item = botao.closest('.faq-item');
            const jaAtivo = item.classList.contains('ativo');

            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('ativo'));

            if (!jaAtivo) {
                item.classList.add('ativo');
            }
        }
        const crpLink = document.querySelector('#crp-link');
let tooltipEl;

        if (crpLink) {
            crpLink.addEventListener('mouseenter', function() {
                // Cria o balãozinho
                tooltipEl = document.createElement('div');
                tooltipEl.className = 'custom-tooltip';
                tooltipEl.innerText = 'Clique para Consultar CRP-PR';
                document.body.appendChild(tooltipEl);

                // Calcula a posição
                const rect = crpLink.getBoundingClientRect();
                const top = rect.top + window.scrollY - tooltipEl.offsetHeight - 10;
                const left = rect.left + window.scrollX + (rect.width / 2) - (tooltipEl.offsetWidth / 2);

                // Aplica a posição
                tooltipEl.style.top = top + 'px';
                tooltipEl.style.left = left + 'px';
                
                // Timeout pequeno para a transição do CSS funcionar (fade in)
                setTimeout(() => tooltipEl.classList.add('show'), 10);
            });

            crpLink.addEventListener('mouseleave', function() {
                if (tooltipEl) {
                    tooltipEl.remove();
                }
            });
        }
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        // Alterna a classe 'active' nos links e no botão
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Bônus: Fecha o menu automaticamente quando a pessoa clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
