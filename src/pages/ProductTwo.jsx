import Button from "../components/Button";

const ProductTwo = () => {
  return (
    <section className="my-10 mx-auto lg:px-24 px-0">
      <div className="container mx-auto">
        <div className="text-3xl uppercase font-babes mb-5 mt-32   font-bold">
          man Jacket
        </div>
        <div className="product flex lg:flex-row md:flex-row  flex-col gap-5">
          {/* <!-- Prodact Card --> */}
          <div className="card w-96 bg-base-100 shadow-xl dark:border-2 border-neutral-200">
            <figure className="m-4 p-8 bg-gray-100 rounded-md">
              <img
                src="./images/jacket-5.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-4 pt-2">
              <h2 className="card-title">Yellow Coat Jacket </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <div className="text-amber-500 font-semibold text-2xl">
                  $234
                </div>
                <Button />
              </div>
            </div>
          </div>
          {/* <!-- Prodact Card --> */}
          <div className="card w-96 bg-base-100 shadow-xl dark:border-2 border-neutral-200">
            <figure className="m-4 p-8 bg-gray-100 rounded-md">
              <img
                src="./images/jacket-6.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-4 pt-2">
              <h2 className="card-title">Yellow Coat Jacket </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <div className="text-amber-500 font-semibold text-2xl">
                  $234
                </div>
                <Button />
              </div>
            </div>
          </div>
          {/* <!-- Prodact Card --> */}
          <div className="card w-96 bg-base-100 shadow-xl dark:border-2 border-neutral-200">
            <figure className="m-4 p-8 bg-gray-100 rounded-md">
              <img
                src="./images/jacket-4.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-left p-4 pt-2">
              <h2 className="card-title">Yellow Coat Jacket </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <div className="text-amber-500 font-semibold text-2xl">
                  $234
                </div>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTwo;
