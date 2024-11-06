'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'react-camera-pro';
import { Camera as CameraIcon, X, ArrowLeft, Send, SwitchCamera, Flashlight } from 'lucide-react';
import PropTypes from 'prop-types';
import { addInventoryItem } from '@/inventoryService';

const CameraPage = ({ setOpenCamera, image, setImage }) => {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const camera = useRef(null);
  const [devices, setDevices] = useState([]);
  const [activeDeviceId] = useState(undefined);
  const [torchToggled, setTorchToggled] = useState(false);

  async function addItemByImage(base64Image) {
    try {
      const res = await fetch('/api/imageGen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64Image }),
      });
      if (!res.ok) {
        throw new Error('Failed to generate an Inventory Name');
      }
      const data = await res.json();

      addInventoryItem(data.text);
      setOpenCamera(false);
      console.log(data.text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        setDevices(await navigator.mediaDevices.enumerateDevices());
        const videoDevices = devices.filter((i) => i.kind === 'videoinput');
        setDevices(videoDevices);
      } else {
        console.error("MediaDevices API not supported on this browser.");
      }
    })();
  }, [devices]);

  return (
    <div className="fixed w-full h-full z-10">
      {showImage ? (
        <div>
          <div
            className="w-full h-full absolute z-50 bg-black bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setShowImage(!showImage)}
          />
          <button
            onClick={() => setShowImage(!showImage)}
            className="absolute top-4 left-4 z-50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
          >
            <X className="w-6 h-6 text-orange-500" />
          </button>

          <button
            className="absolute bottom-4 right-4 z-50 p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
            onClick={() => {

              addItemByImage(image);
              setShowImage(false);
              setOpenCamera();
            }}
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      ) : (
        <div>
          <Camera
            ref={camera}
            aspectRatio="cover"
            facingMode="user"
            numberOfCamerasCallback={(i) => setNumberOfCameras(i)}
            videoSourceDeviceId={activeDeviceId}
            errorMessages={{
              noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
              permissionDenied: 'Permission denied. Please refresh and give camera permission.',
              switchCamera: 'It is not possible to switch camera to different one because there is only one video device accessible.',
              canvas: 'Canvas is not supported.',
            }}
            videoReadyCallback={() => {
              console.log('Video feed ready.');
            }}
          />
          <button
            onClick={() => setOpenCamera(false)}
            className="fixed left-2 top-2 z-50 p-2 bg-white/80 rounded-full hover:bg-white/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="fixed md:right-0 md:w-1/5 md:min-w-[130px] md:h-full
                      bottom-0 w-full h-1/5 min-h-[130px]
                      bg-black/80 z-20
                      md:flex-col-reverse
                      flex flex-row items-center
                      justify-evenly md:p-12 p-4 box-border">
        {/* Image preview */}
        <div
          className="w-[120px] h-[120px] md:h-[120px] h-[80px] bg-contain bg-no-repeat bg-center sm:w-[50px]"
          style={{ backgroundImage: image ? `url(${image})` : 'none' }}
          onClick={() => setShowImage(!showImage)}
        />

        {/* Take photo button */}
        <button
          className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center hover:bg-black/30 transition-colors"
          onClick={() => {
            if (camera.current) {
              const photo = camera.current.takePhoto();
              setImage(photo);
              setShowImage(!showImage);
            }
          }}
        >
          <CameraIcon className="w-12 h-12 text-white" />
        </button>

        {/* Torch button */}
        {camera.current?.torchSupported && (
          <button
            className={`w-20 h-20 rounded-full border-4 border-black flex items-center justify-center transition-colors
                       ${torchToggled ? 'bg-black/30' : 'hover:bg-black/30'}`}
            onClick={() => {
              if (camera.current) {
                setTorchToggled(camera.current.toggleTorch());
              }
            }}
          >
            <Flashlight className="w-12 h-12 text-white" />
          </button>
        )}

        {/* Switch camera button */}
        <button
          className="w-14 h-14 rounded-full border-4 border-black
                     disabled:opacity-0 disabled:cursor-default
                     flex items-center justify-center hover:opacity-70 transition-opacity"
          disabled={numberOfCameras <= 1}
          onClick={() => {
            if (camera.current) {
              const result = camera.current.switchCamera();
              console.log(result);
            }
          }}
        >
          <SwitchCamera className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

CameraPage.propTypes = {
  setOpenCamera: PropTypes.func.isRequired,
  image: PropTypes.object,
  setImage: PropTypes.func.isRequired,
};

export default CameraPage;
