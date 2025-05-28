function openModal() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const question = document.getElementById("question").value.trim();

    if (!name || !email || !question) {
        alert("Заполнены не все поля")
        console.log('Что то было не заполнено')
        return;
    }
    console.log('Форма отправлена')
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    console.log('Закрыто модальное окно')
    document.getElementById("modal").style.display = "none";
}

const serviceContainer =  document.querySelector('.services');
    if (serviceContainer) {
    const apiUrl = 'data.json';

    const serviceItem = (icon, alt, text, id) => {
        const item = `
            <div id="${id}"  class="services__item">
                <img class="services__item_img" src="${icon}" alt="${alt}">
                <p class="services__item_text">${text}</p>
            </div>
        `

        return item
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Данные
            console.log(typeof (data)); // Тип полученных данных
            data.forEach(item => {
                const service = serviceItem(item.icon, item.alt, item.text, item.id);
                serviceContainer.insertAdjacentHTML('beforeend', service);
            });
        })  
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}


window.onclick = function(event) {
  console.log('Закрыто модальное окно нажатием в затемнение')
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
}

// Preloader страницы
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
        content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}