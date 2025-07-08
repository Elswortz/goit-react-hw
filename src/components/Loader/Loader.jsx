import { BeatLoader } from 'react-spinners';

const override = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  borderColor: 'grey',
  marginBottom: '20px',
};

function Loader({ loading }) {
  return (
    <BeatLoader
      color={'#ffffff'}
      loading={loading}
      cssOverride={override}
      size={25}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
