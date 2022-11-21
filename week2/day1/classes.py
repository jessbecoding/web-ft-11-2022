class Pet:
    def __init__(self,name,owner,noise):
        self.name = name
        self.owner = owner
        self.noise = noise
    def whoIsMyOwner(self):
        print(f"{self.name}'s owner is {self.owner}.")
    def whatIsMyName(self):
        print(f"This pet's name is {self.name}.")
    def whatSound(self):
        print(f"{self.name} says {self.noise}!")

Leia = Pet("Leia","Jessika","Bark")
Gimpy = Pet("Gimpy","Jessika","Meow")
Luci = Pet("Lucipurr","Jessika","MEEEEEEEEEEEH")

Leia.whatIsMyName()
Leia.whoIsMyOwner()
Leia.whatSound()

Gimpy.whatIsMyName()
Gimpy.whoIsMyOwner()
Gimpy.whatSound()

Luci.whatIsMyName()
Luci.whoIsMyOwner()
Luci.whatSound()