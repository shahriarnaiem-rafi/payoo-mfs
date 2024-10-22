// //search : form submit reloading the page

// //set event handaler

// document.getElementById('btn-login').addEventListener('click',function(event){
//     //step-2 reloding browser off
//       event.preventDefault();//relode bondo kore  --  log in ar pore
//       console.log('login');


//       //step-3: get the phone
//       const phoneNumber=document.getElementById('phone-number').value
     
//       //get pin
//       const pinNumber=document.getElementById('input-field').value;
//       console.log(phoneNumber, pinNumber);
//       //validate phone and pin
//     //this is temporary
//       if(phoneNumber==='5' && pinNumber==='1234'){
//         console.log('you are logged in');
//         //step-5: allow user to use the website
//       }
        
//       else{
//         alert("rong number or pin");
//       }
// })


//repet




document.getElementById('btn-login').addEventListener('click',function(event){

  event.preventDefault();
  
  const phoneNumber=document.getElementById('phone-number').value;
  const pinNumber=document.getElementById('input-field').value;

  console.log(phoneNumber,pinNumber);

  if( phoneNumber==='01301441194' & pinNumber==='457082'){
    console.log("your are loged in");
    window.location.href ='./payoohome.html';
  }
  else{
    alert('invalid number or pin');
  }

  
  
})