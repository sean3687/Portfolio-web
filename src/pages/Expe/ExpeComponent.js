import React from "react";
import { motion } from "framer-motion";
import {
  projectInfoAnimation_right,
  projectInfoAnimation_left,
} from "../../function/animation";
import "./Expe.css";
import ExpeItems from "./ExperienceItems";

import { Button, ShareIcon } from "evergreen-ui";

const Expe_component = () => {
  return (
    <div className="tab">
      {/* logo: Walletgyde,
        job_title: "Cloud Practitioner",
        company_name : "Walletgyde",
        duration:"skl-txt",
        skills: "#786ad1" */}
      {ExpeItems.map((item) => {
        return (
          <div className="Expe-container">
            <motion.img className="logo" src={item.logo}></motion.img>
            <div className="tab_des">
              <div className="job_title">{item.job_title}</div>
              <div className="compnayInfo">
                <div className="company_name">{item.company_name}</div>
                <div className="location">{item.location}</div>
              </div>
              <div className="duration">{item.duration}</div>
              <div className="list">
                {item.desc.map((desc, index) => {
                  return (
                    <div key={index} className="work_des">
                      {desc.work}
                    </div>
                  );
                })}
              </div>
              <Button
                href={item.link}
                class="showProject"
                iconBefore={ShareIcon}
              >
                Show project
              </Button>
            </div>
            <div className="tab_divider"></div>
          </div>
          
          //
        );
      })}
    </div>
  );
};

export default Expe_component;
