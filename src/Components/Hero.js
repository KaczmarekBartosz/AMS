import "./Hero.css";

function Hero() {
  return (
    <div
      id="hero"
      class="hero route bg-image"
      // style="background-image: url(assets/img/hero-bg.jpg)"
    >
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            {/* <!--<p class="display-6 color-d">Hello, world!</p>--> */}
            <h1 class="hero-title mb-4">
              <span className="AMS">AMS</span> Andrzej Spychała
            </h1>
            <p class="hero-subtitle">
              {/* <span
                class="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              ></span> */}
              Auto Mechanika Samochodowa
            </p>
            {/* <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
<script src="assets/vendor/typed.js/typed.umd.js"></script>;
export default Hero;
