import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PrimarySearchAppBar from './components/AppBar/AppBar';
import HomePage from './pages/Home';
import Divider from '@mui/material/Divider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResultPage from './pages/Result';
import AppWrapper from './AppWrapper';
import NotFoundPage from './pages/404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/", 
    element: <AppWrapper/>,
    children:[
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/result/:id',
        element: <ResultPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
  ]
}])


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Divider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
