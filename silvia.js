 function calcular() {
    let categoria = document.getElementById("categoria").value;
    let horas = document.getElementById("horas").valueAsNumber;

    if (categoria == "1" && horas <= 40) {
        let total = horas * 12000;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${total}`;
    } else if (categoria == "1" && horas > 40) {
        const tarifaNormal = 12000;
        const horasTrabajadas = horas;
        const horasNormales = Math.min(horasTrabajadas, 40);
        const horasExtras = Math.max(horasTrabajadas - 40, 0);
        const tarifaExtra = tarifaNormal * 1.25;
        const salario = horasNormales * tarifaNormal + horasExtras * tarifaExtra;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${salario}`;
    } else if (categoria == "2" && horas <= 40) {
        let total = horas * 17000;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${total}`;
    } else if (categoria == "2" && horas > 40) {
        const tarifaNormal = 17000;
        const horasTrabajadas = horas;
        const horasNormales = Math.min(horasTrabajadas, 40);
        const horasExtras = Math.max(horasTrabajadas - 40, 0);
        const tarifaExtra = tarifaNormal * 1.25;
        const salario = horasNormales * tarifaNormal + horasExtras * tarifaExtra;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${salario}`;
    } else if (categoria == "3" && horas <= 40) {
        let total = horas * 22000;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${total}`;
    } else if (categoria == "3" && horas > 40) {
        const tarifaNormal = 22000;
        const horasTrabajadas = horas;
        const horasNormales = Math.min(horasTrabajadas, 40);
        const horasExtras = Math.max(horasTrabajadas - 40, 0);
        const tarifaExtra = tarifaNormal * 1.25;
        const salario = horasNormales * tarifaNormal + horasExtras * tarifaExtra;
        document.getElementById("resultado").innerHTML = `La cantidad a pagar es: ${salario}`;
    }
}