import React from 'react';
import { capitalCase } from 'change-case';
import { motion } from 'framer-motion';
// material
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel,
  Card,
  CardContent,
} from '@mui/material';
// hooks
import useSettings from '@/hooks/useSettings';
// Marquee
import Marquee from 'react-fast-marquee';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '@/components/animate';
import { SKILLS_DATA } from './data';
import Image from 'next/image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${theme.palette.grey[300]} 0%, ${alpha(
          theme.palette.grey[300],
          0
        )} 100%)`
      : 'none',
}));

// ----------------------------------------------------------------------

export default function LandingThemeColor() {
  const { themeColor, onChangeColor, colorOption } = useSettings();

  return (
    <RootStyle>
      <Container
        maxWidth='lg'
        sx={{ position: 'relative' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            component='p'
            variant='overline'
            sx={{
              mb: 2,
              color: 'text.disabled',
              display: 'block',
              textAlign: 'center',
            }}>
            choose your style
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            variant='h2'
            sx={{ mb: 3, textAlign: 'center' }}>
            Theme color & Skills
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography
            sx={{
              textAlign: 'center',
              color: (theme) =>
                theme.palette.mode === 'light'
                  ? 'text.secondary'
                  : 'text.primary',
            }}>
            Express your own style with just one click.
          </Typography>
        </MotionInView>

        <RadioGroup
          name='themeColor'
          value={themeColor}
          onChange={onChangeColor}
          sx={{ my: 5 }}>
          <Stack
            direction={{ xs: 'row', lg: 'column' }}
            justifyContent='center'
            spacing={1}
            sx={{
              position: { lg: 'absolute' },
              zIndex: 2,
              right: { lg: 0 },
              top: { lg: '50%' },
            }}>
            {colorOption.map((color) => {
              const colorName = color.name;
              const colorValue = color.value;
              const isSelected = themeColor === colorName;

              return (
                <Tooltip
                  key={colorName}
                  title={capitalCase(colorName)}
                  placement='right'>
                  <CardActionArea
                    sx={{
                      color: colorValue,
                      borderRadius: '50%',
                      width: 32,
                      height: 32,
                    }}>
                    <Box
                      sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        ...(isSelected && {
                          borderStyle: 'solid',
                          borderWidth: 4,
                          borderColor: alpha(colorValue, 0.24),
                        }),
                      }}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: colorValue,
                          ...(isSelected && {
                            width: 14,
                            height: 14,
                            transition: (theme) =>
                              theme.transitions.create('all', {
                                easing: theme.transitions.easing.easeInOut,
                                duration: theme.transitions.duration.shorter,
                              }),
                          }),
                        }}
                      />
                      <FormControlLabel
                        label=''
                        value={colorName}
                        control={<Radio sx={{ display: 'none' }} />}
                        sx={{
                          top: 0,
                          left: 0,
                          margin: 0,
                          width: 1,
                          height: 1,
                          position: 'absolute',
                        }}
                      />
                    </Box>
                  </CardActionArea>
                </Tooltip>
              );
            })}
          </Stack>
        </RadioGroup>
        <Box sx={{ position: 'relative' }}>
          {SKILLS_DATA.map((section) => (
            <Box
              sx={{ mt: 4 }}
              key={Math.random()}>
              <MotionInView
                key={section.sectionName}
                variants={varFadeInUp}>
                <Typography
                  variant='h5'
                  mb={2}>
                  {section.sectionName}
                </Typography>
              </MotionInView>
              <Box
                position='relative'
                mr={2}>
                <Marquee>
                  {section.skills.map((pill, index) => (
                    <React.Fragment key={index}>
                      <SkillPill
                        name={pill.name}
                        icon={pill.icon}
                        isIcon={pill.isIcon}
                      />
                    </React.Fragment>
                  ))}
                </Marquee>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

// SkillPill component
const SkillPill = ({ name, icon, isIcon }) => {
  return (
    <Card
      sx={{
        py: 1,
        px: 2,
        mx: 2,
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
      }}>
      <Stack
        direction='row'
        alignItems='center'
        spacing={1}>
        {isIcon ? (
          icon
        ) : (
          <Image
            src={icon}
            alt='icons'
            height={32}
            width={32}
            style={{
              objectFit: 'contain',
            }}
          />
        )}

        <Typography variant='subtitle1'>{name}</Typography>
      </Stack>
    </Card>
  );
};
