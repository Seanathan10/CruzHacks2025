import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './courses/Courses'

function Peak() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Courses />
		</>
	)
}

export default Peak
