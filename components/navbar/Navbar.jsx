import Image from "next/image";
import NavLinksContainer from "./NavLinksContainer";

const Navbar = () => {
	return (
		<nav className="p-5 border-0 border-b-[1px] border-black">
			<div className="container mx-auto flex justify-between">
				<div className="flex items-center">
					<Image src="/icon.png" alt="icon" width={50} height={50} priority={true} style={{ width: "auto", height: "auto" }} />
				</div>
				<NavLinksContainer />
			</div>
		</nav>
	);
};

export default Navbar;
