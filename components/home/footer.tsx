import Image from "next/image";
import Link from "next/link";
// フッターのリンクデータ
const footerLinks = {
  company: {
    title: "sea-yassについて",
    links: [
      { label: "About", href: "/profile" },
      { label: "お問い合わせ", href: "#" },
    ]
  },
  service: {
    title: "開発",
    links: [
      { label: "プロジェクト", href: "/see_project" },
      { label: "メソッド", href: "#" },
    ]
  },
  support: {
    title: "公開APP",
    links: [
      { label: "デザイン★カタログ", href: "https://nextjs-desing-catalog.vercel.app/" },
      { label: "Health Hub", href: "https://healthcare-app-seven.vercel.app/" },
    ]
  }
};
// フッターコンポーネント
export default function Footer() {
  // 年を動的に取得
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <Image src="/icon.png" alt="logo" width={50} height={50} />
              <span>Sea Yass IM</span>
            </Link>
            <p className="text-sm text-gray-600">
              sea-yassのポートフォリオ<br/>ITシステム開発情報サイト
            </p>
          </div>
          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  // リンクタイトル毎に区切る
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900" target="_blank">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col items-center">
          <div className="text-sm text-gray-600 md:flex-row">
            <p>© {currentYear} <Link href={"https://github.com/sea-yassan33/"} target="_blank">sea-yassan33</Link>, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}