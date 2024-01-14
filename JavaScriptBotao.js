// Função para rolar a página para o topo
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Adiciona um efeito de deslizamento suave
            });
        }

        // Exibir o botão de volta ao topo quando a página é rolada
        window.onscroll = function() {
            var btnTopo = document.getElementById('btnTopo');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnTopo.style.display = 'block';
            } else {
                btnTopo.style.display = 'none';
            }
        };
        