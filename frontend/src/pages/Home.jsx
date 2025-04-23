import React from 'react'
import Header from '../components/home/Header';
import LatestBlogs from '../components/home/LatestBlogs';
import About from '../components/home/About';
import Portfolio from '../components/home/Portfolio';
import Neurology from '../components/home/Neurology';
import Emergancy from '../components/home/Emergancy';
import Drabout from '../components/home/Drabout';
import MRI from '../components/home/MRI';
import Cardiology from '../components/home/Cardiology';
import Adil from './Adil';
import Gallery from '../components/home/Gallery';

const Home = () => {
  return (
    <div>
        <Header />
        <LatestBlogs />
        <About />
        <Portfolio />
        {/* <Neurology /> */}
        {/* <Emergancy /> */}
        <Drabout />
        {/* <MRI/> */}
        {/* <Adil/> */}
        {/* <Cardiology /> */}
        <Gallery />
    </div>
  )
}

export default Home