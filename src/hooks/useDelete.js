import axios from "axios";
import { useState } from "react";

export default function useDelete() {
  const [loading, setLoading] = useState(false);

  const del = async ({ id }) => {
    setLoading(true);

    await axios.delete(
      `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    setLoading(false);
  };

  return { del, loading };
}
