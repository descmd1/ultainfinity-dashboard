import funel from '../../assets/img/funel-icon.svg';
import Touch from '../../assets/img/touch-icon.svg';
import Shop from '../../assets/img/shop-icon.svg';
import AnalyticIcon from './AnalyticIcon/AnalyticIcon';
import classes from './Analytics.module.css';

const Analytics = () => {
    return (
        <div className={classes.analyticContainer}>
            <div className={classes.itemContainer}>
                <AnalyticIcon color="#8BC34A" icon={funel}/>
                <div className={classes.analysis}>
                    <h5 className={classes.analyticTitle}>Searches  +5%</h5>
                    <h5 className={classes.analyticNumbers}>29 380 <span className={classes.analyticInfo}>Yesterday</span></h5>
                    <h5 className={`${classes.analyticNumbers} ${classes.analyticNumber}`}>27 985 <span className={`${classes.analyticInfo} ${classes.analyticNumber}`}> Last Friday</span></h5>
                </div>
                <div className={classes.analyis}>
                    <h6 className={classes.analyticTitle}> Mobile Trafic: 100%</h6>
                    <h6 className={classes.analyticTitle}> Web Trafic: 100%</h6>
                    <h6 className={classes.analyticInfo}>You get 100% traffic on mobile and desktop devices.</h6>
                    <h6 className={`${classes.analyticInfor} ${classes.analyticInfo}`}>Help: Searches, Pessimisation</h6>
                </div>
            </div>
            <div className={classes.itemContainer}>
            <AnalyticIcon color="#FF6A67" icon={Touch}/>
                <div className={classes.analysis}>
                    <h5 className={classes.redlist}>Clicks -13%</h5>
                    <h5 className={classes.analyticNumbers}>248 <span className={classes.analyticInfo}> Yesterday</span></h5>
                    <h5 className={`${classes.analyticNumbers} ${classes.analyticNumber}`}>280 <span className={`${classes.analyticInfo} ${classes.analyticNumber}`}> Last Friday</span></h5>
                </div>
                <div className={classes.analyis}> 
                    <h6 className={`${classes.analyticTitle} ${classes.redlist}`}> CTR: 0,04%</h6>
                    <h6 className={classes.analyticInfo}> Conversion from searches  to clicks on all devices.</h6>
                    <h6 className={classes.analyticInfo}>Help: <span className={classes.bluelist}>CTR, Cliks</span></h6>
                </div>

            </div>
            <div className={classes.itemContainer}>
            <AnalyticIcon color="#8BC34A" icon={Shop} isLast={true}/>
            <div className={classes.analysis}>
                    <h5 className={classes.analyticTitle}>Sales</h5>
                    <h5 className={classes.analyticNumbers} >29 380 <span className={`${classes.analyticInfo} ${classes.analyticNumber}`}> Yesterday</span></h5>
                    <h5 className={`${classes.analyticNumbers} ${classes.analyticNumber}`}>27 985 <span className={`${classes.analyticInfo} ${classes.analyticNumber}`}>Last Friday</span> </h5>
                </div>
                <div>
                    <h6 className={classes.analyticTitle}>STR: 6.2%</h6>
                    <h6 className={classes.analyticTitle}> AVg. Check: 8903</h6>
                    <h6 className={classes.analyticInfo}>Conversion from cliks  to bookings on all devices.</h6>
                    <h6 className={classes.analyticInfor}>Help: <span className={classes.bluelist}>STR, Bookings, Avg. Check</span></h6>
                </div>

            </div>

        </div>
    );
};
export default Analytics;