import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="pp.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Rayn Reynalds</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, velit incidunt non illo odio dicta, quae
                exercitationem, molestias facere sunt assumenda reiciendis
                accusantium excepturi eaque voluptates dignissimos blanditiis
                sequi quas.
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/** Second section */}
    <section>
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card-bg-dark">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentaje }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentaje}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-bg-light">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map(({ tittle, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{tittle}</h3>
                    <h5>
                      {from} - {to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/experiences">
                <a className="btn btn-light">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/** Portfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 py-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="img-fluid card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
