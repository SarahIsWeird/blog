module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'src/public/styles': '/',
        'src/public/img': '/img',
        'src/public/scripts': '/scripts',
    });

    eleventyConfig.amendLibrary('md', (mdLib) =>
        mdLib
            .use(require('markdown-it-attrs'))
            .use(require('markdown-it-anchor')));

    return {
        dir: {
            input: 'src',
        },
    };
};
