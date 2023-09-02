

function add(){
event.preventDefault()
let name = document.querySelector("#phoneNumber").value;
let display = document.querySelector(".display");

let pic = check(name); 
display.appendChild(pic);
pic.style.height = "100px"
 
}
function check(phoneNumber){
if(phoneNumber.startsWith("0803" )|| phoneNumber.startsWith("0806")||
phoneNumber.startsWith("0816")||phoneNumber.startsWith("0703")||
phoneNumber.startsWith("0706")||phoneNumber.startsWith("0810")||
phoneNumber.startsWith("0814")||phoneNumber.startsWith("0903")||
phoneNumber.startsWith("0906")||
phoneNumber.startsWith("0813")||phoneNumber.startsWith("0704")
){
  let mtn = document.createElement("img")
     mtn.src = "image/mtn.png";
     return mtn;
    
}
if(phoneNumber.startsWith("0802" )|| phoneNumber.startsWith("0807")||
phoneNumber.startsWith("0805")||phoneNumber.startsWith("0811")||
phoneNumber.startsWith("0905")||phoneNumber.startsWith("0815")||
phoneNumber.startsWith("0705")|| phoneNumber.startsWith("0915")
){
   let glo = document.createElement("img");
    glo.src = "image/glo.png";
    return glo;
}
if(phoneNumber.startsWith("0802" )|| phoneNumber.startsWith("0802")||
phoneNumber.startsWith("0808")||phoneNumber.startsWith("0812")||
phoneNumber.startsWith("0701")||phoneNumber.startsWith("0708")||
phoneNumber.startsWith("0902")||phoneNumber.startsWith("0907")||
phoneNumber.startsWith("0912")|| phoneNumber.startsWith("0904")||
phoneNumber.startsWith("0911")){
    let airtel = document.createElement("img");
    airtel.src = "image/airtel.png";
    return airtel;
}
if(phoneNumber.startsWith("0809" )|| phoneNumber.startsWith("0817")||
phoneNumber.startsWith("0818")||phoneNumber.startsWith("0909")||
phoneNumber.startsWith("0908")||phoneNumber.startsWith("0815")
){
    let etisalate = document.createElement("img");
    etisalate.src = "image/9mobile.png";
    return etisalate;
}

}
