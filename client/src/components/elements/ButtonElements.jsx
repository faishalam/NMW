export default function ButtonElements(props) {
    const {classname, type, children} = props
    return (
        <>
            <button 
                className={classname}
                type={type}
                >
                {children}
            </button>
        </>
    )
}