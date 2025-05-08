import Image from "next/image";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="header">
        <div className="header-wrap">
          <h1 className="header__logo">
            <a href="/">
              <Image
                className=""
                src="/img/common/logo.png"
                alt="OHK 8Ch"
                width={135}
                height={58}
              />
            </a>
          </h1>
          <div className="dsp-pc" id="header__add">
            <center></center>
          </div>
          <div className="header__info">
            <ul className="header__sns">
              <li>
                <a href="https://lin.ee/4zWDtjm8L" target="_blank">
                  <Image
                    className=""
                    src="/img/common/icon_h_line.png"
                    alt="LINE友だち追加"
                    width={40}
                    height={15}
                  />
                  {/* <img src="/img/common/icon_h_line.png" alt="LINE友だち追加"> */}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ohktv" target="_blank">
                  <Image
                    className=""
                    src="/img/common/icon_h_fb.png"
                    alt="FB"
                    width={24}
                    height={24}
                  />
                  {/* <img src="/img/common/icon_h_fb.png" alt=""> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ohk_official/"
                  target="_blank"
                >
                  <Image
                    className=""
                    src="/img/common/icon_h_insta.png"
                    alt="I"
                    width={24}
                    height={24}
                  />
                  {/* <img src="/img/common/icon_h_insta.png" alt=""> */}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tv_ohk" target="_blank">
                  <Image
                    className=""
                    src="/img/common/icon_h_twitter.png"
                    alt="TW"
                    width={24}
                    height={24}
                  />
                  {/* <img src="/img/common/icon_h_twitter.png" alt=""> */}
                </a>
              </li>
            </ul>
          </div>
          <nav className="header__nav-pc">
            <ul>
              <li>
                <a href="/list/new/">
                  <Image
                    className=""
                    src="/img/common/navicon_01.png"
                    alt="新着一覧"
                    width={27}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_01.png" alt="新着一覧"> */}
                  <span>新着一覧</span>
                </a>
              </li>
              <li>
                <a href="/data/ohkprogram/">
                  <Image
                    className=""
                    src="/img/common/navicon_02.png"
                    alt="放送番組"
                    width={25}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_02.png" alt="放送番組"> */}
                  <span>放送番組</span>
                </a>
              </li>
              <li>
                <a href="/list/ohknews/">
                  <Image
                    className=""
                    src="/img/common/navicon_03.png"
                    alt="ニュース"
                    width={22}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_03.png" alt="ニュース"> */}
                  <span>ニュース</span>
                </a>
              </li>
              <li>
                <a href="/list/special/">
                  <Image
                    className=""
                    src="/img/common/navicon_04.png"
                    alt="特集"
                    width={27}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_04.png" alt="特集"> */}
                  <span>特集</span>
                </a>
              </li>
              <li>
                <a href="/list/event/">
                  <Image
                    className=""
                    src="/img/common/navicon_05.png"
                    alt="イベント"
                    width={22}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_05.png" alt="イベント"> */}
                  <span>イベント</span>
                </a>
              </li>
              <li>
                <a href="/list/announcer/">
                  <Image
                    className=""
                    src="/img/common/navicon_06.png"
                    alt="アナウンサー"
                    width={18}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_06.png" alt="アナウンサー"> */}
                  <span>アナウンサー</span>
                </a>
              </li>
              <li>
                <a href="/index.cgi?c=form_contents-list">
                  <Image
                    className=""
                    src="/img/common/navicon_07.png"
                    alt="募集&amp;プレゼント"
                    width={19}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_07.png" alt="募集&amp;プレゼント"> */}
                  <span>募集&amp;プレゼント</span>
                </a>
              </li>
              <li>
                <a href="/data/oh_top/">
                  <Image
                    className=""
                    src="/img/common/navicon_08.png"
                    alt="OH!くん"
                    width={23}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_08.png" alt="OH!くん"> */}
                  <span>OH!くん</span>
                </a>
              </li>
              <li>
                <a href="/data/845/bangumitobira/">
                  <Image
                    className=""
                    src="/img/common/navicon_09.png"
                    alt="haremachi TV"
                    width={84}
                    height={23}
                  />
                  {/* <img src="/img/common/navicon_09.png" alt="haremachi TV"> */}
                  <span>ハレマチテレビ</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Ohk-products</p>
      </main>
      <footer className="flex row-start-3 flex-wrap items-end justify-center p-8">
        <p>Copyright 2025</p>
      </footer>
    </div>
  );
}
