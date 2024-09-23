import React, { useEffect, useState } from 'react'

function TestComponent() {
	const [task, setTask] = useState([])
	useEffect(() => {
		fetch('http://172.22.79.83:5050/tasks')
			.then((res) => res.json())
			.then((data) => setTask(data))
			.catch((err) => console.error(err))
	}, [])

	return (
		<ul>
			{task.map(
        ({ title, description, status }: { title: string; description: string; status: string }) => {
				return (
					<>
						<h1>{ title }</h1>
						<p>{ description }</p>
            <p>{ status }</p>
					</>
				)
			})}
		</ul>
	)
}

export default TestComponent
