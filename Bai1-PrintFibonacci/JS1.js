let n=+prompt("Độ dài dãy Fibonacci: ")
let a=0
let b=1
let sum=0
for (let i = 0; i < n; i++) {
    sum=a+b;
    document.write(sum+"<br>")
    a=b;
    b=sum;
}
