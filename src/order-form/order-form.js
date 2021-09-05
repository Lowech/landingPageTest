let newPrice= document.querySelector(".container-new-price");
 
setInterval (function rotationBlock(){
    newPrice.style.transition="all 1s ease 0s";
    newPrice.style.transform='rotate(' + 720 + 'deg)';
 },2000);

 setInterval (function rotationBlock1(){
   newPrice.style.transform='rotate(' + 0 + 'deg)';
},4000);

let nameQuestion= document.querySelector(".order-form__name-question");
let orderFormName= document.querySelector(".order-form__name");
let numberQuestion= document.querySelector(".order-form__number-question");
let orderFormNumber= document.querySelector(".order-form__number");
let block=  document.createElement('div');
document.addEventListener("mouseover", function(event){
    
    if(event.target===nameQuestion){
        block.classList.add("name-hint")
        block.innerHTML="напишите ваше имя. например Иван";
        document.body.append(block);
        block.style.left=orderFormName.getBoundingClientRect().left+20+"px";
        block.style.top=document.documentElement.scrollTop+orderFormName.getBoundingClientRect().top-50+"px";
    }
    if(event.target===numberQuestion){
        block.classList.add("name-hint")
        block.innerHTML="напишите ваш номер. например 8 999 999 99 99";
        document.body.append(block);
        block.style.left=orderFormNumber.getBoundingClientRect().left+20+"px";
        block.style.top=document.documentElement.scrollTop+orderFormNumber.getBoundingClientRect().top-50+"px";
    }
})

document.addEventListener("mouseout", function(event){
    
   if(event.target===nameQuestion || event.target===numberQuestion){
        block.remove();
    }
})

let timer= document.querySelector(".timer");
let sec=0;//таймер минуты/
let min=30;//таймер секунды/
timer.innerHTML=`${min}:0${sec}`;
function infotime()
{
    
    if(min==0 && sec==0)return;
    if(sec==0 ){
        min--;
    }
    if(sec==0 )
    {
        sec=60;
    }
    sec--;
    timer.innerHTML=`${min} : ${sec} минут`; 
    if(sec<10)
    {
        timer.innerHTML=`${min} : 0${sec} минут`;    
    } 
}
setInterval(()=>infotime(),1000);