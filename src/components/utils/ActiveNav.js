import router from "next/router";
import { useEffect, useState } from "react";

const OpenMenu = (route) => {

    const [activNav, setActivNav] = useState('');

    useEffect(() => {
        const { asPath } = router;
        const hasRouter = route.find(item => item == asPath);

        if (hasRouter) {
                setActivNav('open');
        }
    }, [])

    return activNav

}

export { OpenMenu };