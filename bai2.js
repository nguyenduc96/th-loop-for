function toTal(){
    let num = parseInt(document.getElementById('input').value);
    let total = 0;
    let text ="";
    let i;
    for (i=1;i<=num;i+=1){
        total = total + i;
        text = "Tổng = " + total;
    }
    document.getElementById('output').innerHTML=text;
}