from flask import Flask
from models.Database import Database
from models.UserLogin import UserLogin
from models.AdminLogin import AdminLogin
from models.UserRegister import UserRegister
from models.AdminRegister import AdminRegister
from models.TournamentManager import TournamentManager

app = Flask(__name__)
db = Database("127.0.0.1", "root", "Gote03/18", 'federacao_dama')

user_register = UserRegister(app, db)
user_login = UserLogin(app, db)

admin_login = AdminLogin(app, db)
admin_register = AdminRegister(app, db)

tournament_manager = TournamentManager(app, db)

if __name__ == '__main__':
    app.run(debug=True)
