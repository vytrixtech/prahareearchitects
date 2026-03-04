import { useState } from 'react';
import './ImageLoader.css';

const ImageLoader = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`img-wrapper ${className || ''}`} style={style}>
            {!isLoaded && <div className="img-placeholder pulse-animation"></div>}
            <img
                src={src}
                alt={alt}
                className={`loaded-img ${isLoaded ? 'visible' : 'hidden'}`}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default ImageLoader;
