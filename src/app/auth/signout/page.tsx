"use client";
import CenterComponent from "@/components/wrapper/CenterComponent";
import { NextPage } from "next";
// import { signOut } from "next-auth/react";
const Signout: NextPage = () => {
	return (
		<CenterComponent>
			<h1>Signout</h1>
			{/* <Button
				onClick={async () => {
					await signOut({
						redirect: true,
						callbackUrl: "/",
					});
				}}
			>
				Signout
			</Button> */}
		</CenterComponent>
	);
};

export default Signout;
