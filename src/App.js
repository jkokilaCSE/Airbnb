import Navbar from "./Navbar";
import Hero from "./Hero"
import Card from "./Card"
import data from "./data.js"

export default function App(){

  const card = data.map(item=>{
    return (
      <Card 
    key={item.id}
    // img={item.coverImg}
    // rating={item.stats.rating}
    // reviewCount={item.stats.reviewCount}
    // country={item.location}
    // Title={item.title}
    // price={item.price}
    // openSpots={item.openSpots} we can do it simple like
    // {...item}this line can be replace for the below line that is not telling the particular props and also not mensioning the props name in that particular file.
    item={item}
    />
    )
  })
  return(
    <>
    <Navbar />
    <Hero />
    <section className="cards-list">
    {card}
    </section>
    </>
  )
}