import React from 'react';


const Home = () => {
  return (
    <>
      <h1>
        <div className="container-fluid text-center memo">
          PLUMBING SERVICES
        </div>
      </h1>

      <div className="container-fluid mama">
        <div className="container white">
          <h1>Our Mission</h1>
          <p>Our goal is to bring the highest quality, integrity, and customer service.</p>

          <h2>Satisfaction Guarantee</h2>
          <p>We guarantee and stand behind all of our work with a 110% satisfaction guarantee. If our work is not done to your expectations the first time, we will come back and work on it until you are 110% satisfied - FREE on the second visit.</p>

          <h2>Contact Information</h2>
          <p>For service or more information, please call <a href="tel:604-719-2136">604-719-2136</a> for all inquiries, or schedule an appointment online and we will call you back for a confirmation. We offer 24/7 service.</p>
        </div>
      </div>

      {/* Wrapper with fixed background image */}
      <div className="background-wrapper">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card custom-card">
                <div className="card-body text-center pt-5">
                  <article>
                    <h2><img src="https://www.impetusplumbingheating.com/images/icons/excellent-service-icon.svg" alt="" width={170} /></h2>
                    <h3>EXCELLENT SERVICE</h3>
                    <p>
                      At Impetus Plumbing and Heating, we believe that our customers always come first.
                      Our greatest strength is that we listen and we create solutions to all your problems.
                      Not only do we create solutions, we love educating our customers, so if you ever have
                      any questions on what we're doing or you're curious about anything to do with plumbing,
                      drainage, heating, and gas, please do not hesitate to ask our friendly technicians –
                      you can even give us a call! Every customer is special to us and that is why we strive
                      to give the best service out there and go the extra mile. When you call us, you can rest
                      assured that you will be in good hands. From plumbing, to drainage, to heating, to gas,
                      we'll make it happen!
                    </p>
                    <p>
                      <strong>READ REVIEWS</strong>
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card custom-card">
                <div className="card-body text-center pt-5">
                  <article>
                    <h2><img src="https://www.impetusplumbingheating.com/images/icons/always-on-time-icon.svg" alt="" width={170} /></h2>
                    <h3>ALWAYS ON TIME</h3>
                    <p>
                      As there are only 24 hours a day, having to deal with a plumbing/heating problem is
                      already troublesome enough but sometimes you might have to take time off your work or
                      you might even have plans to tend to on your hectic schedule. At Impetus Plumbing and
                      Heating, we value and respect your time. In doing so, we make sure that we are always on time.
                      We offer a 1-hour time frame to show up at your door. Before we show up at any job, we will
                      confirm with our customers via phone call that we are on our way and the approximate time
                      we will show up within that hour. If we do not give a confirmation or we are late within the
                      1-hour time frame *without giving notification*, we will take 15% off your bill for your time.
                      This is to ensure and show our customers that we deeply value and respect their time.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card custom-card">
                <div className="card-body text-center pt-5">
                  <article>
                    <img src="https://www.impetusplumbingheating.com/images/icons/book-online-icon.svg" alt="" width={170} />
                    <h2>EASY TO BOOK AS 1-2-3</h2>
                    <p>
                      Booking is usually the hard part of the process and sometimes you don't even know if you have
                      gotten through. With our system, you can either call to book and give us your availability, or
                      you can book online by clicking <a href="#">here</a>! Once we've received your request, we will
                      always reply with a confirmation and schedule a date and time best suited for you. From then on,
                      you can relax and ask questions while we fix your problem!
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
