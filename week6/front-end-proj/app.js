// API INFO ONLY CHANGE TOKEN

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5UDh4MkVpREg3d0NFQ1JZOVN2YkVBYnNra1MzeGprN2ltZFRlUTJSQnZJNjA5eDFxWCIsImp0aSI6IjhjZWE2ZjdlNmQ2ZTJmNmEzYTAxYTY5ZjI4YzhmODE0OTg1ZTZjNzg4NDhhZGU5MTRhMjlkNGU3OWQxNDdjOTcxODg4NDcyMTg2YjZiMTI3IiwiaWF0IjoxNjcxNzIzNjUyLCJuYmYiOjE2NzE3MjM2NTIsImV4cCI6MTY3MTcyNzI1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.yAqinJD0c7lav7z_RP45i62YhZeiZJsd6urVW_BypLvvDXkoDrwLFMh6bznaI2K2RvobFUmkIoi8m6-NyVHhr5rdGVDEgAGg-XnCUvEDPMoZGfI7m4OXvMSsjNNRilAqe9xk-MPIL-MM1XBPkefDoAQ_4js_mauk5vsUNGy0p3yFRVZfWd3kHaoHyOayvlj89veG15lm_8doBuwhG19nxQKlk-TTKIBcZUGfQR9u69QhAfWDS7Qy7yoics-qRmmXVkTVA9Y6AgIOYTjf7NMHBx43ZNMprVzqIsuopJnyqSUSSPl0QNU4n6ZhJOqsMXiUPKnU5vGqyW2sRhheb_B7Ow");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// END API TOKEN

const zipSubmit = document.querySelector(".zipSubmit");

const searchPetsByZip = async () => {
    const petCardContainer = document.querySelector(".petCardContainer");
    petCardContainer.innerHTML = "";
    const zipInput = document.querySelector(".zipInput")
    const petZipURL = `https://api.petfinder.com/v2/animals?location=${zipInput.value}`;
    const petData = await fetch(petZipURL, requestOptions)
    const json = await petData.json()
    console.log(json)
}

zipSubmit.addEventListener("click", searchPetsByZip);
