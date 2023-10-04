import React,{useEffect, useState} from 'react';
import './Home.css'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () =>{
      const data = await getDocs(collection(db,"posts"));
      //console.log(data);
      //console.log(data.docs.map((doc) => ({doc})));
      //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPost()
  },[]);


  return (
  <div className='homePage'>
    {postList.map((post) => {
      return (
        <div className='postContents' key={post.id}>
          <div className="postHeader">
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContainer'>
            {post.postsText}
          </div>
          <div className='nameAndDeleteButton'>
            <h3>{post.author.username}</h3>
            <button>削除</button>
          </div>
        </div>
      );
    })}
  </div>
  )};

export default Home;
