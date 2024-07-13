import { useState } from "react";
import { LuListMinus, LuListPlus } from "react-icons/lu";
import Header from "../components/header";
import { MenuRoutes } from "./routes";
import { PageContainer } from "./styles";

export const MainRoutes = () => {
	const [open, setOpen] = useState(false);

	return (
		<PageContainer>
			<Header open={open} setOpen={setOpen} />
			<button>
				{open ? (
					<LuListMinus size={24} onClick={() => setOpen?.(false)} />
				) : (
					<LuListPlus size={24} onClick={() => setOpen?.(true)} />
				)}
			</button>
			<MenuRoutes />
		</PageContainer>
	);
};
