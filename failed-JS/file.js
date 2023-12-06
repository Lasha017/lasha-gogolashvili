document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailBtn = document.querySelector('button:first-of-type');
    const passwordBtn = document.querySelector('button:last-of-type');

    emailBtn.addEventListener('click', () => {
        if (emailInput.value.length < 2) {
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'green';
        }
    });

    passwordBtn.addEventListener('click', () => {
        if (passwordInput.value.length < 2) {
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.borderColor = 'green';
        }
    });
});
