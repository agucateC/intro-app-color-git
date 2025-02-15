// Ejecutar el código cuando el DOM haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 🔹 Referencias a los elementos del DOM
    const redRange = document.getElementById("redRange"); // Control deslizante para el color rojo
    const greenRange = document.getElementById("greenRange"); // Control deslizante para el color verde
    const blueRange = document.getElementById("blueRange"); // Control deslizante para el color azul

    const redInput = document.getElementById("redInput"); // Campo numérico para el color rojo
    const greenInput = document.getElementById("greenInput"); // Campo numérico para el color verde
    const blueInput = document.getElementById("blueInput"); // Campo numérico para el color azul

    const colorPicker = document.getElementById("colorPicker"); // Selector de color HEX
    const colorBox = document.getElementById("colorBox"); // Cuadro de color que cambia dinámicamente
    const hexCode = document.getElementById("hexCode"); // Texto donde se muestra el código HEX

    /**
     * 🔹 Función para actualizar el color del cuadro y el código HEX
     */
    function updateColor() {
        // Obtener valores RGB desde los controles deslizantes
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);

        // Sincronizar los valores de los inputs numéricos con los sliders
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Crear el color en formato RGB y aplicarlo al cuadro de color
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = rgbColor;

        // Convertir el color RGB a HEX
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        
        // Mostrar el código HEX en la interfaz y actualizar el selector de color
        hexCode.textContent = `Código HEX: ${hexColor}`;
        colorPicker.value = hexColor;
    }

    /**
     * 🔹 Función para sincronizar los inputs numéricos con los sliders
     * Se ejecuta cuando el usuario escribe valores manualmente en los inputs de número
     */
    function syncInputs() {
        // Obtener valores numéricos de los inputs
        const red = parseInt(redInput.value);
        const green = parseInt(greenInput.value);
        const blue = parseInt(blueInput.value);

        // Validar que los valores estén dentro del rango 0-255 antes de actualizar los sliders
        if (red >= 0 && red <= 255) redRange.value = red;
        if (green >= 0 && green <= 255) greenRange.value = green;
        if (blue >= 0 && blue <= 255) blueRange.value = blue;

        // Actualizar el color mostrado
        updateColor();
    }

    /**
     * 🔹 Función para sincronizar los sliders con el selector de color HEX
     * Se ejecuta cuando el usuario selecciona un color con el input type="color"
     */
    function syncColorPicker() {
        const hexColor = colorPicker.value; // Obtener el color HEX seleccionado

        // Convertir el valor HEX a valores RGB individuales
        const red = parseInt(hexColor.substr(1, 2), 16);
        const green = parseInt(hexColor.substr(3, 2), 16);
        const blue = parseInt(hexColor.substr(5, 2), 16);

        // Actualizar los sliders y los inputs con los valores extraídos del HEX
        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Aplicar los cambios visuales en el cuadro de color
        updateColor();
    }

    // 🔹 Agregar eventos a los controles

    // Detectar cambios en los sliders y actualizar el color
    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    // Detectar cambios en los inputs numéricos y sincronizar con los sliders
    redInput.addEventListener("input", syncInputs);
    greenInput.addEventListener("input", syncInputs);
    blueInput.addEventListener("input", syncInputs);

    // Detectar cambios en el selector de color HEX y actualizar los controles
    colorPicker.addEventListener("input", syncColorPicker);

    // 🔹 Inicializar el color al cargar la página
    updateColor();
});
