import Navbar from "./Navbar";
// import Hero from "./Hero"
import Card from "./Card"
export default function App(){
  return(
    <>
    <Navbar />

    <Card 
    img="hero.jpg"
    rating="5.0"
    reviewCount={6}
    country="USA"
    Title="Life Lesson with Katie Zeferes"
    price={136} />
    </>
  )
}