import React from "react";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router";
import HashMap from "hashmap";

function ProjectPage(props) {
  let projectData = new HashMap();
  projectData.multi(
    "hello",
    {
      name: "Hi There",
    },
    "bye",
    {
      name: "Bye There",
    }
  );
  let { id } = useParams();
  if (!projectData.has(id)) {
    return <PageNotFound />;
  }
  return (
    <div>
      <h1 className="title">{projectData.get(id).name}</h1>
    </div>
  );
}

export default ProjectPage;
