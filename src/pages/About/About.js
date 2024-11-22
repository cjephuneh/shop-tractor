import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10 px-20">
        <h1 className="max-w-[600px]  text-lightText mb-2 text-xl">
          <span className="text-primeColor font-semibold text-lg">Ask Giver</span>{" "}<br/>
          AskGiver is a platform that connects people with items they have and are willing to give out for
          free with individuals who have needs and would like to get them for free. <br/> The two parties can
          always meet through the platform; one requests and another accepts. Finally, the two can meet
          physically, and the receiver picks the item from the giver.<br/> Alternatively, the receiver can get the
          items delivered by AskGiver in some places.<br/>
          <span className="text-primeColor font-semibold text-lg">Solutions that AskGiver Provide</span><br/>
          Millions of people possess items they no longer need, while others lack access to these very
          items. This disconnect between surplus and need represents a significant challenge in our
          society. Current resource-sharing mechanisms often fall short, leaving valuable items unused and
          underserved communities without vital resources. AskGiver aims to bridge this gap efficiently
          and equitably, unlocking the dormant potential of resource sharing for the benefit of all at no
          cost.<br/>
          <span className="text-primeColor font-semibold text-lg">Key Pillars</span><br/>
          <span className="text-primeColor font-semibold text-lg">Reducing Waste</span><br/>

          AskGiver promotes the culture of reuse and recycling by facilitating the exchange of items that
          are no longer needed by one person but can be useful to another.
          Alleviating Poverty
          AskGiver provides a platform where individuals can access items they need without having to
          pay for them, thereby reducing the financial burden on those who may not have the means to
          purchase them.<br/>
          <span className="text-primeColor font-semibold text-lg">Building Community</span><br/>
         
          With the increasing isolation brought on by modern technology, AskGiver creates a platform for
          people to connect and build relationships. It provides an opportunity for individuals to help each
          other and foster a sense of community.<br/>
          <span className="text-primeColor font-semibold text-lg">Addressing Inequality</span><br/>
          AskGiver provides a means for individuals to access items they need regardless of their financial
          status, thus reducing inequality.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
