import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/champion.jpg",
    alt: "챔피언 목록",
    link: "/champions",
    text: "챔피언 보러가기",
    width: 800, // 원본 이미지 너비
    height: 600, // 원본 이미지 높이 (비율 4:3)
  },
  {
    src: "/store.jpg",
    alt: "아이템 목록",
    link: "/items",
    text: "아이템 보러가기",
    width: 800,
    height: 600,
  },
  {
    src: "/rotation.png",
    alt: "로테이션 챔피언",
    link: "/rotation",
    text: "로테이션 보러가기",
    width: 800,
    height: 600,
  },
];

const Home = () => {
  return (
    <section className="mt-20 text-4xl text-white lg:text-6xl">
      <h2 className="text-center font-bold text-gold-heavy">
        League of Legend
      </h2>
      <div className="flex aspect-auto w-full flex-col gap-2 p-20 pt-20 lg:flex-row xl:mx-auto xl:max-h-[960px] 2xl:w-[80%]">
        {images.map((img, index) => (
          <Link
            key={index}
            href={img.link}
            className="group relative z-0 flex-1 overflow-hidden border-8 border-double border-gold-light transition-all duration-300 hover:z-50 hover:flex-[3]"
          >
            {/* 컨테이너에 padding-bottom을 적용하여 자연스러운 비율 유지 */}
            <div
              className="relative h-0 w-full"
              style={{ paddingBottom: `${(img.height / img.width) * 100}%` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="50vw"
                className="transition-all duration-300"
              />
            </div>
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
