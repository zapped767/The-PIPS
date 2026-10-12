import React, { useEffect, useRef, useState } from "react";

const PipsIntro = ({ onFinish }) => {
  const videoRef = useRef(null);

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    /* Slightly slower premium playback */
    video.playbackRate = 0.9;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Intro autoplay prevented:", error);

        onFinish();
      }
    };

    playVideo();
  }, [onFinish]);

  const finishIntro = () => {
    setLeaving(true);

    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  return (
    <>
      <style>{`
        /* =========================================================
           THE PIPS
           WEBSITE INTRO
        ========================================================= */

        .pips-intro26 {
          position: fixed;

          inset: 0;

          width: 100%;
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;

          z-index: 999999;

          overflow: hidden;

          opacity: 1;

          transition:
            opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
            visibility 1.2s ease;
        }


        /* FADE OUT */
        .pips-intro26--leaving {
          opacity: 0;

          visibility: hidden;

          pointer-events: none;
        }


        /* =========================================================
           VIDEO
           NO CONTAINER
           NO BORDER
           NO SHADOW
        ========================================================= */

       .pips-intro26__video {
  display: block;

  /* =========================================
     MANUAL VIDEO SIZE
     Change ONLY this value
     500px = smaller
     650px = recommended
     750px = bigger
     850px = more bigger
  ========================================= */
  width: 650px;

  max-width: 90vw;

  height: auto;
  max-height: 82vh;

  border: 0;
  outline: 0;

  background: transparent;

  object-fit: contain;

  transform: scale(0.94);

  opacity: 0;

  animation:
    pipsIntroAppear26
    1.1s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

        @keyframes pipsIntroAppear26 {

          0% {
            opacity: 0;

            transform:
              scale(0.88);
          }

          100% {
            opacity: 1;

            transform:
              scale(1);
          }
        }


        /* TABLET */
        @media (max-width: 991px) {

          .pips-intro26__video {
            width: 340px;

            max-width: 75vw;
          }

        }


        /* MOBILE */
        @media (max-width: 767px) {

          .pips-intro26__video {
            width: 260px;

            max-width: 78vw;
          }

        }


        /* SMALL MOBILE */
        @media (max-width: 420px) {

          .pips-intro26__video {
            width: 220px;
          }

        }
      `}</style>


      <div
        className={`pips-intro26 ${
          leaving
            ? "pips-intro26--leaving"
            : ""
        }`}
      >
        <video
          ref={videoRef}

          className="pips-intro26__video"

          src={
            process.env.PUBLIC_URL +
            "/videos/pips-logo-intro.mp4"
          }

          autoPlay

          muted

          playsInline

          preload="auto"

          onEnded={finishIntro}
        />
      </div>
    </>
  );
};

export default PipsIntro;