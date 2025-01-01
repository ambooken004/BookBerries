import React, { useState, useRef } from "react";
import './Recording.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AudioRecorderAndUploader = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioURL, setRecordedAudioURL] = useState(null);
  const [uploadedAudioFile, setUploadedAudioFile] = useState(null);
  const [loading , setLoading] = useState(false)
  const [viewReport, setViewReport] =useState(false)
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const route=useNavigate()

  // Start recording audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
        const audioURL = URL.createObjectURL(audioBlob);
        setRecordedAudioURL(audioURL);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // Stop recording audio
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Handle audio file selection for upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedAudioFile(file);
    }
  };

  const uploadAudio = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true)
      setViewReport('')
      const response = await axios.post("http://localhost:8000/predict",formData);

      if (response) {
        const data = response.data
        console.log("Upload successful:", data);
        setViewReport(data)
        alert("Audio uploaded successfully!");
      } else {
        console.error("Upload failed:", response.statusText);
        alert("Audio upload failed!");
      }
      setLoading(false)
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <div className="recordbg">
      <h1 className="recordh1">Audio Recorder & Uploader</h1>
      <div>
        <div className="recordbuttonwrapper">
        {!isRecording ? (
          <button onClick={startRecording} style={{ margin: "10px" }} className="recordbutton">
            Start Recording
          </button>
        ) : (
          <div>
          <button onClick={stopRecording} className="recordbutton recordbuttonstop">
            Stop Recording
          </button>
          <p className="recordimgText">Recording...........</p>
          </div>
        )}
        </div>
        {recordedAudioURL && (
          <div>
            <h3 className="recordedaudio">Recorded Audio</h3>
            <div className="audiowrapp">
            <audio src={recordedAudioURL} controls />
            <button
              className="uploadButton"
              onClick={() => uploadAudio(new File([new Blob(audioChunksRef.current)], "recorded-audio.mp3", { type: "audio/mp3" }))}
              style={{ margin: "10px" }}
            >
              Upload Recorded Audio
            </button>
            </div>
          </div>
        )}
      </div>

      <hr />
      <div className="upload">
        <h3>Upload Audio File</h3>
        <div className="uploadtext">
        <input type="file" accept="audio/*" onChange={handleFileUpload} className="audioinput" />
        {uploadedAudioFile && (
          <div>
            <button className="uploadButton" onClick={() => uploadAudio(uploadedAudioFile)} style={{ margin: "10px" }}>
              {loading ? 'Uploading.....':"Predict Audio"}
            </button>
          </div>
        )}
        </div>
      </div>
     {viewReport &&  <button onClick={()=>route(`/report/${viewReport.emotion}/${viewReport.confidence}`)} className="reportButton">View Report</button>}
    </div>
  );
};

export default AudioRecorderAndUploader;
