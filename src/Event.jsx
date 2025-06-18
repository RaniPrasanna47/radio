import { useRef, useEffect } from "react";
import "./Event.css";
import bgVideo from "./events/videoplayback (1).mp4";
import glamitUp from "./events/rampwalk.jpeg";
import mrn from "./events/mrn.jpg";
import talentX from "./events/talentx.jpeg";
import rhythmicMoment from "./events/Rhythmic moments.jpeg";
import comedyNight from "./events/comedynight.jpeg";
import movieMystic from "./events/moviem.jpeg";
import nexusVerse from "./events/NV.jpg";
import voiceItUp from "./events/Vo.jpg";
import limelight from "./events/rampwalk.jpeg";
import redfmCollab from "./events/REDFM.jpg";
import matkiFod from "./events/MFD.jpg";
import kholeDil from "./events/kholedl.jpeg";
import nds from "./events/nds.jpeg";
import ss from "./events/success_stories.jpeg";
import prank from "./events/prank.jpeg";
import ks from "./events/Ks.jpeg";
import freshers_intro from "./events/freshers_intro.jpeg";
import kj from "./events/kj.jpeg";
import des from "./events/des.jpeg";

const festCards = [
  { id: 1, image: glamitUp, title: "Glamit Up" },
  { id: 2, image: talentX, title: "Talent X" },
  { id: 3, image: rhythmicMoment, title: "Rhythmic Moments" },
  { id: 4, image: comedyNight, title: "Comedy Night" },
  { id: 5, image: movieMystic, title: "Movie Mystic" },
];

const eventCards = [
  { id: 6, image: nexusVerse, title: "Nexus Verse" },
  { id: 7, image: voiceItUp, title: "Voice It Out" },
  { id: 8, image: limelight, title: "Lime Light" },
  { id: 9, image: redfmCollab, title: "RedFM Collab" },
  { id: 10, image: matkiFod, title: "Matki Fod" },
  { id: 11, image: kholeDil, title: "Khole Dil" },
  { id: 12, image: mrn, title: "Meme Ran Tine" },
];

const videoSeriesCards = [
  { id: 13, image: ss, title: "Success Stories" },
  { id: 14, image: prank, title: "Prank Videos" },
  { id: 15, image: ks, title: "Karthick & Hemanika" },
  { id: 16, image: freshers_intro, title: "Freshers' Intro" },
  { id: 17, image: kj, title: "Kasauti Jhanduon ki" },
  { id: 18, image: nds, title: "NIT Durgapur Special" },
  { id: 19, image: des, title: "Dil ki ek diary se" },
];

const Carousel = ({ title, items }) => {
  const containerRef = useRef(null);
  let angle = 0;
  let dragging = false;
  let lastX = 0;

  useEffect(() => {
    const container = containerRef.current;
    const carousel = container.querySelector(".carousel");
    const autoSpin = setInterval(() => {
      angle += 0.3;
      carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    }, 30);

    const handleMouseDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      clearInterval(autoSpin);
    };
    const handleMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      angle += dx * 0.4;
      carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
    };
    const handleMouseUp = () => {
      dragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      clearInterval(autoSpin);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [items]);

  return (
    <div className="carousel-section">
      <h2 className="section-title">{title}</h2>
      <div className="carousel-container" ref={containerRef}>
        <div className="carousel">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="carousel-item"
              style={{
                transform: `rotateY(${(360 / items.length) * idx}deg) translateZ(400px)`,
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="carousel-caption">{item.title}</div>
              <div className="reflection">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="ground" />
      </div>
    </div>
  );
};

const Event = () => (
  <div className="event-container">
    <h1 className="page-title">Wave Craze</h1>
    <div className="subtitle-video-container">
      <div className="home-text">
        <p className="subtitle">
          Where creativity sparks like wildfire and every heartbeat echoes
          with passion, a celebration like no other emerges at NIT Durgapur —
          Wavecraze! As the curtain rises, Wavecraze unveils a treasure trove
          of surprises, thrilling events, and unforgettable memories.
        </p>
      </div>
      <div className="video-card">
        <div className="responsive-video-wrapper">
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            controls
            playsInline
            className="event-video"
          />
        </div>
      </div>
    </div>
    <Carousel title="Fest Highlights" items={festCards} />
    <Carousel title="Events" items={eventCards} />
    <Carousel title="Videos & Series" items={videoSeriesCards} />
  </div>
);

export default Event;
