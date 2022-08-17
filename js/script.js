function muda_cor(){
    num1 = Math.trunc(Math.random() * 255); 
    num2 = Math.trunc(Math.random() * 255); 
    num3 = Math.trunc(Math.random() * 255); 
    document.getElementById('principal').style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
}