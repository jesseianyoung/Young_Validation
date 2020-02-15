function validateCheckbox(){
    var checkboxes = document.getElementsByName("check");
    var a = 0;

    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            a++;  
    }  
    if(a<1)  
    {  
        alert("You need to check at least one of the choices.");  
    } 
    
}

function validateDropbox(){
   
        var dropbox = document.getElementbyId("Events");
        var selected = dropbox.options[dropbox.selectedIndex].value;

        var selected = dropbox.options[dropbox.selectedIndex].text;
        if(selected==0)
        {
            alert("Choose one or more");
        }
}

function validateTextbox() 
{  
    if((document.getElementById("1").value=="")&&(document.getElementById("2").value=="")&&(document.getElementById("3").value=="")){
        //alert("Fill up the Event Title");
        alert(" Required Fill up the Date.");
    }
    if (document.getElementById("1").value == "") {
        alert("Fill up the Event Title first");
    }
    else if((document.getElementById("2").value=="")&&(document.getElementById("3").value=="")&&(document.getElementById("4").value=="")){
        alert(" Required Fill up the Date.");
        alert(" Required Fill up the posting dates");
    }
    else if (document.getElementById("2").value == "") {
        alert(" Required Fill up the Date.");
    }
    else if (document.getElementById("3").value == "") {
        alert(" Required Fill up the Date.");
    }
    else if (document.getElementById("4").value == "") {
        alert(" Required Fill up the posting dates.");
    }
    
}
function clear(){
    y2=document.getElementById("Events").value="";
    x1=document.getElementById("1").value="";
    x2=document.getElementById("2").value="";
    x3=document.getElementById("3").value="";
    x4=document.getElementById("4").value="";

    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    document.getElementById("e").checked=false;


} 
function reset(){
    y2=document.getElementById("Events").value="";
    x1=document.getElementById("1").value="";
    x2=document.getElementById("2").value="";
    x3=document.getElementById("3").value="";
    x4=document.getElementById("4").value="";

    document.getElementById("a").checked=false;
    document.getElementById("b").checked=false;
    document.getElementById("c").checked=false;
    document.getElementById("d").checked=false;
    document.getElementById("e").checked=false;
    alert("The event is cancel");
}  
function validate(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var d=document.getElementById("d").value;
    var e=document.getElementById("e").value;

    var y2=document.getElementById("Events").value;
    var x1=document.getElementById("1").value;
    var x2=document.getElementById("2").value;
    var x3=document.getElementById("3").value;
    var x4=document.getElementById("4").value; 
    if(y2 && x1 && x2 && x3 && x4!=""){
    alert(" Save Successful Validation");
        alert("Event Type"+" "+y2+" \n"+"Event Title is"+" "+x1+"\n "+"Event dates"+" "+x2+" "+" To "+x3+" \n"+"Posting Dates: "+" "+x4+" \n");
        clear();
    }
    
    else{
    validateTextbox();
    validateCheckbox();
    validateDropbox();
    } 
}