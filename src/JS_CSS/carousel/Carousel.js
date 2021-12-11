import axios from "axios";
import React, { useState } from "react";
import Carousels from "../../components/Carousels";

const baseURL = "http://localhost:4000/posts";

export default function Carousel() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Carousels carouselObj={post}></Carousels>
    </div>
  );
}

// const carouselObj = [
//   {
//     srcurl: "https://joinpath.in/BackgroundImages/blackboard.webp",
//     title: "Wep App",
//     shortDesc: "We build your buissiness app",
//   },
//   {
//     srcurl: "https://joinpath.in/BackgroundImages/blackboard.webp",
//     title: "Windows app",
//     shortDesc: "We build software for you system",
//   },
// ];

// export default carouselObj;
