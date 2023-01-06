// API INFO ONLY CHANGE TOKEN
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaV0ZOZmhld2RHUVJnZTR1alUzbTRjS1Z2WExjanVWSTFtOUFTNXZYYW9xeW9aQWhiOCIsImp0aSI6IjY5ZmUzODhmZTI2ODNkNzNjZjM4OGZlY2I5ZDZlMTAyMzM2Y2QyOGJkZDBhY2RhZGY4ZWIyODVmOWNiZGNkNWI0NjFkZjZkNTViMjJhMWRjIiwiaWF0IjoxNjczMDI4NjgzLCJuYmYiOjE2NzMwMjg2ODMsImV4cCI6MTY3MzAzMjI4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.VWGn7ZKfbwj8gMsS2w-F_CjEMsWTfDVNk4Lv2XBZFpXKJGtMuURyn7LRL67Ofgt-YFu1WSi-kSt8rpSQ_KSw4bzJXdzPdt-f4PFqEP_6P7X7JGr36clQJiOJTD1aCn7KgZssFEtJFIFnNuAUGyIB4H8RiE25BC41PgU6eti5LkE7w-i7dpiIdtPzcwsbzIV3soKHFDJzBoekadnUBuSqhnwOaPgBsClgLZLVN-2FUbVt208YOhSNjzaLxbc1Kc2sSCQemn3ggHyDughMTKyOj_j3LrnRucn6qXRT5IhEM9OqHMbexSiN9EbiNljYB5couZnJKdU7qCt-JKSvgckBag");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// END API TOKEN

const mainContainer = document.querySelector(".mainContainer");
const zipSubmit = document.querySelector(".zipSubmit");

// function capitalizeFirstLetter(name) {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

const searchPetsByZip = async () => {
    const petCardContainer = document.querySelector(".petCardContainer");
    petCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const petZipURL = `https://api.petfinder.com/v2/animals/?location=${zipInput.value}`;
    const petData = await fetch(petZipURL, requestOptions);
    const json = await petData.json();
    jsonHome = json.animals;
    zipInput.value = null;
    
    
    jsonHome.forEach(animal => {
        const petCard = document.createElement("div");
        petCard.className = "petCard";
        const petPhoto = document.createElement("img");
        petPhoto.className = "petPhoto";
        petPhoto.src = animal?.primary_photo_cropped?.small ? animal?.primary_photo_cropped?.small: "https://st2.depositphotos.com/12093440/44102/v/950/depositphotos_441020378-stock-illustration-page-404-link-to-non.jpg";
        
        const petName = document.createElement("h1");
        petName.className = "petName";
        petName.innerText = animal.name;
        // capitalizeFirstLetter(petName);
        petCard.append(petName, petPhoto);
        petCardContainer.append(petCard);
        mainContainer.append(petCardContainer)        
    });
}

zipSubmit.addEventListener("click",searchPetsByZip);