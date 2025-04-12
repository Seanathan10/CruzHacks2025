import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard';
import { MantineProvider } from '@mantine/core';

let mobile = false;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <Dashboard/>
      </MantineProvider>
    </>
  );
}

export default App
