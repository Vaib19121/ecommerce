import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://picsum.photos/id/1018/2000/850/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/2000/850/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/2000/850/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];

const Gallery = () => {
    return (
        <div>
            <ImageGallery items={images} autoPlay showNav={false} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} />
        </div>
    );
};

export default Gallery;
