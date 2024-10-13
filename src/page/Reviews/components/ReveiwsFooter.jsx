import SecondaryBtn from "../../../components/Buttons/SecondaryBtn";

function ReveiwsFooter({ selectedItems }) {
  return (
    <div className="reviews__footer">
      <div>Pagenation</div>
      {selectedItems.length > 0 && (
        <SecondaryBtn>Delete ({selectedItems.length})</SecondaryBtn>
      )}
    </div>
  );
}

export default ReveiwsFooter;
