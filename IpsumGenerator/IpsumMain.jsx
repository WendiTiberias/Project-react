import { useState,useEffect } from "react";
import IpsumItem from './data';
import Header from './Header';
import Ipsum from './Ipsum';
import "./App.css";
let array = [];
const IpsumContainer = () => {
    const [ ipsum , setIpsum ] = useState([]);   
    const setParaf = (item) => {
        let array = [];
        for(let i = 0; i < item; i++) {
            const random = Math.floor(Math.random() * IpsumItem.length);
            array = [...array , IpsumItem[random]];
        }

        setIpsum(array);

    }

    return(
       <div className="ipsum">
           <Header onSet={setParaf}/>
           {ipsum.map((finding , id) => {
               return(
                   <Ipsum Item={finding} key={id}/>
               )
           })}
       </div>
    )
}

export default IpsumContainer;