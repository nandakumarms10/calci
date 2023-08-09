var flag=false
var num ='';
function buttonclick(val)
{
    num = val;
    var screen= document.getElementById("screen");
    if(val == '.' && flag !=true ){
        screen.value+=num;
        flag=true;
    }else if(val == '+' || val == '-' || val == '*' || val == '/'){
    
        screen.value+=num 
        flag=false;
    }else{
        if(val != '.'){
        screen.value+=num;
        }
    }

}
function equalclick()

{

    flag=false;
    var text=document.getElementById("screen").value

    var result=eval(text)
    document.getElementById("screen").value=result
    num ='';

}