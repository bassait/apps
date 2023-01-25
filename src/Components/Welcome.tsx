import { useState } from "react";

interface WelcomeInterface {
    /**
     *  enter your name
     */
    name: string;
}

function Welcome(props: WelcomeInterface) {
    const [app, setApp] = useState(0);
    return <h1>Hello, <button onClick={() => setApp((app) => app + 1 )}>{props.name + app}</button></h1>
}


export default Welcome