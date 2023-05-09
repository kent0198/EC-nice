import React, { useState } from "react";
import List from "../../components/List/List";
import "./Products.scss";
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId=(useParams().id); // lấy id của categories  
  
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort,setSort]=useState("asc");

  const [selectedSubCats, setSelectedSubCats] = useState([]); // useState này dùng để lưu cái id của product category

  const{data, loading , error}= useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
    )//$eq là phép bằng

  const handleChange=(e)=>{
    const value=e.target.value;
    const isChecked=e.target.checked;
    setSelectedSubCats(
      isChecked 
      ?[...selectedSubCats,value]
      :selectedSubCats.filter((item)=>item!==value)
      );
  }
  
  return (
    <div className="products">
      
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
              <div className="inputItem" key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                  <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
          ))}
         
        
          <div className="filterItem">
            <h2>Sort by</h2>
              <div className="inputItem">
                <input type="radio" id="asc" value="asc" name="price" checked={sort === "asc"} onChange={(e)=>setSort("asc")}  className={sort === "asc" ? "checked" : ""} />
                <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">
                <input type="radio" id="desc" value="desc" name="price" checked={sort === "desc"} onChange={(e) => setSort("desc")} className={sort === "desc" ? "checked" : ""} />
                <label htmlFor="desc">Price (Highest first)</label>
              </div>
          </div>
        </div>
        </div>

        <div className="right">
          <img className="catImg" 
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="" />
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      
    </div>
  );
};

export default Products;
