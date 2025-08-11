document.getElementById("submit").addEventListener("click",function(){
    const firstname = document.getElementById("first-name").value.trim();
    const lastname = document.getElementById("last-name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirm-password").value;

    const error = document.getElementById("error");
    const success = document.getElementById("success");
    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    error.textContent = "";
    success.textContent = "";
    loading.textContent = "";
    result.textContent = "";

if(firstname === "" || lastname === "" || mobile === "" || email === "" || password === "" || confirmpassword === ""){
    error.textContent = "All fields are required.";
    return;
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!email.match(emailPattern)) {
    error.textContent = "Invalid email format!";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters!";
    return;
  }

  if (password !== confirmpassword) {
    error.textContent = "Passwords do not match!";
    return;
  }

  // If all validations pass
  error.textContent = "";
  loading.textContent = "Submitting...";

  setTimeout(() => {
    loading.textContent = "";
    success.textContent = "Form submitted successfully!";
    result.innerHTML = `
        <strong>Name:</strong> ${firstname}<br>
        <strong>Name:</strong> ${lastname}<br>
        <strong>Email:</strong> ${email}`;
    setTimeout(() => {
            window.location.href = "registered.html";
    }, 1000);
  }, 2000);


})