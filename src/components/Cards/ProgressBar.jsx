const ProgressBar = ({ progress, height, width, hideProgressText, bgColor, progressColor}) => {

    const ParentDiv = {
        height: height,
        width: width,
        backgroundColor: bgColor? bgColor : 'whitesmoke',
        borderRadius: 40
    }

    const ChildDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: progressColor? progressColor : `#0057FF`,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={ParentDiv}>
            <div style={ChildDiv}>
                <span style={progresstext}>{hideProgressText ? `` : `${progress}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar;