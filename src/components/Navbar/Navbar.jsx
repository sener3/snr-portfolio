import "../../styles/components/_navbar.scss";

import { socialMedia } from "../../utils/constants";

import Box from "../Box";
import Logo from "../Logo";
import Image from "../Image";
import Hyperlink from "../Hyperlink";

function Navbar() {
    return (
        <Box className="navbar">
            <Logo />

            <Box className="navbar-social">
                {socialMedia.map((x) => (
                    <Hyperlink href={x.href} target="_blank">
                        <Image src={x.src} alt={x.alt} />
                    </Hyperlink>
                ))}
            </Box>
        </Box>
    );
}

export default Navbar;
