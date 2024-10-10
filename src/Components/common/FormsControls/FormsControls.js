import React from 'react';
import styles from './FormsControls.module.css'
import { Field } from 'react-final-form';

const FormsControls = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				{props.children}
			</div>
			<div className={styles.formControl + ' ' + styles.error}>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	);
}

export const Textarea = (props) => {
	const { input, meta, ...restProps } = props
	return <FormsControls {...props}> <textarea {...input} {...restProps} /></FormsControls>
};

export const Input = (props) => {
	const { input, meta, ...restProps } = props
	return <FormsControls {...props}> <input {...input} {...restProps} /></FormsControls>
};

export const CreateField = (placeholder, name, component, validators, props = {}, text = '') => {
	return (
		<div>
			<Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
		</div>
	)
}