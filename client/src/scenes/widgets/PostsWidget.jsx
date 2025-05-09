import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = (useSelector((state) => state.posts));
    const token = useSelector((state) => state.token);

    const getPosts = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setPosts({ posts: Array.isArray(data) ? data : [] }));
    };

    const getUserPosts = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${userId}/posts`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setPosts({ posts: (data) ? data : [] }));
    };

    useEffect(() => {
        if (isProfile) {
            getUserPosts();
        } else {
            getPosts();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {Array.isArray(posts) && posts.map(post => (
                <PostWidget
                    key={post._id}
                    postId={post._id}
                    postUserId={post.userId}
                    name={`${post.firstName} ${post.lastName}`}
                    description={post.description}
                    location={post.location}
                    picturePath={post.picturePath}
                    userPicturePath={post.userPicturePath}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </>
    );

};

export default PostsWidget;
