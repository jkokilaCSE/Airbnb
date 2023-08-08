export default function Card(props){
    return(
        <div className="card">
            <img src={`../${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="../star.jpg" className="card--star" />
                <span className="">{props.rating}</span>
                <span className="gray">({props.reviewCount}) .</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.Title}</p>
            <p><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}