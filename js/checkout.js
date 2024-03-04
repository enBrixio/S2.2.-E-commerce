
// Exercise 6
function validate() {
	let formularioEnviado = false;
	let entrar = false;
	let regexp_password = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
	let regexp_phone = /^\+?(\d[\s-]?)?(\(\d{1,3}\)[\s-]?)?[\d\s-]{7,15}$/;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");  
	let errorLastN = document.getElementById("errorLastN");  
	let errorPassword = document.getElementById("errorPassword");  
	let errorPhone = document.getElementById("errorPhone"); 
	
	const errorMessages = document.querySelectorAll('.invalid-feedback');
	errorMessages.forEach(function(message) {
	  message.style.display = 'none'; // Ocultar el mensaje
	  // O, si prefieres eliminar el texto:
	  // message.innerText = '';
	});
  
	// Restablecer estilos de los campos de entrada
	const inputFields = document.querySelectorAll('.form-control');
	inputFields.forEach(function(field) {
	  field.style.border = ""; // Restablecer el borde a su estilo original
	});
	
	document.getElementById("miFormulario").addEventListener("submit", (e) => {
		e.preventDefault();
		validate(); // Asegúrate de que esta función esté definida en alguna parte de tu código
	  });
	  if (formularioEnviado) {
        return;
    }

	if(fName.value == ""){
		errorName.innerHTML = "El campo nombre es obligatorio.";
		fName.style.border = "3px solid red";
		errorName.style.display = "block"
		entrar = true;
	} else if(fName.value.length < 3){
		fName.style.border = "3px solid red";
		errorName.style.display = "block";
		entrar = true;
	} else if(!fName.value.match(/^[a-zA-Z]+$/)){
		fName.style.border = "3px solid red";
		errorName.innerHTML = "El campo nombre solo admite texto.";
		fName.style.border = "3px solid red";
		errorName.style.display = "block"
		entrar = true;;
	} else (fName.style.border = "3px solid green");


	if(fEmail.value == ""){
		fEmail.style.border = "3px solid red";
		errorEmail.style.display = "block"
		entrar = true;
	} else if(fEmail.value.length < 3){
		fEmail.style.border = "3px solid red";
		errorEmail.style.display = "block"
		entrar = true;
	} else if(!fEmail.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)){
		fEmail.style.border = "3px solid red";
		errorEmail.style.display = "block"
		entrar = true;
	} (fEmail.style.border = "3px solid green")

	if(fAddress.value == ""){
		fAddress.style.border = "3px solid red";
		errorAddress.style.display = "block"
		entrar = true;
	} else if(fAddress.value.length < 3){
		fAddress.style.border = "3px solid red";
		errorAddress.style.display = "block"
		entrar = true;;
	} else {fAddress.style.border = "3px solid green"};

	if(fLastN.value == ""){
		fLastN.style.border = "3px solid red";
		errorLastN.style.display = "block"
		entrar = true;
	} else if(fLastN.value.length < 3){
		fLastN.style.border = "3px solid red";
		errorLastN.style.display = "block";
		entrar = true;
	} else if(!fLastN.value.match(/^[a-zA-Z]+$/)){
		fLastN.style.border = "3px solid red";
		errorLastN.innerHTML = "El campo apellido solo admite texto.";
		fName.style.border = "3px solid red";
		errorLastN.style.display = "block"
		entrar = true;;
	} else (fLastN.style.border = "3px solid green");

	if(fPassword.value == ""){
		fPassword.style.border = "3px solid red";
		errorPassword.style.display = "block"
		entrar = true;
	} else if(fPassword.value.length < 3){
		fPassword.style.border = "3px solid red";
		errorPassword.style.display = "block";
		entrar = true;
	} else if(!fPassword.value.match(regexp_password)){
		fPassword.style.border = "3px solid red";
		errorPassword.style.display = "block"
		entrar = true;;
	} else (fPassword.style.border = "3px solid green");

	if(fPhone.value == ""){
		fPhone.style.border = "3px solid red";
		errorPhone.style.display = "block"
		entrar = true;
	} else if(fPhone.value.length < 3){
		fPhone.style.border = "3px solid red";
		errorPhone.style.display = "block";
		entrar = true;
	} else if(!fPhone.value.match(regexp_phone)){
		fPhone.style.border = "3px solid red";
		errorPhone.style.display = "block"
		entrar = true;;
	} else (fPhone.style.border = "3px solid green");
	 
	if(entrar === true){
		
		alert("Revisa los campos");
		
	}else{
		
		alert("el formulario se ha enviado correctamente");
		formularioEnviado = true;
	}

}
