let myForm = document.getElementById('myForm')

let continuar = document.getElementById('continuar')





continuar.addEventListener('click', function(event){

event.preventDefault()

let firstName = document.getElementById("firstname").value

let lastName = document.getElementById("lastname").value

let email = document.getElementById("email").value

let number = document.getElementById("number").value

let password = document.getElementById("password").value

let confirmPassword = document.getElementById("Confirmpassword").value



    

    console.log(continuar)
    
    if(firstName === '' || lastName === '' || email === '' || number === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.')
    } else {
        alert('Seus dados foram cadastrados com sucesso, porfavor confirme seu email !')
        myForm.submit()
    }
})


