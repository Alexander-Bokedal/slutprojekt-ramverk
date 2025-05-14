
import { ReactNode } from "react";

type TextBoxProps = {
	children: ReactNode;
};

const TextBox = ({ children }: TextBoxProps) => {
	return (
		<div className="border border-gray-700 bg-black/10 rounded-2xl p-6">
			{children}
		</div>
	);
}

export default TextBox
