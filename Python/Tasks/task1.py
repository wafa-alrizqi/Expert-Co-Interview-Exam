# Task 1
""" 
Task 1: 
Sort a list of names alphabetically
without using  the built-in function sort().
"""
# first solution 
# names =  ["d","b","a","c","f","h","g","e"]
# for i in sorted(names):
#     print(i,' ', end='')

# second solution 
def sorted_function(names) -> list:
    for i in range(len(names)):
        for j in range(len(names) - 1):
            if names[j] > names[j+1]:
                names[j+1],names[j]= names[j], names[j+1]
    return names

my_list = []
print('Enter 0 to Exit')
while True:
    user_input = input('enter the name: ' )
    if user_input.isspace() == True or user_input == '':
        print('empty input')
    else:
        if user_input == '0':
            print('Exit the Program')
            print('Sorted Names:',sorted_function(my_list))
            break
        else:
            my_list.append(user_input)
