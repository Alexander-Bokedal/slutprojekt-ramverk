
export default function Footer() {
	return (
		<footer className="w-full bg-gray-700 text-black mt-auto">

			<div className="border-t border-gray-300">
				<p className="text-center text-sm py-4">&copy; {new Date().getFullYear()} MyProject. All rights reserved.</p>
			</div>
		</footer>
	);
}
