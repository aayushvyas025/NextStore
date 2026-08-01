import React from 'react'
import MainRoute from './routes/MainRoute'
import Layout from './layout/Layout'
import Navbar from './components/Navbar'

function App() {
  return (
    <Layout minHeight={"100vh"}>  
    <Navbar />
    <MainRoute />
    </Layout>
  )
}

export default App
