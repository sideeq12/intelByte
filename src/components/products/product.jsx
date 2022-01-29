import React from 'react';
import "./product.css"
import Box from "../box.png"

import { DB } from './ProductList';

    
export const Products = ()=>{
    return(
        <div className='productList'>
        {DB.map((data)=><div className='product-cart'>
            <img src={data.image} alt='product image' />
            <div className='product_description'>
                    <label className='desc'>{data.name}</label> 
                    <text>{data.price}</text>
                    <strike>{data.prev}</strike>
                    <label className='count'>{data.count} items left</label>
                    <progress id="file" value="32" max="100"> 32% </progress>
                </div>
        </div>)}
        <div className='special'>
            <div className='spec'>
                <div className='desc'>
                    <label className='ct'> Christmas </label>
                    <text>Special</text>
                    <label className='btn'>Save up to</label>
                    <b>50%</b>
                    <label className='shop'>Shop now</label>
                </div>
                <img src={Box} alt='description' />
            </div>
            <div className='spec'>
                <div className='desc'>
                    <label className='ct'> Christmas </label>
                    <text>Special</text>
                    <label className='btn'>Save up to</label>
                    <b>50%</b>
                    <label className='shop'>Shop now</label>
                </div>
                <img src={Box} alt='description' />
            </div>
            <div className='spec'>
                <div className='desc'>
                    <label className='ct'> Christmas </label>
                    <text>Special</text>
                    <label className='btn'>Save up to</label>
                    <b>50%</b>
                    <label className='shop'>Shop now</label>
                </div>
                <img src={Box} alt='description' />
            </div>
        </div>
        </div>
    )
}
