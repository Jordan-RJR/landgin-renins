emailjs.init("p1qKv0RYumesoM5kK");

// Función para enviar el formulario
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 


  if (this.hasAttribute("data-sent")) {
    console.log("El formulario ya ha sido enviado.");
    return; 
  }

  
  this.setAttribute("data-sent", "true");

  
  emailjs.sendForm("service_p9s91rj", "template_1djz9rg", this)
    .then(function(response) {
      console.log('Correo enviado exitosamente:', response);
      alert("FORMULARIO ENVIADO CON EXITO!");
    }, function(error) {
      console.log('Error al enviar el correo:', error);
      alert("Error al enviar el correo: " + JSON.stringify(error));
    })
    .finally(() => {
      
      this.removeAttribute("data-sent");
    });
});
