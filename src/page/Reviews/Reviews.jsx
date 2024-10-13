import React, { useState } from "react";
import MainTitle from "../../components/smallcomponents/MainTitle";
import ReveiwsFooter from "./components/ReveiwsFooter";
import ReviewsHeader from "./components/ReviewsHeader";
import ReviewsTable from "./components/ReviewsTable";

function Reviews() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (id) => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <main className="reviews">
      <MainTitle>Reviews</MainTitle>

      <div className="main-body">
        <ReviewsHeader />
        <ReviewsTable selectedItems={selectedItems} onItemSelect={handleItemSelect} />
        <ReveiwsFooter selectedItems={selectedItems} />
      </div>
    </main>
  );
}

export default Reviews;
