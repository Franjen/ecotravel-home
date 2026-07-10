import { useEffect, useState } from "react";

import "./ScrollProgress.css";

function ScrollProgress() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        const updateScroll = () => {

            const scrollTop = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / height) * 100;

            setScroll(progress);

        };

        window.addEventListener("scroll", updateScroll);

        updateScroll();

        return () => {

            window.removeEventListener("scroll", updateScroll);

        };

    }, []);

    return (

        <div
            className="scroll-progress"
            style={{
                width: `${scroll}%`
            }}
        ></div>

    );

}

export default ScrollProgress;