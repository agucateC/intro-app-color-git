document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    // Función para actualizar el cuadro de color y el código hexadecimal
    function updateColor() {
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);

        // Actualizar los valores de los campos de entrada
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Actualizar el color del cuadro
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = rgbColor;

        // Convertir a código hexadecimal y actualizar el selector de color
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        hexCode.textContent = `Código HEX: ${hexColor}`;
        colorPicker.value = hexColor;
    }

    // Función para sincronizar los inputs con los rangos
    function syncInputs() {
        const red = parseInt(redInput.value);
        const green = parseInt(greenInput.value);
        const blue = parseInt(blueInput.value);

        // Validar valores dentro del rango
        if (red >= 0 && red <= 255) redRange.value = red;
        if (green >= 0 && green <= 255) greenRange.value = green;
        if (blue >= 0 && blue <= 255) blueRange.value = blue;

        // Actualizar el cuadro de color
        updateColor();
    }

    // Función para sincronizar con el color picker
    function syncColorPicker() {
        const hexColor = colorPicker.value;

        // Convertir el valor HEX a RGB
        const red = parseInt(hexColor.substr(1, 2), 16);
        const green = parseInt(hexColor.substr(3, 2), 16);
        const blue = parseInt(hexColor.substr(5, 2), 16);

        // Actualizar los controles de rango y de entrada
        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Actualizar el cuadro de color
        updateColor();
    }

    // Eventos para los controles de rango
    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    // Eventos para los campos de entrada numérica
    redInput.addEventListener("input", syncInputs);
    greenInput.addEventListener("input", syncInputs);
    blueInput.addEventListener("input", syncInputs);

    // Evento para el selector de color
    colorPicker.addEventListener("input", syncColorPicker);

    // Inicializar el color al cargar la página
    updateColor();
});
