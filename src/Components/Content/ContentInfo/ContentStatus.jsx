import React, { useEffect, useState } from 'react';

const ContentStatus = (props) => {
	const [state, setState] = useState(false)
	const [status, setStatus] = useState(props.status)

	const onChangeStatus = (e) => {
		setStatus(e.currentTarget.value)
	}

	const clickUpdateStatus = () => {
		setState(false)
		props.updateStatus(status)
	}

	useEffect(() => {

		setStatus(props.status)

	}, [props.status])

	return (
		<div>
			{!state
				? <div>
					<span onDoubleClick={() => setState(true)}> {status ? status : "Нет статуса"}</span>
				</div>
				: <div>
					<input onChange={onChangeStatus} autoFocus={true} onBlur={clickUpdateStatus} value={status} />
				</div>
			}
		</div>
	);
};

export default ContentStatus;