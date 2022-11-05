const c = (el) => document.querySelector(el)
// const cs = (el) => document.querySelectorAll(el)

c(".active").classList.remove("active")

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icons/icon-${player1}.svg" alt="Bandeira do(a) ${player1}"  /> 
      <strong>${hour}</strong>
      <img src="./assets/icons/icon-${player2}.svg" alt="Bandeira do(a) ${player2}" /> 
      <li><figcaption>${player1}</figcaption>  <figcaption>${player2}</figcaption></li>
    </li>
  `
}

// let delay = -0.2
function createCard(date, day, games, rodada) {
  // delay = delay + 0.2
  // ABAIXO DO return: <div class="card" style="animation-delay: ${delay}s">
  return `
    <div class="card">
      <h2>${date} <span>${day}</span> </h2>
      <h4>${rodada}</h4>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões") +
      createGame("brasil", "16:00", "sérvia"),
    "1ª Rodada"
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
      createGame("brasil", "13:00", "suíça"),
    "2ª Rodada"
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("camarões", "16:00", "brasil") +
      createGame("sérvia", "16:00", "suíça"),
    "3ª Rodada"
  )

let grupoA = document.querySelector("#GrupoA")
grupoA.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "20/11",
      "domingo",
      createGame("qatar", "13:00", "Equador"),
      "1ª Rodada"
    ) +
    createCard(
      "21/11",
      "segunda",
      createGame("senegal", "13:00", "Holanda"),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("qatar", "10:00", "senegal") +
        createGame("Holanda", "13:00", "Equador"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("Holanda", "12:00", "qatar") +
        createGame("Equador", "12:00", "senegal"),
      "3ª Rodada"
    )
})

let grupoB = document.querySelector("#GrupoB")
grupoB.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "sabado",
      createGame("Inglaterra", "10:00", "Irã") +
        createGame("Estados Unidos", "16:00", "País de Gales"),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("País de Gales", "07:00", "Irã") +
        createGame("Inglaterra", "16:00", "Estados Unidos"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("Irã", "16:00", "Estados Unidos") +
        createGame("País de Gales", "16:00", "Inglaterra"),
      "3ª Rodada"
    )
})

let grupoC = document.querySelector("#GrupoC")
grupoC.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "Arábia Saudita") +
        createGame("méxico", "13:00", "Polônia"),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("Polônia", "10:00", "Arábia Saudita") +
        createGame("argentina", "16:00", "méxico"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("Polônia", "16:00", "argentina") +
        createGame("Arábia Saudita", "16:00", "méxico"),
      "3ª Rodada"
    )
})

let grupoD = document.querySelector("#GrupoD")
grupoD.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("Dinamarca", "10:00", "Tunísia") +
        createGame("França", "16:00", "Austrália"),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("Tunísia", "07:00", "Austrália") +
        createGame("França", "13:00", "Dinamarca"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame("Tunísia", "12:00", "França") +
        createGame("Austrália", "12:00", "Dinamarca"),
      "3ª Rodada"
    )
})

let grupoE = document.querySelector("#GrupoE")
grupoE.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("Alemanha", "10:00", "Japão") +
        createGame("Espanha", "13:00", "costa rica"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("Japão", "07:00", "costa rica") +
        createGame("Espanha", "16:00", "Alemanha"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("Japão", "16:00", "Espanha") +
        createGame("costa rica", "16:00", "Alemanha"),
      "3ª Rodada"
    )
})

let grupoF = document.querySelector("#GrupoF")
grupoF.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("Marrocos", "07:00", "Croácia") +
        createGame("Bélgica", "16:00", "Canadá"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("Bélgica", "10:00", "Marrocos") +
        createGame("Croácia", "13:00", "Canadá"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("Croácia", "12:00", "Bélgica") +
        createGame("Canadá", "12:00", "Marrocos"),
      "3ª Rodada"
    )
})

let grupoG = document.querySelector("#GrupoG")
grupoG.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("suíça", "07:00", "camarões") +
        createGame("brasil", "16:00", "sérvia"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("camarões", "07:00", "sérvia") +
        createGame("brasil", "13:00", "suíça"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("camarões", "16:00", "brasil") +
        createGame("sérvia", "16:00", "suíça"),
      "3ª Rodada"
    )
})

let grupoH = document.querySelector("#GrupoH")
grupoH.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "24/11",
      "quinta",
      createGame("Uruguai", "10:00", "Coreia do Sul") +
        createGame("portugal", "13:00", "Gana"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("Coreia do Sul", "10:00", "Gana") +
        createGame("portugal", "16:00", "Uruguai"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("Coreia do Sul", "12:00", "portugal") +
        createGame("Gana", "12:00", "Uruguai"),
      "3ª Rodada"
    )
})
