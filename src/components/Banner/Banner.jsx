import { useEffect } from "react";

import "../../styles/components/_banner.scss";

import { skills } from "../../utils/constants";
import { handleBannerPosition } from "../../utils/helpers";

import Box from "../Box";
import Image from "../Image";
import Typography from "../Typography";

function Banner() {
    useEffect(() => {
        handleBannerPosition();

        window.addEventListener("resize", (event) => {
            handleBannerPosition();
        });

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <Box id="banner" className="banner-wrapper container">
            <Box className="banner-container">
                <Typography className="banner-title" variant="p">
                    My Skills
                </Typography>

                <Box className="banner-line"></Box>

                <Box className="banner-skills">
                    {skills.map((x, index) => (
                        <Image key={index} className="banner-skill" src={x.src} alt={x.alt} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;
