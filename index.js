const button = document.querySelector (`#btn`);
button.addEventListener (`click`, calculateAmount);

const choose = document.querySelector (`#classes`);
choose.addEventListener (`click`, showOptions);

 function showOptions(e){
    e.preventDefault();
    yoga.style.display = `block`;
 }

 const chooseTwo = document.querySelector (`#massages`);
 chooseTwo.addEventListener (`click`, showOptiosTwo);

 function showOptiosTwo(e) {
    e.preventDefault();
    yogaMassage.style.display = `block`;
 }


function calculateAmount(e) {
    e.preventDefault();

const yoga = document.querySelector (`#yoga`).value;
const massage = document.querySelector (`.massage`).value;
const donationInput = document.querySelector (`#donation`).value;


 if(isNaN(donationInput)) {
    Swal.fire({
        icon: 'error',
        title: 'Please enter the number',
        text: 'For no donation, enter 0',
       
      })
      
 }
 
let yogaPackage = (yoga);
let massagePackage = (massage);
let donationPackage = (donation);
let totalSum = +yogaPackage + +massagePackage + +donationPackage;

document.querySelector (`#totalYoga`).textContent = yoga;
document.querySelector (`#totalMassage`).textContent = massage;
document.querySelector (`#totalDonation`).textContent = donation;
document.querySelector (`#finalTotal`).textContent = totalSum;


}

