let coveragePreprocessors = ["karma-coverage-istanbul-instrumenter"];
let browsers = ["ChromeHeadless"];
let singleRun = true;
if (process.argv.some(arg => arg === "--debug")) {
    coveragePreprocessors = [];
    browsers = ["Chrome"];
    singleRun = false;
}

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
            "src/**/!(*.test).ts": ["karma-typescript", ...coveragePreprocessors],
            "src/**/!(*.test).js": [...coveragePreprocessors],
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
        reporters: ["mocha", "coverage-istanbul"],
        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun,
        concurrency: Infinity,
        browsers
    };

    config.set(configuration);
};
