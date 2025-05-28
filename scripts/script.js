const servicesData = [
    {
        icon: "img/ic_scales.svg",
        alt: "icon scales",
        text: "Актуальные статьи"
    },
    {
        icon: "img/ic_note.svg",
        alt: "icon note",
        text: "Шаблоны исков и обращений"
    },
    {
        icon: "img/ic_question.svg",
        alt: "icon question",
        text: "Ответы на самые популярные вопросы"
    }
];

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

const servicesContainer = document.querySelector('.services');

servicesData.forEach(service => {
    const serviceItem = document.createElement('div');
    serviceItem.classList.add('services__item');

    serviceItem.innerHTML = `
        <img class="services__item_img" src="${service.icon}" alt="${service.alt}">
        <p class="services__item_text">${service.text}</p>
    `;

    servicesContainer.appendChild(serviceItem);
});

window.onclick = function(event) {
  console.log('Закрыто модальное окно нажатием в затемнение')
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
}