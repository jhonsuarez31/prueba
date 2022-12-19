from utils.db import db


class employe (db.Model):
    idemployee = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    state = db.Column(db.String(50))
    date_registry = db.Column(db.Date)

def __def__(self, name, last_name, state, date_registry):

        self.name = name
        self.last_name = last_name
        self.state = state
        self.date_registry = date_registry
