'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import instagramFill from '@iconify/icons-uil/instagram';
import githubFill from '@iconify/icons-uil/github-alt';
// material
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  IconButton,
  Grid,
  Container,
  Typography,
  Stack,
  alpha,
} from '@mui/material';
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from '../animate';
import ImageFlip from '../animationImage';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(145deg, ${
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[700]
  }, ${theme.palette.background.paper})`,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle
        initial='initial'
        animate='animate'
        variants={varWrapEnter}>
        <Container maxWidth='lg'>
          <Box position='relative'>
            <Grid
              container
              alignItems='center'
              spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                md={7}>
                <Stack spacing={5}>
                  <motion.div variants={varFadeInRight}>
                    <Typography variant='h1'>
                      Start a new project with
                      <Typography
                        component='span'
                        variant='h1'
                        sx={{ color: 'primary.main' }}>
                        &nbsp;
                        <Typewriter
                          component='span'
                          options={{
                            strings: ['Mohsin Dawood', 'Mohsin Dawood'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </Typography>
                    </Typography>
                  </motion.div>

                  <motion.div variants={varFadeInRight}>
                    <Typography>
                      Mohsin Dawood The starting point for your next project
                      based on easy-to-customize Material-UI © helps you build
                      apps faster and better.We deliver high-quality business
                      websites and help companies grow.
                    </Typography>
                  </motion.div>
                  <Stack
                    direction='row'
                    spacing={1.5}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}>
                    <motion.img
                      variants={varFadeInRight}
                      src='/static/home/ic_figma.svg'
                    />
                    <motion.img
                      variants={varFadeInRight}
                      src='/static/home/ic_material.svg'
                    />
                    <motion.img
                      variants={varFadeInRight}
                      src='/static/home/ic_react.svg'
                    />
                    <motion.img
                      variants={varFadeInRight}
                      src='/static/home/ic_js.svg'
                    />
                    <motion.img
                      variants={varFadeInRight}
                      src='/static/home/ic_ts.svg'
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}>
                <Stack
                  alignItems='center'
                  justifyContent='center'
                  spacing={5}>
                  <Box
                    sx={{
                      width: 300,
                      height: 300,
                    }}>
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: (theme) =>
                          alpha(theme.palette.background.paper, 0.3),
                        boxShadow: 'rgba(145, 158, 171, 0.25) 0px 6px 16px',
                        backdropFilter: 'blur(50px)',
                        borderRadius: '12px',
                        '&:after': {
                          content: "''",
                          display: 'block',
                          pb: { md: '100%', xs: '100%' },
                        },
                      }}>
                      <Image
                        src='/static/home/main-img.png'
                        alt='main-img'
                        fill
                        objectFit='contain'
                      />
                    </Box>
                  </Box>

                  <Stack
                    direction='row'
                    spacing={1.5}
                    justifyContent={'center'}>
                    {SOCIALS.map((social) => (
                      <IconButton
                        key={social.name}
                        color='primary'
                        sx={{
                          p: 1,
                          bgcolor: (theme) =>
                            alpha(theme.palette.background.paper, 0.5),
                          backdropFilter: 'blur(50px)',
                          ':hover': {
                            bgcolor: (theme) =>
                              alpha(theme.palette.background.paper, 0.3),
                          },
                        }}>
                        <Icon
                          icon={social.icon}
                          width={16}
                          height={16}
                        />
                      </IconButton>
                    ))}
                  </Stack>
                </Stack>
                <Box
                  component='img'
                  alt='image shape'
                  src='/static/home/shape.svg'
                  sx={{
                    top: 0,
                    right: -10,
                    bottom: 0,
                    zIndex: -2,
                    my: 'auto',
                    position: 'absolute',
                    height: 500,

                    filter: 'grayscale(1) opacity(98%)',
                    display: { xs: 'none', md: 'block' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -10,
                    right: 0,
                    zIndex: -1,
                    height: 400,
                    width: 400,
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
                    borderRadius: '75% 75% 10% 75%',
                    backdropFilter: 'blur(50px)',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
const SOCIALS = [
  { name: 'FaceBook', icon: facebookFill },
  { name: 'Google', icon: googleFill },
  { name: 'Linkedin', icon: linkedinFill },
  { name: 'Github', icon: githubFill },
  { name: 'Instagram', icon: instagramFill },
];
