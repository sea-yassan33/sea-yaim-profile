import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { tv } from 'tailwind-variants';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { ProjectRow } from "@/lib/interfaceUtils";
import projectList from "@/public/data/project_list.json"
import { FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
// メタデータ設定
export const metadata: Metadata = {
  title: "SYAIM | プロジェクトについて",
  description: "SYIM | Sea-yassanが関わったプロジェクトについてご紹介しています。",
  robots: {
    index: false,
    follow: false,
  },
};
// css
const twStayles = tv({
  variants: {
    style: {
      part01: 'py-6 px-6 max-w-6xl mx-auto text-center',
      listMain: "py-6 px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6",
    },
  },
});

// プロジェクトリスト
const project_list: ProjectRow[] = projectList;

export default function SeeProject() {
  return (
    <main>
      <div className={twStayles({ style: 'part01' })}>
        <h2 className="text-3xl font-bold mb-2">プロジェクト</h2>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          プロジェクトに携わった事例をご紹介しております。
        </p>
      </div>
      <div className={twStayles({ style: "listMain" })}>
        {project_list.map((pj) => (
          <Card key={pj.id} className="overflow-hidden shadow-md hover:shadow-lg transition">
            <CardContent className="p-0">
              <div className="relative w-full h-64">
                {pj.image
                  ? <Image src={pj.image} alt={pj.title} fill className="object-cover" />
                  : <Image src="/img/coming_soon.png" alt={pj.title} fill className="object-cover" />
                }
              </div>
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg">{pj.title}</h3>
                <div className="flex gap-1 mt-2">
                  {pj.program_language.map((lang) => (
                    <Button key={lang} variant="secondary" className="text-sm text-gray-800">
                      {lang}
                    </Button>
                  ))}
                </div>
                <div className="font-sans text-gray-600 text-lg mt-2">
                  【リンク】
                </div>
                <div className="flex gap-4 mt-2">
                  {pj.deploy_url
                  ? <Link href={pj.deploy_url} target="_blank">
                    <Button variant="outline">
                      <FcGoogle size={24}/>デプロイ
                    </Button>
                    </Link>
                  : null
                  }
                  {pj.github
                  ? <Link href={pj.github} target="_blank">
                    <Button variant="outline">
                      <FaGithub size={24}/>Git Hub
                    </Button>
                    </Link>
                  : null
                  }
                  {pj.qiita
                  ? <Link href={pj.qiita} target="_blank">
                    <Button variant="outline">
                      <SiQiita size={24}/>Qiita Blog
                    </Button>
                    </Link>
                  : null
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}