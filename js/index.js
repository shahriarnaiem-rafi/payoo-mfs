//search : form submit reloading the page

//set event handaler

document.getElementById('btn-login').addEventListener('click',function(event){
    //step-2 reloding browser off
      event.preventDefault();//relode bondo kore  --  log in ar pore
      console.log('login');
      //step-3: get the phone
      const phoneNumber=document.getElementById('phone-number');
      console.log(phoneNumber.value);
      
      
})
