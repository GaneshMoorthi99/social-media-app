
import './App.css';
import Header from './Header';
import Home from"./Home";
import Nav from"./Nav";
import NewPost from"./NewPost";
import PostPage from"./PostPage";
import About from"./About";
import Missing from "./Missing";
import Footer from"./Footer";
import { useState , useEffect} from 'react';
import { format } from 'date-fns';
import { Route, Routes, useNavigate } from 'react-router-dom';



export default function App() {
  const[posts,setPosts]=useState([
    {
      id:1,
      title:"My 1st post",
      datetime:"10 oct 2023 4pm",
      body:"setPosts is assigned a value but never used  no-unused-vars"
    },
    {
      id:2,
      title:"My 2nd post",
      datetime:"10 oct 2023 4pm",
      body:"setPosts is assigned a value but never used  no-unused-vars"
    },
    {
      id:3,
      title:"My 3rd post",
      datetime:"10 oct 2023 4pm",
      body:"setPosts is assigned a value but never used  no-unused-vars"
    },
    {
      id:4,
      title:"My 4th post",
      datetime:"10 oct 2023 4pm",
      body:"setPosts is assigned a value but never used  no-unused-vars"
    }  
  ])
  const[search,setSearch]=useState("");
  const[searchResult,setSearchResult]=useState([]);
  const[postBody,setPostBody]=useState('');
  const[postTitle,setPostTitle]=useState('');
  const navigate=useNavigate()

  useEffect(()=>{
    const filteredResults=posts.filter((post)=>(
      ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    ))
    setSearchResult(filteredResults.reverse())
  },[posts,search])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length-1].id+1:1;
    const datetime= format(new Date(),'MMMM dd,yyyy,pp')
    const newPost={id,Title:postTitle,datetime:datetime,body:postBody}
    const allPosts=[...posts,newPost];
    setPosts(allPosts)
    setPostBody('')
    setPostTitle("")
    navigate('/')
  }
  const handleDelete=(id)=>{
    const postsList=posts.filter((post)=>post.id!==id);
    setPosts(postsList)
    navigate('/')
     
   }
  return (
    <div className="App">
 
      <Header title="Social Media"/>
      <Nav 
       search={search}
       setSearch={setSearch}
       />
       <Routes>
         <Route path='/' element={<Home posts={searchResult}/>}/>
         <Route path='post'>
          <Route index element={ <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle}/>}/>
          <Route path=':id' element={<PostPage posts={posts}  handleDelete={handleDelete}/>}/>
          </Route>
        <Route path='about' element={<About/>}/>
        <Route path="*" element={ <Missing/>}/>
      </Routes>
      <Footer/>
     
      
    </div>
  );
}


