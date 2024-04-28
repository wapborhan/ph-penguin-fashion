const Services = () => {
  return (
    <section className="container mx-auto">
      {/* <!--  --> */}
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          <img src="./images/shopping.png" className="max-w-md flex-1" />
          <div className="flex-row-1 space-y-4">
            {/* <!-- card --> */}
            <div className="card card-side bg-base-100 p-4 shadow-md">
              <figure>
                <img src="./icons/box.png" className="w-20" alt="Movie" />
              </figure>
              <div className="card-body p-2 ml-6">
                <h2 className="card-title">Find the Perfect Fit</h2>
                <p>
                  Everybody is different, which is why we offer styles for every
                  body.
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card card-side bg-base-100 p-4 shadow-md">
              <figure>
                <img src="./icons/box.png" className="w-20" alt="Movie" />
              </figure>
              <div className="card-body p-2 ml-6">
                <h2 className="card-title">Find the Perfect Fit</h2>
                <p>
                  Everybody is different, which is why we offer styles for every
                  body.
                </p>
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="card card-side bg-base-100 p-4 shadow-md">
              <figure>
                <img src="./icons/box.png" className="w-20" alt="Movie" />
              </figure>
              <div className="card-body p-2 ml-6">
                <h2 className="card-title">Find the Perfect Fit</h2>
                <p>
                  Everybody is different, which is why we offer styles for every
                  body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
