// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import Layout from './Layout/Layout'
// import NotFound from './Components/NotFound/NotFound'

// function App() {
  
//   const router = createBrowserRouter([
//     {path: '/', element: <Layout/>, children: [
//       {path: '/', element: <h1>home</h1>},
//       {path: '*', element: <NotFound/>}
//     ]},
//   ])

//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Home from './pages/Home/Home.jsx'; 

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> }, 
        { path: '*', element: <NotFound /> } 
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
