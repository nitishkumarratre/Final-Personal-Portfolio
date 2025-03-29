import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

)






// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';

// // Disable cut, copy, paste, and right-click globally
// const disableActions = (event) => {
//   event.preventDefault();
// };

// // List of events to disable
// const events = ['cut', 'copy', 'paste', 'contextmenu'];

// // Attach event listeners for all the actions
// events.forEach(event => document.addEventListener(event, disableActions));

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


