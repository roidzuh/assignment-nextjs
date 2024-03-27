import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/router";

export default function CreateFoodPage() {
  const { post, loading } = usePost();
  const router = useRouter();
  const handleCreateFood = async ({
    name,
    description,
    ingredients,
    imageUrl,
  }) => {
    post({
      url: "create-food",
      body: { name, description, ingredients, imageUrl },
    });
    router.push("/food");
  };

  return (
    <MainLayout>
      <FoodForm
        title="Create Food"
        onSubmitFood={handleCreateFood}
        loading={loading}
      />
    </MainLayout>
  );
}
