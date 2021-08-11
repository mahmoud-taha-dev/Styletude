import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { useLocalStorage } from "./utils/customHooks/useLocalStorage";

//Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Cart from "./containers/Cart/Cart";
import ViewProduct from "./containers/ViewProduct/ViewProduct";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import { ToastContainer } from "react-toastify";

//Dummy Data
const items = [
  {
    rating: 4.5,
    numReviews: 12,
    price: 89.99,
    countInStock: 10,
    _id: "5fe6846b898b7133664275f1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.020Z",
    updatedAt: "2020-12-26T00:31:39.020Z",
    imageURL:
      "http://frozen-dawn-52777.herokuapp.com/public/images/airpods.jpg",
    id: "5fe6846b898b7133664275f1",
  },
  {
    rating: 4,
    numReviews: 8,
    price: 599.99,
    countInStock: 7,
    _id: "5fe6846b898b7133664275f2",
    name: "iPhone 11 Pro 256GB Memory",
    image: "phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.021Z",
    updatedAt: "2020-12-26T00:31:39.021Z",
    imageURL: "http://frozen-dawn-52777.herokuapp.com/public/images/phone.jpg",
    id: "5fe6846b898b7133664275f2",
  },
  {
    rating: 3,
    numReviews: 12,
    price: 929.99,
    countInStock: 5,
    _id: "5fe6846b898b7133664275f3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.022Z",
    updatedAt: "2020-12-26T00:31:39.022Z",
    imageURL: "http://frozen-dawn-52777.herokuapp.com/public/images/camera.jpg",
    id: "5fe6846b898b7133664275f3",
  },
  {
    rating: 3.5,
    numReviews: 10,
    price: 49.99,
    countInStock: 7,
    _id: "5fe6846b898b7133664275f5",
    name: "Logitech G-Series Gaming Mouse",
    image: "mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.023Z",
    updatedAt: "2020-12-26T00:31:39.023Z",
    imageURL: "http://frozen-dawn-52777.herokuapp.com/public/images/mouse.jpg",
    id: "5fe6846b898b7133664275f5",
  },
  {
    rating: 4,
    numReviews: 12,
    price: 29.99,
    countInStock: 0,
    _id: "5fe6846b898b7133664275f6",
    name: "Amazon Echo Dot 3rd Generation",
    image: "alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.023Z",
    updatedAt: "2020-12-26T00:31:39.023Z",
    imageURL: "http://frozen-dawn-52777.herokuapp.com/public/images/alexa.jpg",
    id: "5fe6846b898b7133664275f6",
  },
  {
    rating: 5,
    numReviews: 12,
    price: 399.99,
    countInStock: 11,
    _id: "5fe6846b898b7133664275f4",
    name: "Sony Playstation 4 Pro White Version",
    image: "playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    user: "5fe6846a898b7133664275ee",
    reviews: [],
    __v: 0,
    createdAt: "2020-12-26T00:31:39.022Z",
    updatedAt: "2020-12-26T00:31:39.022Z",
    imageURL:
      "http://frozen-dawn-52777.herokuapp.com/public/images/playstation.jpg",
    id: "5fe6846b898b7133664275f4",
  },
];

const App = () => {
  const [products, setProducts] = useLocalStorage("products", items);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/products/:id" exact component={ViewProduct} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <ToastContainer
        autoClose={3000}
        newestOnTop
        style={{ top: "60px", width: "280px" }}
      />
    </Router>
  );
};

export default App;
