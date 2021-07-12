import React from 'react'
import Picture from './Picture';
import Detail from './Detail';

const Profile = (props) => {
	console.log(props.data);
	return (
		<>
			<h1>
				This is the profile page
			</h1>
			<Picture imageUrl={props.data.picture} />
			<Detail name={props.data.name} email={props.data.email} />
		</>
	)
}

export default Profile;