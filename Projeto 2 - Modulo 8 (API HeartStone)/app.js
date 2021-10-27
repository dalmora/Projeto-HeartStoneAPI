
chamadaApi();

let content = document.getElementById("content");

async function chamadaApi() {

    let response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "2285fabe48msh34b17075dc4564bp175e57jsn86ff26edc75b"
        }
    })

        let json_response = response.json()
        json_response.then(data => {

            let set_especifico = [];

            content.innerHTML = "";
            
            Object.keys(data).forEach(set => {
                set_especifico = data[set];
                set_especifico.forEach(el => {


                    if (el.img) {

                        let construtora = new InfoCarta(el.name, el.cardSet, el.cost, el.playerClass, el.text, el.race, el.mechanics, el.img, el.attack, el.health, el.type)

                        const divMain = document.createElement('div');
                        divMain.setAttribute('class', 'card');

                        // Criando a div para as imagens da API
                        const divImagem = document.createElement('div')
                        divImagem.classList.add("div-image");


                        // Criando o elemento imagem que vai receber a imagem da API
                        let imagem = document.createElement("img");
                        imagem.src = construtora.imagem;
                        imagem.setAttribute("id", "imagemZoom")

                        if (construtora.titulo) {
                            let titulo = document.createElement("span")
                            titulo.setAttribute("class", "card-title");
                            titulo.innerText = construtora.titulo;

                            divImagem.append(imagem);
                            divImagem.append(titulo);
                            divMain.append(divImagem);
                        }
                        // Apendendo o conteudo imagens da API para a divImagens e apendendo a div Imagens na divMain

                        let contentDiv = document.createElement("div");
                        contentDiv.setAttribute("class", "card-content");

                        if (construtora.classeCarta) {
                            let classeCarta = document.createElement("p");
                            classeCarta.innerHTML = construtora.classeCarta;
                            contentDiv.append(classeCarta);
                        }

                        if (construtora.custo) {
                            let custo = document.createElement("p");
                            custo.innerHTML = `Custo:💰 ${construtora.custo}`;
                            contentDiv.append(custo);
                        }

                        if (construtora.playerClass) {
                            let playerClass = document.createElement("p");
                            playerClass.innerHTML = `Classe: ${construtora.playerClass}`;
                            contentDiv.append(playerClass);
                        }

                        if (construtora.texto) {
                            let texto = document.createElement("p");
                            texto.innerHTML = `Descriçao: ${construtora.texto}`;
                            contentDiv.append(texto);
                        }

                        if (construtora.raca) {
                            let raca = document.createElement("p");
                            raca.innerHTML = `Raça: ${construtora.raca}`;
                            contentDiv.append(raca);
                        }

                        if (construtora.mecanica) {

                            let mecanica = document.createElement("p");
                            mecanica.innerHTML = `Mecanicas: ${construtora.mecanica.length}`;
                            contentDiv.append(mecanica);

                            for (let i of construtora.mecanica) {
                                let nomeMecanica = document.createElement("p");
                                nomeMecanica.textContent = `Mecanica: ${i.name}`;
                                contentDiv.append(nomeMecanica);

                            }
                        }

                        if (construtora.ataque) {
                            let ataque = document.createElement("p");
                            ataque.innerHTML = `Ataque:⚔️ ${construtora.ataque}`;
                            contentDiv.append(ataque);
                        }

                        if (construtora.saude) {
                            let saude = document.createElement("p");
                            saude.innerHTML = `Vida:❤️ ${construtora.saude}`;
                            contentDiv.append(saude);
                        }

                        if (construtora.tipoCarta) {
                            let tipoCarta = document.createElement("p");
                            tipoCarta.innerHTML = `Tipo: ${construtora.tipoCarta}`;
                            contentDiv.append(tipoCarta);
                        }


                        divMain.append(contentDiv);
                        content.append(divMain);

                    }

                })
            })
        })     
}
function InfoCarta(titulo, classeCarta, custo, playerClass, texto, raca, mecanica, imagem, ataque, saude, tipoCarta) {
    this.titulo = titulo
    this.classeCarta = classeCarta
    this.custo = custo
    this.playerClass = playerClass
    this.texto = texto
    this.raca = raca
    this.mecanica = mecanica
    this.imagem = imagem
    this.ataque = ataque
    this.saude = saude
    this.tipoCarta = tipoCarta
}