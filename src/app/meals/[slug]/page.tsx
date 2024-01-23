import Footer from "@/components/header/Footer";
import Header from "@/components/header/Header";
import { getMeal } from "@/lib/meals";
import { importImages } from "@/utils/importImages";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const MealDetail = ({ params }: { params: any }) => {
  const meal = getMeal(params.slug);
  const { title, image, summary, creator, instructions } = meal;
  const normalizedImage = importImages(image);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <div className="flex flex-col bg-[#FF9B50]">
      <Header />
      <div className="relative h-3/5 w-4/5 mx-auto my-5">
        <div className="flex justify-between min-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl w-auto h-96 bg-[#b26c38] p-5 shadow-2xl shadow-[#59361c]">
          <div>
            <Image
              src={normalizedImage.default}
              alt={title}
              fill
              className="object-cover rounded-3xl max-w-[50%] p-5"
            />
          </div>
          <div className="flex flex-col w-1/2 text-[#402714] text-end text-lg font-mono capitalize">
            <h2 className="font-extrabold text-xl">{title}</h2>
            <p className="font-medium text-base">by {creator}</p>
            <p className="">{summary}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MealDetail;
