import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div
          className="hidden w-full items-center justify-center lg:order-1 lg:flex lg:w-auto"
          id="mobile-menu-2"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sample">Sample</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
