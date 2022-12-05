import { CircularProgress } from '@mui/material';

const Spinner = ({ customStyle = {}, ...props }) => {
  const defaultStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
  };

  return (
    <CircularProgress
      {...props}
      size={60}
      style={{
        ...defaultStyle,
        ...customStyle,
      }}
    />
  );
};

export default Spinner;
