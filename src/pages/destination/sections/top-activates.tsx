import CardToActive from "../_components/card-top-active";

export default function TopActivates() {
  return (
    <div className="space-y-2 my-4 mt-12">
      <h2 className="text-2xl text-gray-900 font-bold mb-3">Top Activates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardToActive />
        <CardToActive />
        <CardToActive />
        <CardToActive />
      </div>
    </div>
  );
}
