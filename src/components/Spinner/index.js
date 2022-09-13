import { CircularProgress } from '@mui/material';

const Spinner = (props) => {
  const { style } = props;
  return <CircularProgress style={{ ...style }} />;
};

export default Spinner;
