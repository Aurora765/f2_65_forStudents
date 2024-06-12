import { useQuery } from '@tanstack/react-query';
// import { getCabinById } from '../../../../services/apiCabins';

export const useCabinById = (id) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['Cabins_65'],
    QueryFn: getCabins(1),
  });
  return { data, isLoading, error };
};
