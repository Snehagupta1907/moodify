from flask import Flask , request,render_template,flash,redirect, url_for
import os
from werkzeug.utils import secure_filename
from keras.models import load_model
from keras.utils import img_to_array
import cv2
import numpy as np
import os 



UPLOAD_FOLDER = os.path.join(os.getcwd(),"images")
app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
#token = ""

songs = {

    'Disgust':"7zpZFvJpcZC2uYgdSZNfuA",
    'Fear':"405PXg1fJunIlSo75L78Kb",
    'Happy':"4PY9rbCQSo2JvGdgREogIe",
    'Neutral':"3C7FXzgUwDq7hY68lW5B2d", 
    'Sad':"4YOfhHpjPB0tq29NPpDY3F", 
    'Surprise':"7vatYrf39uVaZ8G2cVtEik",
    'Angry':"0l9dAmBrUJLylii66JOsHB"
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
    app.run(debug=True)
