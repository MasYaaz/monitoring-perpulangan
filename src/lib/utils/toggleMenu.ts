import { menuTerbuka } from '../store/ui';

export const toggleMenu = () => {
	menuTerbuka.update((val) => !val);
};
