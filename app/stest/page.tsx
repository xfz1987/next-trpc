import { STRPC } from '@/app/_trpc/serverClient';

export default async function Home() {
	const userList = await STRPC.User.getUserList();

	const createAction = async () => {
		'use server';
		await STRPC.User.createUser({
			id: 5,
			name: 'Jack',
			age: 6,
		});
	};

	return (
		<>
			{userList.map(user => (
				<div key={user.id}>
					{user.name} - {user.age}
				</div>
			))}
			<form action={createAction}>
				<button>Create User</button>
			</form>
		</>
	);
}
