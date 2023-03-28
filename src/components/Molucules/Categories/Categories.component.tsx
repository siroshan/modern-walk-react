import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { CategoryCard } from '../../Atoms/CategoryCard';

const categories = [
  {
    title: "men's clothing",
    link: 'mens-clothing',
  },
  {
    title: "women's clothing",
    link: 'womens-clothing',
  },
];

const Categories = () => {
  return (
    <Box mt={4}>
      <Typography variant='h4' mb={2}>
        Categories
      </Typography>
      <Stack direction='row' alignItems='center' spacing={4}>
        {categories.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
