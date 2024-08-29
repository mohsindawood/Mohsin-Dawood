// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';

import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
//
import { varFadeInUp, MotionInView } from '@/components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

// ----------------------------------------------------------------------

export default function LandingAboutMe() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='center'>
          <Grid
            item
            xs={12}
            md={6}>
            <Box
              position='relative'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: 300,
                  height: 300,
                  zIndex: 3,
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

              <Box
                component='img'
                alt='image shape'
                src='/static/home/shape.svg'
                sx={{
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: 0,
                  zIndex: 1,
                  position: 'absolute',
                  height: 500,
                  filter: 'grayscale(1) opacity(98%)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  height: 400,
                  width: 400,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
                  borderRadius: '75% 75% 75% 10%',
                  backdropFilter: 'blur(50px)',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  component='p'
                  variant='overline'
                  sx={{ mb: 2, color: 'text.secondary' }}>
                  About Me
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant='h2'
                  sx={{ mb: 3 }}>
                  MD - Your Expert in Modern Web Solutions
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}>
                  Hi there! I&apos;m Mohsin Dawood, a dedicated Frontend Web
                  Developer from Pakistan with a passion for creating dynamic
                  and responsive websites. With a strong foundation in React.js,
                  Next.js, Material-UI, and Tailwind CSS, I bring your business
                  ideas to life, ensuring a seamless and engaging user
                  experience. Whether it&apos;s crafting a new website or
                  enhancing an existing project, I am committed to delivering
                  high-quality solutions tailored to your needs within your
                  desired timeline.
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <List>
                  {data.map((v, i) => (
                    <ListItem key={i}>
                      <ListItemIcon
                        sx={{
                          minWidth: 20,
                          mr: 0,
                          color: 'text.secondary',
                          svg: {
                            height: 10,
                            width: 10,
                          },
                        }}>
                        <FiberManualRecordIcon fontSize='small' />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          variant='body2'
                          color='text.secondary'>
                          {v}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

const data = [
  'Expertise in React.js, Redux, and modern frontend technologies like RxJS, Material-UI, and React-Bootstrap.',
  'Proficiency in JavaScript (ES5/ES6/ES7+), ensuring cutting-edge performance and interactivity.',
  'Extensive experience with jQuery and other essential tools to enhance your project.',
];
