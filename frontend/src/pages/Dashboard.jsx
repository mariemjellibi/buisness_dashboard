import { Grid, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import MetricCard from '../components/MetricCard';

const data = [
  { date: 'Mon', sales: 4000 },
  { date: 'Tue', sales: 3000 },
  { date: 'Wed', sales: 5000 },
  { date: 'Thu', sales: 2780 },
  { date: 'Fri', sales: 1890 },
  { date: 'Sat', sales: 2390 },
  { date: 'Sun', sales: 3490 },
];

export default function Dashboard() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} md={4}>
        <MetricCard title="Total Sales" value="$24,500" trend={12.5} />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard title="Active Users" value="1,234" trend={-5.2} />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard title="Pending Orders" value="56" trend={8.3} />
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ height: 400 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Sales Trend</Typography>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={data}>
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ fill: '#6366f1' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


