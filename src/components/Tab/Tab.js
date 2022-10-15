import classes from './Tab.module.css'

const Tab = () => {
    return(
        <div className={classes.TabsContainer}>
            <button className={classes.Tab}>Last hour</button>
            <button className={classes.Tab}> Today</button>
            <button className={`${classes.Tab} ${classes.active}`}>Yesterday</button>
            <button className={classes.Tab}>Last 3 days</button>
        </div>
    );
};
export default Tab;