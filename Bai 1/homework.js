// Bai 1

let r = prompt('Nhập số dòng: ');
let c = prompt('Nhập số cột: ');
let body = document.getElementsByTagName('body')[0];
let tbl = document.createElement('table');

let tbdy = document.createElement('tbody');

body.appendChild(tbl);
tbl.style.width = '100%';
tbl.appendChild(tbdy);
for (let i = 0; i < r; i++) {
    tbdy.innerHTML += `<tr class="tr"></tr>`;
}

// let tr = document.getElementsByClassName('tr');
// [...tr].forEach((element) => {
//     for (let i = 0; i < c; i++) {
//         element.innerHTML += `<td><input type="text"></td>`;
//     }
// });

let tr = document.querySelectorAll('.tr');
tr.forEach((element) => {
    for (let i = 0; i < c; i++) {
        element.innerHTML += `<td><input type="text"></td>`;
    }
});

console.log(tr[0].childElementCount)

let input = document.getElementsByTagName('input');
[...input].forEach((element) => {
    element.style.width = `calc(100vw/${tr[0].childElementCount})`;
})




















