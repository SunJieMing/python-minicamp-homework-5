from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/new-pet', methods = ['POST'])
def newAnimal():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()

	name = request.form['name']
	species = request.form['species']
	age = request.form['age']

	try:
		cursor.execute('INSERT INTO pets (name, species, age) VALUES (?, ?, ?)', (name, species, age))
		connection.commit()
		message = 'successfully inserted'
	except Exception as err:
		print(err)
		connection.rollback()
		message = 'an error occured'
	finally:
		connection.close()
		return message

@app.route('/pets')
def pets():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()

	cursor.execute('SELECT * FROM pets')
	petsList = cursor.fetchall()

	connection.close()

	return jsonify(petsList)

app.run(debug = True)