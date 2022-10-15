import classes from './ProgressBar.module.css';
import LegendIcon from './legendIcon/LegendIcon';
const ProgressBar = () => {
    return (
        <div className={classes.progressContainer}>

            <div className={classes.progress}>
                <div className={classes.bgYellow} role="progressbar" style={{ width: "40%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div className={classes.bgPurple} role="progressbar" style={{ width: " 25%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div className={classes.bgBlue} role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

            </div>

            <div className={classes.legendContainer}>
                <div className={classes.legendItem}>
                    <LegendIcon color="#FFCC00" />
                    <h6>Error 500: 1 256</h6>
                </div>
                <div className={classes.legendItem}>
                    <LegendIcon color="#5856D5" />
                    <h6>Error 500: 1 256</h6>
                </div>
                <div className={classes.legendItem}>
                    <LegendIcon color="#2196F3" />
                    <h6>Error 500: 1 256</h6>
                </div>
                <div className={classes.legendItem}>
                    <LegendIcon color="#A0B0B9" />
                    <h6>Error 500: 1 256</h6>
                </div>
            </div>
        </div>


    );
};
export default ProgressBar;