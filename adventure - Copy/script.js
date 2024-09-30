document.addEventListener('DOMContentLoaded', function() {
    const residencialBtn = document.getElementById('residencial');
    const comercialBtn = document.getElementById('comercial');
    const radioLabels = document.querySelectorAll('.radio');

    // Função para atualizar o estilo dos radio buttons
    function updateRadioStyles() {
        radioLabels.forEach(label => {
            if (label.querySelector('input').checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
    }

    // Inicializa os estilos
    updateRadioStyles();

    // Adiciona eventos de mudança aos radio buttons
    residencialBtn.addEventListener('change', updateRadioStyles);
    comercialBtn.addEventListener('change', updateRadioStyles);
});