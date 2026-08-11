import { Theme } from '@mui/material';

export const rowSx = (theme: Theme) => ({
  display: 'flex',
  gap: theme.layout.gap,
  minWidth: 0,
});

export const spreadSx = (theme: Theme) => ({
  ...rowSx(theme),
  justifyContent: 'space-between',
  width: '100%',
});
