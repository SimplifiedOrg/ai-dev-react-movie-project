import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const Layout = () => {
  const [searchData, setSearchData] = useState({
    results: [],
    // Lets Home show what the user searched for
    query: ''
  })

  // Loading state lives here because Nav sets it and Home displays it
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Nav setSearchData={setSearchData} setLoading={setLoading} />
      <Outlet context={{ searchData, loading }} />
      <Footer />
    </>
  )
}

export default Layout
