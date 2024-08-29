import Link from 'next/link';
// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '@/components/animate';
import { HiMail } from 'react-icons/hi';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[900],
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle>
      <Container
        maxWidth='lg'
        sx={{ position: 'relative' }}>
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant='h3'
              sx={{ mb: 3, color: 'common.white' }}>
              Still have questions?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography sx={{ color: 'common.white', mb: 5 }}>
              Please describe your case to receive the most accurate advice
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Button
              target='_blank'
              component={Link}
              href='mailto:mohsindawood58@gmail.com?subject=[Feedback] from Customer'
              startIcon={<HiMail />}
              variant='contained'>
              Contact Us
            </Button>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
