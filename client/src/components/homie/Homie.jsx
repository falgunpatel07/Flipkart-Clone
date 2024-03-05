import { useEffect } from "react";
import { Fragment } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import {Box,styled} from '@mui/material';
import {getProducts} from '../redux/actions/productActions';
import MidSlide from './MidSlide';
import { useDispatch,useSelector } from 'react-redux';
import MidSection from "./MidSection";
import Slide from "./Slide";
const Component = styled(Box)`
padding: 10px;
background: #F2F2F2;
`
const Homie =() =>{

     const {products} = useSelector(state => state.getProducts);
     console.log(products);
      const dispatch = useDispatch();

      useEffect(()=> {
             dispatch(getProducts())
      },[dispatch])


    return(
        <Fragment>
       <NavBar/>
       <Component>
               <Banner/>
               <MidSlide products= {products} title="Deal of the Day" timer={true}/>
               <MidSection />
               <Slide products= {products} title="Suggesting Items" timer={false}/>
               <Slide products= {products} title="Tops Selection" timer={false}/>
               <Slide products= {products} title="Recommended Items" timer={false}/>
               <Slide products= {products} title="Trending Offers" timer={false}/>
               <Slide products= {products} title="Season's top picks" timer={false}/>
               <Slide products= {products} title="Top Deals on Accessories" timer={false}/>
        </Component>
              
       </Fragment>
    )
}

export default Homie;