import React, { useState } from "react";
import MainTitle from "../../components/smallcomponents/MainTitle";
import ProductsFooter from "./components/ProductsFooter";
import ProductsHeader from "./components/ProductsHeader";
import ProductsTable from "./components/ProductsTable";
import ProductModal from "../../components/ProductModal/ProductModal";

function Products() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemSelect = (itemId) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter(id => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="products">
      <MainTitle>Products</MainTitle>

      <div className="main-body products__body">
        <ProductsHeader openModal={openModal} />
        <ProductsTable selectedItems={selectedItems} onItemSelect={handleItemSelect} />
        <ProductsFooter selectedItems={selectedItems} />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </main>
  );
}

export default Products;
