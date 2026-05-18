module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("output.css");

    return {
        pathPrefix: "/Jat97-Portfolio/"
    }
}