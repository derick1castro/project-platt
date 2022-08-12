import React from 'react'
import { UserProvider } from '../../context/UserContext'
import Container from '../layout/Container'
import Message from '../layout/Message'
import Navbar from '../layout/Navbar'

function Home() {
  return (
    <>
      <UserProvider>
        <Navbar/>
        <Message />
        <Container>
          <section>
            <h1 className='text-5xl font-bold'>HOME</h1>
          </section>
        </Container>
      </UserProvider>
    </>
  )
}

export default Home