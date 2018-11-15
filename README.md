### git提交日志规范2
1. feat：新功能（feature）

2. fix：修补bug

3. docs：文档（documentation）

4. style： 不影响代码运行的变动（css，空格，格式，缺少分号等）

5. refactor：重构（即不是新增功能，也不是修改bug的代码变动）

6. test：增加测试

7. chore：构建过程或辅助工具的变动，对构建过程或辅助工具和库（如文档生成）的更改 

8. build： 源码构建配置文件的变动

9. test： 添加缺失或更正现有测试 ，单元（集成）测试的源码提交

10. revert:   代码还原的变动

11. ci:   持续集成工具的变动

12. perf:   代码更改可提高性能，软件性能分析工具的变动

  [^可单个或多个标识组合使用：]: 例：fix+style(*): 修改了去除定位偏移的bug+背景样式修改

**scope**

用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同，逗号分隔。

1. 说明哪个模块受到影响，子模块斜杠分割，多个模块逗号分隔。

   例：feat(品牌大全/列表页，新机大全/详情页，某个模块名)：添加xxx

   例：feat(.eslintrc.js,某个单文件文件名)：更新xx配置

2. 当更改影响多个范围时，您可以使用*。 
   *例：feat(*\*):  更新远端dev仓库代码

**subject**

是 commit 目的的简短描述，不超过50个字符。

> 开头请使用： 添加xxx  移出(清空)xxx  升级(更新)xxx  覆盖xxx 改变xxx 切换xxx为xxx  修复xxx 

1. 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
2. 第一个字母小写
3. 结尾不加句号（.）


这个项目是用[Create React App]（https://github.com/facebook/create-react-app）引导的。

##可用的脚本

在项目目录中，您可以运行：

###`npm start`

在开发模式下运行应用程序。<br>
打开[http：// localhost：3000]（http：// localhost：3000）以在浏览器中查看它。

如果您进行编辑，页面将重新加载。<br>
您还将在控制台中看到任何lint错误。

###`npm test`

以交互式监视模式启动测试运行器。<br>
有关详细信息，请参阅有关[运行测试]（https://facebook.github.io/create-react-app/docs/running-tests）的部分。

###`npm run build`

将生产应用程序构建到`build`文件夹。<br>
它正确地将React捆绑在生产模式中并优化构建以获得最佳性能。

构建被缩小，文件名包含哈希
您的应用已准备好部署！

有关详细信息，请参阅有关[部署]（https://facebook.github.io/create-react-app/docs/deployment）的部分。

###`npm run eject`

**注意：这是单向操作。一旦你'弹出'，你就不能回去！**

如果您对构建工具和配置选择不满意，可以随时“弹出”。此命令将从项目中删除单个构建依赖项。

相反，它会将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）复制到项目中，以便您可以完全控制它们。除`eject`之外的所有命令仍然可以工作，但它们将指向复制的脚本，以便您可以调整它们。在这一点上，你是独立的。

你不必使用`eject`。精选功能集适用于中小型部署，您不应觉得有义务使用此功能。但是，我们知道如果您准备好它时无法自定义此工具将无用。

＃＃ 学到更多

您可以在[Create React App documentation]（https://facebook.github.io/create-react-app/docs/getting-started）中了解更多信息。

要了解React，请查看[React documentation]（https://reactjs.org/）。