import { writable } from 'svelte/store';
import { supabase } from '../connection/supabaseClient';

export const notifications = writable<string[]>([]);

export function pushNotification(msg: string) {
	let shouldDiscard = false;

	notifications.update((n) => {
		// kalau sudah ada notifikasi aktif, tandai supaya pesan baru diabaikan
		if (n.length > 0) shouldDiscard = true;
		return [...n, msg];
	});

	if (shouldDiscard) {
		// langsung hilangkan pesan baru (tidak tunggu 3 detik)
		setTimeout(() => {
			notifications.update((n) => n.slice(1));
		}, 200);
	} else {
		// kalau tidak ada notifikasi lain, tampilkan selama 3 detik
		setTimeout(() => {
			notifications.update((n) => n.slice(1));
		}, 3000);
	}
}

let channels: any[] = [];

type KedatanganPondok = {
	pondok: string;
};

export function subscribeRealtime() {
	if (channels.length > 0) return;
	// Kedatangan Pondok
	const ch1 = supabase
		.channel('kedatangan_pondok_changes')
		.on(
			'postgres_changes',
			{ event: '*', schema: 'public', table: 'kedatangan_pondok' },
			async (payload) => {
				const kedatangan = payload.new as KedatanganPondok;
				if (kedatangan?.pondok) {
					pushNotification(`Selamat Datang ${kedatangan.pondok}`);
				}
			}
		)
		.subscribe();
}
