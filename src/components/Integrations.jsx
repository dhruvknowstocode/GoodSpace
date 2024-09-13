import React from 'react';
import './Integrations.scss';
import flowchart from '../assets/vector.png'; // Add the flowchart image here
import hrms from '../assets/hrms.png';
import sso from '../assets/sso.png';
import finance from '../assets/finance.png';

const Integrations = () => {
  return (
    <section className="integrations">
      <h2>Integrations</h2>
      <img src={flowchart} alt="Flowchart" className="flowchart" />

      <div className="integration-cards">
        <div className="card hrms">
          <div className="icon"> {/* Icon Placeholder */}
            <img src={hrms} alt="HRMS Icon" />
          </div>
          <h3>HRMS Systems</h3>
          <p>
            We can integrate with any HRMS as long as the employee master can
            be made available to us over SFTP/API.
          </p>
          <p>
            We are already deeply integrated with PeopleStrong and others are
            coming up.
          </p>
        </div>

        <div className="card finance">
          <div className="icon"> {/* Icon Placeholder */}
            <img src={finance} alt="Finance Icon" />
          </div>
          <h3>Finance Systems</h3>
          <p>
            Connect us with your finance systems to get all cost centers mapped, 
            and all data reconciled on a periodic/regular basis.
          </p>
          <p>Open APIs available to connect.</p>
        </div>

        <div className="card sso">
          <div className="icon"> {/* Icon Placeholder */}
            <img src={sso} alt="SSO Icon" />
          </div>
          <h3>Single Sign-on Systems</h3>
          <p>
            We can integrate to ensure that your users don’t have to log in multiple
            times into different logins.
          </p>
          <p>
            SSO is possible with any system that offers it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
