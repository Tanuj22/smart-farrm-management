import pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from flask import Flask

app = Flask(__name__)

RF = RandomForestClassifier(n_estimators=20, random_state=0)

with open('RandomForest.pkl', 'rb') as f:
    RF = pickle.load(f)


@app.route('/predict')
def predict():
    data = np.array([[83, 45, 60, 28, 70.3, 7.0, 150.9]])
    prediction = RF.predict(data)
    return prediction[0]


if __name__ == '__main__':
    app.run()