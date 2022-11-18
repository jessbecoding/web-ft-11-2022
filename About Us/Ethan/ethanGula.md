# Ethan Gula

#### **_Hometown: Maryville, Illinois_**

### Former teacher turned Dev

### I am a middle child

### My Brothers names are

- Nick
- Hayden

I currently live in Knoxville TN but lived in Houston for most of my life.
I love playing disc golf

### Some of my big projects include

1. **Garfield Larger Than life**

```def preface():
        Gfunks.prefaceLog()
        prefaceUser = input('Please enter "B" for back or "Q" to quit \n -->' )
        while prefaceUser != 'B' and prefaceUser != 'Q':
            prefaceUser = input('Please input B or Q \n --> ' )
        if prefaceUser == 'B':
                stars()
                mainMenu()
        if prefaceUser == 'Q':
            print("Goodbye" )
            exit(0)
```

2. **Blackjack**

```// STAND BUTTON
standButton.addEventListener("click", () => {
    let dealerPoints = scoreCalculation(dealerHand);
    while (dealerPoints < 17) {
cardInHand(makeDeck(), dealerHand);
dealerPoints = scoreCalculation(dealerHand);
    }
    compareScores();
    appendToDisplay();
    if (gameEnding) {
hitButton.setAttribute("disabled", true);
standButton.setAttribute("disabled", true);
    }
});
```

3. **Musicly**

```router.post("/instructor-sign-in", async (req, res) => {
  const { user, pass } = req.body;
  if (!req.body.user || !req.body.pass) {
    res.status(400).json({
      message: "Please enter username and password.",
    });
  }
  try {
    const instructorUser = await Instructors.findOne({
      where: {
        email: req.body.user,
      },
    });
```

[My Portfolio](https://ethangula96.wixsite.com/ethangula)

![Picture](/Assets/Ethan%20profile.jpg)

## Why DC
