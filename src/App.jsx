import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import TravelLog from './components/TravelLog.jsx'
import entriesData from './data.js'

function App() {
  const entryElements = entriesData.map((entry) => {
    return (
      <TravelLog
        key = {entry.id}
        {...entry}
      />
    )
  })
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App
