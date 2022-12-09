const startHere = document.getElementsByClassName("startHere")[0];

const newHeader = document.createElement("h1")
newHeader.innerText = "Jessika Adams"

const newPara = document.createElement("p")
newPara.innerText = "I have no idea what to write here other than the same stuff. I'm from Mesa, Arizona. I've lived here all my life. I married my highschool sweetheart and we have a mess of pets in this house. I've jumped from job to job trying to find something I like and I think I'm on to something here."

const pets = ["https://scontent.fphx1-2.fna.fbcdn.net/v/t39.30808-6/278047421_10158155802052691_6703790223969831029_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oNuxPQf1slYAX_ODaCC&tn=gyf8sZc2_DPTmN9i&_nc_ht=scontent.fphx1-2.fna&oh=00_AfCUcGAy8zfUbl-9K-etW52ziKFjzhmjeB4DaV76zf6vWw&oe=63974549", 
"https://scontent.fphx1-2.fna.fbcdn.net/v/t39.30808-6/289270960_10158262518957691_6595260541337294378_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SQUcMuDk7rkAX_LNtsQ&_nc_ht=scontent.fphx1-2.fna&oh=00_AfDN75v0yHPHsEIAdi1zmgHD8Vqqpc5W9b6E1NZv77cOKw&oe=6397745D", 
"https://scontent.fphx1-1.fna.fbcdn.net/v/t39.30808-6/281141732_10158211033762691_5261198170101814770_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GL1qn7zc05oAX-LzSB8&_nc_ht=scontent.fphx1-1.fna&oh=00_AfBfTgQMYVGrjAgxWwD9mpZLHdIBhI_S3gnqBTXVfkUZfA&oe=6396EA73"]

for(const pet of pets) {
    const petPic = document.createElement("img");
    petPic.className = "furbbs"
    petPic.src = pet
    startHere.append(petPic)
}

startHere.append(newHeader)
startHere.append(newPara)
startHere.append(newImage)

newHeader.classList.add("header")
newPara.classList.add("paragraph")
newImage.classList.add("image")

