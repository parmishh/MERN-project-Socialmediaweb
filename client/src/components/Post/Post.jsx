import React, { useState } from "react";
import "./Post.css";
import {themes} from "../NavIcons/theme.js"
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import copy from "../../img/copy.png";
import cloud from "../../img/cloud.png";
import pencil from "../../img/pencil.png";
import before from "../../img/before.gif";
import after from "../../img/after.gif";
import sad from "../../img/sad.png";
import sadgif from "../../img/sadgif.gif";
import Heart from "../../img/like.png";
import black from "../../img/black.png";
import white from "../../img/white.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { emoji } from "../../api/PostsRequests";
import { emoji1 } from "../../api/PostsRequests";

import { useSelector } from "react-redux";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { srcery } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CommentList,CommentForm,CommentBox} from "../comment/Comment";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";




 
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);







const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)
  const [emojied, setemojied] = useState(data.emojies.includes(user._id));
  const [emojies, setemojies] = useState(data.emojies.length)
  const [emojied1, setemojied1] = useState(data.emojies1.includes(user._id));
  const [emojies1, setemojies1] = useState(data.emojies1.length)
 
  //let html = hljs.highlightAuto(data.desc)

  
    const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
    };

    const handleemoji = () => {
      emoji(data._id, user._id);
      setemojied((prev) => !prev);
      emojied? setemojies((prev)=>prev-1): setemojies((prev)=>prev+1)
      };

      const handleemoji1 = () => {
        emoji1(data._id, user._id);
        setemojied1((prev) => !prev);
        emojied1? setemojies1((prev)=>prev-1): setemojies1((prev)=>prev+1)
        };

     

   
   
 
 
        
  
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />

          <img
          src={emojied ? after : white}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleemoji}
          />
              

              <img
           src={emojied1 ? sad: sadgif}
           alt=""
           style={{ cursor: "pointer" }}
           onClick={handleemoji1}
             />




       
        
       





         <a href="http://localhost:3000/chat">
        <img src={Comment} alt="" 
        
        />
        </a>
        <img 
        src={Share} 
        alt="" 
        style={{ cursor: "pointer" }}
        onClick={() => { navigator.clipboard.writeText(data.desc)} }
        
        

        />

         <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" data-toggle="tooltip" data-placement="top"   title="share">
        <img 
        src={cloud} 
        alt="" 
        style={{ cursor: "pointer" }}
        onmouseover="share"
            

         />
         </a>
         
         <img src={pencil}></img>
         
        <textarea className="lk" id="kkk" spellcheck="false" >{data.desc}</textarea>

        <img 
        className="decrease"
        src={copy} 
        alt="" 
        style={{ cursor: "pointer" }}
        onClick={() => { navigator.clipboard.writeText(document.getElementById('kkk').value)} }
        
        

        />
        
        

       
        
        

        
        
         
         
         
         


       
      











      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
        
        
      </span>
     
      
      <div className="detail" >
        <span>
          <b>{data.name} </b>
        </span>
        
        
        <pre className="nn" ><SyntaxHighlighter className="nj" language={"javascript"}  style={sunburst} showLineNumbers="true"  customStyle={{borderRadius: "3px"}}>{data.desc}</SyntaxHighlighter></pre>
        
       
        
        <CommentBox/>
        <CommentList/>
        
        
       
      </div>
    </div>
  );
};

export default Post;
