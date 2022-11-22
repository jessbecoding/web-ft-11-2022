#   I should be able to type a phone number
#   I should be able to view all the phone numbers I have created up to that point 
#   I should be able to add phone numbers
#   I should be able to see the names of the people attached to each phone number
#   I should be able to delete a specific phone number
#   I should be able to add phone numbers until I specify a stop and then the game will quit
# The phone number needs to be in this format  111-111-1111
#   You should use classes
ContactList = []

class Contact:
    def __init__(self,name,phonenumber):
        self.name = name
        self.phonenumber = phonenumber
def displayContact(self):
    print(f"{self.name}:{self.phonenumber}")
def displayName(self):
    print(self.name)

def phoneBookApp():

    while True:
        choice = input("What would you like to do?\n Choose 1 for View Phone Book \n Choose 2 for Add Contact \n Choose 3 for Delete Contact\n Choose 5 to Exit\n")
        if(choice == "1"):
            for Name in ContactList:
                displayContact(Name)
        if(choice == "2"):
            nameInput = input("What is their name? \n")
            numberInput = input("What is their number? \n")
            newContact = Contact(nameInput, numberInput)
            ContactList.append(newContact)
            print("Saved")
        if(choice == "3"):
            for Name in ContactList:
                displayName(Name)
            name = input("Which contact would you like to delete? \n")
            if(name == name):
                choice = input("Are you sure you want to delete? Y for YES or N for NO \n")
                if(choice == "Y", "y"):
                    for i, entry in enumerate(ContactList):
                        if entry.name == name:
                            del ContactList[i]
                            print("All Done!")
                if(choice == "N", "n"):
                    for Name in ContactList:
                        displayName(Name)
                    name = input("Which contact would you like to delete? \n")
                    if(name == name):
                        choice = input("Are you sure you want to delete? Y for YES or N for NO \n")
                        if(choice == "Y", "y"):
                            for i, entry in enumerate(ContactList):
                                if entry.name == name:
                                    del ContactList[i]
                                    print("All Done!")
            if(name != name):
                print("That contact isn't found.")
        if(choice == "5"):
            print("Bye!")
            return False
        if(choice != 1,2,3,5,nameInput,numberInput,choice,"Y","y","N","n"):
            print("Please select a valid option.")

phoneBookApp()