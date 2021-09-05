let orderButton= document.querySelectorAll(".order-button");
let orderForm= document.querySelector(".order-form");

document.addEventListener("click", function(event){
    orderButton.forEach(element => {
        if(event.target===element){
            console.log(orderButton)
        console.log(event.target)
            orderForm.scrollIntoView({block: "center", behavior: "smooth"});
        }
          
    });
    
})
