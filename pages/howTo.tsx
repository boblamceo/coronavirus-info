import React from 'react';
import Helmet from 'react-helmet';
import ReactPlayer from 'react-player';
import { IoIosWater } from 'react-icons/io';

const howTo: React.SFC<{}> = () => {
    return (
        <div style={{ marginLeft: 100 }}>
        {' '}
        <Helmet>
            <title>lol</title>
        </Helmet>
        <u>
            <h1>
                <IoIosWater />how to wash your hands<IoIosWater />
            </h1>
        </u>
        <p>1. Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap.</p>
        <p>
            2. Lather your hands by rubbing them together with the soap. Lather the backs of your hands, between
            your fingers, and under your nails.
        </p>
        <p>
            3. Scrub your hands for at least 20 seconds. Need a timer? Hum the “Happy Birthday” song from
            beginning to end twice.
        </p>
        <p>4. Rinse your hands well under clean, running water.</p>
        <p>5. Dry your hands using a clean towel or air dry them.</p>
        <ReactPlayer
            url="https://www.youtube.com/watch?time_continue=2&v=d914EnpU4Fo&feature=emb_title"
            style={{ height: 100, width: 100 }}
        />
        <h1>how to put on your mask</h1>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=syia4GYjC3k&feature=youtu.be"
            style={{ height: 100, width: 100 }}
            alt="sorry there is no sound"
        />
    </div>
    )
};

export default howTo;
