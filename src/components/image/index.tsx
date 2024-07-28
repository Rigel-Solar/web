import { AiOutlineCloseCircle } from "react-icons/ai";
import useModal from "../../functions/use-modal";
import { Modal } from "../modal";
import { CloseButton, ImageContainer } from "./styles";

interface ImageProps {
	src: string;
	alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
	const { openModal, onOpenChange, handleOpenModal } = useModal();

	return (
		<ImageContainer>
			<img
				className="img-normal"
				src={src}
				alt={alt}
				onClick={handleOpenModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange} position="center">
				<CloseButton>
					<AiOutlineCloseCircle size={32} color="white" />
				</CloseButton>
				<img className="img-modal" src={src} alt={alt} />
			</Modal>
		</ImageContainer>
	);
};

export default Image;
