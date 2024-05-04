export const fetchUser = async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    return response.json();
};

export const fetchSchedule = async (id: string) => {
    const result = [
        { date: "2024-07-01", isBooked: false },
        { date: "2024-07-02", isBooked: true },
        { date: "2024-07-03", isBooked: false },
        { date: "2024-07-04", isBooked: false },
        { date: "2024-07-05", isBooked: true },
        { date: "2024-07-06", isBooked: false },
        { date: "2024-07-07", isBooked: false },
        { date: "2024-07-08", isBooked: true },
        { date: "2024-07-09", isBooked: false },
        { date: "2024-07-10", isBooked: false },
        { date: "2024-07-11", isBooked: true },
        { date: "2024-07-12", isBooked: false },
        { date: "2024-07-13", isBooked: false },
    ];
    return result;
};
