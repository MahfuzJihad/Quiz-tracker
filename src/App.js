import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Statistic from './component/Statistic/Statistic';
import Topics from './component/Topics/Topics';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]

    }
  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
