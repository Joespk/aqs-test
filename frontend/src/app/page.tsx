'use client';

import { Dispatch } from '@reduxjs/toolkit';
import Card from './components/Home/Card';
import Placecontact from './components/Home/Placecontact';
import Placehoder from './components/Home/Placehorder';
import { IPicture } from './types/Dto';
import useImage from './็hook/useImage';
import { RootState, SetActiveLinkAction } from './redux/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setActiveLink } from './redux/action/actionsLink';

export default function Home() {
  const { images } = useImage();
  const dispatch: Dispatch<SetActiveLinkAction> = useDispatch();
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink,
  );

  useEffect(() => {
    dispatch(setActiveLink('/'));
    localStorage.setItem(
      'activeLinkState',
      JSON.stringify({ activeLink: '/' }),
    );
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-10 max-w-[1400px] items-center">
      <Placehoder />
      <div className="grid grid-cols-2 gap-10  animated fadeInUp">
        {images &&
          images.map((image: IPicture) => (
            <Card key={image.id} image={image} />
          ))}
      </div>
      <Placecontact />
      <button className="max-h-10 flex justify-center p-4 items-center bg-black text-white font-extralight text-sm rounded-full fixed top-[88%]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6H13V10.079L16.3413 7.73938L17.4885 9.37768L13.7434 12L17.4885 14.6223L16.3413 16.2606L13 13.921V18H11V13.921L7.65864 16.2606L6.51148 14.6223L10.2565 12L6.51147 9.37769L7.65863 7.73938L11 10.079V6Z"
            fill="currentColor"
          />
        </svg>
        Shop
      </button>
    </div>
  );
}
