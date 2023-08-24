import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { MDXProvider } from "@mdx-js/react";

const P = ({ children }) => <p className="custom-paragraph">{children}</p>;

const components = {
  p: P,
};

export const ViewPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    author: [],
    postText: "",
    title: "",
  });
  const docRef = doc(db, "posts", `${id}`);

  useEffect(() => {
    const getPostDetail = async () => {
      const docSnap = await getDoc(docRef);
      setArticle(docSnap.data());
    };
    getPostDetail();
  }, []);
  

  return (
    <div className="py-20 pt-40 px-5 md:px-0 md:w-1/2 m-auto">
      <div className="" key={article.id}>
        <div className="">
          <h1 className="font-bold text-2xl"> {article.title}</h1>
          <h3 className="text-blue-600 font-bold">@{article.author.name}</h3>
        </div>
        <MDXProvider components={components}>
          <div className=""> {article.postText} </div>
        </MDXProvider>
        
      </div>
    </div>
  );
};
