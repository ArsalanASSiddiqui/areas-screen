// import './App.css';
// import { useState } from 'react';
// import Button from './compnents/Button';
// import products from './compnents/Productslist';
// // function Button(params) {
// //   return (
// //     <button>
// //       Button
// //     </button>
// //   )

// // }
// // const products = [
// //   { title: 'Cabbage', isFruit: false, id: 1 },
// //   { title: 'Garlic', isFruit: false, id: 2 },
// //   { title: 'Apple', isFruit: true, id: 3 },
// // ]

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// }

// function App() {
//   const [state, setState] = useState(0);
//   const listItem = products.map(product =>
//     <li key={product.id}
//       style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
//     >
//       {product.title}
//     </li>
//   );
//   function handlerClick() {
//     setState(state + 1);
//     //alert(state);

//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{user.name}</h1>
//         <img className='avatar'
//           src={user.imageUrl}
//           alt={'Photo of' + user.name}
//           style={{ width: user.imageSize, height: user.imageSize }}
//         ></img>

//         {/* <Button /> */}
//       </header>
//       <div>
//         <ul>
//           {listItem}
//         </ul>
//       </div>
//       <div>
//         <button onClick={handlerClick} >Click {state} time</button>
//       </div>
//       <div>
//         <Button />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js

// src/App.js

import React from 'react';
// import ProductForm from './compnents/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdvertisementScreen from './compnents/AdvertisementScreen';


function App() {
  return (
    <div className="App">
      <AdvertisementScreen />
    </div>
  );
}

export default App;
