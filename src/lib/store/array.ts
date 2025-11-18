import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Clock, House, MapPinned, NotebookPen, Users } from 'lucide-svelte';

export const menuItems = [
	{
		id: 'section_2',
		icon: MapPinned,
		text: 'Denah'
	},
	{
		id: 'section_3',
		icon: NotebookPen,
		text: 'Tata Tertib'
	},
	{
		id: 'section_4',
		icon: Clock,
		text: 'Jadwal'
	},
	{
		id: 'section_5',
		icon: Users,
		text: 'Data Santri'
	}
];

export const navItems = [
	{ id: 'section_1', icon: House, aria: 'Halaman Utama' },
	{ id: 'section_2', icon: MapPinned, aria: 'Denah' },
	{ id: 'section_3', icon: NotebookPen, aria: 'Tata Tertib' },
	{ id: 'section_4', icon: Clock, aria: 'Jadwal Kedatangan' },
	{ id: 'section_5', icon: Users, aria: 'Data Santri' }
];

export const socialMedia = [
	{
		href: 'https://www.instagram.com/ikpmgontorsurabaya/',
		aria: 'Instagram',
		icon: faInstagram
	},
	{
		href: 'https://web.facebook.com/ikpmsby/',
		aria: 'Facebook',
		icon: faFacebook
	}
];
