module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData('eleventyComputed.permalink', function() {
        return (data) => {
            if (data.draft && !process.env.BUILD_DRAFTS) return false;
            return data.permalink;
        };
    });

    eleventyConfig.addGlobalData('eleventyComputed.eleventyExcludeFromCollections', function() {
        return (data) => {
            if (data.draft && !process.env.BUILD_DRAFTS) return true;
            return data.eleventyExcludeFromCollections;
        };
    });

    eleventyConfig.on('eleventy.before', ({ runMode }) => {
        if (runMode === 'serve' || runMode === 'watch') {
            process.env.BUILD_DRAFTS = true;
        }
    });

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
