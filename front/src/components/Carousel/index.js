import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Carousel({ thumbs = [] }) {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={3}
        >
            <Slider>
                {thumbs.length > 0 && thumbs.map((thumb, index) => {
                    return (
                        <Slide index={index}>
                            <img src={thumb} />
                        </Slide>
                    );
                })}
            </Slider>

            <ButtonBack>Voltar</ButtonBack>
            <ButtonNext>Próximo</ButtonNext>
        </CarouselProvider>
    );
}

export default Carousel;