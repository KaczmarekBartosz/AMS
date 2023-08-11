import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div id="hero" class="hero route bg-image">
      <div class="overlay-itro"></div>
      <div class="hero-content display-table">
        <div class="table-cell">
          <div class="container">
            <h1 class="hero-title mb-4">
              <span className="AMS">AMS</span> Andrzej Spychała
            </h1>
            <p class="hero-subtitle">
              Auto Mechanika Samochodowa
              <div>
                <TypeAnimation
                  sequence={[
                    "Pełny mechaniczny serwis Twojego auta",
                    1000,
                    "Naprawa oraz wymiana elektryki i elektroniki",
                    1000,
                    "Naprawa układu hamulcowego, wydechowego i zawieszenia",
                    1000,
                    "Chiptuning - podniesienie mocy Twojego auta",
                    1000,
                    "Chiptuning - obniżenie spalania Twojego auta",
                    1000,
                    "Serwis klimatyzacji",
                    1000,
                    "Wymiana ogumienia oraz ustawienie geometrii",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>
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
