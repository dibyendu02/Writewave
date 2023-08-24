import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";

export const ViewUser = () => {
  const id = useParams();
  const [users, setUsers] = useState([]);
  const postCollectionRef = collection(db, "posts");
  const [postLists, setPostList] = useState([]);

  const usersRef = collection(db, "users");

  useEffect(() => {
    window. scrollTo(0, 0);

    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    console.log("post useEffect run");
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    console.log("user useEffect run");
  }, []);

  const navigate = useNavigate();

  console.log(id.userid)
  

  return (
    <>
      <div className="min-h-screen md:w-1/2 m-auto">
      {users.map((user) => {
        if(user.userid === id.userid){
            return (
                <div className="md:pt-60 pt-40 mx-8 flex flex-col items-center gap-10 text-center" key={user.userid}>
                <img
                  src={user.photoUrl}
                  alt="profile photo"
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-bold text-xl">
                    {user.name}
                  </h1>
                  <p>{user.email}</p>
                </div>
              </div>
            )
        }
        else {
            return null;
          }
    })}
              
            

        <div className="w-full flex flex-col gap-10 justify-center items-center my-20 md:mx-auto px-5">
          {postLists.map((post) => {
            if (post.author.id === id.userid) {
              return (
                <div
                  className="overflow-hidden p-5 rounded-lg border-solid border-2 cursor-pointer"
                  key={post.id}
                >
                  <div className="flex justify-between ">
                    <div
                      className="font-bold text-xl"
                      onClick={() => {
                        navigate("../blogs/post/" + post.id);
                      }}
                    >
                      <h1> {post.title}</h1>
                    </div>
                  </div>
                  <div
                    className="line-clamp-4 text-slate-600"
                    onClick={() => {
                        navigate("../blogs/post/" + post.id);
                      }}
                  >
                    {" "}
                    {post.postText}{" "}
                  </div>
                  <h3 className="font-bold text-blue-500">
                    @{post.author.name}
                  </h3>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};
