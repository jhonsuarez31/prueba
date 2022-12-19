from flask import Blueprint, request, jsonify    
import jsonpickle
from models.employe import employe
from models.user import user
from flask_cors import CORS, cross_origin

from utils.db import db

contacts = Blueprint('contacts',__name__)

@contacts.route("/")
def home():
    return 'Hello Word'

@contacts.route("/newUser",methods=['POST'])
def add_user():
    info = request.json
    name = info['name']
    last_name = info['last_name']
    state = info['state']
    date_registry = info['date_registry']
    
    new_user = employe(name=name,last_name=last_name,state=state, date_registry=date_registry)
    db.session.add(new_user)
    db.session.commit()

    return 'saving a contact '    

@contacts.route("/get-User",methods=['GET'])

def get_users():
    users = employe.query.all()
    return jsonpickle.encode(users)

@contacts.route("/delete/<int:user_id>",methods=['GET'])
def deleteUser(user_id):
   
    user = employe.query.filter_by(iduser=user_id).first()
   
    db.session.delete(user)
    db.session.commit()
    return 'user delete'  

@contacts.route("/update/<int:user_id>", methods=["GET", "POST"])
def update(user_id):
    # get contact by Id

    user = employe.query.filter_by(idemployee=user_id).first()
    if request.method == "POST":
        user.name = request.json['name']
        user.state = request.json['state']
        db.session.commit()
    return 'upadate'

@contacts.route("/auth-login", methods=["POST"])
def userLogin():
    info = request.json
    email = info['email']
    password = info['password']
    print(email)
    
    # get contact by Id
    return 'upadate'
