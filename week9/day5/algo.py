string = "([])(){}(())()()"
idk = []

def function(str):
    for bracket in str:
        if bracket == "()":
            print("true")
        elif bracket == "[]":
            print("true")
        elif bracket == "{}":
            print("true")
        else:
            return False

function(string)