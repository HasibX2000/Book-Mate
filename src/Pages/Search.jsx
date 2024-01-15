import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: products } = useSearch(queryTerm);
  const [loading, setLoading] = useState();

  //   console.log(data);
  useEffect(() => {
    document.title = `Search Results For ${queryTerm}`;
  });

  return (
    <div className="container mx-auto mt-10">
      {!loading ? (
        <div className="my-3">
          {products.length > 0 ? (
            <p>Search results for &lsquo;{queryTerm}&rsquo;</p>
          ) : (
            <div className="text-3xl">
              No result found for &lsquo;{queryTerm}&rsquo;
            </div>
          )}
        </div>
      ) : (
        "loading..."
      )}
      {!loading ? (
        <section className="grid md:grid-cols-3 gap-10">
          {products &&
            products.products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </section>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Search;
