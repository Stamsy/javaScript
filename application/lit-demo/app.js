import { render } from 'https://unpkg.com/lit-html?module';
import { table } from './table.js';

// const p = (name, className) => html`<p class=${className}>Hello ${name}!</p>`;
// const input = (value) => html`<input <input .value=${value}>`
// // const p = document.createElement('p');
// // p.textContent = 'Hello, World!';
// render(p('Peter', 'content'), document.querySelector('nav'));
// render(input('hello'), document.querySelector('main'));
// const timer = (time) => html `
// <p>The time is ${time}</p>
// <p>Have a nice day!</p>`;
// const message = () => html`<p>Static meesage</p>`
// const root = document.querySelector('main');
// function show() {
//     render(message(), root);
// }
// function update() {
//     render(timer(new Date()), root);
// }
// document.querySelector('button').addEventListener('click', update);
// setInterval(update, 1000);
// window.show = show;
// window.update = update;

// const tableRow = ({ name, id }) => html`
// <tr>
//     <td>${name}</td>
//     <td><button @click=${onDelete.bind(null, id)}>Delete</button></td>
// </tr>`;

const data = [
    {
        name: 'Peter',
        id: 'asd1',
        canEdit: false,
        style: {
            color: 'red',
            border:'1px solid black'
        }
    },
    {
        name: 'Mart',
        id: 'asd2',
        canEdit: true,
        highlight: {
            active: true,
            content: true
        }
    },
    {
        name: 'John',
        id: 'asd3',
        canEdit: false
    }
]

const root = document.querySelector('main');

update()

function onClick(id) {
    const index = data.findIndex(i => i.id == id);
    data.splice(index, 1);
    update();
}

function update() {
    render(table(data, onClick), root);
}