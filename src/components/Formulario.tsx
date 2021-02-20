import { useForm } from "../hooks/useForm";

export const Formulario = () => {
	
	const { formulario, handleChange } = useForm({
		email: 'adonys@gmail.com',
		name: 'Adonys Santos'
	});
	
	const { email, name } = formulario;

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Email:</label>
				<input type="email" className="form-control" name="email" value={ email } onChange={ handleChange } />
			</div>

			<div className="mb-3">
				<label className="form-label">Name:</label>
				<input type="text" className="form-control" name="name" value={ name } onChange={ handleChange } />
			</div>

			<pre>{ JSON.stringify(formulario) }</pre>
		</form>
	)
}