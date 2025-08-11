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
    result.textcontent = "";

if(firstname === "" || lastname === "" || mobile === "" || email === "" || password === "" || confirmpassword === ""){
    error.textContent = "All fields are required.";
    return;
}


})