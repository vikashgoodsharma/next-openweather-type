export function getDayOfWeek(dateString: string) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
}

export function formatDateTime(dateTimeString: string) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateTimeString);

    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Adjusting hours and minutes to ensure they have leading zeros if needed
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

    return <div><span className="font-bold">{dayOfWeek},</span> <span className="text-gray-500">{formattedHours}:{formattedMinutes}</span></div>;
}


export function convertUnixTimestamp(unixTimestamp: any) {
    // Create a new Date object using the Unix timestamp (in seconds)
    const date = new Date(unixTimestamp * 1000);

    // Get hours, minutes, and seconds from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the time components with leading zeros if necessary
    const formattedHours = (hours < 10 ? '0' : '') + hours;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;

    // Return the formatted time string
    return `${formattedHours}:${formattedMinutes}`;
}