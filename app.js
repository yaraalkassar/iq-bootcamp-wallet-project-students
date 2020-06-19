$(document).ready(function () {
  $('.modal-trigger').leanModal();
});

$(document).ready(function () {
  $('select').material_select();
});

$('.select-wallet').change(function (e) {
  if (e.target.value == "createWallet") {
    $('#modal1').openModal();
  }
});


let wallets = JSON.parse(localStorage.getItem("wallets")) || [];

// grabbing all the elements we need from html 
const name = document.getElementById('name');
const balance = document.getElementById('balance');
const description = document.getElementById('description');
const form = document.querySelector('#create-new-wallet');
const section = document.getElementsByTagName("section")[0];
const walletsView = document.getElementById("walletsChange");
let radios = document.getElementsByName("currency");

// fmains declarationss 
// funcitons declarationss 
// funcitons declarationss 


function changeMainPage() {
  section.classList.add("hide");
  walletsView.classList.remove("hide");
}
function getRadioValue() {
  for (const radio of radios) {
    if (radio.checked) {
      return (radio.value);
    }
  }
}

function resetForm() {
  $('#modal1').closeModal();
  form.reset();
}
function saveToLocalStorage() {
  localStorage.setItem("wallets", JSON.stringify(wallets));
}
function addWallet() {

  let newWallet = new Wallet(name.value, getRadioValue(), balance.value, description.value)
  wallets.push(newWallet);
  saveToLocalStorage();
}
function drawWallet() {
let renderedElem = document.createElement();
renderedElem.insertAdjacentHTML('beforeend',`
`)
}


// event listeners
// event listeners
// event listeners

form.addEventListener('submit', e => {
  e.preventDefault();
  changeMainPage()
  getRadioValue();
  addWallet();
  resetForm();
})
