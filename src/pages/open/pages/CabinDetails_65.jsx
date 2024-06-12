import { useParams, Link } from 'react-router-dom';
import Header_65 from '../components/Header_65';
import CabinById_65 from '../features/cabin/CabinById_65';

const CabinDetails_65 = () => {
  const { id } = useParams();

  console.log('cabin id', id);
  return (
    <>
      <Header_65 />
      <CabinById_65 />
    </>
  );
};

export default CabinDetails_65;
