from flask import Flask
from models.Database import Database
from models.UserLogin import UserLogin
from models.UserRegister import UserRegister

app = Flask(__name__)
db = Database("127.0.0.1", "root", "Gote03/18", 'federacao_dama')

user_register = UserRegister(app, db)
user_login = UserLogin(app, db)

if __name__ == '__main__':
    app.run(debug=True)
