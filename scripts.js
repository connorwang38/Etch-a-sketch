let body = document.querySelector('#grid');
let button = document.createElement('button');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.classList.add('white');
        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';
        });
        body.appendChild(div);
    }
    body.appendChild(document.createElement("br"));
}