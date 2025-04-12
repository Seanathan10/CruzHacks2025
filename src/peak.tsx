import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './courses/Courses'

import Courses from './dashboard/Courses.tsx'
import FoodMenu from './dashboard/FoodMenu.tsx'
import News from './dashboard/news/News.tsx'

import {TopBar as MobileTopBar} from "./dashboard/mobile/TopBar.tsx";
import {TopBar as DesktopTopBar} from "./dashboard/desktop/TopBar.tsx";

import { useMediaQuery } from '@mantine/hooks';
import { Context } from './dashboard/Context.tsx'

function Peak() {
    const [count, setCount] = useState(0)

    const contextValues = {mobile: useMediaQuery('(max-width: 600px)')};
  
    return (
        <>
        <Context.Provider value={contextValues}>
                        {contextValues.mobile ? (<MobileTopBar />) : (<DesktopTopBar />)}
                        <News/>
                        <Courses/>
                        <FoodMenu/>
                    </Context.Provider>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
    )
  }
  
  export default Peak
  