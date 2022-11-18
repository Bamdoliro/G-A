import GatiFeed from "../GatiPostList/GatiFeed";
import GatiListData from "../../../data/GatiListData.json"

export default function GatiFeedFrame() {
    return (
        <>
            {
                GatiListData.map((data, index) => (
                        <GatiFeed
                            key={index}
                            id={data.id}
                            capacity={data.capacity}
                            title={data.title}
                            content={data.content}
                            startDate={data.startDate}
                            endDate={data.endDate}
                        />
                    )
                )
            }
        </>
    )
}
