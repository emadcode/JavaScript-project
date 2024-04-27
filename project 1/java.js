let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");
//داله لحساب سعر دولار ونتيجه بالمصري
dollar.onkeyup =function(){
    pound.value =dollar.value * 50;
}
//لعمل العكس الداله الاوله  
pound.onkeyup =function(){
    dollar.value =pound.value / 50;
}


