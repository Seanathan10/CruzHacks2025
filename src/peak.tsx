import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './courses/Courses'

// import Courses from './dashboard/Courses.tsx'
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
			<Courses />
        </>
    )
  }
  
  export default Peak;
  