let buttons=document.querySelectorAll("button")
let input=document.querySelector("input");

for(let btn of buttons){
    btn.addEventListener("click",function(e){
        let btntext=e.target.innerText
        if(btntext==='C'){
            input.value="";
        }
        else if(btntext==='='){
            try{
                input.value=eval(input.value)
            }
            catch(err){
                input.value="err"
            }
           
        }
        else{
            input.value+=btntext
        }
    })
}