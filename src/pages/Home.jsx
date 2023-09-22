import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Attributes from '../components/Attributes'
import FAQs from '../components/FAQs'
import Timeline from '../components/Timeline'
import Prizes from '../components/Prizes'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Attributes />
      <FAQs />
      <Timeline />
      <Prizes />
    </Layout>
  )
}

export default Home
