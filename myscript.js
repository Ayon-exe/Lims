function signin(){
	document.getElementById("demo").innerHTML="Your username is: "+document.getElementById("username").value;
    	document.getElementById("demo1").innerHTML="Your username is: "+document.getElementById("password").value;
	window.location.href = "./homepage.html";
	}

const container = document.getElementById('container');
const signupBtn = document.getElementById('signup');
const loginBtn = document.getElementById('login');
signupBtn.addEventListener('click', () => 
{
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => 
{
    container.classList.remove("active");
});
