"use server";
import { redirect } from "next/navigation";
import { SaveMeal } from "./meals";
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await SaveMeal(meal);
  redirect("/meals");
}
