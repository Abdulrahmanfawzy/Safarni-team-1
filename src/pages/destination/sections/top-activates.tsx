import CardToActive from "../_components/card-top-active";
import HeaderTitle from "../_components/header-title";

export default function TopActivates() {
  return (
    <div className="space-y-2 my-4 mt-12">
      <HeaderTitle title={"Top Activates"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardToActive />
        <CardToActive />
        <CardToActive />
        <CardToActive />
      </div>
    </div>
  );
}
