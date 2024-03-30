import Button from "./Button";

export default function FoodForm({
  title,
  onSubmitFood,
  loading,
  defaultName,
  defaultDescription,
  defaultIngredients,
  defaultImgUrl,
}) {
  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const description = formData.get("description");
    const ingredients = formData
      .get("ingredients")
      .split(",")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);
    const imageUrl = formData.get("imgUrl");

    if (
      !name.trim() ||
      !description.trim() ||
      ingredients.length === 0 ||
      !imageUrl.trim()
    ) {
      return alert("Silahkan isi semua inputan dengan benar");
    }

    onSubmitFood({ name, description, ingredients, imageUrl });
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg"
      onSubmit={handleForm}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        defaultValue={defaultName}
        className="border rounded-lg p-2"
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        defaultValue={defaultDescription}
        className="border rounded-lg p-2"
      />
      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        id="ingredients"
        name="ingredients"
        placeholder="Ingredients"
        defaultValue={defaultIngredients}
        className="border rounded-lg p-2"
      />
      <label htmlFor="imgUrl">Image Url</label>
      <input
        type="text"
        id="imgUrl"
        name="imgUrl"
        placeholder="Image Url"
        defaultValue={defaultImgUrl}
        className="border rounded-lg p-2"
      />
      <Button
        name={title}
        type="submit"
        color={`${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white hover:bg-blue-700 `}
        disabled={loading}
      />
    </form>
  );
}
