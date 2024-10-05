import MainTitle from "../../components/smallcomponents/MainTitle";
import ReveiwsFooter from "./components/ReveiwsFooter";
import ReviewsHeader from "./components/ReviewsHeader";
import ReviewsTable from "./components/ReviewsTable";

function Reviews() {
  return (
    <main className="reviews">
      <MainTitle>Reviews</MainTitle>

      <div className="main-body">
        <ReviewsHeader />
        <ReviewsTable />
        <ReveiwsFooter />
      </div>
    </main>
  );
}

export default Reviews;
