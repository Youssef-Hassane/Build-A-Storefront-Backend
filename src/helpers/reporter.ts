/**
 *
 * the default settings from GitHub:
 * https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript
 *
 * I simply simply copied and pasted the text from the GitHub page due to the fact that I don't need to understand how it works since I may use the website's default settings.
 *
 */

//"
import {
    DisplayProcessor,
    SpecReporter,
    StacktraceOption,
} from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
    new SpecReporter({
        spec: {
            displayStacktrace: StacktraceOption.NONE,
        },
        customProcessors: [CustomProcessor],
    })
);
//" (Caudan, 2021, para. 1).

/**
 *
 * References:
 * Caudan, B. (2021, April 10). Use jasmine-spec-reporter with TypeScript. GitHub. Retrieved November 10, 2022, from https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript
 * https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0292/modules/c0ad589b-67b3-4791-931f-9b0fa8ac0ed3/lessons/f9328a03-7a14-4fc7-85cc-972b96da776a/concepts/96659bec-fce7-4dde-87db-f9194996a3be
 *
 */
