from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/user/login', methods=['GET'])
def login_user():
    data = request.get_json()
    print(data)


@app.route('/user/register', methods=['POST'])
def register_user():
    data = request.get_json()
    print(data)
    return jsonify({"message": "Usuário registrado com sucesso!"})


if __name__ == '__main__':
    app.run(debug=True)