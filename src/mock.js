const Mock = require('mockjs');

const Random = Mock.Random;

const produceNewsData = function() {
  let articles = {
    img: [
      '../../static/img/1.jpg',
      '../../static/img/2.jpg',
      '../../static/img/3.jpg',
      '../../static/img/4.jpg',
      '../../static/img/5.jpg',
      '../../static/img/6.jpg',
    ],
    message: [
      {
        name: '艾克',
        story: '艾克是一名来自祖安不良街区的奇才。他可以操纵时间，从而让任何处境都变得对自己有利。通过使用他自己的发明——Z型驱动——他可以探索其他平行现实的分支并创造最完美的条件。尽管他酷爱这种自由，但只要他的朋友们遇到了威胁，他就会不顾一切地去保护他们。在旁观者眼里，艾克总是能初次尝试就完成不可能之举，屡试不爽。'
      },
      {
        name: '薇恩',
        story: '肖娜·薇恩是一位无情的德玛西亚怪物猎手。终其一生，她都在寻找杀害她全家的恶魔。她的手臂上装着十字弩，心中燃烧着熊熊的复仇怒火，从暗影中射出圣银弩箭的风暴，薇恩只有在杀死那些为黑暗魔法所控制的人和生物时，才能真正感到愉悦。'
      },
      {
        name: '烬',
        story: '作为一名心思缜密的癫狂杀手，烬坚信谋杀是一门艺术。他曾在艾欧尼亚的监狱中服刑，但却因为执政议会里涌动着的暗流而得到释放，成为了权术斗争所利用的刺客。烬将手中的枪当成画笔，尽情地挥洒他所追求的残忍艺术，让受害者肝胆俱裂，令旁观者震悚难平。他在自己制作的阴森剧目里肆意取乐，让“恐怖”二字有了最合适不过的信使。'
      },
      {
        name: '蕾欧娜',
        story: '蕾欧娜是被灌注了烈阳之火的烈阳教派圣殿武士，用天顶之刃和破晓之盾守护着巨神峰。她的皮肤闪烁着星火，她体内天界星灵的力量透过她的双眼炯炯燃烧。蕾欧娜身披金色铠甲，背负着沉重的上古知识，为一些人带来启示，为另一些人带去死亡。'
      },
      {
        name: '无双剑姬',
        story: '菲奥娜是全瓦洛兰最可怕的决斗家。她以雷厉风行、狡黠聪慧闻名于世，同样著名的还有她舞弄自己蓝钢佩剑的矫健。菲奥娜出生在德玛西亚王国的劳伦特家族，她从父亲的手中接管了家业，并在一场丑闻风波中将家族拯救于于灭亡的边缘。虽然劳伦特家威严不再，但菲奥娜却一直在不懈地努力，希望重振家族荣耀，让劳伦特这个名字重回德玛西亚名望贵族之列。'
      },
      {
        name: '无极剑圣',
        story: '易师锤炼身体、磨砺心智，直至身心合一。尽管他将暴力作为不得已的选择，但他优雅迅猛的剑法总是让这一手段显得尤为快捷。作为无极之道最后的门徒，易大师致力于这个门派的传承，用七度洞悉目镜搜寻着最有资格的人，寻找潜在的新弟子。'
      }
    ]
  }
  return {
    articles: articles
  }
}

const pullDownData = function() {
  let pullData = []
  for(let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    pullData.push(newArticleObject)
  }
  return {
    pullData: pullData
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);

Mock.mock('/news/pullData', 'post', pullDownData);
 