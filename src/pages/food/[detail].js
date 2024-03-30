import Button from "@/components/Button";
import FoodForm from "@/components/FoodForm";
import useDelete from "@/hooks/useDelete";
import usePost from "@/hooks/usePost";
import MainLayout from "@/layout/MainLayout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.detail}`,
    {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
    }
  );

  return { props: { food: resp?.data?.data || [] } };
}

export default function FoodDetailPage({ food }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { del, loading: deleteLoading } = useDelete();
  const { post, loading: postLoading } = usePost();
  const loading = deleteLoading || postLoading;

  const handleBack = () => {
    router.push("/food");
  };

  const handleDeleteFood = async () => {
    await del({ id: food.id });
    router.replace("/food");
  };

  const handleEditFood = async ({
    name,
    imageUrl,
    description,
    ingredients,
  }) => {
    await post({
      url: `update-food/${food.id}`,
      body: { name, imageUrl, description, ingredients },
    });
    router.reload();
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-4 items-center p-4">
        <img
          src={food.imageUrl}
          alt={food.name}
          className="w-96 h-72 rounded-lg object-cover"
        />
        <div>
          <p className="text-xl font-semibold">Nama Makanan : {food?.name}</p>
          <p className="text-lg">Deskripsi : {food?.description}</p>
          <p className="text-lg">
            Bahan-Bahan : {food?.ingredients.join(", ")}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            name="Back"
            color={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white`}
            onClick={handleBack}
            disabled={loading}
          />
          <Button
            name={isOpen ? "Cancel" : "Edit"}
            color={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white`}
            onClick={() => setIsOpen(!isOpen)}
            disabled={loading}
          />
          <Button
            name={"Delete"}
            color={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-700"
            } text-white`}
            onClick={handleDeleteFood}
            disabled={loading}
          />
        </div>

        {isOpen && (
          <div className="w-full md:w-1/2">
            <FoodForm
              title={"Update Food"}
              onSubmitFood={handleEditFood}
              loading={loading}
              defaultName={food?.name}
              defaultDescription={food?.description}
              defaultIngredients={food?.ingredients}
              defaultImgUrl={food?.imageUrl}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
