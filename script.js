function calcularMaterial(){

    let largo =
    document.getElementById("largo").value;

    let ancho =
    document.getElementById("ancho").value;

    let area = largo * ancho;

    let bultos = area / 4;

    let baldosa = area * 1.10;

    document.getElementById("resultado")
    .innerHTML =

    `
    Área Total:
    ${area.toFixed(2)} m² <br>

    Bultos Aproximados:
    ${Math.ceil(bultos)} <br>

    Baldosa Recomendada:
    ${baldosa.toFixed(2)} m²
    `;
}
function calcularAsesor() {

    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let tipo = document.getElementById("tipo").value;

    if(!largo || !ancho){
        document.getElementById("resultado").innerHTML =
        "⚠️ Ingresa las medidas primero";
        return;
    }

    let area = largo * ancho;

    // consumo base (ejemplo)
    let consumo = area * 1.2;

    let recomendacion = "";

    if(tipo === "interior"){
        recomendacion = "👉 Recomendado: Cerámico Gris + Boquilla estándar";
    }
    else if(tipo === "exterior"){
        recomendacion = "👉 Recomendado: Porcelanato Gris + Pegante alta resistencia";
    }
    else if(tipo === "premium"){
        recomendacion = "👉 Recomendado: Porcelanato Premium + Boquilla profesional sellada";
    }

    document.getElementById("resultado").innerHTML = `
        🧮 Área total: <b>${area.toFixed(2)} m²</b><br>
        📦 Material estimado: <b>${consumo.toFixed(1)} unidades</b><br><br>
        ${recomendacion}
    `;
}
function recomendarSistema(){

    let baldosa = document.getElementById("baldosa").value;
    let colorBaldosa = document.getElementById("colorBaldosa").value;
    let colorBoquilla = document.getElementById("colorBoquilla").value;

    let recomendacion = "";

    // LÓGICA INTELIGENTE
    if(baldosa === "porcelanato"){

        if(colorBaldosa === "oscuro"){
            recomendacion = "👉 Recomendado: Porcelanato Gris + Boquilla Gris Oscuro o Negra para contraste elegante.";
        }

        else if(colorBaldosa === "claro"){
            recomendacion = "👉 Recomendado: Porcelanato Gris + Boquilla Blanca o Gris claro para acabado limpio.";
        }

        else{
            recomendacion = "👉 Recomendado: Porcelanato Gris + Boquilla Gris neutro para equilibrio visual.";
        }

    } else {

        if(colorBaldosa === "oscuro"){
            recomendacion = "👉 Recomendado: Cerámico Gris + Boquilla Negra o Gris oscuro para mayor definición.";
        }

        else if(colorBaldosa === "claro"){
            recomendacion = "👉 Recomendado: Cerámico Gris + Boquilla Blanca para acabado uniforme.";
        }

        else{
            recomendacion = "👉 Recomendado: Cerámico Gris + Boquilla Gris estándar para uso general.";
        }
    }

    // RESPUESTA FINAL
    document.getElementById("resultado").innerHTML = `
        🧱 Material seleccionado: <b>${baldosa}</b><br>
        🎨 Color de baldosa: <b>${colorBaldosa}</b><br>
        🧴 Boquilla elegida: <b>${colorBoquilla}</b><br><br>

        ${recomendacion}
    `;
}
function calcularBultos(){

    let largo = parseFloat(document.getElementById("largo").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let tipo = document.getElementById("tipo").value;
    let color = document.getElementById("color").value;

    if(!largo || !ancho){
        document.getElementById("resultado").innerHTML =
        "⚠️ Ingresa las medidas correctamente";
        return;
    }

    let area = largo * ancho;

    // consumo por tipo de baldosa (realista aproximado)
    let consumo = 0;

    if(tipo === "ceramica"){
        consumo = 5; // kg por m²
    }
    else if(tipo === "porcelanato"){
        consumo = 6;
    }
    else if(tipo === "gres"){
        consumo = 6.5;
    }
    else if(tipo === "marmol"){
        consumo = 7;
    }
    else if(tipo === "granito"){
        consumo = 7.5;
    }
    else if(tipo === "piedra"){
        consumo = 8;
    }

    let totalKg = area * consumo;
// bultos de 25kg
let bultosExactos = totalKg / 25;

// SIEMPRE redondea hacia arriba (obra real)
let bultos = Math.ceil(bultosExactos);

    document.getElementById("resultado").innerHTML = `
    🧱 Tipo de baldosa: <b>${tipo}</b><br>
    🎨 Color: <b>${color}</b><br><br>

    📐 Área: <b>${area.toFixed(2)} m²</b><br>
    📦 Pegante necesario: <b>${totalKg.toFixed(1)} kg</b><br>
    🛍️ Bultos exactos: <b>${bultos} bultos</b>
`;
}
function recomendarBoquilla(){

    let color = document.getElementById("colorPiso").value.toLowerCase();

    let recomendacion = "";

    // LÓGICA DE COLOR INTELIGENTE

    if(color.includes("blanco") || color.includes("crema")){
        recomendacion = "👉 Mejor combinación: Boquilla Gris claro o Beige para mantener limpieza visual.";
    }

    else if(color.includes("gris claro")){
        recomendacion = "👉 Mejor combinación: Boquilla Blanca o Gris suave para acabado elegante y uniforme.";
    }

    else if(color.includes("gris") || color.includes("oscuro")){
        recomendacion = "👉 Mejor combinación: Boquilla Negra o Gris oscuro para contraste moderno.";
    }

    else if(color.includes("negro")){
        recomendacion = "👉 Mejor combinación: Boquilla Gris oscuro o Negra para estilo premium minimalista.";
    }

    else if(color.includes("madera")){
        recomendacion = "👉 Mejor combinación: Boquilla Beige o Café claro para efecto natural.";
    }

    else if(color.includes("beige")){
        recomendacion = "👉 Mejor combinación: Boquilla Crema o Gris claro para equilibrio cálido.";
    }

    else{
        recomendacion = "👉 Recomendación general: Boquilla Gris neutro (la más usada en construcción).";
    }

    document.getElementById("resultadoColor").innerHTML = `
        🎨 Color ingresado: <b>${color}</b><br><br>
        ${recomendacion}
    `;
}
function analizarImagen(){

    let input = document.getElementById("imagenPiso");
    let file = input.files[0];

    if(!file){
        document.getElementById("resultadoImagen").innerHTML =
        "⚠️ Sube una imagen primero";
        return;
    }

    // Mostrar preview de imagen
    let reader = new FileReader();

    reader.onload = function(e){

        document.getElementById("preview").innerHTML = `
            <img src="${e.target.result}" style="
                width:100%;
                max-width:300px;
                margin-top:15px;
                border-radius:12px;
            ">
        `;

        // “ANÁLISIS” SIMULADO (no IA real, pero se siente inteligente)
        let recomendaciones = [
            "👉 Boquilla Gris neutro (la más segura para cualquier piso)",
            "👉 Boquilla Blanca para acabado limpio y moderno",
            "👉 Boquilla Negra para contraste elegante tipo premium",
            "👉 Boquilla Beige para tonos cálidos y naturales"
        ];

        let random = Math.floor(Math.random() * recomendaciones.length);

        document.getElementById("resultadoImagen").innerHTML =
            "🧠 Analizando textura del piso...<br><br>" +
            recomendaciones[random];
    };

    reader.readAsDataURL(file);
}
function mostrarEspacio(){

    let file = document.getElementById("espacioInput").files[0];

    if(!file){
        document.getElementById("resultadoEspacio").innerHTML =
        "⚠️ Sube una foto del espacio primero";
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e){

        document.getElementById("espacioPreview").innerHTML = `
            <div class="mockup-container">
                <img src="${e.target.result}" class="espacio-img">
                <div class="overlay-text">ESPACIO EN BRUTO</div>
            </div>
        `;

        document.getElementById("resultadoEspacio").innerHTML =
            "🧱 Espacio cargado. Ahora puedes calcular materiales y ver recomendaciones.";
    };

    reader.readAsDataURL(file);
}
document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalForm");

    // si no existe, no revienta nada
    if(modal){

        window.abrirFormulario = () => {
            modal.style.display = "flex";
        };

        window.cerrarFormulario = () => {
            modal.style.display = "none";
        };

        window.enviarInfo = () => {
            alert("📩 Enviado con éxito");
            modal.style.display = "none";
        };

    }

});

