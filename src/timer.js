import { getQueriesForElement } from '@testing-library/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = "#FF5733"
function Timer() {
    return (
        <div>
            <CircularProgressbar value={60} text={'60%'} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor: getQueriesForElement,
            })} />

        </div>
    )
}
export default Timer;