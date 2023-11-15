let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let origem = document.getElementById('origem');
let destino = document.getElementById('destino');

function onClickBotao() {
    let valorOrigem = origem.value;
    let valorDestino = destino.value;


    let veiculoSelecionado = document.querySelector('input[name="veiculo"]:checked').value;

    if (valorOrigem && valorDestino && veiculoSelecionado) {

        try {
            console.log(valorDestino, valorOrigem, veiculoSelecionado)
            fetch("https://llzshl0zed.execute-api.us-east-2.amazonaws.com/calcular/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    enderecoPartida: valorOrigem,
                    enderecoChegada: valorDestino,
                    veiculo: veiculoSelecionado
                })
            }).then(response => response.json())
                .then(response => {
                    let data = JSON.parse(response.body)
                    console.log(data)
                    let carbono_total = data.emissao_total
                    let carbono = document.getElementById("carbono").innerHTML = carbono_total.toFixed(2);

                    let distancia_km = parseInt(data.distancia_km);
                    let distancia = document.getElementById("distancia").innerHTML = distancia_km;

                })

        } catch (error) {
            console.log(error)
            'Foi não, mano :('
        }

    }


}

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 25);
