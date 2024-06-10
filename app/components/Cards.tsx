import Image from "next/image";
import img01 from "../assets/images/curtains_01.jpg";

const Cards = () => {
  return (
    <div className="w-100 p-4">
      <div className="grid antialiased text-gray-900">
        <div>
          <Image
            src={img01}
            alt="FynDecor"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />
          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-[color:var(--primary-light)] text-[color:var(--primary)] text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Beautiful Curtains
              </h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm"> /wk</span>
              </div>
              <div className="mt-4">
                <span className="text-[color:var(--primary)] text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span className="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
