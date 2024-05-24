import React from 'react'
import FeaturedMovie from './featuredMovie';
import Hero from './Hero';
import People from './people';
import Footer from './footer';
import Arrival from './nwarrival';


const Home = () => {
  return (
    <div>
    <Hero />
    <FeaturedMovie url={"https://api.themoviedb.org/3/movie/top_rated"} heading={"Featured Movies"} />
    <FeaturedMovie url={"https://api.themoviedb.org/3/movie/upcoming"} heading={" New Arrival"} />
    <Arrival  url={"https://api.themoviedb.org/3/movie/now_playing"} heading={"Exclusive Videos"} />
    <People url={"https://api.themoviedb.org/3/person/popular"} heading={"Featured Cast"} />
    <Footer />
    </div>
  )
}

export default Home