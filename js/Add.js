document.getElementById('submit').addEventListener("click", function(){
    

    const pin=document.getElementById('pin').value;
    if(pin=='1234'){
         const addMoney=document.getElementById('input-money').value;

         const Balance=parseInt(document.getElementById('balance').innerText);
         
         const newBalance=addMoney+Balance;

         document.getElementById('')



    }
    else{
        alert("invalid pin");
    }



    

})
