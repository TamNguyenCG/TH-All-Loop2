let n = +prompt('Nhập số giai thừa: ')
let gt = 1
for (let i = 1; i <= n; i++) {
    if (n == 0) {
        document.write(`Giai thừa của ${n} là: ${1}`)
    }
    gt *= i;
}
document.write(`Giai thừa của ${n} là: ${gt}`)