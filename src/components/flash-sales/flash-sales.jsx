import React from "react";
import "./flashsales.css"
import shoe from "./shoe.png"

const DB = [{
    Header : "32' spart TV",
    text: "(Android- 1366*768px)",
    price : "90,000",
    prev : "121,000",
    image : shoe
},{
    Header : "32' spart TV",
    text: "(Android- 1366*768px)",
    price : "90,000",
    prev : "121,000",
    image : shoe
}]

export const Flash = ()=>{

    return(
        <div className="flashsales">
            <div className="bar">
                <label>Flash Sales</label>
                <a>see all</a>
            </div>
            <div className="products">
            {DB.map((data)=><div className="product">
                <div className="description">
                    <h4>{data.Header}</h4>
                    <p>{data.text}</p>
                    <button>{data.price}</button>
                    <strike>{data.prev}</strike>
                </div>
                <img src={data.image} alt="Product image" />
            </div>)}
            </div>
        </div>
    )
}
