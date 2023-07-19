"use client";

import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { IoMdSunny } from 'react-icons/io';
import { BsMoonStarsFill } from 'react-icons/bs';

const ThemeSwitcher = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <>
            <Switch
                size="xs"
                checked={isDark}
                color="primary"
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                iconOn={<IoMdSunny />}
                iconOff={<BsMoonStarsFill />}
            />
        </>
    )
}

export default ThemeSwitcher;