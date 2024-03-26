import MainLayout from "@/layout/MainLayout";
import axios from "axios";

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
        <p>Bahan-Bahan : {food?.ingredients}</p>
      </div>
    </MainLayout>
  );
}
