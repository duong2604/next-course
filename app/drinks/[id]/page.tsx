import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import Image from "next/image";

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  return res.json();
};

const SingleDrink = async ({ params }: any) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* <img src={imgSrc} alt='' /> */}
      <Image
        src={imgSrc}
        width={400}
        height={400}
        priority
        className="w-48 h-48 rounded"
        alt=""
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrink;
