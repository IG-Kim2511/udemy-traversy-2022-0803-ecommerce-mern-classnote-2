

/* 🦄🦄🦄c4. React Setup & Git Initialize, package.json, gitignore 
   👉../gitignore

  🍀git folder
    <내방식 (rm -rf .git이 에러나서 안됨..)>

    root folder에 git init

    frontend folder 에 npx create-react-app .

    root folder에 이미 git폴더가 있어서, fontend flolder에 git이 설치 안됨

  🍀gitignore file
    .gitignore파일 --> root 폴더로 옮김

    .gitignore파일에 추가
    node_modules
    node_modules/
    .env  👉 global varialbe  - 비밀키들 포함되어있음


    

  🦄🦄🦄c5. React-Bootstrap Setup, Bootswatch
    👉components/Header
    👉components/Footer
    👉index.js 
    👉./frontend/public/index.html
  


    🍀snipet
      rafce
      imr - import Header from './components/Header'


    🍀bootstrap (material UI도 있지만 더 쉬워서 부트스트랩 추천) 
      
    🍉bootswatch 👉 -free thems of bootstrap

      다운로드 파일  👉 루트폴더 -frontend-src 폴더로 옮김
      👉index.js : import './bootstrap.min.css', (index.css위에 코드 넣음)


    🍉npm install react-bootstrap bootstrap

    🍉import {Container, Navbar, Nav} from 'react-bootstrap';


    🍀fontawesome CDN
    ./frontend/public/index.html


  🦄🦄🦄c6. HomeScreen Product Listing-products_and_images, Homescreen.js, Product.js


    👉./frontend/public/images
    👉./frontend/src/data_products.js
    👉screens/HomeScreen.js
    👉components/Product.js

    props 방법2 : {~~~}  : destructing syntax


  🦄🦄🦄c7. Rating Component 
      👉components/Product.js
      👉components/Rating.js 
*/

import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

// 🍀c5
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

// 🍀c9. router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from './screens/ProductScreen';


// 🍀c4
// function App() {

// const App = () =>{
//   return (
//     <div className="App">
//       <h3 className="components_name">home</h3>

//       <Header/>

//       <main className='py-3'>
//         <Container>
//           <HomeScreen/>
//         </Container>
//       </main>

//       <Footer/>
//     </div>
//   );
// }


/* 
🦄🦄🦄8-2 React Router v6 Major Changes
🦄🦄🦄c9. React Router- Routes, element, Link to= , LinkContainer (router v5로 강의함... 내 임의대로 v6로 고침)

👉router v6없이 강의 진행하기. (자꾸 에러남...ㅠㅠ) 


🦄🦄🦄c10.router -useParams, useNavigate, conditional rendering, Product Details Screen
👉ProductScreen


*/

// 🍀c9. router
function App() {
  return (
    <BrowserRouter>

      <h3 className="components_name">home</h3>
      <Header/>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* 🍀c10-10.  */}
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>

      <Footer/>
    </BrowserRouter>    
  );
}




export default App;
