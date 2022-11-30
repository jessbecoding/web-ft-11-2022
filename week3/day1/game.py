import sys,time,random
class Hero:
    def __init__(self,name,health,attack,gold):
        self.name = name
        self.health = health
        self.attack = attack
        self.gold = gold
        self.items = []
    def takeDamage(self):
        print(f"{self.name}'s health is now {self.health}.")
    def lunge(self, enemy):
        print(f"{self.name} lunges forward with a powerful thrust.")
        enemy.health -= self.attack
        print(f"{lucipurr.name}'s health is now {lucipurr.health}")
    def addItem(self,itm):
        self.items.append(itm)
    def addGold(self,gold):
        self.gold -= gold
    def spendMoney(self,gold):
        self.gold += gold
    def useItem(self,i):
        self.items.remove(i)
    def heal(self):
        self.health += 50

class Villan:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack
    def villanTakeDamage(self):
        # Need to put something here like villan healkth - hero attack
        print(f"{self.name}'s health is now {self.health}.")
    def attackFail(self):
        print("""
You heave your sturdy shield in front of you, just in the knick of time! Lucipurr's outstretched claws make contact with the shield, buying you time to parry.""")

lucipurr = Villan("Lucipurr",50,10)

typing_speed = 80 #wpm
def slow_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*10.0/typing_speed)

def title_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*20.0/typing_speed)

def hero_stats(hero_name):
    print(f"""
Your name: {hero_name.name}
HP: {hero_name.health}
AP: {hero_name.attack}
""")

def displayInventory(hero_name):
    for item in hero_name.items:
        print(item)
    print(f"You have {hero_name.gold} gold.")

def combat_menu(lucipurr,hero_name):
    luciper_Alive = True
    while luciper_Alive:
        if lucipurr.health > 1:
            combatchoice = ''
            combatchoice = input("""
        What would you like to do?
            1. Block
            2. Attack
        """)
            if(combatchoice == '1'):
                blockitem = "Shield"
                if blockitem in hero_name.items:
                    lucipurr.attackFail()
                    hero_name.useItem("Shield")
                    slow_type("Your shield has been destroyed!")
                else:
                    slow_type("You throw your arms over your face, but it's all for naught. All 5 of Lucipurr's sharp claws tear into you. YOU DIED.")
                    luciper_Alive = False
                    break
            elif(combatchoice == '2'):
                attackitem = "Sword"
                if attackitem not in hero_name.items:
                        slow_type("""
        You give it your all as you wind up a powerful punch and unleash it on Luci!
        It doesn't appear to phase her!
        All 5 of Lucipurr's sharp claws tear into you. YOU DIED.
        """)
                        luciper_Alive = False
                        break
                else:
                    hero_name.lunge(lucipurr)
        else:
            slow_type('Lucipurr has been DEFEATED!')
            slow_type('You win')
            luciper_Alive = False
            break
def player_menu(hero_name):
    menuchoice = input("""
Please make a selection:
    1. Hero Stats
    2. Items
    3. Back to Start
    4. Quit
    """)
    if(menuchoice == '1'):
        hero_stats(hero_name)
        player_menu(hero_name)
    elif(menuchoice == '2'):
        displayInventory(hero_name)
        player_menu(hero_name)
    elif(menuchoice == '3'):
        starting_point(hero_name)
    elif (menuchoice == '4'):
        print("Bye!")
        quit
    elif(menuchoice != '1','2','3','4'):
        print("Please select a valid option")
        player_menu(hero_name) 

hero_name = input()

def create_hero(hero_name):
    hero_name = input("Hello, Hero! What is your name?\n")
    hero_name = Hero(hero_name,50,15,0)
    slow_type(f"Thank you, {hero_name.name}. We're so glad you're here.\n")
    slow_type("Lucipurr, the troublemaking cat, has been terrorizing Our Town and we need your help! Lucipurr is located in her lair at the end of the forest. Please, take this. It's dangerous to go alone. \n")
    gold = 0
    hero_name.addItem("Kitten")
    print("""
    A small kitten has been added to your inventory.
    """)
    slow_type("Now, go! The fate of Town is in your hands. \n")
    title_type("""
    -------------------------------
    | ~* C A T A S T R O P H E *~ |
    -------------------------------
    """)
    starting_point(hero_name)

def starting_point(hero_name):
    startingchoice = input("""
You follow the path out of Cloud City toward the dense forest of her outskirts. Through the forest is the way to Lucipurr's Lair. At the entrance to the trees, there's The Last Chance shop. What would you like to do?
    1. Enter the forest
    2. Shop at The Last Chance
    3. View Player Menu
""")
    if(startingchoice == '1'):
        intoTheForest(hero_name)
    if(startingchoice == '2'):
        theMoneyPouch(hero_name)
    elif(startingchoice == '3'):
        player_menu(hero_name)

def luciLair (lucipurr,hero_name):
    fightchoice = input("""
You traverse the rugged forest and finally come to a stop outside of Lucipurr's Lair. There is a giant heavy door cracked slightly ajar.
Would you like to open it? Y or N
""").upper()
    if(fightchoice == "Y"):
        slow_type("You slowly widen the opening and step inside. Your eyes adjust to the light for a shadowy figure, perched for an attack. You only have a moment to react!")
        combat_menu(lucipurr,hero_name)
    if(fightchoice == "N"):
        slow_type("Really?! You're giving up now?! Get back in there!!")
        luciLair()

def theMoneyPouch(hero_name):
    moneychoice = input("""
You head toward The Last Chance but abruptly trip over something in your path. What would you like to do?
    1. Investigate what tripped me
    2. Ignore and head for shop
    3. Player menu
""")
    if(moneychoice == '1'):
        slow_type("You bend down and pick up the leather sack that tripped you. It's heavy.\n")
        hero_name.addGold(10)
        print("10 gold has been added to your inventory")
        shopchoice = input("""
What would you like to do?
    1. Talk to Shopkeep
    2. Player Menu
""")
        if(shopchoice == '1'):
            shop(hero_name)
        if(shopchoice == '2'):
            player_menu(hero_name)

def shop(hero_name):
    slow_type("The shopkeep greets you warmly and sells you a shield for 10 gold.\n")
    hero_name.addItem("Shield")
    print("A shield has been added to your inventory.\n")
    hero_name.spendMoney (10)
    print("10 gold has been removed from your inventory.\n")
    shopexit = input("""
What would you like to do?
    1. Continue to Lair
    2. Player Menu
""")
    if(shopexit == '1'):
        intoTheForest(hero_name)
    elif(shopexit == '2'):
        player_menu(hero_name)

def intoTheForest(hero_name):
    forestchoice = input("""
You gather your courage and head into the brush, which soon thickens to a dark canopy of trees above your head. Even through the dim lighting, you make out a way to a small clearing, just barely visable through the branches. What would you like to do?
    1. Investigate the clearing
    2. Continue forward to Lucipurr's Lair
    3. Player Menu
""")
    if(forestchoice == '1'):
        chestchoice = input("""
You push your way past some brush and stumble into the clearing, which appears to be a small meadow.
There is a wooden chest tucked between two trees on the far end. 
What would you like to do?
    1. Investigate the chest
    2. Go Back
    3. Player Menu
""")
        if(chestchoice == '1'):
            slow_type(f"""
    Once you get to the chest, you can see that it's wood with ornate gold embelishments. Enscribed on the lid is... {hero_name.name}? That can't be right.
    You're compelled to open the chest by some innate force. Somehow, it seems larger on the inside. A glimmer at the bottom catches your eye. Is that a sword?
    """)
            swordchoice = input("Grab sword? Y or N\n").upper()
            if(swordchoice == 'Y'):
                slow_type("You reach down a full arm's length into the chest and pull the sword from below. Despite its size, you're able to bring it out with ease.\n")
                hero_name.addItem("Sword")
                print("The sword has been added to your inventory.")
                swordexit = input("""
What would you like to do?
    1. Go back
    2. Player Menu
""")
                if(swordexit == '1'):
                    intoTheForest(hero_name)
                elif(swordexit == '2'):
                    player_menu(hero_name)
        elif(chestchoice == '2'):
            luciLair(lucipurr,hero_name)
        elif(chestchoice == '3'):
            intoTheForest(hero_name)
    elif(forestchoice == '2'):
        luciLair(lucipurr,hero_name)
    elif(forestchoice == '3'):
        player_menu(hero_name)

create_hero(hero_name)

