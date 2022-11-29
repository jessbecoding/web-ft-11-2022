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
    def lunge(self):
        print(f"{self.name} lunges forward with a powerful thrust.")
        # Need to put something here where it's like villan health - hero AP
        # Maybe a chance to miss?
    def addItem(self,itm):
        self.items.append(itm)
    def addGold(self,gold):
        self.gold += gold
    def useItem(self,i):
        self.items.remove(i)
    # def heal(self):
        # Need something like hero health plus 15 for the potion

class Villan:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack
    def villanTakeDamage(self):
        # Need to put something here like villan healkth - hero attack
        print(f"{self.name}'s health is now {self.health}.")

class Henchmen:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack

lucipurr = Villan("Lucipurr",'10', '70')
henchmen = Henchmen("Henchmen",'5','25')

typing_speed = 70 #wpm
def slow_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*10.0/typing_speed)

def title_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*15.0/typing_speed)

def hero_stats(hero_name):
    print(f"""
Your name: {hero_name.name}
HP: {hero_name.health}
AP: {hero_name.attack}
""")

def displayInventory(hero_name):
    for item in hero_name.items:
        print(item) 

def player_menu(hero_name):
    menuchoice = input("""
Please make a selection:
    1. Hero Stats
    2. Items
    3. Continue
    4. Quit
    """)
    if(menuchoice == '1'):
        hero_stats(hero_name)
        player_menu(hero_name)
    elif(menuchoice == '2'):
        displayInventory(hero_name)
        player_menu(hero_name)
    elif (menuchoice == '4'):
        print("I'm done")
        quit
    elif(menuchoice != '1','2','3','4'):
        print("Please select a valid option")
        player_menu(hero_name) 

hero_name = input()

def create_hero(hero_name):
    hero_name = input("Hello, Hero! What is your name?\n")
    hero_name = Hero(hero_name,'50','10', 0)
    print(f"Thank you, {hero_name.name}. We're so glad you're here.\n")
    print("Lucipurr, the troublemaking cat, has been terrorizing Our Town and we need your help! Lucipurr is located in her lair at the end of the forest. Please, take this. It will aid you on your journey \n")
    gold = 0
    hero_name.addItem("Potion")
    print("""
    A potion has been added to your inventory.
    """)
    print("Now, go! The fate of Town is in your hands. \n")
    print("""
    ----------------------------------
    | ~*Name of Game & Fancy Stuff*~ |
    ----------------------------------
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
        intoTheForest()
    if(startingchoice == '2'):
        theLastChance(hero_name)
    elif(startingchoice == '3'):
        player_menu(hero_name)

def theLastChance(hero_name):
    moneychoice = input("""
You head toward The Last Chance but abruptly trip over something in your path. What would you like to do?
    1. Investigate what tripped me
    2. Ignore and head for shop
    3. Player menu
""")
    if(moneychoice == '1'):
        print("You bend down and pick up the leather sack that tripped you. It's heavy.")
        hero_name.addGold('10')
        print("10 gold has been added to your inventory")
        shopchoice = input("""
What would you like to do?
    1. Talk to the shopkeep
    2. Head back
    3. Player Menu
""")
        if(shopchoice == '2'):
            starting_point(hero_name)
        if(shopchoice == '3'):
            player_menu(hero_name)



def intoTheForest():
    forestchoice = input("""
You gather your courage and head into the brush, which soon thickens to a dark canopy of trees above your head. Even through the dim lighting, you make out a way to a small clearing, just barely visable through the branches. What would you like to do?
    1. Investigate the clearing
    2. Continue forward to Lucipurr's Lair
    3. Player Menu
""")

create_hero(hero_name)

# Into the forest you go. The light is quickly blocked by the thick canopy of trees above you. Even through this dim light you can see a faint path to the right. What would you like to do?
#     1. Continue ahead to Lucipurr's Lair
#     2. Inverstigate the path
#     3. View Player Menu
# """)
#     if(clearingchoice == '1'):
#         print("""
# Not trusting this footpath, you forge ahead to the lair. As you walk, you're suddenly abushed by Lucipurr's henchman-- NAME!
# """)


# print("""
#     What would you like to do?
#     1. Head to Lair
#     2. View Main Menu
#     """)

# choice = input()

# if(choice == "1"):
#     print("""
# You follow road down path. It leads to a dense forest. 
# To your right, there appears to be a small clearing. 
# What would you like to do?
#     """)
#     print("""
#     1. Investigate the clearing
#     2. Continue on to Lair
#     3. View Main Menu
#     """)
#     clearing_choice = input()
#     if(choice == '1'):
#         print("""
# You push your way past some brush and stumble into the clearing, which appears to be a small meadow.
# There is a wooden chest tucked between two trees on the far end. 
# What would you like to do?
#         """)
#         print("""
#         1. Investigate chest
#         2. Go back to path
#         3. View Main Menu
#         """)
#         chest_choice = input()
#         if(chest_choice == '1'):
#             print("""
# You lift open the heavy wooden lid of the chest. 
# Somehow, it seems like the chest is larger on the inside...
# At the bottom, you see a glimmer catching the light from the sun above you.
# A sword?
# """)
#             print("""
#     What would you like to do?
#         1. Take Sword
#         2. Turn back
#         3. View Main Menu
#             """)
#             sword_choice = input()
#             if(sword_choice == '1'):
#                 print("""
# You pull it out with ease, despite its size.
# It's like...
# It was meant for you?
#                 """)
#             hero_name.addItem("Sword")
#             hero_name.attack + '10'
#             print("You can now use the sword to attack. +10 AP")
#             print("""
#     What would you like to do?
#         1. Continue to Lair
#         2. View Main Menu
#         """)
#         if(chest_choice == '2'):
#             print("You suspiciously eye the chest and determine it must be a mimic. You turn around and leave the meadow to rejoin your previous path.")
#         print("""
#     What would you like to do?
#         1. Continue to Lair
#         2. Main Menu
#             """)

#     if(clearing_choice == '2'):
#         print("You suspiciously eye the chest and determine it must be a mimic. You turn around and leave the meadow to rejoin your previous path.")
#         print("""
#     What would you like to do?
#         1. Continue to Lair
#         2. Main Menu
#             """)
#     if(clearing_choice == '3'):
#         hero_name.main_menu()

# elif(choice == '2'):
#     choice = hero_name.main_menu()  
# elif(choice == '3'):
#     quit



##check win/loss condiditons##
#pathChoic 
1
2
3
# while choice != 123 'only type in 1-3

#pathone()
    #investgate
    #pathone()
    #progress
    #go back -- pathchoice()
#pathtwo()
    #stuff for path 2
#path3()

