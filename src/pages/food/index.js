import FoodsCard from "@/components/FoodsCard";
import MainLayout from "@/layout/MainLayout";
import axios from "axios";

export async function getServerSideProps() {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
    {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
    }
  );

  return { props: { foods: resp?.data?.data || [] } };
}

export default function HomePage({ foods }) {
  return (
    <MainLayout>
      {foods.map((food) => (
        <FoodsCard key={food.id} {...food} />
      ))}
    </MainLayout>
  );
}
