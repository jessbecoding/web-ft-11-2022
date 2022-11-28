class Hero:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack
        self.items = []
    def takeDamage(self):
        print(f"{self.name}'s health is now {self.health}.")
    def addItem(self,itm):
        self.items.append(itm)

class Villan:
    def __init__(self,name,health,attack):
        self.name = name
        self.health = health
        self.attack = attack

def main_menu():
    print("""
    1. Hero Stats
    2. Items
    3. Quit
    """)


def combat_menu():
    print("""
    1. Attack
    2. Items
    3. Flee
    """)

import sys,time,random

typing_speed = 50 #wpm
def slow_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*10.0/typing_speed)

def title_type(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(random.random()*5.0/typing_speed)


slow_type("Hello, Hero! What is your name?\n")
hero_name = input()

hero_name = Hero(hero_name,(50),[])

slow_type("We're so glad you're here. Villan has been terrorizing Town and we need your help! Villan is located in Lair. Please, take this. It will aid you on your journey \n")

hero_name.addItem("Potion")

print("""
    A potion has been added to your inventory.
    """)

slow_type("Now, go! The fate of Town is in your hands. \n")

title_type("""
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
if(choice == "1"):
    slow_type("""
    You follow road down path. It leads to a dense forest. 
    To your right, there appears to be a small clearing. 
    What would you like to do?
    """)
    print("""
    1. Investigate the clearing
    2. Continue on to Lair
    """)
    clearing_choice = input()
    if(choice == '1'):
        slow_type("""
        You push your way past some brush and stumble into the clearing, which appears to be a small meadow.
        There is a wooden chest tucked between two trees on the far end. 
        What would you like to do?
        """)
        print("""
        1. Investigate chest
        2. Go back to path
        """)
        chest_choice = input()
        if(chest_choice == '1'):
            slow_type("""
            You lift open the heavy wooden lid of the chest. 
            Somehow, it seems like the chest is larger on the inside...
            At the bottom, you see a glimmer catching the light from the sun above you.
            A sword?
            You pull it out with ease, despite its size.
            It's like...
            It was meant for you?
            """)
            hero_name.addItem("Sword")
            print("You can now use the sword to  attack. +10 AP")
