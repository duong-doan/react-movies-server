import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DATA_SECTION_DOCUMENTS } from "../store/constants";

function SectionDocuments() {
  return (
    <div className="section-documents">
      {DATA_SECTION_DOCUMENTS.map((item) => (
        <div className="document" key={item.id}>
          <div className="document__img">
            <img src={item.image} alt="" />
          </div>
          <div className="document__content">
            <h1>{item.title}</h1>
            <span>27/03/2020 Camera by Kim Cooke</span>
            <div className="document__share">
              <div>
                <span></span>
                <p>READ MORE</p>
              </div>
              <div>
                <FontAwesomeIcon size="xl" icon="fa-solid fa-share-nodes" />
                <p>share</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionDocuments;
