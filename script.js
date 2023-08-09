var flag=false

function buttonclick(val)
{
    var screen= document.getElementById("screen");
    if(val == '.' && flag != true ){
        screen.value+=val;
        flag=true;
    }else if(val == '+' || val == '-' || val == '*' || val == '/'){
    
        screen.value+=val 
        flag=false;
    }else{

        screen.value+=val
    }

}
function equalclick()

{

    flag=false;
    var text=document.getElementById("screen").value

    var result=eval(text)
    document.getElementById("screen").value=result
}