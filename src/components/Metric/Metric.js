import classes from './Metric.module.css';
import indicator from '../../assets/img/metric-indicator.svg'

const Metric = () => {
    return (
        <div className={classes.metricContainer}>
            <div className={classes.metric}>
                <img className={classes.indicator} src={indicator} alt="indicator" />
                <div>
                    <h6 className={classes.metricTitle}>Errors: 0,12% </h6>
                    <div className={classes.metricdesc}>Average: 0,11%</div>
                </div>
            </div>
            <div className={classes.metric}>
                <img className={classes.indicator} src={indicator} alt="indicator" />
                <div>
                    <h6 className={classes.metricTitle}>Errors: 0,12% </h6>
                    <div className={classes.metricdesc}>Average: 0,11%</div>
                </div>
            </div>
            <div className={classes.metric}>
                <img className={classes.indicator} src={indicator} alt="indicator" />
                <div>
                    <h6 className={classes.metricTitle}>Errors: 0,12% </h6>
                    <div className={classes.metricdesc}>Average: 0,11%</div>
                </div>
            </div>
        </div>
    );
};
export default Metric;