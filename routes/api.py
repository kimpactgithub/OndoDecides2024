import gspread
from google.oauth2.service_account import Credentials
import pandas as pd
from flask import jsonify, Blueprint, current_app

api = Blueprint('api', __name__)

# Google Sheets API Scope
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

def get_google_sheet_data():
    try:
        creds = Credentials.from_service_account_file(
            current_app.config['CREDENTIALS_FILE'], scopes=SCOPES)
        client = gspread.authorize(creds)

        sheet = client.open_by_url(current_app.config['GOOGLE_SHEET_URL'])
        worksheet = sheet.get_worksheet(13)

        data = worksheet.get('A6:T25')
        headers = data[0]
        rows = data[1:]
        df = pd.DataFrame(rows, columns=headers)
        
        return df
    except Exception as e:
        current_app.logger.error(f"Error accessing Google Sheet: {str(e)}")
        return None
    
    
def get_google_sheet_lgaDataTotal():
    try:
        creds = Credentials.from_service_account_file(
            current_app.config['CREDENTIALS_FILE'], scopes=SCOPES)
        client = gspread.authorize(creds)

        sheet = client.open_by_url(current_app.config['GOOGLE_SHEET_URL'])
        worksheet = sheet.get_worksheet(13)

        data = worksheet.get('V6:W24')
        headers = data[0]
        rows = data[1:]
        df = pd.DataFrame(rows, columns=headers)
        
        return df
    except Exception as e:
        current_app.logger.error(f"Error accessing Google Sheet: {str(e)}")
        return None    

def get_google_sheet_inconsistencyData():
    try:
        creds = Credentials.from_service_account_file(
            current_app.config['CREDENTIALS_FILE'], scopes=SCOPES)
        client = gspread.authorize(creds)

        sheet = client.open_by_url(current_app.config['GOOGLE_SHEET_URL'])
        worksheet = sheet.get_worksheet(13)

        data = worksheet.get('A106:J125')
        headers = data[0]
        rows = data[1:]
        df = pd.DataFrame(rows, columns=headers)
        
        return df
    except Exception as e:
        current_app.logger.error(f"Error accessing Google Sheet: {str(e)}")
        return None            
        


@api.route('/api/election-data', methods=['GET'])
def election_data():
    data = get_google_sheet_data()
    if data is None:
        return jsonify({"error": "Failed to retrieve data from Google Sheets"}), 500
    return jsonify(data.to_dict(orient="records"))


@api.route('/api/election-data-total', methods=['GET'])
def election_data_total():
    data_Total = get_google_sheet_lgaDataTotal()
    if data_Total is None:
        return jsonify({"error": "Failed to retrieve data from Google Sheets"}), 500
    return jsonify(data_Total.to_dict(orient="records"))
 

@api.route('/api/color-update', methods=['POST'])
def color_update():

    return jsonify({"status": "Color updated"})

@api.route('/api/tooltip-data/<string:lga_id>', methods=['GET'])
def tooltip_data(lga_id):
    data = get_google_sheet_data()
    if data is None:
        return jsonify({"error": "Failed to retrieve data from Google Sheets"}), 500

    lga_data = data[data['LGA'] == lga_id].to_dict(orient="records")
    return jsonify(lga_data)

@api.route('/api/election-data-inconsistency', methods=['GET'])
def inconsistency_data():
    data =  get_google_sheet_inconsistencyData()
    if data is None:
        return jsonify({"error": "Failed to retrieve data from Google Sheets"}), 500
    return jsonify(data.to_dict(orient="records"))    

