'use client';
import { trpc } from './_trpc/client';
export default function Home() {
	const { mutate: createUser } = trpc.User.createUser.useMutation();

	const clickHandler = () => {
		createUser({
			id: 5,
			name: 'Twins',
			age: 30,
		});
	};

	const userList = trpc.User.getUserList.useQuery().data;
	if (!userList) return <div>Loading</div>;

	return (
		<>
			{userList.map(user => (
				<div key={user.id}>
					{user.name} - {user.age}
				</div>
			))}
			<button onClick={clickHandler}>Create User</button>
		</>
	);
}
