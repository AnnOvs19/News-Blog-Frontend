import React, { useEffect, useState } from "react";

import "./newsPost.scss";
import { fetchGetOne } from "../../api/fetchGetOne";
import NewsView from "../NewsView/NewsView";
import { useParams } from "react-router";

const NewsPost = () => {
  const [dataPost, setDataPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchGetOne(id).then((res) => {
      setDataPost(res);
    });
  }, []);

  return (
    <div className="newsPost">
      <div className="newsPost-box">
        {dataPost != null ? <NewsView data={dataPost} key={id} /> : ""}
      </div>
    </div>
  );
};

export default NewsPost;
