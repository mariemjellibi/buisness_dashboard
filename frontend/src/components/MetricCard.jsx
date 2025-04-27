// client/src/components/MetricCard.jsx
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function MetricCard({ title, value, trend }) {
  return (
    <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>{value}</Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
          <Box
            sx={{
              color: trend >= 0 ? 'success.main' : 'error.main',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {trend >= 0 ? (
              <TrendingUpIcon fontSize="small" />
            ) : (
              <TrendingDownIcon fontSize="small" />
            )}
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {Math.abs(trend)}%
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            vs last month
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}