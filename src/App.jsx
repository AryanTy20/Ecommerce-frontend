import {
  Navbar,
  Jumbotron,
  NewProduct,
  Auth,
  Checkout,
  Collection,
  DiscountFlex,
  Profile,
  WhyUs,
  Footer,
} from "./components";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <NewProduct />
      <Collection />
      <DiscountFlex />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
