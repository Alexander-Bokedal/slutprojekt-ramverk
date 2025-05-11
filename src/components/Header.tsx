
"use client";
import chocobo from '../../public/logo.png'

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="w-full bg-gray-700  shadow fixed top-0 left-0 z-50">
			<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				<Link href="/">
					<Image
						src='/logo.png'
						width={64}
						height={64}
						alt='Logo'
					/>
				</Link>
				<div className='flex justify-evenly grow'>
					<ul className="hidden md:flex space-x-6">
						<li>
							<Link href="/">
								<div className="hover:text-blue-600 text-black">Home </div>

							</Link>
						</li>
						<li> | </li>
						<li>
							<Link href="/games/savedgames">
								<div className="hover:text-blue-600 text-black">Saved Games</div>
							</Link>
						</li>

						<li> | </li>
						<li>
							<Link href="/characters/savedcharacters">
								<div className="hover:text-blue-600 text-black">Saved Characters</div>
							</Link>
						</li>
					</ul>

				</div>
				<button
					className="md:hidden focus:outline-none"
					aria-label="Toggle menu"
					onClick={() => setMenuOpen((o) => !o)}
				>
					{menuOpen ? (
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
						</svg>
					)}
				</button>
			</nav>

			{
				menuOpen && (
					<div className="md:hidden bg-white shadow-md">
						<ul className="px-4 pt-2 pb-4 space-y-2">
							<li>
								<Link href="/">
									<div className="block hover:text-blue-600">Home</div>
								</Link>
							</li>
							<li>
								<Link href="/games/savedgames">
									<div className="hover:text-blue-600 text-black">Saved Games</div>
								</Link>
							</li>

							<li> | </li>
							<li>
								<Link href="/characters/savedcharacters">
									<div className="hover:text-blue-600 text-black">Saved Characters</div>
								</Link>
							</li>
						</ul>
					</div>
				)
			}
		</header >
	);
}
