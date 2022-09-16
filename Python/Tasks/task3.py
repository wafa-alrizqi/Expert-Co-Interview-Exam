# Task 3:
    # Create a running Python project to check if all digits of a number divide it
    # given a number n, find whether all digits of n divide it or not.


# the list comprehension used to split the number into digits .
# Strings are Arrays, so if i convert it to string i can split the number easily

user_input = int(input('Enter a Number: '))
x = [int(a) for a in str(user_input)]

def divisibility_check(number_list:list):
    """
    function to check if the number is divide by its all digit or not 
    """
    try:
        for i in number_list:
            if user_input % i == 0 :
                print(user_input ,'%' , i , '== 0')
                continue
            else:
                print('Not divisible by its all digits')
                break
    except ZeroDivisionError as e:
        print(e)

divisibility_check(x)
