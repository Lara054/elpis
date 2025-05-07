import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='row'>
      <div className='logo'>
        <p>ヘッダー</p>
      </div>
      <Link to='/'>
        <img src='/images/logo.png' alt='logo'></img>
      </Link>
      <nav className='header_nav'>
        <ul>
          <li><Link to='/about'>エルピスについて</Link></li>
          <li><Link to='/results'>実績・症例</Link></li>
          <li><Link to='/message'>カウンセラーの想い</Link></li>
          <li><Link to='/contact'>お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>

  )
}
export default Header;




