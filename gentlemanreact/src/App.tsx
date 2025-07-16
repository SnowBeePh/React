import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'

const url = "https://api.example.com/data"
// User example
// const userUrl = "https://api.example.com/user"

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, error, loading } = useFetch<Data>(url);
  // const { data: dataUser, error: errorUser, loading: loadingUser } = useFetch<{name: string}>(userUrl);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>UPS! There is an error: {error.message}</div>
  }

  return () => {
    // Handles the memory, it's executed when the componen is exited
    <div>{JSON.stringify(data)}</div>
  }
}

export default App
