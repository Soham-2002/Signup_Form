function validateEmail() {
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('email-error');
            const successMessage = document.getElementById('success-message');
            if (email.length > 3 && email.includes('@') && email.includes('.')) {
                emailError.textContent = '';
                checkSuccess();
            } else {
                emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
                successMessage.textContent = '';
            }
        }

        function validatePassword() {
            const password = document.getElementById('password').value;
            const passwordError = document.getElementById('password-error');
            const successMessage = document.getElementById('success-message');
            if (password.length > 8) {
                passwordError.textContent = '';
                checkSuccess();
            } else {
                passwordError.textContent = 'Make sure password is more than 8 characters.';
                successMessage.textContent = '';
            }
        }

        function checkSuccess() {
            const emailError = document.getElementById('email-error').textContent;
            const passwordError = document.getElementById('password-error').textContent;
            const successMessage = document.getElementById('success-message');

            if (emailError === '' && passwordError === '') {
                successMessage.textContent = 'All good to go!';
            } else {
                successMessage.textContent = '';
            }
        }

        function handleSubmit(event) {
            event.preventDefault();
            if (confirm('Are you sure you want to submit?')) {
                alert('Successful signup!');
            } else {
                document.getElementById('signup-form').reset();
                document.getElementById('email-error').textContent = '';
                document.getElementById('password-error').textContent = '';
                document.getElementById('success-message').textContent = '';
            }
        }