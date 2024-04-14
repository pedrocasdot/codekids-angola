let navbar = document.querySelector('.header .navbar');
let formulario = document.querySelector("form");

let nome = document.getElementById("nome");
let assunto = document.getElementById("assunto");
let email = document.getElementById("email");
let numero =  document.getElementById("numero");
let mensagem = document.getElementById("mensagem");

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

function limparCampos() {
       
    }


function enviarEmail(){
    const bodyMessage = `Nome: ${nome.value}<br> Email: ${email.value}<br>
    Telefone: ${numero.value}<br>Mensagem: ${mensagem.value}`;
    console.log(bodyMessage)
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "codekidsangola@gmail.com",
    Password : "10A1EA03A9A4D1748168C7164F5D1B9E3DB7",
    To : 'codekidsangola@gmail.com',
    From : 'codekidsangola@gmail.com',
    Subject : assunto.value,
    Body : bodyMessage
  }).then(
    message => {
      if(message === "OK"){
            Swal.fire({
            title: "Muito Obrigado!",
            text: "O seu email foi enviado com sucesso, responderemos o mais breve possivel!",
            icon: "success"
          });
      formulario.reset();
      }else{
        console.log(message);
      }
    }
  );
}
formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(!validarCampos(email.value)){  
    Swal.fire({
          title: "Email Inválido!",
          text: "Por favor, digite um email válido",
          icon: "warning"
    });      
  }else{
    limparCampos();
    enviarEmail();
  }
});

function validarCampos(){
  if(!validateEmail(email.value)){
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