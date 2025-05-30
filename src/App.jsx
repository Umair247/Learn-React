import React, {useState} from 'react'
import MyButton from './components/MyButton';
// import Profile from './components/Profile';
import './App.css';
// import Admin from './components/Admin';
// import LoginForm from './components/LoginForm';


const products = [
  { name: "Apple", isFruit: true, id: 1 },
  { name: "Samsung", id: 2 },
  { name: "Nokia", id: 3 }
]
export default function App() {
const [count, setCount] = useState(0);
 function handleClick() {
        setCount(count + 1)
        
    }


  // const listItems = products.map(product =>
  //   <li key={product.id} style={{
  //     color: product.isFruit ? 'magenta' : 'darkgreen'
  //   }}>
  //     {product.name}
  //   </li>
  // )
  // let content;
  // let isLoggedIn = false
  // if (isLoggedIn) {
  //   content = <Admin />;
  // } else {
  //   content = <LoginForm />;
  // }

  return (
    <>
      {/* <ul>{listItems}</ul> */}
      {/* Responding to events */}
      <MyButton count = {count} onClick = {handleClick} />
      <MyButton count = {count} onClick = {handleClick} />
      

    </>
  );
}