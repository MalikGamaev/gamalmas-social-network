import React, { createRef } from 'react';
import s from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100)

const Dialogs = ({ dialogs, messages, addMessages, isAuth }) => {

	const onClickAddMessages = (values) => {
		addMessages(values.newMessageText)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{
					dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
				}
			</div>
			<div className={s.messages}>
				<div>
					{messages.map(m => <Message message={m.message} name={m.id} />)}
				</div>
				<AddMessageFormRedux onSubmit={onClickAddMessages} />
			</div>
		</div>
	);
};

const AddMessageForm = (props) => {

	return (
		<div className={s.message}>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name='newMessageText' component={Textarea} placeholder='Write here anything!' validate={[required, maxLength100]} />
				</div>
				<div className={s.sendButton}>
					<button>Отправить</button>
				</div>
			</form>
		</div>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;