export default function CreateArea() {
	return (
		<div className='card items-center'>
			<div className='card w-96 bg-base-100 shadow-md shadow-primary'>
				<div className='card-body'>
					<form>
						<input
							name='title'
							type='text'
							placeholder='Title'
							className='input input-lg input-ghost w-full max-w-xs'
						/>
						<textarea
							name='content'
							className='textarea textarea-lg textarea-ghost w-full max-w-xs'
							placeholder='Take a note...'
							rows={3}></textarea>
						<div className='card-actions justify-end'>
							<button className='btn btn-circle btn-primary absolute -bottom-5 right-8 text-2xl'>
								<span className='mb-1'>+</span>
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <form className=''>
				<input name='title' placeholder='Title' />
				<textarea name='content' placeholder='Take a note...' rows={3} />
				<button>Add</button>
			</form> */}
		</div>
	)
}
