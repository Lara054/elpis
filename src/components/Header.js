// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/common.css';
import '../css/components/header.css';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <div className="nav-left">
            <li><Link to="/"> <img src="/images/header/logo.png" alt="エルピスのロゴ" className="logo" /></Link></li>
          </div>

          <div className='nav-right column'>

            <a href="tel:08052750753" className="tel"><img src="/images/header/tel.png" alt="電話番号" /></a>

            <div className="row">
              <li><Link to="/about">エルピスについて</Link></li>
              <div>|</div>
              <li><Link to="/">施設紹介</Link></li>
              <div>|</div>
              <li><Link to="/">カウンセラーの想い</Link></li>
              <div>|</div>
              <li><Link to="/">料金について</Link></li>
              <a href="/"><img src="/images/header/contact.png" alt="相談はこちら" /></a>
            </div>

          </div>


        </ul>
      </nav>
    </header>
  );
}

export default Header;
