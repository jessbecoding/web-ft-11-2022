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

const searchShelterByZip = async () => {
    const shelterCardContainer = document.querySelector(".shelterCardContainer");
    // shelterCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const shelterZipURL = `https://api.petfinder.com/v2/organizations?location=${zipInput.value}`;
    const shelterData = await fetch(shelterZipURL, requestOptions);
    const json = await shelterData.json();
    jsonHome = json.organizations;
    zipInput.value = null;
    
    jsonHome.forEach(shelter => {
        const shelterCard = document.createElement("div");
        shelterCard.className = "shelterCard";
        const shelterName = document.createElement("a");
        shelterName.className = "shelterName";
        shelterName.innerText = shelter.name;
        shelterName.href = shelter.url;
        shelterCard.append(shelterName);
        shelterCardContainer.append(shelterCard);
        mainContainer.append(shelterCardContainer)        
    });
}

zipSubmit.addEventListener("click", searchShelterByZip);