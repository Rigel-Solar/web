import { ImgHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Icons } from "../../assets/Icons";

const AvatarContainer = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 99px;
	object-fit: cover;
`;

type avatarVariants = "blue" | "gray";

interface emptyAvatarProps {
	$variant?: avatarVariants;
}

const EmptyAvatarContainer = styled.div<emptyAvatarProps>`
	width: 35px;
	height: 35px;
	border-radius: 99px;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ $variant }) => {
		if ($variant === "blue") {
			return css`
				background-color: ${({ theme }) => theme.colors.brand.tiffany};
			`;
		}
		if ($variant === "gray") {
			return css`
				background-color: ${({ theme }) => theme.colors.grayscale.gray_20};
			`;
		}
	}}

	svg {
		width: 50%;
	}
	path {
		stroke: ${({ theme }) => theme.colors.brand.white};
	}
`;

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	variant?: avatarVariants;
}

const Avatar = ({ src, variant = "gray", ...props }: avatarProps) => {
	if (!src) {
		return (
			<EmptyAvatarContainer $variant={variant} style={props.style}>
				<Icons.person />
			</EmptyAvatarContainer>
		);
	}

	return <AvatarContainer {...props} src={src} />;
};

export default Avatar;
