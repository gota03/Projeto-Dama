from models.Database import Database
from flask_cors import CORS
from flask import Flask, jsonify

class ViewTournaments:

    def __init__(self, app: Flask, db: Database):
        self.db = db
        CORS(app)
        app.add_url_rule('/view-tournaments', 'get_tournaments', self.get_tournaments, methods=['GET'])

    
    def get_tournaments(self):
        self.db.ensure_connection()
        cursor = self.db.connection.cursor()
        cursor.execute('SELECT * FROM tournament;')
        tournaments = cursor.fetchall()
        list_tournaments = []
        for tournament in tournaments:
            date = tournament[2]
            date_formated = date.strftime("%d/%m/%Y")
            list_tournaments.append({'Name': tournament[1],
                                     'Date': date_formated,
                                     'Locale': tournament[3],
                                     'Qtd_participants': tournament[4],
                                     'Taxe_pay': float(tournament[5])})
        return jsonify(list_tournaments)
