let arrow = document.querySelector(".arrow");
let arrowRotation = document.querySelector(".arrow__rotation");
let blockImg=document.querySelector(".reviews-wrapper_block");
let reviewsWrapper=document.querySelector(".reviews-wrapper");

document.addEventListener("click", function(event){
    if(blockImg.offsetLeft<=-reviewsWrapper.getBoundingClientRect().width*2)return;
    if(event.target===arrow){
        blockImg.style.left=blockImg.offsetLeft-reviewsWrapper.getBoundingClientRect().width+"px";
    }    
})
document.addEventListener("click", function(event){
    if(blockImg.offsetLeft>=0)return;
    if(event.target===arrowRotation){
        blockImg.style.left=blockImg.offsetLeft+reviewsWrapper.getBoundingClientRect().width+"px";
    }   
})

