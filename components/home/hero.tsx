import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="bg-[#F5F8FF] py-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Sea Yass IM
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            ★sea-yassのポートフォリオサイトへようこそ(PRE)★ <br />
            sea-yassの開発メソッドや制作実績を紹介しています。ITソリューションを提供し、ヘルスケアや企業支援を中心に幅広い分野で活躍しています。
          </p>
          <ul className="space-y-3 text-slate-800 font-medium mb-10">
            <li className="flex items-center gap-2">
              <Link href="#">
                <Button className="bg-orange-200 hover:bg-orange-500 text-blak hover:text-amber-100 text-base  px-6 py-5 rounded-xl shadow-md">
                  プロジェクトを見る
                </Button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="/#">
                <Button className="bg-orange-200 hover:bg-orange-500 text-blak hover:text-amber-100 text-base px-6 py-5 rounded-xl shadow-md">
                  メソッドを見る
                </Button>
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href="/#">
                <Button className="bg-sky-200 hover:bg-sky-500 text-blak hover:text-amber-100 text-base px-6 py-5 rounded-xl shadow-md">
                  About sea-yass
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        {/* Right Side */}
        <div className="relative hidden md:block">
          <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-md w-2/3">
            <p className="text-sm text-slate-700 font-semibold mb-2">Thinking...</p>
            <div className="h-16 bg-gradient-to-t from-orange-200 to-orange-100 rounded-md"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/home_hero.png"
              alt="Hero Image"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
