from flask import Flask
from flask_cors import CORS, cross_origin
import flask.json, decimal
from database import Database

class MyJSONEncoder(flask.json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            # Convert decimal instances to strings.
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)

app = Flask(__name__)
app.json_encoder = MyJSONEncoder
CORS(app)

@app.route('/status')
def status():
    return 'OK'

@app.route('/customer/<id>')
def find_customers(id):
    db = Database()
    results = db.retrieve_customers()
    return flask.jsonify(results=results)

@app.route('/fares')
def find_fares():
    db = Database()
    results = db.retrieve_fares()
    return flask.jsonify(results=results)

@app.route('/flights/<origin>/<destination>/<bookingclass>')
def find_flights(origin, destination, bookingclass):
    db = Database()
    results = db.retrieve_flights(origin, destination, bookingclass)
    return flask.jsonify(results=results)

@app.route('/acc/<destination>/<rating>')
def find_acc(destination, rating):
    db = Database()
    results = db.retrieve_acc(destination, rating)
    return flask.jsonify(results=results)

@app.route('/acc/<destination>/<rating>/<days>')
def find_acc_days(destination, rating, days):
    db = Database()
    results = db.retrieve_acc(destination, rating, days)
    return flask.jsonify(results=results)

@app.route('/tours/<destination>/<ndays>')
def find_tours(destination, ndays):
    db = Database()
    results = db.retrieve_packages(destination, ndays)
    return flask.jsonify(results=results)

@app.route('/destinations')
def find_destinations():
    db = Database()
    results = db.retrieve_destinations()
    return flask.jsonify(results=results)

@app.route('/origins')
def find_origins():
    db = Database()
    results = db.retrieve_origins()
    return flask.jsonify(results=results)

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0')