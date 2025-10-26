function saveFormData(event) {
    event.preventDefault();

    const form = document.getElementById('orderForm');
    const formData = {};
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const key = input.placeholder;
        const value = input.value;

        if (value) {
            formData[key] = value;
        }
    });

    console.log("--- DATOS DEL PEDIDO CAPTURADOS ---");
    console.log(formData);
    console.log("----------------------------------");

    alert("¡Pedido enviado!");
    form.reset();
}

//Para la ventana emergente

const toggleBtn = document.getElementById('togglePopupBtn');
const infoPopup = document.getElementById('infoPopup');

toggleBtn.addEventListener('click', togglePopup);

function togglePopup() {
    infoPopup.classList.toggle('visible');

    const icon = toggleBtn.querySelector('i');

    if (infoPopup.classList.contains('visible')) {
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
        icon.style.transform = 'rotate(0deg)';
    }
}