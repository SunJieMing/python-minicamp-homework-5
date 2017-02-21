import sqlite3

connection = sqlite3.connect('database.db')
print('Opened successfully')

connection.execute('CREATE TABLE pets (name TEXT, species TEXT, age INTEGER)')
print('Successfully created table')

connection.close()