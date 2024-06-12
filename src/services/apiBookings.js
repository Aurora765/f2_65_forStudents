import supabase, { supabaseUrl } from './supabase';

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from('bookings_65')
    .select('*, cabins_54(*), guests_65(*)')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};
