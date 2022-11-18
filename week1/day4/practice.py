def factorial():
    number = int(input("Give me your number \n"))
    factorial = 1
    if number < 0:
        print("This isn't a real thing!")
    elif number == 0:
        print("The factorial of 0 is 1")
    else:
        for i in range(1,number + 1):
            factorial = factorial*i
        print("The factorial of",number,"is",factorial)

superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    },
    "weakness": "Superman"
}

# hero_name = superhero["name"]
# hero_alias = superhero.get("alias")
# hero_hometown = superhero.get("hometown")

# if "weakness" in superhero:
#     print("The bad guys can totally win.")
# else:
#     print("Go home, bad guys")

# for key, value in superhero.items():
#     print("Superhero's %s is %s" % (key, value))

# Can't figure out how to update 
# superhero["alias"] = "Princess Diana of Themyscira"
# superhero["hometown"] = "Themyscira"

# vehicle = superhero["vehicle"]
# vehicle_title = vehicle["title"]

# print(vehicle_title)

# vehicle_title = superhero["vehicle"]["title"]

# print(vehicle_title)

# lasso = superhero["gear"][0]
# print(lasso)

# for item in superhero["gear"]:
#     print("%s has %s" % (superhero["name"], item))