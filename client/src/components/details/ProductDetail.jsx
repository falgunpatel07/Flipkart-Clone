

import { Typography,Box, TableBody,Table,TableRow, TableCell, styled} from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
font-size: 14px;
vertical-align: baseline;
& > p{
    font-size: 14px;
    margin-top: 10px;
}
`;

const StyledBadge = styled(Badge)`
margin-right: 10px;
color: #00CC00;
font-size: 15px;
`;

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td{
    font-size: 14px;
    margin-top: 10px;
    border: none;
}
`
const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
        <>
    
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop: 5, color:'#878787',fontSize: 14}}>
        8 Ratings & 1 Reviews
        <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20}} /></Box>    
        </Typography> 
        <Typography>
            <Box component="span" style={{fontsize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: '#878787'}}>₹{product.price.mrp}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography> <StyledBadge/>Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
            <Typography><StyledBadge/>Purchase now & get 1 surprise cashback coupon in Future</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by{date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                <TableCell style={{ color: '#878787'}}>Warranty</TableCell>
                <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                <TableCell style={{ color: '#878787'}}>Seller</TableCell>
                <TableCell>
                <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                <Typography>GST invoice available</Typography>
                <Typography>view more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                     <img src={adURL} style={{width: 390}} alt="flipkartpoints" />
                    </TableCell>
                </ColumnText>               
                 <ColumnText>
                <TableCell style={{ color: '#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    
        </>
    )
}

export default ProductDetail;