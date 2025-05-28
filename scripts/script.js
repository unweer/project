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

window.onclick = function(event) {
  console.log('Закрыто модальное окно нажатием в затемнение')
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
}