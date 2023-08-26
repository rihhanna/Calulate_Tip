document.querySelector("#calculate").addEventListener("click",function(){
    let bill = document.querySelector("#input").value*1 ;
    let tip=document.querySelector("#input").value*0.15 ;
    let tip2=document.querySelector("#input").value *0.20;
    let total=bill+tip ;
    let total2=bill+tip2;
    if (bill>=50 && bill<=300){
        document.querySelector("#tip_amount").innerHTML="with 15% tip your total is:$"+total 
    }else{
        document.querySelector("#tip_amount").innerHTML="with 20% tip your total is:$"+total2 

    }
    

})