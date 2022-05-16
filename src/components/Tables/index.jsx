import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  );
}

export default function QuickFilteringGrid() {

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 110,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 110,
    },
    {
      field: 'birthDate',
      headerName: 'Birth date',
      width: 110,
    },
    {
      field: 'startDate',
      headerName: 'Start date',
      width: 110,
    },
    {
      field: 'street',
      headerName: 'Street',
      width: 210,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 120,
    },
    {
      field: 'zip',
      headerName: 'Zip',
      width: 70,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 100,
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 100,
    },
  ];

  const employeesList = useSelector((state) => state.employee.employees)
  const [rows, setRows] = React.useState(employeesList);
  const [searchText, setSearchText] = React.useState('');

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = employeesList.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(employeesList);
  }, [employeesList]);

  return (
    <Box sx={{ height: 400, width: 0.80 }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columns}
        disableColumnMenu
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </Box>
  );
}
