import Link from "next/link";
import Image from "next/image";
import { importImages } from "@/utils/importImages";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}) {
  const normalizedImage = importImages(image);
  return (
    <div className="flex flex-col justify-between rounded-3xl w-auto h-96 bg-[#b26c38] p-5 shadow-2xl shadow-[#59361c] hover:shadow-lg">
      <div>
        <Image
          src={normalizedImage.default}
          alt={title}
          fill
          className="object-cover rounded-3xl max-h-60 p-5"
        />
      </div>
      <div className="flex flex-col w-full text-[#402714] text-lg font-mono text-center capitalize">
        <h2 className="font-extrabold text-xl">{title}</h2>
        <p className="font-medium text-base">by {creator}</p>
        <p className="overflow-hidden line-clamp-2">{summary}</p>
        <div className="cursor-pointer font-bold">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}
