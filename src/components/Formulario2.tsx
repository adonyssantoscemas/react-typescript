import { ChangeEvent, useState } from "react"

export const Formulario = () => {

	const [formulario, setFormulario] = useState({
		postal: '',
		city: ''
	});

	const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
		const { name, value } = target;
	
		setFormulario({
			...formulario,
			[ name ]: value
		})
	}

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Codigo postal:</label>
				<input type="text" className="form-control" name="postal" onChange={ handleChange } />
			</div>

			<div className="mb-3">
				<label className="form-label">City:</label>
				<input type="text" className="form-control" name="city" onChange={ handleChange } />
			</div>

			<pre>{ JSON.stringify(formulario) }</pre>
		</form>
	)
}