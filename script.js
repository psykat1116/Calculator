let buttons=document.querySelector('.calculator');
let btn=document.querySelectorAll('span');
let value=document.querySelector('.value');

for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
            console.log("Clicked");
        }
        else if(this.innerHTML == "Clear"){
            value.innerHTML = "";
        }
        else{
            value.innerHTML+=this.innerHTML;
        }
    })
}