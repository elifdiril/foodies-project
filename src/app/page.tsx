import { getMeals } from "@/lib/meals";
import Header from "@/components/header/Header";
import MealsGrid from "@/components/meals/MealsGrid";
import Footer from "@/components/header/Footer";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <div className="flex flex-col justify-between bg-[#FF9B50] relative">
      <Header />
      <MealsGrid meals={meals} />
      <Footer />
    </div>
  );
}
