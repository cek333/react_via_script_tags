const { useState } = React;

function List(props) {
	const [list, setList] = useState([1,2,3,4,5]);

	return (
		<ul>
			{list.map((el, idx) => <li key={idx}>{el}</li>)}
		</ul>
	);
}

export default List;
