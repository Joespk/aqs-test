'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPicture } from '../types/Dto';

const useImage = () => {
  const [images, setImages] = useState<IPicture[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.thecatapi.com/v1/images/search?limit=10',
        ); // ใช้ Axios แทน fetch
        const data = response.data;
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return { images };
};

export default useImage;
