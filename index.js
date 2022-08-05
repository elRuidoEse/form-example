function handleSubmit() {
    e.preventDefault();
    const name = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const form =document.getElementById("form");


    if(name.trim() === "" || email.trim() ==="" || password.trim() === ""){
        name.message = "Por favor llena este campo";
        email.message = "Por favor llena este campo";
        password.message = "Por favor llena este campo";
    }
    
    else{
     form.innerText = "Registro exitoso :D"

    }

  
}