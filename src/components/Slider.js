import React, {useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";


export default function Slider() {
    const [images, setImages] = useState([
        require('../assets/product_images/Dimlama.jpg'),
        require('../assets/product_images/Kabob.jpg'),
        require('../assets/product_images/Palov.jpg'),
    ])
    return (
        <SliderBox
            images={images}
            sliderBoxHeight={240}
            paginationBoxStyle={{marginBottom:15}}
            autoPlay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            dotColor="#fff"
            inactiveDotColor="#4b24ab"
            ImageComponentStyle={{borderRadius: 40, width: '94%', marginTop: 15, marginBottom: 15}}
            imageLoadingColor="#4b24ab" />
    )
}
