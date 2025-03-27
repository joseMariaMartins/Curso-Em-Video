function tabuada() {
    // Obtem o elemento de entrada do numero
    let num = document.getElementById('txtn').value;

    // Obtem o selec onde vai mostrar a tabuada
    let tab = document.getElementById('seltab');

    // Verifica se a tabuada ta vazia
    if (num.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        // Converte a string para numero
        let n = Number(num);

        // Limpa o elemento tab para adicionar os novos valores
        tab.innerHTML = ''; 

        // Loop para gerar a tabuada (c = a 1; se c for <= 10 continuar o lopp e fazer c++)
        for (let c = 1; c <= 10; c++) {
            // Criando um elemento option para cada resultado da multiplicação
            let item = document.createElement('option');

            // Bota la os items no option e faz n * c
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            // Anexando o elemento option ao elemento select
            tab.appendChild(item);
        }
    }
}