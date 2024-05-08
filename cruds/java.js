// get total
// save localstorge
// clear inputs
// read
// count
// delete
// update
//search
// clean date

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total =document.getElementById('total');
let discount= document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


//console.log(title,price,taxes,ads,small,count,category,submit)

//get total
function gettotal(){
if(price.value !=''){
  let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
  total.innerHTML = result;
  total.style.background='#040';
}else{
  total.innerHTML ='';
  total.style.background='#ff0000';
}

}

// create product 
let datapro;
if (localStorage.product != null)
{
  datapro =JSON.parse (localStorage.product)
}else{
  datapro =[]; 
}


submit.onclick = function(){
  let newomda ={
    title:title.value,
    price:price.value,
    taxes:taxes.value, 
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
    datapro:datapro.value,

  }
  //save localstorage
  datapro.push(newomda);

  localStorage.setItem('product', JSON.stringify(datapro) )
  cleardata()
}

// clear inputs

function cleardata(){
  title.value ='';
price.value='';
taxes.value='';
discount.value='';  
ads.value='';
total.innerHTML='';
count.value='';
category.value='';
}