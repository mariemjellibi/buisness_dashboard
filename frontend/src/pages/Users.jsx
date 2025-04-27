// client/src/pages/Users.jsx
import { Box, TextField, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { 
    field: 'avatar', 
    headerName: '', 
    width: 60,
    renderCell: () => (
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'primary.main',
        }}
      />
    ),
  },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 2 },
  { 
    field: 'status', 
    headerName: 'Status', 
    flex: 1,
    renderCell: ({ value }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: value === 'active' ? 'success.main' : 'error.main',
        }}
      >
        <Box sx={{ 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          bgcolor: value === 'active' ? 'success.main' : 'error.main',
          mr: 1 
        }} />
        {value}
      </Box>
    )
  },
];

export default function Users() {
  return (
    <Box sx={{ height: 'calc(100vh - 100px)', p: 3 }}>
      <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
        <TextField
          label="Search users"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
        />
        <TextField
          select
          label="Status"
          size="small"
          defaultValue="all"
          sx={{ width: 150 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
      </Box>
      <DataGrid
        rows={[]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: 'background.default',
          },
        }}
      />
    </Box>
  );
}