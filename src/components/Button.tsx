
interface Props {
    children: string;
    onClick: () => void;
    buttonClass: string;
}

function Button({ children, onClick, buttonClass }: Props) {
    return (
        <button
            type="button"
            className={buttonClass}
            onClick={onClick}
        >{children}
        </button>
    );
}

export default Button;