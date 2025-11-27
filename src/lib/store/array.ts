import { Clock, House, MapPinned, NotebookPen, Users } from 'lucide-svelte';

export const navItems = [
	{ id: 'section_1', icon: House, aria: 'Halaman Utama' },
	{ id: 'section_2', icon: MapPinned, aria: 'Denah' },
	{ id: 'section_3', icon: NotebookPen, aria: 'Tata Tertib' },
	{ id: 'section_4', icon: Clock, aria: 'Jadwal Kedatangan' },
	{ id: 'section_5', icon: Users, aria: 'Data Santri' }
];
