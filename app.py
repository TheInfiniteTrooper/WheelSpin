import random
from flask import Flask, render_template, jsonify, redirect, url_for, request

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')
  
@app.route('/greet')
def say_hello():
  return 'Hello from Server'

@app.route('/random')
def spin():
  return 'Spinning the Wheel!'