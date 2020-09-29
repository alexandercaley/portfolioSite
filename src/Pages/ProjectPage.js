import React from "react";
import PageNotFound from "./PageNotFound";
import { useParams } from "react-router";
import HashMap from "hashmap";

function ProjectPage(props) {
  let project = new HashMap();
  project.multi(
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
  if (!project.has(id)) {
    return <PageNotFound />;
  }
  return (
    <div>
      <h1 className="title">{project.get(id).name}</h1>
    </div>
  );
}

export default ProjectPage;
