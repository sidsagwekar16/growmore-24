import React, { useEffect, useState } from 'react';
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

const BasicTabs = ({ features, description }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} sx={{ width: "48%", marginX: "1%", color: 'black', borderRadius: '.4rem', '&.Mui-selected': { backgroundColor: "rgb(17 24 39)", color: 'white' } }} />
          <Tab label="Features" {...a11yProps(1)} sx={{ width: "48%", marginX: "1%", color: 'black', borderRadius: '.4rem', '&.Mui-selected': { backgroundColor: "rgb(17 24 39)", color: 'white' } }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>{features}</CustomTabPanel>
      <CustomTabPanel value={value} index={1}>{description}</CustomTabPanel>
    </Box>
  );
};

{/* Table */}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
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

const SingleProduct = () => {
  const { product } = useParams();

  const [productData, setProductData] = useState({
    product_name: "",
    product_spec: "",
    price: 0,
    quantity: 0,
    category: "",
    description: "",
    short_description: "",
    features: "",
    tags: [""],
    images: [""],
    headingData: [],
    rowData: [[]] 
  });

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/inventory/product/${product}`
      );
      const data = await response.json();
      setProductData(data)
      console.log("product data is",productData);
      
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className=''>
      <header className="flex justify-center items-center pt-28 pb-28 w-full bg-gray-900">
        <h1 className="text-6xl font-extrabold text-white text-center">Category: {product}</h1>
      </header>

      <section className="w-[90vw] mx-auto py-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
        {/* Product Information Section */}
        <div className="sm:w-2/3 w-full p-6 rounded-lg">
          <h2 className="text-5xl font-bold text-zinc-800 max-md:text-4xl text-center sm:text-left">
            {product}
          </h2>
          <div className="h-1 mt-4 bg-sky-800 w-48 mx-auto sm:mx-0" />
          <p className="mt-6 text-base leading-7 text-zinc-500 text-center sm:text-left">
          {productData.short_description}
          </p>
          
          {/* Main Product Image */}
          <div className="mt-6">
            <img 
              src={productData.images[0]}
              alt="Product" 
              className="w-full rounded-lg shadow-md" 
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="hidden sm:flex mt-4 justify-center sm:justify-start space-x-4">
            <img src={productData.images[1]} alt="Thumbnail 1" className="h-20 rounded-lg shadow-md cursor-pointer" />
            <img src={productData.images[1]} alt="Thumbnail 2" className="h-20 rounded-lg shadow-md cursor-pointer" />
            <img src={productData.images[1]} alt="Thumbnail 3" className="h-20 rounded-lg shadow-md cursor-pointer" />
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="sm:w-1/3 w-full my-auto h-max sm:h-[80vh] bg-gray-100 p-6 rounded-lg shadow-md">
          <BasicTabs features={productData.features} description={productData.description}/>
        </div>
      </section>

      <section className="h-max my-[5vh] w-[87vw] mx-auto">
        <h2 className="text-xl font-bold mb-4">Product Information</h2>
        <TableContainer component={Paper} style={{borderRadius:"10px"}}>
          <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {productData.headingData.map((item, index) => (
                  <StyledTableCell key={index} className=' bg-sky-950 bg-sky' colSpan={item.colspan}>{item.name}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.rowData.map((row, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <StyledTableCell key={cellIndex} colSpan={cell.colspan}>
                      {cell.name}
                    </StyledTableCell>
                  ))}
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
