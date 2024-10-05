import MainTitle from "../../components/smallcomponents/MainTitle";
import OrdersFooter from "./components/OrdersFooter";
import OrdersHeader from "./components/OrdersHeader";
import OrdersTable from "./components/OrdersTable";

function Orders() {
  return (
    <main className="orders">
      <MainTitle>Orders</MainTitle>

      <div className="main-body orders-body">
        <OrdersHeader />
        <OrdersTable />
        <OrdersFooter />
      </div>
    </main>
  );
}

export default Orders;
