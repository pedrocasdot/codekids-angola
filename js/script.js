let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

function validarCampos(){
  if(!validateEmail(email.value)){
    alert("Email Inválido!");
    return false;
  }
  return true;
}

function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 if (reg.test(email)){
    return true; 
  }
 else{
    return false;
 }
} 