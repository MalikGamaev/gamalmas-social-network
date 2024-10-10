import React, { createRef } from 'react';
import s from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Message';
import { Field, Form } from 'react-final-form';
import { CreateField, Textarea } from '../common/FormsControls/FormsControls';
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
				<AddMessageForm onSubmit={onClickAddMessages} />
			</div>
		</div>
	);
};

const AddMessageForm = (props) => {

	return (
		<Form>
			{({ handleSubmit }) => (
				<div className={s.message}>
					<form onSubmit={handleSubmit}>
						<div>
							{CreateField('Write here anything!', 'newMessageText', Textarea, [required, maxLength100])}						</div>
						<div className={s.sendButton}>
							<button>Отправить</button>
						</div>
					</form>
				</div>
			)}
		</Form>

	)
}



export default Dialogs;