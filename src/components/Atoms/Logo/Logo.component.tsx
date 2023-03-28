import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Box px={4} py={1} textAlign='center'>
      <a href="/" className='nav-link'>
      <Typography
        fontSize={40}
        textAlign='center'
        fontWeight={600}
        textTransform='capitalize'
      >
        Modern Walk
      </Typography>
      </a>
    </Box>
  );
};

export default Logo;
