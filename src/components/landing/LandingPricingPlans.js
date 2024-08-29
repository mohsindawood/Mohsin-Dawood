// // material
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
//
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '@/assets';
import { PricingPlanCard } from './pricing';

// ----------------------------------------------------------------------

const PLANS = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 0,
    caption: 'forever',
    lists: [
      { text: 'Web application', isAvailable: true },
      { text: '100% Open-source code', isAvailable: true },
      { text: 'Payment gateways', isAvailable: true },
      { text: 'Basic support', isAvailable: true },
      { text: 'Email templates', isAvailable: true },
      { text: 'Free installation', isAvailable: false },
      { text: 'dark-mode-theme', isAvailable: false },
      { text: 'Multilingual', isAvailable: false },
      { text: 'Multi-currency', isAvailable: false },
      { text: 'APIs documentation', isAvailable: false },
      { text: 'Domain and hosting included', isAvailable: false },
      { text: 'Lifetime updates', isAvailable: false },
      { text: 'Customization', isAvailable: false },
    ],
    labelAction: 'current plan',
  },
  {
    subscription: 'starter',
    icon: <PlanStarterIcon />,
    price: 4.99,
    caption: 'saving $24 a year',
    lists: [
      { text: 'Web application', isAvailable: true },
      { text: '100% Open-source code', isAvailable: true },
      { text: 'Payment gateways', isAvailable: true },
      { text: 'Basic support', isAvailable: true },
      { text: 'Email templates', isAvailable: true },
      { text: 'Free installation', isAvailable: true },
      { text: 'dark-mode-theme', isAvailable: true },
      { text: 'Multilingual', isAvailable: true },
      { text: 'Multi-currency', isAvailable: true },
      { text: 'APIs documentation', isAvailable: false },
      { text: 'Domain and hosting included', isAvailable: false },
      { text: 'Lifetime updates', isAvailable: false },
      { text: 'Customization', isAvailable: false },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'saving $124 a year',
    lists: [
      { text: 'Web application', isAvailable: true },
      { text: '100% Open-source code', isAvailable: true },
      { text: 'Payment gateways', isAvailable: true },
      { text: 'Basic support', isAvailable: true },
      { text: 'Email templates', isAvailable: true },
      { text: 'Free installation', isAvailable: true },
      { text: 'dark-mode-theme', isAvailable: true },
      { text: 'Multilingual', isAvailable: true },
      { text: 'Multi-currency', isAvailable: true },
      { text: 'APIs documentation', isAvailable: true },
      { text: 'Domain and hosting included', isAvailable: true },
      { text: 'Lifetime updates', isAvailable: true },
      { text: 'Customization', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          align='center'
          paragraph>
          The best work solution, for the best price.
        </Typography>
        <Typography
          align='center'
          sx={{ color: 'text.secondary', mb: 5 }}>
          Choose your plan and make modern online conversation magic
        </Typography>

        <Grid
          container
          spacing={3}>
          {PLANS.map((card, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={card.subscription}>
              <PricingPlanCard
                card={card}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
