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
        else if(this.innerHTML == "DEL"){
            let str=value.innerHTML;
            value.innerHTML = str.substring(0,str.length-1);
        }
        else if(this.innerHTML == "√x"){
            let str=value.innerHTML;
            let val=parseInt(str);
            value.innerHTML = Math.sqrt(val);
        }
        else if(this.innerHTML == `x<sup>2</sup>`){
            let str=value.innerHTML;
            let val=parseInt(str);
            value.innerHTML = Math.pow(val,2);
        }
        else{
            value.innerHTML+=this.innerHTML;
        }
    })
}