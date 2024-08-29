// // material
// import { alpha, styled } from '@mui/material/styles';
// import { Box, Container, Typography, useTheme } from '@mui/material';
// //
// import { varFadeInUp, MotionInView } from '@/components/animate';

// // ----------------------------------------------------------------------

// const IMG = [...Array(10)].map(
//   (_, index) => `/static/home/clean-${index + 1}.png`
// );

// const RootStyle = styled('div')(({ theme }) => ({
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   maxWidth: 520,
//   margin: 'auto',
//   textAlign: 'center',
//   [theme.breakpoints.up('md')]: {
//     zIndex: 11,
//     textAlign: 'left',
//     position: 'absolute',
//   },
// }));

// // ----------------------------------------------------------------------

// export default function LandingCleanInterfaces() {
//   const theme = useTheme();
//   const isLight = theme.palette.mode === 'light';

//   return (
//     <RootStyle>
//       <Container maxWidth='lg'>
//         <ContentStyle>
//           <MotionInView variants={varFadeInUp}>
//             <Typography
//               component='p'
//               variant='overline'
//               sx={{ mb: 2, color: 'text.secondary' }}>
//               clean & clear
//             </Typography>
//           </MotionInView>

//           <MotionInView variants={varFadeInUp}>
//             <Typography
//               variant='h2'
//               paragraph
//               sx={{
//                 ...(!isLight && {
//                   textShadow: (theme) =>
//                     `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
//                 }),
//               }}>
//               Beautiful, modern and clean user interfaces
//             </Typography>
//           </MotionInView>
//         </ContentStyle>

//         <Box sx={{ position: 'relative' }}>
//           {IMG.map((_, index) => (
//             <MotionInView
//               key={index}
//               threshold={index / 15}
//               variants={varFadeInUp}
//               sx={{
//                 top: 0,
//                 left: 0,
//                 position: 'absolute',
//                 ...(index === 0 && { zIndex: 8 }),
//                 ...(index === 9 && { position: 'relative', zIndex: 9 }),
//               }}>
//               <Box
//                 component='img'
//                 src={`/static/home/clean-${index + 1}.png`}
//               />
//             </MotionInView>
//           ))}
//         </Box>
//       </Container>
//     </RootStyle>
//   );
// }
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
    icon: '/static/mock-images/covers/cover_1.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_2.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_3.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_4.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_5.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_6.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_7.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
  {
    icon: '/static/mock-images/covers/cover_8.jpg',
    title: 'UI & UX Design',
    description:
      "Designing impactful experiences, shaping perception—Our graphics speak your brand's unique language",
  },
];

function MemberCard({ card }) {
  const { title, description, icon } = card;
  return (
    <Card
      sx={{
        p: 1,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
      }}>
      <Box
        component='img'
        src={icon}
        sx={{ width: '100%', borderRadius: 1.5 }}
      />
      <Typography
        variant='subtitle1'
        sx={{ mt: 2, mb: 0.5 }}>
        {title}
      </Typography>
      <Typography
        variant='body2'
        sx={{ mb: 2, color: 'text.secondary' }}>
        {description}
      </Typography>
    </Card>
  );
}

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

export default function LandingCleanInterfaces() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Box sx={{ mb: { xs: 8 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              component='p'
              variant='overline'
              sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              Our Best Projects
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              variant='h2'
              sx={{ textAlign: 'center' }}>
              Beautiful, modern and clean user interfaces
            </Typography>
          </MotionInView>
        </Box>

        <Grid
          container
          spacing={isDesktop ? 4 : 2}>
          {CARDS.map((card, index) => (
            <Grid
              key={card.title}
              item
              xs={12}
              md={3}>
              <MotionInView variants={varFadeInUp}>
                <MemberCard card={card} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
