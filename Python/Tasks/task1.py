# Task 1:
    # Sort a list of names alphabetically without using the built-in function sort().

def sorted_function(names) -> list:
    '''
    I'm using the bubble sort algorithm to sort the names, So this function
    takes a list as an argument and returns a sorted list.
    '''
    # access each array element
    for i in range(len(names)):
        # compare the elements
        for j in range(len(names) - 1):
            if names[j] > names[j+1]:
                names[j+1],names[j]= names[j], names[j+1]
    return names

names_list = []
print('Enter 0 to Exit')
while True:
    user_input = input('enter the name: ' )
    if user_input.isspace() == True or user_input == '':
        print('empty input')
    else:
        if user_input == '0':
            print('Exit the Program')
            print('Sorted Names:',sorted_function(names_list))
            break
        else:
            names_list.append(user_input)
