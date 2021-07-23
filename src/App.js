import logo from './logo.svg';
import './App.css';
import Baitap1 from './baitap1/index';
import Baitap2 from './baitap2';
import Baitap3 from './baitap3';
import RenderingElements from './rendering-elements';
import HandlingEvents from './handling-events';
import ExampleHandlingEvents from './handling-events/example';
// import State from './state';
import ExampleCar from './example-car';
import ListKey from './listKey';
import ExampleList from './listKey/example';
import Communication from './communication';
// import ShoppingCart from './shopping-cart';
import ShoppingCartRedux from './shopping-cart-redux';
import HomeRedux from "./user-management-html-redux"

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3/> */}
      <RenderingElements/>
      <HandlingEvents/>
      <ExampleHandlingEvents/>
      {/* <State/> */}
      <ExampleCar/>
      <ListKey/>
      <ExampleList/>
      <Communication/>
      <hr/>
      {/* <ShoppingCart/> */}
      <ShoppingCartRedux />
      <hr/>
      {/* <Home/> */}
      <HomeRedux/>  
    </div>
  );
}

export default App;
