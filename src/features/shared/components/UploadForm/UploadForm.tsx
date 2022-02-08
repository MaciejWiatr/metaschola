import * as React from "react";
import { fireAuth } from "$features/shared";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	DropZone,
	Form,
	FormContainer,
	FormHeader,
	FormHeaderImage,
	FormHeaderName,
	FormHeaderSelect,
	FormInput,
	FormLabel,
	FormPublishButton,
	FormTextArea,
	ImagePreview,
} from "./UploadForm.styles";
import { Switch, Case } from "react-if";
import { useForm } from "react-hook-form";
import { useDropArea } from "react-use";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import fireStorage from "$features/shared/firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import db from "$features/shared/firebase/db";
import HashLoader from "react-spinners/HashLoader";

const UploadForm = () => {
	const [user] = useAuthState(fireAuth);
	const [selectVal, setSelectVal] = useState("mem");
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, setValue, getValues, reset } = useForm();
	const [bond, state] = useDropArea({
		onFiles: (files: File[]) => {
			setValue("image", files[0]);
		},
	});

	const onSubmit = async (data: { text: string; image?: File }) => {
		const { text, image } = data;
		setLoading(true);
		let imageUrl: null | string = null;
		if (image) {
			const imageRef = ref(fireStorage, `${user?.uid}/${image?.name}`);
			const uploadSnap = await uploadBytes(imageRef, image);
			imageUrl = await getDownloadURL(uploadSnap.ref);
		}
		const docRef = await addDoc(collection(db, "posts"), {
			type: selectVal,
			author: {
				name: user?.displayName,
				id: user?.uid,
				img: user?.photoURL,
			},
			content: {
				text,
				image: imageUrl,
			},
			createdAt: new Date(),
			reactions: {
				likes: 0,
				dislikes: 0,
			},
		});

		console.log("Document written with ID: ", docRef.id);
		reset();
		setLoading(false);
	};

	return (
		<FormContainer>
			<FormHeader>
				<FormHeaderName>
					<FormHeaderImage src={user?.photoURL!}></FormHeaderImage>
					<div>{user?.displayName}</div>
				</FormHeaderName>
				<FormHeaderSelect
					value={selectVal}
					onChange={(e) => setSelectVal(e.target.value)}
				>
					<option value="mem">Memawka</option>
					<option value="spotted">Spotted</option>
					<option value="info">Info</option>
				</FormHeaderSelect>
			</FormHeader>
			<Form
				onSubmit={handleSubmit(
					async (data) => await onSubmit(data as any)
				)}
			>
				<Switch>
					<Case condition={selectVal === "mem"}>
						<FormInput
							placeholder="Napisz krótki opis"
							{...register("text")}
						/>
						<DropZone {...bond}>
							{getValues("image")
								? `Plik "${getValues("image").name}" został
									wybrany`
								: "Upuść tutaj swój mem"}
						</DropZone>
						{getValues("image") && (
							<>
								<FormLabel>Podgląd:</FormLabel>
								<ImagePreview
									src={URL.createObjectURL(
										getValues("image")
									)}
								/>
							</>
						)}
					</Case>
					<Case condition={selectVal === "info"}>
						<FormTextArea
							placeholder="Napisz coś miłego ❤"
							{...register("text")}
						/>
						<DropZone {...bond}>
							{getValues("image")
								? `Plik "${getValues("image").name}" został
									wybrany`
								: "Upuść tutaj swój obrazek"}
						</DropZone>
						{getValues("image") && (
							<>
								<FormLabel>Podgląd:</FormLabel>
								<ImagePreview
									src={URL.createObjectURL(
										getValues("image")
									)}
								/>
							</>
						)}
					</Case>
					<Case condition={selectVal === "spotted"}>
						<FormTextArea
							placeholder="Napisz coś miłego"
							{...register("text")}
						/>
					</Case>
				</Switch>
				<FormPublishButton type="submit">
					{!loading ? (
						"Opublikuj"
					) : (
						<HashLoader color="#f3f4f6" size={20} />
					)}
				</FormPublishButton>
			</Form>
		</FormContainer>
	);
};

export default UploadForm;
