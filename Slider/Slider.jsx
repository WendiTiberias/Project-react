import People from "./data";
import React from "react";
import Slideritem from "./Slideritem";
import Header from "./Header";
import { useState,useEffect } from "react";
import "./App.css";
const Sliders = () => {
    const [ slider , setSlider ] = useState(People);
    const [ index , setIndex ] = React.useState(0);
    useEffect(() => {
        let last = slider.length - 1;
        if(index < 0) {
            setIndex(last);
        } if(index > slider.length - 1) {
            setIndex(0);
        }
    },[index,slider])
   
    useEffect(() => {
        let interval = setInterval(() => {
            setIndex(index + 1);
        },5000);

        return () => {
            clearInterval(interval);
        }
    },[index])

    return(
        <div className="slider-container">
          <Header/>
          <Slideritem Peoples={slider} Index={index} Setter={setIndex}/>
        </div>
    )
}

export default Sliders;