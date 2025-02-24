import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

{/* Tabs */}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height:'90vh' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} sx={{ width: "48%" , marginX:"1%" , color: 'balck', borderRadius:'.4rem','&.Mui-selected': { backgroundColor: "rgb(17 24 39)", color: 'white'}}} />
          <Tab label="Features" {...a11yProps(1)} sx={{ width: "48%", marginX:"1%", color: 'black', borderRadius:'.4rem', '&.Mui-selected': { backgroundColor: "rgb(17 24 39)", color: 'white' }}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>Item One</CustomTabPanel>
      <CustomTabPanel value={value} index={1}>Item Two</CustomTabPanel>
    </Box>
  );
};



{/* Table */}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const createData = (name: string, value: number) => {
  return { name, value };
};

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];





const SingleProduct = () => {
  const { category } = useParams();

  return (
    <div>
      <header className="flex justify-center items-center pt-28 pb-28 w-full bg-gray-900">
        <h1 className="text-6xl font-extrabold text-white text-center">Category: {category}</h1>
      </header>

      <section className="w-[90vw] mx-auto py-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
        {/* Product Information Section */}
        <div className="sm:w-2/3 w-full p-6 rounded-lg">
          <h2 className="text-5xl font-bold text-zinc-800 max-md:text-4xl text-center sm:text-left">
            PRODUCT NAME
          </h2>
          <div className="h-1 mt-4 bg-sky-800 w-48 mx-auto sm:mx-0" />
          <p className="mt-6 text-base leading-7 text-zinc-500 text-center sm:text-left">
            Growmore Technologies Limited is a Zambian company specializing in agricultural machinery, 
            with branches across Zambia and Malawi. As the sole distributors of Farmtrac tractors, 
            we also offer agricultural motorbikes, implements, and irrigation systems.
          </p>
          
          {/* Main Product Image */}
          <div className="mt-6">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
              alt="Product" 
              className="w-full rounded-lg shadow-md" 
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="hidden sm:flex mt-4 justify-center sm:justify-start space-x-4">
            <img src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&" alt="Thumbnail 1" className="h-20 rounded-lg shadow-md cursor-pointer" />
            <img src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&" alt="Thumbnail 2" className="h-20 rounded-lg shadow-md cursor-pointer" />
            <img src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/598e82b070132be8bddb4579175e6ac351c8e0c59ed4375024d2758e675e2cbb?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&" alt="Thumbnail 3" className="h-20 rounded-lg shadow-md cursor-pointer" />
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="sm:w-1/3 w-full my-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <BasicTabs />
        </div>
      </section>

      <section className="h-[45vh] my-[5vh] w-[87vw] mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Product Information</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Feature</StyledTableCell>
                  <StyledTableCell align="right">Value</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.value}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </section>
    </div>
  );
};

export default SingleProduct;
