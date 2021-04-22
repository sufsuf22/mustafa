document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form');
    const list = document.querySelector('.list');
    const li = document.createElement('li');
    
    form.addEventListener('onsubmit', () => {
        const msg = document.querySelector('#msg');
        if(form.fullname.value == "") {
            msg.innerHTML = "please enter your fullName.";
            return false;
        } else if(form.email.value == " "){
            msg.innerHTML = "plaese enter your email.";
            return false;
        } else if(form.password.value == " ") {
            msg.innerHTML = "enter password.";
        } else if(form.password.value.length < 8) {
            msg.innerHTML  = "password is to short.";
        } else if(form.confirmation.value != form.password.value) {
            msg.innerHTML = "passwords don't match.";
        } else {
            li.textContent = `
            fullname: ${form.fullname.value}</br>
            email: ${form.email.value}</br>
            password: ${form.password.value}</br> `;
            list.appendChild(li);
                console.log(list);

        }

    });
});