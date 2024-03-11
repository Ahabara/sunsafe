// @ts-nocheck
import {useState} from "react";
import {Skeleton} from "./Skeleton";

function ReminderView({i, start, end}) {

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleString();
    };


    return <li className="py-4">
        <div className="flex space-x-3">
            <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M10 3a1 1 0 0 0-1 1v1.586L5.707 5.293a1 1 0 1 0-1.414 1.414L9 11.414V14a1 1 0 1 0 2 0v-2.586l4.707-4.707a1 1 0 1 0-1.414-1.414L11 5.586V4a1 1 0 0 0-1-1z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">Reminder {i + 1} </p>
                <span className={"flex"}>
                    <p className="truncate text-sm font-medium text-gray-900">Start Time:</p>
                    <p className={" pl-4 text-sm text-gray-500"}>{"  "}{formatTime(start)}</p>
                </span>
                <span className={"flex"}>
                    <p className="truncate text-sm font-medium text-gray-900">End Time:</p>
                    <p className={" pl-4 text-sm text-gray-500"}>{"  "}{formatTime(end)}</p>
                </span>
                {/*<p className="text-sm text-gray-500">You should be reminded to reapply at {formatTime(end)}!</p>*/}
            </div>
        </div>
    </li>;
}

const Reminder = ({coOrds}) => {

    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [reminders, setReminders] = useState([]);
    const [send, setSend] = useState(false);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!validEmail || email.trim() === '') {
            alert('Please enter a valid email.');
            return;
        }
        
        // Create reminder object
        const reminderData = {
            "email": email.trim().toString(),
            "startTime": Math.floor(Date.now() / 1000),
            "endTime": Math.floor(Date.now() / 1000) + (3 * 60 * 60 * 1000),
            "lat": "37.7749",
            "lon": "-122.4194",
        };


        console.log("line 68", reminderData)
        try {
            const response = await fetch('https://fourtitude.me/reminder/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reminderData)
            });

            if (!response.ok) {
                throw new Error('Failed to create reminder.');
            }
            const data = await response.json();
            alert(data.msg);
        } catch (error) {
            console.error('Error creating reminder:', error.message);
            return alert('Failed to create reminder. Please try again later.');
        }
    };

    const handleViewPrevious = async () => {
        if (!validEmail) return alert("Enter a valid email!")
        setIsLoading(true);
        const toSend = send ? '1' : '0';
        //https://fourtitude.me/reminder/get/example@gmail.com&0
        //https://fourtitude.me/reminder/get/example@gmail.com&0
        const url = `https://fourtitude.me/reminder/get/${email}&0`
        // const response = await fetch("https://fourtitude.me/reminder/get/example@gmail.com&0")
        const response = await fetch(url);
        console.log(`https://fourtitude.me/reminder/get/${email}&${toSend}`)
        if (!response.ok) {
            setIsLoading(false);
            alert('Failed to fetch reminders.');
        }
        // alert(`https://fourtitude.me/reminder/get/${email}&${toSend}`)
        const data = await response.json();
        if (data === null) return alert("No Data To Present")
        console.log(data)
        setReminders(JSON.parse(data.data));
        setIsLoading(false);
    };

    let reminderContent;
    if (isLoading) {
        reminderContent = <Skeleton/>;
    } else if (reminders == null) {
        reminderContent = <p>No reminders found!</p>;
    } else if (reminders.length === 0) {
        reminderContent = <p>No reminders found!</p>;
    } else {
        reminderContent = (
            <div>
                <p>Your Reminders: </p>
                <ul className="py-4">
                    {reminders.map((reminder, index) => (
                        <li key={index}>
                            <ReminderView i={index} start={reminder.startTime} end={reminder.endTime}/>
                            {/* Display reminder information */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


    return (
        <div className={"pb-48"}>

            <h1 className={"py-8 text-4xl"}>Need a reminder?</h1>
            <div className={"md:grid grid-cols-2"}>
                <div className="max-w-sm">
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" id="email"
                               className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                               placeholder="fit5122@monash.com"
                               onChange={(e) => {
                                   setEmail(e.target.value);
                                   setValidEmail(validateEmail(e.target.value));
                               }} required/>
                        {!validEmail && email.length > 0 &&
                            <p className="mt-1 text-xs text-red-500">Whoopsy! That doesn't look like a valid email.</p>}
                    </div>
                    <div className="mb-5 flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={send}
                                onChange={() => setSend(!send)}
                                className="h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"

                            />

                        </div>
                        <label
                            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Email
                            me!</label>
                    </div>
                    <button type="submit"
                            onClick={handleSubmit}
                            className="w-full rounded-lg bg-blue-700 px-5 text-center text-sm font-medium text-white py-2.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 sm:w-auto dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                    <button
                        onClick={handleViewPrevious}
                        className="ml-4 w-full rounded-lg bg-blue-50 px-5 text-center text-sm font-medium text-gray-800 py-2.5 hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:bg-blue-200 sm:w-auto dark:hover:bg-blue-200 dark:focus:ring-blue-200">View
                        Previous
                    </button>
                </div>
                <div className={"py-12 md:py-0"}>
                    <div>
                        {reminderContent}
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Reminder;
