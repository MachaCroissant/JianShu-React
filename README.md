# 简书网复刻

本项目以[胡耀的简述网开发项目](https://github.com/huyaocode/react-jianshu)为基础，重新复刻了一下。由于是第一次网页开发项目，代码有很多地方很冗余，还请多多指教。

我的复刻阶段主要分为两个，第一阶段是搭建网页框架以及添加样式，第二阶段是添加数据流管理。

该项目直接使用的`create-react-app`脚手架，可以到官网[Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)一章节查看下载方式与使用方法。

---

第一阶段的网页框架搭建以及添加样式：

这个部分看完MDN的HTML/CSS/JavaScript的教程就能上手了。做的时候发现果然问题要在实践中解决啊。

另外值得一提的是，一开始用的都是class component（在参考作者的项目当中也是class component与从connect数据管理结合的），但其实并不知道做数据管理时具体的书写顺序各个文件之间的关系是什么，后来因为看了[redux essentails example app](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)，仿照着最终成品写了类似的代码，把所有的class component都换成了function component。

---

第二阶段的添加数据流管理：

主要用到的是redux toolkit中提供的API，如果是和我一样的新手推荐写完redux essentials example app之后再自己写，我的仓库里有完成的代码，推荐和官方教程一起来，主要是学一个思路。数据都是放在public文件夹下的。很遗憾自己没有能力写一个Mock API来更好地模拟数据。

# 运行项目

```bash
git clone git@github.com:MachaCroissant/JianShu-React.git
cd JianShu-React
npm install 
npm start 
```

