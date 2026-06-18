import Image from "next/image";

interface CardsProps {
  title: string;
  img: string;
  lag1: string;
  lag2: string;
  lag3: string;
}

function Cards(props: CardsProps) {
  return (
    <div className="h-48 w-70 mx-1 bg-[#0B1838b0] rounded-2xl">
      <div className="relative bg-[#ffffff20] h-30 w-full border-3 border-[#0B1838] rounded-2xl  overflow-hidden">
        <Image
          src={`/img/${props.img}`}
          alt={props.title}
          width={400}
          height={230}
          className="object-cover  h-full w-full"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent pointer-events-none rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-[20px] mt-1 font-[itim]">{props.title}</h1>
        <hr className="w-3/4 border-t-2 border-white m-2" />
      </div>
    </div>
  );
}

export default Cards;
