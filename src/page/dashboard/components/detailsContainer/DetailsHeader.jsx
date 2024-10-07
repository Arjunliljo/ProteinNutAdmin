import { DetailHeaderContent } from "./DetailHeaderContent";

function DetailsHeader() {
  return <div className="detailsContainer__header">
    <div className="headerlogo">
      <img src="./images/Logo.svg" className="imageheader" alt="" />
    </div>
    <div>
      <div>
        <h1 style={{fontWeight:"bold",fontSize:"20px"}}>September 2024</h1>
      </div >
      <div className="headerOne">
        <DetailHeaderContent />
        <DetailHeaderContent />
        <DetailHeaderContent />
      </div>

    </div>

  </div>;
}

export default DetailsHeader;
