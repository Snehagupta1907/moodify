import React,{useEffect, useState} from "react";
import axios from "axios";

const MoodDetection = () => {
  
  const [name,setName]= useState("");
  // useEffect(() => {
  //  (async()=>{
  //   let res = await axios("http://127.0.0.1:5000/get");
  //   console.log(res);
  //  })()
  // }, [])
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    let file = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    setName(file.name);
    console.log(name);
  };

  const handleUpload =async  () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(formData);
   let res = await axios.post('http://127.0.0.1:5000/predict', formData);
   console.log(res);
  };

  return (
    <>
      <div className="mb-8 border border-white flex justify-center items-center">
        <div className="container flex flex-col justify-center items-center h-[100vh] w-1/2 ">
          <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
              Find Your Right
              <span className="text-blue-600 dark:text-yellow-500 mx-4">
                {" "}
                Musical NFT's
              </span>{" "}
            </h1>
            <p className="text-lg mb-4 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              A musical NFT (Non-Fungible Token) is a digital asset that
              represents ownership of a unique piece of music, such as a song or
              a musical composition.
            </p>
            <p className="text-lg mb-4 font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Like other NFTs, it is built on a blockchain platform and is
              cryptographically secured, making it a tamper-proof and
              transparent way to prove ownership and authenticity of the music.
            </p>
          </div>
        
            <div className="flex w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center px-4 w-full h-40 border-2 border-gray-100 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    your image here
                  </p>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                  {name?<p className="text-sm mt-3 text-center text-blue-500 dark:text-blue-400">
                    {name}
                  </p>:null}
                </div>
                <input id="dropzone-file" onChange={handleFileChange}  type="file" className="hidden" />
              </label>
            </div>
            <button
       
              onClick={handleUpload}
              className="mt-5 bg-green-500 px-3 py-2 rounded-md text-black "
            >
              Analyze
            </button>
        
        </div>
      </div>
    </>
  );
};

export default MoodDetection;