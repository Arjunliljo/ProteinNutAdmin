import MainTitle from "../../components/smallcomponents/MainTitle";
import CoupnsFooter from "./components/CoupnsFooter";
import CouponsTable from "./components/CouponsTable";

function Coupons() {
  return (
    <main className="coupons">
      <MainTitle>Coupons</MainTitle>
      <div className="main-body coupons__body">
        <CouponsTable />
        <CoupnsFooter />
      </div>
    </main>
  );
}

export default Coupons;
