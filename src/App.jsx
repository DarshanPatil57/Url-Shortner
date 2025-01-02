
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Applayout } from './Layouts/Applayout'
import { LandingPage } from './Pages/LandingPage'
import { Dashboard } from './Pages/Dashboard'
import { Auth } from './Pages/Auth'
import { Link } from './Pages/Link'
import { Redirect } from './Pages/Redirect'


const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<Redirect/>
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
