import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { user } = await parent();

	if (user) {
		redirect(302, '/home');
	}
}