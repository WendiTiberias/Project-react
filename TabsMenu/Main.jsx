import React from 'react';
import { useState , useEffect } from 'react';
//Password semua.ph(money) ==> Ahiong123
import "./App.css";
import TabItem from './Tabitem';
import Header from './Header';
import data from './data';
import Button from './Button';
const MainTab = () => {
    const [ Menu , setMenu ] = useState(['TOMMY' , 'BIGDROP' , 'CHUKER']);
    const [ info , setInfo ] = useState(data[0]);
    const FilterRender = (name) => {
        const filtering = data.find(finding => (finding.name === name) ? finding : '');
        setInfo(filtering);
    }
    return(
        <div className="react-tab">
           <div className="content">
               <Header/>
               <TabItem Item={Menu} Filter={ info } onFilter={FilterRender}/>
               <Button/>
           </div>
        </div>
    )
}

export default MainTab;