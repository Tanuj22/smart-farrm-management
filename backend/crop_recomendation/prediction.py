import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from flask import Blueprint

recomendation_api = Blueprint('recomendation_api', __name__)

RF = RandomForestClassifier(n_estimators=20, random_state=0)

with open('crop_recomendation/RandomForest.pkl', 'rb') as f:
    RF = pickle.load(f)


@recomendation_api.route('/predict')
def predict():
    data = np.array([[83, 45, 60, 28, 70.3, 7.0, 150.9]])
    prediction = RF.predict(data)
    return prediction[0]
