import React, { useState } from 'react'

export default function StudentManagement() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [student, setStudent] = useState([])

	const handleChange = setFunc => event => setFunc(event.target.value)

	const handleSubmit = event => {
		event.preventDefault()
		if (name !== '' && age !== '') {
			setStudent(prevStudent => [
				...prevStudent,
				{ id: new Date().toISOString(), name, age }
			])
			setName('')
			setAge('')
		}
	}

	return (
		<div>
			<h1>Quản lý sinh viên</h1>
			<form className="mb-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" class="form-label">
						Tên
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Nhập tên"
						value={name}
						onchange={handleChange(setName)}
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="age" class="form-label">
						Tuổi
					</label>
					<input
						type="text"
						className="form-control"
						id="age"
						placeholder="Nhập tuổi"
						value={age}
						onChange={handleChange(setAge)}
					></input>
					<div className="mt-3">
						<button className="btn btn-primary" type="submit">
							Thêm
						</button>
					</div>
				</div>
			</form>
			<ul className="list-group">
				{student.map(student => (
					<li className="list-group-item" key={student.id}>
						<span className="me-3">
							{student.name}: {student.age} tuổi
						</span>
						<div className="btn-group">
							<button type="button" className="btn btn-info me-3">
								Sửa
							</button>
							<button type="button" className="btn btn-danger">
								Xóa
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}