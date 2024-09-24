import React, { useEffect, useState } from 'react'

function TestComponent() {
	const [task, setTask] = useState([])
	useEffect(() => {
		fetch('http://172.22.79.83:5050/tasks')
			.then((res) => res.json())
			.then((data) => setTask(data))
			.catch((err) => console.error(err))
	}, [])

	const taskList = task.map(({ _id, title, description, status }: { _id: string; title: string; description: string; status: string }) => {
		return (
			<li key={_id}>
        <p>{_id}</p>
				<h1>{title}</h1>
				<p>{description}</p>
				<p>{status}</p>
			</li>
		)
	})

	return <ul>{taskList}</ul>
}

export default TestComponent
