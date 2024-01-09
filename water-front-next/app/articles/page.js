"use client";

import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { getArticles } from "../services/articles";

const Products = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error al obtener los artículos:", error);
        // Manejar el error aquí, como establecer un estado de error
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8">
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          attributes={article.attributes}
        />
      ))}
    </div>
  );
};

export default Products;
