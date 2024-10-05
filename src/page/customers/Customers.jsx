import MainTitle from "../../components/smallcomponents/MainTitle";
import CustomerFooter from "./components/CustomerFooter";
import CustomerTable from "./components/CustomerTable";

function Customers() {
  return (
    <main className="customers">
      <MainTitle>Customers</MainTitle>

      <div className="main-body">
        <CustomerTable />
        <CustomerFooter />
      </div>
    </main>
  );
}

export default Customers;
