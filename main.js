var buttons=document.querySelectorAll("button");
const input=document.querySelector("input");
const button=document.getElementById("button");






buttons.forEach((item)=>{
  item.onclick=()=>{
 
 if(item.innerText=="="){
   
     let result=eval(input.value);
     input.value=result;
   }else if(item.innerText=="C"){
    input.value="";
  }else if(item.innerText=="AC"){
    input.value=input.value.slice(0,-1);
  }
  else{
    input.value+=item.innerText;  
  }
   
  }
  

})

