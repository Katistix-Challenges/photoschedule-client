import { useParams } from "@solidjs/router";

const Day = () => {
    const params = useParams();

    console.log(params.id, params.day);


    return (
        <div class={"p-4"}>
            <h1 class={"font-medium text-4xl"}>
                Day
            </h1>
        </div>
    );
}

export default Day;