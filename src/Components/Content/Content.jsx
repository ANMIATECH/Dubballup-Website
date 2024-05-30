import React from 'react'
import Header from '../Header/Header'
import Ideal from '../Ideal/Ideal'
import DoubleDrive from '../DoubleDrive/DoubleDrive'
import UniqueAspects from '../UniqueAspects/UniqueAspects'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'

export default function Content() {
  return (
    <div>
        <Header/>
        <Ideal/>
        <DoubleDrive/>
        <UniqueAspects/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}
