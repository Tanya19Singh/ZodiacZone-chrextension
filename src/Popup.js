import React from "react";
import { useState } from "react";
import './popup.css';
import axios from 'axios';
import aries from './4662941_2474122.jpg';
import sag from './sag.jpg';
import aqua from './aqua.jpg';
import cancer from './cancer.jpg';
import cap from './cap.jpg';
import leo from './leo.jpg';
import scorpio from './scorpio.jpg';
import taurus from './taurus.jpg';
import virgo from './virgo.jpg';
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs';
const Popup=()=>{
    const [slide,setSlide]=useState(0);
    const nextSlide=()=>{
      setSlide(slide===zodiacSigns.length-1?0:slide+1);
    };
    const prevSlide=()=>{
      setSlide(slide===0?zodiacSigns.length-1:slide-1);
    };


    const [selectedSign, setSelectedSign] = useState(null);
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  
  const zodiacSigns = [
    { sign: 'Aquarius', icon:aqua , startDate: { month: 'Jan', day: 20 }, endDate: { month: 'Feb', day: 18 } },
    { sign: 'Pisces', icon: leo, startDate: { month: 'Feb', day: 19 }, endDate: { month: 'March', day: 20 } },
    { sign: 'Aries', icon: aries, startDate: { month: 'March', day: 21 }, endDate: { month: 'April', day: 19 } },
    { sign: 'Taurus', icon: taurus, startDate: { month: 'April', day: 20 }, endDate: { month: 'May', day: 20 } },
    { sign: 'Gemini', icon: 'https://img.freepik.com/free-vector/zodiac-character_52683-12353.jpg?w=740&t=st=1726260862~exp=1726261462~hmac=423e25f772f5ef54083745e87c0ad8d6fb9c9adf86de9833123ad702dfbce33e', startDate: { month: 'May', day: 21 }, endDate: { month: 'June', day: 20 } },
    { sign: 'Cancer', icon: cancer, startDate: { month: 'June', day: 21 }, endDate: { month: 'July', day: 22 } },
    { sign: 'Leo', icon: leo, startDate: { month: 'July', day: 23 }, endDate: { month: 'August', day: 22 } },
    { sign: 'Virgo', icon: virgo, startDate: { month: 'August', day: 23 }, endDate: { month: 'September', day: 22 } },
    { sign: 'Libra', icon: 'https://img.freepik.com/free-vector/zodiac-character_52683-12355.jpg?w=740&t=st=1726260839~exp=1726261439~hmac=68c873808f5c4c55a8e6f1f80ff5e275992110d607b597626369c40ee4b5a6a4', startDate: { month: 'September', day: 23 }, endDate: { month: 'October', day: 22 } },
    { sign: 'Scorpio', icon:scorpio , startDate: { month: 'October', day: 23 }, endDate: { month: 'November', day: 21 } },
    { sign: 'Sagittarius', icon: sag, startDate: { month:'November', day: 22 }, endDate: { month: 'December', day: 21 } },
    { sign: 'Capricorn', icon:cap, startDate: { month: 'December', day: 22 }, endDate: { month: 'Jan', day: 19 } }
  ];

  const handleSignClick = (sign) => {
    setSelectedSign(sign);
    getHoroscope(sign);
  };

  const getHoroscope = (sign) => {
    setHoroscope('');
    setLoading(true);
    const apiurl=`http://sandipbgt.com/theastrologer/api/horoscope/${sign.toLowerCase()}/today`;
    console.log(apiurl);
    axios.get(apiurl)
    .then(response => {
      console.log(response.data);
      setHoroscope(response.data.horoscope);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
    });  };
//css js
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
//css js end
  return (
    <div className="horoscope">
    {!selectedSign&&
    <div className="parent">
    <div class="d container">
  <h1><span>Zodiac Zone</span></h1>
  <div class=" d blobs_1"></div>
  <div class="d blobs_2"></div>
  <div class="d blobs_3"></div>
  <div class="d blobs_4"></div>
  <div class="d blobs_5"></div>
  <div class="d blobs_6"></div>
  <div class="d blobs_7"></div>
</div>
</div>}
      {!selectedSign&&<h3 className="sec-head">Listen to your daily horoscope</h3>
      }
      {!selectedSign&&<div className="zodiac-signs">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {zodiacSigns.map((item,index) => (
          <div className={slide===index?"zodiac":"zodiac zodiac-hidden"} key={index} onClick={() => handleSignClick(item.sign)}>
            <div className="img-container">
            <div className="img-container2">
            <img className="zodiac-img" src={item.icon} alt={item.sign}key={index}></img>
            </div>
            </div>
            <div className="zodiac-des">
            <div>
            {item.startDate.day} {item.startDate.month} - {item.endDate.day} {item.endDate.month} 
            </div>
            </div>
          </div>
        ))}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>

      </div>}
      {selectedSign && (
        <div className="horoscope-des-back">
        <div className="horoscope-des">
          <div className="sign-head">{selectedSign}</div>
          {loading?(
            <p>loading...</p>
          ):
          (<p>{horoscope.substring(0, horoscope.indexOf("(c)"))}</p>
        )}
          <button className="btn" onClick={()=>{setSelectedSign(null);}}>Return</button>
        </div>
        </div>
      )}
    </div>
  );

}
export default Popup;