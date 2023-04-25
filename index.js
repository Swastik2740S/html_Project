const userText=document.getElementById("userText");
const btn=document.querySelector(".btn");
btn.foreach(element => {
    element.addEventlistener('click',()=>{
        console.log(e.target.textContent);

    })
    
});