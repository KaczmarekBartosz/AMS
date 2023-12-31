import "./NavBar.css";

function NavBar() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="index.html">AMS</a>
        </h1>

        {/* <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Strona główna
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                O firmie
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#services">
                Usługi
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#contact">
                Umów wizytę
              </a>
            </li>
            {/* <li>
              <a class="nav-link scrollto" href="#blog">
                Blog
              </a>
            </li> */}
            {/* <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a class="nav-link scrollto" href="#contact">
                Kontakt
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
