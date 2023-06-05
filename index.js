const fetchAllPups = async() => {
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-WEB-ft/players");
      const data = await response.json();
      return data.data.players
    } catch (error) {
      console.log(error);
    }
  }
  
  const renderAllPups= async() => {
    let pupContainer = document.getElementById("current-Puppy-Bowl-Participants");
    let myPup = await fetchAllPups();
    for (let i = 0; i < myPup.length; i++) {
      let myCurrPup = myPup[i];
      let newPupEle = document.createElement("div");
      newPupEle.className = "Pup-Card";

      let currPupImage= document.createElement("img");
      currPupImage.src= myCurrPup.imageUrl;

      let currPupName = document.createElement('p')
      newPupEle.innerText = myCurrPup.name;
      
     
      
    
        let newButton = document.createElement("button")
        newButton.id="Detail-Button";
        newButton.innerText = "See Details";


        newButton.addEventListener("click", () => {
            localStorage.setItem("PlayerName", myCurrPup.name)
            localStorage.setItem("breed", myCurrPup.breed)
            localStorage.setItem("status", myCurrPup.status)
            localStorage.setItem("picture", myCurrPup.imageUrl)
            localStorage.setItem("id",myCurrPup.id)
            localStorage.setItem("teamId", myCurrPup.teamId)
            localStorage.setItem("cohortId", myCurrPup.cohortId)
            localStorage.setItem("created",myCurrPup.createdAt)
            localStorage.setItem("updated",myCurrPup.updatedAt)

            window.location.href = "details.html";
        });        
        newPupEle.appendChild(currPupName);
        newPupEle.appendChild(newButton);
        newPupEle.appendChild(currPupImage);
      pupContainer.appendChild(newPupEle);
    }  
};
      renderAllPups();
  

  