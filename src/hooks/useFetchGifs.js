import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'
export const useFetchGifs = ( category ) => {
  // console.log(category)
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    // console.log(category)
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  };
  useEffect(() => {
    getImages();
  }, []); // se dispara solo la primera vez que se renderiza el componente
  return {
    images, 
    isLoading
  };
};
