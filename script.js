let qrtext = document.querySelector("#qrtext");
let qrimg = document.querySelector("#qrimg");
let imgbox = document.querySelector("#imgbox");



function generateQR(){
  if(qrtext.value.length>0){
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;
    imgbox.style.maxHeight="100%";
  }
  else{
    qrtext.classList.add("error");
    setTimeout(() => {
     qrtext.classList.remove("error");
    }, 1000);
  }

}