import React from 'react'
import { Hero } from '../components/homeComponents/Hero'
import { LatestCollection } from '../components/homeComponents/LatestCollection'
import { BestSeller } from '../components/homeComponents/BestSeller'
import { OurPolicy } from '../components/homeComponents/OurPolicy'
import { NewsLetterBox } from '../components/homeComponents/NewsLetterBox'
import { Footer } from '../components/homeComponents/Footer'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
      <Footer/>
      </div>
  )
}