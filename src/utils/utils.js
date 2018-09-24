import $ from 'jquery'; // eslint-disable-line

const config = {
    debug: true
};

function log(s) { return !config.debug || console.log(s); }

function setRootSize() {
    $(() => {
        const maxSize = 75;
        let fontSize = window.innerWidth / 10;
        fontSize = fontSize > maxSize ? maxSize : fontSize;
        $('html').css('font-size', fontSize);
    });
}

function autoRootSize() {
    $(window).on('resize', () => setRootSize());
    $(() => setRootSize());
}

export default {
    log,
    autoRootSize
};
