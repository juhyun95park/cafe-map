import Link from "next/link";
import { Cafe } from "@/types/cafe";

interface CafeCardProps {
  cafe: Cafe;
}

export default function CafeCard({ cafe }: CafeCardProps) {
  return (
    <Link
      href={`/cafe/${cafe.id}`}
      className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900">{cafe.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{cafe.address}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {cafe.features.quiet && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            조용해요
          </span>
        )}
        {cafe.features.outlets && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            콘센트 많아요
          </span>
        )}
        {cafe.features.parking && (
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
            주차 가능
          </span>
        )}
        {cafe.features.wifi && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            Wi-Fi
          </span>
        )}
        {cafe.features.spacious && (
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800">
            넓어요
          </span>
        )}
      </div>
    </Link>
  );
}

