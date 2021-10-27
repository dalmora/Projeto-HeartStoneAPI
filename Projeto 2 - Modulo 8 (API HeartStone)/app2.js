let content = document.getElementById("content");

var btn = document.getElementById('btn')
btn.addEventListener('click', chamadaApi)

document.getElementById("cardName")
	.addEventListener("keyup", function chamadaApi() {
		event.preventDefault();
		if (event.key === 'Enter') {
			document.getElementById("btn").click();
		}
	});
let globalData;

class ClasseConstrutora {
	#name;
	#imgGold;
	#classe;
	#type;
	#faction;
	#img;
	#text;
	#spellClass;
	#cardArtist;
	#flavor;
	#attack;
	#health;
	#raridade;
	#cost;

	set name(name) {
		this.#name = name;
	}
	get name() {
		return this.#name;
	}

	set imgGold(imgGold) {
		this.#imgGold = imgGold;
	}
	get imgGold() {
		return this.#imgGold;
	}
	set classe(classe) {
		this.#classe = classe;
	}
	get classe() {
		return this.#classe;
	}
	set type(type) {
		this.#type = type;
	}
	get type() {
		return this.#type;
	}
	set faction(faction) {
		this.#faction = faction;
	}
	get faction() {
		return this.#faction;
	}
	set img(img) {
		this.#img = img;
	}
	get img() {
		return this.#img;
	}
	set text(text) {
		this.#text = text;
	}
	get text() {
		return this.#text;
	}
	set spellClass(spellClass) {
		this.#spellClass = spellClass;
	}
	get spellClass() {
		return this.#spellClass;
	}
	set cardArtist(cardArtist) {
		this.#cardArtist = cardArtist;
	}
	get cardArtist() {
		return this.#cardArtist;
	}
	set flavor(flavor) {
		this.#flavor = flavor;
	}
	get flavor() {
		return this.#flavor;
	}
	set attack(attack) {
		this.#attack = attack;
	}
	get attack() {
		return this.#attack;
	}
	set health(health) {
		this.#health = health;
	}
	get health() {
		return this.#health;
	}
	set raridade(raridade) {
		this.#raridade = raridade;
	}
	get raridade() {
		return this.#raridade;
	}
	set cost(cost) {
		this.#cost = cost;
	}
	get cost() {
		return this.#cost;
	}
}
async function chamadaApi() {

	content.innerHTML = `<div class="ring">Loading
	<span id="spanLoading"></span>
  </div>`;

	const nomeDaCarta = document.querySelector('#cardName').value;

	let response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${nomeDaCarta}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
			"x-rapidapi-key": "2285fabe48msh34b17075dc4564bp175e57jsn86ff26edc75b"
		}
	})
	let json_response = response.json()
	json_response.then(data => {

		content.innerHTML = ""

		if (data.error) {
			content.innerHTML = `<h1 style = "color: white; margin-top: 30px;">No result found ⛔</h1>`
		}

		globalData = data;

		for (let i of data) {

			if (i.img) {

				let construtora = new ClasseConstrutora();

				construtora.name = i.name
				construtora.imgGold = i.imgGold
				construtora.classe = i.cardSet
				construtora.type = i.type
				construtora.faction = i.faction
				construtora.img = i.img
				construtora.text = i.text
				construtora.spellClass = i.spellClass
				construtora.cardArtist = i.artist
				construtora.flavor = i.flavor
				construtora.attack = i.attack
				construtora.health = i.health
				construtora.raridade = i.rarity
				construtora.cost = i.cost

				let divMain = document.createElement('div');
				divMain.setAttribute('class', 'card mb-3');
				divMain.style = `max-width: 540px;`

				// Criando a div para as imagens da API
				let divImagem2 = document.createElement('div')
				divImagem2.classList.add("divImagem");

				let divBootstrap1 = document.createElement('div');
				divBootstrap1.setAttribute('class', 'col-md-4')

				let divBootstrap2 = document.createElement('div');
				divBootstrap2.setAttribute('class', 'row g-0');
				divBootstrap2.setAttribute('id', 'row1');
				// Criando o elemento imagem que vai receber a imagem da API
				let img = document.createElement("img");
				img.src = construtora.img;
				img.setAttribute("class", "img-fluid rounded-start")

				let imgGold = document.createElement("img");
				imgGold.src = construtora.imgGold;
				imgGold.setAttribute("class", "img-fluid rounded-start")

				let name = document.createElement("span")
				name.setAttribute("class", "card-title");
				name.innerHTML = construtora.name;

				divMain.append(divBootstrap2);
				divBootstrap2.append(divBootstrap1)
				divBootstrap1.append(divImagem2);
				divImagem2.append(name);

				if (construtora.imgGold) {
					divImagem2.append(imgGold);
				} else {
					divImagem2.append(img);
				}
				// Apendendo o conteudo imagens da API para a divImagens e apendendo a div Imagens na divMain
				let contentDiv = document.createElement("div");
				contentDiv.setAttribute("class", "col-md-8");

				if (construtora.classe) {
					let classe = document.createElement("p");
					classe.innerHTML = `Classe: ${construtora.classe}`;
					contentDiv.append(classe);
				}
				if (construtora.type) {
					let type = document.createElement("p");
					type.innerHTML = `Tipo: ${construtora.type}`;
					contentDiv.append(type);
				}
				if (construtora.faction) {
					let faction = document.createElement("p");
					faction.innerHTML = `Facção: ${construtora.faction}`;
					contentDiv.append(faction);
				}
				if (construtora.text) {
					let text = document.createElement("p");
					text.innerHTML = `Descriçao: ${construtora.text}`;
					contentDiv.append(text);
				}
				if (construtora.spellClass) {
					let spellClass = document.createElement("p");
					spellClass.innerHTML = `Classe Feitiço: ${construtora.spellClass}`;
					contentDiv.append(spellClass);
				}
				if (construtora.cardArtist) {
					let cardArtist = document.createElement("p");
					cardArtist.innerHTML = `Artista: <a href="https://www.google.com.br/search?q=${construtora.cardArtist}" target ="_blank" style = "text-decoration: none">${construtora.cardArtist}</a>`;
					contentDiv.append(cardArtist);
				}
				if (construtora.flavor) {
					let flavor = document.createElement("p");
					flavor.innerHTML = `História: ${construtora.flavor}`;
					contentDiv.append(flavor);
				}
				if (construtora.attack) {
					let attack = document.createElement("p");
					attack.innerHTML = `Ataque:⚔️ ${construtora.attack}`;
					contentDiv.append(attack);
				}
				if (construtora.health) {
					let health = document.createElement("p");
					health.innerHTML = `Vida:❤️ ${construtora.health}`;
					contentDiv.append(health);
				}

				if (construtora.raridade) {
					let raridade = document.createElement("p");
					raridade.innerHTML = `Raridade: ${construtora.raridade}`;
					contentDiv.append(raridade);

					if (construtora.raridade == "Free") {
						divBootstrap1.style = `background-color: #fefbd8 !important; background-size: cover;`
					} else if (construtora.raridade == "Common") {
						divBootstrap1.style = `background-color: #b2ad7f !important; background-size: cover;`
					} else if (construtora.raridade == "Rare") {
						divBootstrap1.style = `background-color: #6b5b95 !important; background-size: cover;`
					} else if (construtora.raridade == "Epic") {
						divBootstrap1.style = `background-color: #d64161 !important; background-size: cover;`
					} else if (construtora.raridade == "Legendary") {
						divBootstrap1.style = `background-color: #ff7b25 !important; background-size: cover;`
					}
				}
				if (construtora.cost) {
					let cost = document.createElement("p");
					cost.innerHTML = `Custo:💰 ${construtora.cost}`;
					contentDiv.append(cost);
				}
				divBootstrap2.append(contentDiv);
				content.append(divMain);
			}
		}
	})
}
function filtrarMana(custo) {
	content.innerHTML = "";

	var ff_arr;

	if (custo >= 10) {
		ff_arr = globalData.filter(value => value.cost >= 10);
	} else {
		ff_arr = globalData.filter(value => value.cost == custo);
	}

	for (let i of ff_arr) {

		if (i.img) {

			let construtora = new ClasseConstrutora();

			construtora.name = i.name
			construtora.imgGold = i.imgGold
			construtora.classe = i.cardSet
			construtora.type = i.type
			construtora.faction = i.faction
			construtora.img = i.img
			construtora.text = i.text
			construtora.spellClass = i.spellClass
			construtora.cardArtist = i.artist
			construtora.flavor = i.flavor
			construtora.attack = i.attack
			construtora.health = i.health
			construtora.raridade = i.rarity
			construtora.cost = i.cost

			let divMain = document.createElement('div');
			divMain.setAttribute('class', 'card-mb-3');
			divMain.style = `max-width: 540px;`

			// Criando a div para as imagens da API
			let divImagem2 = document.createElement('div')
			divImagem2.classList.add("divImagem");

			let divBootstrap1 = document.createElement('div');
			divBootstrap1.setAttribute('class', 'col-md-4')

			let divBootstrap2 = document.createElement('div');
			divBootstrap2.setAttribute('class', 'row g-0');
			divBootstrap2.setAttribute('id', 'row1');

			// Criando o elemento imagem que vai receber a imagem da API
			let name = document.createElement("span")
			name.setAttribute("class", "card-title");
			name.innerHTML = `<p>{{name}}</p>`;
			output = Mustache.render(name.innerHTML, { name: `${construtora.name}` });
			divImagem2.innerHTML += output;

			if (construtora.imgGold) {
				let imgGold = document.createElement("p");
				imgGold.innerHTML = `<img src="{{imgGold}}" width = "170px">`;
				imgGold.setAttribute("class", "img-fluid rounded-start")
				output = Mustache.render(imgGold.innerHTML, { imgGold: `${construtora.imgGold}` });
				divImagem2.innerHTML += output;
			} else {
				let img = document.createElement("p");
				img.innerHTML = `<img src="{{img}}" width = "170px">`;
				img.setAttribute("class", "img-fluid rounded-start")
				output = Mustache.render(img.innerHTML, { img: `${construtora.img}` });
				divImagem2.innerHTML += output;
			}
			divMain.append(divBootstrap2);
			divBootstrap2.append(divBootstrap1)
			divBootstrap1.append(divImagem2);
			/* divImagem2.append(name); */

			// Apendendo o conteudo imagens da API para a divImagens e apendendo a div Imagens na divMain
			let contentDiv = document.createElement("div");
			contentDiv.setAttribute("class", "col-md-8");

			if (construtora.classe) {
				let classe = document.createElement("p");
				classe.innerHTML = `<p>Classe: {{classe}}</p>`;
				output = Mustache.render(classe.innerHTML, { classe: `${construtora.classe}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.type) {
				let type = document.createElement("p");
				type.innerHTML = `<p>Tipo: {{type}}</p>`;
				output = Mustache.render(type.innerHTML, { type: `${construtora.type}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.faction) {
				let faction = document.createElement("p");
				faction.innerHTML = `<p>Facção: {{faction}}</p>`;
				output = Mustache.render(faction.innerHTML, { faction: `${construtora.faction}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.text) {
				let text = document.createElement("p");
				text.innerHTML = `<p>Descriçao: {{text}}</p>`;
				output = Mustache.render(text.innerHTML, { text: `${construtora.text}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.spellClass) {
				let spellClass = document.createElement("p");
				spellClass.innerHTML = `<p>Classe Feitiço: {{spellClass}}</p>`;
				output = Mustache.render(spellClass.innerHTML, { spellClass: `${construtora.spellClass}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.cardArtist) {
				let cardArtist = document.createElement("p");
				cardArtist.innerHTML = `{{cardArtist}}`;
				output = Mustache.render(cardArtist.innerHTML, { cardArtist: `${construtora.cardArtist}` });
				contentDiv.innerHTML += `<p>Artista: <a href="https://www.google.com.br/search?q=${output}" target ="_blank" style = "text-decoration: none">${output}</a><p>`;
			}
			if (construtora.flavor) {
				let flavor = document.createElement("p");
				flavor.innerHTML = `<p>História: {{flavor}}</p>`;
				output = Mustache.render(flavor.innerHTML, { flavor: `${construtora.flavor}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.attack) {
				let attack = document.createElement("p");
				attack.innerHTML = `<p>Ataque:⚔️ {{attack}}</p>`;
				output = Mustache.render(attack.innerHTML, { attack: `${construtora.attack}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.health) {
				let health = document.createElement("p");
				health.innerHTML = `<p>Vida:❤️ {{health}}</p>`;
				output = Mustache.render(health.innerHTML, { health: `${construtora.health}` });
				contentDiv.innerHTML += output;
			}
			if (construtora.raridade) {
				let raridade = document.createElement("p");
				raridade.innerHTML = `<p>Raridade: {{raridade}}</p>`;
				output = Mustache.render(raridade.innerHTML, { raridade: `${construtora.raridade}` });
				contentDiv.innerHTML += output;

				if (construtora.raridade == "Free") {
					divBootstrap1.style = `background-color: #fefbd8 !important;`
				} else if (construtora.raridade == "Common") {
					divBootstrap1.style = `background-color: #b2ad7f !important;`
				} else if (construtora.raridade == "Rare") {
					divBootstrap1.style = `background-color: #6b5b95 !important;`
				} else if (construtora.raridade == "Epic") {
					divBootstrap1.style = `background-color: #d64161 !important;`
				} else if (construtora.raridade == "Legendary") {
					divBootstrap1.style = `background-color: #ff7b25 !important;`
				}
			}
			if (construtora.cost) {
				let cost = document.createElement("p");
				cost.innerHTML = `<p>Custo:💰 {{cost}}</p>`;
				output = Mustache.render(cost.innerHTML, { cost: `${construtora.cost}` });
				contentDiv.innerHTML += output;
			}
			divBootstrap2.append(contentDiv);
			content.append(divMain);
		}
	}
}