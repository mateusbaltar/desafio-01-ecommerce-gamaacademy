window.onload = function () {

    const form = document.getElementById("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let email = document.getElementById("email").value;

      let data = {email}
      let convertData = JSON.stringify(data);

      console.log(convertData);

      localStorage.setItem('lead', convertData);

      console.log(localStorage)

      let submitBtn = document.getElementById('submitBtn');
      let signInValidate = document.getElementById('cadastro');

      form.reset();
      
      submitBtn.innerHTML = "Cadastro realizado!";
      submitBtn.style.backgroundColor = 'green';
      
      setTimeout(() => {
        
        submitBtn.innerHTML = "Cadastrar!";
        submitBtn.style.backgroundColor = 'var(--red)';  
        
        
        signInValidate.innerHTML = `${email} cadastrado com sucesso.`;
        
        setTimeout(() => {
          
          signInValidate.innerHTML = ``;
          
        }, 3000)

      }, 2000)
    })
  };