import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/champion.jpg", alt: "챔피언 목록", link: "/champions", text: "챔피언 보러가기" },
  { src: "/store.jpg", alt: "아이템 목록", link: "/items", text: "아이템 보러가기" },
  { src: "/rotation.png", alt: "로테이션 챔피언", link: "/rotation", text: "로테이션 보러가기" },
];

const Home = () => {
  return (
    <section className="text-white text-4xl lg:text-6xl mt-20">
      <h2 className="text-gold-heavy text-center font-bold">League of Legend</h2>
      <div className="flex flex-col lg:flex-row  w-full min-h-screen pt-20 gap-2  p-20">
        {images.map((img, index) => (
          <Link
            key={index}
            href={img.link}
            className="relative overflow-hidden border-8 border-gold-light border-double flex-1 transition-all duration-500 hover:flex-[3] "
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="50vw"
              className="object-cover transition-all duration-500 "
            />
            <span className="absolute bottom-5 text-white font-bold block w-full text-center text-4xl  py-2  ">
              {img.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
