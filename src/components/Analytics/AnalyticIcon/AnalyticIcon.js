import classes from './AnalyticIcon.module.css';
import timelineIcon from '../../../assets/img/timeLine-icon.svg';


const AnalyticIcon = (props) => {
    return(
        <div className={classes.iconContainer}>
            <div className={classes.oval}>
                <div className={classes.indicator} style={{backgroundColor:props.color}}>

                </div>
                <img src={props.icon} className={classes.icon}/>
            </div>
            {!props.isLast && 
            <img src={timelineIcon} alt="indicator" className={classes.timelineIcon}/>
            }
        </div>
    );
};
export default AnalyticIcon;