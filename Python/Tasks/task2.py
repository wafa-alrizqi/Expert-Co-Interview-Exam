from datetime import date

# Task 2:
# Using two dates as input, calculate the interval of time between them.


def date_function(d1: date, d2: date) -> date:
    """
    A function to detemine the interval of time between two dates. 
    This function takes two dates as an arguments and returns the
    date difference between them.
    """
    # abs() function to keep the number positive
    year = abs(d1.year - d2.year)
    month = abs(d1.month - d2.month)
    day = abs(d1.day - d2.day)

    # %s and %d are used for formatting strings.
    # %s is a placeholder for a string and %d is a placeholder for a number.
    real_dates = 'The amount of time between %s and %s ' % (d1, d2)
    date_difference = real_dates + \
        'is:\n%d Years, %d Months, %d Days' % (year, month, day)
    return date_difference


date1 = date(1995, 4, 22)
date2 = date(1999, 8, 14)
print(date_function(date1, date2))


# Using User Input

# print('first date information: ')
# d1_year=int(input("enter the year: "))
# d1_month=int(input("enter the month: "))
# d1_day=int(input("enter the day: "))

# print('second date information: ')
# d2_year=int(input("enter the year: "))
# d2_month=int(input("enter the month: "))
# d2_day=int(input("enter the day: "))

# dd1 = date(d1_year,d1_month,d1_day)
# dd2 = date(d2_year,d2_month,d2_day)
# print(date_function(dd1,dd2))
