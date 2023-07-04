"use client";
import React from "react";
import Title from "../../utils/Title/Title";
import MyPortfolio from "../MyPortfolio/MyPortfolio";

const MyWorks = () => {
  return (
    <section id="Work" className="text-gray-600 body-font">
      <Title title="work" mytitle="my work" />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <MyPortfolio/>
        
          {/* <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://exd84vez8fu.exactdn.com/wp-content/uploads/2021/03/codepen-html-css-javascript-testing.png"
                alt="blog"
                width={200}
                height={200}
              />
              <div className="card-body">
                <h2 className="card-title  text-white">Codepen Clone</h2>
                <span className="text-gray-400">
                  <ul>
                    <li>
                      • Designed & Developed a Web App with back-end using Rapid
                      API & front-end using React Js & Material UI
                    </li>
                    <li>
                      • Added feature for users to edit HTML, CSS, JS & make a
                      website online.
                    </li>
                  </ul>
                </span>
                <div className="card-actions justify-end">
                  <a
                    href="https://github.com/rafiulaanam/codepen-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">
                      Github
                    </div>
                  </a>
                  <a
                    href="https://codepen-clonee.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">Live</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://media.designrush.com/articles/1628/conversions/_1523977145_341_ecommerce-details.jpg"
                alt="blog"
                width={200}
                height={200}
              />
              <div className="card-body">
                <h2 className="card-title  text-white">PhoneFly</h2>
                <span className="text-gray-400">
                  <ul>
                    <li>
                      • Designed & Developed a Web App with back-end on Node Js,
                      Express Js & MongoDB database & front-end using React Js &
                      Tailwind CSS
                    </li>
                    <li>
                      • Added feature for user to updated modal phone & admin
                      can display update & delete sellers & buyers.
                    </li>
                  </ul>
                </span>
                <div className="card-actions justify-end">
                  <a
                    href="https://github.com/rafiulaanam/PhoneFly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">
                      Github
                    </div>
                  </a>
                  <a
                    href="https://phoneflyy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">Live</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://reactjsexample.com/content/images/2021/12/Doctors-Portal.jpg"
                alt="blog"
                width={200}
                height={200}
              />
              <div className="card-body">
                <h2 className="card-title  text-white">Doctors Portal</h2>
                <span className="text-gray-400">
                  <ul>
                    <li>
                      • Designed & Developed a Web App with back-end on Node Js,
                      Express Js & MongoDB database & front-end using React Js &
                      Tailwind CSS.
                    </li>
                    <li>
                      • Added feature for user to access all types of doctors in
                      one place & admin can display update & delete users &
                      doctors.
                    </li>
                  </ul>
                </span>
                <div className="card-actions justify-end">
                  <a
                    href="https://github.com/rafiulaanam/doctors-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">
                      Github
                    </div>
                  </a>
                  <a
                    href="https://doctors-portall.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-accent badge-outline">Live</div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
