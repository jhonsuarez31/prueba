from flask import Flask
from routes.user import contacts

from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from utils.db import db


app  = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:3138533232Cadc_@localhost/userdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
SQLAlchemy(app)
app.register_blueprint(contacts)

cors = CORS(app, resources={r"/src/*": {"origins": "*"}})

with app.app_context():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)