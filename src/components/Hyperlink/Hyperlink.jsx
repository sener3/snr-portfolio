function Hyperlink(props) {
    const { href, target, children } = props;

    return (
        <a href={href} target={target}>
            {children}
        </a>
    );
}

export default Hyperlink;
