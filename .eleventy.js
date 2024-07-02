module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'src/public/styles': '/',
        'src/public/img': '/img',
        'src/public/scripts': '/scripts',
    });

    return {
        dir: {
            input: 'src',
        },
    };
};
