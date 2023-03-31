import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MyButton from "./Button";

const BackNavigationButton = ({ onClick }) => {
    return (
        <div>
            <MyButton
                className="!text-black"
                icon={<ArrowBackIcon />}
                title="BACK"
                onClick={onClick}
            />
        </div>
    )
}

export default BackNavigationButton
