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
    const ingredients = formData.get(["ingredients"]).split(",");
    const imageUrl = formData.get("imgUrl");

    onSubmitFood({ name, description, ingredients, imageUrl });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleForm}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        defaultValue={defaultName}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        defaultValue={defaultDescription}
      />
      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        id="ingredients"
        name="ingredients"
        placeholder="Ingredients"
        defaultValue={defaultIngredients}
      />
      <label htmlFor="imgUrl">Image Url</label>
      <input
        type="text"
        id="imgUrl"
        name="imgUrl"
        placeholder="image Url"
        defaultValue={defaultImgUrl}
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
