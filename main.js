let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Your Task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<img src="./icons/del.png">`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("img").addEventListener("click", remove);
        
        function remove(){
            newEle.remove()
        }
        
    }
}