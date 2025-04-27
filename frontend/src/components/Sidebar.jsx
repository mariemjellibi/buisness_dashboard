import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Inventory, Receipt } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
        },
      }}
    >
      <List>
        {[
          { text: 'Dashboard', icon: <Dashboard />, path: '/' },
          { text: 'Users', icon: <People />, path: '/users' },
          { text: 'Products', icon: <Inventory />, path: '/products' },
          { text: 'Orders', icon: <Receipt />, path: '/orders' },
        ].map((item) => (
          <ListItem button key={item.text} component="a" href={item.path}>
            <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}