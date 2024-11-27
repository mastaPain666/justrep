const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click', ()=> {
    const valueInput = input.value.trim();
    if (valueInput !== "") {
        localStorage.setItem('name', valueInput)
        renderGreet()
    } else {
        alert('Введите имя!')
    }
})

function renderGreet() {
    const name = localStorage.getItem('name');
    if (name) {
        container.innerHTML = `Добрый день, ${name}`
        input.value = name;
    } else {
        container.innerHTML = 'Добрый день, Незнакомец!'
    }
}

renderGreet()