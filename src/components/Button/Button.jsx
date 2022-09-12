import { cls } from "../../utils/helpers";

const Button = (props) => {
    const { id, children, className, disabled = false, variant, size, onClick } = props;

    const handleClick = () => {
        onClick && onClick();
    };

    const classes = cls((className && className) || "", (variant && `btn-${variant}`) || "", (size && `btn-${size}`) || "");

    return (
        <button id={(id && id) || ""} className={classes} disabled={disabled} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
