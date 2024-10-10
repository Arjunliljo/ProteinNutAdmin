import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";

function ProductsFooter({ selectedItems }) {
  return (
    <div className="products__footer">
      <div>Pagination</div>
      {selectedItems.length > 0 && (
        <SecondaryBtn>Delete ({selectedItems.length})</SecondaryBtn>
      )}
    </div>
  );
}

export default ProductsFooter;
