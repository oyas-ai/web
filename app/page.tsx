import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center bg-black text-white fade-in">
        <h1 className="text-6xl font-bold mb-6">
          AIではキャベツの高騰に
          <br />
          対抗できないでしょう
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          だからこそ人の手が必要です
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href="#features">詳細を見る</a>
          </Button>
        </div>
      </section>

      <section id="features" className="py-20 bg-black fade-in">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            主な特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                お野菜AI
              </h3>
              <p className="text-gray-300">
                AIを活用した家庭菜園に関するサービスを提供する予定です
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                新感覚SNS
              </h3>
              <p className="text-gray-300">
                生物の誕生・繁栄からインスピレーションを得たSNSを開発予定です
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">その他</h3>
              <p className="text-gray-300">
                自由にご利用可能なTeamSpeak3サーバー等、各コミュニティを支援する活動を行う予定です
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black fade-in">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            料金プラン
          </h2>
          <div className="md:grid-cols-3 gap-8 justify-center items-center">
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                スタンダード
              </h3>
              <p className="text-4xl font-bold mb-6 text-white">
                ¥0<span className="text-lg">/月</span>
              </p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2">売るものはありません</li>
                <li className="mb-2">買うものもありません</li>
              </ul>
              <Button className="w-full" size="lg">
                今すぐ始める
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 w-full fade-in">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-4 md:mb-0 text-center md:ml-8">
            © {new Date().getFullYear()} oyas.ai All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
