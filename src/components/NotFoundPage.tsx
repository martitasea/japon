import React, {FC} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Stack from '@mui/material/Stack';

import LogoHorizontalNegativo from './logos/LogoHorizontalNegativo';

import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const NotFoundPage: FC = () => {

  const {t} = useTranslation();
  const navigate = useNavigate();

  return  <Box sx={styles.container}>
    <Stack direction="row" spacing={2} sx={{alignItems: 'center', mb: 2}}>
      <ErrorOutlineIcon sx={styles.icon} />
      <Typography variant="h2" gutterBottom sx={{...styles.text, color: 'secondary.main'}}>404</Typography>
    </Stack>
    <Typography variant="h5" gutterBottom sx={styles.text}>{t('404.pageNotFound')}</Typography>
    <Typography variant="h6" sx={styles.text}>{t('404.pageNotFoundMessage')}</Typography>
    <Button sx={styles.button} variant="contained" onClick={() => navigate('/')}>
      {t('404.goHome')}
    </Button>
    <Box sx={styles.logo}>
      <LogoHorizontalNegativo width="20vw"/>
    </Box>
  </Box>;
};
export default NotFoundPage;

const styles = {
  container: {
    bgcolor: 'primary.main',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    m: 4,
    bgcolor: 'common.white',
    color: 'primary.main',
    fontWeight: 700
  },
  icon: {
    fontSize: 50,
    color: 'secondary.main',
    mb: 2
  },
  text: {
    color: 'common.white',
    textAlign: 'center'
  },
  logo: {
    position: 'absolute',
    bottom: 8,
    left: 8
  }
};