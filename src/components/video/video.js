import styles from "./video.module.css"

const VideoWrapper = (props) => (
  <div className={styles.videoWrapper}>
    <iframe
      title={props.title}
      width={props.width}
      height={props.height}
      src={props.src}
      allowFullScreen
    />
  </div>
)

export default VideoWrapper