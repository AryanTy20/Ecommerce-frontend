import {
  Navbar,
  Jumbotron,
  NewProduct,
  Auth,
  Checkout,
  Collection,
  DiscountFlex,
  Trending,
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
      <Trending />
      <DiscountFlex />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
