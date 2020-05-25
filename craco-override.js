const { override,fixBabelImports,addLessLoader } = require("customize-cra");
const CracoLessPlugin = require('craco-less');

module.exports = override(
    // 针对antd实现按需打包，根据import来打包（使用babel-plugin-import）
    fixBabelImports("import", {
      libraryName:'antd',
      libraryDirectory: "es",
      style:true  //自动打包相关的样式
    }),
    addLessLoader({
        javascriptsEnables:true,
        modifyVars:{'@primary-color':'#1DA57A'},
    })
  );

  
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { '@primary-color': '#1DA57A' },
          javascriptEnabled: true,
        },
      },
    },
  ],
};