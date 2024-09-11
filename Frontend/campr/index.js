const form = document.querySelector('my-form');
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const ename = document.getElementById("email");
const namet = document.getElementById("nameTag");
const birthm = document.getElementById("birthMonth");
const birthd = document.getElementById("birthDay");
const birthy = document.getElementById("birthYear");
const addrs = document.getElementById("address");
const addrs2 = document.getElementById("addressLine2");
const c = document.getElementById("city");
const st = document.getElementById("state");
const z = document.getElementById("zip");
const s = document.getElementById("small");
const m = document.getElementById("medium");
const l = document.getElementById("large");
const xl = document.getElementById("extraLarge");
const mR = document.getElementById("medicalRestrictions");
const hdyh = document.getElementById("howDidYouHear");

document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();

  
    let invalid=false;
    if (firstName.value.trim() === '') {
        document.getElementById('first-error').classList.add('text-danger');
        invalid=true
      }
    
    if (lastName.value.trim() === '') {
        document.getElementById('last-error').textContent = 'Lastname is required.';
        invalid=true
      }
    
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim ()==='') {
        document.getElementById('emails-error').textContent = 'Please enter a valid email address.';
        invalid=true
      }

      if (nameTag.value.trim() === '') {
        document.getElementById('tag-error').textContent = 'NameTag is required.';
        invalid=true
      }

    if (address.value.trim() === '') {
        document.getElementById('add-error').textContent = 'Address is required.';
        invalid=true
      }
      
    if (city.value.trim() === '') {
        document.getElementById('ci-error').textContent = 'City is required.';
        invalid=true
      } 

    if (state.value.trim() === '') {
        document.getElementById('st-error').textContent = 'State is required.';
        invalid=true
      }

    if (zip.value.trim() === '') {
        document.getElementById('zi-error').textContent = 'Zip is required.';
        invalid=true
      } 

    if (birthMonth.value === 'Please select a month' || birthDay.value === 'Please select a day' || birthYear.value === 'Please select a year') {
        document.getElementById('birthDate').textContent='Please Enter DOB';
        invalid=true
      
    }

    if (howDidYouHear.value ==='Please Select') {
        document.getElementById('howDidYouHear').textContent='Please select any one option';
        invalid=true
    }

    if(!invalid)
    {
      form.submit();

    }

  


  });