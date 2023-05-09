import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import React from "react";

const FeaturedProducts = ({ type }) => {
 
  const {data, loading , error}= useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quae
          adipisci enim laboriosam unde nulla sequi, dignissimos sapiente animi,
          iste similique quibusdam magnam. Dolor quaerat obcaecati porro
          eligendi impedit omnis.
        </p>
      </div>
      <div className="bottom">
      {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
