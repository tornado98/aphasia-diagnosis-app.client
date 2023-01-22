import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';



const root = ReactDOM.createRoot(document.querySelector('#root'));
        root.render(<App />)

    
//HERE ->
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");