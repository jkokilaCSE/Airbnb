export default function Card(){
    return(
        <div className="card">
            <img src="../hero.jpg" className="card--image"/>
            <div className="card--stats">
                <img src="../star.jpg" className="card--star" />
                <span className="">5.0</span>
                <span className="gray">(6).</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lesson with Katie Zaferes</p>
            <p className="bold">From $136</p>
        </div>
    )
}