interface LoadingProps {
    isOpen: boolean
}
const Loading: React.FC<LoadingProps> = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="m-loading">
            <div className="lds-hourglass"></div>
        </div>
    )
}
export default Loading;