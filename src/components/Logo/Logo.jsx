import "../../styles/components/_logo.scss";

import Typography from "../Typography/Typography";

function Logo() {
    return (
        <Typography id="logo" className="logo" variant="p">
            S <Typography variant="span">N</Typography>R
        </Typography>
    );
}

export default Logo;
