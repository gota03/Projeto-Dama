from flask import Flask, request, jsonify
from flask_cors import CORS
from models.Database import Database

class TournamentManager:
    def __init__(self, app: Flask, db: Database):
        self.db = db
        CORS(app)
        app.add_url_rule('/tournaments', 'create_tournament', self.create_tournament, methods=['POST'])

    def create_tournament(self):
        data = request.get_json()
        try:
            required_fields = ['tournamentName', 'date', 'location', 'qtd_participants', 'registration_price']
            for field in required_fields:
                if field not in data:
                    return jsonify({"message": f"Campo '{field}' é obrigatório."}), 400
            
            tournament_name = data['tournamentName']
            date = data['date']
            location = data['location']
            qtd_participants = data['qtd_participants']
            registration_price = data['registration_price']

            self.db.ensure_connection()
            cursor = self.db.connection.cursor()
            cursor.execute("""
                INSERT INTO tournament (tournament_name, date, location, qtd_participants, registration_price)
                VALUES (%s, %s, %s, %s, %s)
            """, (tournament_name, date, location, qtd_participants, registration_price))
            self.db.connection.commit()
            return jsonify({"message": "Torneio criado com sucesso!"}), 201
        
        except Exception as e:
            print(f'Erro ao criar torneio: {e}')
            return jsonify({"message": "Erro ao criar torneio."}), 500
