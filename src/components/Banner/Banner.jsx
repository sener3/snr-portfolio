import "../../styles/components/_banner.scss";

import { skills } from "../../utils/constants";

import Box from "../Box";
import Image from "../Image";
import Typography from "../Typography";

function Banner() {
    return (
        <Box className="banner-wrapper">
            <Box className="banner-container">
                <Typography className="banner-title" variant="p">
                    My Skills
                </Typography>

                <Box className="banner-line"></Box>

                <Box className="banner-skills">
                    {skills.map((x) => (
                        <Image className="banner-skill" src={x.src} alt={x.alt} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;
