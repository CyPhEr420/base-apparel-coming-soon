const emailInput = document.getElementById('email-input');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value === '') {
        errorMessage.innerHTML = 'Please enter an email address';
        errorIcon.style.display = 'block';
    }
    else {
        errorMessage.innerHTML = '';
        errorIcon.style.display = 'none';
        form.submit();
    }
})
