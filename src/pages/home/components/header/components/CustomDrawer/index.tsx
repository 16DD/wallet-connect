import { Box, Drawer, DrawerProps, useTheme, styled, Typography } from "@mui/material";
import { iconChainId } from "pages/home/utils";
import { useAccount, useNetwork } from "wagmi";

export interface IDrawerCustom extends DrawerProps {}

const Container = styled(Box)(({ theme }) => ({
	".drawer__head": {
		display: "flex",
		height: "77px",
		alignItems: "center",
		justifyContent: "space-around",
		borderBottom: "solid 1px rgba(0, 0, 0, 0.1)",

		"#drawer__head__address": {
			textDecoration: "none",
			color: theme.palette.text.primary,

			"&:hover": {
				color: theme.palette.action.hover,
			},
		},
	},

	".drawer__body": {
		display: "flex",
		flexDirection: "column",

		"#drawer__body__list": {
			width: "336px",
			alignSelf: "center",
			marginTop: "10px",

			".drawer__body__list__text": {
				marginTop: "10px",
				fontStyle: "italic",
				cursor: "pointer",
				"&:hover": {
					color: theme.palette.action.hover,
				},
			},
		},

		"#drawer__body__form": {
			width: "336px",
			height: "262px",
			borderRadius: theme.shape.borderRadiusSm,
			marginTop: "40px",
			border: "solid 1px rgba(0, 0, 0, 0.1)",
			alignSelf: "center",

			"#drawer__body__form__head": {
				width: "20px",
				height: "50px",
				display: "flex",
			},
		},
	},
}));

const DrawerCustom = (props: IDrawerCustom) => {
	const theme = useTheme();
	const { address } = useAccount();
	const { chain } = useNetwork();
	return (
		<Box>
			<Drawer
				anchor={"right"}
				open={props.open}
				onClose={props.onClose}
				sx={{ marginTop: "88px" }}
				PaperProps={{
					sx: {
						width: "418px",
						height: "100vh",
						marginTop: "88px",
						backgroundColor: theme.palette.background.default,
						boxShadow: "none",
						borderTop: "solid 1px rgba(0, 0, 0, 0.1)",
						backgroundImage: "none",
					},
				}}
				BackdropProps={{
					sx: {
						marginTop: "88px",
						backgroundColor: "rgba(0, 0, 0, 0.06)",
						borderTop: "solid 1px rgba(0, 0, 0, 0.1)",
					},
				}}
			>
				<Container>
					<Box className="drawer__head">
						<Typography variant="h5" sx={{ fontWeight: "bold" }}>
							My Wallet
						</Typography>
						<Typography id="drawer__head__address" component={"a"} href={chain?.blockExplorers?.default.url + "address/" + address} variant="h6">
							{address?.slice(0, 6) + "..." + address?.slice(-4)}
						</Typography>
					</Box>

					<Box className="drawer__body">
						<Box id="drawer__body__list">
							<Typography className="drawer__body__list__text" variant="h5">
								My profile
							</Typography>
							<Typography className="drawer__body__list__text" variant="h5">
								My token
							</Typography>
							<Typography className="drawer__body__list__text" variant="h5">
								My activity
							</Typography>
						</Box>
						<Box id="drawer__body__form">
							<Box id="drawer__body__form__head">
								<Box component={"img"} src={iconChainId(chain?.id)} sx={{ width: "30px", height: "30px" }}></Box>
								<Typography sx={{ width: "40px" }}>{chain?.name}</Typography>
							</Box>
						</Box>
					</Box>
				</Container>
			</Drawer>
		</Box>
	);
};

export default DrawerCustom;

const DrawerCustomMobile = (props: IDrawerCustom) => {
	const theme = useTheme();
	return (
		<Box>
			<Drawer
				anchor={"bottom"}
				open={props.open}
				onClose={props.onClose}
				PaperProps={{
					sx: {
						height: "250px",
						backgroundColor: theme.palette.background.default,
						boxShadow: "none",
						backgroundImage: "none",
						borderTopLeftRadius: "16px",
						borderTopRightRadius: "16px",
					},
				}}
				BackdropProps={{
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.06)",
					},
				}}
			></Drawer>
		</Box>
	);
};

export { DrawerCustomMobile };
