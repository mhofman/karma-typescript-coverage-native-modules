module.exports = function(config) {
    const configuration = {
        basePath: "",
        frameworks: ["mocha", "chai", "karma-typescript"],
        files: [
            {
                pattern: "src/**/*.test.@(ts|mjs|js)",
                type: "module",
            },
            {
                pattern: "src/**/*.@(ts|mjs|js)",
                included: false,
            },
            {
                pattern: "tests/fixtures/*",
                included: false,
            },
            {
                pattern: "tests/**/*.test.@(ts|mjs|js)",
                type: "module",
            },
            {
                pattern: "tests/**/*.@(ts|mjs|js)",
                included: false,
            },
        ],
        preprocessors: {
            "src/**/*.test.ts": ["karma-typescript"],
            "src/**/!(*.test).ts": ["karma-typescript", "karma-coverage-istanbul-instrumenter"],
            "src/**/!(*.test).js": ["karma-coverage-istanbul-instrumenter"],
            "tests/**/*.ts": ["karma-typescript"],
        },
        karmaTypescriptConfig: {
            bundlerOptions: {
                addNodeGlobals: false,
            },
            coverageOptions: {
                instrumentation: false,
            },
            tsconfig: "./tsconfig.json",
        },
        coverageIstanbulInstrumenter: {
            esModules: true
        },
        coverageIstanbulReporter: {
            reports: ["html"],
            dir: "coverage",
        },
        reporters: ["progress", "coverage-istanbul"],
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
