// material
import { alpha, useTheme, styled } from '@mui/material/styles';
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
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : 'none',
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

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor:
    theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
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

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={5}
          justifyContent='center'>
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
                  Web Development
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant='h2'
                  sx={{ mb: 3 }}>
                  Web Design & Development
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white',
                  }}>
                  A website is the most important channel to showcase your brand
                  to customers and give them the best experience possible – our
                  job is to make it look good and work smoothly on any device.
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

          <Grid
            item
            xs={12}
            md={6}
            dir='ltr'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
              }}>
              {[...Array(3)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  threshold={0.72}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate),
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight
                        ? theme.palette.grey[600]
                        : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute',
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none',
                    }),
                  }}>
                  <Box
                    component='img'
                    alt={`screen ${index + 1}`}
                    // src={`/static/home/screen_${isLight ? 'light' : 'dark'}_${
                    //   index + 1
                    // }.png`}
                    src={'/static/home/screen_light_22.png'}
                  />
                </ScreenStyle>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

const data = [
  'Business Website ',
  'E-Commerce Website',
  'E- Learning Website',
  'Portfolio Website',
  'Landing Page Design',
];
