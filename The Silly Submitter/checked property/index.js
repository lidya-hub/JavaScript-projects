const mycheckbox = document.getElementById("mycheckbox");
const radioBtn=document.getElementById("radioBtn");
const masterCard=document.getElementById("masterCard");
const payPal=document.getElementById("payPal");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(mycheckbox.checked){
        subResult.textContent= `you are subscribed`;
    }
    else{
        subResult.textContent= `you are not subscribed`;
    }
    if(radioBtn.checked){
        paymentResult.textContent=`you are paying with visa`
    }else if(masterCard.checked){
        paymentResult.textContent=`you are paying with master card`
    }else if(payPal.checked){
        paymentResult.textContent=`you are paying with pay pal`

    }
    else{
        paymentResult.textContent=`you are not paying with any method`
    }

}






