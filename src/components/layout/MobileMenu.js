import React, { useState } from "react";
import{MobileButton,
        MobileLinks} from './layout.module.css';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button className={MobileButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      {isMenuOpen && (
        <div className={MobileLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="">About</a></li>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;