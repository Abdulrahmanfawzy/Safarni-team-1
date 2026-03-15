// components/CompareCard.tsx
interface Props {
  title: string;
  price: number;
  highlights: string;
  guide: string;
  transport: string;
}

export default function CompareCard({
  title,
  price,
  highlights,
  guide,
  transport,
}: Props) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <p className="text-3xl font-bold mb-4">
        ${price}
        <span className="text-sm text-gray-500 font-normal"> /person</span>
      </p>

      <ul className="space-y-2 text-sm text-gray-600">
        <li>✓ Duration: 3 hours</li>
        <li>✓ Highlights: {highlights}</li>
        <li>✓ Availability: Available</li>
        <li>✓ Guide: {guide}</li>
        <li>✓ Transportation: {transport}</li>
      </ul>
    </div>
  );
}
