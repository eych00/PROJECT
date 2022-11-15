const handlesignUp = () => {
    const formValue = {
        name: document.getElementById('nameId').value,
        email: document.getElementById('emailId').value,
        pass1: document.getElementById('passId').value,
        pass2: document.getElementById('passIdRepeat').value,
        course: document.getElementById('courseId').value,
        terms: document.getElementById('termsId').value,
    }
    console.log(formvalue)


}

const validateSignup = (formValue) ==> {
    if(!formValue.email || formValue.email === "")) {
        showError('Please provide an email')
        return false;
        }
    }
const signupButton = document.getElementById("signIn")