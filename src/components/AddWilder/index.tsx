/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ReactComponent as LoadingIcon } from "../../icons/hourglass.svg";
import SERVER_URL from "../../utils/getUrl";
import { Form, Input, Label, Button } from "../../elements/elements";

import useDelay from '../../hooks/useDelay';

const AddWilder = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false);
	const [delayed, setDelayed] = useDelay(500);
	

	const formik = useFormik({
		initialValues: {
			name: "",
			city: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(15, "Must be 15 characters or less")
				.required("Required"),
			city: Yup.string().required("Required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				setDelayed(true);
				setIsLoading(true);
				
				 await axios.post(SERVER_URL, {
					name: values.name,
					city: values.city,
				});
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
                resetForm();
                console.log("submitted");
			}
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Label htmlFor='name'>Name: </Label>
			<Input
				id='name'
				name='name'
				placeholder='Type the name'
				type='text'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{formik.touched.name && formik.errors.name ? (
				<div>{formik.errors.name}*</div>
			) : null}
			<Label htmlFor='city'>City: </Label>
			<Input
				id='city'
				name='city'
				placeholder='Type the city'
				type='text'
				value={formik.values.city}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			{formik.touched.city && formik.errors.city ? (
				<div>{formik.errors.city}*</div>
			) : null}
			<Button
				disabled={isLoading}
				showLoading={isLoading && !delayed}
				type='submit'
			>
				{!delayed && isLoading ? <LoadingIcon /> : "add"}
			</Button>
		</Form>
	);
};

export default AddWilder;
