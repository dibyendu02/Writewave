import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { ViewPost } from "./ViewPost";

function Profile({ isAuth }) {
  const postCollectionRef = collection(db, "posts");
  const [postLists, setPostList] = useState([]);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    console.log("post useEffect run")
  }, []);

  useEffect(() => {
    if (!isAuth) {
      console.log("Redirecting to /login");
      navigate("/login");
    }
    if(isAuth && auth.currentUser){
      console.log(auth.currentUser.uid)
      setUserId(auth.currentUser.uid);  
    }
    console.log("auth useEffect run")
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };


  return (
    <>
      {isAuth && (
        <div className="min-h-screen md:w-1/2 m-auto">
          {(auth.currentUser) && <div className="md:pt-60 pt-40 mx-8 flex flex-col items-center gap-10 text-center">
            {/* <img
              src={auth.currentUser.photoURL}
              alt="profile photo"
              className="rounded-full"
            /> */}
            <h1 className="font-bold text-2xl">User Details</h1>
            <img src={auth.currentUser.photoURL} alt="profile photo" className="rounded-full" />
            <div>
              <h1 className="font-bold text-xl">
                {auth.currentUser.displayName}
              </h1>
              <p>{auth.currentUser.email}</p>
            </div>
          </div>}
          <div className="w-full flex flex-col gap-10 justify-center items-center my-20 md:mx-auto px-5">
            {postLists.map((post) => {
              if (post.author.id === userId) {
              return (
                <div
                  className="overflow-hidden p-5 rounded-lg border-solid border-2 cursor-pointer"
                  key={post.id}
                >
                  <div className="flex justify-between ">
                    <div
                      className="font-bold text-xl"
                      onClick={() => {
                        navigate(post.id);
                      }}
                    >
                      <h1> {post.title}</h1>
                    </div>
                    <div className="text-2xl">
                      {isAuth && post.author.id === auth.currentUser.uid && (
                        <button
                          className=" w-20 h-10"
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          &#128465;
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    className="line-clamp-4 text-slate-600"
                    onClick={() => {
                      navigate(post.id);
                    }}
                  >
                    {" "}
                    {post.postText}{" "}
                  </div>
                  {/* <h3 className="font-bold text-blue-500">
                    @{post.author.name}
                  </h3> */}
                </div>
              );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
