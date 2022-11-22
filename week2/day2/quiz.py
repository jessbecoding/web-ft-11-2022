# # 1. Write a function called "nameFunction" have it print out your name. invoke the function

def nameFunction():
    print("Jessika")

nameFunction()

# #2. Define variable named Joe that is the string Joe

joe = ("Joe")
print(joe)

# #3 Reinitialize Joe so that it is now the integer 4

joe = (4)
print(joe)

# #4 Change Joe into a float

joe = 1.77245385091
print(joe)

# #5. Create a list named students that includes 5 people from this class

students = ["Vinny", "Meg", "Kenneth", "Jaye", "Rokhaya", "Jessika"]

#     #5a print the first item from the list(bonus for more than one way)

print(students[0])

#     #5b print the last item from the list(bonus for more than one way)

print(students[-1])

#     #5c How do I get the third item from the list?

print(students[2])

#     #5d print the entire list not in brackets [student1, student2, etc...]

for Student in students:
    print(Student)

#     #5e add "is cool" to the end of each name

for Student in students:
    print(Student + " is cool")

#     #5f if the students name is your name add "IT ME!!" to the end

for Student in students:
    if Student == "Jessika":
        print(Student + " IT ME!!")

    #5g if you are not in the list print "I guess I'm not cool"

for Student in students:
    if Student != "Jessika":
        print("I guess I'm not cool.")

    #5h list some methods to remove things from a list

# clear, pop, remove, del


#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"

quiz_dict = { 'Digital Crafts': 'Bootcamp', 'Instructor': 'Joe', 'TA': 'Ethan' }

    #6a return the value of "Digital Crafts"

print(quiz_dict['Digital Crafts'])

#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)

class Cars:
    def __init__(self,make,model,year,type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type

MyCar = Cars("Ford","Fusion","2015","Sedan")

    #7a Instantiate 3 new Cars

StefenCar = Cars("Hyundai", "Veloster","2017","Hatchback")
JoannaCar = Cars("Toyota", "4Runner","1998","SUV")
NextCar = Cars("Toyota","Highlander","3000","SUV")
    
    #7b Add a method that allows you to see the make and model of a car in your terminal

class Cars:
    def __init__(self,make,model,year,type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type

StefenCar = Cars("Hyundai", "Veloster","2017","Hatchback")
JoannaCar = Cars("Toyota", "4Runner","1998","SUV")
NextCar = Cars("Toyota","Highlander","3000","SUV")

def makeModel(self):
    print(f"{self.make} {self.model}.")

makeModel(JoannaCar)

    #7c Use the above method on the second car

makeModel(NextCar)

    #7d Add a method that is called "honkHorn" that prints "Beep Beep"

class Cars:
    def __init__(self,make,model,year,type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type

StefenCar = Cars("Hyundai", "Veloster","2017","Hatchback")
JoannaCar = Cars("Toyota", "4Runner","1998","SUV")
NextCar = Cars("Toyota","Highlander","3000","SUV")

def makeModel(self):
    print(f"{self.make} {self.model}.")
def honkHorn():
    print("Beep Beep")

honkHorn()