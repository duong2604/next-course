"use client";

import Image from "next/image";
import Link from "next/link";

const Drinks = ({ drinks }: any) => {
  return (
    <ul className="menu menu-vertical ml-0 max-w-xl grid sm:grid-cols-2 gap-6">
      {drinks.map((drink: any) => {
        return (
          <li key={drink.idDrink} className="mt-4 relative h-48">
            <Link href={`/drinks/${drink.idDrink}`} className="">
              <Image
                src={drink.strDrinkThumb}
                fill
                priority
                alt="image"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw"
                className="object-cover rounded-md"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Drinks;
