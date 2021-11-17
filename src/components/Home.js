import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../service';
import Carousel from 'react-bootstrap-carousel';


export default function Home() {

    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setNowPlaying(await fetchMovies());
        };
        fetchAPI();
    }, []);

    const movies = nowPlaying.slice(0, 5).map((item, index) => {
        return (
            <div key={index}>
                <div className='carousel-center'>
                    <img stlye={{ height: 600 }} src={item.backPoster} alt={item.title} />
                </div>
            </div>
        )
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Carousel
                        autoplay={true}
                        pauseOnVisibility={true}
                        slideshowSpeed={true}
                        version={4}
                        indicators={false}
                    >
                        {movies}
                    </Carousel>
                </div>
            </div>

        </div>
    )
}
