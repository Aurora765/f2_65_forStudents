import { useState, useEffect } from 'react';
import { useCabinById } from './useCabinById';
import { FaUsers } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPrivacyTip } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';

import {
  addCabins,
  updateBooking,
  deleteBooking,
} from '../../../../services/apiBookings';

const CabinById_65 = () => {
  const { id } = useParams();
  console.log('cabin id', id);
  const { getCabinById, cabin, isLoading } = useCabinById(id);

  useEffect(() => {
    getCabinById(id);
  }, [getCabinById, id]);

  return (
    <>
      <CabinsList />
    </>
  );
};

export default CabinById_65;
