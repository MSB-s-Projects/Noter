import CreateArea from './CreateArea'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'

export default function App() {
	return (
		<div>
			<Header />
			<CreateArea />
			<div className='divider my-10'>Notes</div>
			<div className='artboard mx-8 md:mx-16 mb-24'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8'>
					<div>
						<Note />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

