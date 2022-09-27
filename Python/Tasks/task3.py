# Task 3:
# Given a number n, check if whether all digits of n divide it or not.


def divisibility_check(number_list: list):
    """
    Function to determine whether or not a number has been divided by all of its digits.
    """
    try:
        for i in number_list:
            if user_input % i == 0:
                print(user_input, '%', i, '== 0')
                continue
            else:
                print('Not divisible by its all digits')
                break
    except ZeroDivisionError as e:
        print(e)


user_input = int(input('Enter a Number: '))

# the list comprehension used to split the number into digits .
# Strings are Arrays, so if i convert it to string i can split the number easily
x = [int(a) for a in str(user_input)]

divisibility_check(x)
