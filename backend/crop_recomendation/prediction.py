import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from flask import Blueprint
from flask import request


recomendation_api = Blueprint('recomendation_api', __name__)

RF = RandomForestClassifier(n_estimators=20, random_state=0)

with open('crop_recomendation/RandomForest.pkl', 'rb') as f:
    RF = pickle.load(f)


# data = np.array([[83, 45, 60, 28, 70.3, 7.0, 150.9]])



@recomendation_api.route('/predict', methods=['POST'])
def predict():
    N = request.json['N']
    P = request.json['P']
    K = request.json['K']
    temperature = request.json['temperature']
    humidity = request.json['humidity']
    ph = request.json['ph']
    rainfall = request.json['rainfall']
    
    data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    prediction = RF.predict(data)
    return prediction[0]
