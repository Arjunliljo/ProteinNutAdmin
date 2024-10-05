import MainTitle from "../../components/smallcomponents/MainTitle";
import ProductsFooter from "./components/ProductsFooter";
import ProductsHeader from "./components/ProductsHeader";
import ProductsTable from "./components/ProductsTable";

function Products() {
  return (
    <main className="products">
      <MainTitle>Products</MainTitle>

      <div className="main-body products__body">
        <ProductsHeader />
        <ProductsTable />
        <ProductsFooter />
        {/* foote */}
      </div>
    </main>
  );
}

export default Products;
