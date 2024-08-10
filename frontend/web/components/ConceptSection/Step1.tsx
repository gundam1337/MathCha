
//TODO: add a modal that display the course content 
//FIXME : make the video in the vertical in the mobile screen  
import step1Styles from "./Step1.module.css";

export const Step1 = () => (
    <>
      <div className={step1Styles.content}>
        <div className={step1Styles.videoContainer}>
          <video className={step1Styles.video} autoPlay muted loop playsInline>
            <source src="/demo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={step1Styles.explanation}>
          <h3>Effective, hands-on learning</h3>
          <p>
            Visual, interactive lessons make concepts feel intuitive — so even
            complex ideas just click. Our real-time feedback and simple
            explanations make learning efficient.
          </p>
        </div>
      </div>
    </>
  );