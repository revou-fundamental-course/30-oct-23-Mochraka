var umur =document.getElementById('#usia')
var pria =document.getElementById('#pria')
var wanita =document.getElementById('#wanita')
var reset =document.getElementById('#reset')
var berat =document.getElementById('abot')
var tinggi =document.getElementById('dhuwur')
let button =document.querySelector(".hitung")
let result =document.querySelector(".hasil")
let hasil =document.getElementById('hasil')
let category =document.getElementById("kategori") 
button.addEventListener("click", function(){
	 var BMI=berat.value/(tinggi.value*tinggi.value);
hasil.innerHTML = BMI.toFixed(2);

if(BMI< 18.5){
	document.getElementById("kategori").innerText ='berat badan anda kurang';
}else if(18.5<=BMI&&BMI<=24.9){
	document.getElementById("kategori").innerText ='berat badan anda ideal';
}else if(25<=BMI&&BMI<=29.9){
	document.getElementById("kategori").innerText ='berat badan anda berlebih';
}else if(30<=BMI){
	document.getElementById("kategori").innerText ='anda obesitas';
}});
