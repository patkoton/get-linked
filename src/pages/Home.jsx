import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Attributes from '../components/Attributes'
import FAQs from '../components/FAQs'
import TimeLine from '../components/Timeline'
import Prizes from '../components/Prizes'
import Patners from '../components/Patners'
import Policy from '../components/Policy'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Attributes />
      <FAQs />
      <TimeLine />
      <Prizes />
      <Patners />
      <Policy />
    </Layout>
  )
}

export default Home
