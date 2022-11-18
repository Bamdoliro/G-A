import Feed from "../PostList/Feed";
import PostListData from "../../../data/PostListData.json"

export default function FeedFrame() {
    return (
        <>
            {
                PostListData.map((data, index) => (
                        <Feed
                            key={index}
                            Title={data.title}
                            content={data.content}
                            numberOfComment={data.numberOfComment}
                            numberOfLikes={data.numberOfLikes}
                        />
                    )
                )
            }
        </>
    )
}
