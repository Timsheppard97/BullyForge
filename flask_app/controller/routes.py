from flask_app import app
from flask import render_template, redirect

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/learnMore")
def learnMore():
    return render_template("learnMore.html")