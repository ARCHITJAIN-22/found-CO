document.getElementById("registerBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email && password) {
      localStorage.setItem(email, password);
      alert("Registered successfully!");
      window.location.href = "login.html";
    } else {
      alert("Please fill all fields.");
    }
  });
  
  document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (localStorage.getItem(email) === password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials.");
    }
  });
  