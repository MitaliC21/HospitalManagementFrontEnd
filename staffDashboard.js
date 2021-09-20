const addPatient = document.querySelector('.addPatient');
const patientName = document.querySelector('.patientName');
const patientContact = document.querySelector('.patientContact');
const patientDisease = document.querySelector('.patientDisease');
const patientCard = document.querySelector('.patientCard');
const addPatientButton = document.querySelector('.addPatientButton');
const addPatientCard = document.querySelector('.addPatientCard');
addPatientCard.style.display = "none";

  addPatient.onclick =  function(){
    addPatientCard.style.display = "unset";
}
  addPatientButton.addEventListener('click', async function(p){
    p.preventDefault()
    console.log("add clicked")
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${patientName.value}</td>
    <td>${patientContact.value}</td>
    <td>${patientDisease.value}</td>`;
    const tbody = document.querySelector('tbody');
    tbody.append(tr) ;
    patientName.value = "";
    patientContact.value = "";
    patientDisease.value = "";
    addPatientCard.style.display = "none";
  })