import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/champion.jpg",
    alt: "챔피언 목록",
    link: "/champions",
    text: "챔피언 보러가기",
  },
  {
    src: "/store.jpg",
    alt: "아이템 목록",
    link: "/items",
    text: "아이템 보러가기",
  },
  {
    src: "/rotation.png",
    alt: "로테이션 챔피언",
    link: "/rotation",
    text: "로테이션 보러가기",
  },
];

const Home = () => {
  return (
    <section className="mt-20 text-4xl text-white lg:text-6xl">
      <h2 className="text-center font-bold text-gold-heavy">
        League of Legend
      </h2>
      <div className="flex max-h-[600px] min-h-screen w-full flex-col gap-2 p-20 pt-20 lg:min-h-[500px] lg:flex-row">
        {images.map((img, index) => (
          <Link
            key={index}
            href={img.link}
            className="group relative z-0 flex-1 overflow-hidden border-8 border-double border-gold-light transition-all duration-300 hover:z-50 hover:flex-[3]"
          >
            <Image
              priority
              src={img.src}
              alt={img.alt}
              fill
              sizes="50vw"
              className="object- transition-all duration-300"
            />
            <span className="absolute bottom-5 block w-full py-2 text-center text-4xl font-bold text-white">
              {img.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
