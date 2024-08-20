document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let isValid = true;

    // Seleciona todos os inputs e textareas obrigatórios
    const inputs = document.querySelectorAll('#contactForm .input-box, #contactForm textarea');

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('error');
            input.style.borderColor = 'red';
            errorMessage.textContent = 'Campo obrigatório';
            errorMessage.style.display = 'block';
            isValid = false;
        } else {
            input.classList.remove('error');
            input.style.borderColor = '#3CCC87'; // Borda verde quando preenchido
            errorMessage.textContent = '';
            errorMessage.style.display = 'none';
        }
    });

    if (isValid) {
        // Aqui você pode enviar o formulário se todos os campos estiverem preenchidos
        console.log('Formulário válido. Enviando...');
        // document.getElementById('contactForm').submit(); // Descomente para enviar o formulário
    } else {
        console.log('Formulário inválido. Campos obrigatórios não preenchidos.');
    }
});

