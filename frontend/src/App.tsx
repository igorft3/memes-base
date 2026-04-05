import { useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'

const API_URL = 'http://loc2alhost:3000/'

function App() {
    const [data, setData] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => setData(response.data))
            .catch((error) => setError(error.message))
    }, [])

    return (
        <>
            <h1>Hello</h1>
            <p>
                Fetch data: {data && data} {error && error}
            </p>
        </>
    )
}

export default App
