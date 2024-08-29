'use client';
import React from 'react';
// componets
import { styled } from '@mui/material/styles';
import LandingHero from '@/components/home/LandingHero';

import {
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  AboutTestimonials,
  LandingCleanInterfaces,
  LandingHugePackElements,
} from '@/components/landing';
import LandingAboutMe from '@/components/landing/AboutMe';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

export default function Page() {
  return (
    <>
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingAboutMe />
        <LandingHugePackElements />
        <LandingCleanInterfaces />
        <AboutTestimonials />
        <LandingThemeColor />
        <LandingDarkMode />
      </ContentStyle>
    </>
  );
}
