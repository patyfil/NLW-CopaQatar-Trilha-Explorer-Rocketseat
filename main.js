const c = (el) => document.querySelector(el)
// const cs = (el) => document.querySelectorAll(el)

c(".active").classList.remove("active")

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icons/icon-${player1}.svg" alt="Bandeira do(a) ${player1}" /> 
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
      createGame("qatar", "13:00", "equador"),
      "1ª Rodada"
    ) +
    createCard(
      "21/11",
      "segunda",
      createGame("senegal", "13:00", "holanda"),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("qatar", "10:00", "senegal") +
        createGame("holanda", "13:00", "equador"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("holanda", "12:00", "qatar") +
        createGame("equador", "12:00", "senegal"),
      "3ª Rodada"
    )
})

let grupoB = document.querySelector("#GrupoB")
grupoB.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "sabado",
      createGame("inglaterra", "10:00", "irã") +
        createGame("estados unidos", "16:00", "país_de_gales"),
      "1ª Rodada"
    ) +
    createCard(
      "25/11",
      "sexta",
      createGame("país_de_gales", "07:00", "irã") +
        createGame("inglaterra", "16:00", "estados unidos"),
      "2ª Rodada"
    ) +
    createCard(
      "29/11",
      "terça",
      createGame("irã", "16:00", "estados unidos") +
        createGame("país_de_gales", "16:00", "inglaterra"),
      "3ª Rodada"
    )
})

let grupoC = document.querySelector("#GrupoC")
grupoC.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML = `
  <main id="cards">
    ${createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "arábia_saudita") +
      createGame("méxico", "13:00", "polônia"),
      "1ª Rodada"
    )}
    ${createCard(
      "26/11",
      "sabado",
      createGame("polônia", "10:00", "arábia_saudita") +
      createGame("argentina", "16:00", "méxico"),
      "2ª Rodada"
    )}
    ${createCard(
      "30/11",
      "quarta",
      createGame("polônia", "16:00", "argentina") +
      createGame("arábia_saudita", "16:00", "méxico"),
      "3ª Rodada"
    )}
    </main>
    `
})

let grupoD = document.querySelector("#GrupoD")
grupoD.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "22/11",
      "terça",
      createGame("dinamarca", "10:00", "tunísia") +
        createGame("frança", "16:00", "austrália"),
      "1ª Rodada"
    ) +
    createCard(
      "26/11",
      "sabado",
      createGame("tunísia", "07:00", "austrália") +
        createGame("frança", "13:00", "dinamarca"),
      "2ª Rodada"
    ) +
    createCard(
      "30/11",
      "quarta",
      createGame('tunísia', '12:00', 'frança') +
        createGame("austrália", "12:00", "dinamarca"),
      "3ª Rodada"
    )
})

let grupoE = document.querySelector("#GrupoE")
grupoE.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("alemanha", "10:00", "japão") +
        createGame("espanha", "13:00", "costa rica"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("japão", "07:00", "costa rica") +
        createGame("espanha", "16:00", "alemanha"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("japão", "16:00", "espanha") +
        createGame("costa rica", "16:00", "alemanha"),
      "3ª Rodada"
    )
})

let grupoF = document.querySelector("#GrupoF")
grupoF.addEventListener("click", () => {
  document.querySelector("#cards").innerHTML =
    createCard(
      "23/11",
      "quarta",
      createGame("marrocos", "07:00", "croácia") +
        createGame("bélgica", "16:00", "canadá"),
      "1ª Rodada"
    ) +
    createCard(
      "27/11",
      "domingo",
      createGame("bélgica", "10:00", "marrocos") +
        createGame("croácia", "13:00", "canadá"),
      "2ª Rodada"
    ) +
    createCard(
      "01/12",
      "quinta",
      createGame("croácia", "12:00", "bélgica") +
        createGame("canadá", "12:00", "marrocos"),
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
      createGame("uruguai", "10:00", "coreia do sul") +
        createGame("portugal", "13:00", "Gana"),
      "1ª Rodada"
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("coreia do sul", "10:00", "Gana") +
        createGame("portugal", "16:00", "uruguai"),
      "2ª Rodada"
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("coreia do sul", "12:00", "portugal") +
        createGame("Gana", "12:00", "uruguai"),
      "3ª Rodada"
    )
})
