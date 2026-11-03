'use client'; // Tells Next.js this is a Client Component (runs in the browser, allowing hooks like useState and useEffect)

import { useEffect, useRef, useState } from 'react'; // Imports necessary React hooks for side effects, DOM references, and state management

const WebcamCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Creates a reference to attach directly to the HTML <video> element
  const [hasPermission, setHasPermission] = useState<boolean | null>(null); // State to track whether camera permission was granted (true), denied (false), or loading (null)

  useEffect(() => {
    let stream: MediaStream | null = null; // Variable to hold the active webcam stream so we can stop it later during cleanup

    const startWebcam = async () => {
      try {
        // Request the video stream from the browser's media devices API with ideal dimensions
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false, // Set to true if you also want to capture microphone audio
        });

        // If the video DOM reference exists, assign the live media stream to its source object
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasPermission(true); // Updates permission state to true upon successful camera connection
      } catch (error) {
        console.error("Error accessing webcam:", error); // Logs any permission errors or missing hardware to the console
        setHasPermission(false); // Updates permission state to false if access is denied or unavailable
      }
    };

    startWebcam(); // Executes the async function to start the webcam as soon as the component loads

    // Cleanup function: runs automatically when the component unmounts to release hardware resources
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop()); // Stops all active video/audio tracks so the camera indicator light turns off
      }
    };
  }, []); // Empty dependency array ensures this effect runs strictly once on component mount

  return (
    // Outer container styling with drop-in animation, hover scale, intense red hover glow, and responsive bottom margin (mb-12 on desktop, mb-4 on sm)
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-red-400/10 to-red-400/50 p-4 bg-black text-white rounded-2xl border-2 border-red-500 max-w-md mx-auto mb-12 sm:mb-4 space-y-4 shadow-xl transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]">
      
      {/* Component Title with custom font and drop-in animation 1 */}
      <h2 className="text-lg font-bold font-abrilfatface text-gray-200 animate-drop-1">Capturing</h2>

      {/* Video container wrapper with drop-in animation 2 */}
      <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-lg animate-drop-2">
        
        {/* HTML video element to render the live camera stream */}
        <video
          ref={videoRef} // Binds the ref variable to this video tag
          autoPlay // Forces the video stream to play immediately without user interaction
          playsInline // Ensures inline playback on mobile devices (prevents forced full-screen mode on iOS)
          muted // Mutes audio playback to prevent feedback loops
          className="w-full h-full object-cover transform -scale-x-100" // Scales and mirrors the video horizontally for a natural mirror view
        />

        {/* Conditional overlay that displays an error message if permission is denied */}
        {hasPermission === false && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-center p-4">
            <p className="text-xs text-red-400 font-semibold">
              Camera access denied or unavailable. Please check your browser permissions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture; // Exports the component so it can be imported and rendered in other pages