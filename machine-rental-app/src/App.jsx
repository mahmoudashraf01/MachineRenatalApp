import { useState } from 'react'
import Landing from './pages/Landing'
import { useRoutes } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from './components/Layout'


function App() {

  const routesArray = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <Landing /> },
      ],
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <>
      <div>{routesElement}</div>
    </>
  )
}

export default App
