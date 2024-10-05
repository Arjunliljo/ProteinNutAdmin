import PrimaryBtn from "../../../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";

function CoupnsFooter() {
  return (
    <div className="coupons__footer">
      <span></span>
      <div className="coupons__footerBtns">
        <SecondaryBtn style={{ marginRight: ".5rem" }}>Cancel</SecondaryBtn>
        <PrimaryBtn>Save</PrimaryBtn>
      </div>
    </div>
  );
}

export default CoupnsFooter;
