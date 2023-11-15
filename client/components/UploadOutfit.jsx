import React, { useState } from 'react';

// AXIOS: REQUESTS TO SERVER
import axios from 'axios';

//were going to have to add the form input for the tags here 
//were going to have to look into the Axios what its doing here 


const UploadOutfit = ({ SSID }) => {
  // STATE: IMAGE
  const [file, setFile] = useState(undefined);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const [imagePath, setImagePath] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  // SEND IMAGE AS FORM DATA
  async function postImage({ image, description, SSID }) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('SSID', SSID);

    const result = await axios.post('/outfits/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return result.data;
  }

  // SUBMIT IMAGE BUTTON
  const submitImage = async (e) => {
    e.preventDefault();
    const result = await postImage({ image: file, description, SSID });
    console.log('Result after submiting image: ', result);

    // setImages([result.image, ...images]);
    setImagePath(result.imagePath);
    setImageDescription(result.description);
  };

  // SELECT FILE HANDLER
  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <>
      <div
        className="uploadOutfitBox"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Upload Outfit</h1>

        {/* FOR TESTING PURPOSES: UPLOADING AN IMAGE */}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30vw',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            border: 'solid 2px black',
            borderRadius: '10px',
            height: '20vh',
          }}
          onSubmit={submitImage}
        >
          <input onChange={fileSelected} type="file" accept="image/*" />
          <input
            style={{
              height: '35px',
              width: '80%',
              paddingLeft: '10px',
              borderRadius: '10px',
              border: 'none',
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="description..."
          />
          <input
            style={{
              height: '40px',
              width: '200px',
              borderRadius: '10px',
              border: 'none',
            }}
            type="submit"
            value={'Upload Image'}
          />
        </form>

        {imagePath && (
          <div
            className="yourUpload"
            style={{
              border: 'solid 1px black',
              padding: '10px',
              marginTop: '20px',
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '300px', height: '300px' }}
              src={imagePath}
              alt="this was the uploaded picture"
            />
            <p>{imageDescription}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadOutfit;
