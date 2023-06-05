
window.onload = () => {
    
    let PlayerName = localStorage.getItem("PlayerName")
    let breed = localStorage.getItem("breed")
    let stats = localStorage.getItem("status")
    let pupPic = localStorage.getItem("picture")
    let pupId = localStorage.getItem("id")
    let team = localStorage.getItem("teamId")
    let pupCohort = localStorage.getItem("cohortId")
    let Created = localStorage.getItem("created")
    let updated = localStorage.getItem("updated")

    
    let PlayerDetailsContainer = document.getElementById("player-Details-Container")

   
    let newDetailEle = document.createElement("h1")
    newDetailEle.id="Detail-Name";
    newDetailEle.innerText = PlayerName
    PlayerDetailsContainer.appendChild(newDetailEle)

    let pupPicEle = document.createElement("img")
    pupPicEle.src = pupPic
    PlayerDetailsContainer.appendChild(pupPicEle)

    let pupIdEle = document.createElement("p")
    pupIdEle.innerText= `ID: ${pupId}`
    PlayerDetailsContainer.appendChild(pupIdEle)

    let teamEle= document.createElement("P")
    teamEle.innerText= `Team # ${team}`
    PlayerDetailsContainer.appendChild(teamEle)

    let cohortIdEle = document.createElement("p")
    cohortIdEle.innerText = `Cohort # ${pupCohort}`
    PlayerDetailsContainer.appendChild(cohortIdEle)


    let pupDetailEle = document.createElement("p")
    pupDetailEle.innerText = `Breed: ${breed}`;
    PlayerDetailsContainer.appendChild(pupDetailEle)

let pupStatusEle = document.createElement("p")
    pupStatusEle.innerText = `Status: ${stats}`;
    PlayerDetailsContainer.appendChild(pupStatusEle)

  let pupCreatedEle = document.createElement("p")
  pupCreatedEle.innerText = `Created on: ${Created}`  
  PlayerDetailsContainer.appendChild(pupCreatedEle)

  let pupUpdatedEle = document.createElement("p")
  pupUpdatedEle.innerText = `Updated on: ${updated}`
  PlayerDetailsContainer.appendChild(pupUpdatedEle)
    

    
}

let backButton = document.createElement("button")
        backButton.id="Back-Button";
        backButton.innerText = "Back";

        backButton.addEventListener("click", () => {
            history.back()
        });

        document.body.appendChild(backButton);
