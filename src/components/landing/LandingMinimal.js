// material
'use client';
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '@/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: 'Development',
    description:
      'Crafting opportunities, not just websites—Our clients receive business solutions in web development.',
  },
  {
    icon: '/static/icons/ic_seo.svg',
    title: 'SEO',
    description:
      'Elevate visibility, seize opportunities Our SEO service ensures business growth and success.',
  },
  {
    icon: '/static/icons/ic_make_brand.svg',
    title: 'Branding',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.',
  },
  {
    icon: '/static/icons/ic_development.svg',
    title: 'Google Ads',
    description:
      'Drive unparalleled success with Google Ads—Transform clicks into conversions, fueling exponential growth.',
  },
  {
    icon: '/static/icons/ads.svg',
    title: 'Meta Ads',
    description:
      'Captivate with meta precision—Our ads expertly redefine engagement, ensuring maximum impact.',
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main),
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              component='p'
              variant='overline'
              sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              Our Featured Services
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              variant='h2'
              sx={{ textAlign: 'center' }}>
              We ProvideAll Exclusive
              <br /> Services For Clients
            </Typography>
          </MotionInView>
        </Box>

        <Grid
          container
          spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid
              key={card.title}
              item
              xs={12}
              md={4}>
              <MotionInView variants={varFadeInUp}>
                <CardStyle
                  className={
                    (index === 0 && 'cardLeft') ||
                    (index === 1 ? 'cardCenter' : index === 4 && 'cardCenter')
                  }>
                  <CardIconStyle
                    src={card.icon}
                    alt={card.title}
                    sx={{
                      ...(index === 0 && {
                        filter: (theme) => shadowIcon(theme.palette.info.main),
                      }),
                      ...(index === 1 && {
                        filter: (theme) => shadowIcon(theme.palette.error.main),
                      }),
                    }}
                  />
                  <Typography
                    variant='h5'
                    paragraph>
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
