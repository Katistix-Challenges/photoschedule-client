import { useParams } from "@solidjs/router";
import { Component, createResource } from "solid-js";
import { DayItem } from "../components/DayItem";
import { fetchSchedule, fetchUser } from "../lib/user";



const User: Component = () => {
    const params = useParams();
    const [user] = createResource(params.id, fetchUser);
    const [schedule] = createResource(params.id, fetchSchedule);

    return (
        <div class={"p-4"}>
            <h1 class={"font-medium text-4xl"}>
                {user.loading ? "loading..." : user.error ? "error" : `${user().name}'s schedule`}
            </h1>
            {schedule.loading ? "loading..." : schedule.error ? "error" : (
                <div class="grid grid-cols-7 gap-4">
                    {schedule()?.map((day, index) => {
                        // Get the weekday of day.date
                        const weekday = new Date(day.date).getDay();
                        // Convert the date to something more readable: DD MMM
                        const readableDate = new Date(day.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                        });

                        return (
                            <DayItem
                                isBooked={day.isBooked}
                                onClick={() => {
                                    console.log("click");
                                }}
                                date={day.date}

                            />
                        );
                    })}
                </div>
            )}

        </div>
    );
}

export default User;