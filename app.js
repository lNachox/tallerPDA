document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores del formulario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validaciones
    let valid = true;
    let message = '';

    // Valida el nombre de usuario
    if (username.length > 20) {
        message += 'El nombre de usuario no puede tener más de 20 caracteres.<br>';
        valid = false;
    }

    // Valida el correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message += 'El correo electrónico no tiene un formato válido.<br>';
        valid = false;
    }

    // Valida el número de teléfono
    const phonePattern = /^9\d{8}$/;
    if (!phonePattern.test(phone)) {
        message += 'El número de teléfono debe empezar con 9 y tener 8 dígitos.<br>';
        valid = false;
    }

    // Muestra mensajes de error o éxito
    const messageDiv = document.getElementById('message');
    if (valid) {
        messageDiv.className = 'success';
        messageDiv.innerHTML = 'Usuario creado con éxito.';
        
        // Agrega el usuario a la lista
        addUserToList(username, email, phone);
        
        // Limpia el formulario
        this.reset();
    } else {
        messageDiv.className = 'error';
        messageDiv.innerHTML = message;
    }
});

// Función para agregar el usuario a la lista
function addUserToList(username, email, phone) {
    const userList = document.getElementById('userList');
    
    // Crea un nuevo elemento de lista
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${username}, Correo: ${email}, Teléfono: ${phone}`;
    
    // Inserta un nuevo elemento en la lista
    userList.appendChild(listItem);
}
