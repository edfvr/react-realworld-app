export default function Navbar(): JSX.Element {
  const activeLink = (href: string) => {
    const currentPath = window.location.pathname;
    return currentPath === href ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <a className={activeLink('/')} href="/#/">Home</a>
                </li>
                <li className="nav-item">
                    <a className={activeLink('/SignIn')} href="/login">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className={activeLink('/SignUp')} href="/register">Sign up</a>
                </li>
                </ul>
            </div>
            </nav>
    </>
    
  );
};