import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { ViewPost } from "./ViewPost";
import Footer from "../components/Footer";

function Blogs({ isAuth }) {
  const postCollectionRef = collection(db, "posts");
  const [postLists, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const navigate = useNavigate();
  return (
    <>
    <div className="md:w-2/3 px-10 m-auto pt-40">
      <h1 className="text-6xl font-bold text-blue-400">Trending Blogs</h1>
      <div className="w-full flex flex-col gap-10 justify-center items-center my-20 mx-auto">
        {postLists.map((post) => {
          const body = post.postText;
          return (
            <div
              className=" overflow-hidden md:w-[60vw] p-5 rounded-lg border-solid border-2 cursor-pointer"
              key={post.id}
            >
              <div className="flex">
                <div
                  className="font-bold text-xl"
                  onClick={() => {
                    navigate("post/"+post.id);
                  }}
                >
                  <h1> {post.title}</h1>
                </div>
              </div>
              <div
                className="line-clamp-4 text-slate-600 "
                onClick={() => {
                  navigate("post/"+post.id);
                }}
              >
                {/* {post.postText} */}
                <div  dangerouslySetInnerHTML={{__html: body}} />
              </div>
              <h3
                className="font-bold text-blue-500"
                onClick={() => {
                  navigate("user/"+post.author.id);
                }}
              >
                @{post.author.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Blogs;
