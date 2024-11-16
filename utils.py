# utils.py
import gspread
from google.oauth2.service_account import Credentials
import pandas as pd
from flask import current_app

def get_google_sheet_data():
    try:
        creds = Credentials.from_service_account_file(current_app.config['CREDENTIALS_FILE'])
        client = gspread.authorize(creds)
        sheet = client.open_by_url(current_app.config['GOOGLE_SHEET_URL'])
        worksheet = sheet.get_worksheet(0)
        data = pd.DataFrame(worksheet.get_all_records())
        return data
    except Exception as e:
        # Log the error and return a message
        current_app.logger.error(f"Error accessing Google Sheet: {str(e)}")
        return None
