// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        テキスト
      </div>
      <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/about">エルピスについて</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
