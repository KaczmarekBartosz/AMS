import "./About.css";

function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">O Firmie</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                className="img-fluid rounded-pill shadow-lg"
                alt="AMS Andrzej Spychała Mechanika Samochodowa"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-info">
              <h2 className="title-about">AMS - Andrzej Spychała</h2>
              <p className="lead">
                Jesteśmy profesjonalnym zakładem mechaniki samochodowej,
                specjalizującym się w kompleksowej obsłudze pojazdów.
              </p>
              <p>
                Nasza firma została założona z pasji do motoryzacji oraz z myślą
                o zapewnieniu naszym klientom najwyższej jakości usług
                serwisowych. Dzięki wieloletniemu doświadczeniu oraz zespołowi
                wykwalifikowanych mechaników, możemy świadczyć usługi na
                najwyższym poziomie.
              </p>
              <p>
                W naszym zakresie usług znajduje się szeroki wachlarz napraw, od
                mechaniki ogólnej po diagnozowanie i naprawę układów
                elektrycznych oraz elektronicznych. Naszym priorytetem jest
                zapewnienie bezpieczeństwa, niezawodności oraz pełnej
                satysfakcji naszych klientów.
              </p>
              <p>
                Zapraszamy do skorzystania z naszych usług. Zaufaj fachowcom,
                którzy podejdą do Twojego pojazdu z pełnym zaangażowaniem i
                pasją.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
