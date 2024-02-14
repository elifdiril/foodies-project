"use client";

import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/ImagePicker";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/MealsFormSubmit";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: "" });

  return (
    <div className="flex flex-col bg-[#fff]">
      <Header />
      <div className="relative h-2/5 w-2/5 mx-auto my-5">
        <h1 className="text-3xl font-bold font-mono text-[#402714] flex justify-center mb-4">
          Share your favorite meal
        </h1>
        <div className="flex justify-between min-h-[calc(100vh-170px)] overflow-y-auto rounded-3xl w-auto h-96 bg-[#F3D7CA] p-5 shadow-2xl shadow-[#59361c] text-[#402714] font-mono font-semibold">
          <form action={formAction}>
            <div className="flex gap-4 mb-4">
              <p>
                <label htmlFor="name">Your name: </label>
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="email">Your email: </label>
                <input type="email" id="email" name="email" required />
              </p>
            </div>
            <p className="mb-4">
              <label htmlFor="title">Title: </label>
              <input type="text" id="title" name="title" required />
            </p>
            <p className="mb-4">
              <label htmlFor="summary">Short Summary: </label>
              <input type="text" id="summary" name="summary" required />
            </p>
            <p className="mb-4">
              <label htmlFor="instructions">Instructions: </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={10}
                required
              ></textarea>
            </p>
            <ImagePicker label="Your image: " name="image" />
            {state?.message && <p>{state.message}</p>}
            <p className="bg-[#59361c] text-[#fff] p-2 rounded-xl m-4 text-center w-2/5 mx-auto hover:opacity-60">
              <MealsFormSubmit />
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
