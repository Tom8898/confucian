// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react';
import GuideSection from './components/GuideSection';

const App = () => {
    return (
        <div>
            <h1>New Zealand Beginner's Guide</h1>
            <GuideSection 
                title="Introduction to New Zealand" 
                content="New Zealand is a beautiful country known for its stunning landscapes and rich culture." 
            />
            <GuideSection 
                title="Travel Tips" 
                content="Make sure to plan your trip according to the seasons and explore both the North and South Islands." 
            />
            <GuideSection 
                title="Cultural Insights" 
                content="Learn about the Maori culture and respect the local customs during your visit." 
            />
        </div>
    );
};

export default App;