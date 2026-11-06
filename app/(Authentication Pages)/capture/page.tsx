
"use client";

import { useEffect, useRef, useState } from "react";

const WebcamCapture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    const startWebcam = async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          throw new Error("Camera access is not supported by this browser.");
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user",
          },
          audio: false,
        });

        if (!isMounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        if (isMounted) {
          setHasPermission(true);
        }
      } catch (err) {
        console.error("Webcam error:", err);

        if (isMounted) {
          setHasPermission(false);

          if (err instanceof DOMException) {
            switch (err.name) {
              case "NotAllowedError":
                setError("Camera permission was denied.");
                break;
              case "NotFoundError":
                setError("No camera was found on this device.");
                break;
              case "NotReadableError":
                setError("Camera is already being used by another application.");
                break;
              default:
                setError("Unable to access the camera.");
            }
          } else {
            setError(
              err instanceof Error
                ? err.message
                : "An unexpected camera error occurred."
            );
          }
        }
      }
    };

    startWebcam();

    return () => {
      isMounted = false;

      streamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center
      bg-gradient-to-b from-black via-red-400/10 to-red-400/50
      p-4 text-white rounded-2xl border-2 border-red-500
      max-w-md mx-auto mb-12 sm:mb-4 space-y-4 shadow-xl
      transition-all duration-300 hover:scale-[1.01]
      hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]">

      <h2 className="text-lg font-bold font-abrilfatface
        text-gray-200 animate-drop-1">
        Capturing
      </h2>

      <div className="relative w-full aspect-video bg-zinc-900
        rounded-xl overflow-hidden border border-zinc-800
        shadow-lg animate-drop-2">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover -scale-x-100"
        />

        {hasPermission === null && (
          <div className="absolute inset-0 flex items-center
            justify-center bg-black/80">
            <p className="text-sm text-gray-300">
              Starting camera...
            </p>
          </div>
        )}

        {hasPermission === false && (
          <div className="absolute inset-0 flex items-center
            justify-center bg-black/80 text-center p-4">
            <p className="text-xs text-red-400 font-semibold">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
