function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, complete todos los campos');
    } else {
      alert('¡Gracias por completar el formulario!');
      document.getElementById('contactForm').reset();
    }
  }
  