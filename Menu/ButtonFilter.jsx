
const Button = ({ button , onFilter }) => {
   return(
       <div className="filter">
           {button.map((finding,id) => {
               return(
                   <button type="button" onClick={() => onFilter(finding)} key={id}> { finding } </button>
               )
           })}
       </div>
   )
}

export default Button;