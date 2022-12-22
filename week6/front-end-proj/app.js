// API INFO ONLY CHANGE TOKEN

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {TOKEN HERE}");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// END API TOKEN

const searchPetsByZip = async () => {
    const zipSubmit = document.querySelector(".zipSubmit");
    const petCardContainer = document.querySelector(".petCardContainer");
    petCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const petZipURL = `https://api.petfinder.com/v2/animals?location=${zipInput.value}`;
    const petData = await fetch(petZipURL, requestOptions)
    const json = await petData.json()
    console.log(json)
}

zipSubmit.addEventListener("click", searchPetsByZip);
