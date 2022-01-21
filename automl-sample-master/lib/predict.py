import sys, os

from google.cloud import automl
from google.auth.credentials import Credentials
from google.oauth2 import service_account
#from google.cloud.automl_v1beta1 import PredictionServiceClient


PROJECT_ID = 'storied-shell-289709'
MODEL_ID = 'ICN5122890755622305792'

def get_prediction(content):
    prediction_client = automl.PredictionServiceClient.from_service_account_file(os.path.dirname(__file__) + '/service.json')
    name = 'projects/{}/locations/us-central1/models/{}'.format(PROJECT_ID, MODEL_ID)
    payload = {'image': {'image_bytes': content }}
    params = {'score_threshold': '0.7'}
    #request = automl.PredictRequest(name=name,  payload=payload, params=params)
    #request = prediction_client.predict(name, payload, params)
    return prediction_client.predict(name, payload, params)
    #return request
