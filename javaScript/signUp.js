const form = document.getElementById("form");
const nickname = document.getElementById("nickname");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

form.addEventListener('submit', (e) => {

    if (nickname.value.length < 8) {
        nickname.setCustomValidity('The nickname needs to have more than 8 digits');
        e.preventDefault();
    }

    if (pass1.value.length < 8 || pass1 == null) {
        pass1.setCustomValidity('The password needs to have more than 8 digits');
        e.preventDefault();
    }else if (pass2.value.length < 8 || pass2 == null) {
        pass2.setCustomValidity('The password needs to have more than 8 digits');
        e.preventDefault();
    }

    if (pass2 !== pass1) {
        pass2.setCustomValidity('The passwords do not match');
        e.preventDefault();
    }

})
