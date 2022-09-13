import "../../styles/components/_logo.scss";

import Hyperlink from "../Hyperlink";
import Typography from "../Typography";

function Logo() {
    return (
        <Hyperlink className="logo-link" href="/">
            <Typography id="logo" className="logo" variant="p">
                S<Typography variant="span">N</Typography>R
            </Typography>
        </Hyperlink>
    );
}

export default Logo;
