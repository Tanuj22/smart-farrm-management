from flask import Flask
from flask_cors import CORS
from crop_recomendation.prediction import recomendation_api
from crop_health_detection.prediction import disease_api


app = Flask(__name__)
CORS(app)
app.register_blueprint(recomendation_api)
app.register_blueprint(disease_api)


if __name__ == "__main__":
    app.run()