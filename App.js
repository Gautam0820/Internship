
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://www.plutosport.com/media/catalog/product/cache/ca568d9d1bcb9a930d0f954e2d7954a8/N/i/Nike-Air-Max-Alpha-Trainer-5-Sportschoen-Heren-2307311049.jpg',
      name: 'Nike White Shoes',
      category: 'Shoes',
      seller: 'Nike',
      price: 2000
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'FastTrack Watch ',
      category: 'Watches',
      seller: 'FastTrack',
      price: 2500
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'HP Laptop',
      category: 'Laptops',
      seller: 'HP',
      price: 50000
    },
    {
      url: 'https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400',
      name: 'Iphone 14',
      category: 'Mobile',
      seller: 'Apple',
      price: 74000
    },
    {
      url: 'https://5.imimg.com/data5/BG/UM/MY-23375112/61.jpg',
      name: 'Mens Tshirt',
      category: 'Clothes',
      seller: 'Puma',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;