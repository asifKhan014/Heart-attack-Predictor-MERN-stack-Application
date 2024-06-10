from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_data = np.array([[
        data['age'],
        data['sex'],
        data['cp'],
        data['trtbps'],
        data['chol'],
        data['fbs'],
        data['restecg'],
        data['thalachh'],
        data['exng'],
        data['oldpeak'],
        data['slp'],
        data['caa'],
        data['thall']
    ]])
    
    prediction = model.predict(input_data)
    return jsonify({'prediction': 'yes' if prediction[0] == 1 else 'no'})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
