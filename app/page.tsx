import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center bg-black text-white">
        <h1 className="text-6xl font-bold mb-6">
          AIで睡眠を改善する
          <br />
          次世代プラットフォーム
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          最先端のAI技術で、あなたの睡眠を最適化します
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <a href="#features">詳細を見る</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </div>
      </section>

      <section id="features" className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            主な特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                AI睡眠分析
              </h3>
              <p className="text-gray-300">
                最先端のAIが睡眠データを分析し、質の高い睡眠を実現します
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                パーソナライズドレコメンデーション
              </h3>
              <p className="text-gray-300">
                個々の睡眠パターンに基づいた最適な改善策を提案
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                リアルタイムモニタリング
              </h3>
              <p className="text-gray-300">
                睡眠の質をリアルタイムで追跡し、即時フィードバックを提供
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            料金プラン
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                ベーシック
              </h3>
              <p className="text-4xl font-bold mb-6 text-white">
                ¥1,980<span className="text-lg">/月</span>
              </p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2">基本的な睡眠分析</li>
                <li className="mb-2">週1回のレポート</li>
                <li className="mb-2">メールサポート</li>
              </ul>
              <Button className="w-full" size="lg">
                今すぐ始める
              </Button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                スタンダード
              </h3>
              <p className="text-4xl font-bold mb-6 text-white">
                ¥3,980<span className="text-lg">/月</span>
              </p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2">詳細な睡眠分析</li>
                <li className="mb-2">毎日のレポート</li>
                <li className="mb-2">チャットサポート</li>
                <li className="mb-2">パーソナライズドレコメンデーション</li>
              </ul>
              <Button className="w-full" size="lg">
                今すぐ始める
              </Button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                プレミアム
              </h3>
              <p className="text-4xl font-bold mb-6 text-white">
                ¥5,980<span className="text-lg">/月</span>
              </p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2">高度な睡眠分析</li>
                <li className="mb-2">リアルタイムモニタリング</li>
                <li className="mb-2">優先サポート</li>
                <li className="mb-2">専任コンサルタント</li>
                <li className="mb-2">カスタム改善プラン</li>
              </ul>
              <Button className="w-full" size="lg">
                今すぐ始める
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            お問い合わせ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-500">
                お問い合わせフォーム
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="お問い合わせ内容をご記入ください"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  送信する
                </Button>
              </form>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-500">
                会社情報
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="font-medium">会社名:</span> Oyas AI株式会社
                </p>
                <p>
                  <span className="font-medium">住所:</span> 〒100-0005
                  東京都千代田区丸の内1-9-1
                </p>
                <p>
                  <span className="font-medium">電話番号:</span> 03-1234-5678
                </p>
                <p>
                  <span className="font-medium">メールアドレス:</span>{" "}
                  info@oyas-ai.com
                </p>
                <p>
                  <span className="font-medium">営業時間:</span> 平日 10:00 -
                  18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Oyas AI株式会社. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-green-500">
              特徴
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-green-500">
              料金プラン
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-500">
              お問い合わせ
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
