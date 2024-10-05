import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";

function ProductsHeader() {
  return (
    <div className="products__header">
      <PrimaryBtn style={{ fontWeight: "700" }}>Add new Product</PrimaryBtn>
    </div>
  );
}

export default ProductsHeader;
