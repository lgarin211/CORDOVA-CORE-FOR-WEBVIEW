let phonenumber='8123456789'

document.getElementById("submitBtn").addEventListener("click", function() {
    var inputField = document.getElementById("PhoneNumberinput");
    var errortext=document.getElementById("errortext")
       
    if (inputField.value.trim() === "") {
        // alert("Please input your NIP.");
        errortext.innerHTML="Please input your Phone Number"
        errortext.classList.remove("hide")
        return false; // Prevent form submission
    }else{
        if (inputField.value==phonenumber) {
            // alert("user ada")
            window.location.href="./otp_signup.html"            
        }else{
            errortext.innerHTML="Phone number is not registered, please contact your PIC"
            errortext.classList.remove("hide")
        }
    }
    });


      