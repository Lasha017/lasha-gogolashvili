const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

const submit = document.querySelector('button')

const valfirstname = () => {
    const alert = document.querySelector('.firstalert');

    if (firstname.value.length < 2){
        firstname.style.borderColor = 'red';
        alert.innerText = 'Please enter correct first name';
        alert.style.color = 'red';
        alert.style.fontSize = '10px';
    }
    else {
        firstname.style.borderColor = 'green'
    }
}

const vallastname = () => {
    const  alert = document.querySelector('.lastalert')
    if (lastname.value.length < 2){
        lastname.style.borderColor = 'red';
        alert.innerText = 'Please enter correct last name';
        alert.style.color = 'red';
        alert.style.fontSize = '10px';
    }
    else {
        lastname.style.borderColor = 'green'
    }
}

const valemail = () => {
     const app = email.value
     
     console.log(app);
    
     if (app.length > 5 && app.includes('@')) {
        email.style.borderColor = 'green'
    }
    else{
        email.style.borderColor = 'red'
    }
}
const valpass = () => {
    const num = pass.value 

    if (pass.value.length < 5){
        pass.style.borderColor ='red' 
    }
    else {
        pass.style.borderColor ='green'
    }

}

submit.addEventListener('click', () => {
    valfirstname();
    vallastname();
    valemail();
    valpass();
})
