import React, {useEffect, useState} from 'react';
import { Card, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { alpha, styled } from '@mui/material/styles';
import { getIcon } from '../utils/Icons';

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2)`,
    borderRadius: 10,
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.text,
    backgroundColor: theme.palette.background
  }));
  
  const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.text,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
      theme.palette.primary.dark,
      0.24
    )} 100%)`
  }));

export default function PoolStatCard(props) { 
  return (
      <RootStyle>
          <IconWrapperStyle>
                <FontAwesomeIcon icon={getIcon(props.statName)} size='2x'/>
            </IconWrapperStyle>
            <Typography variant='h5'>
                {props.statName}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72, paddingTop: 1 }}>
                {props.statValue}
            </Typography>
      </RootStyle>
  )
}
