class Hero:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack
        self.items = []
    def takeDamage(self):
        # Need to put something here like hero health - villan damage 
        print(f"{self.name}'s health is now {self.health}.")
    def lunge(self):
        print(f"{self.name} lunges forward with a powerful thrust.")
        # Need to put something here where it's like villan health - hero AP
        # Maybe a chance to miss?
    def addItem(self,itm):
        self.items.append(itm)
    def useItem(self,i):
        self.items.remove(i)
    def displayStats(self):
        print(f"""
        {self.name}
        {self.health} HP
        {self.attack} AP
        """)
    def displayInventory(self):
        print(hero_name.items)
    def main_menu(self):
        menuchoice = input("""
    1. Hero Stats
    2. Items
    3. Quit
    """)
        if(menuchoice == '1'):
            hero_name.displayStats()
            hero_name.main_menu()
        elif(menuchoice == '2'):
            hero_name.displayInventory()
            hero_name.main_menu()

class Villan:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack


def combat_menu():
    print("""
    1. Attack
    2. Items
    3. Flee
    """)

import sys,time,random
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


print("Hello, Hero! What is your name?\n")
hero_name = input()

hero_name = Hero(hero_name,'50','10')

print("We're so glad you're here. Villan has been terrorizing Town and we need your help! Villan is located in Lair. Please, take this. It will aid you on your journey \n")

hero_name.addItem("Potion")

print("""
    A potion has been added to your inventory.
    """)

print("Now, go! The fate of Town is in your hands. \n")

print("""
    ---------------------------------
    | ~*Name of Game & Fancy Stuff*~ |
    ---------------------------------
    """)

print("""
    What would you like to do?
    1. Head to Lair
    2. View Main Menu
    """)

choice = input()

while(choice == "1"):
    print("""
You follow road down path. It leads to a dense forest. 
To your right, there appears to be a small clearing. 
What would you like to do?
    """)
    print("""
    1. Investigate the clearing
    2. Continue on to Lair
    3. View Main Menu
    """)
    clearing_choice = input()
    if(choice == '1'):
        print("""
You push your way past some brush and stumble into the clearing, which appears to be a small meadow.
There is a wooden chest tucked between two trees on the far end. 
What would you like to do?
        """)
        print("""
        1. Investigate chest
        2. Go back to path
        3. View Main Menu
        """)
        chest_choice = input()
        if(chest_choice == '1'):
            slow_type("""
You lift open the heavy wooden lid of the chest. 
Somehow, it seems like the chest is larger on the inside...
At the bottom, you see a glimmer catching the light from the sun above you.
A sword?
""")
            print("""
    What would you like to do?
        1. Take Sword
        2. Turn back
        3. View Main Menu
            """)
            sword_choice = input()
            if(sword_choice == '1'):
                slow_type("""
You pull it out with ease, despite its size.
It's like...
It was meant for you?
                """)
            hero_name.addItem("Sword")
            hero_name.attack + '10'
            print("You can now use the sword to attack. +10 AP")
            slow_type("""
    What would you like to do?
        1. Continue to Lair
        2. View Main Menu
        """)

while(choice == '2'):
    choice = hero_name.main_menu()  
while(choice == '3'):
    break