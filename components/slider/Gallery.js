"use client";

import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Gallery = ({ images = [] }) => {
  // If no images provided, return null or a placeholder
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Slider {...sliderProps.gallery} className="gallery-slider-active">
      {images.map((image, index) => (
        <div
          className="gallery-three-item"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
          key={index}
        >
          <div className="image" style={{ 
            height: '500px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src={image} 
              alt={`Gallery Image ${index + 1}`} 
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }} 
            />
          </div>
          {/* You might want to keep or remove the content div based on your design */}
          {/* <div className="content">
            <span className="category">Tour &amp; Travel</span>
            <h5>
              <Link href="destination-details">Image Title</Link>
            </h5>
          </div> */}
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
