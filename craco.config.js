const generatePages = require('./tools/dynamicPages');
// const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const CreateFileWebpackPlugin = require('create-file-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.export = {
  webpack: {
    loaders: [
      {
        test: '/core.tsx$/',
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /@changethis/ig,
              replacement: (match, p1, offset, string) => {
                return 'testing';
              }
            }
          ]
        })
      }
    ],
    plugins: [
      new StringReplacePlugin(),
    ]
    // plugins: [
    //   new CreateFileWebpackPlugin({
    //     filePath: './src/app',
    //     fileName: 'test.tsx',
    //     content: `import React from 'react';

    //     function TestApp() {
    //       return (
    //         <div>
    //           test
    //         </div>
    //       );
    //     }

    //     export default TestApp;
    //   `
    //   })
    // ]
  }
}