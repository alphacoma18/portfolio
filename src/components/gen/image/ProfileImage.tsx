import Image from "next/image";
const ProfileImage: React.FC = () => {
	return (
		<Image
			src="/media/img/profile.png"
			alt="Profile Picture"
			fill
			style={{
				objectFit: "contain",
			}}
			className="m-auto"
			quality={15}
			priority
		></Image>
	);
};

export default ProfileImage;
