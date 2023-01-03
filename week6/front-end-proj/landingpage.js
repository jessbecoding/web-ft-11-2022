// API INFO ONLY CHANGE TOKEN

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {TOKEN HERE}");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// END API TOKEN

const mainContainer = document.querySelector(".mainContainer")
const zipSubmit = document.querySelector(".zipSubmit");

const searchPetsByZip = async () => {
    const petCardContainer = document.querySelector(".petCardContainer");
    petCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const petZipURL = `https://api.petfinder.com/v2/animals?location=${zipInput.value}`;
    console.log (petZipURL)
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    jsonHome = json.animals
    zipInput.value = null

    jsonHome.forEach(animal => {
        const petCard = document.createElement("div");
        petCard.className = "petCard";
        const petPhoto = document.createElement("img");
        petPhoto.className = "petPhoto";
        petPhoto.src = animal.photos.medium
        petPhoto.onerror = ""
        const petName = document.createElement("h1");
        petName.className = "petName";
        petName.innerText = animal.name;
        petCard.append(petName, petPhoto);
        petCardContainer.append(petCard);
        mainContainer.append(petCardContainer)
    });
}

zipSubmit.addEventListener("click", searchPetsByZip);
