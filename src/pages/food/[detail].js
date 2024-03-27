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
  const route = useRouter();
  const { del, loading: deleteLoading } = useDelete();
  const { post, loading: postLoading } = usePost();
  const loading = deleteLoading || postLoading;

  const handleBack = () => {
    route.push("/food");
  };

  const handleDeleteFood = async () => {
    del({ id: food.id });
    route.push("/food");
  };

  const handleEditFood = async ({
    name,
    imageUrl,
    description,
    ingredients,
  }) => {
    post({
      url: `update-food/${food.id}`,
      body: { name, imageUrl, description, ingredients },
    });
    route.reload();
  };

  return (
    <MainLayout className="flex flex-col gap-4 items-center">
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-auto h-80 rounded-lg"
      />
      <div>
        <p>Nama Makanan : {food?.name}</p>
        <p>Deskripsi : {food?.description}</p>
        <p>Bahan-Bahan : {food?.ingredients.join(", ")}</p>
      </div>
      <div className="flex gap-4">
        <Button
          name="Back"
          color={` ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
          onClick={handleBack}
          disabled={loading}
        />
        <Button
          name={isOpen ? "Cancel" : "Edit"}
          color={` ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
          onClick={() => setIsOpen(!isOpen)}
          disabled={loading}
        />
        <Button
          name={"Delete"}
          color={` ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-700"
          } text-white  `}
          onClick={handleDeleteFood}
          disabled={loading}
        />
      </div>

      {isOpen && (
        <FoodForm
          title={"Update"}
          onSubmitFood={handleEditFood}
          loading={loading}
          defaultName={food?.name}
          defaultDescription={food?.description}
          defaultIngredients={food?.ingredients}
          defaultImgUrl={food?.imageUrl}
        />
      )}
    </MainLayout>
  );
}
