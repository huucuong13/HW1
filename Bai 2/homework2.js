// Bai 2
const a = Number(prompt('Nhap a: '));
const b = Number(prompt('Nhap b: '));
let body = document.getElementsByTagName('body')[0];
body.innerHTML += `<div>Cac so nguyen to trong khoang ${a} va ${b} la: </div>`

for (let i = a; i <= b; i++) {
    let temp = 0;
    if (i == 2) {
        body.innerHTML += `<div>${i}</div>`
    }

    else if (i > 2 && i % 2 != 0) {
        for (let j = 3; j <= Math.sqrt(i); j += 2) {
            if (i % j == 0) {
                temp = 1;
                break;
            }
        }

        if (i > 1 && temp == 0) {
            body.innerHTML += `<div>${i}</div>`
        }
    }
}
