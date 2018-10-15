// module.exports = {
//   rootDir: '../..',
//   roots: ['<rootDir>/src/client'],
//   setupTestFrameworkScriptFile: '<rootDir>/src/client/jest-setup.ts',
//   globals: {
//     window: true,
//     'ts-jest': {
//       tsConfigFile: 'src/client/tsconfig.spec.json',
//     },
//     __TRANSFORM_HTML__: true,
//   },
// };



// var localStorageMock = /* ... some mock code ... */
// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock
// });
import * as angular from "angular";
import './app/app.module';
import 'angular-mocks';