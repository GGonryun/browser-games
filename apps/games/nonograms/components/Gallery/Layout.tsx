import { Box } from '@mui/material';
import { backgroundColor } from '@worksheets/ui-games';
import { FC, ReactNode } from 'react';
import { assets } from '../../util/assets';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    className="gallery-layout"
    sx={{
      position: 'absolute',
      userSelect: 'none',
      touchAction: 'none',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      px: 2,
      py: 1,
      backgroundColor: (theme) => backgroundColor(theme),
      backgroundImage: `url("${assets.background}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}
  >
    {children}
  </Box>
);
