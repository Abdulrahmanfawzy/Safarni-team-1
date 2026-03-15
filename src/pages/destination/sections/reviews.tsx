import CardReview from "../_components/card-review";
import HeaderTitle from "../_components/header-title";

export default function Reviews() {
  return (
    <div className="space-y-2 mt-12">
      <HeaderTitle title={"Reviews"} />
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  );
}
