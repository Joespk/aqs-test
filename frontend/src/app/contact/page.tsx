'use client';

import { useDispatch, useSelector } from 'react-redux';
import Contactplace from '../components/Contact/Contactplace';
import { RootState, SetActiveLinkAction } from '../redux/types/types';
import { useEffect } from 'react';
import { setActiveLink } from '../redux/action/actionsLink';
import { Dispatch } from '@reduxjs/toolkit';

export default function Contact() {
  const dispatch: Dispatch<SetActiveLinkAction> = useDispatch();
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink,
  );

  useEffect(() => {
    // เมื่อโหลดหน้า Contact ให้ setActiveLink ที่ activeLink เท่ากับ '/contact'
    dispatch(setActiveLink('/contact'));
  }, [dispatch]);

  return (
    <div className="container flex flex-col gap-10 max-w-[1400px] items-center">
      <Contactplace />
    </div>
  );
}
