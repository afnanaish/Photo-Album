import { useState , useRef } from "react";
import { useStyle } from "./style.js";
import costaRicaImage from "../../assets/images/Costa Rica.jpg";
import franceImage from "../../assets/images/France.jpg";
import icelandImage from "../../assets/images/Iceland.jpg";
import indonesiaImage from "../../assets/images/Indonesia.jpg";
import italyImage from "../../assets/images/Italy.jpg";
import japanImage from "../../assets/images/Japan.jpg";
import maldivesImage from "../../assets/images/Maldives.jpg";
import nepalImage from "../../assets/images/Nepal.jpg";
import newZealandImage from "../../assets/images/New Zealand.jpg";
import southAfricaImage from "../../assets/images/South Africa.jpg";
import switzerlandImage from "../../assets/images/Switzerland.jpg";
import unitedKingdomImage from "../../assets/images/United Kingdom.jpg";
import unitedStatesImage from "../../assets/images/United States.jpg";

const useAlbum = () => {
    
  const [photos , setPhotos] = useState([
    {
      photo: "costaRica",
      alt: "Costa Rica",
      src: costaRicaImage,
      info: `The best time to visit Costa Rica is generally between December and April, though the Caribbean side of the country is particularly sunny in October. Many airlines offer non-stop flights to the cities of Liberia and San José.

        If you still need a little convincing as to why this Central American nation will make a life-changing vacation, take a look at these reasons to visit Costa Rica.`,
    },
    {
      photo: "franceImage",
      alt: "France",
      src: franceImage,
      info: `Between the snowy French Alps, glamorous Riviera, rolling vineyard- and lavender-covered hills of Provence, verdant Loire Valley, and rocky coast of Brittany, is it any surprise France is often considered one of the most beautiful countries in the world? Plus, those natural resources provide us with French wine, cheese, and more, so what's not to love?`,
    },
    {
      photo: "icelandImage",
      alt: "Iceland",
      src: icelandImage,
      info: `From massive waterfalls to black-sand beaches, this island country is packed with unbelievable natural beauty. And depending on the time of year you visit, you can experience unique natural phenomena; during the winter months, you can spot the elusive northern lights over frozen waterfalls and icy landscapes, and come summer, you can hike among the lush scenery and soak in hot springs under the midnight sun.`,
    },
    {
      photo: "indonesiaImage",
      alt: "Indonesia",
      src: indonesiaImage,
      info: `Made up of thousands of islands, Indonesia has everything from green terraced rice fields to beautiful beaches, dense rain forests, and more. The island of Bali is popular among travelers seeking vistas of intricate temples against backdrops of crashing ocean waves or rolling hills with a volcano in the distance.`,
    },
    {
      photo: "italyImage",
      alt: "Italy",
      src: italyImage,
      info: `Italy is a dream destination for so many travelers — and once you visit the first time, you'll be so enchanted by the country's natural beauty (and delicious food, incredible architecture, and friendly people) that you'll be ready to plan your next trip. It's hard to choose from the Tuscan hills lined with vineyards, the wanderlust-worthy Amalfi Coast, and the soaring peaks of the Dolomites, so we recommend visiting them all.`,
    },
    {
      photo: "japanImage",
      alt: "Japan",
      src: japanImage,
      info: `Bamboo forests, relaxing hot springs, iconic Mount Fuji, and tropical beaches — you'll find all this and more on a trip to Japan. Plan your getaway during cherry blossom season to see the country's famous blooms for yourself.`,
    },
    {
      photo: "maldivesImage",
      alt: "Maldives",
      src: maldivesImage,
      info: `When you picture the perfect beach paradise, clear, turquoise waters and bright white-sand beaches — like those you'd find in the Maldives — probably come to mind. Above the water, you can take in views of the palm trees lining the beach from a thatched-roof overwater bungalow, and under the surface, you can explore another world of coral reefs and sea life.`,
    },
    {
      photo: "nepalImage",
      alt: "Nepal",
      src: nepalImage,
      info: `Eight of the world's 10 tallest mountains, including the famous Mount Everest, are located in Nepal. The Himalayas are a draw for adventurous travelers hoping to test their climbing skills and endurance, as well as for those who just want to admire these impressive mountains from a distance. Of course, there's plenty more to see here, including diverse wildlife like rhinos, tigers, and more.`,
    },
    {
      photo: "newZealandImage",
      alt: "New Zealand",
      src: newZealandImage,
      info: `Outdoor adventure abounds in New Zealand, where you can cruise around Milford Sound's fjords, ski on the North or South Island, check out geothermal phenomena like geysers and mud pools, and admire the country's ancient glaciers.`,
    },
    {
      photo: "southAfricaImage",
      alt: "South Africa",
      src: southAfricaImage,
      info: `South Africa offers a truly impressive array of landscapes, from the vineyards of wine country to safari destinations like Kruger National Park to the mountainous coastline. This variety means there's something for every type of traveler, with scenic views to match.`,
    },
    {
      photo: "switzerlandImage",
      alt: "Switzer land",
      src: switzerlandImage,
      info: `The alpine landscapes of Switzerland — defined by the breathtaking mountains and sparkling lakes dotted with charming villages and ski resorts — make this country a must-visit destination, particularly for outdoorsy types who love to hike and ski. In the winter, the country looks like a living snow globe, and during the summer, the snow melts to reveal green mountains and wildflowers.`,
    },
    {
      photo: "unitedKingdomImage",
      alt: "United Kingdom",
      src: unitedKingdomImage,
      info: `Cities like London, Edinburgh, and Manchester might overshadow the United Kingdom's natural beauty, but there's plenty to see outside the major cities. From the cliffs of the Jurassic Coast to the basalt columns of the Giant's Causeway to the dreamy Scottish Highlands, there's plenty to get out and explore in the U.K.`,
    },
    {
      photo: "unitedStatesImage",
      alt: "United States",
      src: unitedStatesImage,
      info: `From sea to shining sea, the United States offers a wide range of picturesque landscapes. With the sandy beaches and turquoise waters of the Florida Keys, the magnificent Grand Canyon, the snow-capped peaks of Alaska, and the postcard-worthy California coastline, it would take years to fully explore the country's most beautiful places.`,
    },
  ]);
  const { photoAlbumClasses } = useStyle();

  const sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const popImg = (index) => {
    setPhotos((prevState) =>
      prevState.map((photo, i) => (i === index ? { ...photo, showInfo: true } : photo))
    );
  };

  const resetImg = (index) => {
    setPhotos((prevState) =>
      prevState.map((photo, i) => (i === index ? { ...photo, showInfo: false } : photo))
    );
  };
return (
    {photos ,play ,pause ,popImg ,resetImg}
);
};

export { useAlbum };
