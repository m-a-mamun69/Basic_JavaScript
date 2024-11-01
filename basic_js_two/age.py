age = int(input("Enter Your Age: "))

if(age >= 18 and age < 100):
    print("You are old enough to enter this site.")

elif(age < 0):
    print("Your age can't be below 0")

elif(age >= 100):
    print("You are TOO old to enter this Site.")

else:
    print("You must be 18+ to enter this Site.")