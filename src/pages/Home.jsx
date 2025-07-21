import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://new-blogs-backend.onrender.com/api/posts");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    if (!posts.length) {
        return <div className="spinner"></div>;
    }

    if (posts.length === 0) {
        return <div>No posts available</div>;   
    }


    return (
        <div className="home-grid">
            {posts.map((post) => (
                <Link key={post._id} to={`/post/${post._id}`} className="post-card">
                    <img src={post.photo} alt="post" />
                    <h3>{post.title}</h3>
                    <p>{post.desc.substring(0, 50)}...</p>
                  <p>
    {Array(post.rating).fill("⭐").join(" ")}
</p>


                </Link>
            ))}
        </div>
    );
};

export default Home;
