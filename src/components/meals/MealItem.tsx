import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="flex flex-col justify-between rounded-3xl w-auto h-96 bg-[#F3D7CA] p-5 shadow-2xl shadow-[#59361c] hover:shadow-lg">
      <div>
        <Image
          src={`${process.env.AWS_IMAGE_URL}/${image}`}
          alt={title}
          fill
          className="object-cover rounded-3xl max-h-60 p-5"
        />
      </div>
      <div className="flex flex-col items-center w-full text-[#402714] text-lg font-mono text-center capitalize">
        <h2 className="font-extrabold text-xl">{title}</h2>
        <p className="font-medium text-base">by {creator}</p>
        <p className="overflow-hidden line-clamp-2">{summary}</p>
        <div className="cursor-pointer font-bold bg-[#E6A4B4] w-3/5 p-1 rounded-full text-[#fff] hover:opacity-60">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}
