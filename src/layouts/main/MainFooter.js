'use client';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'next/link';
// material
import { styled } from '@mui/material/styles';
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Twitter', icon: twitterFill },
];

const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@minimals.cc', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container
        maxWidth='lg'
        sx={{ pt: 4 }}>
        <Stack
          spacing={1.5}
          pb={2}
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <Typography
            variant='h5'
            color='primary'>
            MD
          </Typography>
          <Stack
            spacing={1.5}
            direction='row'
            sx={{ mt: 5, mb: { xs: 5, md: 0 } }}>
            {SOCIALS.map((social) => (
              <IconButton
                key={social.name}
                color='primary'
                sx={{ p: 1 }}>
                <Icon
                  icon={social.icon}
                  width={16}
                  height={16}
                />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Divider />
        <Typography
          component='p'
          variant='body2'
          sx={{
            py: 3,
            fontSize: 13,
            textAlign: 'center',
          }}>
          © 2024 MD Protfolio. All rights reserved.
        </Typography>
      </Container>
    </RootStyle>
  );
}
