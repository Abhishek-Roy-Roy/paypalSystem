document.getElementById('logins').addEventListener('click' , function() {
    
   document.getElementById('login-area').style.display= 'none'
   document.getElementById('transaction-area').style.display='block'




} )
// handle deposit area//
document.getElementById('addDeposit').addEventListener('click',function(){

   const deposit= document.getElementById('Depositamount').value;
   const convertNumber= parseFloat(deposit);
   const totaldeposit=  document.getElementById('currentDeposit').innerText;
   const convert = parseFloat(totaldeposit);
   
  const fullbal=  document.getElementById('currentDeposit').innerText= convertNumber+ convert; 
  const balance=  document.getElementById('Fullbalance').innerText;
  const converts= parseFloat(balance);
  document.getElementById('Fullbalance').innerText= converts+convertNumber;
  document.getElementById('Depositamount').value= "";


   
})
//handle withdraw button//
document.getElementById('addwithdraw').addEventListener('click',function(){
   const withdrawssss = document.getElementById('withdrawinput').value;
   const convertss = parseFloat(withdrawssss);

   const innerwithdraw= document.getElementById('withdraws').innerText;
   const convert2= parseFloat(innerwithdraw);
   const fulltotal= document.getElementById('withdraws').innerText = convertss + convert2;


   const withdrawbalance = document.getElementById('Fullbalance').innerText;
   const covertor = parseFloat(withdrawbalance);
    document.getElementById('Fullbalance').innerText = covertor - convertss;

   

})

