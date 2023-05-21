import Cards from "../Components/Card";
import Header from '../Components/Header'
import Footer from '../Components/Footer.js'
import '../Components/Assets/css/buyProperty.css'

export default function BuyProperty() {
  let count=0;
  const cards = [
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "F8/3 Ambassador Islamabad",
      price: "Rs20000",
      camera: "4",
      walkthrough: "2",
      intro: "Purchase",
      detail: "Beautiful Huge 1 Family House. Newly Renovated With New paint job",
      beds: "2",
      bathroom:"3",
      size:"3504",
      user:"property-1.jpg",
      name:"Obaid Ismail",
      author:"Investor"
    },
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "G8/2 G8 Markaaz Islamabad",
      price: "Rs45000",
      camera: "2",
      walkthrough: "3",
      intro: "Purchase",
      detail: "Beautiful Huge 1 Family House. Newly Renovated With New paint job",
      beds: "4",
      bathroom:"4",
      size:"5000",
      user:"../Components/Assets/images/property-1.jpg",
      name:"Umar Akhtar",
      author:"Investor"
    },
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "F8/2 Empire Hostel Islamabad",
      price: "Rs18000",
      camera: "4",
      walkthrough: "2",
      intro: "Purchase",
      detail: "Beautiful Huge 4 Person House. Newly Renovated With New paint job",
      beds: "1",
      bathroom:"1",
      size:"2000",
      user:"../Components/Assets/images/property-1.jpg",
      name:"Aamir",
      author:"Investor"
    },
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "F8/3 Ambassador Islamabad",
      price: "Rs20000",
      camera: "4",
      walkthrough: "2",
      intro: "Purchase",
      detail: "Beautiful Huge 1 Family House. Newly Renovated With New paint job",
      beds: "2",
      bathroom:"3",
      size:"3504",
      user:"../Components/Assets/images/property-1.jpg",
      name:"Obaid Ismail",
      author:"Investor"
    },
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "G8/2 G8 Markaaz Islamabad",
      price: "Rs45000",
      camera: "2",
      walkthrough: "3",
      intro:"Purchase",
      detail: "Beautiful Huge 1 Family House. Newly Renovated With New paint job",
      beds: "4",
      bathroom:"4",
      size:"5000",
      user:"../Components/Assets/images/property-1.jpg",
      name:"Umar Akhtar",
      author:"Investor"
    },
    {
      image: "../Components/Assets/images/property-1.jpg",
      address: "F8/2 Empire Hostel Islamabad",
      price: "Rs18000",
      camera: "4",
      walkthrough: "2",
      intro: "Purchase",
      detail: "Beautiful Huge 4 Person House. Newly Renovated With New paint job",
      beds: "1",
      bathroom:"1",
      size:"2000",
      user:"../Components/Assets/images/property-1.jpg",
      name:"Aamir Yasin",
      author:"Investor"
    },
  ];
  return (
    <>
    <Header page={3}/>
      <section className="property" id="property">
        <div className="container">
          <h1 className="section-subtitle">Properties for Sale</h1>
          <div className="grid-containerS">
          {cards.map((cards) => (
              <Cards 
              image={cards.image}
              address={cards.address}
              price={cards.price}
              camera={cards.camera}
              walkthrough={cards.walkthrough}
              intro={cards.intro}
              detail={cards.detail}
              beds={cards.beds}
              bathroom={cards.bathroom}
              size={cards.size}
              user={cards.user}
              name={cards.name}
              author={cards.author}/>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
