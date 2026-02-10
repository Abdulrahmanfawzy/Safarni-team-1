import CardReview from "../_components/card-review";

export default function Reviews() {
  return (
    <div className="space-y-2 mt-12">
      <h2 className="text-2xl text-gray-900 font-bold mb-3">Reviews</h2>
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  );
}
