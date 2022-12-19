from utils.db import db
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey
from sqlalchemy import Column, Integer, String

class user (db.Model):
    email = db.Column(db.String(200), primary_key=True)
    password = db.Column(db.String(100))
    Rol = db.Column(db.String(50))



def __init__(self, email, password, Rol):

        self.email = email
        self.password = password
        self.Rol = Rol
       
