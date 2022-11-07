/** @format */

import React, { useEffect, useState } from "react";

import { Post } from "./Post";
import PostDescription from "../Container/PostDescription";
import { AddPost } from "./AddPost";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../Services/FetchPosts";
import { updatePostReducer, addPost } from "../../Store/Actions/actions";
import * as Icon from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal/Modal";
import { showHideModal } from "../../Store/Reducers/modalSlice";
import { NavLink, Link, useLocation } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export function Posts({ onLoadPostDescription, onDeletePost }) {
  // const { posts, isLoading } = useSelector((state) => state.postReducer);

  const [posts, setPosts] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);

  let html = "";
  const fetchBlogs = async () => {
    const userCollectionRef = collection(db, "Posts");

    const data = await getDocs(userCollectionRef);
    // setPosts(data);

    const posts = [];

    data.docs.map((i) => {
      posts.push(i.data());
    });

    setPosts(posts);
  };

  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // console.log(Object.keys(posts));
  //  console.log(Object.keys(posts).forEach((key) => console.log(key)));

  if (true) {
    return (
      <>
        <h1 className='text-3xl'>All Posts</h1>
        <br />
        {html}
        {/* <div className='sticky-top float-right'>
          <Button
            className='btn btn-info'
            onClick={() => dispatch(showHideModal(true))}
            onMouseEnter={() => setButtonText(true)}
            onMouseLeave={() => setButtonText(false)}>
            {buttonText && (
              <span className='createPostButton' disabled>
                Create Post
              </span>
            )}
            <Icon.Plus
              disabled
              color='white'
              size='2rem'
              data-test='deleteButton'
            />
          </Button>
        </div> */}
        <div className='mt50 posts'>
          <AddPost />
          {/* <PostDescription show={show} /> */}
          <ul className='container main leftAlign posts'>
            {posts.length > 0 &&
              posts.map((item, index) => {
                const _date = `${
                  monthArr[new Date(item["date"]).getMonth()]
                } ${new Date(item["date"]).getDate()}, ${new Date(
                  item["date"]
                ).getFullYear()}`;
                return (
                  <li className='py-4 border-b  ' key={index}>
                    <div className=''>
                      <div className=' '>
                        <h3 className='text-2xl'>
                          {/* <NavLink to='/post' state={{ myState: "myStateValue" }}> */}

                          <NavLink
                            state={{
                              date: _date,
                              title: item["title"],
                              desc: item["description"]
                            }}
                            to={{
                              pathname: "/post"
                            }}
                          >
                            {item["title"]}
                          </NavLink>
                        </h3>
                      </div>

                      <div className=' float-right'>
                        <span className='text-xs italic text-gray-400 '>
                          Posted on:{" "}
                        </span>
                        {_date}
                      </div>
                    </div>
                    <div className='py-2'>
                      Tags:
                      {item["tags"].map((i) => {
                        return <span className='pl-1'>{i}</span>;
                      })}
                    </div>
                    {/* <div className='py-2'>{item["description"]}</div> */}
                  </li>
                );
              })}

            {/* {posts.map(post => {
              return (
                <Post
                  data={post}
                  key={post.id}
                  clickHandler={onLoadPostDescription}
                  deleteHandler={onDeletePost}
                />
              );
            })} */}
          </ul>
        </div>
      </>
    );
  } else {
    return <h1>No Posts Found.</h1>;
  }
}

//
// const dispatch = useDispatch();
// import { showHideModal } from "./Store/Reducers/modalSlice";
// import { useDispatch, useSelector } from "react-redux";
