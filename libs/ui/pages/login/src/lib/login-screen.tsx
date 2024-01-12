import { Box, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { SocialProviders, SocialProvidersProps } from './social-providers';
import { ConnectionContainer } from './connection-container';

export type LoginScreenProps = SocialProvidersProps;

export const LoginScreen: FC<LoginScreenProps> = (props) => {
  return (
    <ConnectionContainer>
      <Box>
        <Typography variant="h4" textAlign="center">
          Log In
        </Typography>
        <Typography variant="body2" textAlign="center" pt={0.5}>
          Connect to your Charity.Games account
          <br />
          <Link href={`/faq#do-i-need-an-account`}>
            <b>Do I need an account?</b>
          </Link>
        </Typography>
      </Box>

      <SocialProviders {...props} />

      <Typography variant="body2" textAlign="center" display="flex" gap={2}>
        New to Charity.Games?{' '}
        <Link href={`/signup`}>
          <b>Join now</b>
        </Link>
      </Typography>
    </ConnectionContainer>
  );
};