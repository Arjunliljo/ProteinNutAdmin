import OrderStats from "./orderStats/OrderStats";

function OrdersHeader() {
  return (
    <div className="orders__header">
      <div className="orders__header-details">
        <h2>Sales Period :</h2>
      </div>

      <div className="orders__headeritems-container">
        <OrderStats />
      </div>
    </div>
  );
}

export default OrdersHeader;
