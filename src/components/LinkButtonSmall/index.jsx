const LinkButtonSmall = ({ className, label, href = '#', ...props}) => {
    return (
        <a {...props} className={`link-button ${className}__link`} href={href}>{label}</a>
    );
};

export default LinkButtonSmall;