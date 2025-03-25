import React from "react";

export default function CategoryPage({ params }) {
    return (
      <div className="category-container">
        <h1>{params.slug.replace("-", " ").toUpperCase()}</h1>
        <p>Explore the best {params.slug} products.</p>
      </div>
    );
  }
  