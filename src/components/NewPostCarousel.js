import './NewPostCarousel.css'
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";


export default function NewPostCarousel({arr}) {
    useEffect(() => {
        initFlickity();
    }, []);

    const carousel = useRef(null);

    async function initFlickity() {
        if (typeof window !== 'undefined' && carousel.current) {
            const Flickity = (await import('flickity')).default;
            new Flickity(carousel.current, {
                draggable: true,
                lazyLoad: true,
                wrapAround: false,
                pageDots: false,
                prevNextButtons: false,
                imagesLoaded: true,
                contain: true,
            });
        }
    }

    return (
        <div ref={carousel} className="carousel">
            {arr.length > 0 && arr.map(post => (
                    <div className="carousel-cell">
                        <Link to={`/post/${post._id}`} style={{textDecoration: 'none'}}>
                            <img className="carousel-cell-image" src={post.cover}/>
                            <Typography variant={'h5'} fontWeight={800} className={'carousel-blog-title'}>{post.title}</Typography>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}