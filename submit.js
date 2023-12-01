function submitForm(event) {
    event.preventDefault(); 

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message to the user)
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message to the user)
    });
}
