import { Flowbite } from 'flowbite-react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className=" dark:bg-blue-900">
      <Flowbite>
        <RouterProvider router={router}></RouterProvider>
      </Flowbite>

    </div>
  );
}

export default App;
