import data from './data';
import { FaChevronRight } from 'react-icons/fa';
import { useState , useEffect } from 'react';
const TabItem = ({ Item , Filter , onFilter }) => {
    return (
        <div className="tab-content">
            <section className="set-tab">
                {Item.map((finding,key) => {
                    return(
                    <div className={ finding === Filter.name ? "tabs" : ""} style={{ margin:'0 0 20px' , padding:'0.40rem 1.2rem',transition:'color 0.4s ease' ,cursor:'pointer'}} key={key}>
                        <h3 onClick={() => onFilter(finding) } style={{ fontWeight:'500' }}>{ finding }</h3>
                    </div>
                    )
                })}
            </section>
            <section className="tab-literature">
                <h2>{ Filter.work }</h2>
                <button>{ Filter.name }</button>
                <h5 style={{ fontSize:'0.91rem' }}> { Filter.date } </h5>
                <ul class="review">
                   {Filter.theItem.map((finding,key) => {
                       return(
                        <li key={key}>
                    <div class="left" style={{ display:'flex',alignItems:'center' }}>
                        <FaChevronRight  style={{ display:'inline-block', fontSize:'1rem', color:"#38ada9" }}/>
                    </div>
                    <p class="right"> { finding } </p>
                    </li>
                       )
                   })}
                </ul>
            </section>
        </div>
    )
}

export default TabItem;