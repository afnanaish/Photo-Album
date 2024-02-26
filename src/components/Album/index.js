import React, { useState } from "react";
import Slider from "react-slick";
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyle } from "./style.js";
import { useAlbum } from "./useAlbum.js";


const Album = () => {
  const { photoAlbumClasses } = useStyle();

  const { photos, play, pause ,popImg ,resetImg} = useAlbum();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  
  return (
    <div style={photoAlbumClasses.mainContainer}>
      <div style={photoAlbumClasses.title}>Photo Album</div>
      <div style={photoAlbumClasses.album}>  
      <> {photos.map((photo ,index) => (
            
            photo.showInfo && (
              <div style={photoAlbumClasses.infoContainer}>
                 <img
                style={photoAlbumClasses.photoInfo}
                src={photo.src}
                alt={photo.alt}
                onMouseEnter={() => popImg(index)}
              onMouseLeave={() => resetImg(index)}
                key={index}
              />
                <h3>{photo.alt}</h3>
                <p>{photo.info}</p>
              </div>
            )))}
        <Slider {...settings} style={photoAlbumClasses.slider}>
          {photos.map((photo ,index) => (
            <div style={photoAlbumClasses.photoContainer}>
              <img
                style={photoAlbumClasses.photo}
                src={photo.src}
                alt={photo.alt}
                onMouseEnter={() => popImg(index)}
              onMouseLeave={() => resetImg(index)}
                key={index}
              />
            </div>
          ))}
        </Slider></>
      </div>
    </div>
  );
};

export { Album };
