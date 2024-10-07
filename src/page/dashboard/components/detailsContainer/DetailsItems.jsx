export const DetailsItems = () => {
  return (
    <div className="detailsContainer__griid_items">
      <div className="product_item"></div>

      <div className="detailsContainer2__item_details">
        <div className="detailsContainer2__item_details_content1">
          <p>Item title here</p>
          <p >100USD</p>
        </div>
        <div style={{marginTop:"-4rem"}} className="detailsContainer2__item_details_content2">
          <div>
          <p style={{fontWeight:"bold",fontSize:"2rem"}}>12</p>
          <p className="detailsContainer2__order">Orders</p>
          </div>
          <p style={{fontSize:"1.5rem"}}>7</p>
        </div>
      </div>
    </div>
  );
};
