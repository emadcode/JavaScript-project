let after=document.getElementById('after');
let before=document.getElementById('before');
let append=document.getElementById('append');
let content=document.getElementById('content');
let containar=document.getElementById('containar');


containar.style.background ='red';
containar.style.height='50px';

after.onclick =function(){
    containar.after(content)
}
before.onclick =function(){
    containar.before(content)
}
append.onclick =function(){
    containar.append(content)
}

