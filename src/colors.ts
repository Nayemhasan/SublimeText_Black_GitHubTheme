import darkColors from '@primer/primitives/dist/json/colors/dark.json';
import { Primer } from './interfaces';

export function getColors(theme: Primer | 'adaptive') {
    if (theme === 'light') {
        return lightColors;
    } else if (theme === 'dark') {
        return darkColors;
    } else if (theme === 'dimmed') {
        return dimmedColors;
    } else if (theme === 'adaptive') {
        return {...dimmedColors, ...adaptiveColors};
    }
}
