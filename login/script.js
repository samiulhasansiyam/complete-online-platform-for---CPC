document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    // Function to display messages
    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type === 'success' ? 'message-success' : 'message-error';
        messageDiv.style.display = 'block';

        // Automatically hide the message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('login.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json(); // We expect a JSON response from the PHP script

            if (response.ok) {
                // Successful login
                showMessage(result.message, 'success');
                // Redirect to the dashboard after a short delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                // Failed login
                showMessage(result.message, 'error');
            }
        } catch (error) {
            // Network or server error
            console.error('Error:', error);
            showMessage('An error occurred. Please try again.', 'error');
        }
    });
});