import classes from './VideoPlayer.module.css'
const VideoPlayer = ({ srcVariable }) => {
    console.log(srcVariable)
    return (
        <div className={ classes.videoDiv }>
            <div className={classes.headingDiv}>
                <p>Tissot <span className={classes.sportSpan}>Sports</span></p>
            </div>

            <video src={srcVariable} autoPlay loop muted playsInline></video>
        </div>
    )
}

export default VideoPlayer