let btn = document.querySelectorAll('.btn-primary');



btn.forEach((btnn) => {
    btnn.addEventListener("click", () => {
        btnn.innerHTML = "Discharged";
        btnn.style.background = "green";
    });
  });


 
