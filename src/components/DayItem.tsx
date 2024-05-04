import { A } from "@solidjs/router";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


type DayItemProps = {
    date: string;
    onClick: () => void;
    isBooked: boolean;
};

export const DayItem = (props: DayItemProps) => {

    const weekday = new Date(props.date).getDay();
    const readableDate = new Date(props.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
    });

    return (
        <A href={`./${props.date}`}>
            <div class={`p-4 bg-gray-100 border ${props.isBooked ? "border-gray-200" : "border-red-500"}`} onClick={props.onClick}>
                <div class="text-sm font-medium text-gray-700">{weekdays[weekday]}</div>
                <div class="text-lg font-bold text-gray-800">{readableDate}</div>
            </div>
        </A>
    );
}