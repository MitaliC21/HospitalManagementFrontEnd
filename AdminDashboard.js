const editAdmin = document.querySelector('.editAdmin');
const editDoctor = document.querySelector('.editDoctor');
const editStaff = document.querySelector('.editStaff');
const addAdmin = document.querySelector('.addAdmin');
let deleteAdmin = document.querySelectorAll('.deleteAdmin');
const addAdminButton = document.querySelector('.addAdminButton');
const adminName = document.querySelector('.adminName');
const adminContact = document.querySelector('.adminContact');
const adminEmail = document.querySelector('.adminEmail');
let tbody = document.querySelector('tbody');

const addAdminCard = document.querySelector('.addAdminCard');
addAdminCard.style.display = "none";


const adminTable = document.querySelector('.adminTable')
 adminTable.style.display = "none";

 const doctorTable = document.querySelector('.doctorTable')
 doctorTable.style.display = "none";

 const staffTable = document.querySelector('.staffTable')
 staffTable.style.display = "none";


editAdmin.onclick = function(){
    adminTable.style.display = "unset";
    staffTable.style.display = "none";
    doctorTable.style.display = "none";
 }

 editDoctor.onclick = function(){
    doctorTable.style.display = "unset";
    adminTable.style.display = "none";
    staffTable.style.display = "none";
 }

 editStaff.onclick = function(){
    staffTable.style.display = "unset";
    adminTable.style.display = "none";
    doctorTable.style.display = "none";
 }

addAdmin.onclick =  function(){
    addAdminCard.style.display = "unset";
}

addAdminButton.addEventListener('click', async function(e){
    e.preventDefault()
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${adminName.value}</td>
    <td>${adminContact.value}</td>
    <td>${adminEmail.value}</td>
    <td><button class="btn btn-primary edit">Update</button>
    <form class="card hide">
                <label for="firstName">firstName</label>
                <input type="text" name="firstName" class="fname" />
                <label for="lastName">LastName</label>
                <input type="text" name="lastName" class="lname" />
                <label for="email">Email</label>
                <input type="email" name="email" class="email" />
                <button class="btn btn-primary" id="adminSubmit">Add</button>
              </form></td>
    <td> <button class="btn btn-danger deleteAdmin">Delete</button></td>`
    tbody.append(tr) ;
    edit = document.querySelectorAll(".edit");
    addEditListeners();
    deleteAdmin = document.querySelectorAll('.deleteAdmin');
    Remove();
    addEditListeners();
    adminName.value = "";
    adminContact.value = "";
    adminEmail.value = "";
    addAdminCard.style.display = "none";
  })

function Remove(){
    deleteAdmin.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.parentElement.parentElement.remove();
        });
      });
  }
 Remove();


  const addDoctor = document.querySelector('.addDoctor');
  const doctorName = document.querySelector('.doctorName');
  const doctorContact = document.querySelector('.doctorContact');
  const doctorEmail = document.querySelector('.doctorEmail');
  const addDoctorCard = document.querySelector('.addDoctorCard');
  const addDoctorButton = document.querySelector('.addDoctorButton');
  let deleteDoctor = document.querySelectorAll('.deleteDoctor');
  addDoctorCard.style.display = "none";

  addDoctor.onclick =  function(){
    addDoctorCard.style.display = "unset";
}
  addDoctorButton.addEventListener('click', async function(et){
    et.preventDefault()
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${doctorName.value}</td>
    <td>${doctorContact.value}</td>
    <td>${doctorEmail.value}</td>
    <td><button class="btn btn-primary edit">Update</button>
    <form class="card hide">
                <label for="firstName">firstName</label>
                <input type="text" name="firstName" class="fname" />
                <label for="lastName">LastName</label>
                <input type="text" name="lastName" class="lname" />
                <label for="email">Email</label>
                <input type="email" name="email" class="email" />
                <button class="btn btn-primary" id="adminSubmit">Add</button>
              </form></td> 
    <td><button class="btn btn-danger deleteDoctor">Delete</button></td>`;
    const dbody = document.querySelector('.dbody');
    dbody.append(tr) ;
    edit = document.querySelectorAll(".edit");
    addEditListeners();
    deleteDoctor = document.querySelectorAll('.deleteDoctor');
    RemoveD();
    doctorName.value = "";
    doctorContact.value = "";
    doctorEmail.value = "";
    addDoctorCard.style.display = "none";
  })

  function RemoveD(){
    deleteDoctor.forEach((btnD) => {
        btnD.addEventListener("click", () => {
          btnD.parentElement.parentElement.remove();
        });
      });
  }
RemoveD();


  const addStaff = document.querySelector('.addStaff');
  const staffName = document.querySelector('.staffName');
  const staffContact = document.querySelector('.staffContact');
  const staffEmail = document.querySelector('.staffEmail');
  const addStaffCard = document.querySelector('.addStaffCard');
  const addStaffButton = document.querySelector('.addStaffButton');
  let deleteStaff = document.querySelectorAll('.deleteStaff');
  addStaffCard.style.display = "none";

  addStaff.onclick =  function(){
    addStaffCard.style.display = "unset";
}
  addStaffButton.addEventListener('click', async function(p){
    p.preventDefault()
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${staffName.value}</td>
    <td>${staffContact.value}</td>
    <td>${staffEmail.value}</td>
    <td><button class="btn btn-primary edit">Update</button>
    <form class="card hide">
                <label for="firstName">firstName</label>
                <input type="text" name="firstName" class="fname" />
                <label for="lastName">LastName</label>
                <input type="text" name="lastName" class="lname" />
                <label for="email">Email</label>
                <input type="email" name="email" class="email" />
                <button class="btn btn-primary" id="adminSubmit">Add</button>
              </form></td> 
    <td><button class="btn btn-danger deleteStaff">Delete</button></td>`;
    const sbody = document.querySelector('.sbody');
    sbody.append(tr) ;
    edit = document.querySelectorAll(".edit");
    addEditListeners();
    deleteStaff = document.querySelectorAll('.deleteStaff');
    RemoveS();
    staffName.value = "";
    staffContact.value = "";
    staffEmail.value = "";
    addStaffCard.style.display = "none";
  })

  function RemoveS(){
    deleteStaff.forEach((btnS) => {
        btnS.addEventListener("click", () => {
          btnS.parentElement.parentElement.remove();
        });
      });
  }
RemoveS();


let edit = document.querySelectorAll(".edit");
addEditListeners();
function addEditListeners() {
  edit.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("hide");
      let form = btn.parentElement.querySelector("form");
      form.classList.remove("hide");
      let submit = form.querySelector("button");
      submit.addEventListener("click", async (e) => {
        e.preventDefault();
        let tr = form.closest("tr");
        let td = tr.querySelectorAll("td");
        td[0].innerText = form.querySelector(".fname").value;
        td[1].innerText = form.querySelector(".lname").value;
        td[2].innerText = form.querySelector(".email").value;
        form.classList.add("hide");
        btn.classList.remove("hide");
      });
    });
  });
}