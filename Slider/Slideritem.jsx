import { FaQuoteLeft,FaChevronLeft,FaChevronRight } from 'react-icons/fa';
const Slideritem = ({ Peoples , Index , Setter }) => {
   return(
       <div className="item-container">
          <div className="slider-content">
          {Peoples.map((finding,key) => {
              let sliderCoordinate = 'nextslide';
              if(key === Index) {
                 sliderCoordinate = 'activeslide';
              } if(Index === 0 && key === Peoples.length - 1) {
                  sliderCoordinate = 'lastslide';
              }
              return(
                <section className={ sliderCoordinate } style={{ textAlign:'center' }} key={key}>
               <img src={ finding.image } style={{ width:'120px',height:'120px',borderRadius:'50%',boxShadow:'1px 1px 10px rgba(21,21,21,0.3)' }}/>
               <h4> { finding.name } </h4>
               <h5> { finding.title } </h5>
               <p> { finding.quote } </p>
               <FaQuoteLeft style={{ color:'#ba5d2c' , fontSize:'2.5rem',marginTop:'40px' }}/>
           </section>
              )
          })}
          </div>
           <div className="button-slider">
               <button onClick={() => Setter(Index + 1)} type="submit" style={{ backgroundColor:'#ba5d2c',color:'white',padding:'0.20rem 0.40rem',border:'none' }} className="prev">
                   <FaChevronLeft/>
               </button>
               <button onClick={() => Setter(Index - 1)} type="submit" style={{ backgroundColor:'#ba5d2c',color:'white',padding:'0.20rem 0.40rem',border:'none' }} className="next">
                   <FaChevronRight/>
               </button>
           </div>
       </div>
   )
}

export default Slideritem;