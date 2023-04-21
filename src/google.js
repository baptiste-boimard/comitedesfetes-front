// const {GoogleAuth} = require('google-auth-library');
const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');


const CLIENT_ID = '510042688421-1u8m29imkhtflquik2v6g9lf576kfn61.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://www.googleapis.com/auth/drive';

const ACCESS_TOKEN = 'ya29.a0Ael9sCOGw_ABiTvZITEwOlXMTxWTYIsQ6VEKDbeF7lR0p1c885Rn9_NYaUI8UgCKhiXNZdvHnRrZh19DxDgkGNR2VdVzbYDrer3VJuNXJknn7JzrjCZWqb3K-e22gIRQ2VzYoWz3BOfpHiIQiW2mFMT0JqFAaCgYKASESARASFQF4udJhbZ0PEw4oM-GZ5_pevWq-xw0163';
// const API_KEY = 'AIzaSyDV6oIiB1tpUQ1Nw4wU_mWVzWz56uGDIFg';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  // API_KEY,
);

oauth2Client.setCredentials({refresh_token: ACCESS_TOKEN});

// console.log(oauth2Client);

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

const filePath = path.join(__dirname, 'art1.png');

async function uploadFile () {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'essai.png',
        mimeType: 'image/png',
      },
      media: {
        mimeType: 'image/png',
        body: fs.createReadStream(filePath),
      }
    })

  console.log(response.data);

  } catch (error) {
    console.log(error.message);
  }
};


async function deleteFile() {
  try {
    const response  = await drive.files.delete({
      fileId: '1Ci61oblFuMeLUoUawC8pr-ANBOHY_99X',
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error);
  }
};


async function generatePublicUrl() {
  try {
    const fileId ='1T1EMHOa-koYRgcilLSGFY-7aIcSmQ5RI';
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type:'anyone',
      }
    });

    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    
    console.log(result.data);
  } catch (error) {
  }
  
};

async function renameUploadedFile() {
  try {
    const fileId ='1T1EMHOa-koYRgcilLSGFY-7aIcSmQ5RI';
    const response = await drive.files.update({
      fileId: fileId,
      requestBody: {
        name: fileId
      }
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error);
  }
}

renameUploadedFile();
