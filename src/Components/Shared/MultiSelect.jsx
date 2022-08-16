import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const product_list = [
  { title: 'Apple' },
  { title: 'Mango' },
  { title: 'Banana' },
  { title: 'Coffee' },
  { title: 'Tea' },
];

export default function MultiSelect() {
  return (
    <Stack spacing={3} sx={{ width: 300 }} className='!mx-0 !my-4 !w-full'>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={product_list}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Product Category"
            placeholder="Product Category"
          />
        )}
      />
    </Stack>
  );
}


