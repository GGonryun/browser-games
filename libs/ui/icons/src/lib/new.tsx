import { createSvgIcon } from '@mui/material';

const name = 'New-Rectangle';

export const NewRectangle = createSvgIcon(
  <svg
    fill="#000000"
    // I learned that by removing height/weight these icons work with createSvgIcon
    viewBox="0 0 36 36"
    version="1.1"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>new-solid</title>
    <path d="M34.11,24.49l-3.92-6.62,3.88-6.35A1,1,0,0,0,33.22,10H2a2,2,0,0,0-2,2V24a2,2,0,0,0,2,2H33.25A1,1,0,0,0,34.11,24.49Zm-23.6-3.31H9.39L6.13,16.84v4.35H5V15H6.13l3.27,4.35V15h1.12ZM16.84,16H13.31v1.49h3.2v1h-3.2v1.61h3.53v1H12.18V15h4.65Zm8.29,5.16H24l-1.55-4.59L20.9,21.18H19.78l-2-6.18H19l1.32,4.43L21.84,15h1.22l1.46,4.43L25.85,15h1.23Z"></path>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
  </svg>,
  name
);
