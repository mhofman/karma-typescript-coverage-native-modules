module.exports = function(config) {
    const configuration = {
        basePath: "",
        frameworks: ["mocha", "chai"],
        files: [
            {
                pattern: "src/**/*.test.@(mjs|js)",
                type: "module",
            },
            {
                pattern: "src/**/*.@(mjs|js|map)",
                included: false,
            },
            {
                pattern: "tests/fixtures/*",
                included: false,
            },
            {
                pattern: "tests/**/*.test.@(mjs|js)",
                type: "module",
            },
            {
                pattern: "tests/**/*.@(mjs|js)",
                included: false,
            },
        ],
        preprocessors: {
            "src/**/!(*.test).js": ["coverage"]
        },
        reporters: ["progress", "coverage"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        singleRun: true,
        concurrency: Infinity,
        browsers: ["ChromeHeadless"]
    };

    config.set(configuration);
};
