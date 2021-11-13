import { useState } from "react";
const Header = ({ onSet }) => {
    const [ length , setLength ] = useState([]);
    const Setter = () => {
       if(length >= 8) {
           onSet(8);
       }else {
          onSet(parseFloat(length));
       }
    }
    return(
        <header>
            <h3>LOREM IPSUM GENERATOR</h3>
            <div className="form">
                <span>Paragrahps : </span>
                <input onChange={(event) => setLength(event.target.value)} value={length} type="number"/>
                <button onClick={Setter} type="submit" id="btn">Submit</button>
            </div>
        </header>
    )
}

export default Header;