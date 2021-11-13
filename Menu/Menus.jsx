
const MenuItem = ({ Foodies }) => {
    return(
        <div className="menu" data-filter={ Foodies.filter }>
            <div className="image">
                <img src={Foodies.img}/>
            </div>
            <div className="information">
                <div className="heading">
                    <h3>{ Foodies.name }</h3>
                    <h4>{ Foodies.price }</h4>
                </div>
                <p style={{ margin:'10px 0 0',fontSize:'0.82rem',lineHeight:'24px' }}>{ Foodies.description }</p>

            </div>
        </div>
    )
}

export default MenuItem;