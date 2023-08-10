import Navbar from "./Navbar";
import Hero from "./Hero"
import Card from "./Card"
import data from "./data.js"
export default function App(){

  const card = data.map(item=>{
    return (
      <Card 
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    Title={item.title}
    price={item.price} />
    )
  })
  return(
    <>
    <Navbar />
    {card}
    </>
  )
}