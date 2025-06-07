// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/common.css';
import '../css/components/header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 701);

  const toggleMenu = (event) => {
    event.stopPropagation(); // イベントの伝播を防ぐ
    setMenuOpen(prev => {
      const next = !prev;
      console.log('Menu toggled:', next); // 修正: コールバックの引数を使ってログ出力
      return next;
    }); // 状態をトグル
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // メニュー外をクリックしたときにメニューを閉じる
      if (!event.target.closest('.hamburger-menu')) {
        setMenuOpen(false);
        console.log('Menu closed due to outside click');
      }
    };

    // イベントリスナーを登録
    document.addEventListener('click', handleClickOutside);

    // クリーンアップ関数でイベントリスナーを削除
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // 依存配列は空

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 701);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav>
        <ul className='nav'>
          {isMobile ? (
            <>
              <div className="nav-right column" style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%', justifyContent: 'space-between' }}>
                <div className="hamburger-menu">
                  <button onClick={toggleMenu} className="hamburger-button">
                    ☰
                  </button>
                  <div className={`menu-dropdown${menuOpen ? ' open' : ''}`}>
                    <ul>
                      <li><Link to="/">ホーム</Link></li>
                      <li><Link to="/facility">施設紹介</Link></li>
                      <li><Link to="/counselor">カウンセラーの想い</Link></li>
                      <li><Button text="ご相談はこちら" link="/contact" /></li>
                    </ul>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '16px' }}>
                  <a href="tel:08052750753" className="tel">
                    <img src="/images/header/tel.png" alt="電話番号" />
                  </a>
                  <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#375900', marginTop: '2px' }}>エルピス</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <li className="nav-left">
                <Link to="/">
                  <img src="/images/header/logo.png" alt="エルピスのロゴ" />
                </Link>
              </li>
              <div className='nav-right column'>
                <a href="tel:08052750753" className="tel">
                  <img src="/images/header/tel.png" alt="電話番号" />
                </a>
                <div className="row pc-menu">
                  <li><Link to="/">ホーム</Link></li>
                  <div>|</div>
                  <li><Link to="/facility">施設紹介</Link></li>
                  <div>|</div>
                  <li><Link to="/counselor">カウンセラーの想い</Link></li>
                  <div>|</div>
                  <div>
                    <Button text="ご相談はこちら" link="/contact"></Button>
                  </div>
                </div>
                {/* PC時はハンバーガーメニューを表示しない */}
              </div>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
