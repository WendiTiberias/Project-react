import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Button from './ButtonFilter';
import MenuItem from './Menus';
import data from './data';
import './App.css';
//color #3867d6
const MainMenu = () => {
   const [ menu  , setMenu ] = useState([]);
   useEffect(() => {
       setMenu(data);
   },[])
   const Filter = (category) => {
      if(category === "All") {
          setMenu(data);
      }else {
          const filter = data.filter((find,id) => {
              return ( find.filter === category ) ? find : '';
          });
          setMenu(filter);
      }
   }
   const [ btn , setBtnName ] = useState(['All' , 'Breakfast','Lunch','Shakes']);
   return(
       <div className="container-food">
           <Header/>
           <Button onFilter={Filter} button={btn}/>
           <div className="itemlist">
               {menu.map((finding,id) => {
                   return(
                       <MenuItem key={id} Foodies={finding} />
                   )
               })}
           </div>
       </div>
   )
}

export default MainMenu;