from flask import Flask , request,render_template,flash,redirect, url_for
import os
from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.utils import img_to_array
import cv2
import numpy as np
import os 
from mood_playlist import get_playlist_id_for_mood
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_id = '40058f3d1557477cb3176fb9c2a7dd6e'
client_secret = '4fa92785b1f44c1f8be34676eb7d0f05'

    # Authenticate with Spotify API
client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)



UPLOAD_FOLDER = os.path.join(os.getcwd(),"images")
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
#token = ""

# songs = {

#     'Disgust':"7zpZFvJpcZC2uYgdSZNfuA",
#     'Fear':"6WiMSiEX3FleOOQimEKzVQ",
#     'Happy':"4PY9rbCQSo2JvGdgREogIe",
#     'Neutral':"3C7FXzgUwDq7hY68lW5B2d", 
#     'Sad':"37i9dQZF1DX3rxVfibe1L0", 
#     'Surprise':"7vatYrf39uVaZ8G2cVtEik",
#     'Angry':"0l9dAmBrUJLylii66JOsHB"
# }

mood_playlists = {
    'Disgust': get_playlist_id_for_mood('lofi', sp),
    'Fear': get_playlist_id_for_mood('calm', sp),
    'Happy': get_playlist_id_for_mood('energetic', sp),
    'Neutral': get_playlist_id_for_mood('playful', sp),
    'Sad': get_playlist_id_for_mood('happiness', sp),
    'Surprise': get_playlist_id_for_mood('surprise', sp),
    'Angry': get_playlist_id_for_mood('lofi hindi', sp)
}

songs = {
    'Disgust': mood_playlists['Disgust'],
    'Fear': mood_playlists['Fear'],
    'Happy': mood_playlists['Happy'],
    'Neutral': mood_playlists['Neutral'],
    'Sad': mood_playlists['Sad'],
    'Surprise': mood_playlists['Surprise'],
    'Angry': mood_playlists['Angry']
}

def run_classifier(file_):
    current_working_directory = os.getcwd()
    face_classifier = cv2.CascadeClassifier(os.path.join(current_working_directory,"haarcascade_frontalface_default.xml"))
    classifier =load_model(os.path.join(current_working_directory,"emotion_detection_model1.h5"))

    emotion_labels = ['Angry','Disgust','Fear','Happy','Neutral', 'Sad', 'Surprise']

    # frame = cv2.imread(os.path.join(current_working_directory,"images","4.png"))
    frame = cv2.imread(file_)

    gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale(gray)

        
    for (x,y,w,h) in faces:   
        roi_gray = gray[y:y+h,x:x+w]
        roi_gray = cv2.resize(roi_gray,(48,48),interpolation=cv2.INTER_AREA)



        if np.sum([roi_gray])!=0:
            roi = roi_gray.astype('float')/255.0
            roi = img_to_array(roi)
            roi = np.expand_dims(roi,axis=0)

            prediction = classifier.predict(roi)[0]
            label=emotion_labels[prediction.argmax()]
            return label
        


@app.route('/',methods=["GET","POST"])
def home():
    if request.method=="POST":
    
        files = request.files
        image = files.get('file')
        
        if image.filename == '':
            flash("no image selected")
            return redirect(request.url)
        else:
            filename = secure_filename(image.filename)
            image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_path = os.path.join(UPLOAD_FOLDER,filename)
            mood = run_classifier(image_path)
            
            # the first argument in url_for takes the function name, NOT the actual endpoint
            return redirect(url_for("music", mood=songs[mood],mood_type=mood))

    return render_template('index.html')


@app.route('/music/<mood>/<mood_type>',methods=["GET","POST"])
def music(mood,mood_type):
    
    context = {
        "mood_type":mood_type,
        "mood":mood
    }
    return render_template('musicplayer.html',context=context)


if __name__=='__main__':
    app.run(port=5002,
    debug=True)
