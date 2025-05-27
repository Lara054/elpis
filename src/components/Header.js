// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/common.css';
import '../css/components/header.css';


function Header() {
  return (
    <header>
      <nav>
        <ul className='nav'>
          <div className="nav-left">
            <li><Link to="/"> <img src="/images/header/logo.png" alt="エルピスのロゴ" /></Link></li>
          </div>

          <div className='nav-right column'>

            <a href="tel:08052750753" className="tel"><img src="/images/header/tel.png" alt="電話番号" /></a>

            <div className="row">

              <li><Link to="/">ホーム</Link></li>
              <div>|</div>
              <li><Link to="/">施設紹介</Link></li>
              <div>|</div>
              <li><Link to="/counselor">カウンセラーの想い</Link></li>
              <div>|</div>
              <li><Link to="/">料金について</Link></li>
              <div>

                <Button text="ご相談はこちら" link="/"></Button>
              </div>
            </div>

          </div>


        </ul>
      </nav>
    </header>
  );
}

export default Header;
