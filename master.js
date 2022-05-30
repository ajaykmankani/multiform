function validate(name, email, mobile, password, nameE, mobE, passE, emailE) {



    if (name == "") {
        nameE.innerHTML = "Enter Your name";
        submitForm(event)
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            nameE.innerHTML = "Enter a valid name";
            submitForm(event)
        } else {
            nameE.innerHTML = " ";

        }
    }

    if (email == "") {
        emailE.innerHTML = "Enter a email";
        submitForm(event)
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            emailE.innerHTML = "Enter a valid email";
            submitForm(event)
        } else {
            emailE.innerHTML = " ";

        }
    }

    if (mobile == "") {
        mobE.innerHTML = "Enter a Mobile Number";
        submitForm(event)
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            mobE.innerHTML = "Enter a valid Mobile Number";
            submitForm(event)
        } else {
            mobE.innerHTML = " ";

        }
    }

    if (password == "") {
        passE.innerHTML = "Enter Your Password";
        submitForm(event)
    } else {
        var wordCount = password.length;
        if (wordCount < 4) {
            passE.innerHTML = "Password must be atleast 5 character long";
            submitForm(event)
        } else {
            passE.innerHTML = " ";
        }

    }




    // if (url == "") {
    //     document.getElementById('urlError2').innerHTML = "Enter your site URL";
    //     submitForm(event)
    // } else {

    //     var regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

    //     if (regex.test(url) === false) {
    //         document.getElementById('urlError2').innerHTML = "Enter a valid URL";
    //         submitForm(event)
    //     } else {
    //         document.getElementById('urlError2').innerHTML = " ";

    //     }
    // }

    function submitForm(event) {
        event.preventDefault();
    }



}

function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var url = document.contactForm.url.value;
    var password = document.contactForm.password.value;
    var nameE = document.getElementById('nameError');
    var emailE = document.getElementById('emailError');
    var passE = document.getElementById('passError');
    var mobE = document.getElementById('mobileError');

    validate(name, email, mobile, password, nameE, mobE, passE, emailE);

};





function validateForm2() {

    var name = document.contactForm2.name.value;
    var email = document.contactForm2.email.value;
    var mobile = document.contactForm2.mobile.value;
    var url = document.contactForm2.url.value;
    var password = document.contactForm2.password.value;
    var nameE = document.getElementById('nameError2');
    var emailE = document.getElementById('emailError2');
    var passE = document.getElementById('passError2');
    var mobE = document.getElementById('mobileError2');

    validate(name, email, mobile, password, nameE, mobE, passE, emailE);


};