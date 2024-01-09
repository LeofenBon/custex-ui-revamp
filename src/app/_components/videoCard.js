"use client";
import { useRef, useState, useEffect } from "react";
import useElementOnScreen from "../_hooks/useElementOnScreen";

export default function VideoCard() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const VIDEO_URLS = [
    "video1.087492876498b717b80b.mp4",
    "video2.f25065386de52f67decf.mp4",
    "video3.b847d15d149259ce1b42.mp4",
  ];

  const currentUrl =
    "https://tik-tok-ui-clone-shemmee.vercel.app/static/media/" +
    VIDEO_URLS[Math.floor(Math.random() * 3)];

  const isVisibile = useElementOnScreen(options, videoRef);
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);

  return (
    <div className="rounded-lg max-w-[343px]">
      <video
        className="object-cover rounded-lg"
        preload="true"
        ref={videoRef}
        onClick={onVideoClick}
        controls
        muted
      >
        <source
          // src={currentUrl}
          src="https://tik-tok-ui-clone-shemmee.vercel.app/static/media/video1.087492876498b717b80b.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
    </div>
  );
}

//
// video3.b847d15d149259ce1b42.mp4
