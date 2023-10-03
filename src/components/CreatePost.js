import React from 'react';
import './CreatePost.css';

function CreatePost() {
  return (
  <div className="createPostPage">
    <div className="postContainer">
      <h1>記事を投稿する</h1>
      <div className="inputPost">
        <div>タイトル</div>
        <input type="text" placeholder="タイトルを記入" />
      </div>
      <div className="inputPost">
        <div>投稿</div>
        <textarea placeholder="投稿内容を記入" />
      </div>
      <button className="postButton">投稿する</button>
    </div>
  </div>
  )};

export default CreatePost;
