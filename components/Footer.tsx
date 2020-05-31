import React from 'react';

import Container from './Container';

const Footer: React.SFC<{}> = () => {
    return (
        <footer>
            <Container>
                <p style={{ fontSize: 26 }}>全球冠状病毒疫情 coronavirus cases </p>
            </Container>
        </footer>
    );
};

export default Footer;
