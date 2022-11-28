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


slow_type("Hello, Hero! What is your name?\n")
hero_name = input()

hero_name = Hero(hero_name,(50),[])

slow_type("We're so glad you're here. Villan has been terrorizing Town and we need your help! Villan is located in Lair. Please, take this. It will aid you on your journey \n")

hero_name.addItem("Potion")

print("""
    A potion has been added to your inventory.
    """)

slow_type("Now, go! The fate of Town is in your hands. \n")

slow_type("""
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
if choice == 2
