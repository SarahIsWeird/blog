const eleventyPluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItContainer = require('markdown-it-container');

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

    eleventyConfig.addPlugin(eleventyPluginSyntaxHighlight);

    eleventyConfig.amendLibrary('md', (mdLib) =>
        mdLib
            .use(markdownItAttrs)
            .use(markdownItAnchor)
            .use(markdownItContainer, 'spoiler', {
                validate: params => params.trim().match(/^spoiler\s+(.*)$/),
                render: (tokens, idx) => {
                    if (tokens[idx].nesting !== 1) return '</details>\n';

                    const summary = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)[1];
                    let summaryText = mdLib.utils.escapeHtml(summary);

                    if (summaryText === 'pali') {
                        summaryText = 'o pali e ni:';
                    } else if (summaryText === 'lipu-ken') {
                        summaryText = 'lipu ken sama ni:';
                    }

                    return `<details><summary>${summaryText}</summary>\n`;
                }
            }));

    return {
        dir: {
            input: 'src',
        },
    };
};
