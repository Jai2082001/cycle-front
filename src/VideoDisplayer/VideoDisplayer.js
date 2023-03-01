import classes from './VideoDisplayer.module.css'

const VideoDisplayer = ({ desc, videoLink }) => {
    return (
        <div className={classes.parentContainer}>
            <div className={classes.videoContainer}>
                <video autoPlay loop muted playsInline src={ videoLink }></video>
            </div>
            <div className={classes.descContainer }>
                {desc}
            </div>
        </div>
    )
}

export default VideoDisplayer