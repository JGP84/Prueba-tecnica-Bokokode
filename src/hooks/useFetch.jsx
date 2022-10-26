import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [dataFilter, setDataFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingFilter, setLoadingFilter] = useState(true);
  const [error, setError] = useState(null);

  let config = {
    method: "post",
    url: "https://technical-frontend-api.bokokode.com/api/products",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  let configFilter = {
    method: "post",
    url: "https://technical-frontend-api.bokokode.com/api/products",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      key: "price",
      type: "ASC",
      categories: ["pets"],
    },
  };

  useEffect(() => {
    /* Data */
    axios(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    /* DataFilter */
    axios(configFilter)
      .then((response) => {
        setDataFilter(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoadingFilter(false);
      });
  }, [url]);

  const reFetch = () => {
    axios(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getFeaturedProduct = () => {
    const products = data.data.data;

    const result = products.filter((product) => product.featured === true);

    return result;
  };

  return {
    data,
    dataFilter,
    loading,
    loadingFilter,
    error,
    reFetch,
    featuredProduct,
    getFeaturedProduct,
  };
}

export default useFetch;
