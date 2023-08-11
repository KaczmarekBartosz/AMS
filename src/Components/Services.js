import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCarBurst } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

function Services() {
  return (
    <section id="services" class="services-mf pt-5 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">Oferowane usługi</h3>
              <p class="subtitle-a">Zadbamy kompleksowo o Twoje auto.</p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Mechanika</h2>
                <p class="s-description text-center">
                  Usługa mechaniczna obejmuje szeroki zakres napraw i
                  konserwacji mechanicznych. Nasz zespół doświadczonych
                  mechaników zadba o Twoje auto, naprawiając wszelkie problemy
                  związane z układem napędowym, silnikiem oraz innymi
                  komponentami.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faBolt} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Elektryka / Elektronika</h2>
                <p class="s-description text-center">
                  Nasza usługa elektryki i elektroniki ma na celu diagnozowanie
                  i naprawę problemów związanych z układem elektrycznym i
                  elektronicznym Twojego pojazdu. Niezależnie od tego, czy masz
                  problemy z instalacją elektryczną, oświetleniem czy systemami
                  sterowania, możesz nam zaufać.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faCarBurst} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">
                  Układ hamulcowy / wydechowy / zawieszenia
                </h2>
                <p class="s-description text-center">
                  Nasz zespół specjalistów ds. układów hamulcowych, wydechowych
                  i zawieszenia zapewni Ci bezpieczeństwo na drodze. Wykonujemy
                  naprawy, wymiany i regulacje, które sprawią, że Twój pojazd
                  będzie prowadzić się stabilnie i bezpiecznie.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faTemperatureLow} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Klimatyzacja</h2>
                <p class="s-description text-center">
                  Usługa klimatyzacji ma na celu utrzymanie odpowiedniej
                  temperatury i komfortu wnętrza pojazdu. Dzięki naszym
                  doświadczonym technikom będziesz mógł cieszyć się efektywnym i
                  sprawnym systemem klimatyzacji przez cały rok.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faTruckMonster} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Wymiana ogumienia oraz geometria</h2>
                <p class="s-description text-center">
                  Nasza usługa dotyczy wymiany opon oraz regulacji geometrii, co
                  ma ogromne znaczenie dla trakcji, stabilności i zużycia opon.
                  Dzięki naszym specjalistom Twój pojazd będzie utrzymywał
                  właściwe właściwości jezdne.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle">
                  <FontAwesomeIcon icon={faCar} />
                </span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Pełna obsługa serwisowa</h2>
                <p class="s-description text-center">
                  Zapewniamy kompleksową obsługę Twojego pojazdu. Wymieniamy
                  filtry, olej, prowadzimy serwis układu rozrządu oraz
                  kompleksową naprawę zawieszenia i układu hamulcowego. Pozwól
                  nam zadbać o każdy aspekt Twojego auta. Oferujemy:
                </p>
                <ul className="service-list">
                  <li>wymiana filtrów</li>
                  <li>wymiana oleju</li>
                  <li>wymiana rozrządu</li>
                  <li>wymiana oraz serwis zawieszenia</li>
                  <li>wymiana oraz serwis układu hamulcowego</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
