numbers = [1,2,5,0,7,0,9,0,2,0,2,3]

numbers.sort()

for number in numbers:
    if number == 0:
        numbers.remove(numbers[0])
        numbers.append(0)

print(numbers)
