/* 自动生成，请勿手改 —— 由 build.js 从小程序工程打包。
   源：english-app-mp
   生成时间：2026-08-23T08:35:52.546Z
   共 23 个模块 */
(function (global) {
  var defs = {}, cache = {};
  function __def(id, fn) { defs[id] = fn; }
  // 把 "./x" / "../y/z" 解析成相对小程序根目录的模块 id
  function resolve(from, req) {
    if (req.charAt(0) !== '.') return req;
    var base = from.split('/'); base.pop();
    var segs = req.split('/');
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      if (s === '.' || s === '') continue;
      if (s === '..') base.pop();
      else base.push(s);
    }
    var id = base.join('/');
    // 目录导入：a/b -> a/b/index
    if (!defs[id] && defs[id + '/index']) id = id + '/index';
    return id;
  }
  function req(from, id) {
    var rid = resolve(from, id);
    if (cache[rid]) return cache[rid].exports;
    var def = defs[rid];
    if (!def) throw new Error('模块未打包: ' + id + ' (from ' + from + ')');
    var mod = { exports: {} };
    cache[rid] = mod;
    def(mod, mod.exports, function (r) { return req(rid, r); });
    return mod.exports;
  }
  global.AshCore = function (id) { return req('', id); };

  /* ===== 以下为打包进来的模块 ===== */

__def("shared/data/words", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORDS = void 0;
exports.getWordByEn = getWordByEn;
var _WORDS_RAW = '[{"en":"ability","zh":"能力","pos":"n.","example":"He has the ability to lead.","exampleZh":"他有领导能力。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2723},{"en":"able","zh":"能够的","pos":"adj.","example":"She was able to finish in time.","exampleZh":"她及时完成了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":561},{"en":"aboard","zh":"在船上；上车","pos":"adv.","example":"Everyone is aboard.","exampleZh":"大家都上车了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2117},{"en":"about","zh":"关于；大约","pos":"prep.","example":"This book is about animals.","exampleZh":"这本书是关于动物的。","forms":null,"defaultObject":null,"tags":["school","nature","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":51},{"en":"above","zh":"在……上面","pos":"prep.","example":"The bird is flying above the tree.","exampleZh":"鸟儿在树上飞。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1337},{"en":"absolutely","zh":"绝对地","pos":"adv.","example":"You are absolutely right.","exampleZh":"你说得完全对。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":692},{"en":"accept","zh":"接受","pos":"v.","example":"She accepted the job at once.","exampleZh":"她立刻接受了那份工作。","forms":{"infinitive":"accept","present":"accepts","ing":"accepting","past":"accepted","pastParticiple":"accepted"},"defaultObject":"the offer","tags":["daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1259},{"en":"access","zh":"通道；使用权","pos":"n.","example":"We have no access to the roof.","exampleZh":"我们上不了屋顶。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1867},{"en":"accident","zh":"事故","pos":"n.","example":"There was an accident on the road.","exampleZh":"路上出了事故。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":902},{"en":"according","zh":"根据","pos":"adv.","example":"According to the news, it will snow.","exampleZh":"据新闻说要下雪了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1511},{"en":"account","zh":"账户","pos":"n.","example":"I opened a bank account today.","exampleZh":"我今天开了个银行账户。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1440},{"en":"across","zh":"穿过","pos":"prep.","example":"We walked across the bridge.","exampleZh":"我们走过那座桥。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":800},{"en":"act","zh":"行动；表演","pos":"v.","example":"We must act now.","exampleZh":"我们必须现在行动。","forms":{"infinitive":"act","present":"acts","ing":"acting","past":"acted","pastParticiple":"acted"},"defaultObject":"quickly","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":711},{"en":"action","zh":"行动；动作","pos":"n.","example":"We need to take action now.","exampleZh":"我们现在需要采取行动。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1133},{"en":"actor","zh":"演员","pos":"n.","example":"He wants to be an actor.","exampleZh":"他想成为一名演员。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2139},{"en":"actual","zh":"实际的","pos":"adj.","example":"What is the actual price?","exampleZh":"实际价格是多少？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2948},{"en":"actually","zh":"实际上","pos":"adv.","example":"Actually, I have never been there.","exampleZh":"实际上我从没去过那里。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":326},{"en":"add","zh":"添加","pos":"v.","example":"Add a little salt to the soup.","exampleZh":"往汤里加点盐。","forms":{"infinitive":"add","present":"adds","ing":"adding","past":"added","pastParticiple":"added"},"defaultObject":"some salt","tags":["food"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1801},{"en":"address","zh":"地址","pos":"n.","example":"What is your address?","exampleZh":"你的地址是什么？","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1273},{"en":"admit","zh":"承认","pos":"v.","example":"He admitted his mistake.","exampleZh":"他承认了自己的错误。","forms":{"infinitive":"admit","present":"admits","ing":"admitting","past":"admitted","pastParticiple":"admitted"},"defaultObject":"the truth","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1162},{"en":"advantage","zh":"优势","pos":"n.","example":"Speaking English is an advantage.","exampleZh":"会说英语是个优势。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2457},{"en":"advice","zh":"建议","pos":"n.","example":"Thank you for your advice.","exampleZh":"谢谢你的建议。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1358},{"en":"affair","zh":"事务；风流韵事","pos":"n.","example":"That is a family affair.","exampleZh":"那是家事。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1956},{"en":"afford","zh":"负担得起","pos":"v.","example":"We cannot afford a new car.","exampleZh":"我们买不起新车。","forms":{"infinitive":"afford","present":"affords","ing":"affording","past":"afforded","pastParticiple":"afforded"},"defaultObject":"a car","tags":["transport"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1443},{"en":"afraid","zh":"害怕的","pos":"adj.","example":"I am afraid of dogs.","exampleZh":"我怕狗。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":401},{"en":"after","zh":"在……之后","pos":"prep.","example":"We played after school.","exampleZh":"我们放学后玩了。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":181},{"en":"afternoon","zh":"下午","pos":"n.","example":"I have class this afternoon.","exampleZh":"我今天下午有课。","forms":null,"defaultObject":null,"tags":["school","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":815},{"en":"again","zh":"再一次","pos":"adv.","example":"Please say that again.","exampleZh":"请再说一遍。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":161},{"en":"against","zh":"反对；靠着","pos":"prep.","example":"He put his bike against the wall.","exampleZh":"他把自行车靠在墙上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":479},{"en":"age","zh":"年龄；时代","pos":"n.","example":"What is your age?","exampleZh":"你多大了？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":921},{"en":"agency","zh":"机构；代理","pos":"n.","example":"She works for a travel agency.","exampleZh":"她在一家旅行社工作。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2704},{"en":"ago","zh":"以前","pos":"adv.","example":"He left two hours ago.","exampleZh":"他两小时前离开了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":359},{"en":"agree","zh":"同意","pos":"v.","example":"I agree with you completely.","exampleZh":"我完全同意你。","forms":{"infinitive":"agree","present":"agrees","ing":"agreeing","past":"agreed","pastParticiple":"agreed"},"defaultObject":"with you","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1085},{"en":"agreement","zh":"协议","pos":"n.","example":"We reached an agreement.","exampleZh":"我们达成了一致。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2929},{"en":"ahead","zh":"在前面","pos":"adv.","example":"There is a shop just ahead.","exampleZh":"前面就有一家店。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":486},{"en":"air","zh":"空气","pos":"n.","example":"The air is fresh here.","exampleZh":"这里的空气很新鲜。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":610},{"en":"airport","zh":"机场","pos":"n.","example":"The airport is an hour away.","exampleZh":"机场要一小时车程。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1608},{"en":"alarm","zh":"闹钟；警报","pos":"n.","example":"The alarm wakes me up.","exampleZh":"闹钟把我叫醒。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1940},{"en":"alive","zh":"活着的","pos":"adj.","example":"The plant is still alive.","exampleZh":"这植物还活着。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":572},{"en":"all","zh":"所有的；全部","pos":"adj.","example":"All students are here.","exampleZh":"所有学生都在这儿。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":35},{"en":"allow","zh":"允许","pos":"v.","example":"Dogs are not allowed inside.","exampleZh":"狗不许进入。","forms":{"infinitive":"allow","present":"allows","ing":"allowing","past":"allowed","pastParticiple":"allowed"},"defaultObject":"it","tags":["place"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1447},{"en":"almost","zh":"几乎","pos":"adv.","example":"I am almost ready.","exampleZh":"我快准备好了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":495},{"en":"alone","zh":"独自的","pos":"adj.","example":"She is alone at home.","exampleZh":"她一个人在家。","forms":null,"defaultObject":null,"tags":["place","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":337},{"en":"along","zh":"沿着","pos":"prep.","example":"Walk along this road.","exampleZh":"沿着这条路走。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["it_is_adj"],"rank":515},{"en":"already","zh":"已经","pos":"adv.","example":"She has already left.","exampleZh":"她已经走了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":331},{"en":"alright","zh":"好的；没事","pos":"adj.","example":"Are you alright?","exampleZh":"你还好吗？","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":919},{"en":"also","zh":"也；同样","pos":"adv.","example":"I also like music.","exampleZh":"我也喜欢音乐。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":473},{"en":"although","zh":"尽管","pos":"conj.","example":"Although he is young, he works very hard.","exampleZh":"尽管他很年轻，但工作很努力。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1505},{"en":"always","zh":"总是；一直","pos":"adv.","example":"He always gets up early.","exampleZh":"他总是早起。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":184},{"en":"am","zh":"是（I am）","pos":"v.","example":"I am a student.","exampleZh":"我是一名学生。","forms":{"infinitive":"am","present":"ams","ing":"aming","past":"amed","pastParticiple":"amed"},"defaultObject":"something","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":126},{"en":"amazing","zh":"令人惊叹的","pos":"adj.","example":"The view is amazing.","exampleZh":"这景色太美了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":899},{"en":"ambulance","zh":"救护车","pos":"n.","example":"Someone called an ambulance.","exampleZh":"有人叫了救护车。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2435},{"en":"among","zh":"在……之中","pos":"prep.","example":"She is among the best students.","exampleZh":"她是最好的学生之一。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1752},{"en":"amount","zh":"数量","pos":"n.","example":"A small amount of salt is enough.","exampleZh":"一点点盐就够了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2264},{"en":"an","zh":"一个（用于元音前）","pos":"art.","example":"I have an apple.","exampleZh":"我有一个苹果。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":86},{"en":"ancient","zh":"古老的","pos":"adj.","example":"They found an ancient cup.","exampleZh":"他们发现了一只古老的杯子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2493},{"en":"and","zh":"和；与","pos":"conj.","example":"You and I are friends.","exampleZh":"你和我都是朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":10},{"en":"anger","zh":"愤怒","pos":"n.","example":"He could not hide his anger.","exampleZh":"他藏不住怒气。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2703},{"en":"angry","zh":"生气的","pos":"adj.","example":"The teacher is angry.","exampleZh":"老师生气了。","forms":null,"defaultObject":null,"tags":["school","emotion","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1169},{"en":"animal","zh":"动物","pos":"n.","example":"Dogs are lovely animals.","exampleZh":"狗是可爱的动物。","forms":null,"defaultObject":null,"tags":["emotion","nature","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1415},{"en":"anniversary","zh":"周年纪念","pos":"n.","example":"Today is our tenth anniversary.","exampleZh":"今天是我们十周年纪念。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2830},{"en":"another","zh":"另一个","pos":"det.","example":"Would you like another cup of tea?","exampleZh":"你想再来一杯茶吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":223},{"en":"answer","zh":"回答","pos":"v.","example":"Please answer my question.","exampleZh":"请回答我的问题。","forms":{"infinitive":"answer","present":"answers","ing":"answerring","past":"answerred","pastParticiple":"answerred"},"defaultObject":"the question","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":527},{"en":"any","zh":"任何的","pos":"adj.","example":"Do you have any questions?","exampleZh":"你有什么问题吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":130},{"en":"anybody","zh":"任何人","pos":"pron.","example":"Is anybody home?","exampleZh":"有人在家吗？","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":435},{"en":"anymore","zh":"不再","pos":"adv.","example":"I do not work there anymore.","exampleZh":"我不在那里工作了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":503},{"en":"anyone","zh":"任何人","pos":"pron.","example":"Does anyone know the answer?","exampleZh":"有人知道答案吗？","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":389},{"en":"anything","zh":"任何事物","pos":"pron.","example":"Anything is possible.","exampleZh":"任何事情都有可能。","forms":null,"defaultObject":null,"tags":["emotion","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":141},{"en":"anytime","zh":"任何时候","pos":"adv.","example":"Call me anytime.","exampleZh":"随时打给我。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2282},{"en":"anyway","zh":"不管怎样","pos":"adv.","example":"It is late, but let us try anyway.","exampleZh":"很晚了，但我们还是试试吧。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":417},{"en":"anywhere","zh":"任何地方","pos":"adv.","example":"You can sit anywhere.","exampleZh":"你可以坐在任何地方。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":838},{"en":"apart","zh":"分开地","pos":"adv.","example":"They live apart from each other.","exampleZh":"他们彼此分开住。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1379},{"en":"apartment","zh":"公寓","pos":"n.","example":"Their apartment is on the top floor.","exampleZh":"他们的公寓在顶层。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":890},{"en":"apologize","zh":"道歉","pos":"v.","example":"He apologized for being late.","exampleZh":"他为迟到道歉。","forms":{"infinitive":"apologize","present":"apologizes","ing":"apologizing","past":"apologized","pastParticiple":"apologized"},"defaultObject":"to her","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1326},{"en":"apparently","zh":"显然","pos":"adv.","example":"Apparently he did not get my message.","exampleZh":"看来他没收到我的消息。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1370},{"en":"appear","zh":"出现","pos":"v.","example":"A cat appeared at the window.","exampleZh":"一只猫出现在窗口。","forms":{"infinitive":"appear","present":"appears","ing":"appearing","past":"appeared","pastParticiple":"appeared"},"defaultObject":"suddenly","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2363},{"en":"apple","zh":"苹果","pos":"n.","example":"An apple a day keeps the doctor away.","exampleZh":"一天一苹果，医生远离我。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2343},{"en":"appointment","zh":"预约","pos":"n.","example":"I have an appointment at three.","exampleZh":"我三点有个预约。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1910},{"en":"appreciate","zh":"感激","pos":"v.","example":"I really appreciate your help.","exampleZh":"我真的很感激你的帮助。","forms":{"infinitive":"appreciate","present":"appreciates","ing":"appreciating","past":"appreciated","pastParticiple":"appreciated"},"defaultObject":"your help","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":862},{"en":"approach","zh":"接近","pos":"v.","example":"Winter is approaching.","exampleZh":"冬天快到了。","forms":{"infinitive":"approach","present":"approaches","ing":"approaching","past":"approached","pastParticiple":"approached"},"defaultObject":"the door","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2561},{"en":"april","zh":"四月","pos":"n.","example":"April is a rainy month.","exampleZh":"四月是多雨的月份。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2593},{"en":"are","zh":"是（复数）","pos":"v.","example":"You are my best friend.","exampleZh":"你是我最好的朋友。","forms":{"infinitive":"are","present":"ares","ing":"aring","past":"ared","pastParticiple":"ared"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":34},{"en":"area","zh":"地区；面积","pos":"n.","example":"This is a quiet area.","exampleZh":"这是一个安静的区域。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":961},{"en":"argue","zh":"争论","pos":"v.","example":"Don\'t argue with your mother.","exampleZh":"别和你妈妈争吵。","forms":{"infinitive":"argue","present":"argues","ing":"argueing","past":"argued","pastParticiple":"argued"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2676},{"en":"argument","zh":"争论","pos":"n.","example":"They had an argument about money.","exampleZh":"他们为钱吵了一架。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2983},{"en":"arm","zh":"手臂","pos":"n.","example":"My arm hurts when I lift things.","exampleZh":"我抬东西时胳膊疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1078},{"en":"around","zh":"在……周围","pos":"prep.","example":"The earth moves around the sun.","exampleZh":"地球绕着太阳转。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":168},{"en":"arrive","zh":"到达","pos":"v.","example":"We arrived at ten.","exampleZh":"我们十点到的。","forms":{"infinitive":"arrive","present":"arrives","ing":"arriving","past":"arrived","pastParticiple":"arrived"},"defaultObject":"early","tags":["transport"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2788},{"en":"art","zh":"艺术","pos":"n.","example":"She loves art class.","exampleZh":"她喜欢美术课。","forms":null,"defaultObject":null,"tags":["school","emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1003},{"en":"article","zh":"文章","pos":"n.","example":"I read an article about sleep.","exampleZh":"我读了篇关于睡眠的文章。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2690},{"en":"artist","zh":"艺术家","pos":"n.","example":"The artist painted the sea.","exampleZh":"那位艺术家画了大海。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1999},{"en":"as","zh":"作为；像","pos":"conj.","example":"I am as tall as you.","exampleZh":"我和你一样高。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":72},{"en":"ashamed","zh":"羞愧的","pos":"adj.","example":"He felt ashamed of his words.","exampleZh":"他为自己说的话感到羞愧。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2072},{"en":"aside","zh":"在旁边","pos":"adv.","example":"He put the letter aside.","exampleZh":"他把信放到一边。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2334},{"en":"ask","zh":"问；请求","pos":"v.","example":"May I ask you a question?","exampleZh":"我可以问你一个问题吗？","forms":{"infinitive":"ask","present":"asks","ing":"asking","past":"asked","pastParticiple":"asked"},"defaultObject":"a question","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":240},{"en":"asleep","zh":"睡着的","pos":"adj.","example":"The baby is asleep.","exampleZh":"宝宝睡着了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1320},{"en":"assignment","zh":"任务；作业","pos":"n.","example":"The assignment is due Friday.","exampleZh":"作业周五交。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2889},{"en":"assistant","zh":"助理","pos":"n.","example":"She works as a shop assistant.","exampleZh":"她当店员。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1842},{"en":"assume","zh":"假定","pos":"v.","example":"I assumed you were coming.","exampleZh":"我以为你会来。","forms":{"infinitive":"assume","present":"assumes","ing":"assuming","past":"assumed","pastParticiple":"assumed"},"defaultObject":"the worst","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1772},{"en":"assure","zh":"向……保证","pos":"v.","example":"I assure you it is safe.","exampleZh":"我向你保证这很安全。","forms":{"infinitive":"assure","present":"assures","ing":"assuring","past":"assured","pastParticiple":"assured"},"defaultObject":"you","tags":["emotion"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2642},{"en":"at","zh":"在","pos":"prep.","example":"I am good at math.","exampleZh":"我擅长数学。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":56},{"en":"attempt","zh":"尝试","pos":"v.","example":"She attempted to fix it herself.","exampleZh":"她试着自己修。","forms":{"infinitive":"attempt","present":"attempts","ing":"attempting","past":"attempted","pastParticiple":"attempted"},"defaultObject":"to fix it","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2733},{"en":"attention","zh":"注意力","pos":"n.","example":"Pay attention to the teacher.","exampleZh":"注意听老师讲课。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":768},{"en":"attitude","zh":"态度","pos":"n.","example":"His attitude has changed a lot.","exampleZh":"他的态度变了很多。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2162},{"en":"attractive","zh":"有吸引力的","pos":"adj.","example":"The offer sounds attractive.","exampleZh":"这个提议听起来很吸引人。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2273},{"en":"audience","zh":"观众","pos":"n.","example":"The audience clapped for ten minutes.","exampleZh":"观众鼓掌了十分钟。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2223},{"en":"aunt","zh":"姑姑；阿姨","pos":"n.","example":"My aunt lives in the next town.","exampleZh":"我姑姑住在隔壁镇。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1217},{"en":"authority","zh":"权威；当局","pos":"n.","example":"He is an authority on this subject.","exampleZh":"他是这方面的权威。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2538},{"en":"available","zh":"可用的","pos":"adj.","example":"Is that room available tonight?","exampleZh":"今晚那间房有空吗？","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2175},{"en":"avenue","zh":"大道","pos":"n.","example":"The shop is on the main avenue.","exampleZh":"店在主干道上。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2999},{"en":"avoid","zh":"避免","pos":"v.","example":"Avoid making the same mistake.","exampleZh":"避免犯同样的错误。","forms":{"infinitive":"avoid","present":"avoids","ing":"avoiding","past":"avoided","pastParticiple":"avoided"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2293},{"en":"awake","zh":"醒着的","pos":"adj.","example":"The baby is awake now.","exampleZh":"宝宝现在醒着。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2110},{"en":"aware","zh":"意识到的","pos":"adj.","example":"I was not aware of the rule.","exampleZh":"我不知道有这条规定。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1691},{"en":"away","zh":"离开；远离","pos":"adv.","example":"Go away, please.","exampleZh":"请走开。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":170},{"en":"awesome","zh":"很棒的","pos":"adj.","example":"That concert was awesome.","exampleZh":"那场演唱会太棒了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1878},{"en":"awful","zh":"糟糕的","pos":"adj.","example":"The weather is awful today.","exampleZh":"今天天气很糟糕。","forms":null,"defaultObject":null,"tags":["food","nature","daily","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1100},{"en":"babe","zh":"宝贝","pos":"n.","example":"Good morning, babe.","exampleZh":"早啊，宝贝。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1694},{"en":"baby","zh":"婴儿","pos":"n.","example":"The baby is sleeping.","exampleZh":"宝宝正在睡觉。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":222},{"en":"back","zh":"背部；回来","pos":"n.","example":"Please go back to your seat.","exampleZh":"请回到你的座位。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":78},{"en":"background","zh":"背景","pos":"n.","example":"She has a music background.","exampleZh":"她有音乐背景。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2912},{"en":"backup","zh":"备份；后援","pos":"n.","example":"Always keep a backup.","exampleZh":"一定要留个备份。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2994},{"en":"bad","zh":"坏的","pos":"adj.","example":"The weather is bad today.","exampleZh":"今天天气很糟。","forms":null,"defaultObject":null,"tags":["food","nature","daily","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":211},{"en":"bag","zh":"包；袋子","pos":"n.","example":"I have a school bag.","exampleZh":"我有一个书包。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":802},{"en":"bail","zh":"保释；退出","pos":"n.","example":"He bailed on the plan.","exampleZh":"他退出了这个计划。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2947},{"en":"ball","zh":"球","pos":"n.","example":"He kicks the ball.","exampleZh":"他踢球。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":725},{"en":"band","zh":"乐队；带子","pos":"n.","example":"He is in the school band.","exampleZh":"他在学校乐队里。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1245},{"en":"bang","zh":"猛击","pos":"v.","example":"He banged the door shut.","exampleZh":"他砰地把门关上。","forms":{"infinitive":"bang","present":"bangs","ing":"banging","past":"banged","pastParticiple":"banged"},"defaultObject":"the door","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2647},{"en":"bank","zh":"银行；河岸","pos":"n.","example":"I go to the bank.","exampleZh":"我去银行。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":874},{"en":"bar","zh":"酒吧；条","pos":"n.","example":"Let\'s meet at the coffee bar.","exampleZh":"我们在咖啡吧见面吧。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":859},{"en":"barely","zh":"几乎不","pos":"adv.","example":"I can barely hear you.","exampleZh":"我几乎听不见你说话。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1979},{"en":"base","zh":"基地；底座","pos":"n.","example":"The lamp has a heavy base.","exampleZh":"这灯底座很重。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1701},{"en":"baseball","zh":"棒球","pos":"n.","example":"We play baseball after school.","exampleZh":"我们放学后打棒球。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2233},{"en":"basement","zh":"地下室","pos":"n.","example":"We keep old boxes in the basement.","exampleZh":"我们把旧箱子放在地下室。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2553},{"en":"basically","zh":"基本上","pos":"adv.","example":"Basically, the plan is simple.","exampleZh":"基本上，计划很简单。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2167},{"en":"basketball","zh":"篮球","pos":"n.","example":"I like playing basketball.","exampleZh":"我喜欢打篮球。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2520},{"en":"bat","zh":"蝙蝠；球棒","pos":"n.","example":"A bat flies at night.","exampleZh":"蝙蝠在夜里飞。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2594},{"en":"bath","zh":"洗澡","pos":"n.","example":"I take a bath every day.","exampleZh":"我每天洗澡。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1894},{"en":"bathroom","zh":"浴室","pos":"n.","example":"The bathroom is downstairs.","exampleZh":"浴室在楼下。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1126},{"en":"battle","zh":"战斗","pos":"n.","example":"It was a long battle with the illness.","exampleZh":"那是场与疾病的长期斗争。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1501},{"en":"bay","zh":"海湾","pos":"n.","example":"The ship is in the bay.","exampleZh":"船在海湾里。","forms":null,"defaultObject":null,"tags":["transport","nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2298},{"en":"be","zh":"是；存在","pos":"v.","example":"I want to be a teacher.","exampleZh":"我想成为一名老师。","forms":{"infinitive":"be","present":"is","ing":"being","past":"was","pastParticiple":"been"},"defaultObject":"something","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":29},{"en":"beach","zh":"海滩","pos":"n.","example":"We play on the beach.","exampleZh":"我们在海滩上玩。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1194},{"en":"bear","zh":"熊；忍受","pos":"n.","example":"The bear lives in the forest.","exampleZh":"熊住在森林里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1186},{"en":"beat","zh":"打败；敲打","pos":"v.","example":"Our team beat theirs.","exampleZh":"我们队赢了他们队。","forms":{"infinitive":"beat","present":"beats","ing":"beating","past":"beated","pastParticiple":"beated"},"defaultObject":"the record","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":630},{"en":"beautiful","zh":"美丽的","pos":"adj.","example":"The flower is beautiful.","exampleZh":"这朵花很美。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":367},{"en":"beauty","zh":"美","pos":"n.","example":"The beauty of the place surprised me.","exampleZh":"这地方的美让我惊讶。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1350},{"en":"because","zh":"因为","pos":"conj.","example":"I am happy because it is sunny.","exampleZh":"我很开心，因为天气晴朗。","forms":null,"defaultObject":null,"tags":["emotion","nature"],"difficulty":1,"frameworks":["it_is_adj"],"rank":133},{"en":"become","zh":"成为","pos":"v.","example":"He wants to become a doctor.","exampleZh":"他想成为医生。","forms":{"infinitive":"become","present":"becomes","ing":"becoming","past":"became","pastParticiple":"become"},"defaultObject":"a doctor","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":684},{"en":"bed","zh":"床","pos":"n.","example":"It is time to go to bed.","exampleZh":"该睡觉了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":507},{"en":"bedroom","zh":"卧室","pos":"n.","example":"My bedroom is small but clean.","exampleZh":"我的卧室小但干净。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1651},{"en":"beef","zh":"牛肉","pos":"n.","example":"We had beef for dinner.","exampleZh":"我们晚饭吃了牛肉。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2681},{"en":"been","zh":"（be的过去分词）","pos":"v.","example":"I have been to Beijing.","exampleZh":"我去过北京。","forms":{"infinitive":"been","present":"beens","ing":"beening","past":"beened","pastParticiple":"beened"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":91},{"en":"beer","zh":"啤酒","pos":"n.","example":"My father drinks beer.","exampleZh":"我爸爸喝啤酒。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":956},{"en":"before","zh":"在……之前","pos":"prep.","example":"Wash your hands before eating.","exampleZh":"吃东西前要洗手。","forms":null,"defaultObject":null,"tags":["food","body","daily","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":159},{"en":"beg","zh":"乞求","pos":"v.","example":"Please do not beg for food.","exampleZh":"请不要乞讨食物。","forms":{"infinitive":"beg","present":"begs","ing":"begging","past":"begged","pastParticiple":"begged"},"defaultObject":"something","tags":["food","object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1299},{"en":"begin","zh":"开始","pos":"v.","example":"The film begins at eight.","exampleZh":"电影八点开始。","forms":{"infinitive":"begin","present":"begins","ing":"beginning","past":"began","pastParticiple":"begun"},"defaultObject":"the lesson","tags":["daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1191},{"en":"behavior","zh":"行为","pos":"n.","example":"His behavior surprised everyone.","exampleZh":"他的行为让大家吃惊。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2436},{"en":"behind","zh":"在……后面","pos":"prep.","example":"The cat is behind the door.","exampleZh":"猫在门后面。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":504},{"en":"believe","zh":"相信","pos":"v.","example":"I believe you are right.","exampleZh":"我相信你是对的。","forms":{"infinitive":"believe","present":"believes","ing":"believing","past":"believed","pastParticiple":"believed"},"defaultObject":"the story","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":193},{"en":"bell","zh":"铃；钟","pos":"n.","example":"The school bell rings at eight.","exampleZh":"学校铃声八点响。","forms":null,"defaultObject":null,"tags":["school","place","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1568},{"en":"belong","zh":"属于","pos":"v.","example":"This book belongs to my sister.","exampleZh":"这本书是我妹妹的。","forms":{"infinitive":"belong","present":"belongs","ing":"belonging","past":"belonged","pastParticiple":"belonged"},"defaultObject":"here","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1448},{"en":"below","zh":"在……下面","pos":"prep.","example":"The fish are below the bridge.","exampleZh":"鱼在桥下面。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2035},{"en":"belt","zh":"腰带","pos":"n.","example":"He tightened his belt.","exampleZh":"他把腰带系紧了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2290},{"en":"besides","zh":"除此之外","pos":"adv.","example":"Besides, it is too expensive.","exampleZh":"而且，这也太贵了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":875},{"en":"best","zh":"最好的","pos":"adj.","example":"She is the best student in class.","exampleZh":"她是班上最好的学生。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":279},{"en":"bet","zh":"打赌","pos":"v.","example":"I bet you can do it.","exampleZh":"我打赌你能做到。","forms":{"infinitive":"bet","present":"bets","ing":"betting","past":"betted","pastParticiple":"betted"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":535},{"en":"better","zh":"更好的","pos":"adj.","example":"Your English is better than mine.","exampleZh":"你的英语比我好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":160},{"en":"between","zh":"在……之间","pos":"prep.","example":"The shop is between the bank and the school.","exampleZh":"商店在银行和学校之间。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":528},{"en":"beyond","zh":"超出","pos":"prep.","example":"The price is beyond what I can pay.","exampleZh":"这个价格超出我能承受的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1477},{"en":"bible","zh":"圣经","pos":"n.","example":"The old bible sits on the shelf.","exampleZh":"那本旧圣经放在架子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2838},{"en":"big","zh":"大的","pos":"adj.","example":"Elephants are big animals.","exampleZh":"大象是很大的动物。","forms":null,"defaultObject":null,"tags":["nature","object","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":180},{"en":"bike","zh":"自行车","pos":"n.","example":"Can I ride your bike?","exampleZh":"我能骑你的自行车吗？","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2181},{"en":"bill","zh":"账单；钞票","pos":"n.","example":"Please pay the bill.","exampleZh":"请付账单。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":675},{"en":"bird","zh":"鸟","pos":"n.","example":"A bird is singing in the tree.","exampleZh":"一只鸟在树上唱歌。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1416},{"en":"birth","zh":"出生","pos":"n.","example":"The baby\'s birth brought great joy.","exampleZh":"婴儿的出生带来了极大的喜悦。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2062},{"en":"birthday","zh":"生日","pos":"n.","example":"Happy birthday to you!","exampleZh":"祝你生日快乐！","forms":null,"defaultObject":null,"tags":["emotion","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":779},{"en":"bit","zh":"一点；少量","pos":"n.","example":"Wait a bit, please.","exampleZh":"请等一下。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":426},{"en":"bite","zh":"咬","pos":"v.","example":"Do not let the dog bite you.","exampleZh":"别让狗咬到你。","forms":{"infinitive":"bite","present":"bites","ing":"biting","past":"bit","pastParticiple":"bitten"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1536},{"en":"black","zh":"黑色的","pos":"adj.","example":"The cat is black.","exampleZh":"那只猫是黑的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":544},{"en":"blame","zh":"责怪","pos":"v.","example":"Do not blame yourself for this.","exampleZh":"别为这事责怪自己。","forms":{"infinitive":"blame","present":"blames","ing":"blaming","past":"blamed","pastParticiple":"blamed"},"defaultObject":"himself","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1171},{"en":"bleeding","zh":"流血","pos":"v.","example":"His finger was bleeding.","exampleZh":"他手指在流血。","forms":{"infinitive":"bleeding","present":"bleedings","ing":"bleedinging","past":"bleedinged","pastParticiple":"bleedinged"},"defaultObject":"badly","tags":["body"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1946},{"en":"bless","zh":"保佑；祝福","pos":"v.","example":"God bless you.","exampleZh":"上帝保佑你。","forms":{"infinitive":"bless","present":"blesses","ing":"blessing","past":"blessed","pastParticiple":"blessed"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1719},{"en":"blind","zh":"失明的","pos":"adj.","example":"His grandfather is blind.","exampleZh":"他爷爷失明了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1401},{"en":"block","zh":"街区；阻塞","pos":"n.","example":"He is playing with blocks.","exampleZh":"他在玩积木。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1541},{"en":"blood","zh":"血液","pos":"n.","example":"Blood is red.","exampleZh":"血是红色的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":510},{"en":"blow","zh":"吹","pos":"v.","example":"The wind blows strongly.","exampleZh":"风刮得很猛。","forms":{"infinitive":"blow","present":"blows","ing":"blowing","past":"blew","pastParticiple":"blown"},"defaultObject":"something","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":775},{"en":"blue","zh":"蓝色的","pos":"adj.","example":"The sky is blue.","exampleZh":"天空是蓝色的。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":746},{"en":"board","zh":"板；董事会","pos":"n.","example":"Please pass me the board.","exampleZh":"请把板子递给我。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1095},{"en":"boat","zh":"船","pos":"n.","example":"We go fishing by boat.","exampleZh":"我们乘船去钓鱼。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":786},{"en":"body","zh":"身体","pos":"n.","example":"Exercise is good for your body.","exampleZh":"锻炼对身体好。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":490},{"en":"bomb","zh":"炸弹","pos":"n.","example":"The police found a bomb.","exampleZh":"警察发现了一枚炸弹。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1239},{"en":"bond","zh":"纽带；债券","pos":"n.","example":"The bond between them is strong.","exampleZh":"他们之间的纽带很牢固。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1885},{"en":"bone","zh":"骨头","pos":"n.","example":"Dogs like to chew bones.","exampleZh":"狗喜欢啃骨头。","forms":null,"defaultObject":null,"tags":["emotion","body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2163},{"en":"book","zh":"书","pos":"n.","example":"I am reading an interesting book.","exampleZh":"我在读一本有趣的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":526},{"en":"boom","zh":"轰隆声","pos":"n.","example":"We heard a boom outside.","exampleZh":"我们听到外面一声巨响。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2481},{"en":"booth","zh":"亭子；隔间","pos":"n.","example":"We sat in a corner booth.","exampleZh":"我们坐在角落的卡座。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2611},{"en":"boots","zh":"靴子","pos":"n.","example":"Wear your boots, it is muddy.","exampleZh":"穿靴子，外面泥泞。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2731},{"en":"border","zh":"边界","pos":"n.","example":"The river forms the border.","exampleZh":"这条河是边界。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2962},{"en":"bored","zh":"无聊的","pos":"adj.","example":"The children got bored quickly.","exampleZh":"孩子们很快就无聊了。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2630},{"en":"boring","zh":"无聊的","pos":"adj.","example":"The movie is boring.","exampleZh":"这部电影很无聊。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2070},{"en":"born","zh":"出生的","pos":"v.","example":"I was born in 2010.","exampleZh":"我出生于2010年。","forms":{"infinitive":"born","present":"borns","ing":"borning","past":"borned","pastParticiple":"borned"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":883},{"en":"borrow","zh":"借入","pos":"v.","example":"Can I borrow your pen?","exampleZh":"我能借你的笔吗？","forms":{"infinitive":"borrow","present":"borrows","ing":"borrowing","past":"borrowed","pastParticiple":"borrowed"},"defaultObject":"something","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1964},{"en":"boss","zh":"老板","pos":"n.","example":"My boss is on holiday this week.","exampleZh":"我老板这周休假。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":648},{"en":"both","zh":"两者都","pos":"pron.","example":"Both of my parents are teachers.","exampleZh":"我的父母都是老师。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":350},{"en":"bother","zh":"打扰；麻烦","pos":"v.","example":"Sorry to bother you.","exampleZh":"抱歉打扰你。","forms":{"infinitive":"bother","present":"bothers","ing":"botherring","past":"botherred","pastParticiple":"botherred"},"defaultObject":"him","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1058},{"en":"bottle","zh":"瓶子","pos":"n.","example":"Please pass me the water bottle.","exampleZh":"请把水瓶递给我。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1305},{"en":"bottom","zh":"底部","pos":"n.","example":"The key was at the bottom of the bag.","exampleZh":"钥匙在包底。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1315},{"en":"bought","zh":"买（过去式）","pos":"v.","example":"I bought a new shirt yesterday.","exampleZh":"我昨天买了一件新衬衫。","forms":{"infinitive":"bought","present":"boughts","ing":"boughting","past":"boughted","pastParticiple":"boughted"},"defaultObject":"something","tags":["nature","daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":867},{"en":"bound","zh":"注定的；捆绑的","pos":"adj.","example":"He is bound to be late.","exampleZh":"他肯定要迟到。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2824},{"en":"bow","zh":"弓；鞠躬","pos":"v.","example":"The actor bowed to the audience.","exampleZh":"演员向观众鞠躬。","forms":{"infinitive":"bow","present":"bows","ing":"bowing","past":"bowed","pastParticiple":"bowed"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2621},{"en":"bowl","zh":"碗","pos":"n.","example":"She ate a bowl of rice.","exampleZh":"她吃了一碗米饭。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2512},{"en":"box","zh":"盒子","pos":"n.","example":"There is a box on the table.","exampleZh":"桌子上有一个盒子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":824},{"en":"boy","zh":"男孩","pos":"n.","example":"The boy is playing soccer.","exampleZh":"男孩在踢足球。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":215},{"en":"boyfriend","zh":"男朋友","pos":"n.","example":"Her boyfriend cooks very well.","exampleZh":"她男朋友做饭很好。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":989},{"en":"brain","zh":"大脑","pos":"n.","example":"Use your brain to solve this problem.","exampleZh":"用你的大脑解决这个问题。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":941},{"en":"brave","zh":"勇敢的","pos":"adj.","example":"The brave soldier saved the child.","exampleZh":"勇敢的士兵救了孩子。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1866},{"en":"bread","zh":"面包","pos":"n.","example":"I have bread and milk for breakfast.","exampleZh":"我早餐吃面包和牛奶。","forms":null,"defaultObject":null,"tags":["food","school","daily","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2018},{"en":"break","zh":"打破；休息","pos":"v.","example":"Let\'s take a break.","exampleZh":"我们休息一下吧。","forms":{"infinitive":"break","present":"breaks","ing":"breaking","past":"broke","pastParticiple":"broken"},"defaultObject":"the glass","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":446},{"en":"breakfast","zh":"早餐","pos":"n.","example":"I eat eggs for breakfast.","exampleZh":"我早餐吃鸡蛋。","forms":null,"defaultObject":null,"tags":["food","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1067},{"en":"breath","zh":"呼吸","pos":"n.","example":"Take a deep breath.","exampleZh":"深呼吸。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1432},{"en":"breathe","zh":"呼吸","pos":"v.","example":"Breathe slowly and relax.","exampleZh":"慢慢呼吸，放松。","forms":{"infinitive":"breathe","present":"breathes","ing":"breathing","past":"breathed","pastParticiple":"breathed"},"defaultObject":"deeply","tags":["body"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1344},{"en":"bride","zh":"新娘","pos":"n.","example":"The bride looks beautiful.","exampleZh":"新娘看起来很美。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2299},{"en":"bridge","zh":"桥","pos":"n.","example":"We walked across the bridge.","exampleZh":"我们走过桥。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1404},{"en":"bright","zh":"明亮的","pos":"adj.","example":"The room is bright in the morning.","exampleZh":"早上房间很亮。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1446},{"en":"brilliant","zh":"出色的","pos":"adj.","example":"She had a brilliant idea.","exampleZh":"她有个绝妙的主意。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1682},{"en":"bring","zh":"带来","pos":"v.","example":"Please bring your book tomorrow.","exampleZh":"请明天带上你的书。","forms":{"infinitive":"bring","present":"brings","ing":"bringing","past":"brought","pastParticiple":"brought"},"defaultObject":"a bag","tags":["school","nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":324},{"en":"broken","zh":"破碎的","pos":"adj.","example":"The glass is broken.","exampleZh":"玻璃杯碎了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":994},{"en":"brother","zh":"兄弟","pos":"n.","example":"My brother works in another city.","exampleZh":"我哥哥在另一个城市工作。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":362},{"en":"brought","zh":"带来（过去式）","pos":"v.","example":"He brought his friend to school.","exampleZh":"他带朋友来学校了。","forms":{"infinitive":"brought","present":"broughts","ing":"broughting","past":"broughted","pastParticiple":"broughted"},"defaultObject":"something","tags":["school","place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":533},{"en":"brown","zh":"棕色的","pos":"adj.","example":"The bear is brown.","exampleZh":"熊是棕色的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1147},{"en":"buck","zh":"雄鹿；美元","pos":"n.","example":"The buck ran into the forest.","exampleZh":"那只雄鹿跑进了森林。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1763},{"en":"bud","zh":"朋友；花蕾","pos":"n.","example":"The buds opened in spring.","exampleZh":"花蕾在春天开了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1698},{"en":"buddy","zh":"伙计","pos":"n.","example":"Thanks, buddy.","exampleZh":"谢了，伙计。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":742},{"en":"bug","zh":"虫子；故障","pos":"n.","example":"There is a bug on the window.","exampleZh":"窗户上有只虫子。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2565},{"en":"build","zh":"建造","pos":"v.","example":"They build a new house.","exampleZh":"他们建了一栋新房子。","forms":{"infinitive":"build","present":"builds","ing":"building","past":"built","pastParticiple":"built"},"defaultObject":"a house","tags":["place"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1354},{"en":"bunch","zh":"一群；一束","pos":"n.","example":"He brought a bunch of flowers.","exampleZh":"他带了一束花。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1170},{"en":"bunny","zh":"兔子","pos":"n.","example":"The bunny hid under the bush.","exampleZh":"兔子躲在灌木下。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2815},{"en":"burn","zh":"燃烧","pos":"v.","example":"Be careful not to burn your hand.","exampleZh":"小心别烫到手。","forms":{"infinitive":"burn","present":"burns","ing":"burning","past":"burned","pastParticiple":"burned"},"defaultObject":"something","tags":["transport","emotion","body"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1215},{"en":"bury","zh":"埋葬","pos":"v.","example":"The dog buried its bone.","exampleZh":"狗把骨头埋了。","forms":{"infinitive":"bury","present":"buries","ing":"burying","past":"buried","pastParticiple":"buried"},"defaultObject":"the bone","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2588},{"en":"bus","zh":"公共汽车","pos":"n.","example":"I go to school by bus.","exampleZh":"我坐公交车上学。","forms":null,"defaultObject":null,"tags":["transport","school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":967},{"en":"business","zh":"商业；生意","pos":"n.","example":"His business is doing well.","exampleZh":"他的生意做得很好。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":327},{"en":"busy","zh":"忙碌的","pos":"adj.","example":"My mother is very busy today.","exampleZh":"我妈妈今天很忙。","forms":null,"defaultObject":null,"tags":["transport","nature","daily","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":719},{"en":"but","zh":"但是","pos":"conj.","example":"I like apples, but I do not like bananas.","exampleZh":"我喜欢苹果，但不喜欢香蕉。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":40},{"en":"butter","zh":"黄油","pos":"n.","example":"Put some butter on the bread.","exampleZh":"在面包上抹点黄油。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2607},{"en":"button","zh":"按钮；纽扣","pos":"n.","example":"This button is missing.","exampleZh":"少了一颗扣子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2020},{"en":"buy","zh":"买","pos":"v.","example":"I want to buy a new phone.","exampleZh":"我想买一部新手机。","forms":{"infinitive":"buy","present":"buys","ing":"buying","past":"bought","pastParticiple":"bought"},"defaultObject":"a gift","tags":["body","object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":497},{"en":"by","zh":"通过；在旁边","pos":"prep.","example":"I go to school by bus every day.","exampleZh":"我每天乘公交车去上学。","forms":null,"defaultObject":null,"tags":["transport","school","nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":112},{"en":"bye","zh":"再见","pos":"int.","example":"Good bye, see you tomorrow!","exampleZh":"再见，明天见！","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["it_is_adj"],"rank":520},{"en":"cab","zh":"出租车","pos":"n.","example":"Let us take a cab.","exampleZh":"我们打车吧。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1683},{"en":"cabin","zh":"小屋","pos":"n.","example":"We stayed in a cabin by the lake.","exampleZh":"我们住在湖边的小屋里。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2686},{"en":"cable","zh":"缆线","pos":"n.","example":"I need a longer cable.","exampleZh":"我需要根长点的线。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2487},{"en":"cage","zh":"笼子","pos":"n.","example":"The bird sang in its cage.","exampleZh":"鸟在笼子里唱歌。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2622},{"en":"cake","zh":"蛋糕","pos":"n.","example":"I want to eat cake.","exampleZh":"我想吃蛋糕。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1428},{"en":"call","zh":"打电话；叫","pos":"v.","example":"Please call me tomorrow.","exampleZh":"请明天给我打电话。","forms":{"infinitive":"call","present":"calls","ing":"calling","past":"called","pastParticiple":"called"},"defaultObject":"a friend","tags":["nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":146},{"en":"calm","zh":"平静的","pos":"adj.","example":"Please calm down.","exampleZh":"请冷静下来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":833},{"en":"came","zh":"来（过去式）","pos":"v.","example":"She came to school early.","exampleZh":"她很早就来学校了。","forms":{"infinitive":"came","present":"cames","ing":"caming","past":"camed","pastParticiple":"camed"},"defaultObject":"something","tags":["school","place","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":249},{"en":"camera","zh":"照相机","pos":"n.","example":"I have a new camera.","exampleZh":"我有一台新相机。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1190},{"en":"camp","zh":"营地；露营","pos":"n.","example":"We go to summer camp.","exampleZh":"我们去夏令营。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1294},{"en":"can","zh":"能；罐头","pos":"modal v.","example":"Can you help me?","exampleZh":"你能帮我吗？","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["it_is_adj"],"rank":33},{"en":"cancel","zh":"取消","pos":"v.","example":"They cancelled the meeting.","exampleZh":"他们取消了会议。","forms":{"infinitive":"cancel","present":"cancels","ing":"cancelling","past":"cancelled","pastParticiple":"cancelled"},"defaultObject":"the meeting","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2841},{"en":"cancer","zh":"癌症","pos":"n.","example":"Her aunt survived cancer.","exampleZh":"她姑姑战胜了癌症。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2443},{"en":"candy","zh":"糖果","pos":"n.","example":"Children love candy.","exampleZh":"孩子们喜欢糖果。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1686},{"en":"cannot","zh":"不能","pos":"modal v.","example":"I cannot open this bottle.","exampleZh":"我打不开这瓶子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["it_is_adj"],"rank":643},{"en":"cap","zh":"帽子","pos":"n.","example":"He wears a blue cap.","exampleZh":"他戴着顶蓝帽子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2779},{"en":"capable","zh":"有能力的","pos":"adj.","example":"She is capable of doing better.","exampleZh":"她能做得更好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2580},{"en":"car","zh":"汽车","pos":"n.","example":"My father drives a car.","exampleZh":"我爸爸开一辆车。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":241},{"en":"card","zh":"卡片","pos":"n.","example":"I made a birthday card.","exampleZh":"我做了一张生日卡片。","forms":null,"defaultObject":null,"tags":["transport","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":868},{"en":"care","zh":"在乎；关心","pos":"v.","example":"She cares about her students.","exampleZh":"她关心她的学生。","forms":{"infinitive":"care","present":"cares","ing":"caring","past":"cared","pastParticiple":"cared"},"defaultObject":"about it","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":235},{"en":"careful","zh":"小心的","pos":"adj.","example":"Be careful when you cross the road.","exampleZh":"过马路时要小心。","forms":null,"defaultObject":null,"tags":["transport","emotion","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":712},{"en":"carry","zh":"搬运；携带","pos":"v.","example":"Can you carry this bag?","exampleZh":"你能提这个袋子吗？","forms":{"infinitive":"carry","present":"carries","ing":"carrying","past":"carried","pastParticiple":"carried"},"defaultObject":"a box","tags":["transport","object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1072},{"en":"case","zh":"情况；案例","pos":"n.","example":"In that case, we should wait.","exampleZh":"那样的话，我们该等等。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":364},{"en":"cash","zh":"现金","pos":"n.","example":"Do you take cash?","exampleZh":"收现金吗？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":986},{"en":"casino","zh":"赌场","pos":"n.","example":"The casino never closes.","exampleZh":"赌场从不关门。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2612},{"en":"castle","zh":"城堡","pos":"n.","example":"We visited a big castle.","exampleZh":"我们参观了一座大城堡。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2501},{"en":"cat","zh":"猫","pos":"n.","example":"The cat is sleeping on the sofa.","exampleZh":"猫在沙发上睡觉。","forms":null,"defaultObject":null,"tags":["body","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1066},{"en":"catch","zh":"抓住","pos":"v.","example":"Catch the ball!","exampleZh":"接住球！","forms":{"infinitive":"catch","present":"catches","ing":"catching","past":"caught","pastParticiple":"caught"},"defaultObject":"the ball","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":620},{"en":"caught","zh":"抓住（过去式）","pos":"v.","example":"The police caught the thief.","exampleZh":"警察抓住了小偷。","forms":{"infinitive":"caught","present":"caughts","ing":"caughting","past":"caughted","pastParticiple":"caughted"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":804},{"en":"cause","zh":"原因；导致","pos":"n.","example":"What is the cause of the problem?","exampleZh":"问题的原因是什么？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":336},{"en":"celebrate","zh":"庆祝","pos":"v.","example":"We celebrated her birthday at home.","exampleZh":"我们在家给她庆生。","forms":{"infinitive":"celebrate","present":"celebrates","ing":"celebrating","past":"celebrated","pastParticiple":"celebrated"},"defaultObject":"her birthday","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2252},{"en":"cell","zh":"细胞；小房间","pos":"n.","example":"The doctor looked at the cells.","exampleZh":"医生看了细胞。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1231},{"en":"center","zh":"中心","pos":"n.","example":"The hotel is in the center of town.","exampleZh":"酒店在市中心。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1403},{"en":"central","zh":"中心的","pos":"adj.","example":"The hotel is in a central spot.","exampleZh":"酒店位置很中心。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2266},{"en":"century","zh":"世纪","pos":"n.","example":"This church is two centuries old.","exampleZh":"这座教堂有两百年历史。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2577},{"en":"certain","zh":"确定的","pos":"adj.","example":"I am certain I locked the door.","exampleZh":"我确定我锁门了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":869},{"en":"certainly","zh":"当然","pos":"adv.","example":"I will certainly help you.","exampleZh":"我当然会帮你。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["it_is_adj"],"rank":671},{"en":"chain","zh":"链子","pos":"n.","example":"The bike chain came off.","exampleZh":"自行车链子掉了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2539},{"en":"chair","zh":"椅子","pos":"n.","example":"Please sit on this chair.","exampleZh":"请坐在这把椅子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1330},{"en":"challenge","zh":"挑战","pos":"n.","example":"The new job is a challenge.","exampleZh":"新工作是个挑战。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2659},{"en":"champagne","zh":"香槟","pos":"n.","example":"We drink champagne to celebrate.","exampleZh":"我们喝香槟庆祝。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1882},{"en":"champion","zh":"冠军","pos":"n.","example":"He became champion last year.","exampleZh":"他去年成了冠军。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2568},{"en":"chance","zh":"机会","pos":"n.","example":"Give me one more chance.","exampleZh":"再给我一次机会。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":411},{"en":"change","zh":"改变","pos":"v.","example":"The weather changes very fast here.","exampleZh":"这里天气变得很快。","forms":{"infinitive":"change","present":"changes","ing":"changing","past":"changed","pastParticiple":"changed"},"defaultObject":"my mind","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":416},{"en":"channel","zh":"频道","pos":"n.","example":"What channel is the game on?","exampleZh":"比赛在哪个频道？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2287},{"en":"character","zh":"角色；性格","pos":"n.","example":"She has a strong character.","exampleZh":"她性格很坚强。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1604},{"en":"charge","zh":"收费；充电","pos":"v.","example":"They charged me twice.","exampleZh":"他们收了我两次钱。","forms":{"infinitive":"charge","present":"charges","ing":"charging","past":"charged","pastParticiple":"charged"},"defaultObject":"the phone","tags":["daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":828},{"en":"charming","zh":"迷人的","pos":"adj.","example":"The old town is charming.","exampleZh":"这座老城很迷人。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2032},{"en":"chase","zh":"追赶","pos":"v.","example":"The dog chased the ball.","exampleZh":"狗去追球了。","forms":{"infinitive":"chase","present":"chases","ing":"chasing","past":"chased","pastParticiple":"chased"},"defaultObject":"the dog","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1813},{"en":"cheap","zh":"便宜的","pos":"adj.","example":"This shirt is cheap.","exampleZh":"这件衬衫很便宜。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1666},{"en":"cheat","zh":"作弊；欺骗","pos":"v.","example":"He cheated on the test.","exampleZh":"他考试作弊了。","forms":{"infinitive":"cheat","present":"cheats","ing":"cheating","past":"cheated","pastParticiple":"cheated"},"defaultObject":"on the test","tags":["school"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2908},{"en":"check","zh":"检查","pos":"v.","example":"Let me check the time.","exampleZh":"我看一下时间。","forms":{"infinitive":"check","present":"checks","ing":"checking","past":"checked","pastParticiple":"checked"},"defaultObject":"the time","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":369},{"en":"cheer","zh":"欢呼","pos":"v.","example":"Let us cheer for our team!","exampleZh":"让我们为我们的队加油！","forms":{"infinitive":"cheer","present":"cheers","ing":"cheering","past":"cheered","pastParticiple":"cheered"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2787},{"en":"cheese","zh":"奶酪","pos":"n.","example":"I bought some cheese and bread.","exampleZh":"我买了些奶酪和面包。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1578},{"en":"chest","zh":"胸部","pos":"n.","example":"He felt a pain in his chest.","exampleZh":"他觉得胸口疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1532},{"en":"chick","zh":"小鸡","pos":"n.","example":"The chick follows its mother.","exampleZh":"小鸡跟着它的妈妈。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2155},{"en":"chicken","zh":"鸡；鸡肉","pos":"n.","example":"I like fried chicken.","exampleZh":"我喜欢炸鸡。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1125},{"en":"chief","zh":"主管；首领","pos":"n.","example":"The chief wants to see you.","exampleZh":"主管要见你。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":935},{"en":"child","zh":"孩子","pos":"n.","example":"The child is playing in the park.","exampleZh":"孩子正在公园里玩。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":566},{"en":"chip","zh":"薯片；芯片","pos":"n.","example":"I ate a chip from the bag.","exampleZh":"我从袋子里拿了一片薯片吃。","forms":null,"defaultObject":null,"tags":["food","object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2598},{"en":"chocolate","zh":"巧克力","pos":"n.","example":"I love dark chocolate.","exampleZh":"我喜爱黑巧克力。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1962},{"en":"choice","zh":"选择","pos":"n.","example":"You have a choice to make.","exampleZh":"你需要做一个选择。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":776},{"en":"choose","zh":"选择","pos":"v.","example":"You can choose any book you like.","exampleZh":"你可以选任何你喜欢的书。","forms":{"infinitive":"choose","present":"chooses","ing":"choosing","past":"chose","pastParticiple":"chosen"},"defaultObject":"a color","tags":["school","emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1355},{"en":"christmas","zh":"圣诞节","pos":"n.","example":"We celebrate Christmas in December.","exampleZh":"我们在十二月庆祝圣诞节。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":659},{"en":"chuck","zh":"扔；抛","pos":"v.","example":"Chuck the ball to me.","exampleZh":"把球扔给我。","forms":{"infinitive":"chuck","present":"chucks","ing":"chucking","past":"chucked","pastParticiple":"chucked"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2509},{"en":"church","zh":"教堂","pos":"n.","example":"The church is very old.","exampleZh":"这座教堂很古老。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1027},{"en":"cigarette","zh":"香烟","pos":"n.","example":"He quit cigarettes last year.","exampleZh":"他去年戒烟了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2121},{"en":"circle","zh":"圆；圈","pos":"n.","example":"Draw a circle on the paper.","exampleZh":"在纸上画一个圆。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2504},{"en":"circumstances","zh":"情况","pos":"n.","example":"Under these circumstances, we must wait.","exampleZh":"这种情况下我们只能等。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2393},{"en":"circus","zh":"马戏团","pos":"n.","example":"The circus comes every summer.","exampleZh":"马戏团每年夏天来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2972},{"en":"city","zh":"城市","pos":"n.","example":"Shanghai is a big city.","exampleZh":"上海是一个大城市。","forms":null,"defaultObject":null,"tags":["nature","place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":541},{"en":"claim","zh":"声称；索取","pos":"v.","example":"He claimed he was at home.","exampleZh":"他声称他在家。","forms":{"infinitive":"claim","present":"claims","ing":"claiming","past":"claimed","pastParticiple":"claimed"},"defaultObject":"the prize","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2220},{"en":"class","zh":"班级；课","pos":"n.","example":"Our class has thirty students.","exampleZh":"我们班有三十名学生。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":679},{"en":"clean","zh":"干净的；打扫","pos":"adj.","example":"The classroom is very clean.","exampleZh":"教室很干净。","forms":null,"defaultObject":null,"tags":["school","place","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":662},{"en":"clear","zh":"清楚的","pos":"adj.","example":"The water is clear.","exampleZh":"水很清澈。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":534},{"en":"clever","zh":"聪明的","pos":"adj.","example":"What a clever idea!","exampleZh":"多聪明的主意！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2079},{"en":"client","zh":"客户","pos":"n.","example":"The client called this morning.","exampleZh":"客户今天早上打来了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1250},{"en":"climb","zh":"攀爬","pos":"v.","example":"Monkeys climb trees very fast.","exampleZh":"猴子爬树很快。","forms":{"infinitive":"climb","present":"climbs","ing":"climbing","past":"climbed","pastParticiple":"climbed"},"defaultObject":"a tree","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2677},{"en":"clock","zh":"时钟","pos":"n.","example":"The clock says three o\'clock.","exampleZh":"钟显示三点了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1174},{"en":"close","zh":"关闭；近的","pos":"v.","example":"Please close the door.","exampleZh":"请关上门。","forms":{"infinitive":"close","present":"closes","ing":"closing","past":"closed","pastParticiple":"closed"},"defaultObject":"the window","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":451},{"en":"closed","zh":"关闭的","pos":"adj.","example":"The shop is closed today.","exampleZh":"商店今天关门。","forms":null,"defaultObject":null,"tags":["nature","place","daily","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1236},{"en":"closet","zh":"衣柜","pos":"n.","example":"Your coat is in the closet.","exampleZh":"你的外套在衣柜里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2091},{"en":"clothes","zh":"衣服","pos":"n.","example":"I wash my clothes every weekend.","exampleZh":"我每个周末洗衣服。","forms":null,"defaultObject":null,"tags":["daily","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":753},{"en":"club","zh":"俱乐部","pos":"n.","example":"He joins the school football club.","exampleZh":"他加入了学校足球俱乐部。","forms":null,"defaultObject":null,"tags":["school","body","place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":767},{"en":"clue","zh":"线索","pos":"n.","example":"The police found a clue.","exampleZh":"警察找到了一条线索。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2914},{"en":"coach","zh":"教练","pos":"n.","example":"The coach trains the team every day.","exampleZh":"教练每天训练球队。","forms":null,"defaultObject":null,"tags":["transport","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1364},{"en":"coast","zh":"海岸","pos":"n.","example":"They drove along the coast.","exampleZh":"他们沿着海岸开车。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2113},{"en":"coat","zh":"外套","pos":"n.","example":"Put on your coat, it is cold outside.","exampleZh":"穿上外套，外面很冷。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1504},{"en":"code","zh":"代码；密码","pos":"n.","example":"The door code is four numbers.","exampleZh":"门的密码是四位数。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1254},{"en":"coffee","zh":"咖啡","pos":"n.","example":"I drink a cup of coffee in the morning.","exampleZh":"我早上喝一杯咖啡。","forms":null,"defaultObject":null,"tags":["food","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":599},{"en":"coincidence","zh":"巧合","pos":"n.","example":"What a coincidence to see you here!","exampleZh":"在这儿遇见你真巧！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2804},{"en":"coke","zh":"可乐","pos":"n.","example":"Would you like a coke?","exampleZh":"要来杯可乐吗？","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2808},{"en":"cold","zh":"冷的；感冒","pos":"adj.","example":"It is very cold in winter.","exampleZh":"冬天很冷。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":633},{"en":"collect","zh":"收集","pos":"v.","example":"My son collects old coins.","exampleZh":"我儿子收集旧硬币。","forms":{"infinitive":"collect","present":"collects","ing":"collecting","past":"collected","pastParticiple":"collected"},"defaultObject":"coins","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2645},{"en":"collection","zh":"收藏","pos":"n.","example":"He has a big record collection.","exampleZh":"他有一大堆唱片收藏。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2861},{"en":"college","zh":"大学","pos":"n.","example":"My brother is at college now.","exampleZh":"我哥现在上大学。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":871},{"en":"color","zh":"颜色","pos":"n.","example":"What is your favorite color?","exampleZh":"你最喜欢什么颜色？","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1566},{"en":"come","zh":"来","pos":"v.","example":"Please come to my birthday party.","exampleZh":"请来参加我的生日聚会。","forms":{"infinitive":"come","present":"comes","ing":"coming","past":"came","pastParticiple":"come"},"defaultObject":"something","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":58},{"en":"comes","zh":"来（第三人称）","pos":"v.","example":"The bus comes at eight o\'clock.","exampleZh":"公交车八点来。","forms":{"infinitive":"comes","present":"comeses","ing":"comessing","past":"comessed","pastParticiple":"comessed"},"defaultObject":"something","tags":["transport"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":432},{"en":"comfort","zh":"安慰；舒适","pos":"n.","example":"Her words gave me comfort.","exampleZh":"她的话给了我安慰。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2958},{"en":"comfortable","zh":"舒服的","pos":"adj.","example":"This chair is very comfortable.","exampleZh":"这椅子很舒服。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1374},{"en":"command","zh":"命令","pos":"n.","example":"She gave a short command.","exampleZh":"她下了个简短的命令。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1469},{"en":"commit","zh":"承诺；犯","pos":"v.","example":"She committed to the plan.","exampleZh":"她答应了这个计划。","forms":{"infinitive":"commit","present":"commits","ing":"committing","past":"committed","pastParticiple":"committed"},"defaultObject":"to it","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2716},{"en":"committee","zh":"委员会","pos":"n.","example":"The committee meets every month.","exampleZh":"委员会每月开会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2464},{"en":"common","zh":"常见的","pos":"adj.","example":"That is a common mistake.","exampleZh":"那是个常见的错误。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1442},{"en":"community","zh":"社区","pos":"n.","example":"Our community is very quiet.","exampleZh":"我们社区很安静。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1975},{"en":"company","zh":"公司","pos":"n.","example":"She works for a small company.","exampleZh":"她在一家小公司工作。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":593},{"en":"competition","zh":"竞争；比赛","pos":"n.","example":"The competition was tough.","exampleZh":"竞争很激烈。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2571},{"en":"complete","zh":"完整的","pos":"adj.","example":"The work is not complete yet.","exampleZh":"工作还没完成。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1284},{"en":"completely","zh":"完全地","pos":"adv.","example":"I completely forgot about it.","exampleZh":"我完全忘了这事。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":876},{"en":"complicated","zh":"复杂的","pos":"adj.","example":"The rules are too complicated.","exampleZh":"规则太复杂了。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2087},{"en":"computer","zh":"电脑","pos":"n.","example":"My computer is very slow.","exampleZh":"我电脑很慢。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1168},{"en":"concern","zh":"关心；担忧","pos":"n.","example":"Thank you for your concern.","exampleZh":"谢谢你的关心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2158},{"en":"concerned","zh":"担忧的","pos":"adj.","example":"The doctor was concerned about her.","exampleZh":"医生很担心她。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1449},{"en":"concert","zh":"音乐会","pos":"n.","example":"The concert starts at eight.","exampleZh":"音乐会八点开始。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2921},{"en":"condition","zh":"条件；状况","pos":"n.","example":"The car is in good condition.","exampleZh":"这车状况良好。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1610},{"en":"conference","zh":"会议","pos":"n.","example":"The conference lasts two days.","exampleZh":"会议开两天。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2216},{"en":"confidence","zh":"信心","pos":"n.","example":"Practice will give you confidence.","exampleZh":"练习会给你信心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2695},{"en":"confused","zh":"困惑的","pos":"adj.","example":"I was confused by his answer.","exampleZh":"他的回答让我很困惑。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1830},{"en":"congratulations","zh":"恭喜","pos":"int.","example":"Congratulations on your new job!","exampleZh":"恭喜你找到新工作！","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["it_is_adj"],"rank":1000},{"en":"connected","zh":"连接的","pos":"adj.","example":"The two rooms are connected.","exampleZh":"两个房间是通的。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2955},{"en":"connection","zh":"联系","pos":"n.","example":"The internet connection is slow.","exampleZh":"网络连接很慢。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2086},{"en":"consider","zh":"考虑","pos":"v.","example":"Please consider my offer.","exampleZh":"请考虑我的提议。","forms":{"infinitive":"consider","present":"considers","ing":"considerring","past":"considerred","pastParticiple":"considerred"},"defaultObject":"the idea","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1267},{"en":"contact","zh":"联系","pos":"v.","example":"Contact me if you have questions.","exampleZh":"有问题就联系我。","forms":{"infinitive":"contact","present":"contacts","ing":"contacting","past":"contacted","pastParticiple":"contacted"},"defaultObject":"me","tags":["daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1083},{"en":"contest","zh":"比赛；竞赛","pos":"n.","example":"She won first prize in the contest.","exampleZh":"她在比赛中获得了一等奖。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2775},{"en":"continue","zh":"继续","pos":"v.","example":"Please continue your story.","exampleZh":"请继续你的故事。","forms":{"infinitive":"continue","present":"continues","ing":"continueing","past":"continued","pastParticiple":"continued"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1323},{"en":"contract","zh":"合同","pos":"n.","example":"Read the contract before you sign.","exampleZh":"签字前先读合同。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1835},{"en":"control","zh":"控制","pos":"v.","example":"He could not control his anger.","exampleZh":"他控制不住怒气。","forms":{"infinitive":"control","present":"controls","ing":"controlling","past":"controlled","pastParticiple":"controlled"},"defaultObject":"the car","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":631},{"en":"conversation","zh":"对话","pos":"n.","example":"We had a long conversation.","exampleZh":"我们聊了很久。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1317},{"en":"convince","zh":"说服","pos":"v.","example":"He convinced me to try.","exampleZh":"他说服我试一试。","forms":{"infinitive":"convince","present":"convinces","ing":"convincing","past":"convinced","pastParticiple":"convinced"},"defaultObject":"him","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2783},{"en":"cook","zh":"做饭","pos":"v.","example":"My father cooks every weekend.","exampleZh":"我爸爸每个周末做饭。","forms":{"infinitive":"cook","present":"cooks","ing":"cooking","past":"cooked","pastParticiple":"cooked"},"defaultObject":"dinner","tags":["food"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1411},{"en":"cookies","zh":"饼干","pos":"n.","example":"She baked cookies for the children.","exampleZh":"她给孩子们烤了饼干。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2887},{"en":"cool","zh":"凉爽的；酷的","pos":"adj.","example":"The weather is cool today.","exampleZh":"今天天气很凉爽。","forms":null,"defaultObject":null,"tags":["food","nature","daily","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":488},{"en":"copy","zh":"副本","pos":"n.","example":"Could I have a copy of that?","exampleZh":"能给我一份副本吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1274},{"en":"corner","zh":"角落","pos":"n.","example":"The shop is around the corner.","exampleZh":"商店就在拐角处。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1266},{"en":"correct","zh":"正确的","pos":"adj.","example":"Your answer is correct.","exampleZh":"你的答案是对的。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1431},{"en":"cost","zh":"花费","pos":"v.","example":"How much does it cost?","exampleZh":"这要多少钱？","forms":{"infinitive":"cost","present":"costs","ing":"costing","past":"cost","pastParticiple":"cost"},"defaultObject":"a lot","tags":["daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1224},{"en":"couch","zh":"沙发","pos":"n.","example":"The cat sleeps on the couch.","exampleZh":"猫睡在沙发上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2357},{"en":"could","zh":"能；可以","pos":"modal v.","example":"Could you say that again?","exampleZh":"你能再说一遍吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":100},{"en":"council","zh":"委员会；议会","pos":"n.","example":"The city council meets tonight.","exampleZh":"市议会今晚开会。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2993},{"en":"count","zh":"数；计算","pos":"v.","example":"Count from one to one hundred.","exampleZh":"从一数到一百。","forms":{"infinitive":"count","present":"counts","ing":"counting","past":"counted","pastParticiple":"counted"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":823},{"en":"country","zh":"国家；乡村","pos":"n.","example":"She visited five countries last year.","exampleZh":"她去年去了五个国家。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":557},{"en":"county","zh":"县；郡","pos":"n.","example":"She grew up in this county.","exampleZh":"她在这个县长大。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1761},{"en":"couple","zh":"一对；夫妻","pos":"n.","example":"The couple walks hand in hand.","exampleZh":"那对夫妇手牵手走路。","forms":null,"defaultObject":null,"tags":["transport","body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":442},{"en":"courage","zh":"勇气","pos":"n.","example":"It took courage to say that.","exampleZh":"说出那话需要勇气。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2342},{"en":"course","zh":"课程；过程","pos":"n.","example":"Of course, I will help you.","exampleZh":"当然，我会帮你。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":233},{"en":"cousin","zh":"堂/表兄弟姐妹","pos":"n.","example":"My cousin lives in Beijing.","exampleZh":"我的表兄住在北京。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1338},{"en":"cover","zh":"覆盖","pos":"v.","example":"Cover the soup and keep it warm.","exampleZh":"把汤盖上保温。","forms":{"infinitive":"cover","present":"covers","ing":"coverring","past":"coverred","pastParticiple":"coverred"},"defaultObject":"the pot","tags":["food"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":799},{"en":"cow","zh":"母牛","pos":"n.","example":"The cow gives us milk.","exampleZh":"奶牛给我们牛奶。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2210},{"en":"crack","zh":"裂开","pos":"v.","example":"The cup cracked in the hot water.","exampleZh":"杯子在热水里裂了。","forms":{"infinitive":"crack","present":"cracks","ing":"cracking","past":"cracked","pastParticiple":"cracked"},"defaultObject":"the egg","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1811},{"en":"crash","zh":"碰撞；崩溃","pos":"n.","example":"My computer had a crash.","exampleZh":"我电脑崩了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1997},{"en":"crazy","zh":"疯狂的","pos":"adj.","example":"You are crazy to go out in this weather.","exampleZh":"这种天气出门你疯了。","forms":null,"defaultObject":null,"tags":["food","nature","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":375},{"en":"cream","zh":"奶油","pos":"n.","example":"Do you take cream in your coffee?","exampleZh":"你咖啡里加奶油吗？","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1340},{"en":"create","zh":"创造","pos":"v.","example":"She created a beautiful garden.","exampleZh":"她造了一个漂亮的花园。","forms":{"infinitive":"create","present":"creates","ing":"creating","past":"created","pastParticiple":"created"},"defaultObject":"a plan","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2230},{"en":"creature","zh":"生物","pos":"n.","example":"The sea creature swims very fast.","exampleZh":"这种海洋生物游得很快。","forms":null,"defaultObject":null,"tags":["food","nature","object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2518},{"en":"credit","zh":"信用；赊账","pos":"n.","example":"Can I pay by credit card?","exampleZh":"我能刷信用卡吗？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1400},{"en":"crew","zh":"船员；团队","pos":"n.","example":"The film crew is ready.","exampleZh":"电影摄制组准备好了。","forms":null,"defaultObject":null,"tags":["transport","school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1367},{"en":"cross","zh":"穿过；十字","pos":"v.","example":"Look both ways before you cross the street.","exampleZh":"过马路前两边都要看。","forms":{"infinitive":"cross","present":"crosses","ing":"crossing","past":"crossed","pastParticiple":"crossed"},"defaultObject":"something","tags":["transport","nature","daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1223},{"en":"crowd","zh":"人群","pos":"n.","example":"A large crowd gathered in the square.","exampleZh":"一大群人聚集在广场上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1631},{"en":"cruel","zh":"残酷的","pos":"adj.","example":"That was a cruel joke.","exampleZh":"那玩笑很残忍。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2836},{"en":"cry","zh":"哭；喊","pos":"v.","example":"The little girl cried when she fell.","exampleZh":"小女孩摔倒时哭了。","forms":{"infinitive":"cry","present":"cries","ing":"crying","past":"cried","pastParticiple":"cried"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1074},{"en":"cup","zh":"杯子","pos":"n.","example":"Would you like a cup of tea?","exampleZh":"你想来杯茶吗？","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1285},{"en":"cure","zh":"治愈","pos":"v.","example":"This medicine cured my cough.","exampleZh":"这药治好了我的咳嗽。","forms":{"infinitive":"cure","present":"cures","ing":"curing","past":"cured","pastParticiple":"cured"},"defaultObject":"the cough","tags":["body"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2578},{"en":"curious","zh":"好奇的","pos":"adj.","example":"The children were curious about the box.","exampleZh":"孩子们对那个盒子很好奇。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2143},{"en":"current","zh":"当前的","pos":"adj.","example":"What is your current address?","exampleZh":"你现在的地址是什么？","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2973},{"en":"customer","zh":"顾客","pos":"n.","example":"A customer is waiting outside.","exampleZh":"有位顾客在外面等。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":3252},{"en":"cut","zh":"切；剪","pos":"v.","example":"Be careful not to cut your finger.","exampleZh":"小心别切到手指。","forms":{"infinitive":"cut","present":"cuts","ing":"cutting","past":"cut","pastParticiple":"cut"},"defaultObject":"the paper","tags":["transport","emotion","body"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":431},{"en":"cute","zh":"可爱的","pos":"adj.","example":"The baby panda is very cute.","exampleZh":"熊猫宝宝非常可爱。","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":844},{"en":"dad","zh":"爸爸","pos":"n.","example":"My dad is a teacher.","exampleZh":"我爸爸是一名老师。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":225},{"en":"daddy","zh":"爸爸（儿语）","pos":"n.","example":"Daddy, can you help me?","exampleZh":"爸爸，能帮我一下吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":513},{"en":"damage","zh":"损坏","pos":"v.","example":"The storm damaged the roof.","exampleZh":"暴风雨把屋顶弄坏了。","forms":{"infinitive":"damage","present":"damages","ing":"damaging","past":"damaged","pastParticiple":"damaged"},"defaultObject":"the roof","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1802},{"en":"dance","zh":"跳舞","pos":"v.","example":"She can dance very well.","exampleZh":"她跳舞跳得很好。","forms":{"infinitive":"dance","present":"dances","ing":"dancing","past":"danced","pastParticiple":"danced"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":588},{"en":"danger","zh":"危险","pos":"n.","example":"Be careful! There is danger here.","exampleZh":"小心！这里有危险。","forms":null,"defaultObject":null,"tags":["transport","emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1467},{"en":"dangerous","zh":"危险的","pos":"adj.","example":"It is dangerous to swim alone.","exampleZh":"独自游泳很危险。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":962},{"en":"dare","zh":"敢","pos":"v.","example":"I did not dare to ask.","exampleZh":"我不敢问。","forms":{"infinitive":"dare","present":"dares","ing":"daring","past":"dared","pastParticiple":"dared"},"defaultObject":"to try","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1214},{"en":"dark","zh":"黑暗的","pos":"adj.","example":"It gets dark very early in winter.","exampleZh":"冬天天黑得很早。","forms":null,"defaultObject":null,"tags":["nature","daily","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":837},{"en":"darkness","zh":"黑暗","pos":"n.","example":"We walked home in the darkness.","exampleZh":"我们在黑暗中走回家。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2930},{"en":"darling","zh":"亲爱的","pos":"n.","example":"Good night, darling.","exampleZh":"晚安，亲爱的。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":635},{"en":"data","zh":"数据","pos":"n.","example":"The data shows a clear result.","exampleZh":"数据显示结果很明确。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2203},{"en":"date","zh":"日期；约会","pos":"n.","example":"What is the date today?","exampleZh":"今天几号？","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":603},{"en":"daughter","zh":"女儿","pos":"n.","example":"They have one daughter.","exampleZh":"他们有一个女儿。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":539},{"en":"dawn","zh":"黎明","pos":"n.","example":"We left at dawn.","exampleZh":"我们黎明时出发。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2211},{"en":"day","zh":"天；白天","pos":"n.","example":"It is a sunny day today.","exampleZh":"今天是个晴朗的日子。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":156},{"en":"dead","zh":"死的","pos":"adj.","example":"The flowers are dead.","exampleZh":"花已经枯死了。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":257},{"en":"deal","zh":"交易；处理","pos":"v.","example":"How do you deal with stress?","exampleZh":"你怎么应对压力？","forms":{"infinitive":"deal","present":"deals","ing":"dealing","past":"dealt","pastParticiple":"dealt"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":385},{"en":"dear","zh":"亲爱的","pos":"adj.","example":"Thank you, my dear friend.","exampleZh":"谢谢你，我亲爱的朋友。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":441},{"en":"decent","zh":"体面的；不错的","pos":"adj.","example":"We had a decent meal there.","exampleZh":"我们在那儿吃得还不错。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2033},{"en":"decide","zh":"决定","pos":"v.","example":"I cannot decide which one to buy.","exampleZh":"我决定不了买哪一个。","forms":{"infinitive":"decide","present":"decides","ing":"deciding","past":"decided","pastParticiple":"decided"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1310},{"en":"decision","zh":"决定","pos":"n.","example":"It was a difficult decision.","exampleZh":"那是个艰难的决定。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1222},{"en":"deck","zh":"甲板","pos":"n.","example":"We stood on the deck and watched the sea.","exampleZh":"我们站在甲板上看海。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2336},{"en":"deep","zh":"深的","pos":"adj.","example":"The lake is very deep.","exampleZh":"这个湖很深。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":946},{"en":"defend","zh":"保卫；辩护","pos":"v.","example":"She defended her idea well.","exampleZh":"她很好地为自己的想法辩护。","forms":{"infinitive":"defend","present":"defends","ing":"defending","past":"defended","pastParticiple":"defended"},"defaultObject":"her idea","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2774},{"en":"defense","zh":"防守；辩护","pos":"n.","example":"Our team has a strong defense.","exampleZh":"我们队防守很强。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1820},{"en":"definitely","zh":"肯定","pos":"adv.","example":"I will definitely come.","exampleZh":"我肯定来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":957},{"en":"degree","zh":"度；学位","pos":"n.","example":"It is thirty degrees today.","exampleZh":"今天三十度。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":3292},{"en":"delicious","zh":"美味的","pos":"adj.","example":"The cake is delicious.","exampleZh":"蛋糕很好吃。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2502},{"en":"deliver","zh":"递送","pos":"v.","example":"They deliver bread every morning.","exampleZh":"他们每天早上送面包。","forms":{"infinitive":"deliver","present":"delivers","ing":"deliverring","past":"deliverred","pastParticiple":"deliverred"},"defaultObject":"the package","tags":["food"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2017},{"en":"delivery","zh":"递送","pos":"n.","example":"The delivery arrives at noon.","exampleZh":"快递中午到。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2652},{"en":"demand","zh":"要求；需求","pos":"n.","example":"The demand is very high.","exampleZh":"需求很大。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2969},{"en":"deny","zh":"否认","pos":"v.","example":"He denied taking the money.","exampleZh":"他否认拿了钱。","forms":{"infinitive":"deny","present":"denies","ing":"denying","past":"denied","pastParticiple":"denied"},"defaultObject":"it","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2519},{"en":"department","zh":"部门","pos":"n.","example":"Which department do you work in?","exampleZh":"你在哪个部门？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1098},{"en":"depend","zh":"依靠","pos":"v.","example":"It depends on the weather.","exampleZh":"这取决于天气。","forms":{"infinitive":"depend","present":"depends","ing":"depending","past":"depended","pastParticiple":"depended"},"defaultObject":"on you","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":4410},{"en":"describe","zh":"描述","pos":"v.","example":"Can you describe the man?","exampleZh":"你能描述一下那个人吗？","forms":{"infinitive":"describe","present":"describes","ing":"describing","past":"described","pastParticiple":"described"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2985},{"en":"desert","zh":"沙漠","pos":"n.","example":"The desert is very dry.","exampleZh":"沙漠非常干燥。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2038},{"en":"deserve","zh":"值得；应得","pos":"v.","example":"You deserve a rest.","exampleZh":"你该好好休息一下。","forms":{"infinitive":"deserve","present":"deserves","ing":"deserving","past":"deserved","pastParticiple":"deserved"},"defaultObject":"a rest","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1465},{"en":"designed","zh":"设计的","pos":"adj.","example":"The chair is designed for children.","exampleZh":"这椅子是为孩子设计的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2925},{"en":"desire","zh":"渴望","pos":"n.","example":"He had a strong desire to travel.","exampleZh":"他非常渴望旅行。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2620},{"en":"desk","zh":"书桌","pos":"n.","example":"There is a book on the desk.","exampleZh":"桌子上有一本书。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1459},{"en":"desperate","zh":"绝望的","pos":"adj.","example":"She was desperate for good news.","exampleZh":"她极度渴望好消息。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2194},{"en":"destiny","zh":"命运","pos":"n.","example":"She believes in destiny.","exampleZh":"她相信命运。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2385},{"en":"destroy","zh":"破坏","pos":"v.","example":"The storm destroyed the house.","exampleZh":"暴风雨摧毁了房子。","forms":{"infinitive":"destroy","present":"destroys","ing":"destroying","past":"destroyed","pastParticiple":"destroyed"},"defaultObject":"something","tags":["nature","place"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1375},{"en":"detail","zh":"细节","pos":"n.","example":"Tell me the details later.","exampleZh":"细节等会儿告诉我。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2705},{"en":"device","zh":"设备","pos":"n.","example":"This device saves a lot of time.","exampleZh":"这个设备很省时间。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2862},{"en":"diamond","zh":"钻石","pos":"n.","example":"The ring has a small diamond.","exampleZh":"戒指上有颗小钻石。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2592},{"en":"did","zh":"做（过去式）","pos":"v.","example":"Did you finish your homework?","exampleZh":"你做完作业了吗？","forms":{"infinitive":"did","present":"dids","ing":"didding","past":"didded","pastParticiple":"didded"},"defaultObject":"something","tags":["school","place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":69},{"en":"difference","zh":"差别","pos":"n.","example":"I cannot hear the difference.","exampleZh":"我听不出区别。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":914},{"en":"different","zh":"不同的","pos":"adj.","example":"This tastes different from before.","exampleZh":"这味道跟以前不一样。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":467},{"en":"difficult","zh":"困难的","pos":"adj.","example":"Math is difficult for me.","exampleZh":"数学对我来说很难。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1145},{"en":"dig","zh":"挖","pos":"v.","example":"The dog dug a hole in the garden.","exampleZh":"狗在花园里挖了一个洞。","forms":{"infinitive":"dig","present":"digs","ing":"digging","past":"dug","pastParticiple":"dug"},"defaultObject":"something","tags":["nature"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1393},{"en":"dinner","zh":"晚餐","pos":"n.","example":"What do you want for dinner?","exampleZh":"你晚饭想吃什么？","forms":null,"defaultObject":null,"tags":["food","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":477},{"en":"direct","zh":"直接的；导演","pos":"adj.","example":"Is there a direct train?","exampleZh":"有直达火车吗？","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2310},{"en":"direction","zh":"方向","pos":"n.","example":"We walked in the wrong direction.","exampleZh":"我们走错方向了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2308},{"en":"director","zh":"主任；导演","pos":"n.","example":"The director wants to meet you.","exampleZh":"主任想见你。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1678},{"en":"dirt","zh":"泥土","pos":"n.","example":"His shoes were covered in dirt.","exampleZh":"他鞋上全是泥。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2195},{"en":"dirty","zh":"脏的","pos":"adj.","example":"My shoes are dirty.","exampleZh":"我的鞋脏了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1065},{"en":"disappear","zh":"消失","pos":"v.","example":"The keys disappeared again.","exampleZh":"钥匙又不见了。","forms":{"infinitive":"disappear","present":"disappears","ing":"disappearing","past":"disappeared","pastParticiple":"disappeared"},"defaultObject":"again","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2562},{"en":"disappointed","zh":"失望的","pos":"adj.","example":"She was disappointed by the film.","exampleZh":"这部电影让她失望。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2460},{"en":"disaster","zh":"灾难","pos":"n.","example":"The dinner was a disaster.","exampleZh":"那顿晚饭糟透了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2954},{"en":"discuss","zh":"讨论","pos":"v.","example":"We need to discuss this problem.","exampleZh":"我们需要讨论这个问题。","forms":{"infinitive":"discuss","present":"discusses","ing":"discussing","past":"discussed","pastParticiple":"discussed"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1407},{"en":"disease","zh":"疾病","pos":"n.","example":"The disease spreads very slowly.","exampleZh":"这种病传播得很慢。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2152},{"en":"disgusting","zh":"恶心的","pos":"adj.","example":"The smell was disgusting.","exampleZh":"那味道很恶心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2120},{"en":"distance","zh":"距离","pos":"n.","example":"The distance is about two miles.","exampleZh":"距离大约两英里。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2201},{"en":"district","zh":"区","pos":"n.","example":"She lives in the old district.","exampleZh":"她住在老城区。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2564},{"en":"division","zh":"除法；分割","pos":"n.","example":"We learned division in math class.","exampleZh":"我们在数学课上学了除法。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2814},{"en":"divorce","zh":"离婚","pos":"v.","example":"They divorced two years ago.","exampleZh":"他们两年前离婚了。","forms":{"infinitive":"divorce","present":"divorces","ing":"divorcing","past":"divorced","pastParticiple":"divorced"},"defaultObject":"him","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1815},{"en":"do","zh":"做；干","pos":"v.","example":"What do you do after work?","exampleZh":"你下班后做什么？","forms":{"infinitive":"do","present":"does","ing":"doing","past":"did","pastParticiple":"done"},"defaultObject":"the dishes","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":26},{"en":"doctor","zh":"医生","pos":"n.","example":"You should see a doctor about that cough.","exampleZh":"你那个咳嗽该去看医生。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":381},{"en":"dog","zh":"狗","pos":"n.","example":"I want to have a dog.","exampleZh":"我想养一只狗。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":496},{"en":"doll","zh":"玩偶","pos":"n.","example":"The girl carries her doll everywhere.","exampleZh":"女孩走到哪都带着娃娃。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2263},{"en":"dollar","zh":"美元","pos":"n.","example":"The book costs ten dollars.","exampleZh":"这本书十美元。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2052},{"en":"done","zh":"完成的","pos":"adj.","example":"Dinner is done. Let us eat.","exampleZh":"晚饭做好了，我们吃吧。","forms":null,"defaultObject":null,"tags":["food","daily","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":236},{"en":"door","zh":"门","pos":"n.","example":"Please open the door.","exampleZh":"请开门。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":351},{"en":"double","zh":"双倍的","pos":"adj.","example":"I would like a double scoop of ice cream.","exampleZh":"我想要双球冰淇淋。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1114},{"en":"doubt","zh":"怀疑","pos":"n.","example":"I have no doubt about it.","exampleZh":"我对此毫不怀疑。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1112},{"en":"down","zh":"向下","pos":"adv.","example":"Please sit down.","exampleZh":"请坐下。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":104},{"en":"downstairs","zh":"楼下","pos":"adv.","example":"Someone is waiting downstairs.","exampleZh":"有人在楼下等。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1580},{"en":"downtown","zh":"市中心","pos":"n.","example":"We work downtown.","exampleZh":"我们在市中心上班。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2468},{"en":"dozen","zh":"一打","pos":"n.","example":"She bought a dozen eggs.","exampleZh":"她买了一打鸡蛋。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2304},{"en":"drag","zh":"拖拽","pos":"v.","example":"Do not drag your feet when you walk.","exampleZh":"走路时不要拖着脚。","forms":{"infinitive":"drag","present":"drags","ing":"dragging","past":"dragged","pastParticiple":"dragged"},"defaultObject":"something","tags":["transport","body"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2132},{"en":"dragon","zh":"龙","pos":"n.","example":"The dragon is a symbol of China.","exampleZh":"龙是中国的象征。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2717},{"en":"drama","zh":"戏剧","pos":"n.","example":"We are going to watch a drama.","exampleZh":"我们要去看一场戏剧。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2634},{"en":"draw","zh":"画；拉","pos":"v.","example":"Please draw a picture for me.","exampleZh":"请为我画一幅画。","forms":{"infinitive":"draw","present":"draws","ing":"drawing","past":"drew","pastParticiple":"drawn"},"defaultObject":"a picture","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1547},{"en":"dream","zh":"梦；梦想","pos":"n.","example":"I had a very strange dream last night.","exampleZh":"我昨晚做了一个很奇怪的梦。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":626},{"en":"dress","zh":"连衣裙；穿衣","pos":"n.","example":"She wore a beautiful dress to the party.","exampleZh":"她穿了一件漂亮的连衣裙去参加聚会。","forms":null,"defaultObject":null,"tags":["daily","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":847},{"en":"drew","zh":"画（过去式）","pos":"v.","example":"She drew a cat on the paper.","exampleZh":"她在纸上画了一只猫。","forms":{"infinitive":"drew","present":"drews","ing":"drewing","past":"drewed","pastParticiple":"drewed"},"defaultObject":"something","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2241},{"en":"drink","zh":"喝；饮料","pos":"v.","example":"Would you like something to drink?","exampleZh":"你想喝点什么吗？","forms":{"infinitive":"drink","present":"drinks","ing":"drinking","past":"drank","pastParticiple":"drunk"},"defaultObject":"some water","tags":["food","object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":402},{"en":"drive","zh":"开车；驾驶","pos":"v.","example":"My father drives to work every day.","exampleZh":"我爸爸每天开车上班。","forms":{"infinitive":"drive","present":"drives","ing":"driving","past":"drove","pastParticiple":"driven"},"defaultObject":"a car","tags":["transport","nature","daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":577},{"en":"driver","zh":"司机","pos":"n.","example":"The bus driver is very friendly.","exampleZh":"公交车司机非常友好。","forms":null,"defaultObject":null,"tags":["transport","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1369},{"en":"drop","zh":"掉落；滴","pos":"v.","example":"Be careful not to drop the glass.","exampleZh":"小心别把玻璃杯摔了。","forms":{"infinitive":"drop","present":"drops","ing":"dropping","past":"dropped","pastParticiple":"dropped"},"defaultObject":"something","tags":["transport","emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":632},{"en":"drunk","zh":"喝醉的","pos":"adj.","example":"He got drunk at the party.","exampleZh":"他在聚会上喝醉了。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":944},{"en":"dry","zh":"干的","pos":"adj.","example":"The towel is not dry yet.","exampleZh":"毛巾还没干。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1482},{"en":"duck","zh":"鸭子","pos":"n.","example":"The duck is swimming in the river.","exampleZh":"鸭子在河里游泳。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2262},{"en":"dude","zh":"哥们","pos":"n.","example":"That dude works at the cafe.","exampleZh":"那哥们在咖啡馆上班。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":761},{"en":"due","zh":"到期的；预定的","pos":"adj.","example":"The report is due on Monday.","exampleZh":"报告周一到期。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1441},{"en":"duke","zh":"公爵","pos":"n.","example":"The duke lived in that old house.","exampleZh":"公爵曾住在那栋老宅里。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2242},{"en":"dumb","zh":"哑的；愚蠢的","pos":"adj.","example":"That was a dumb mistake.","exampleZh":"那是个愚蠢的错误。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1381},{"en":"dump","zh":"倾倒","pos":"v.","example":"Do not dump trash in the river.","exampleZh":"不要把垃圾倾倒在河里。","forms":{"infinitive":"dump","present":"dumps","ing":"dumping","past":"dumped","pastParticiple":"dumped"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1989},{"en":"during","zh":"在……期间","pos":"prep.","example":"He fell asleep during the movie.","exampleZh":"他看电影时睡着了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":953},{"en":"dust","zh":"灰尘","pos":"n.","example":"There is dust on the shelf.","exampleZh":"架子上有灰。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2329},{"en":"duty","zh":"职责","pos":"n.","example":"It is my duty to help.","exampleZh":"帮忙是我的职责。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1300},{"en":"each","zh":"每个","pos":"pron.","example":"Each student has a book.","exampleZh":"每个学生都有一本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":393},{"en":"ear","zh":"耳朵","pos":"n.","example":"I have two ears.","exampleZh":"我有两只耳朵。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1853},{"en":"earl","zh":"伯爵","pos":"n.","example":"The earl lives in a big castle.","exampleZh":"伯爵住在一座大城堡里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2608},{"en":"early","zh":"早的","pos":"adv.","example":"I get up early every day.","exampleZh":"我每天早起。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":716},{"en":"earth","zh":"地球；泥土","pos":"n.","example":"The earth goes around the sun.","exampleZh":"地球绕着太阳转。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":760},{"en":"ease","zh":"减轻；容易","pos":"n.","example":"She finished it with ease.","exampleZh":"她轻松就做完了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2739},{"en":"easily","zh":"容易地","pos":"adv.","example":"She passed the test easily.","exampleZh":"她轻松通过了考试。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2425},{"en":"east","zh":"东","pos":"n.","example":"The sun rises in the east.","exampleZh":"太阳从东边升起。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1324},{"en":"easy","zh":"容易的","pos":"adj.","example":"This lesson is easy.","exampleZh":"这一课很容易。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":380},{"en":"eat","zh":"吃","pos":"v.","example":"We eat dinner at seven.","exampleZh":"我们七点吃晚饭。","forms":{"infinitive":"eat","present":"eats","ing":"eating","past":"ate","pastParticiple":"eaten"},"defaultObject":"an apple","tags":["food","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":396},{"en":"eating","zh":"吃（进行时）","pos":"v.","example":"We are eating dinner now.","exampleZh":"我们现在在吃晚饭。","forms":{"infinitive":"eating","present":"eatings","ing":"eatinging","past":"eatinged","pastParticiple":"eatinged"},"defaultObject":"something","tags":["food","daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1135},{"en":"edge","zh":"边缘","pos":"n.","example":"Do not sit on the edge of the table.","exampleZh":"别坐在桌边上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2353},{"en":"education","zh":"教育","pos":"n.","example":"Education changed her life.","exampleZh":"教育改变了她的人生。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2692},{"en":"effect","zh":"效果","pos":"n.","example":"The medicine had no effect.","exampleZh":"药没起作用。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2322},{"en":"effort","zh":"努力","pos":"n.","example":"It took a lot of effort.","exampleZh":"这花了很大力气。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2710},{"en":"egg","zh":"鸡蛋","pos":"n.","example":"I had an egg for breakfast.","exampleZh":"我早餐吃了一个鸡蛋。","forms":null,"defaultObject":null,"tags":["food","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2166},{"en":"eight","zh":"八","pos":"num.","example":"I slept eight hours last night.","exampleZh":"我昨晚睡了八小时。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":769},{"en":"either","zh":"任一；也","pos":"pron.","example":"You can take either one.","exampleZh":"你可以拿其中任何一个。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":516},{"en":"electric","zh":"电动的","pos":"adj.","example":"They bought an electric car.","exampleZh":"他们买了辆电动车。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2968},{"en":"elevator","zh":"电梯","pos":"n.","example":"The elevator is out of order.","exampleZh":"电梯坏了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2288},{"en":"else","zh":"别的","pos":"adv.","example":"Do you need anything else?","exampleZh":"你还需要别的吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":256},{"en":"embarrassed","zh":"尴尬的","pos":"adj.","example":"I was embarrassed by my mistake.","exampleZh":"我因为自己的错误很尴尬。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2516},{"en":"embarrassing","zh":"令人尴尬的","pos":"adj.","example":"It was an embarrassing moment.","exampleZh":"那是个尴尬的时刻。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2400},{"en":"emergency","zh":"紧急情况","pos":"n.","example":"Call this number in an emergency.","exampleZh":"紧急情况打这个号码。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1228},{"en":"emotional","zh":"情绪化的","pos":"adj.","example":"It was an emotional goodbye.","exampleZh":"那是场动情的告别。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2542},{"en":"empty","zh":"空的","pos":"adj.","example":"The bottle is empty.","exampleZh":"瓶子空了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1373},{"en":"end","zh":"结束；末端","pos":"n.","example":"At the end of the road, turn left.","exampleZh":"在路的尽头左转。","forms":null,"defaultObject":null,"tags":["transport","body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":379},{"en":"energy","zh":"能量；精力","pos":"n.","example":"Children have a lot of energy.","exampleZh":"孩子们精力很充沛。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1809},{"en":"engaged","zh":"订婚的；忙碌的","pos":"adj.","example":"They got engaged last month.","exampleZh":"他们上个月订婚了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2169},{"en":"engine","zh":"发动机","pos":"n.","example":"The engine makes a strange noise.","exampleZh":"发动机有奇怪的声音。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1857},{"en":"english","zh":"英语","pos":"n.","example":"I am learning English.","exampleZh":"我在学英语。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":971},{"en":"enjoy","zh":"享受","pos":"v.","example":"I enjoy reading books.","exampleZh":"我喜欢看书。","forms":{"infinitive":"enjoy","present":"enjoys","ing":"enjoying","past":"enjoyed","pastParticiple":"enjoyed"},"defaultObject":"the day","tags":["school","emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":891},{"en":"enjoying","zh":"享受（进行时）","pos":"v.","example":"He is enjoying his holiday.","exampleZh":"他正在享受假期。","forms":{"infinitive":"enjoying","present":"enjoyings","ing":"enjoyinging","past":"enjoyinged","pastParticiple":"enjoyinged"},"defaultObject":"something","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2977},{"en":"enough","zh":"足够的","pos":"adj.","example":"I have enough money.","exampleZh":"我有足够的钱。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":229},{"en":"enter","zh":"进入","pos":"v.","example":"Please knock before you enter.","exampleZh":"进来前请敲门。","forms":{"infinitive":"enter","present":"enters","ing":"enterring","past":"enterred","pastParticiple":"enterred"},"defaultObject":"the room","tags":["daily"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1945},{"en":"entire","zh":"整个的","pos":"adj.","example":"She read the entire book in a day.","exampleZh":"她一天读完了整本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":913},{"en":"equipment","zh":"设备","pos":"n.","example":"The kitchen equipment is new.","exampleZh":"厨房设备是新的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2214},{"en":"escape","zh":"逃跑","pos":"v.","example":"The bird escaped from its cage.","exampleZh":"鸟从笼子里逃了出来。","forms":{"infinitive":"escape","present":"escapes","ing":"escaping","past":"escaped","pastParticiple":"escaped"},"defaultObject":"the heat","tags":["nature"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1450},{"en":"especially","zh":"尤其","pos":"adv.","example":"I love fruit, especially apples.","exampleZh":"我爱吃水果，尤其是苹果。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1059},{"en":"estate","zh":"房产；庄园","pos":"n.","example":"The estate has a large garden.","exampleZh":"这处庄园有个大花园。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2549},{"en":"eve","zh":"前夕","pos":"n.","example":"Christmas Eve is on December 24th.","exampleZh":"平安夜在十二月二十四日。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2026},{"en":"even","zh":"甚至","pos":"adv.","example":"He did not even say goodbye.","exampleZh":"他甚至没说再见。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":144},{"en":"evening","zh":"晚上","pos":"n.","example":"We watch TV in the evening.","exampleZh":"我们晚上看电视。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":666},{"en":"event","zh":"事件；活动","pos":"n.","example":"The event starts at noon.","exampleZh":"活动中午开始。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2136},{"en":"eventually","zh":"最终","pos":"adv.","example":"Eventually they found the key.","exampleZh":"他们最终找到了钥匙。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2285},{"en":"ever","zh":"曾经","pos":"adv.","example":"Have you ever been to the sea?","exampleZh":"你曾去过海边吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":174},{"en":"every","zh":"每一个","pos":"det.","example":"She calls her mother every night.","exampleZh":"她每晚都给妈妈打电话。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":210},{"en":"everybody","zh":"每个人","pos":"pron.","example":"Everybody was very kind to me.","exampleZh":"每个人对我都很好。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":309},{"en":"everyone","zh":"每个人","pos":"pron.","example":"Everyone is waiting for you.","exampleZh":"大家都在等你。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":410},{"en":"everything","zh":"一切","pos":"pron.","example":"Everything is ready.","exampleZh":"一切准备就绪。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":186},{"en":"everywhere","zh":"到处","pos":"adv.","example":"There are flowers everywhere.","exampleZh":"到处都是花。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1281},{"en":"exact","zh":"精确的","pos":"adj.","example":"What is the exact time?","exampleZh":"确切时间是几点？","forms":null,"defaultObject":null,"tags":["daily","general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2419},{"en":"exactly","zh":"确切地","pos":"adv.","example":"That is exactly what I meant.","exampleZh":"那正是我的意思。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":403},{"en":"example","zh":"例子","pos":"n.","example":"Can you give me an example?","exampleZh":"你能给我举一个例子吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1935},{"en":"excellent","zh":"优秀的","pos":"adj.","example":"Her English is excellent.","exampleZh":"她英语很棒。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1261},{"en":"except","zh":"除……之外","pos":"prep.","example":"Everyone came except Tom.","exampleZh":"除了汤姆，大家都来了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":698},{"en":"exchange","zh":"交换","pos":"v.","example":"Can I exchange this for a bigger one?","exampleZh":"我能换个大点的吗？","forms":{"infinitive":"exchange","present":"exchanges","ing":"exchanging","past":"exchanged","pastParticiple":"exchanged"},"defaultObject":"it","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2627},{"en":"excited","zh":"兴奋的","pos":"adj.","example":"I am excited about the trip.","exampleZh":"我对这次旅行很兴奋。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1342},{"en":"exciting","zh":"令人兴奋的","pos":"adj.","example":"The game was exciting.","exampleZh":"比赛很刺激。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1726},{"en":"excuse","zh":"借口；原谅","pos":"n.","example":"May I be excused?","exampleZh":"我可以离开一下吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":295},{"en":"exercise","zh":"锻炼；练习","pos":"n.","example":"Exercise is good for your health.","exampleZh":"锻炼对健康有益。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2905},{"en":"exist","zh":"存在","pos":"v.","example":"Does life exist on Mars?","exampleZh":"火星上有生命存在吗？","forms":{"infinitive":"exist","present":"exists","ing":"existing","past":"existed","pastParticiple":"existed"},"defaultObject":"something","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1984},{"en":"expect","zh":"期望","pos":"v.","example":"I expect to see you tomorrow.","exampleZh":"我期待明天见到你。","forms":{"infinitive":"expect","present":"expects","ing":"expecting","past":"expected","pastParticiple":"expected"},"defaultObject":"something","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":735},{"en":"expensive","zh":"昂贵的","pos":"adj.","example":"This shirt is too expensive.","exampleZh":"这件衬衫太贵了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2040},{"en":"experience","zh":"经验；经历","pos":"n.","example":"She has ten years of experience.","exampleZh":"她有十年经验。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1139},{"en":"expert","zh":"专家","pos":"n.","example":"She is an expert on birds.","exampleZh":"她是研究鸟类的专家。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2454},{"en":"explain","zh":"解释","pos":"v.","example":"Can you explain this word?","exampleZh":"你能解释一下这个词吗？","forms":{"infinitive":"explain","present":"explains","ing":"explaining","past":"explained","pastParticiple":"explained"},"defaultObject":"the reason","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":700},{"en":"explanation","zh":"解释","pos":"n.","example":"His explanation made sense.","exampleZh":"他的解释说得通。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2640},{"en":"express","zh":"表达；快递","pos":"v.","example":"Can you express your idea clearly?","exampleZh":"你能清楚地表达你的想法吗？","forms":{"infinitive":"express","present":"expresses","ing":"expressing","past":"expressed","pastParticiple":"expressed"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2883},{"en":"extra","zh":"额外的","pos":"adj.","example":"Do you need an extra chair?","exampleZh":"你需要多一把椅子吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1163},{"en":"extremely","zh":"极其","pos":"adv.","example":"It was extremely cold last night.","exampleZh":"昨晚极冷。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2338},{"en":"eye","zh":"眼睛","pos":"n.","example":"She has beautiful eyes.","exampleZh":"她有美丽的眼睛。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":697},{"en":"fabulous","zh":"极好的","pos":"adj.","example":"The party was fabulous.","exampleZh":"派对棒极了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2604},{"en":"face","zh":"脸","pos":"n.","example":"Wash your face before bed.","exampleZh":"睡前洗脸。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":357},{"en":"fact","zh":"事实","pos":"n.","example":"The fact is, we are late.","exampleZh":"事实是，我们迟到了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":532},{"en":"fail","zh":"失败","pos":"v.","example":"The plan failed in the end.","exampleZh":"计划最终失败了。","forms":{"infinitive":"fail","present":"fails","ing":"failing","past":"failed","pastParticiple":"failed"},"defaultObject":"the test","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2275},{"en":"failure","zh":"失败","pos":"n.","example":"Failure taught him a lot.","exampleZh":"失败教会了他很多。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2643},{"en":"fair","zh":"公平的；集市","pos":"adj.","example":"The result is fair.","exampleZh":"结果很公平。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":793},{"en":"faith","zh":"信心；信仰","pos":"n.","example":"She has faith in her students.","exampleZh":"她对学生有信心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1390},{"en":"faithful","zh":"忠实的","pos":"adj.","example":"He is a faithful friend.","exampleZh":"他是个忠实的朋友。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":4659},{"en":"fake","zh":"假的","pos":"adj.","example":"The bag turned out to be fake.","exampleZh":"那包结果是假的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1663},{"en":"fall","zh":"落下；秋天","pos":"v.","example":"Leaves fall in autumn.","exampleZh":"秋天树叶落下。","forms":{"infinitive":"fall","present":"falls","ing":"falling","past":"fell","pastParticiple":"fallen"},"defaultObject":"something","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":674},{"en":"false","zh":"错误的；假的","pos":"adj.","example":"This news is false.","exampleZh":"这条消息是假的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2546},{"en":"familiar","zh":"熟悉的","pos":"adj.","example":"Her face looks familiar.","exampleZh":"她的脸看着眼熟。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1732},{"en":"family","zh":"家庭","pos":"n.","example":"I have a happy family.","exampleZh":"我有一个幸福的家庭。","forms":null,"defaultObject":null,"tags":["emotion","place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":300},{"en":"famous","zh":"著名的","pos":"adj.","example":"He is a famous writer.","exampleZh":"他是一位著名作家。","forms":null,"defaultObject":null,"tags":["place","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1429},{"en":"fan","zh":"风扇；粉丝","pos":"n.","example":"I am a fan of basketball.","exampleZh":"我是篮球迷。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1709},{"en":"fancy","zh":"花哨的；想要","pos":"adj.","example":"We went to a fancy restaurant.","exampleZh":"我们去了家高档餐厅。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1725},{"en":"fantastic","zh":"极好的","pos":"adj.","example":"The food was fantastic.","exampleZh":"食物棒极了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1558},{"en":"far","zh":"远的","pos":"adv.","example":"The school is not far from my home.","exampleZh":"学校离我家不远。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":448},{"en":"farm","zh":"农场","pos":"n.","example":"We visited a farm last weekend.","exampleZh":"我们上周末参观了一个农场。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1930},{"en":"fashion","zh":"时尚","pos":"n.","example":"She works in fashion.","exampleZh":"她做时尚行业。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2777},{"en":"fast","zh":"快的","pos":"adj.","example":"He runs very fast.","exampleZh":"他跑得很快。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":617},{"en":"fat","zh":"胖的；脂肪","pos":"adj.","example":"The cat is very fat.","exampleZh":"这只猫很肥。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":918},{"en":"fate","zh":"命运","pos":"n.","example":"No one can escape fate.","exampleZh":"没人能逃脱命运。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2101},{"en":"father","zh":"父亲","pos":"n.","example":"My father is a teacher.","exampleZh":"我爸爸是一名老师。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":208},{"en":"fault","zh":"错误；过失","pos":"n.","example":"It is not my fault.","exampleZh":"这不是我的错。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":731},{"en":"favor","zh":"帮忙","pos":"n.","example":"Can I ask you a favor?","exampleZh":"能请你帮个忙吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1004},{"en":"favorite","zh":"最喜欢的","pos":"adj.","example":"What is your favorite color?","exampleZh":"你最喜欢什么颜色？","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1158},{"en":"favour","zh":"恩惠","pos":"n.","example":"Could you do me a favour?","exampleZh":"能帮我个忙吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2807},{"en":"fear","zh":"害怕；恐惧","pos":"n.","example":"She has a fear of dogs.","exampleZh":"她怕狗。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1041},{"en":"federal","zh":"联邦的","pos":"adj.","example":"It is a federal holiday.","exampleZh":"这是联邦假日。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2389},{"en":"feed","zh":"喂养","pos":"v.","example":"I feed the cat every morning.","exampleZh":"我每天早上喂猫。","forms":{"infinitive":"feed","present":"feeds","ing":"feeding","past":"fed","pastParticiple":"fed"},"defaultObject":"something","tags":["nature","daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1496},{"en":"feel","zh":"感觉","pos":"v.","example":"I feel much better today.","exampleZh":"我今天感觉好多了。","forms":{"infinitive":"feel","present":"feels","ing":"feeling","past":"felt","pastParticiple":"felt"},"defaultObject":"better","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":192},{"en":"fella","zh":"家伙","pos":"n.","example":"That fella runs the shop.","exampleZh":"那家伙经营这家店。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1776},{"en":"fellow","zh":"家伙；同伴","pos":"n.","example":"The old fellow next door is kind.","exampleZh":"隔壁那位老先生人很好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1176},{"en":"felt","zh":"感觉（过去式）","pos":"v.","example":"I felt very happy yesterday.","exampleZh":"我昨天感到很开心。","forms":{"infinitive":"felt","present":"felts","ing":"felting","past":"felted","pastParticiple":"felted"},"defaultObject":"something","tags":["emotion","nature","daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":669},{"en":"female","zh":"女性的","pos":"adj.","example":"The female doctor spoke to us.","exampleZh":"那位女医生跟我们谈了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1870},{"en":"fever","zh":"发烧","pos":"n.","example":"The child has a high fever.","exampleZh":"孩子发高烧。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2654},{"en":"few","zh":"很少的","pos":"adj.","example":"Few people know this secret.","exampleZh":"很少人知道这个秘密。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":345},{"en":"field","zh":"田地；领域","pos":"n.","example":"The farmers are working in the field.","exampleZh":"农民们正在田里干活。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1015},{"en":"fifteen","zh":"十五","pos":"num.","example":"I have fifteen books.","exampleZh":"我有十五本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2919},{"en":"fifth","zh":"第五","pos":"num.","example":"She came fifth in the race.","exampleZh":"她在赛跑中得了第五名。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2725},{"en":"fifty","zh":"五十","pos":"num.","example":"My mother is fifty years old.","exampleZh":"我妈妈五十岁了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2773},{"en":"fight","zh":"打架；战斗","pos":"v.","example":"Do not fight with your brother.","exampleZh":"别和你弟弟打架。","forms":{"infinitive":"fight","present":"fights","ing":"fighting","past":"fought","pastParticiple":"fought"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":480},{"en":"figure","zh":"想出；数字","pos":"v.","example":"I cannot figure out this problem.","exampleZh":"我想不通这个问题。","forms":{"infinitive":"figure","present":"figures","ing":"figuring","past":"figured","pastParticiple":"figured"},"defaultObject":"it out","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":636},{"en":"file","zh":"文件","pos":"n.","example":"The file is on my computer.","exampleZh":"文件在我电脑上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1454},{"en":"fill","zh":"填满","pos":"v.","example":"Please fill the glass with water.","exampleZh":"请把杯子装满水。","forms":{"infinitive":"fill","present":"fills","ing":"filling","past":"filled","pastParticiple":"filled"},"defaultObject":"something","tags":["nature"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1457},{"en":"film","zh":"电影；胶卷","pos":"n.","example":"We watched a film last night.","exampleZh":"我们昨晚看了一部电影。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1079},{"en":"final","zh":"最后的","pos":"adj.","example":"This is my final answer.","exampleZh":"这是我最终的答案。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1322},{"en":"finally","zh":"最终","pos":"adv.","example":"We finally found the place.","exampleZh":"我们终于找到了那地方。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":677},{"en":"find","zh":"找到","pos":"v.","example":"I cannot find my keys.","exampleZh":"我找不到我的钥匙。","forms":{"infinitive":"find","present":"finds","ing":"finding","past":"found","pastParticiple":"found"},"defaultObject":"the key","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":151},{"en":"fine","zh":"好的；健康的","pos":"adj.","example":"I am fine, thank you.","exampleZh":"我很好，谢谢。","forms":null,"defaultObject":null,"tags":["general","emotion"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":197},{"en":"finger","zh":"手指","pos":"n.","example":"I cut my finger on the glass.","exampleZh":"我被玻璃割到手指了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1655},{"en":"finish","zh":"完成","pos":"v.","example":"Please finish your homework.","exampleZh":"请完成你的作业。","forms":{"infinitive":"finish","present":"finishes","ing":"finishing","past":"finished","pastParticiple":"finished"},"defaultObject":"my work","tags":["school","place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":765},{"en":"fire","zh":"火；解雇","pos":"n.","example":"Fire is very dangerous.","exampleZh":"火很危险。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":459},{"en":"fired","zh":"被解雇的","pos":"v.","example":"He was fired from his job.","exampleZh":"他被解雇了。","forms":{"infinitive":"fired","present":"fireds","ing":"firedding","past":"firedded","pastParticiple":"firedded"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1122},{"en":"firm","zh":"公司；坚定的","pos":"n.","example":"She joined a law firm.","exampleZh":"她加入了一家律所。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1703},{"en":"first","zh":"第一","pos":"num.","example":"This is my first day at school.","exampleZh":"这是我在学校的第一天。","forms":null,"defaultObject":null,"tags":["school","nature","place","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":150},{"en":"fish","zh":"鱼","pos":"n.","example":"I like eating fish.","exampleZh":"我喜欢吃鱼。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":885},{"en":"fishing","zh":"钓鱼","pos":"n.","example":"We went fishing yesterday.","exampleZh":"我们昨天去钓鱼了。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2346},{"en":"fit","zh":"适合；健康的","pos":"adj.","example":"This shirt does not fit me.","exampleZh":"这件衬衫不合我身。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1184},{"en":"five","zh":"五","pos":"num.","example":"I have five apples.","exampleZh":"我有五个苹果。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":360},{"en":"fix","zh":"修理","pos":"v.","example":"Can you fix my phone?","exampleZh":"你能修好我的手机吗？","forms":{"infinitive":"fix","present":"fixes","ing":"fixing","past":"fixed","pastParticiple":"fixed"},"defaultObject":"the bike","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":850},{"en":"fixed","zh":"固定的","pos":"adj.","example":"The time is fixed.","exampleZh":"时间是固定的。","forms":null,"defaultObject":null,"tags":["daily","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1838},{"en":"flag","zh":"旗帜","pos":"n.","example":"The flag is flying in the wind.","exampleZh":"国旗在风中飘扬。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2931},{"en":"flat","zh":"平的；公寓","pos":"adj.","example":"The land here is flat.","exampleZh":"这里地势平坦。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2144},{"en":"flesh","zh":"肉体","pos":"n.","example":"The cut went deep into the flesh.","exampleZh":"伤口很深。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2459},{"en":"flight","zh":"航班；飞行","pos":"n.","example":"Our flight leaves at ten.","exampleZh":"我们的航班十点起飞。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1152},{"en":"floor","zh":"地板；楼层","pos":"n.","example":"Please sweep the floor.","exampleZh":"请扫地。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":757},{"en":"flower","zh":"花","pos":"n.","example":"The flowers in the garden are beautiful.","exampleZh":"花园里的花很美。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2411},{"en":"fly","zh":"飞；苍蝇","pos":"v.","example":"Birds can fly high in the sky.","exampleZh":"鸟儿能在天空高飞。","forms":{"infinitive":"fly","present":"flies","ing":"flying","past":"flew","pastParticiple":"flown"},"defaultObject":"a kite","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":872},{"en":"focus","zh":"集中","pos":"v.","example":"I cannot focus with this noise.","exampleZh":"这么吵我没法集中。","forms":{"infinitive":"focus","present":"focuses","ing":"focussing","past":"focussed","pastParticiple":"focussed"},"defaultObject":"on it","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1961},{"en":"folks","zh":"家人；各位","pos":"n.","example":"My folks are coming this weekend.","exampleZh":"我家人这周末来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":950},{"en":"follow","zh":"跟随","pos":"v.","example":"Please follow me.","exampleZh":"请跟着我。","forms":{"infinitive":"follow","present":"follows","ing":"following","past":"followed","pastParticiple":"followed"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":654},{"en":"food","zh":"食物","pos":"n.","example":"The food here is delicious.","exampleZh":"这里的食物很美味。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":573},{"en":"foolish","zh":"愚蠢的","pos":"adj.","example":"It was a foolish idea.","exampleZh":"那是个愚蠢的想法。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2928},{"en":"foot","zh":"脚；英尺","pos":"n.","example":"My foot hurts.","exampleZh":"我的脚疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1082},{"en":"football","zh":"足球","pos":"n.","example":"I like playing football.","exampleZh":"我喜欢踢足球。","forms":null,"defaultObject":null,"tags":["emotion","body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1623},{"en":"for","zh":"为了","pos":"prep.","example":"This gift is for you.","exampleZh":"这份礼物是给你的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":20},{"en":"force","zh":"力量；强迫","pos":"n.","example":"We must use force to open it.","exampleZh":"我们必须用力才能打开它。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1007},{"en":"foreign","zh":"外国的","pos":"adj.","example":"She speaks two foreign languages.","exampleZh":"她会两门外语。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2447},{"en":"forest","zh":"森林","pos":"n.","example":"We walked through the forest.","exampleZh":"我们穿过了森林。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2761},{"en":"forever","zh":"永远","pos":"adv.","example":"This will not last forever.","exampleZh":"这不会永远持续下去。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":835},{"en":"forget","zh":"忘记","pos":"v.","example":"I forgot to bring my book.","exampleZh":"我忘记带书了。","forms":{"infinitive":"forget","present":"forgets","ing":"forgetting","past":"forgot","pastParticiple":"forgotten"},"defaultObject":"the name","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":371},{"en":"forgive","zh":"原谅","pos":"v.","example":"She forgave him after a week.","exampleZh":"一周后她原谅了他。","forms":{"infinitive":"forgive","present":"forgives","ing":"forgiving","past":"forgived","pastParticiple":"forgived"},"defaultObject":"him","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":943},{"en":"form","zh":"表格","pos":"n.","example":"Please fill in this form.","exampleZh":"请填这张表。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1484},{"en":"fortune","zh":"运气；财富","pos":"n.","example":"He made a fortune in business.","exampleZh":"他做生意发了财。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1944},{"en":"forward","zh":"向前","pos":"adv.","example":"She moved forward slowly.","exampleZh":"她慢慢向前走。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":987},{"en":"four","zh":"四","pos":"num.","example":"I have four lessons today.","exampleZh":"我今天有四节课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":388},{"en":"fourth","zh":"第四","pos":"num.","example":"My birthday is on the fourth of May.","exampleZh":"我的生日在五月四日。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2133},{"en":"fox","zh":"狐狸","pos":"n.","example":"The fox is very clever.","exampleZh":"狐狸很聪明。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2494},{"en":"frankly","zh":"坦白地说","pos":"adv.","example":"Frankly, I do not like it.","exampleZh":"坦白说，我不喜欢。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2696},{"en":"freak","zh":"怪人；吓坏","pos":"v.","example":"Do not freak out, it is fine.","exampleZh":"别慌，没事的。","forms":{"infinitive":"freak","present":"freaks","ing":"freaking","past":"freaked","pastParticiple":"freaked"},"defaultObject":"out","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1650},{"en":"free","zh":"免费的；自由的","pos":"adj.","example":"Are you free tomorrow evening?","exampleZh":"你明晚有空吗？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":525},{"en":"freedom","zh":"自由","pos":"n.","example":"She values her freedom.","exampleZh":"她珍视自己的自由。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1799},{"en":"freeze","zh":"冻结","pos":"v.","example":"The water froze last night.","exampleZh":"昨晚水结冰了。","forms":{"infinitive":"freeze","present":"freezes","ing":"freezing","past":"froze","pastParticiple":"frozen"},"defaultObject":"the water","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1844},{"en":"fresh","zh":"新鲜的","pos":"adj.","example":"The air in the mountains is fresh.","exampleZh":"山里的空气很新鲜。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1226},{"en":"friday","zh":"星期五","pos":"n.","example":"We have no school on Friday.","exampleZh":"我们周五不上课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1363},{"en":"friend","zh":"朋友","pos":"n.","example":"She is my best friend.","exampleZh":"她是我最好的朋友。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":272},{"en":"friendly","zh":"友好的","pos":"adj.","example":"Our teacher is very friendly.","exampleZh":"我们的老师很友好。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2165},{"en":"friendship","zh":"友谊","pos":"n.","example":"Their friendship lasted forty years.","exampleZh":"他们的友谊持续了四十年。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2406},{"en":"frightened","zh":"受惊的","pos":"adj.","example":"The frightened bird flew away.","exampleZh":"受惊的鸟飞走了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2372},{"en":"from","zh":"从","pos":"prep.","example":"I am from China.","exampleZh":"我来自中国。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":76},{"en":"front","zh":"前面","pos":"n.","example":"Please come to the front of the class.","exampleZh":"请到课堂前面来。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":518},{"en":"fruit","zh":"水果","pos":"n.","example":"Fruit is good for your health.","exampleZh":"水果对健康有益。","forms":null,"defaultObject":null,"tags":["food","nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2486},{"en":"fuel","zh":"燃料","pos":"n.","example":"The car needs more fuel.","exampleZh":"这辆车需要更多燃料。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2963},{"en":"full","zh":"满的","pos":"adj.","example":"The bus is full.","exampleZh":"公交车满了。","forms":null,"defaultObject":null,"tags":["transport","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":546},{"en":"fully","zh":"完全地","pos":"adv.","example":"I fully understand.","exampleZh":"我完全理解。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2956},{"en":"fun","zh":"乐趣","pos":"n.","example":"We had a lot of fun at the party.","exampleZh":"我们在聚会上玩得很开心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":424},{"en":"funeral","zh":"葬礼","pos":"n.","example":"Many people came to the funeral.","exampleZh":"很多人来参加葬礼。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1791},{"en":"funny","zh":"好笑的","pos":"adj.","example":"His story was really funny.","exampleZh":"他的故事真好笑。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":453},{"en":"further","zh":"更远；进一步","pos":"adv.","example":"Let us not talk about it further.","exampleZh":"这事我们别再往下谈了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1260},{"en":"future","zh":"未来","pos":"n.","example":"I want to be a doctor in the future.","exampleZh":"我将来想成为一名医生。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":738},{"en":"game","zh":"游戏","pos":"n.","example":"We play games after school.","exampleZh":"我们放学后玩游戏。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":428},{"en":"garage","zh":"车库","pos":"n.","example":"The car is in the garage.","exampleZh":"车在车库里。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2083},{"en":"garbage","zh":"垃圾","pos":"n.","example":"The garbage truck comes on Monday.","exampleZh":"垃圾车周一来。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2160},{"en":"garden","zh":"花园","pos":"n.","example":"They grow tomatoes in the garden.","exampleZh":"他们在花园里种西红柿。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2125},{"en":"gas","zh":"汽油；气体","pos":"n.","example":"We need to buy gas.","exampleZh":"我们得加油了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1051},{"en":"gate","zh":"大门","pos":"n.","example":"Please close the gate.","exampleZh":"请关上大门。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1850},{"en":"genius","zh":"天才","pos":"n.","example":"He is a genius at math.","exampleZh":"他是数学天才。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1727},{"en":"gentleman","zh":"先生；绅士","pos":"n.","example":"A gentleman held the door for me.","exampleZh":"一位先生为我扶着门。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1513},{"en":"gentlemen","zh":"先生们","pos":"n.","example":"Good evening, ladies and gentlemen.","exampleZh":"女士们先生们，晚上好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":574},{"en":"get","zh":"得到","pos":"v.","example":"Please get me a glass of water.","exampleZh":"请给我拿一杯水。","forms":{"infinitive":"get","present":"gets","ing":"getting","past":"got","pastParticiple":"gotten"},"defaultObject":"a ticket","tags":["nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":38},{"en":"giant","zh":"巨大的","pos":"adj.","example":"A giant tree fell in the storm.","exampleZh":"一棵大树在暴风雨中倒了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2092},{"en":"gift","zh":"礼物","pos":"n.","example":"She gave me a gift.","exampleZh":"她给了我一份礼物。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1088},{"en":"girl","zh":"女孩","pos":"n.","example":"The girl is reading a book.","exampleZh":"女孩在看书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":206},{"en":"girlfriend","zh":"女朋友","pos":"n.","example":"His girlfriend is a nurse.","exampleZh":"他女朋友是护士。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":949},{"en":"give","zh":"给","pos":"v.","example":"Please give me the pen.","exampleZh":"请把笔给我。","forms":{"infinitive":"give","present":"gives","ing":"giving","past":"gave","pastParticiple":"given"},"defaultObject":"a hand","tags":["object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":121},{"en":"glad","zh":"高兴的","pos":"adj.","example":"I am glad to see you.","exampleZh":"见到你我很高兴。","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":538},{"en":"glass","zh":"玻璃；杯子","pos":"n.","example":"Please pass me a glass.","exampleZh":"请递给我一个玻璃杯。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1136},{"en":"glasses","zh":"眼镜","pos":"n.","example":"I need glasses to read.","exampleZh":"我需要眼镜才能看书。","forms":null,"defaultObject":null,"tags":["school","body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1796},{"en":"glory","zh":"荣耀","pos":"n.","example":"The team enjoyed its moment of glory.","exampleZh":"球队享受着荣耀时刻。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2507},{"en":"go","zh":"去","pos":"v.","example":"Let us go to the park.","exampleZh":"我们去公园吧。","forms":{"infinitive":"go","present":"goes","ing":"going","past":"went","pastParticiple":"gone"},"defaultObject":"something","tags":["place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":48},{"en":"god","zh":"上帝","pos":"n.","example":"Many people believe in God.","exampleZh":"很多人相信上帝。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":143},{"en":"goes","zh":"去（第三人称）","pos":"v.","example":"The bus goes at eight.","exampleZh":"公交车八点开。","forms":{"infinitive":"goes","present":"goeses","ing":"goesing","past":"goesed","pastParticiple":"goesed"},"defaultObject":"something","tags":["transport"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":454},{"en":"gold","zh":"金子","pos":"n.","example":"The ring is made of gold.","exampleZh":"这戒指是金的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":924},{"en":"golden","zh":"金色的","pos":"adj.","example":"The field looked golden at sunset.","exampleZh":"日落时田野金黄一片。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2370},{"en":"golf","zh":"高尔夫","pos":"n.","example":"He plays golf on Sundays.","exampleZh":"他周日打高尔夫。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2208},{"en":"good","zh":"好的","pos":"adj.","example":"You are a good student.","exampleZh":"你是一个好学生。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":66},{"en":"goodbye","zh":"再见","pos":"int.","example":"We said goodbye at the door.","exampleZh":"我们在门口道别。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":682},{"en":"goodness","zh":"天啊；善良","pos":"int.","example":"Goodness, look at the time!","exampleZh":"天啊，看看几点了！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1828},{"en":"gorgeous","zh":"华丽的；极美的","pos":"adj.","example":"The view was gorgeous.","exampleZh":"景色美极了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2309},{"en":"got","zh":"得到（过去式）","pos":"v.","example":"I got an A in the exam.","exampleZh":"我考试得了A。","forms":{"infinitive":"got","present":"gots","ing":"gotting","past":"gotted","pastParticiple":"gotted"},"defaultObject":"something","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":54},{"en":"government","zh":"政府","pos":"n.","example":"The government changed the rule.","exampleZh":"政府改了规定。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1080},{"en":"governor","zh":"州长","pos":"n.","example":"The governor visited our town.","exampleZh":"州长来我们镇视察。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2105},{"en":"grab","zh":"抓住","pos":"v.","example":"Grab your coat, it is cold.","exampleZh":"拿上外套，外面冷。","forms":{"infinitive":"grab","present":"grabs","ing":"grabbing","past":"grabbed","pastParticiple":"grabbed"},"defaultObject":"your coat","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1001},{"en":"grace","zh":"优雅","pos":"n.","example":"She moved with grace.","exampleZh":"她举止优雅。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1499},{"en":"grade","zh":"年级；等级","pos":"n.","example":"I am in the fifth grade.","exampleZh":"我上五年级。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1966},{"en":"grand","zh":"宏伟的","pos":"adj.","example":"The building looks grand.","exampleZh":"这栋建筑看起来很宏伟。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1107},{"en":"grandfather","zh":"祖父","pos":"n.","example":"My grandfather tells good stories.","exampleZh":"我爷爷很会讲故事。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2292},{"en":"grandma","zh":"奶奶/外婆","pos":"n.","example":"Grandma makes delicious cakes.","exampleZh":"奶奶做美味的蛋糕。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1410},{"en":"grandmother","zh":"祖母","pos":"n.","example":"My grandmother is eighty years old.","exampleZh":"我奶奶八十岁了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2048},{"en":"grandpa","zh":"爷爷/外公","pos":"n.","example":"Grandpa takes a walk every day.","exampleZh":"爷爷每天散步。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1822},{"en":"grateful","zh":"感激的","pos":"adj.","example":"I am grateful for your help.","exampleZh":"我很感激你的帮助。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2122},{"en":"grave","zh":"坟墓","pos":"n.","example":"They visit the grave every spring.","exampleZh":"他们每年春天去扫墓。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2140},{"en":"gray","zh":"灰色的","pos":"adj.","example":"The sky turned gray.","exampleZh":"天变灰了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2547},{"en":"great","zh":"伟大的；极好的","pos":"adj.","example":"China is a great country.","exampleZh":"中国是一个伟大的国家。","forms":null,"defaultObject":null,"tags":["food","place","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":154},{"en":"green","zh":"绿色的","pos":"adj.","example":"The tree leaves are green.","exampleZh":"树叶是绿色的。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":984},{"en":"grew","zh":"生长（过去式）","pos":"v.","example":"The boy grew taller this year.","exampleZh":"男孩今年长高了。","forms":{"infinitive":"grew","present":"grews","ing":"grewing","past":"grewed","pastParticiple":"grewed"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1965},{"en":"ground","zh":"地面","pos":"n.","example":"The ground was wet after the rain.","exampleZh":"雨后地面湿了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":983},{"en":"group","zh":"组；群","pos":"n.","example":"A group of students is playing.","exampleZh":"一群学生在玩耍。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":973},{"en":"grow","zh":"生长","pos":"v.","example":"Plants grow fast in spring.","exampleZh":"植物在春天长得很快。","forms":{"infinitive":"grow","present":"grows","ing":"growing","past":"grew","pastParticiple":"grown"},"defaultObject":"something","tags":["nature","object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1156},{"en":"guarantee","zh":"保证","pos":"v.","example":"I cannot guarantee the result.","exampleZh":"我不能保证结果。","forms":{"infinitive":"guarantee","present":"guarantees","ing":"guaranteeing","past":"guaranteed","pastParticiple":"guaranteed"},"defaultObject":"the result","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2462},{"en":"guard","zh":"守卫","pos":"n.","example":"A guard stands at the gate.","exampleZh":"门口站着一名保安。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1180},{"en":"guess","zh":"猜测","pos":"v.","example":"Can you guess my age?","exampleZh":"你能猜出我的年龄吗？","forms":{"infinitive":"guess","present":"guesses","ing":"guessing","past":"guessed","pastParticiple":"guessed"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":253},{"en":"guest","zh":"客人","pos":"n.","example":"We have two guests tonight.","exampleZh":"今晚我们有两位客人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1555},{"en":"guide","zh":"指导；导游","pos":"n.","example":"We need a guide to visit the museum.","exampleZh":"我们需要导游来参观博物馆。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2893},{"en":"guy","zh":"家伙；男人","pos":"n.","example":"That guy works in my office.","exampleZh":"那家伙在我办公室工作。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":164},{"en":"gym","zh":"体育馆","pos":"n.","example":"We have gym class on Monday.","exampleZh":"我们周一有体育课。","forms":null,"defaultObject":null,"tags":["school","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2858},{"en":"had","zh":"有（过去式）","pos":"v.","example":"I had a cat before.","exampleZh":"我以前养过一只猫。","forms":{"infinitive":"had","present":"hads","ing":"hadding","past":"hadded","pastParticiple":"hadded"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":97},{"en":"hair","zh":"头发","pos":"n.","example":"She cut her hair short.","exampleZh":"她把头发剪短了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":576},{"en":"half","zh":"一半","pos":"n.","example":"Half of the students are boys.","exampleZh":"一半的学生是男孩。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":483},{"en":"hall","zh":"大厅","pos":"n.","example":"Wait for me in the hall.","exampleZh":"在大厅等我。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1279},{"en":"hand","zh":"手","pos":"n.","example":"Please raise your hand.","exampleZh":"请举手。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":368},{"en":"handle","zh":"处理","pos":"v.","example":"I can handle this myself.","exampleZh":"这事我自己能处理。","forms":{"infinitive":"handle","present":"handles","ing":"handling","past":"handled","pastParticiple":"handled"},"defaultObject":"the problem","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":714},{"en":"handsome","zh":"英俊的","pos":"adj.","example":"Her husband is very handsome.","exampleZh":"她丈夫很英俊。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1804},{"en":"hang","zh":"挂","pos":"v.","example":"Hang your coat behind the door.","exampleZh":"把外套挂在门后。","forms":{"infinitive":"hang","present":"hangs","ing":"hanging","past":"hanged","pastParticiple":"hanged"},"defaultObject":"the coat","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":589},{"en":"happen","zh":"发生","pos":"v.","example":"What happened to your hand?","exampleZh":"你的手怎么了？","forms":{"infinitive":"happen","present":"happens","ing":"happenning","past":"happenned","pastParticiple":"happenned"},"defaultObject":"today","tags":["body"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":391},{"en":"happiness","zh":"幸福","pos":"n.","example":"Money cannot buy happiness.","exampleZh":"钱买不到幸福。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2281},{"en":"happy","zh":"开心的","pos":"adj.","example":"The news made her very happy.","exampleZh":"这消息让她很开心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":320},{"en":"hard","zh":"困难的；硬的","pos":"adj.","example":"The exam is hard.","exampleZh":"考试很难。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":338},{"en":"harm","zh":"伤害","pos":"v.","example":"Too much sugar can harm your teeth.","exampleZh":"糖吃太多会伤牙。","forms":{"infinitive":"harm","present":"harms","ing":"harming","past":"harmed","pastParticiple":"harmed"},"defaultObject":"your health","tags":["body"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1862},{"en":"hat","zh":"帽子","pos":"n.","example":"She wears a red hat.","exampleZh":"她戴着一顶红帽子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1092},{"en":"hate","zh":"讨厌","pos":"v.","example":"I hate getting up early.","exampleZh":"我讨厌早起。","forms":{"infinitive":"hate","present":"hates","ing":"hating","past":"hated","pastParticiple":"hated"},"defaultObject":"noise","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":461},{"en":"have","zh":"有","pos":"v.","example":"I have a new bicycle.","exampleZh":"我有一辆新自行车。","forms":{"infinitive":"have","present":"has","ing":"having","past":"had","pastParticiple":"had"},"defaultObject":"something","tags":["transport"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":25},{"en":"he","zh":"他","pos":"pron.","example":"He is my best friend.","exampleZh":"他是我最好的朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":18},{"en":"head","zh":"头","pos":"n.","example":"Nod your head if you agree.","exampleZh":"同意就点头。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":291},{"en":"health","zh":"健康","pos":"n.","example":"Health is more important than money.","exampleZh":"健康比金钱更重要。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1550},{"en":"healthy","zh":"健康的","pos":"adj.","example":"She eats healthy food every day.","exampleZh":"她每天吃健康的食物。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2265},{"en":"hear","zh":"听到","pos":"v.","example":"I can hear the birds singing.","exampleZh":"我能听到鸟儿在唱歌。","forms":{"infinitive":"hear","present":"hears","ing":"hearing","past":"heard","pastParticiple":"heard"},"defaultObject":"a sound","tags":["nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":207},{"en":"heart","zh":"心脏；内心","pos":"n.","example":"My heart was beating fast.","exampleZh":"我心跳得很快。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":407},{"en":"heat","zh":"热量；加热","pos":"n.","example":"The heat in summer is strong.","exampleZh":"夏天的热度很强。","forms":null,"defaultObject":null,"tags":["food","nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1553},{"en":"heaven","zh":"天堂","pos":"n.","example":"This cake tastes like heaven.","exampleZh":"这蛋糕好吃得像在天堂。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1196},{"en":"heavy","zh":"重的","pos":"adj.","example":"This box is too heavy for me.","exampleZh":"这箱子对我来说太重了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1371},{"en":"heck","zh":"究竟（委婉语）","pos":"int.","example":"What the heck is going on?","exampleZh":"到底怎么回事？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2865},{"en":"hello","zh":"你好","pos":"int.","example":"Hello! How are you today?","exampleZh":"你好！你今天好吗？","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":200},{"en":"help","zh":"帮助","pos":"v.","example":"Can you help me with my homework?","exampleZh":"你能帮我做作业吗？","forms":{"infinitive":"help","present":"helps","ing":"helping","past":"helped","pastParticiple":"helped"},"defaultObject":"my mother","tags":["school","place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":140},{"en":"her","zh":"她的","pos":"pron.","example":"This is her book.","exampleZh":"这是她的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":63},{"en":"here","zh":"这里","pos":"adv.","example":"Come here, please.","exampleZh":"请过来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":39},{"en":"hero","zh":"英雄","pos":"n.","example":"He became a hero that day.","exampleZh":"那天他成了英雄。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1319},{"en":"herself","zh":"她自己","pos":"pron.","example":"She taught herself to cook.","exampleZh":"她自学做饭。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1269},{"en":"hey","zh":"嘿","pos":"int.","example":"Hey! Wait for me!","exampleZh":"嘿！等等我！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":93},{"en":"hide","zh":"隐藏","pos":"v.","example":"The cat hides under the bed.","exampleZh":"猫躲在床底下。","forms":{"infinitive":"hide","present":"hides","ing":"hiding","past":"hid","pastParticiple":"hidden"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1025},{"en":"high","zh":"高的","pos":"adj.","example":"The mountain is very high.","exampleZh":"这座山很高。","forms":null,"defaultObject":null,"tags":["nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":491},{"en":"highway","zh":"高速公路","pos":"n.","example":"The highway was closed.","exampleZh":"高速封了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2891},{"en":"hill","zh":"小山","pos":"n.","example":"We climbed to the top of the hill.","exampleZh":"我们爬到了山顶。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1622},{"en":"him","zh":"他（宾格）","pos":"pron.","example":"I told him the news.","exampleZh":"我把消息告诉了他。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":53},{"en":"himself","zh":"他自己","pos":"pron.","example":"He fixed the bike himself.","exampleZh":"他自己修好了自行车。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["it_is_adj"],"rank":607},{"en":"hire","zh":"雇用","pos":"v.","example":"They hired a new teacher.","exampleZh":"他们雇了一名新老师。","forms":{"infinitive":"hire","present":"hires","ing":"hiring","past":"hired","pastParticiple":"hired"},"defaultObject":"something","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2206},{"en":"his","zh":"他的","pos":"pron.","example":"This is his pen.","exampleZh":"这是他的笔。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":73},{"en":"history","zh":"历史","pos":"n.","example":"He teaches history at a college.","exampleZh":"他在大学教历史。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":881},{"en":"hit","zh":"打；击中","pos":"v.","example":"Don\'t hit your brother.","exampleZh":"别打你弟弟。","forms":{"infinitive":"hit","present":"hits","ing":"hitting","past":"hit","pastParticiple":"hit"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":372},{"en":"hold","zh":"握住；举行","pos":"v.","example":"Please hold the door open.","exampleZh":"请拉住门别关。","forms":{"infinitive":"hold","present":"holds","ing":"holding","past":"held","pastParticiple":"held"},"defaultObject":"my hand","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":264},{"en":"hole","zh":"洞","pos":"n.","example":"There is a hole in my sock.","exampleZh":"我的袜子上有个洞。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1179},{"en":"holiday","zh":"假日","pos":"n.","example":"We travel during the holiday.","exampleZh":"我们假期去旅行。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2528},{"en":"home","zh":"家","pos":"n.","example":"I go home at five o\'clock.","exampleZh":"我五点回家。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":163},{"en":"homework","zh":"家庭作业","pos":"n.","example":"I do my homework after dinner.","exampleZh":"我晚饭后做作业。","forms":null,"defaultObject":null,"tags":["food","school","place","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2635},{"en":"honest","zh":"诚实的","pos":"adj.","example":"He is an honest boy.","exampleZh":"他是一个诚实的男孩。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":988},{"en":"honey","zh":"蜂蜜","pos":"n.","example":"Honey is sweet.","exampleZh":"蜂蜜是甜的。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":347},{"en":"honor","zh":"荣誉","pos":"n.","example":"It is an honor to meet you.","exampleZh":"见到你是我的荣幸。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":783},{"en":"hook","zh":"钩子","pos":"n.","example":"Hang your bag on the hook.","exampleZh":"把包挂在钩子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1609},{"en":"hop","zh":"跳","pos":"v.","example":"The bird hopped across the grass.","exampleZh":"鸟在草地上跳来跳去。","forms":{"infinitive":"hop","present":"hops","ing":"hopping","past":"hopped","pastParticiple":"hopped"},"defaultObject":"across","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2730},{"en":"hope","zh":"希望","pos":"v.","example":"I hope you feel better soon.","exampleZh":"我希望你早日好起来。","forms":{"infinitive":"hope","present":"hopes","ing":"hoping","past":"hoped","pastParticiple":"hoped"},"defaultObject":"for the best","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":329},{"en":"horn","zh":"喇叭；角","pos":"n.","example":"The driver blew his horn.","exampleZh":"司机按了喇叭。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2551},{"en":"horrible","zh":"可怕的","pos":"adj.","example":"The weather was horrible.","exampleZh":"天气糟透了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1494},{"en":"horse","zh":"马","pos":"n.","example":"The horse runs very fast.","exampleZh":"马跑得很快。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":807},{"en":"hospital","zh":"医院","pos":"n.","example":"The hospital is near the station.","exampleZh":"医院在车站附近。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":649},{"en":"hot","zh":"热的","pos":"adj.","example":"The weather is very hot in July.","exampleZh":"七月天气很热。","forms":null,"defaultObject":null,"tags":["food","nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":501},{"en":"hotel","zh":"旅馆","pos":"n.","example":"We stay at a hotel near the station.","exampleZh":"我们住在车站附近的一家酒店。","forms":null,"defaultObject":null,"tags":["transport","place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":741},{"en":"hour","zh":"小时","pos":"n.","example":"The meeting lasts one hour.","exampleZh":"会议持续一个小时。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":556},{"en":"house","zh":"房子","pos":"n.","example":"They live in a big house.","exampleZh":"他们住在一栋大房子里。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":220},{"en":"how","zh":"怎样","pos":"adv.","example":"How old are you?","exampleZh":"你多大了？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":60},{"en":"however","zh":"然而","pos":"adv.","example":"It is expensive. However, it is worth it.","exampleZh":"它很贵，然而值得。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1425},{"en":"hug","zh":"拥抱","pos":"n.","example":"She gave her son a long hug.","exampleZh":"她久久地抱住儿子。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2713},{"en":"huge","zh":"巨大的","pos":"adj.","example":"The whale is a huge animal.","exampleZh":"鲸鱼是巨大的动物。","forms":null,"defaultObject":null,"tags":["nature","object","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1346},{"en":"human","zh":"人类的","pos":"n.","example":"Humans are intelligent animals.","exampleZh":"人类是聪明的动物。","forms":null,"defaultObject":null,"tags":["nature","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":646},{"en":"hundred","zh":"百","pos":"num.","example":"The school has five hundred students.","exampleZh":"这所学校有五百名学生。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":928},{"en":"hungry","zh":"饥饿的","pos":"adj.","example":"I am very hungry. Let\'s eat.","exampleZh":"我很饿，我们吃饭吧。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":938},{"en":"hunt","zh":"打猎；寻找","pos":"v.","example":"We hunted for a flat all summer.","exampleZh":"我们找了一夏天房子。","forms":{"infinitive":"hunt","present":"hunts","ing":"hunting","past":"hunted","pastParticiple":"hunted"},"defaultObject":"for a flat","tags":["place"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2182},{"en":"hurry","zh":"匆忙","pos":"v.","example":"Hurry up, we are late!","exampleZh":"快点，我们迟到了！","forms":{"infinitive":"hurry","present":"hurries","ing":"hurrying","past":"hurried","pastParticiple":"hurried"},"defaultObject":"up","tags":["daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":531},{"en":"hurt","zh":"伤害；受伤","pos":"v.","example":"Be careful not to hurt yourself.","exampleZh":"小心别伤到自己。","forms":{"infinitive":"hurt","present":"hurts","ing":"hurting","past":"hurt","pastParticiple":"hurt"},"defaultObject":"something","tags":["transport","emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":405},{"en":"husband","zh":"丈夫","pos":"n.","example":"Her husband cooks every day.","exampleZh":"她丈夫每天做饭。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":492},{"en":"ice","zh":"冰","pos":"n.","example":"Would you like ice in your drink?","exampleZh":"你饮料里要加冰吗？","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":916},{"en":"idea","zh":"主意","pos":"n.","example":"That is a good idea.","exampleZh":"那是个好主意。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":297},{"en":"if","zh":"如果","pos":"conj.","example":"If it rains, we will stay home.","exampleZh":"如果下雨，我们就呆在家。","forms":null,"defaultObject":null,"tags":["nature","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":52},{"en":"ignore","zh":"忽视","pos":"v.","example":"Do not ignore the warning.","exampleZh":"别忽视这个警告。","forms":{"infinitive":"ignore","present":"ignores","ing":"ignoring","past":"ignored","pastParticiple":"ignored"},"defaultObject":"the noise","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2793},{"en":"ill","zh":"生病的","pos":"adj.","example":"She is ill. She needs rest.","exampleZh":"她生病了，需要休息。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2530},{"en":"illegal","zh":"非法的","pos":"adj.","example":"Parking here is illegal.","exampleZh":"这里停车是违法的。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2354},{"en":"image","zh":"形象；图像","pos":"n.","example":"The image was not clear.","exampleZh":"图像不清晰。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2420},{"en":"imagination","zh":"想象力","pos":"n.","example":"Children have a rich imagination.","exampleZh":"孩子想象力丰富。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2946},{"en":"imagine","zh":"想象","pos":"v.","example":"I cannot imagine living there.","exampleZh":"我无法想象住在那里。","forms":{"infinitive":"imagine","present":"imagines","ing":"imagining","past":"imagined","pastParticiple":"imagined"},"defaultObject":"the scene","tags":["place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":904},{"en":"immediately","zh":"立刻","pos":"adv.","example":"Please call me back immediately.","exampleZh":"请立刻回我电话。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1359},{"en":"important","zh":"重要的","pos":"adj.","example":"This is an important question.","exampleZh":"这是个重要的问题。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":471},{"en":"impossible","zh":"不可能的","pos":"adj.","example":"It is impossible to finish today.","exampleZh":"今天不可能完成。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1166},{"en":"impressed","zh":"印象深刻的","pos":"adj.","example":"I was impressed by the view.","exampleZh":"景色让我印象深刻。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2745},{"en":"impression","zh":"印象","pos":"n.","example":"She made a good impression.","exampleZh":"她给人留下了好印象。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2811},{"en":"impressive","zh":"令人印象深刻的","pos":"adj.","example":"Her work is impressive.","exampleZh":"她的作品令人印象深刻。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2988},{"en":"in","zh":"在……里面","pos":"prep.","example":"He is in the classroom.","exampleZh":"他在教室里。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":13},{"en":"incident","zh":"事件","pos":"n.","example":"Nobody talks about the incident.","exampleZh":"没人提那件事。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2949},{"en":"including","zh":"包括","pos":"prep.","example":"Everyone came, including the boss.","exampleZh":"大家都来了，老板也来了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2061},{"en":"incredible","zh":"难以置信的","pos":"adj.","example":"The view was incredible.","exampleZh":"景色美得难以置信。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1615},{"en":"indeed","zh":"确实","pos":"adv.","example":"It was indeed a long day.","exampleZh":"那确实是漫长的一天。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1543},{"en":"information","zh":"信息","pos":"n.","example":"I need more information.","exampleZh":"我需要更多信息。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":829},{"en":"insane","zh":"疯狂的","pos":"adj.","example":"The traffic today was insane.","exampleZh":"今天的交通疯了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1586},{"en":"inside","zh":"在里面","pos":"prep.","example":"The keys are inside my bag.","exampleZh":"钥匙在我包里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":465},{"en":"insist","zh":"坚持","pos":"v.","example":"She insisted on paying.","exampleZh":"她坚持要付钱。","forms":{"infinitive":"insist","present":"insists","ing":"insisting","past":"insisted","pastParticiple":"insisted"},"defaultObject":"on it","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2892},{"en":"inspector","zh":"检查员","pos":"n.","example":"The inspector checked the kitchen.","exampleZh":"检查员查看了厨房。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2461},{"en":"instead","zh":"代替；反而","pos":"adv.","example":"The shop was closed, so we ate at home instead.","exampleZh":"店关门了，所以我们改在家吃。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["it_is_adj"],"rank":920},{"en":"insurance","zh":"保险","pos":"n.","example":"Do you have health insurance?","exampleZh":"你有医保吗？","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1598},{"en":"intelligence","zh":"智力；情报","pos":"n.","example":"She has a quick intelligence.","exampleZh":"她思维敏捷。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2719},{"en":"intend","zh":"打算","pos":"v.","example":"I intend to leave early.","exampleZh":"我打算早点走。","forms":{"infinitive":"intend","present":"intends","ing":"intending","past":"intended","pastParticiple":"intended"},"defaultObject":"to go","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2376},{"en":"interest","zh":"兴趣；利息","pos":"n.","example":"She has no interest in sports.","exampleZh":"她对运动没兴趣。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1302},{"en":"interested","zh":"感兴趣的","pos":"adj.","example":"I am interested in your idea.","exampleZh":"我对你的想法感兴趣。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":861},{"en":"interesting","zh":"有趣的","pos":"adj.","example":"This is an interesting book.","exampleZh":"这是本有趣的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":851},{"en":"interrupt","zh":"打断","pos":"v.","example":"Sorry to interrupt you.","exampleZh":"抱歉打断你。","forms":{"infinitive":"interrupt","present":"interrupts","ing":"interrupting","past":"interrupted","pastParticiple":"interrupted"},"defaultObject":"you","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2781},{"en":"interview","zh":"面试","pos":"n.","example":"The interview lasted an hour.","exampleZh":"面试持续了一小时。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1955},{"en":"into","zh":"进入","pos":"prep.","example":"Come into the room, please.","exampleZh":"请进房间来。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":149},{"en":"introduce","zh":"介绍","pos":"v.","example":"Let me introduce my friend.","exampleZh":"我来介绍一下我朋友。","forms":{"infinitive":"introduce","present":"introduces","ing":"introducing","past":"introduced","pastParticiple":"introduced"},"defaultObject":"my friend","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1728},{"en":"investigation","zh":"调查","pos":"n.","example":"The investigation took months.","exampleZh":"调查花了好几个月。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1969},{"en":"invite","zh":"邀请","pos":"v.","example":"They invited us to dinner.","exampleZh":"他们请我们吃饭。","forms":{"infinitive":"invite","present":"invites","ing":"inviting","past":"invited","pastParticiple":"invited"},"defaultObject":"my friends","tags":["food"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1951},{"en":"involve","zh":"涉及；使参与","pos":"v.","example":"The job involves a lot of travel.","exampleZh":"这份工作要经常出差。","forms":{"infinitive":"involve","present":"involves","ing":"involving","past":"involved","pastParticiple":"involved"},"defaultObject":"everyone","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":5834},{"en":"iron","zh":"铁；熨斗","pos":"n.","example":"The gate is made of iron.","exampleZh":"大门是铁的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2880},{"en":"is","zh":"是","pos":"v.","example":"This is my friend.","exampleZh":"这是我的朋友。","forms":{"infinitive":"is","present":"ises","ing":"ising","past":"ised","pastParticiple":"ised"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":15},{"en":"island","zh":"岛","pos":"n.","example":"They live on a small island.","exampleZh":"他们住在一个小岛上。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1564},{"en":"issue","zh":"问题","pos":"n.","example":"We have an issue with the order.","exampleZh":"我们的订单有问题。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1746},{"en":"it","zh":"它","pos":"pron.","example":"It is a nice day today.","exampleZh":"今天天气很好。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":7},{"en":"its","zh":"它的","pos":"pron.","example":"The dog wagged its tail.","exampleZh":"狗摇了摇它的尾巴。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":536},{"en":"itself","zh":"它自己","pos":"pron.","example":"The door closed by itself.","exampleZh":"门自己关上了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1557},{"en":"jacket","zh":"夹克","pos":"n.","example":"Put on your jacket, it is cold.","exampleZh":"穿上你的夹克，很冷。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1778},{"en":"jealous","zh":"嫉妒的","pos":"adj.","example":"He was jealous of his brother.","exampleZh":"他嫉妒他哥哥。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1601},{"en":"job","zh":"工作","pos":"n.","example":"I have a part-time job.","exampleZh":"我有一份兼职工作。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":275},{"en":"join","zh":"加入","pos":"v.","example":"Can I join your game?","exampleZh":"我能加入你们的游戏吗？","forms":{"infinitive":"join","present":"joins","ing":"joining","past":"joined","pastParticiple":"joined"},"defaultObject":"the club","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":886},{"en":"joke","zh":"笑话","pos":"n.","example":"He told a funny joke.","exampleZh":"他讲了一个好笑的笑话。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":978},{"en":"journey","zh":"旅程","pos":"n.","example":"The journey took three hours.","exampleZh":"旅程花了三小时。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2653},{"en":"joy","zh":"快乐","pos":"n.","example":"We wish you joy and happiness.","exampleZh":"我们祝你快乐和幸福。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2004},{"en":"juice","zh":"果汁","pos":"n.","example":"Orange juice is my favorite.","exampleZh":"橙汁是我最喜欢的。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2103},{"en":"jump","zh":"跳","pos":"v.","example":"The horse can jump very high.","exampleZh":"马能跳得很高。","forms":{"infinitive":"jump","present":"jumps","ing":"jumping","past":"jumped","pastParticiple":"jumped"},"defaultObject":"the fence","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1021},{"en":"june","zh":"六月","pos":"n.","example":"School ends in June.","exampleZh":"学校六月放假。","forms":null,"defaultObject":null,"tags":["school","nature","place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2765},{"en":"jungle","zh":"丛林","pos":"n.","example":"It rains every day in the jungle.","exampleZh":"丛林里天天下雨。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2427},{"en":"junior","zh":"初级的","pos":"adj.","example":"He is a junior student.","exampleZh":"他是初中学生。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1687},{"en":"just","zh":"刚刚；只是","pos":"adv.","example":"I just arrived home.","exampleZh":"我刚到家。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":37},{"en":"justice","zh":"公正","pos":"n.","example":"They fought for justice.","exampleZh":"他们为公正而战。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1626},{"en":"keep","zh":"保持","pos":"v.","example":"Keep your room clean.","exampleZh":"保持你的房间干净。","forms":{"infinitive":"keep","present":"keeps","ing":"keeping","past":"kept","pastParticiple":"kept"},"defaultObject":"a secret","tags":["place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":176},{"en":"key","zh":"钥匙；关键","pos":"n.","example":"I lost my key.","exampleZh":"我丢了钥匙。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":849},{"en":"kick","zh":"踢","pos":"v.","example":"He kicked the ball too hard.","exampleZh":"他球踢得太用力了。","forms":{"infinitive":"kick","present":"kicks","ing":"kicking","past":"kicked","pastParticiple":"kicked"},"defaultObject":"the ball","tags":["body"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":975},{"en":"kid","zh":"孩子","pos":"n.","example":"Her kid started school this year.","exampleZh":"她孩子今年上学了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":318},{"en":"kill","zh":"杀死","pos":"v.","example":"Do not kill animals.","exampleZh":"不要杀动物。","forms":{"infinitive":"kill","present":"kills","ing":"killing","past":"killed","pastParticiple":"killed"},"defaultObject":"something","tags":["nature","object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":255},{"en":"kind","zh":"善良的；种类","pos":"adj.","example":"She is a kind person.","exampleZh":"她是一个善良的人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":198},{"en":"king","zh":"国王","pos":"n.","example":"The king lives in the palace.","exampleZh":"国王住在宫殿里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":637},{"en":"kiss","zh":"亲吻","pos":"v.","example":"She kissed her mother.","exampleZh":"她吻了她的妈妈。","forms":{"infinitive":"kiss","present":"kisses","ing":"kissing","past":"kissed","pastParticiple":"kissed"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":663},{"en":"kit","zh":"工具包","pos":"n.","example":"The baby needs a new kit.","exampleZh":"宝宝需要一套新用具。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2910},{"en":"kitchen","zh":"厨房","pos":"n.","example":"Mom is cooking in the kitchen.","exampleZh":"妈妈在厨房做饭。","forms":null,"defaultObject":null,"tags":["food","place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1177},{"en":"knee","zh":"膝盖","pos":"n.","example":"My knee hurts when I run.","exampleZh":"我跑步时膝盖疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":3322},{"en":"knife","zh":"刀","pos":"n.","example":"Be careful with the knife.","exampleZh":"小心用刀。","forms":null,"defaultObject":null,"tags":["transport","emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1384},{"en":"knight","zh":"骑士","pos":"n.","example":"The knight rode a horse.","exampleZh":"骑士骑着马。","forms":null,"defaultObject":null,"tags":["transport","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2107},{"en":"knock","zh":"敲","pos":"v.","example":"Please knock on the door.","exampleZh":"请敲门。","forms":{"infinitive":"knock","present":"knocks","ing":"knocking","past":"knocked","pastParticiple":"knocked"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1084},{"en":"know","zh":"知道","pos":"v.","example":"I know the answer.","exampleZh":"我知道答案。","forms":{"infinitive":"know","present":"knows","ing":"knowing","past":"knew","pastParticiple":"known"},"defaultObject":"the answer","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":30},{"en":"knowledge","zh":"知识","pos":"n.","example":"Knowledge is power.","exampleZh":"知识就是力量。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2207},{"en":"known","zh":"已知的","pos":"adj.","example":"He is known for his kindness.","exampleZh":"他以善良而闻名。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":653},{"en":"lab","zh":"实验室","pos":"n.","example":"The lab is closed on Sunday.","exampleZh":"实验室周日关门。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1562},{"en":"lack","zh":"缺乏","pos":"n.","example":"There is a lack of sleep here.","exampleZh":"这里的人睡眠不足。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2902},{"en":"lady","zh":"女士","pos":"n.","example":"The lady is reading a book.","exampleZh":"那位女士在看书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":455},{"en":"lake","zh":"湖","pos":"n.","example":"We swam in the lake.","exampleZh":"我们在湖里游泳。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1674},{"en":"land","zh":"陆地；着陆","pos":"n.","example":"The plane landed safely.","exampleZh":"飞机安全降落了。","forms":null,"defaultObject":null,"tags":["transport","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":841},{"en":"lane","zh":"小巷；车道","pos":"n.","example":"They live down a quiet lane.","exampleZh":"他们住在一条安静的小巷里。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1779},{"en":"language","zh":"语言","pos":"n.","example":"She speaks three languages.","exampleZh":"她会说三种语言。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1715},{"en":"large","zh":"大的","pos":"adj.","example":"The school is very large.","exampleZh":"学校非常大。","forms":null,"defaultObject":null,"tags":["school","place","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1522},{"en":"last","zh":"最后的；持续","pos":"adj.","example":"This is my last chance.","exampleZh":"这是我最后的机会。","forms":null,"defaultObject":null,"tags":["object","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":172},{"en":"late","zh":"迟的","pos":"adj.","example":"He is always late for school.","exampleZh":"他上学总是迟到。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":376},{"en":"laugh","zh":"笑","pos":"v.","example":"We laughed for ten minutes.","exampleZh":"我们笑了十分钟。","forms":{"infinitive":"laugh","present":"laughs","ing":"laughing","past":"laughed","pastParticiple":"laughed"},"defaultObject":"out loud","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1109},{"en":"launch","zh":"发射；发起","pos":"v.","example":"They launched the new product.","exampleZh":"他们推出了新产品。","forms":{"infinitive":"launch","present":"launches","ing":"launching","past":"launched","pastParticiple":"launched"},"defaultObject":"the product","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2650},{"en":"laundry","zh":"要洗的衣物","pos":"n.","example":"I did the laundry this morning.","exampleZh":"我今天早上洗了衣服。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2748},{"en":"law","zh":"法律","pos":"n.","example":"We must obey the law.","exampleZh":"我们必须遵守法律。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":683},{"en":"lead","zh":"领导；铅","pos":"v.","example":"Please lead the way.","exampleZh":"请带路。","forms":{"infinitive":"lead","present":"leads","ing":"leading","past":"led","pastParticiple":"led"},"defaultObject":"something","tags":["transport"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":887},{"en":"league","zh":"联赛","pos":"n.","example":"Our team is in the local league.","exampleZh":"我们队在本地联赛里。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2796},{"en":"learn","zh":"学习","pos":"v.","example":"I want to learn English.","exampleZh":"我想学英语。","forms":{"infinitive":"learn","present":"learns","ing":"learning","past":"learned","pastParticiple":"learned"},"defaultObject":"English","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":673},{"en":"learning","zh":"学习","pos":"n.","example":"Learning is a lifelong journey.","exampleZh":"学习是一生的旅程。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2616},{"en":"least","zh":"最少","pos":"adv.","example":"At least we tried.","exampleZh":"至少我们试过了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":470},{"en":"leave","zh":"离开","pos":"v.","example":"What time do you leave home?","exampleZh":"你几点离开家？","forms":{"infinitive":"leave","present":"leaves","ing":"leaving","past":"left","pastParticiple":"left"},"defaultObject":"something","tags":["place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":204},{"en":"left","zh":"左边；离开（过去式）","pos":"adj.","example":"Turn left at the corner.","exampleZh":"在拐角处左转。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":239},{"en":"leg","zh":"腿","pos":"n.","example":"My leg hurts.","exampleZh":"我的腿疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1198},{"en":"legal","zh":"合法的","pos":"adj.","example":"Is that legal here?","exampleZh":"那在这里合法吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1689},{"en":"legend","zh":"传说","pos":"n.","example":"The old legend is still told here.","exampleZh":"这个古老传说仍在流传。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2965},{"en":"less","zh":"更少","pos":"adv.","example":"Try to eat less sugar.","exampleZh":"尽量少吃糖。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["it_is_adj"],"rank":702},{"en":"lesson","zh":"课；教训","pos":"n.","example":"Our first lesson is English.","exampleZh":"我们的第一节课是英语。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1840},{"en":"let","zh":"让","pos":"v.","example":"Let me help you.","exampleZh":"让我帮你。","forms":{"infinitive":"let","present":"lets","ing":"letting","past":"let","pastParticiple":"let"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":68},{"en":"letter","zh":"信；字母","pos":"n.","example":"I wrote a letter to my aunt.","exampleZh":"我给姑姑写了封信。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":892},{"en":"level","zh":"水平；级别","pos":"n.","example":"The water level is rising.","exampleZh":"水位在上升。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1287},{"en":"liar","zh":"骗子","pos":"n.","example":"Do not be a liar.","exampleZh":"不要做一个骗子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1708},{"en":"library","zh":"图书馆","pos":"n.","example":"The library closes at six.","exampleZh":"图书馆六点关门。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2394},{"en":"license","zh":"执照；驾照","pos":"n.","example":"Can I see your license?","exampleZh":"能看下您的驾照吗？","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1848},{"en":"lie","zh":"躺；说谎","pos":"v.","example":"Do not lie to your parents.","exampleZh":"不要对你的父母说谎。","forms":{"infinitive":"lie","present":"lies","ing":"lying","past":"lay","pastParticiple":"lain"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":668},{"en":"life","zh":"生活；生命","pos":"n.","example":"City life is busy but exciting.","exampleZh":"城市生活忙碌但精彩。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":158},{"en":"lifetime","zh":"一生","pos":"n.","example":"It was the trip of a lifetime.","exampleZh":"那是一生难忘的旅行。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2853},{"en":"lift","zh":"举起","pos":"v.","example":"This box is too heavy to lift.","exampleZh":"这箱子太重，抬不动。","forms":{"infinitive":"lift","present":"lifts","ing":"lifting","past":"lifted","pastParticiple":"lifted"},"defaultObject":"the box","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1745},{"en":"light","zh":"光；轻的","pos":"n.","example":"Please turn on the light.","exampleZh":"请开灯。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":549},{"en":"like","zh":"喜欢；像","pos":"v.","example":"I like playing basketball.","exampleZh":"我喜欢打篮球。","forms":{"infinitive":"like","present":"likes","ing":"liking","past":"liked","pastParticiple":"liked"},"defaultObject":"music","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":46},{"en":"line","zh":"线；排","pos":"n.","example":"Draw a straight line.","exampleZh":"画一条直线。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":474},{"en":"lip","zh":"嘴唇","pos":"n.","example":"Her lips were dry from the wind.","exampleZh":"风把她嘴唇吹干了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":4165},{"en":"liquor","zh":"烈酒","pos":"n.","example":"He does not drink liquor.","exampleZh":"他不喝烈酒。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2951},{"en":"list","zh":"列表；清单","pos":"n.","example":"Please make a list of things to buy.","exampleZh":"请列一个购物清单。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":908},{"en":"listen","zh":"听","pos":"v.","example":"Please listen to the teacher.","exampleZh":"请听老师讲课。","forms":{"infinitive":"listen","present":"listens","ing":"listenning","past":"listenned","pastParticiple":"listenned"},"defaultObject":"something","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":212},{"en":"little","zh":"小的；少的","pos":"adj.","example":"The little girl is cute.","exampleZh":"小女孩很可爱。","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":106},{"en":"live","zh":"住；活的","pos":"v.","example":"I live in Beijing.","exampleZh":"我住在北京。","forms":{"infinitive":"live","present":"lives","ing":"living","past":"lived","pastParticiple":"lived"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":307},{"en":"load","zh":"装载","pos":"v.","example":"They loaded the boxes into the van.","exampleZh":"他们把箱子装进了车。","forms":{"infinitive":"load","present":"loads","ing":"loading","past":"loaded","pastParticiple":"loaded"},"defaultObject":"the car","tags":["transport"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1972},{"en":"loan","zh":"贷款","pos":"n.","example":"They took a loan for the house.","exampleZh":"他们为买房贷了款。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2660},{"en":"local","zh":"当地的","pos":"adj.","example":"We ate at a local restaurant.","exampleZh":"我们在一家本地餐厅吃的。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1517},{"en":"location","zh":"位置","pos":"n.","example":"The location of the hotel is good.","exampleZh":"酒店的位置很好。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2261},{"en":"lock","zh":"锁","pos":"n.","example":"Put a lock on your bicycle.","exampleZh":"给你的自行车上一把锁。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1197},{"en":"lonely","zh":"孤独的","pos":"adj.","example":"The house feels lonely at night.","exampleZh":"这房子晚上让人觉得孤单。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1518},{"en":"long","zh":"长的","pos":"adj.","example":"The Great Wall is very long.","exampleZh":"长城非常长。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":182},{"en":"look","zh":"看","pos":"v.","example":"You look very happy today.","exampleZh":"你今天看起来很开心。","forms":{"infinitive":"look","present":"looks","ing":"looking","past":"looked","pastParticiple":"looked"},"defaultObject":"something","tags":["emotion","nature","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":84},{"en":"looking","zh":"看（进行时）","pos":"v.","example":"He is looking for his keys.","exampleZh":"他在找他的钥匙。","forms":{"infinitive":"looking","present":"lookings","ing":"lookinging","past":"lookinged","pastParticiple":"lookinged"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":269},{"en":"loose","zh":"松的","pos":"adj.","example":"This button is loose.","exampleZh":"这颗扣子松了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1516},{"en":"lose","zh":"丢失；输","pos":"v.","example":"I do not want to lose the game.","exampleZh":"我不想输掉比赛。","forms":{"infinitive":"lose","present":"loses","ing":"losing","past":"lost","pastParticiple":"lost"},"defaultObject":"the key","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":552},{"en":"losing","zh":"失去（进行时）","pos":"v.","example":"They are losing the match.","exampleZh":"他们正在输掉比赛。","forms":{"infinitive":"losing","present":"losings","ing":"losinging","past":"losinged","pastParticiple":"losinged"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1246},{"en":"loss","zh":"损失","pos":"n.","example":"The loss was hard for the family.","exampleZh":"这个损失对这家人很难承受。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1978},{"en":"lost","zh":"丢失的","pos":"adj.","example":"I am lost. Where is the station?","exampleZh":"我迷路了，车站在哪里？","forms":null,"defaultObject":null,"tags":["transport","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":373},{"en":"lot","zh":"许多","pos":"n.","example":"There are a lot of people in the park.","exampleZh":"公园里有很多人。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":201},{"en":"loud","zh":"大声的","pos":"adj.","example":"Please do not speak so loud.","exampleZh":"请别这么大声说话。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1556},{"en":"lousy","zh":"糟糕的","pos":"adj.","example":"I had a lousy day at work.","exampleZh":"我今天上班很不顺。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2340},{"en":"love","zh":"爱","pos":"v.","example":"I love my family.","exampleZh":"我爱我的家庭。","forms":{"infinitive":"love","present":"loves","ing":"loving","past":"loved","pastParticiple":"loved"},"defaultObject":"my family","tags":["emotion","place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":124},{"en":"lovely","zh":"可爱的；美好的","pos":"adj.","example":"What a lovely garden!","exampleZh":"多美的花园！","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":789},{"en":"low","zh":"低的","pos":"adj.","example":"The price is very low.","exampleZh":"价格很低。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1165},{"en":"luck","zh":"运气","pos":"n.","example":"Good luck with your exam!","exampleZh":"祝你考试好运！","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":575},{"en":"lucky","zh":"幸运的","pos":"adj.","example":"You are a lucky person.","exampleZh":"你是一个幸运的人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":600},{"en":"lunch","zh":"午饭","pos":"n.","example":"Let us have lunch together.","exampleZh":"我们一起吃午饭吧。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":732},{"en":"machine","zh":"机器","pos":"n.","example":"The machine makes clothes.","exampleZh":"这台机器生产衣服。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1014},{"en":"mad","zh":"疯狂的；生气的","pos":"adj.","example":"The dog went mad.","exampleZh":"狗疯了。","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":691},{"en":"made","zh":"制作（过去式）","pos":"v.","example":"She made a cake for me.","exampleZh":"她为我做了一个蛋糕。","forms":{"infinitive":"made","present":"mades","ing":"mading","past":"maded","pastParticiple":"maded"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":203},{"en":"magazine","zh":"杂志","pos":"n.","example":"I read a magazine on the train.","exampleZh":"我在火车上看了一本杂志。","forms":null,"defaultObject":null,"tags":["transport","school","nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1793},{"en":"magic","zh":"魔法","pos":"n.","example":"The magic show is amazing.","exampleZh":"魔术表演太神奇了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1263},{"en":"maid","zh":"女佣","pos":"n.","example":"The hotel maid cleaned our room.","exampleZh":"酒店服务员打扫了我们的房间。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2407},{"en":"mail","zh":"邮件","pos":"n.","example":"The mail arrives at nine.","exampleZh":"邮件九点到达。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1647},{"en":"main","zh":"主要的","pos":"adj.","example":"The main door is locked.","exampleZh":"大门锁着。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1485},{"en":"major","zh":"主要的","pos":"adj.","example":"That is a major problem.","exampleZh":"那是个大问题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":726},{"en":"make","zh":"制作；使","pos":"v.","example":"Please make a decision.","exampleZh":"请做一个决定。","forms":{"infinitive":"make","present":"makes","ing":"making","past":"made","pastParticiple":"made"},"defaultObject":"a plan","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":109},{"en":"male","zh":"男性的","pos":"adj.","example":"A male voice answered.","exampleZh":"一个男声接了电话。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1751},{"en":"mall","zh":"购物中心","pos":"n.","example":"We went to the shopping mall.","exampleZh":"我们去了购物中心。","forms":null,"defaultObject":null,"tags":["emotion","place","object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2758},{"en":"mama","zh":"妈妈","pos":"n.","example":"Mama made soup for us.","exampleZh":"妈妈给我们做了汤。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":737},{"en":"man","zh":"男人","pos":"n.","example":"The old man is walking slowly.","exampleZh":"老人慢慢地走着。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":87},{"en":"manage","zh":"设法；管理","pos":"v.","example":"She managed to finish on time.","exampleZh":"她设法按时完成了。","forms":{"infinitive":"manage","present":"manages","ing":"managing","past":"managed","pastParticiple":"managed"},"defaultObject":"it","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2510},{"en":"manager","zh":"经理","pos":"n.","example":"The manager is in a meeting.","exampleZh":"经理在开会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1554},{"en":"many","zh":"许多","pos":"adj.","example":"How many students are there?","exampleZh":"有多少学生？","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":296},{"en":"map","zh":"地图","pos":"n.","example":"Let us look at the map.","exampleZh":"我们看看地图。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1860},{"en":"march","zh":"三月；行进","pos":"n.","example":"The band marched in the parade.","exampleZh":"乐队在游行中行进。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2315},{"en":"mark","zh":"标记；分数","pos":"n.","example":"Please put a mark here.","exampleZh":"请在这里做一个标记。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":896},{"en":"market","zh":"市场","pos":"n.","example":"We buy vegetables at the market.","exampleZh":"我们在市场买蔬菜。","forms":null,"defaultObject":null,"tags":["food","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1667},{"en":"marriage","zh":"婚姻","pos":"n.","example":"Their marriage lasted forty years.","exampleZh":"他们的婚姻维持了四十年。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":940},{"en":"marry","zh":"结婚","pos":"v.","example":"They married last spring.","exampleZh":"他们去年春天结婚了。","forms":{"infinitive":"marry","present":"marries","ing":"marrying","past":"married","pastParticiple":"married"},"defaultObject":"her","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":729},{"en":"mask","zh":"口罩；面具","pos":"n.","example":"Please wear a mask inside.","exampleZh":"室内请戴口罩。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2668},{"en":"mass","zh":"大量的；质量","pos":"n.","example":"A mass of people filled the street.","exampleZh":"一大群人挤满了街道。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2957},{"en":"match","zh":"比赛；匹配","pos":"n.","example":"We watched a football match.","exampleZh":"我们看了一场足球比赛。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1325},{"en":"mate","zh":"伙伴；配偶","pos":"n.","example":"She met her mate at work.","exampleZh":"她在工作中认识了伴侣。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1970},{"en":"material","zh":"材料","pos":"n.","example":"This material feels soft.","exampleZh":"这材料摸起来很软。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2453},{"en":"matter","zh":"事情；物质","pos":"n.","example":"What is the matter with you?","exampleZh":"你怎么了？","forms":null,"defaultObject":null,"tags":["emotion","object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":292},{"en":"may","zh":"可以；五月","pos":"modal v.","example":"May I come in?","exampleZh":"我可以进来吗？","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":1,"frameworks":["it_is_adj"],"rank":221},{"en":"maybe","zh":"也许","pos":"adv.","example":"Maybe he will come later.","exampleZh":"也许他晚点会来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":139},{"en":"mayor","zh":"市长","pos":"n.","example":"The mayor opened the new park.","exampleZh":"市长为新公园揭幕。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1884},{"en":"me","zh":"我（宾格）","pos":"pron.","example":"Please give me the book.","exampleZh":"请把书给我。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":14},{"en":"meal","zh":"一餐","pos":"n.","example":"That was a lovely meal.","exampleZh":"那顿饭真好吃。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1988},{"en":"mean","zh":"意思是；意味着","pos":"v.","example":"What does this word mean?","exampleZh":"这个词是什么意思？","forms":{"infinitive":"mean","present":"means","ing":"meaning","past":"meant","pastParticiple":"meant"},"defaultObject":"something","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":116},{"en":"meat","zh":"肉","pos":"n.","example":"She does not eat meat.","exampleZh":"她不吃肉。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1468},{"en":"media","zh":"媒体","pos":"n.","example":"The media reported it quickly.","exampleZh":"媒体很快报道了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2446},{"en":"medical","zh":"医疗的","pos":"adj.","example":"He needs medical help.","exampleZh":"他需要医疗帮助。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1229},{"en":"medicine","zh":"药","pos":"n.","example":"Take this medicine after meals.","exampleZh":"饭后吃这个药。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1743},{"en":"meet","zh":"遇见","pos":"v.","example":"Let us meet at the school gate.","exampleZh":"我们在校门口见面吧。","forms":{"infinitive":"meet","present":"meets","ing":"meeting","past":"met","pastParticiple":"met"},"defaultObject":"a friend","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":301},{"en":"meeting","zh":"会议","pos":"n.","example":"We have a meeting every Monday.","exampleZh":"我们每周一开会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":628},{"en":"member","zh":"成员","pos":"n.","example":"She is a member of our club.","exampleZh":"她是我们俱乐部的成员。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1991},{"en":"memory","zh":"记忆","pos":"n.","example":"I have a good memory for faces.","exampleZh":"我对脸的记忆力很好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1343},{"en":"men","zh":"男人们","pos":"n.","example":"The men are working in the field.","exampleZh":"男人们正在田里干活。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":290},{"en":"mental","zh":"精神的","pos":"adj.","example":"Mental health matters too.","exampleZh":"心理健康同样重要。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2685},{"en":"mention","zh":"提到","pos":"v.","example":"Do not mention it to anyone.","exampleZh":"别对任何人提起这件事。","forms":{"infinitive":"mention","present":"mentions","ing":"mentioning","past":"mentioned","pastParticiple":"mentioned"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1157},{"en":"mercy","zh":"仁慈","pos":"n.","example":"He showed mercy to the young thief.","exampleZh":"他对那个小偷手下留情。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2226},{"en":"mess","zh":"混乱","pos":"n.","example":"Your room is a mess.","exampleZh":"你的房间一团糟。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":933},{"en":"message","zh":"消息","pos":"n.","example":"I left her a message.","exampleZh":"我给她留了言。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":813},{"en":"metal","zh":"金属","pos":"n.","example":"The box is made of metal.","exampleZh":"这盒子是金属的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2698},{"en":"middle","zh":"中间","pos":"n.","example":"He woke up in the middle of the night.","exampleZh":"他半夜醒了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":832},{"en":"midnight","zh":"午夜","pos":"n.","example":"We went to bed at midnight.","exampleZh":"我们半夜才睡觉。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2015},{"en":"might","zh":"可能","pos":"modal v.","example":"It might rain this afternoon.","exampleZh":"今天下午可能会下雨。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":1,"frameworks":["it_is_adj"],"rank":218},{"en":"mighty","zh":"强大的","pos":"adj.","example":"The mighty river cut through the valley.","exampleZh":"大河穿过山谷。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2123},{"en":"mile","zh":"英里","pos":"n.","example":"We walked a mile in the rain.","exampleZh":"我们冒雨走了一英里。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2558},{"en":"milk","zh":"牛奶","pos":"n.","example":"I drink a glass of milk every morning.","exampleZh":"我每天早上喝一杯牛奶。","forms":null,"defaultObject":null,"tags":["food","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1490},{"en":"million","zh":"百万","pos":"num.","example":"The city has two million people.","exampleZh":"这座城市有两百万人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":667},{"en":"mind","zh":"介意；头脑","pos":"v.","example":"Do you mind if I sit here?","exampleZh":"你介意我坐这里吗？","forms":{"infinitive":"mind","present":"minds","ing":"minding","past":"minded","pastParticiple":"minded"},"defaultObject":"the noise","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":238},{"en":"mine","zh":"我的","pos":"pron.","example":"That blue bag is mine.","exampleZh":"那个蓝包是我的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":398},{"en":"minister","zh":"部长；牧师","pos":"n.","example":"The minister answered the question.","exampleZh":"部长回答了问题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2823},{"en":"minute","zh":"分钟","pos":"n.","example":"Wait a minute, please.","exampleZh":"请等一下。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":289},{"en":"miracle","zh":"奇迹","pos":"n.","example":"It was a miracle he survived.","exampleZh":"他活下来是个奇迹。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2115},{"en":"mirror","zh":"镜子","pos":"n.","example":"She looked in the mirror.","exampleZh":"她照了照镜子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2301},{"en":"miserable","zh":"痛苦的","pos":"adj.","example":"The rain made us miserable.","exampleZh":"大雨让我们很难受。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2505},{"en":"miss","zh":"想念；错过","pos":"v.","example":"I miss my hometown very much.","exampleZh":"我非常想念家乡。","forms":{"infinitive":"miss","present":"misses","ing":"missing","past":"missed","pastParticiple":"missed"},"defaultObject":"something","tags":["place"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":248},{"en":"mission","zh":"任务","pos":"n.","example":"The mission was successful.","exampleZh":"任务成功了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1377},{"en":"mistake","zh":"错误","pos":"n.","example":"Everyone makes mistakes.","exampleZh":"人人都会犯错。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":748},{"en":"mister","zh":"先生","pos":"n.","example":"Excuse me, mister, is this your bag?","exampleZh":"打扰了先生，这是您的包吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1409},{"en":"mixed","zh":"混合的","pos":"adj.","example":"I have mixed feelings about it.","exampleZh":"我对此感觉复杂。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2521},{"en":"model","zh":"模型；型号","pos":"n.","example":"This is last year\'s model.","exampleZh":"这是去年的型号。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1849},{"en":"modern","zh":"现代的","pos":"adj.","example":"The kitchen is very modern.","exampleZh":"厨房很现代。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2850},{"en":"mom","zh":"妈妈","pos":"n.","example":"My mom calls me every Sunday.","exampleZh":"我妈每周日给我打电话。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":271},{"en":"moment","zh":"时刻","pos":"n.","example":"Wait a moment, please.","exampleZh":"请等一下。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":508},{"en":"mommy","zh":"妈妈（儿语）","pos":"n.","example":"The little girl called for her mommy.","exampleZh":"小女孩喊妈妈。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":999},{"en":"monday","zh":"星期一","pos":"n.","example":"We have math class on Monday.","exampleZh":"我们周一有数学课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1785},{"en":"money","zh":"钱","pos":"n.","example":"Money cannot buy happiness.","exampleZh":"金钱买不到幸福。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":189},{"en":"monkey","zh":"猴子","pos":"n.","example":"The monkey is eating a banana.","exampleZh":"猴子正在吃香蕉。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1770},{"en":"month","zh":"月","pos":"n.","example":"This is my favorite month.","exampleZh":"这是我最喜欢的月份。","forms":null,"defaultObject":null,"tags":["emotion","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":788},{"en":"mood","zh":"心情","pos":"n.","example":"He is in a good mood today.","exampleZh":"他今天心情不错。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1750},{"en":"moon","zh":"月亮","pos":"n.","example":"The moon is very bright tonight.","exampleZh":"今晚月亮很亮。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1314},{"en":"more","zh":"更多的","pos":"adj.","example":"I need more time.","exampleZh":"我需要更多时间。","forms":null,"defaultObject":null,"tags":["daily","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":114},{"en":"morning","zh":"早上","pos":"n.","example":"I get up early every morning.","exampleZh":"我每天早上早起。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":262},{"en":"most","zh":"最多的","pos":"adj.","example":"Most students like sports.","exampleZh":"大多数学生喜欢运动。","forms":null,"defaultObject":null,"tags":["school","emotion","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":302},{"en":"motel","zh":"汽车旅馆","pos":"n.","example":"We stayed at a motel by the road.","exampleZh":"我们住在路边的一家汽车旅馆。","forms":null,"defaultObject":null,"tags":["transport","place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2859},{"en":"mother","zh":"母亲","pos":"n.","example":"My mother cooks very well.","exampleZh":"我妈妈做饭很好吃。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":243},{"en":"motion","zh":"运动；动议","pos":"n.","example":"The motion of the boat made me sick.","exampleZh":"船的晃动让我不舒服。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2757},{"en":"mountain","zh":"山","pos":"n.","example":"We climbed to the top of the mountain.","exampleZh":"我们爬到了山顶。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1700},{"en":"mouse","zh":"老鼠；鼠标","pos":"n.","example":"The cat caught a mouse.","exampleZh":"猫抓到了一只老鼠。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2736},{"en":"mouth","zh":"嘴","pos":"n.","example":"Please open your mouth.","exampleZh":"请张开你的嘴。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":728},{"en":"move","zh":"移动；搬家","pos":"v.","example":"We move to a new house next month.","exampleZh":"我们下个月搬新家。","forms":{"infinitive":"move","present":"moves","ing":"moving","past":"moved","pastParticiple":"moved"},"defaultObject":"the table","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":273},{"en":"movie","zh":"电影","pos":"n.","example":"The movie starts at seven.","exampleZh":"电影七点开始。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":656},{"en":"much","zh":"许多","pos":"adj.","example":"How much is this shirt?","exampleZh":"这件衬衫多少钱？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":137},{"en":"museum","zh":"博物馆","pos":"n.","example":"We visited the history museum.","exampleZh":"我们参观了历史博物馆。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2821},{"en":"music","zh":"音乐","pos":"n.","example":"I like listening to music.","exampleZh":"我喜欢听音乐。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":580},{"en":"must","zh":"必须","pos":"modal v.","example":"You must finish your homework.","exampleZh":"你必须完成你的作业。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":178},{"en":"my","zh":"我的","pos":"pron.","example":"This is my book.","exampleZh":"这是我的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":21},{"en":"myself","zh":"我自己","pos":"pron.","example":"I made this cake myself.","exampleZh":"这蛋糕是我自己做的。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["it_is_adj"],"rank":312},{"en":"mystery","zh":"谜","pos":"n.","example":"It remains a mystery.","exampleZh":"这仍然是个谜。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2391},{"en":"nail","zh":"钉子；指甲","pos":"n.","example":"She painted her nails red.","exampleZh":"她把指甲涂成了红色。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2794},{"en":"naked","zh":"赤裸的","pos":"adj.","example":"The tree was naked in winter.","exampleZh":"冬天树光秃秃的。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1569},{"en":"name","zh":"名字","pos":"n.","example":"What is your name?","exampleZh":"你叫什么名字？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":188},{"en":"nasty","zh":"讨厌的","pos":"adj.","example":"He gave me a nasty look.","exampleZh":"他狠狠瞪了我一眼。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2426},{"en":"nation","zh":"国家","pos":"n.","example":"China is a great nation.","exampleZh":"中国是一个伟大的国家。","forms":null,"defaultObject":null,"tags":["food","place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2606},{"en":"national","zh":"国家的","pos":"adj.","example":"It is a national holiday today.","exampleZh":"今天是国家法定假日。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1605},{"en":"natural","zh":"自然的","pos":"adj.","example":"It is natural to feel nervous.","exampleZh":"紧张是很自然的。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1498},{"en":"nature","zh":"自然","pos":"n.","example":"I love the beauty of nature.","exampleZh":"我热爱大自然的美丽。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1424},{"en":"near","zh":"近的","pos":"prep.","example":"The school is near my home.","exampleZh":"学校离我家很近。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":889},{"en":"necessary","zh":"必要的","pos":"adj.","example":"Is it necessary to book a seat?","exampleZh":"有必要订座位吗？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1398},{"en":"neck","zh":"脖子","pos":"n.","example":"She wears a scarf around her neck.","exampleZh":"她脖子上围了一条围巾。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1155},{"en":"need","zh":"需要","pos":"v.","example":"I need your help.","exampleZh":"我需要你的帮助。","forms":{"infinitive":"need","present":"needs","ing":"needing","past":"needed","pastParticiple":"needed"},"defaultObject":"some help","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":115},{"en":"needs","zh":"需要（第三人称）","pos":"n.","example":"The needs of students are important.","exampleZh":"学生们的需求很重要。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":559},{"en":"negative","zh":"消极的；否定的","pos":"adj.","example":"The test came back negative.","exampleZh":"检查结果是阴性。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2199},{"en":"neighbor","zh":"邻居","pos":"n.","example":"Our neighbor has three cats.","exampleZh":"我们邻居养了三只猫。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2989},{"en":"neighborhood","zh":"街区","pos":"n.","example":"This neighborhood feels safe.","exampleZh":"这个街区让人觉得安全。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1653},{"en":"neither","zh":"两者都不","pos":"det.","example":"Neither answer was correct.","exampleZh":"两个答案都不对。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1054},{"en":"nerve","zh":"神经；胆量","pos":"n.","example":"She did not have the nerve to ask.","exampleZh":"她没胆量开口问。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2392},{"en":"nervous","zh":"紧张的","pos":"adj.","example":"I always get nervous before a test.","exampleZh":"我考试前总是紧张。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1060},{"en":"never","zh":"从不","pos":"adv.","example":"I will never give up.","exampleZh":"我永远不会放弃。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":111},{"en":"new","zh":"新的","pos":"adj.","example":"I have a new bicycle.","exampleZh":"我有一辆新自行车。","forms":null,"defaultObject":null,"tags":["transport","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":171},{"en":"newspaper","zh":"报纸","pos":"n.","example":"My father reads the newspaper at breakfast.","exampleZh":"我爸爸早饭时看报。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2341},{"en":"next","zh":"下一个","pos":"adj.","example":"The next class is math.","exampleZh":"下一节课是数学。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":254},{"en":"nice","zh":"好的","pos":"adj.","example":"You are very nice to me.","exampleZh":"你对我非常好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":187},{"en":"night","zh":"夜晚","pos":"n.","example":"The night is dark and quiet.","exampleZh":"夜晚黑暗而安静。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":145},{"en":"nightmare","zh":"噩梦","pos":"n.","example":"The trip was a nightmare.","exampleZh":"那趟旅行是场噩梦。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2437},{"en":"nine","zh":"九","pos":"num.","example":"I have nine books.","exampleZh":"我有九本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1055},{"en":"no","zh":"不","pos":"adv.","example":"No, I do not like coffee.","exampleZh":"不，我不喜欢咖啡。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":28},{"en":"nobody","zh":"没有人","pos":"pron.","example":"Nobody answered the phone.","exampleZh":"没人接电话。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":378},{"en":"noise","zh":"噪音","pos":"n.","example":"Please do not make noise.","exampleZh":"请别吵闹。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1723},{"en":"none","zh":"没有一个","pos":"pron.","example":"None of the shops were open.","exampleZh":"店都没开门。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":703},{"en":"nonsense","zh":"胡说","pos":"n.","example":"That is complete nonsense.","exampleZh":"那完全是胡说。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2010},{"en":"noon","zh":"中午","pos":"n.","example":"Let us meet at noon.","exampleZh":"我们中午见吧。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2867},{"en":"nor","zh":"也不","pos":"conj.","example":"He does not smoke, nor does he drink.","exampleZh":"他不抽烟，也不喝酒。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1675},{"en":"normal","zh":"正常的","pos":"adj.","example":"His temperature is normal now.","exampleZh":"他体温现在正常了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1012},{"en":"north","zh":"北方","pos":"n.","example":"Beijing is in the north of China.","exampleZh":"北京在中国的北方。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1097},{"en":"nose","zh":"鼻子","pos":"n.","example":"I have a cold in my nose.","exampleZh":"我鼻子感冒了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1024},{"en":"not","zh":"不","pos":"adv.","example":"This is not my book.","exampleZh":"这不是我的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":32},{"en":"note","zh":"笔记；注意","pos":"n.","example":"Please take notes in class.","exampleZh":"上课请记笔记。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1241},{"en":"nothing","zh":"没有东西","pos":"pron.","example":"There is nothing in the box.","exampleZh":"盒子里什么都没有。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":148},{"en":"notice","zh":"注意到","pos":"v.","example":"Did you notice her new coat?","exampleZh":"你注意到她的新外套了吗？","forms":{"infinitive":"notice","present":"notices","ing":"noticing","past":"noticed","pastParticiple":"noticed"},"defaultObject":"the change","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1161},{"en":"now","zh":"现在","pos":"adv.","example":"Please sit down now.","exampleZh":"现在请坐下。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":57},{"en":"nowhere","zh":"无处","pos":"adv.","example":"The keys were nowhere to be found.","exampleZh":"钥匙哪儿都找不到。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1574},{"en":"nuclear","zh":"核的","pos":"adj.","example":"It is a nuclear power station.","exampleZh":"那是座核电站。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2755},{"en":"number","zh":"数字","pos":"n.","example":"What is your phone number?","exampleZh":"你的电话号码是多少？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":414},{"en":"nurse","zh":"护士","pos":"n.","example":"The nurse is very kind.","exampleZh":"护士非常和蔼。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1430},{"en":"object","zh":"反对；物体","pos":"n.","example":"A strange object was on the road.","exampleZh":"路上有个奇怪的东西。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2187},{"en":"objection","zh":"反对","pos":"n.","example":"Does anyone have an objection?","exampleZh":"有人反对吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2488},{"en":"obvious","zh":"明显的","pos":"adj.","example":"The answer was obvious.","exampleZh":"答案很明显。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1952},{"en":"obviously","zh":"明显地","pos":"adv.","example":"She was obviously very tired.","exampleZh":"她显然很累。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1141},{"en":"ocean","zh":"海洋","pos":"n.","example":"We flew over the ocean.","exampleZh":"我们飞越了大洋。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1918},{"en":"odd","zh":"奇怪的","pos":"adj.","example":"That is an odd question.","exampleZh":"这问题很奇怪。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2311},{"en":"of","zh":"……的","pos":"prep.","example":"A cup of tea, please.","exampleZh":"请给我一杯茶。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["it_is_adj"],"rank":11},{"en":"off","zh":"离开；关","pos":"adv.","example":"Please turn off the light.","exampleZh":"请关掉灯。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":118},{"en":"office","zh":"办公室","pos":"n.","example":"My father works in an office.","exampleZh":"我爸爸在办公室工作。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":476},{"en":"official","zh":"官方的","pos":"adj.","example":"This is the official answer.","exampleZh":"这是官方答复。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2318},{"en":"often","zh":"经常","pos":"adv.","example":"I often go to the library.","exampleZh":"我经常去图书馆。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1187},{"en":"oh","zh":"哦","pos":"int.","example":"Oh! I forgot my book!","exampleZh":"哦！我忘记带书了！","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":55},{"en":"oil","zh":"油","pos":"n.","example":"Add a little oil to the pan.","exampleZh":"往锅里加点油。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1530},{"en":"ok","zh":"好的","pos":"adj.","example":"OK, I will come.","exampleZh":"好的，我会来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":224},{"en":"old","zh":"老的；旧的","pos":"adj.","example":"My grandfather is very old.","exampleZh":"我爷爷非常老了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":195},{"en":"on","zh":"在……上","pos":"prep.","example":"The book is on the table.","exampleZh":"书在桌子上。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":19},{"en":"once","zh":"一次；曾经","pos":"adv.","example":"I met her once.","exampleZh":"我曾经见过她一次。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":306},{"en":"one","zh":"一","pos":"num.","example":"I have one sister.","exampleZh":"我有一个妹妹。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":59},{"en":"onto","zh":"到……上面","pos":"prep.","example":"The cat jumped onto the table.","exampleZh":"猫跳到了桌子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1652},{"en":"open","zh":"打开","pos":"v.","example":"Please open the window.","exampleZh":"请打开窗户。","forms":{"infinitive":"open","present":"opens","ing":"openning","past":"openned","pastParticiple":"openned"},"defaultObject":"the door","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":330},{"en":"opera","zh":"歌剧","pos":"n.","example":"She loves opera.","exampleZh":"她喜欢歌剧。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2970},{"en":"operation","zh":"手术；操作","pos":"n.","example":"The operation went well.","exampleZh":"手术很顺利。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1458},{"en":"opinion","zh":"意见","pos":"n.","example":"What is your opinion?","exampleZh":"你的看法是什么？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1507},{"en":"opportunity","zh":"机会","pos":"n.","example":"This is a great opportunity.","exampleZh":"这是个好机会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1531},{"en":"or","zh":"或者","pos":"conj.","example":"Tea or coffee?","exampleZh":"茶还是咖啡？","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["it_is_adj"],"rank":95},{"en":"orange","zh":"橙子；橙色","pos":"n.","example":"I like eating oranges.","exampleZh":"我喜欢吃橙子。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2445},{"en":"order","zh":"点餐；命令","pos":"v.","example":"We ordered two coffees.","exampleZh":"我们点了两杯咖啡。","forms":{"infinitive":"order","present":"orders","ing":"orderring","past":"orderred","pastParticiple":"orderred"},"defaultObject":"a coffee","tags":["food"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":569},{"en":"ordinary","zh":"普通的","pos":"adj.","example":"It was an ordinary day.","exampleZh":"那是平常的一天。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2742},{"en":"original","zh":"最初的；原创的","pos":"adj.","example":"This is the original plan.","exampleZh":"这是最初的计划。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2022},{"en":"other","zh":"其他的","pos":"adj.","example":"I will tell you other stories.","exampleZh":"我会告诉你其他的故事。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":169},{"en":"otherwise","zh":"否则","pos":"adv.","example":"Write it down, otherwise you will forget.","exampleZh":"记下来，不然你会忘。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1520},{"en":"ought","zh":"应该","pos":"modal v.","example":"You ought to see a doctor.","exampleZh":"你应该去看医生。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["it_is_adj"],"rank":907},{"en":"our","zh":"我们的","pos":"pron.","example":"This is our classroom.","exampleZh":"这是我们的教室。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":108},{"en":"ourselves","zh":"我们自己","pos":"pron.","example":"We can do it ourselves.","exampleZh":"我们自己能做。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1268},{"en":"out","zh":"出去","pos":"adv.","example":"Please go out.","exampleZh":"请出去。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":47},{"en":"outfit","zh":"整套衣服","pos":"n.","example":"That outfit looks great on you.","exampleZh":"这身衣服你穿很好看。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2238},{"en":"outside","zh":"外面","pos":"prep.","example":"We play outside after school.","exampleZh":"我们放学后在外面玩。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["it_is_adj"],"rank":540},{"en":"over","zh":"在……上方","pos":"prep.","example":"The bridge goes over the river.","exampleZh":"桥横跨在河上。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":113},{"en":"owe","zh":"欠","pos":"v.","example":"I owe you a dinner.","exampleZh":"我欠你一顿饭。","forms":{"infinitive":"owe","present":"owes","ing":"owing","past":"owed","pastParticiple":"owed"},"defaultObject":"him money","tags":["food"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":968},{"en":"own","zh":"自己的；拥有","pos":"v.","example":"I own a bicycle.","exampleZh":"我拥有一辆自行车。","forms":{"infinitive":"own","present":"owns","ing":"owning","past":"owned","pastParticiple":"owned"},"defaultObject":"something","tags":["transport"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":251},{"en":"pack","zh":"打包","pos":"n.","example":"Please pack your bag.","exampleZh":"请收拾你的包。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1462},{"en":"package","zh":"包裹","pos":"n.","example":"A package arrived for you.","exampleZh":"有你的包裹到了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2409},{"en":"page","zh":"页","pos":"n.","example":"Turn to page ten.","exampleZh":"翻到第10页。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1625},{"en":"pain","zh":"疼痛","pos":"n.","example":"I have a pain in my leg.","exampleZh":"我的腿疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":771},{"en":"paint","zh":"画；油漆","pos":"v.","example":"We paint the wall white.","exampleZh":"我们把墙刷成白色。","forms":{"infinitive":"paint","present":"paints","ing":"painting","past":"painted","pastParticiple":"painted"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1649},{"en":"pair","zh":"一对","pos":"n.","example":"I have a pair of shoes.","exampleZh":"我有一双鞋。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1634},{"en":"pal","zh":"伙伴","pos":"n.","example":"He is an old pal from school.","exampleZh":"他是我学生时代的老友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1185},{"en":"palace","zh":"宫殿","pos":"n.","example":"We visited the old palace.","exampleZh":"我们参观了古老的宫殿。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2727},{"en":"panic","zh":"恐慌","pos":"v.","example":"Do not panic, we have time.","exampleZh":"别慌，我们有时间。","forms":{"infinitive":"panic","present":"panics","ing":"paniccing","past":"panicced","pastParticiple":"panicced"},"defaultObject":"about it","tags":["emotion"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2476},{"en":"pants","zh":"裤子","pos":"n.","example":"Put on your pants.","exampleZh":"穿上你的裤子。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1172},{"en":"papa","zh":"爸爸","pos":"n.","example":"Papa taught me to ride a bike.","exampleZh":"爸爸教我骑自行车。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1488},{"en":"paper","zh":"纸；论文","pos":"n.","example":"Write your name on the paper.","exampleZh":"在纸上写下你的名字。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":739},{"en":"pardon","zh":"请再说一遍；原谅","pos":"int.","example":"Pardon? I did not hear you.","exampleZh":"什么？我没听清。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1086},{"en":"parents","zh":"父母","pos":"n.","example":"My parents live in the countryside.","exampleZh":"我父母住在乡下。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":605},{"en":"park","zh":"公园；停车","pos":"n.","example":"We play in the park.","exampleZh":"我们在公园玩。","forms":null,"defaultObject":null,"tags":["transport","place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":990},{"en":"part","zh":"部分","pos":"n.","example":"This is the hardest part.","exampleZh":"这是最难的部分。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":384},{"en":"particular","zh":"特定的","pos":"adj.","example":"Is there a particular reason?","exampleZh":"有什么特别的原因吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2042},{"en":"partner","zh":"伙伴；搭档","pos":"n.","example":"She is my business partner.","exampleZh":"她是我的生意伙伴。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":959},{"en":"party","zh":"聚会；政党","pos":"n.","example":"We had a birthday party.","exampleZh":"我们办了一个生日聚会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":429},{"en":"pass","zh":"经过；通过","pos":"v.","example":"We pass the school every morning.","exampleZh":"我们每天早上经过那所学校。","forms":{"infinitive":"pass","present":"passes","ing":"passing","past":"passed","pastParticiple":"passed"},"defaultObject":"the salt","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":715},{"en":"passion","zh":"热情","pos":"n.","example":"She has a passion for music.","exampleZh":"她对音乐充满热情。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2673},{"en":"past","zh":"过去","pos":"n.","example":"Do not live in the past.","exampleZh":"别活在过去。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":651},{"en":"patch","zh":"补丁；小块","pos":"n.","example":"There is a patch of grass here.","exampleZh":"这里有一小片草地。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2941},{"en":"path","zh":"小路","pos":"n.","example":"A path leads to the river.","exampleZh":"有条小路通向河边。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2276},{"en":"pathetic","zh":"可悲的","pos":"adj.","example":"His excuse was pathetic.","exampleZh":"他的借口很可悲。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2300},{"en":"patient","zh":"病人","pos":"n.","example":"The doctor saw twenty patients today.","exampleZh":"医生今天看了二十个病人。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1099},{"en":"pay","zh":"支付","pos":"v.","example":"Please pay the bill.","exampleZh":"请付账单。","forms":{"infinitive":"pay","present":"pays","ing":"paying","past":"paid","pastParticiple":"paid"},"defaultObject":"the bill","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":390},{"en":"peace","zh":"和平","pos":"n.","example":"We hope for world peace.","exampleZh":"我们希望世界和平。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1028},{"en":"pen","zh":"钢笔","pos":"n.","example":"May I borrow your pen?","exampleZh":"我能借你的笔吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2270},{"en":"people","zh":"人们","pos":"n.","example":"Many people like sports.","exampleZh":"很多人喜欢运动。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":127},{"en":"per","zh":"每","pos":"prep.","example":"It costs ten yuan per person.","exampleZh":"每人十块钱。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2439},{"en":"percent","zh":"百分之","pos":"n.","example":"Only ten percent of them came.","exampleZh":"他们中只有百分之十来了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2189},{"en":"perfect","zh":"完美的","pos":"adj.","example":"Your English is perfect.","exampleZh":"你的英语很完美。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":563},{"en":"performance","zh":"表演；表现","pos":"n.","example":"Her performance was excellent.","exampleZh":"她的表演很出色。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2479},{"en":"perhaps","zh":"也许","pos":"adv.","example":"Perhaps we should ask someone.","exampleZh":"也许我们该问问别人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":619},{"en":"period","zh":"时期；一段时间","pos":"n.","example":"It rained for a long period.","exampleZh":"雨下了很长一段时间。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2046},{"en":"permission","zh":"许可","pos":"n.","example":"You need permission to enter.","exampleZh":"进入需要许可。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1893},{"en":"person","zh":"人","pos":"n.","example":"She is a kind person.","exampleZh":"她是一个善良的人。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":464},{"en":"personal","zh":"个人的","pos":"adj.","example":"It is a personal question.","exampleZh":"这是个人问题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":811},{"en":"pet","zh":"宠物","pos":"n.","example":"I have a pet dog.","exampleZh":"我有一只宠物狗。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2631},{"en":"phone","zh":"电话","pos":"n.","example":"Please answer the phone.","exampleZh":"请接电话。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":377},{"en":"photo","zh":"照片","pos":"n.","example":"I took a photo of the mountain.","exampleZh":"我拍了山的照片。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2401},{"en":"physical","zh":"身体的","pos":"adj.","example":"The job needs physical strength.","exampleZh":"这份工作需要体力。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2085},{"en":"piano","zh":"钢琴","pos":"n.","example":"She plays the piano every evening.","exampleZh":"她每晚弹钢琴。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2254},{"en":"pick","zh":"挑选；摘","pos":"v.","example":"Please pick up the pen.","exampleZh":"请捡起那支笔。","forms":{"infinitive":"pick","present":"picks","ing":"picking","past":"picked","pastParticiple":"picked"},"defaultObject":"something","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":484},{"en":"picture","zh":"图片；照片","pos":"n.","example":"Show me the picture again.","exampleZh":"再给我看看那张照片。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":613},{"en":"pie","zh":"馅饼","pos":"n.","example":"I ate a piece of pie.","exampleZh":"我吃了一块派。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1995},{"en":"piece","zh":"片；块","pos":"n.","example":"Please give me a piece of paper.","exampleZh":"请给我一张纸。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":647},{"en":"pig","zh":"猪","pos":"n.","example":"The pig is eating.","exampleZh":"猪在吃东西。","forms":null,"defaultObject":null,"tags":["food","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1572},{"en":"pills","zh":"药片","pos":"n.","example":"Take two pills after dinner.","exampleZh":"晚饭后吃两片药。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2257},{"en":"pilot","zh":"飞行员","pos":"n.","example":"The pilot landed the plane safely.","exampleZh":"飞行员安全降落了飞机。","forms":null,"defaultObject":null,"tags":["transport","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2114},{"en":"pink","zh":"粉色的","pos":"adj.","example":"She wore a pink dress.","exampleZh":"她穿了条粉色裙子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2011},{"en":"pipe","zh":"管子","pos":"n.","example":"The pipe under the sink leaks.","exampleZh":"水槽下的管子漏水。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2707},{"en":"pity","zh":"同情；可惜","pos":"n.","example":"What a pity you cannot come.","exampleZh":"你来不了真可惜。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2355},{"en":"pizza","zh":"披萨","pos":"n.","example":"We ordered a large pizza.","exampleZh":"我们点了个大披萨。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1769},{"en":"place","zh":"地方","pos":"n.","example":"This is a good place to study.","exampleZh":"这是一个学习的好地方。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":196},{"en":"plain","zh":"朴素的；平原","pos":"adj.","example":"The food tastes plain.","exampleZh":"这食物味道清淡。","forms":null,"defaultObject":null,"tags":["food","object","general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2478},{"en":"plan","zh":"计划","pos":"n.","example":"We have a plan for the trip.","exampleZh":"我们有旅行的计划。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":596},{"en":"plane","zh":"飞机","pos":"n.","example":"I will travel by plane.","exampleZh":"我将乘飞机旅行。","forms":null,"defaultObject":null,"tags":["transport","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":787},{"en":"planet","zh":"行星","pos":"n.","example":"Which planet is closest to us?","exampleZh":"哪颗行星离我们最近？","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1584},{"en":"plant","zh":"植物；种植","pos":"n.","example":"We plant trees in spring.","exampleZh":"我们在春天种树。","forms":null,"defaultObject":null,"tags":["nature","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2057},{"en":"plastic","zh":"塑料","pos":"n.","example":"Please do not use plastic bags.","exampleZh":"请不要用塑料袋。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2776},{"en":"plate","zh":"盘子","pos":"n.","example":"Please pass me the plate.","exampleZh":"请把盘子递给我。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2198},{"en":"play","zh":"玩；播放","pos":"v.","example":"I play basketball after school.","exampleZh":"我放学后打篮球。","forms":{"infinitive":"play","present":"plays","ing":"playing","past":"played","pastParticiple":"played"},"defaultObject":"a game","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":299},{"en":"player","zh":"运动员；播放器","pos":"n.","example":"He is a football player.","exampleZh":"他是一名足球运动员。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1617},{"en":"pleasant","zh":"愉快的","pos":"adj.","example":"We had a pleasant walk.","exampleZh":"我们散步很愉快。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2557},{"en":"please","zh":"请","pos":"int.","example":"Please sit down.","exampleZh":"请坐下。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":128},{"en":"pleasure","zh":"愉快","pos":"n.","example":"It was a pleasure to meet you.","exampleZh":"很高兴认识你。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":906},{"en":"plenty","zh":"大量","pos":"n.","example":"There is plenty of time.","exampleZh":"时间还很充裕。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1118},{"en":"plus","zh":"加上","pos":"prep.","example":"Two plus three is five.","exampleZh":"二加三等于五。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1378},{"en":"pocket","zh":"口袋","pos":"n.","example":"There is a key in my pocket.","exampleZh":"我口袋里有一把钥匙。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1688},{"en":"point","zh":"点；指","pos":"v.","example":"Please point to the door.","exampleZh":"请指向门。","forms":{"infinitive":"point","present":"points","ing":"pointing","past":"pointed","pastParticiple":"pointed"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":420},{"en":"poison","zh":"毒药","pos":"n.","example":"Poison is very dangerous.","exampleZh":"毒药非常危险。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2277},{"en":"police","zh":"警察","pos":"n.","example":"The police caught the thief.","exampleZh":"警察抓住了小偷。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":422},{"en":"policy","zh":"政策","pos":"n.","example":"The company changed its policy.","exampleZh":"公司改了政策。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2097},{"en":"political","zh":"政治的","pos":"adj.","example":"They avoid political topics.","exampleZh":"他们避谈政治话题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2475},{"en":"pool","zh":"游泳池","pos":"n.","example":"We swim in the pool.","exampleZh":"我们在泳池里游泳。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1380},{"en":"poor","zh":"可怜的；贫穷的","pos":"adj.","example":"The poor dog was wet and cold.","exampleZh":"那只可怜的狗又湿又冷。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":638},{"en":"pop","zh":"流行的","pos":"v.","example":"The balloon popped.","exampleZh":"气球爆了。","forms":{"infinitive":"pop","present":"pops","ing":"popping","past":"popped","pastParticiple":"popped"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1056},{"en":"popular","zh":"受欢迎的","pos":"adj.","example":"This song is very popular now.","exampleZh":"这首歌现在很火。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2384},{"en":"position","zh":"职位；位置","pos":"n.","example":"She got a new position last month.","exampleZh":"她上个月拿到了新职位。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":992},{"en":"positive","zh":"积极的；确定的","pos":"adj.","example":"Try to stay positive.","exampleZh":"尽量保持乐观。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1868},{"en":"possibility","zh":"可能性","pos":"n.","example":"There is a possibility of rain.","exampleZh":"有可能下雨。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2617},{"en":"possible","zh":"可能的","pos":"adj.","example":"Is it possible to change the date?","exampleZh":"日期能改吗？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":688},{"en":"possibly","zh":"可能","pos":"adv.","example":"Could you possibly help me?","exampleZh":"你能帮我一下吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1335},{"en":"post","zh":"邮寄；柱子","pos":"n.","example":"I will post the letter.","exampleZh":"我要去寄信。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1829},{"en":"pot","zh":"锅；壶","pos":"n.","example":"The pot is on the stove.","exampleZh":"锅在炉子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2429},{"en":"potential","zh":"潜力","pos":"n.","example":"She has great potential.","exampleZh":"她很有潜力。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2771},{"en":"pounds","zh":"英镑；磅","pos":"n.","example":"The bag weighs three pounds.","exampleZh":"这包重三磅。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1883},{"en":"power","zh":"力量；电力","pos":"n.","example":"The power went out last night.","exampleZh":"昨晚停电了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":582},{"en":"powerful","zh":"强大的","pos":"adj.","example":"That is a powerful engine.","exampleZh":"那是台强劲的发动机。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1712},{"en":"practically","zh":"几乎；实际上","pos":"adv.","example":"The shop is practically empty.","exampleZh":"店里几乎没人。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2399},{"en":"practice","zh":"练习","pos":"v.","example":"Practice makes perfect.","exampleZh":"熟能生巧。","forms":{"infinitive":"practice","present":"practices","ing":"practicing","past":"practiced","pastParticiple":"practiced"},"defaultObject":"the piano","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1405},{"en":"pray","zh":"祈祷","pos":"v.","example":"She prays every morning.","exampleZh":"她每天早上祈祷。","forms":{"infinitive":"pray","present":"prays","ing":"praying","past":"prayed","pastParticiple":"prayed"},"defaultObject":"for rain","tags":["daily"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1668},{"en":"precious","zh":"珍贵的","pos":"adj.","example":"Time is precious.","exampleZh":"时间很宝贵。","forms":null,"defaultObject":null,"tags":["daily","general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2365},{"en":"prefer","zh":"更喜欢","pos":"v.","example":"I prefer tea to coffee.","exampleZh":"比起咖啡我更喜欢茶。","forms":{"infinitive":"prefer","present":"prefers","ing":"preferring","past":"preferred","pastParticiple":"preferred"},"defaultObject":"tea","tags":["food"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1806},{"en":"pregnant","zh":"怀孕的","pos":"adj.","example":"His sister is pregnant.","exampleZh":"他姐姐怀孕了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1278},{"en":"prepare","zh":"准备","pos":"v.","example":"She is preparing dinner now.","exampleZh":"她正在准备晚饭。","forms":{"infinitive":"prepare","present":"prepares","ing":"preparing","past":"prepared","pastParticiple":"prepared"},"defaultObject":"dinner","tags":["food"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1767},{"en":"presence","zh":"在场","pos":"n.","example":"Your presence means a lot.","exampleZh":"你能来意义重大。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2574},{"en":"present","zh":"礼物；现在的","pos":"n.","example":"I got a present for my birthday.","exampleZh":"我生日收到了一份礼物。","forms":null,"defaultObject":null,"tags":["daily","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":826},{"en":"president","zh":"总统；总裁","pos":"n.","example":"The president spoke on TV last night.","exampleZh":"总统昨晚在电视上讲话。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":606},{"en":"press","zh":"按；压","pos":"v.","example":"Press this button to start.","exampleZh":"按这个键启动。","forms":{"infinitive":"press","present":"presses","ing":"pressing","past":"pressed","pastParticiple":"pressed"},"defaultObject":"the button","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1144},{"en":"pressure","zh":"压力","pos":"n.","example":"Do not give him too much pressure.","exampleZh":"别给他太大压力。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1253},{"en":"pretend","zh":"假装","pos":"v.","example":"She pretended not to hear me.","exampleZh":"她假装没听见我。","forms":{"infinitive":"pretend","present":"pretends","ing":"pretending","past":"pretended","pastParticiple":"pretended"},"defaultObject":"to sleep","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1549},{"en":"pretty","zh":"相当；很","pos":"adv.","example":"The film was pretty good.","exampleZh":"这部电影相当不错。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":282},{"en":"previously","zh":"此前","pos":"adv.","example":"She previously worked in Beijing.","exampleZh":"她此前在北京工作。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2869},{"en":"price","zh":"价格","pos":"n.","example":"The price is too high.","exampleZh":"价格太高了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1247},{"en":"pride","zh":"骄傲","pos":"n.","example":"She spoke with pride about her son.","exampleZh":"她自豪地谈起她儿子。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2050},{"en":"priest","zh":"牧师","pos":"n.","example":"The priest spoke very softly.","exampleZh":"牧师说话很轻。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2150},{"en":"prime","zh":"首要的；黄金的","pos":"adj.","example":"That is a prime location.","exampleZh":"那是黄金地段。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2842},{"en":"print","zh":"打印","pos":"v.","example":"Please print the document.","exampleZh":"请打印这份文件。","forms":{"infinitive":"print","present":"prints","ing":"printing","past":"printed","pastParticiple":"printed"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2649},{"en":"private","zh":"私人的","pos":"adj.","example":"That is a private matter.","exampleZh":"那是私事。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":952},{"en":"prize","zh":"奖品","pos":"n.","example":"She won the first prize.","exampleZh":"她得了一等奖。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2438},{"en":"probably","zh":"大概","pos":"adv.","example":"He is probably still asleep.","exampleZh":"他大概还在睡。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":366},{"en":"problem","zh":"问题","pos":"n.","example":"I have a math problem.","exampleZh":"我有一道数学题。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":322},{"en":"proceed","zh":"继续进行","pos":"v.","example":"Please proceed to the next step.","exampleZh":"请进行下一步。","forms":{"infinitive":"proceed","present":"proceeds","ing":"proceeding","past":"proceeded","pastParticiple":"proceeded"},"defaultObject":"slowly","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2570},{"en":"process","zh":"过程","pos":"n.","example":"The process takes two weeks.","exampleZh":"这个过程要两周。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2037},{"en":"professional","zh":"专业的","pos":"adj.","example":"She is a professional cook.","exampleZh":"她是专业厨师。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1839},{"en":"professor","zh":"教授","pos":"n.","example":"The professor explained it twice.","exampleZh":"教授解释了两遍。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1029},{"en":"program","zh":"程序；节目","pos":"n.","example":"I watched a good TV program.","exampleZh":"我看了一个好电视节目。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1487},{"en":"progress","zh":"进步","pos":"n.","example":"I made good progress in English.","exampleZh":"我的英语进步很大。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2534},{"en":"project","zh":"项目","pos":"n.","example":"The project takes three months.","exampleZh":"这个项目要三个月。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1630},{"en":"prom","zh":"毕业舞会","pos":"n.","example":"She wore a red dress to the prom.","exampleZh":"她穿红裙子去了毕业舞会。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2901},{"en":"promise","zh":"承诺","pos":"v.","example":"He promised to come back early.","exampleZh":"他答应早点回来。","forms":{"infinitive":"promise","present":"promises","ing":"promising","past":"promised","pastParticiple":"promised"},"defaultObject":"the truth","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":578},{"en":"proof","zh":"证据","pos":"n.","example":"Do you have any proof?","exampleZh":"你有证据吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1735},{"en":"proper","zh":"恰当的","pos":"adj.","example":"Wear proper shoes for the walk.","exampleZh":"走路要穿合适的鞋。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2229},{"en":"property","zh":"财产；房产","pos":"n.","example":"The property belongs to her aunt.","exampleZh":"这处房产是她姑姑的。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1784},{"en":"protect","zh":"保护","pos":"v.","example":"A hat will protect you from the sun.","exampleZh":"帽子能帮你挡太阳。","forms":{"infinitive":"protect","present":"protects","ing":"protecting","past":"protected","pastParticiple":"protected"},"defaultObject":"the children","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1013},{"en":"protection","zh":"保护","pos":"n.","example":"A hat gives good protection.","exampleZh":"帽子能很好地防晒。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2356},{"en":"proud","zh":"骄傲的","pos":"adj.","example":"Her parents are proud of her.","exampleZh":"她父母为她骄傲。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":884},{"en":"prove","zh":"证明","pos":"v.","example":"He proved that he was right.","exampleZh":"他证明了自己是对的。","forms":{"infinitive":"prove","present":"proves","ing":"proving","past":"proved","pastParticiple":"proved"},"defaultObject":"the point","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1011},{"en":"provide","zh":"提供","pos":"v.","example":"The hotel provides free breakfast.","exampleZh":"酒店提供免费早餐。","forms":{"infinitive":"provide","present":"provides","ing":"providing","past":"provided","pastParticiple":"provided"},"defaultObject":"breakfast","tags":["food"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2939},{"en":"public","zh":"公共的","pos":"adj.","example":"This is a public park.","exampleZh":"这是个公园。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":997},{"en":"pull","zh":"拉","pos":"v.","example":"Please pull the door open.","exampleZh":"请把门拉开。","forms":{"infinitive":"pull","present":"pulls","ing":"pulling","past":"pulled","pastParticiple":"pulled"},"defaultObject":"the rope","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":595},{"en":"pulse","zh":"脉搏","pos":"n.","example":"The nurse checked my pulse.","exampleZh":"护士给我量了脉搏。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2352},{"en":"pure","zh":"纯的","pos":"adj.","example":"This is pure honey.","exampleZh":"这是纯蜂蜜。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2248},{"en":"purpose","zh":"目的","pos":"n.","example":"What is the purpose of this meeting?","exampleZh":"这次会议的目的是什么？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1716},{"en":"purse","zh":"钱包","pos":"n.","example":"She left her purse in the taxi.","exampleZh":"她把钱包落在出租车上了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2674},{"en":"push","zh":"推","pos":"v.","example":"Please push the door.","exampleZh":"请推门。","forms":{"infinitive":"push","present":"pushes","ing":"pushing","past":"pushed","pastParticiple":"pushed"},"defaultObject":"the door","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1010},{"en":"put","zh":"放","pos":"v.","example":"Please put the book on the desk.","exampleZh":"请把书放在桌子上。","forms":{"infinitive":"put","present":"puts","ing":"putting","past":"put","pastParticiple":"put"},"defaultObject":"it back","tags":["school","object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":153},{"en":"quality","zh":"质量","pos":"n.","example":"The quality of this coat is good.","exampleZh":"这件外套质量不错。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2809},{"en":"quarter","zh":"四分之一","pos":"n.","example":"The shop opens at a quarter past ten.","exampleZh":"商店十点一刻开门。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2168},{"en":"queen","zh":"女王","pos":"n.","example":"The queen lives in the palace.","exampleZh":"女王住在宫殿里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1225},{"en":"question","zh":"问题","pos":"n.","example":"May I ask a question?","exampleZh":"我可以问一个问题吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":485},{"en":"quick","zh":"快的","pos":"adj.","example":"Be quick! We are late.","exampleZh":"快点！我们迟到了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":713},{"en":"quickly","zh":"很快地","pos":"adv.","example":"She finished her lunch quickly.","exampleZh":"她很快吃完了午饭。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1199},{"en":"quiet","zh":"安静的","pos":"adj.","example":"Please be quiet in the library.","exampleZh":"在图书馆请保持安静。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":680},{"en":"quit","zh":"退出","pos":"v.","example":"Do not quit when things get hard.","exampleZh":"困难时不要放弃。","forms":{"infinitive":"quit","present":"quits","ing":"quitting","past":"quit","pastParticiple":"quit"},"defaultObject":"something","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":822},{"en":"quite","zh":"相当","pos":"adv.","example":"The film is quite good.","exampleZh":"这部电影相当好。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":478},{"en":"rabbit","zh":"兔子","pos":"n.","example":"The rabbit has long ears.","exampleZh":"兔子有很长耳朵。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2566},{"en":"race","zh":"比赛；种族","pos":"n.","example":"He won the race easily.","exampleZh":"他轻松赢了比赛。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1123},{"en":"radio","zh":"收音机","pos":"n.","example":"I listen to the radio every morning.","exampleZh":"我每天早上听收音机。","forms":null,"defaultObject":null,"tags":["nature","daily","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":937},{"en":"rain","zh":"雨","pos":"n.","example":"The rain is heavy today.","exampleZh":"今天雨很大。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1336},{"en":"raise","zh":"举起；抚养","pos":"v.","example":"Raise your hand if you know.","exampleZh":"知道的话就举手。","forms":{"infinitive":"raise","present":"raises","ing":"raising","past":"raised","pastParticiple":"raised"},"defaultObject":"your hand","tags":["school"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1216},{"en":"ranch","zh":"牧场","pos":"n.","example":"His family runs a small ranch.","exampleZh":"他家经营一个小牧场。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2923},{"en":"range","zh":"范围","pos":"n.","example":"The price range is quite wide.","exampleZh":"价格范围很宽。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2410},{"en":"rare","zh":"罕见的","pos":"adj.","example":"Snow is rare in this city.","exampleZh":"这座城市很少下雪。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2525},{"en":"rat","zh":"老鼠","pos":"n.","example":"There is a rat in the garden.","exampleZh":"花园里有只老鼠。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1821},{"en":"rate","zh":"比率；速度","pos":"n.","example":"The rate is going up.","exampleZh":"比率在上升。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2249},{"en":"rather","zh":"宁愿；相当","pos":"adv.","example":"I would rather stay at home tonight.","exampleZh":"今晚我宁愿待在家。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":687},{"en":"ray","zh":"光线","pos":"n.","example":"A ray of sunlight came in.","exampleZh":"一束阳光照了进来。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":778},{"en":"reach","zh":"到达；够到","pos":"v.","example":"I cannot reach the top shelf.","exampleZh":"我够不到最上层的架子。","forms":{"infinitive":"reach","present":"reaches","ing":"reaching","past":"reached","pastParticiple":"reached"},"defaultObject":"the shelf","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1192},{"en":"read","zh":"读","pos":"v.","example":"I read a book every night.","exampleZh":"我每晚读一本书。","forms":{"infinitive":"read","present":"reads","ing":"reading","past":"read","pastParticiple":"read"},"defaultObject":"a book","tags":["school","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":412},{"en":"ready","zh":"准备好的","pos":"adj.","example":"Dinner is ready.","exampleZh":"晚饭准备好了。","forms":null,"defaultObject":null,"tags":["general","food"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":283},{"en":"real","zh":"真实的","pos":"adj.","example":"Is this a real story?","exampleZh":"这是真事吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":260},{"en":"reality","zh":"现实","pos":"n.","example":"Reality is harder than the plan.","exampleZh":"现实比计划难。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1920},{"en":"realize","zh":"意识到","pos":"v.","example":"I did not realize it was so late.","exampleZh":"我没意识到已经这么晚了。","forms":{"infinitive":"realize","present":"realizes","ing":"realizing","past":"realized","pastParticiple":"realized"},"defaultObject":"it","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":923},{"en":"really","zh":"真正地","pos":"adv.","example":"I really like this song.","exampleZh":"我真的很喜欢这首歌。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":103},{"en":"reason","zh":"原因","pos":"n.","example":"Tell me the reason for your choice.","exampleZh":"告诉我你选择的原因。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":494},{"en":"reasonable","zh":"合理的","pos":"adj.","example":"The price seems reasonable.","exampleZh":"价格看着合理。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2813},{"en":"recall","zh":"回想起","pos":"v.","example":"I cannot recall her name.","exampleZh":"我想不起她的名字。","forms":{"infinitive":"recall","present":"recalls","ing":"recalling","past":"recalled","pastParticiple":"recalled"},"defaultObject":"her name","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2682},{"en":"receive","zh":"收到","pos":"v.","example":"I received your letter yesterday.","exampleZh":"我昨天收到了你的信。","forms":{"infinitive":"receive","present":"receives","ing":"receiving","past":"received","pastParticiple":"received"},"defaultObject":"a letter","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2697},{"en":"recently","zh":"最近","pos":"adv.","example":"I saw her recently.","exampleZh":"我最近见过她。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2164},{"en":"recognize","zh":"认出","pos":"v.","example":"I did not recognize you at first.","exampleZh":"我一开始没认出你。","forms":{"infinitive":"recognize","present":"recognizes","ing":"recognizing","past":"recognized","pastParticiple":"recognized"},"defaultObject":"the face","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1737},{"en":"record","zh":"记录；唱片","pos":"n.","example":"Keep a record of what you spend.","exampleZh":"记录你的花销。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":866},{"en":"red","zh":"红色的","pos":"adj.","example":"The apple is red.","exampleZh":"苹果是红色的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":587},{"en":"refuse","zh":"拒绝","pos":"v.","example":"She refused the offer politely.","exampleZh":"她礼貌地拒绝了。","forms":{"infinitive":"refuse","present":"refuses","ing":"refusing","past":"refused","pastParticiple":"refused"},"defaultObject":"the offer","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2560},{"en":"regret","zh":"后悔","pos":"v.","example":"I regret not studying harder.","exampleZh":"我后悔没有更努力学习。","forms":{"infinitive":"regret","present":"regrets","ing":"regretting","past":"regretted","pastParticiple":"regretted"},"defaultObject":"something","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2089},{"en":"regular","zh":"经常的；常规的","pos":"adj.","example":"He is a regular customer here.","exampleZh":"他是这里的常客。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1754},{"en":"relationship","zh":"关系","pos":"n.","example":"They have a good relationship.","exampleZh":"他们关系很好。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1053},{"en":"relax","zh":"放松","pos":"v.","example":"Please relax and take a rest.","exampleZh":"请放松休息一下。","forms":{"infinitive":"relax","present":"relaxes","ing":"relaxing","past":"relaxed","pastParticiple":"relaxed"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":781},{"en":"release","zh":"释放；发布","pos":"v.","example":"They released the new song today.","exampleZh":"他们今天发布了新歌。","forms":{"infinitive":"release","present":"releases","ing":"releasing","past":"released","pastParticiple":"released"},"defaultObject":"the news","tags":["daily"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1664},{"en":"remain","zh":"保持；剩下","pos":"v.","example":"Please remain in your seat.","exampleZh":"请留在座位上。","forms":{"infinitive":"remain","present":"remains","ing":"remaining","past":"remained","pastParticiple":"remained"},"defaultObject":"here","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1788},{"en":"remember","zh":"记得","pos":"v.","example":"I remember her name.","exampleZh":"我记得她的名字。","forms":{"infinitive":"remember","present":"remembers","ing":"rememberring","past":"rememberred","pastParticiple":"rememberred"},"defaultObject":"the day","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":213},{"en":"remind","zh":"提醒","pos":"v.","example":"Please remind me to call her.","exampleZh":"请提醒我给她打电话。","forms":{"infinitive":"remind","present":"reminds","ing":"reminding","past":"reminded","pastParticiple":"reminded"},"defaultObject":"me","tags":["daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1644},{"en":"remove","zh":"移除","pos":"v.","example":"Please remove your shoes here.","exampleZh":"请在这里脱鞋。","forms":{"infinitive":"remove","present":"removes","ing":"removing","past":"removed","pastParticiple":"removed"},"defaultObject":"your shoes","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2535},{"en":"rent","zh":"租","pos":"v.","example":"We rent a small flat downtown.","exampleZh":"我们在市中心租了套小公寓。","forms":{"infinitive":"rent","present":"rents","ing":"renting","past":"rented","pastParticiple":"rented"},"defaultObject":"a flat","tags":["place"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1731},{"en":"repeat","zh":"重复","pos":"v.","example":"Could you repeat the question?","exampleZh":"能重复一下问题吗？","forms":{"infinitive":"repeat","present":"repeats","ing":"repeating","past":"repeated","pastParticiple":"repeated"},"defaultObject":"the question","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1803},{"en":"report","zh":"报告","pos":"n.","example":"I need to write a report.","exampleZh":"我需要写一份报告。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":717},{"en":"reputation","zh":"名声","pos":"n.","example":"The shop has a good reputation.","exampleZh":"这家店名声很好。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2718},{"en":"request","zh":"请求","pos":"n.","example":"Your request has been sent.","exampleZh":"你的请求已发送。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2204},{"en":"research","zh":"研究","pos":"n.","example":"Her research takes a lot of time.","exampleZh":"她的研究很花时间。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1798},{"en":"respect","zh":"尊重","pos":"n.","example":"He has great respect for his teacher.","exampleZh":"他很尊重他的老师。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":993},{"en":"responsible","zh":"负责的","pos":"adj.","example":"Who is responsible for this?","exampleZh":"这事谁负责？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1427},{"en":"rest","zh":"休息","pos":"n.","example":"Let us take a rest.","exampleZh":"我们休息一下吧。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":463},{"en":"restaurant","zh":"餐厅","pos":"n.","example":"We found a small restaurant nearby.","exampleZh":"我们在附近找到家小餐厅。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1388},{"en":"result","zh":"结果","pos":"n.","example":"The result surprised everyone.","exampleZh":"结果让大家吃惊。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2672},{"en":"return","zh":"返回；归还","pos":"v.","example":"Please return the book by Friday.","exampleZh":"请在周五前还书。","forms":{"infinitive":"return","present":"returns","ing":"returning","past":"returned","pastParticiple":"returned"},"defaultObject":"the book","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":810},{"en":"reward","zh":"奖励","pos":"n.","example":"He got a reward for good work.","exampleZh":"他因工作好而得到了奖励。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2873},{"en":"rich","zh":"富有的","pos":"adj.","example":"The rich man has many houses.","exampleZh":"那个富人有很多房子。","forms":null,"defaultObject":null,"tags":["place","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":909},{"en":"rid","zh":"摆脱","pos":"v.","example":"I want to get rid of this old sofa.","exampleZh":"我想扔掉这张旧沙发。","forms":{"infinitive":"rid","present":"rids","ing":"ridding","past":"ridded","pastParticiple":"ridded"},"defaultObject":"of it","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1149},{"en":"ride","zh":"骑","pos":"v.","example":"I ride my bicycle to school.","exampleZh":"我骑自行车上学。","forms":{"infinitive":"ride","present":"rides","ing":"riding","past":"rode","pastParticiple":"ridden"},"defaultObject":"a bike","tags":["transport","school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":621},{"en":"ridiculous","zh":"荒唐的","pos":"adj.","example":"That price is ridiculous.","exampleZh":"那价格太离谱了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1211},{"en":"right","zh":"右边；正确的","pos":"adj.","example":"Turn right at the corner.","exampleZh":"在拐角处右转。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":45},{"en":"ring","zh":"戒指；铃声","pos":"n.","example":"She wears a ring on her finger.","exampleZh":"她手指上戴着一枚戒指。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":808},{"en":"rip","zh":"撕","pos":"v.","example":"He ripped the paper in half.","exampleZh":"他把纸撕成两半。","forms":{"infinitive":"rip","present":"rips","ing":"ripping","past":"ripped","pastParticiple":"ripped"},"defaultObject":"the paper","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2632},{"en":"rise","zh":"上升","pos":"v.","example":"The sun rises in the east.","exampleZh":"太阳从东方升起。","forms":{"infinitive":"rise","present":"rises","ing":"rising","past":"rose","pastParticiple":"risen"},"defaultObject":"something","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2069},{"en":"risk","zh":"冒险","pos":"v.","example":"Do not risk your health for money.","exampleZh":"别为钱拿健康冒险。","forms":{"infinitive":"risk","present":"risks","ing":"risking","past":"risked","pastParticiple":"risked"},"defaultObject":"it","tags":["body"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1332},{"en":"river","zh":"河流","pos":"n.","example":"The river flows to the sea.","exampleZh":"河水流入大海。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1213},{"en":"road","zh":"路","pos":"n.","example":"The road is under repair.","exampleZh":"这条路正在修。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":695},{"en":"rock","zh":"岩石；摇滚","pos":"n.","example":"The rock is very heavy.","exampleZh":"石头非常重。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":856},{"en":"role","zh":"角色；作用","pos":"n.","example":"She played a small role in the film.","exampleZh":"她在电影里演了个小角色。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2854},{"en":"roll","zh":"滚动","pos":"v.","example":"The ball rolled under the car.","exampleZh":"球滚到车底下了。","forms":{"infinitive":"roll","present":"rolls","ing":"rolling","past":"rolled","pastParticiple":"rolled"},"defaultObject":"the ball","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1103},{"en":"romantic","zh":"浪漫的","pos":"adj.","example":"It was a romantic dinner.","exampleZh":"那是顿浪漫的晚餐。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1707},{"en":"roof","zh":"屋顶","pos":"n.","example":"The roof leaks when it rains.","exampleZh":"下雨时屋顶漏水。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1692},{"en":"room","zh":"房间","pos":"n.","example":"My room is on the second floor.","exampleZh":"我的房间在二楼。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":261},{"en":"rope","zh":"绳子","pos":"n.","example":"We tied the boat with a rope.","exampleZh":"我们用绳子把船系住。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2417},{"en":"rose","zh":"玫瑰","pos":"n.","example":"The rose is red and beautiful.","exampleZh":"玫瑰是红色而美丽的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1257},{"en":"rotten","zh":"腐烂的","pos":"adj.","example":"The fruit went rotten.","exampleZh":"水果烂了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2934},{"en":"rough","zh":"粗糙的；艰难的","pos":"adj.","example":"It has been a rough week.","exampleZh":"这周很难熬。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1628},{"en":"round","zh":"圆的；一轮","pos":"adj.","example":"The table is round.","exampleZh":"这桌子是圆的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1064},{"en":"route","zh":"路线","pos":"n.","example":"We took a different route home.","exampleZh":"我们换了条路回家。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2522},{"en":"routine","zh":"常规","pos":"n.","example":"My morning routine never changes.","exampleZh":"我早上的习惯从不变。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2664},{"en":"row","zh":"排；划船","pos":"n.","example":"We sit in the front row.","exampleZh":"我们坐在前排。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2138},{"en":"royal","zh":"皇家的","pos":"adj.","example":"We visited the royal garden.","exampleZh":"我们参观了皇家花园。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2375},{"en":"rude","zh":"粗鲁的","pos":"adj.","example":"It is rude to interrupt others.","exampleZh":"打断别人说话是很不礼貌的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2458},{"en":"ruin","zh":"毁掉","pos":"v.","example":"The rain ruined our picnic.","exampleZh":"雨毁了我们的野餐。","forms":{"infinitive":"ruin","present":"ruins","ing":"ruining","past":"ruined","pastParticiple":"ruined"},"defaultObject":"the picnic","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2005},{"en":"rule","zh":"规则","pos":"n.","example":"We must follow the rules.","exampleZh":"我们必须遵守规则。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1353},{"en":"run","zh":"跑","pos":"v.","example":"I run every morning.","exampleZh":"我每天早上跑步。","forms":{"infinitive":"run","present":"runs","ing":"running","past":"ran","pastParticiple":"run"},"defaultObject":"a race","tags":["nature","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":303},{"en":"rush","zh":"冲；匆忙","pos":"v.","example":"Do not rush when you walk.","exampleZh":"走路时不要跑。","forms":{"infinitive":"rush","present":"rushes","ing":"rushing","past":"rushed","pastParticiple":"rushed"},"defaultObject":"something","tags":["transport"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1877},{"en":"sacrifice","zh":"牺牲","pos":"n.","example":"Her parents made many sacrifices.","exampleZh":"她父母做了很多牺牲。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2886},{"en":"sad","zh":"悲伤的","pos":"adj.","example":"I am sad today.","exampleZh":"我今天很伤心。","forms":null,"defaultObject":null,"tags":["emotion","nature","daily","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1101},{"en":"safe","zh":"安全的","pos":"adj.","example":"The street is safe at night.","exampleZh":"这条街晚上很安全。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":602},{"en":"safety","zh":"安全","pos":"n.","example":"Safety comes first.","exampleZh":"安全第一。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1836},{"en":"said","zh":"说（过去式）","pos":"v.","example":"She said she would come.","exampleZh":"她说她会来。","forms":{"infinitive":"said","present":"saids","ing":"saiding","past":"saided","pastParticiple":"saided"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":125},{"en":"sake","zh":"缘故","pos":"n.","example":"For your own sake, get some rest.","exampleZh":"为了你自己好，休息一下。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1093},{"en":"salad","zh":"沙拉","pos":"n.","example":"I like eating salad.","exampleZh":"我喜欢吃沙拉。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2980},{"en":"sale","zh":"销售","pos":"n.","example":"The sale ends today.","exampleZh":"促销今天结束。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2219},{"en":"salt","zh":"盐","pos":"n.","example":"Please pass the salt.","exampleZh":"请把盐递给我。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2693},{"en":"same","zh":"相同的","pos":"adj.","example":"We are in the same class.","exampleZh":"我们在同一个班。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":274},{"en":"sand","zh":"沙子","pos":"n.","example":"The beach is full of sand.","exampleZh":"沙滩上满是沙子。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2619},{"en":"sandwich","zh":"三明治","pos":"n.","example":"I ate a sandwich for lunch.","exampleZh":"我午餐吃了一个三明治。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2469},{"en":"sat","zh":"坐（过去式）","pos":"v.","example":"I sat on the chair.","exampleZh":"我坐在椅子上。","forms":{"infinitive":"sat","present":"sats","ing":"satting","past":"satted","pastParticiple":"satted"},"defaultObject":"something","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2000},{"en":"saturday","zh":"星期六","pos":"n.","example":"We have no school on Saturday.","exampleZh":"我们周六不上课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1368},{"en":"save","zh":"救；节省","pos":"v.","example":"Please save your work.","exampleZh":"请保存你的作业。","forms":{"infinitive":"save","present":"saves","ing":"saving","past":"saved","pastParticiple":"saved"},"defaultObject":"money","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":555},{"en":"saw","zh":"看见（过去式）；锯","pos":"v.","example":"I saw a bird in the tree.","exampleZh":"我在树上看到了一只鸟。","forms":{"infinitive":"saw","present":"saws","ing":"sawing","past":"sawed","pastParticiple":"sawed"},"defaultObject":"something","tags":["nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":280},{"en":"say","zh":"说","pos":"v.","example":"Please say that again.","exampleZh":"请再说一遍。","forms":{"infinitive":"say","present":"says","ing":"saying","past":"said","pastParticiple":"said"},"defaultObject":"hello","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":99},{"en":"scare","zh":"吓；使害怕","pos":"v.","example":"The noise scared the cat.","exampleZh":"那声音吓到猫了。","forms":{"infinitive":"scare","present":"scares","ing":"scaring","past":"scared","pastParticiple":"scared"},"defaultObject":"the cat","tags":["emotion"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1765},{"en":"scared","zh":"受惊的","pos":"adj.","example":"The child looked scared.","exampleZh":"孩子看起来很害怕。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":625},{"en":"scary","zh":"可怕的","pos":"adj.","example":"The movie is scary.","exampleZh":"这部电影很恐怖。","forms":null,"defaultObject":null,"tags":["transport","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2148},{"en":"scene","zh":"场景","pos":"n.","example":"The scene in the park is beautiful.","exampleZh":"公园里的景色很美。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":964},{"en":"schedule","zh":"日程","pos":"n.","example":"My schedule is full this week.","exampleZh":"我这周日程满了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1943},{"en":"school","zh":"学校","pos":"n.","example":"Our school is very big.","exampleZh":"我们的学校非常大。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":321},{"en":"science","zh":"科学","pos":"n.","example":"Science was hard for me at school.","exampleZh":"上学时科学对我很难。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1635},{"en":"score","zh":"分数","pos":"n.","example":"What is the score of the game?","exampleZh":"比赛比分是多少？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1913},{"en":"scratch","zh":"抓；划痕","pos":"v.","example":"The cat scratched the door.","exampleZh":"猫抓了门。","forms":{"infinitive":"scratch","present":"scratches","ing":"scratching","past":"scratched","pastParticiple":"scratched"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2767},{"en":"scream","zh":"尖叫","pos":"v.","example":"She screamed when she saw the mouse.","exampleZh":"她看到老鼠时尖叫起来。","forms":{"infinitive":"scream","present":"screams","ing":"screaming","past":"screamed","pastParticiple":"screamed"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2135},{"en":"screen","zh":"屏幕","pos":"n.","example":"Please turn off the screen.","exampleZh":"请关掉屏幕。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2362},{"en":"script","zh":"剧本；手稿","pos":"n.","example":"He wrote the script for the play.","exampleZh":"他为戏剧写了剧本。","forms":null,"defaultObject":null,"tags":["school","body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2688},{"en":"sea","zh":"海","pos":"n.","example":"The sea is blue.","exampleZh":"大海是蓝色的。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1150},{"en":"search","zh":"搜索","pos":"v.","example":"I searched everywhere for my keys.","exampleZh":"我到处找我的钥匙。","forms":{"infinitive":"search","present":"searches","ing":"searching","past":"searched","pastParticiple":"searched"},"defaultObject":"the room","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1347},{"en":"season","zh":"季节","pos":"n.","example":"Spring is my favorite season.","exampleZh":"春天是我最喜欢的季节。","forms":null,"defaultObject":null,"tags":["emotion","nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1875},{"en":"seat","zh":"座位","pos":"n.","example":"Is this seat free?","exampleZh":"这个座位有人吗？","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":926},{"en":"second","zh":"第二；秒","pos":"num.","example":"This is my second book.","exampleZh":"这是我的第二本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":361},{"en":"secret","zh":"秘密","pos":"n.","example":"Please keep this secret.","exampleZh":"请保守这个秘密。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":708},{"en":"secretary","zh":"秘书","pos":"n.","example":"His secretary answered the phone.","exampleZh":"他的秘书接了电话。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1790},{"en":"section","zh":"部分","pos":"n.","example":"Read the first section tonight.","exampleZh":"今晚读第一部分。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2075},{"en":"secure","zh":"确保；安全的","pos":"v.","example":"Please secure the door.","exampleZh":"请把门关牢。","forms":{"infinitive":"secure","present":"secures","ing":"securing","past":"secured","pastParticiple":"secured"},"defaultObject":"the door","tags":["place"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2291},{"en":"security","zh":"安全；保安","pos":"n.","example":"Security checked my bag.","exampleZh":"保安检查了我的包。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":798},{"en":"see","zh":"看见","pos":"v.","example":"I can see the mountain.","exampleZh":"我能看到那座山。","forms":{"infinitive":"see","present":"sees","ing":"seeing","past":"saw","pastParticiple":"seen"},"defaultObject":"a bird","tags":["nature"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":67},{"en":"seek","zh":"寻找","pos":"v.","example":"I seek the answer.","exampleZh":"我寻找答案。","forms":{"infinitive":"seek","present":"seeks","ing":"seeking","past":"sought","pastParticiple":"sought"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2839},{"en":"seem","zh":"似乎","pos":"v.","example":"You seem very happy.","exampleZh":"你看起来很开心。","forms":{"infinitive":"seem","present":"seems","ing":"seeming","past":"seemed","pastParticiple":"seemed"},"defaultObject":"something","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":608},{"en":"seen","zh":"看见（过去分词）","pos":"v.","example":"I have seen that movie.","exampleZh":"我看过那部电影。","forms":{"infinitive":"seen","present":"seens","ing":"seening","past":"seened","pastParticiple":"seened"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":286},{"en":"sell","zh":"卖","pos":"v.","example":"The shop sells books.","exampleZh":"这家店卖书。","forms":{"infinitive":"sell","present":"sells","ing":"selling","past":"sold","pastParticiple":"sold"},"defaultObject":"a house","tags":["school","place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":809},{"en":"send","zh":"发送","pos":"v.","example":"Please send me a message.","exampleZh":"请给我发一条消息。","forms":{"infinitive":"send","present":"sends","ing":"sending","past":"sent","pastParticiple":"sent"},"defaultObject":"an email","tags":["body"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":521},{"en":"senior","zh":"年长的；资深的","pos":"adj.","example":"She is a senior nurse here.","exampleZh":"她是这里的资深护士。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2142},{"en":"sense","zh":"感觉；道理","pos":"n.","example":"That makes sense to me.","exampleZh":"这我能理解。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":629},{"en":"sensitive","zh":"敏感的","pos":"adj.","example":"She is sensitive about her age.","exampleZh":"她对年龄很敏感。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2428},{"en":"sent","zh":"发送（过去式）","pos":"v.","example":"I sent a letter to my friend.","exampleZh":"我给朋友寄了一封信。","forms":{"infinitive":"sent","present":"sents","ing":"senting","past":"sented","pastParticiple":"sented"},"defaultObject":"something","tags":["body"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":616},{"en":"sentence","zh":"句子","pos":"n.","example":"Write a sentence with this word.","exampleZh":"用这个词造个句。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2603},{"en":"separate","zh":"分开","pos":"v.","example":"Separate the eggs from the flour.","exampleZh":"把鸡蛋和面粉分开。","forms":{"infinitive":"separate","present":"separates","ing":"separating","past":"separated","pastParticiple":"separated"},"defaultObject":"them","tags":["food"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2490},{"en":"series","zh":"系列","pos":"n.","example":"We watched the whole series.","exampleZh":"我们看完了整个剧集。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2633},{"en":"serious","zh":"严肃的","pos":"adj.","example":"This is a serious problem.","exampleZh":"这是一个严重的问题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":585},{"en":"seriously","zh":"认真地","pos":"adv.","example":"Are you seriously going to do that?","exampleZh":"你真要那么做吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1096},{"en":"serve","zh":"服务","pos":"v.","example":"She serves food at the restaurant.","exampleZh":"她在餐厅端菜。","forms":{"infinitive":"serve","present":"serves","ing":"serving","past":"served","pastParticiple":"served"},"defaultObject":"something","tags":["food"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1613},{"en":"service","zh":"服务","pos":"n.","example":"The service here is very good.","exampleZh":"这里服务很好。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":912},{"en":"set","zh":"设置；一套","pos":"v.","example":"Please set the table.","exampleZh":"请摆好餐具。","forms":{"infinitive":"set","present":"sets","ing":"setting","past":"set","pastParticiple":"set"},"defaultObject":"something","tags":["food","object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":430},{"en":"settle","zh":"解决；安顿","pos":"v.","example":"They settled the problem quickly.","exampleZh":"他们很快解决了问题。","forms":{"infinitive":"settle","present":"settles","ing":"settling","past":"settled","pastParticiple":"settled"},"defaultObject":"the bill","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1506},{"en":"seven","zh":"七","pos":"num.","example":"We meet at seven every Monday.","exampleZh":"我们每周一七点见。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":727},{"en":"several","zh":"几个","pos":"det.","example":"I called her several times.","exampleZh":"我给她打了好几次电话。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1583},{"en":"shadow","zh":"影子","pos":"n.","example":"The tree has a long shadow.","exampleZh":"树有很长的影子。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2544},{"en":"shake","zh":"摇；抖","pos":"v.","example":"His hands were shaking.","exampleZh":"他的手在抖。","forms":{"infinitive":"shake","present":"shakes","ing":"shaking","past":"shook","pastParticiple":"shaken"},"defaultObject":"his hand","tags":["body"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1560},{"en":"shall","zh":"将要","pos":"modal v.","example":"Shall we go now?","exampleZh":"我们现在走吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":512},{"en":"shame","zh":"羞愧；遗憾","pos":"n.","example":"It is a shame you cannot come.","exampleZh":"你来不了真可惜。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1519},{"en":"shape","zh":"形状；状态","pos":"n.","example":"The cake is in the shape of a heart.","exampleZh":"蛋糕是心形的。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1921},{"en":"share","zh":"分享","pos":"v.","example":"Please share your food with me.","exampleZh":"请和我分享你的食物。","forms":{"infinitive":"share","present":"shares","ing":"sharing","past":"shared","pastParticiple":"shared"},"defaultObject":"the food","tags":["food","object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1031},{"en":"sharp","zh":"锋利的","pos":"adj.","example":"Be careful, the knife is sharp.","exampleZh":"小心，刀很快。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2332},{"en":"she","zh":"她","pos":"pron.","example":"She is my good friend.","exampleZh":"她是我的好朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":49},{"en":"shift","zh":"轮班；转变","pos":"n.","example":"She works the night shift.","exampleZh":"她上夜班。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2405},{"en":"shine","zh":"发光","pos":"v.","example":"The sun shines brightly.","exampleZh":"太阳明亮地照耀着。","forms":{"infinitive":"shine","present":"shines","ing":"shining","past":"shone","pastParticiple":"shone"},"defaultObject":"something","tags":["body","nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2591},{"en":"ship","zh":"船","pos":"n.","example":"The ship sails on the sea.","exampleZh":"船在海上航行。","forms":null,"defaultObject":null,"tags":["transport","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":766},{"en":"shirt","zh":"衬衫","pos":"n.","example":"I bought a new shirt.","exampleZh":"我买了一件新衬衫。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1389},{"en":"shock","zh":"震惊","pos":"n.","example":"The news was a shock to everyone.","exampleZh":"这消息让大家很震惊。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1992},{"en":"shoe","zh":"鞋","pos":"n.","example":"Put on your shoes.","exampleZh":"穿上你的鞋。","forms":null,"defaultObject":null,"tags":["daily","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1916},{"en":"shoot","zh":"射击","pos":"v.","example":"Don\'t shoot the birds.","exampleZh":"不要射杀鸟儿。","forms":{"infinitive":"shoot","present":"shoots","ing":"shooting","past":"shooted","pastParticiple":"shooted"},"defaultObject":"something","tags":["nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":550},{"en":"shop","zh":"商店","pos":"n.","example":"We buy food at the shop.","exampleZh":"我们在商店买食物。","forms":null,"defaultObject":null,"tags":["food","place","object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1242},{"en":"shore","zh":"岸","pos":"n.","example":"We walked along the shore.","exampleZh":"我们沿岸边走。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2661},{"en":"short","zh":"短的；矮的","pos":"adj.","example":"The film is very short.","exampleZh":"这部电影很短。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":865},{"en":"shot","zh":"射击；镜头","pos":"n.","example":"He took a shot at the goal.","exampleZh":"他射了一次门。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":434},{"en":"should","zh":"应该","pos":"modal v.","example":"You should study hard.","exampleZh":"你应该努力学习。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":135},{"en":"shoulder","zh":"肩膀","pos":"n.","example":"My shoulder hurts.","exampleZh":"我的肩膀疼。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2147},{"en":"show","zh":"展示","pos":"v.","example":"Please show me your book.","exampleZh":"请给我看你的书。","forms":{"infinitive":"show","present":"shows","ing":"showing","past":"showed","pastParticiple":"showed"},"defaultObject":"the way","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":232},{"en":"shut","zh":"关闭","pos":"v.","example":"Please shut the window.","exampleZh":"请关上窗户。","forms":{"infinitive":"shut","present":"shuts","ing":"shutting","past":"shut","pastParticiple":"shut"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":382},{"en":"shy","zh":"害羞的","pos":"adj.","example":"She is a shy girl.","exampleZh":"她是一个害羞的女孩。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2833},{"en":"sick","zh":"生病的","pos":"adj.","example":"I feel sick today.","exampleZh":"我今天感觉不舒服。","forms":null,"defaultObject":null,"tags":["emotion","nature","daily","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":548},{"en":"side","zh":"边；一方","pos":"n.","example":"Please stand on this side.","exampleZh":"请站在这一边。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":481},{"en":"sight","zh":"视力；景象","pos":"n.","example":"The sunset is a beautiful sight.","exampleZh":"日落是一幅美丽的景象。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1418},{"en":"sign","zh":"标志；迹象","pos":"n.","example":"The sign says the shop is closed.","exampleZh":"牌子上说店关门了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":627},{"en":"signal","zh":"信号","pos":"n.","example":"There is no signal here.","exampleZh":"这里没信号。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1618},{"en":"silence","zh":"沉默","pos":"n.","example":"There was a long silence.","exampleZh":"有很长一段沉默。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2222},{"en":"silent","zh":"沉默的","pos":"adj.","example":"The room went silent.","exampleZh":"房间安静了下来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2387},{"en":"silly","zh":"傻的","pos":"adj.","example":"That was a silly mistake.","exampleZh":"那是个愚蠢的错误。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1189},{"en":"silver","zh":"银","pos":"n.","example":"She wore a silver necklace.","exampleZh":"她戴着银项链。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1864},{"en":"simple","zh":"简单的","pos":"adj.","example":"The answer is very simple.","exampleZh":"答案很简单。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":831},{"en":"simply","zh":"仅仅；简单地","pos":"adv.","example":"I simply do not have time.","exampleZh":"我就是没时间。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1391},{"en":"since","zh":"自从；因为","pos":"conj.","example":"I have not seen him since last year.","exampleZh":"我从去年起就没见过他。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":332},{"en":"sing","zh":"唱歌","pos":"v.","example":"I like to sing.","exampleZh":"我喜欢唱歌。","forms":{"infinitive":"sing","present":"sings","ing":"singing","past":"sang","pastParticiple":"sung"},"defaultObject":"a song","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":774},{"en":"singing","zh":"唱歌","pos":"n.","example":"Singing makes me happy.","exampleZh":"唱歌让我快乐。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1439},{"en":"single","zh":"单个的；单身的","pos":"adj.","example":"Not a single person came.","exampleZh":"一个人都没来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":991},{"en":"sink","zh":"水槽；下沉","pos":"v.","example":"The stone sank in the water.","exampleZh":"石头沉入了水中。","forms":{"infinitive":"sink","present":"sinks","ing":"sinking","past":"sank","pastParticiple":"sunk"},"defaultObject":"something","tags":["body","nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2992},{"en":"sister","zh":"姐妹","pos":"n.","example":"My sister is a teacher.","exampleZh":"我的姐姐是一名老师。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":519},{"en":"sit","zh":"坐","pos":"v.","example":"Please sit down.","exampleZh":"请坐下。","forms":{"infinitive":"sit","present":"sits","ing":"sitting","past":"sat","pastParticiple":"sat"},"defaultObject":"here","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":334},{"en":"site","zh":"地点；网站","pos":"n.","example":"The building site is closed today.","exampleZh":"工地今天关闭。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2724},{"en":"situation","zh":"情况","pos":"n.","example":"The situation is getting better.","exampleZh":"情况在好转。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":893},{"en":"six","zh":"六","pos":"num.","example":"I have six pencils.","exampleZh":"我有六支铅笔。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["it_is_adj"],"rank":482},{"en":"size","zh":"大小","pos":"n.","example":"What size is your shirt?","exampleZh":"你的衬衫是多大号的？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1394},{"en":"skin","zh":"皮肤","pos":"n.","example":"She has fair skin.","exampleZh":"她的皮肤很白。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1453},{"en":"skip","zh":"跳过","pos":"v.","example":"I skipped breakfast today.","exampleZh":"我今天没吃早饭。","forms":{"infinitive":"skip","present":"skips","ing":"skipping","past":"skipped","pastParticiple":"skipped"},"defaultObject":"breakfast","tags":["food"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2548},{"en":"sky","zh":"天空","pos":"n.","example":"The sky turned grey.","exampleZh":"天变灰了。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1436},{"en":"sleep","zh":"睡觉","pos":"v.","example":"I sleep eight hours every night.","exampleZh":"我每晚睡八小时。","forms":{"infinitive":"sleep","present":"sleeps","ing":"sleeping","past":"slept","pastParticiple":"slept"},"defaultObject":"well","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":433},{"en":"slide","zh":"滑动","pos":"v.","example":"The children slide on the snow.","exampleZh":"孩子们在雪上滑行。","forms":{"infinitive":"slide","present":"slides","ing":"sliding","past":"slided","pastParticiple":"slided"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2894},{"en":"slip","zh":"滑倒","pos":"v.","example":"Don\'t slip on the ice.","exampleZh":"不要在冰上滑倒。","forms":{"infinitive":"slip","present":"slips","ing":"slipping","past":"slipped","pastParticiple":"slipped"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2178},{"en":"slow","zh":"慢的","pos":"adj.","example":"The turtle is very slow.","exampleZh":"乌龟非常慢。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":951},{"en":"small","zh":"小的","pos":"adj.","example":"The room is very small.","exampleZh":"这个房间很小。","forms":null,"defaultObject":null,"tags":["place","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":645},{"en":"smart","zh":"聪明的","pos":"adj.","example":"She is a smart student.","exampleZh":"她是一个聪明的学生。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":784},{"en":"smell","zh":"闻；气味","pos":"v.","example":"I smell flowers.","exampleZh":"我闻到了花香。","forms":{"infinitive":"smell","present":"smells","ing":"smelling","past":"smelled","pastParticiple":"smelled"},"defaultObject":"something","tags":["food","nature"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":888},{"en":"smile","zh":"微笑","pos":"v.","example":"She smiles at me.","exampleZh":"她对我微笑。","forms":{"infinitive":"smile","present":"smiles","ing":"smiling","past":"smiled","pastParticiple":"smiled"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1182},{"en":"smoke","zh":"烟；吸烟","pos":"n.","example":"Don\'t smoke in the room.","exampleZh":"不要在房间里抽烟。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1077},{"en":"smooth","zh":"光滑的；顺利的","pos":"adj.","example":"The road is smooth here.","exampleZh":"这里路很平。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2846},{"en":"snake","zh":"蛇","pos":"n.","example":"The snake is dangerous.","exampleZh":"蛇是危险的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2441},{"en":"snap","zh":"折断","pos":"v.","example":"The twig snapped.","exampleZh":"树枝啪的一声断了。","forms":{"infinitive":"snap","present":"snaps","ing":"snapping","past":"snapped","pastParticiple":"snapped"},"defaultObject":"something","tags":["nature"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2942},{"en":"sneak","zh":"偷偷地走","pos":"v.","example":"He sneaked out the back door.","exampleZh":"他从后门溜了出去。","forms":{"infinitive":"sneak","present":"sneaks","ing":"sneaking","past":"sneaked","pastParticiple":"sneaked"},"defaultObject":"out","tags":["place"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2996},{"en":"snow","zh":"雪","pos":"n.","example":"We play in the snow.","exampleZh":"我们在雪里玩。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1879},{"en":"so","zh":"所以；如此","pos":"adv.","example":"I am tired, so I go to bed.","exampleZh":"我累了，所以去睡觉了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":43},{"en":"social","zh":"社会的","pos":"adj.","example":"We are social animals.","exampleZh":"我们是社交性动物。","forms":null,"defaultObject":null,"tags":["nature","object","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1781},{"en":"society","zh":"社会","pos":"n.","example":"Society is changing fast.","exampleZh":"社会变化很快。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1808},{"en":"socks","zh":"袜子","pos":"n.","example":"I cannot find my socks.","exampleZh":"我找不到袜子了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2848},{"en":"soda","zh":"汽水","pos":"n.","example":"He drinks too much soda.","exampleZh":"他汽水喝太多了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2665},{"en":"soft","zh":"软的","pos":"adj.","example":"The bread is still soft.","exampleZh":"面包还是软的。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1851},{"en":"solid","zh":"结实的","pos":"adj.","example":"The table is solid wood.","exampleZh":"这桌子是实木的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2689},{"en":"solution","zh":"解决办法","pos":"n.","example":"We found a simple solution.","exampleZh":"我们找到了个简单办法。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":3158},{"en":"solve","zh":"解决","pos":"v.","example":"We solved the problem together.","exampleZh":"我们一起解决了问题。","forms":{"infinitive":"solve","present":"solves","ing":"solving","past":"solved","pastParticiple":"solved"},"defaultObject":"the problem","tags":["school"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2694},{"en":"some","zh":"一些","pos":"adj.","example":"I have some questions.","exampleZh":"我有一些问题。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":92},{"en":"somebody","zh":"某人","pos":"pron.","example":"Somebody left an umbrella here.","exampleZh":"有人把伞落在这儿了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":308},{"en":"someday","zh":"总有一天","pos":"adv.","example":"Someday I will visit Japan.","exampleZh":"总有一天我会去日本。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1757},{"en":"somehow","zh":"不知怎么地","pos":"adv.","example":"Somehow she always knows.","exampleZh":"不知怎么的她总是知道。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1419},{"en":"someone","zh":"某人","pos":"pron.","example":"Someone is knocking at the door.","exampleZh":"有人在敲门。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":259},{"en":"someplace","zh":"某个地方","pos":"adv.","example":"Let us go someplace quiet.","exampleZh":"我们找个安静的地方吧。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1871},{"en":"something","zh":"某事","pos":"pron.","example":"I want something to eat.","exampleZh":"我想吃点什么。","forms":null,"defaultObject":null,"tags":["food","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":102},{"en":"sometime","zh":"某个时候","pos":"adv.","example":"Let us have dinner sometime.","exampleZh":"我们找个时间一起吃饭吧。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1783},{"en":"sometimes","zh":"有时","pos":"adv.","example":"Sometimes I walk to work.","exampleZh":"我有时走路上班。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":523},{"en":"somewhere","zh":"某处","pos":"adv.","example":"I left my phone somewhere in the house.","exampleZh":"我把手机落在家里某个地方了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":699},{"en":"son","zh":"儿子","pos":"n.","example":"Their son is ten years old.","exampleZh":"他们的儿子十岁。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":278},{"en":"song","zh":"歌曲","pos":"n.","example":"She sings a beautiful song.","exampleZh":"她唱了一首美妙的歌。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":805},{"en":"soon","zh":"不久","pos":"adv.","example":"See you soon!","exampleZh":"回头见！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":387},{"en":"sorry","zh":"对不起","pos":"adj.","example":"I am sorry for being late.","exampleZh":"对不起，我迟到了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":120},{"en":"sort","zh":"种类","pos":"n.","example":"What sort of music do you like?","exampleZh":"你喜欢哪种音乐？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":583},{"en":"soul","zh":"灵魂","pos":"n.","example":"There was not a soul in the street.","exampleZh":"街上一个人也没有。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":942},{"en":"sound","zh":"声音","pos":"n.","example":"The sound of rain is nice.","exampleZh":"雨声很悦耳。","forms":null,"defaultObject":null,"tags":["body","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":601},{"en":"soup","zh":"汤","pos":"n.","example":"The soup is too hot to eat.","exampleZh":"汤太烫了没法喝。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2235},{"en":"source","zh":"来源","pos":"n.","example":"What is the source of this news?","exampleZh":"这消息的来源是什么？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2025},{"en":"south","zh":"南","pos":"n.","example":"They moved to the south last year.","exampleZh":"他们去年搬到南方了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1089},{"en":"space","zh":"空间；太空","pos":"n.","example":"The desk takes up too much space.","exampleZh":"桌子占用了太多空间。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1069},{"en":"spare","zh":"备用的；抽出","pos":"adj.","example":"Do you have a spare key?","exampleZh":"你有备用钥匙吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1900},{"en":"speak","zh":"说话","pos":"v.","example":"Please speak loudly.","exampleZh":"请大声说话。","forms":{"infinitive":"speak","present":"speaks","ing":"speaking","past":"spoke","pastParticiple":"spoken"},"defaultObject":"English","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":506},{"en":"special","zh":"特别的","pos":"adj.","example":"Today is a special day.","exampleZh":"今天是一个特别的日子。","forms":null,"defaultObject":null,"tags":["nature","daily","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":584},{"en":"specific","zh":"具体的","pos":"adj.","example":"Can you be more specific?","exampleZh":"你能说具体点吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2896},{"en":"speech","zh":"演讲","pos":"n.","example":"His speech was very short.","exampleZh":"他的演讲很短。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1607},{"en":"speed","zh":"速度","pos":"n.","example":"The speed of the car is fast.","exampleZh":"车的速度很快。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1525},{"en":"spell","zh":"拼写","pos":"v.","example":"Please spell your name.","exampleZh":"请拼写你的名字。","forms":{"infinitive":"spell","present":"spells","ing":"spelling","past":"spelled","pastParticiple":"spelled"},"defaultObject":"something","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1656},{"en":"spend","zh":"花费","pos":"v.","example":"I spend two hours on homework.","exampleZh":"我花两小时做作业。","forms":{"infinitive":"spend","present":"spends","ing":"spending","past":"spent","pastParticiple":"spent"},"defaultObject":"money","tags":["school","nature","place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":806},{"en":"spent","zh":"花费（过去式）","pos":"v.","example":"I spent my holiday at home.","exampleZh":"我在家度过了假期。","forms":{"infinitive":"spent","present":"spents","ing":"spenting","past":"spented","pastParticiple":"spented"},"defaultObject":"something","tags":["nature","place","daily"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1017},{"en":"spirit","zh":"精神","pos":"n.","example":"She has a strong spirit.","exampleZh":"她精神很坚强。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1328},{"en":"spit","zh":"吐","pos":"v.","example":"Don\'t spit on the ground.","exampleZh":"不要在地上吐痰。","forms":{"infinitive":"spit","present":"spits","ing":"spitting","past":"spitted","pastParticiple":"spitted"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2711},{"en":"split","zh":"分裂","pos":"v.","example":"Please split the cake.","exampleZh":"请把蛋糕切开。","forms":{"infinitive":"split","present":"splits","ing":"splitting","past":"splitted","pastParticiple":"splitted"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1599},{"en":"sport","zh":"运动","pos":"n.","example":"I like sports.","exampleZh":"我喜欢运动。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2658},{"en":"sports","zh":"运动","pos":"n.","example":"Sports are good for health.","exampleZh":"运动对健康有益。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2059},{"en":"spot","zh":"地点；斑点","pos":"n.","example":"This is a nice spot for lunch.","exampleZh":"这地方适合吃午饭。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1128},{"en":"spread","zh":"传播","pos":"v.","example":"Please spread the map.","exampleZh":"请把地图摊开。","forms":{"infinitive":"spread","present":"spreads","ing":"spreading","past":"spread","pastParticiple":"spread"},"defaultObject":"something","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1881},{"en":"spring","zh":"春天；弹簧","pos":"n.","example":"Spring is warm and sunny.","exampleZh":"春天温暖而阳光明媚。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1880},{"en":"square","zh":"广场；正方形","pos":"n.","example":"We sat in the town square.","exampleZh":"我们坐在城镇广场上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1863},{"en":"staff","zh":"员工","pos":"n.","example":"The staff here are very friendly.","exampleZh":"这里的员工很友好。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1855},{"en":"stage","zh":"阶段；舞台","pos":"n.","example":"We are at an early stage.","exampleZh":"我们还在早期阶段。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1414},{"en":"stairs","zh":"楼梯","pos":"n.","example":"The stairs are very steep.","exampleZh":"楼梯很陡。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2335},{"en":"stand","zh":"站立","pos":"v.","example":"Please stand up.","exampleZh":"请站起来。","forms":{"infinitive":"stand","present":"stands","ing":"standing","past":"stood","pastParticiple":"stood"},"defaultObject":"up","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":437},{"en":"standard","zh":"标准","pos":"n.","example":"The hotel meets a high standard.","exampleZh":"这家酒店达到了高标准。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2825},{"en":"star","zh":"星星","pos":"n.","example":"The stars shine at night.","exampleZh":"星星在夜里闪耀。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":900},{"en":"start","zh":"开始","pos":"v.","example":"Let\'s start the lesson.","exampleZh":"我们开始上课吧。","forms":{"infinitive":"start","present":"starts","ing":"starting","past":"started","pastParticiple":"started"},"defaultObject":"the car","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":315},{"en":"starve","zh":"挨饿","pos":"v.","example":"I am starving, let us eat.","exampleZh":"我饿死了，吃饭吧。","forms":{"infinitive":"starve","present":"starves","ing":"starving","past":"starved","pastParticiple":"starved"},"defaultObject":"all day","tags":["food"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":6016},{"en":"state","zh":"状态；州","pos":"n.","example":"China is a big state.","exampleZh":"中国是一个大国。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":718},{"en":"statement","zh":"陈述","pos":"n.","example":"He made a short statement.","exampleZh":"他做了简短陈述。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1968},{"en":"station","zh":"车站","pos":"n.","example":"The train station is near.","exampleZh":"火车站在附近。","forms":null,"defaultObject":null,"tags":["transport","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":922},{"en":"stay","zh":"停留","pos":"v.","example":"Please stay here.","exampleZh":"请呆在这里。","forms":{"infinitive":"stay","present":"stays","ing":"staying","past":"stayed","pastParticiple":"stayed"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":219},{"en":"steady","zh":"稳定的","pos":"adj.","example":"Keep the ladder steady.","exampleZh":"把梯子扶稳。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2415},{"en":"steal","zh":"偷","pos":"v.","example":"Someone stole my bike last night.","exampleZh":"昨晚有人偷了我的自行车。","forms":{"infinitive":"steal","present":"steals","ing":"stealing","past":"stealed","pastParticiple":"stealed"},"defaultObject":"the money","tags":["transport"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1248},{"en":"steel","zh":"钢","pos":"n.","example":"The bridge is built of steel.","exampleZh":"这座桥是钢造的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2822},{"en":"step","zh":"步；台阶","pos":"n.","example":"Watch your step here.","exampleZh":"这里小心台阶。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":672},{"en":"stick","zh":"粘；插","pos":"v.","example":"Stick this note on the door.","exampleZh":"把这张便条贴在门上。","forms":{"infinitive":"stick","present":"sticks","ing":"sticking","past":"sticked","pastParticiple":"sticked"},"defaultObject":"the note","tags":["object"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":780},{"en":"still","zh":"仍然","pos":"adv.","example":"I am still doing my homework.","exampleZh":"我还在做作业。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":162},{"en":"stock","zh":"库存；股票","pos":"n.","example":"That size is out of stock.","exampleZh":"那个尺码没货了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2213},{"en":"stomach","zh":"胃","pos":"n.","example":"I have a stomach ache.","exampleZh":"我肚子疼。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1758},{"en":"stone","zh":"石头","pos":"n.","example":"The stone is heavy.","exampleZh":"石头很重。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1540},{"en":"stood","zh":"站（过去式）","pos":"v.","example":"I stood up to answer the question.","exampleZh":"我站起来回答问题。","forms":{"infinitive":"stood","present":"stoods","ing":"stooding","past":"stooded","pastParticiple":"stooded"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2185},{"en":"stop","zh":"停止","pos":"v.","example":"Please stop talking.","exampleZh":"请停止说话。","forms":{"infinitive":"stop","present":"stops","ing":"stopping","past":"stopped","pastParticiple":"stopped"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":175},{"en":"store","zh":"商店；储存","pos":"n.","example":"I bought it at the store.","exampleZh":"我在商店买了它。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":897},{"en":"storm","zh":"暴风雨","pos":"n.","example":"A storm is coming tonight.","exampleZh":"今晚有暴风雨。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1899},{"en":"story","zh":"故事","pos":"n.","example":"She told me an interesting story.","exampleZh":"她给我讲了一个有趣的故事。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":447},{"en":"straight","zh":"直的","pos":"adj.","example":"Go straight ahead.","exampleZh":"一直往前走。","forms":null,"defaultObject":null,"tags":["body","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":658},{"en":"strange","zh":"奇怪的","pos":"adj.","example":"This is a strange dream.","exampleZh":"这是一个奇怪的梦。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":853},{"en":"street","zh":"街道","pos":"n.","example":"The street is busy.","exampleZh":"街道很繁忙。","forms":null,"defaultObject":null,"tags":["transport","nature","place"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":586},{"en":"strength","zh":"力量","pos":"n.","example":"I did not have the strength to argue.","exampleZh":"我没力气争辩。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1646},{"en":"strike","zh":"打击；罢工","pos":"v.","example":"The clock struck twelve.","exampleZh":"钟敲了十二下。","forms":{"infinitive":"strike","present":"strikes","ing":"striking","past":"striked","pastParticiple":"striked"},"defaultObject":"the ball","tags":["object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1413},{"en":"strong","zh":"强壮的","pos":"adj.","example":"He is a strong boy.","exampleZh":"他是一个强壮的男孩。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":848},{"en":"stuck","zh":"卡住的","pos":"adj.","example":"The door is stuck.","exampleZh":"门卡住了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1063},{"en":"student","zh":"学生","pos":"n.","example":"I am a student.","exampleZh":"我是一名学生。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1480},{"en":"studio","zh":"工作室","pos":"n.","example":"She paints in a small studio.","exampleZh":"她在一间小工作室画画。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2367},{"en":"study","zh":"学习；研究","pos":"v.","example":"She studies at the library every day.","exampleZh":"她每天在图书馆学习。","forms":{"infinitive":"study","present":"studies","ing":"studying","past":"studied","pastParticiple":"studied"},"defaultObject":"English","tags":["school"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1333},{"en":"stuff","zh":"东西","pos":"n.","example":"Put your stuff on the chair.","exampleZh":"把你的东西放椅子上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":340},{"en":"style","zh":"风格","pos":"n.","example":"I like her writing style.","exampleZh":"我喜欢她的写作风格。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1929},{"en":"subject","zh":"科目；话题","pos":"n.","example":"Math is my favorite subject.","exampleZh":"数学是我最喜欢的科目。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1643},{"en":"success","zh":"成功","pos":"n.","example":"The party was a success.","exampleZh":"派对很成功。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2082},{"en":"successful","zh":"成功的","pos":"adj.","example":"The trip was successful.","exampleZh":"这趟旅行很成功。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2615},{"en":"such","zh":"这样的","pos":"det.","example":"I have never seen such a big dog.","exampleZh":"我从没见过这么大的狗。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":354},{"en":"suck","zh":"吸","pos":"v.","example":"Don\'t suck your thumb.","exampleZh":"不要吮吸你的大拇指。","forms":{"infinitive":"suck","present":"sucks","ing":"sucking","past":"sucked","pastParticiple":"sucked"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1724},{"en":"sudden","zh":"突然的","pos":"adj.","example":"There was a sudden noise outside.","exampleZh":"外面突然有声音。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1771},{"en":"suddenly","zh":"突然","pos":"adv.","example":"Suddenly the lights went out.","exampleZh":"突然灯灭了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1207},{"en":"suffer","zh":"受苦","pos":"v.","example":"He suffers from back pain.","exampleZh":"他受背痛的折磨。","forms":{"infinitive":"suffer","present":"suffers","ing":"sufferring","past":"sufferred","pastParticiple":"sufferred"},"defaultObject":"from pain","tags":["body"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2430},{"en":"sugar","zh":"糖","pos":"n.","example":"I like coffee with sugar.","exampleZh":"我喜欢加糖的咖啡。","forms":null,"defaultObject":null,"tags":["food","emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1616},{"en":"suggest","zh":"建议","pos":"v.","example":"I suggest we leave early.","exampleZh":"我建议我们早点走。","forms":{"infinitive":"suggest","present":"suggests","ing":"suggesting","past":"suggested","pastParticiple":"suggested"},"defaultObject":"a plan","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1570},{"en":"suit","zh":"适合；套装","pos":"n.","example":"He wears a suit to work.","exampleZh":"他穿西装去上班。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1046},{"en":"summer","zh":"夏天","pos":"n.","example":"I like summer best.","exampleZh":"我最喜欢夏天。","forms":null,"defaultObject":null,"tags":["emotion","nature"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":929},{"en":"sun","zh":"太阳","pos":"n.","example":"The sun rises in the east.","exampleZh":"太阳从东方升起。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1026},{"en":"sunday","zh":"星期日","pos":"n.","example":"We have no school on Sunday.","exampleZh":"我们周日不上课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1475},{"en":"super","zh":"超级的","pos":"adj.","example":"That\'s a super idea.","exampleZh":"那主意好极了。","forms":null,"defaultObject":null,"tags":["place","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2149},{"en":"supper","zh":"晚饭","pos":"n.","example":"Supper is at seven.","exampleZh":"晚饭七点。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2709},{"en":"supply","zh":"供应","pos":"n.","example":"We have a good supply of water.","exampleZh":"我们水源充足。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2790},{"en":"support","zh":"支持","pos":"v.","example":"My family supports my decision.","exampleZh":"我家人支持我的决定。","forms":{"infinitive":"support","present":"supports","ing":"supporting","past":"supported","pastParticiple":"supported"},"defaultObject":"the plan","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1306},{"en":"suppose","zh":"猜想；假设","pos":"v.","example":"I suppose she is still working.","exampleZh":"我猜她还在工作。","forms":{"infinitive":"suppose","present":"supposes","ing":"supposing","past":"supposed","pastParticiple":"supposed"},"defaultObject":"so","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":644},{"en":"sure","zh":"确定的","pos":"adj.","example":"Are you sure?","exampleZh":"你确定吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":129},{"en":"surface","zh":"表面","pos":"n.","example":"The surface is still wet.","exampleZh":"表面还是湿的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2851},{"en":"surgery","zh":"手术","pos":"n.","example":"She had surgery last week.","exampleZh":"她上周做了手术。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1834},{"en":"surprise","zh":"惊喜","pos":"n.","example":"Her visit was a nice surprise.","exampleZh":"她来访是个惊喜。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":834},{"en":"survive","zh":"幸存","pos":"v.","example":"The plant survived the winter.","exampleZh":"这植物熬过了冬天。","forms":{"infinitive":"survive","present":"survives","ing":"surviving","past":"survived","pastParticiple":"survived"},"defaultObject":"the winter","tags":["nature"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1925},{"en":"swear","zh":"发誓","pos":"v.","example":"I swear I locked the door.","exampleZh":"我发誓我锁门了。","forms":{"infinitive":"swear","present":"swears","ing":"swearing","past":"sweared","pastParticiple":"sweared"},"defaultObject":"something","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":840},{"en":"sweat","zh":"汗","pos":"n.","example":"Sweat ran down his face.","exampleZh":"汗从他脸上流下来。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2474},{"en":"sweet","zh":"甜的","pos":"adj.","example":"The cake is very sweet.","exampleZh":"蛋糕非常甜。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":597},{"en":"sweetheart","zh":"甜心","pos":"n.","example":"Come here, sweetheart.","exampleZh":"过来，宝贝。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1094},{"en":"sweetie","zh":"宝贝","pos":"n.","example":"Sweetie, dinner is ready.","exampleZh":"宝贝，晚饭好了。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1243},{"en":"swell","zh":"肿胀","pos":"v.","example":"His ankle began to swell.","exampleZh":"他脚踝开始肿了。","forms":{"infinitive":"swell","present":"swells","ing":"swelling","past":"swelled","pastParticiple":"swelled"},"defaultObject":"up","tags":["body"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2582},{"en":"swim","zh":"游泳","pos":"v.","example":"I swim every weekend.","exampleZh":"我每个周末游泳。","forms":{"infinitive":"swim","present":"swims","ing":"swimming","past":"swam","pastParticiple":"swum"},"defaultObject":"a lap","tags":["daily"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1861},{"en":"swing","zh":"摇摆","pos":"n.","example":"We play on the swing.","exampleZh":"我们荡秋千。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2173},{"en":"switch","zh":"开关","pos":"n.","example":"The switch is by the door.","exampleZh":"开关在门边。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2031},{"en":"system","zh":"系统","pos":"n.","example":"The system is down again.","exampleZh":"系统又崩了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":814},{"en":"table","zh":"桌子","pos":"n.","example":"The book is on the table.","exampleZh":"书在桌子上。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":721},{"en":"tail","zh":"尾巴","pos":"n.","example":"The dog wags its tail.","exampleZh":"狗摇着它的尾巴。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2324},{"en":"take","zh":"拿；带","pos":"v.","example":"Please take the book.","exampleZh":"请把书拿走。","forms":{"infinitive":"take","present":"takes","ing":"taking","past":"took","pastParticiple":"taken"},"defaultObject":"a photo","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":85},{"en":"talent","zh":"天赋","pos":"n.","example":"She has a talent for music.","exampleZh":"她有音乐天赋。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2159},{"en":"talk","zh":"谈话","pos":"v.","example":"We talk on the phone every week.","exampleZh":"我们每周通电话。","forms":{"infinitive":"talk","present":"talks","ing":"talking","past":"talked","pastParticiple":"talked"},"defaultObject":"to him","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":147},{"en":"tall","zh":"高的","pos":"adj.","example":"Her son is very tall.","exampleZh":"她儿子很高。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1837},{"en":"tank","zh":"坦克；水箱","pos":"n.","example":"The fish tank is big.","exampleZh":"鱼缸很大。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2202},{"en":"tape","zh":"磁带；胶带","pos":"n.","example":"Please pass me the tape.","exampleZh":"请把胶带递给我。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1044},{"en":"target","zh":"目标","pos":"n.","example":"We reached our target this month.","exampleZh":"我们这个月达标了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1611},{"en":"taste","zh":"尝起来","pos":"v.","example":"This soup tastes wonderful.","exampleZh":"这汤尝起来很棒。","forms":{"infinitive":"taste","present":"tastes","ing":"tasting","past":"tasted","pastParticiple":"tasted"},"defaultObject":"the soup","tags":["food"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1291},{"en":"taxi","zh":"出租车","pos":"n.","example":"Let us take a taxi to the airport.","exampleZh":"我们打车去机场吧。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2184},{"en":"tea","zh":"茶","pos":"n.","example":"I drink tea every morning.","exampleZh":"我每天早上喝茶。","forms":null,"defaultObject":null,"tags":["food","nature","daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1175},{"en":"teach","zh":"教","pos":"v.","example":"She teaches English.","exampleZh":"她教英语。","forms":{"infinitive":"teach","present":"teaches","ing":"teaching","past":"taught","pastParticiple":"taught"},"defaultObject":"a lesson","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":981},{"en":"teacher","zh":"老师","pos":"n.","example":"Our teacher is very kind.","exampleZh":"我们的老师非常和蔼。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1210},{"en":"team","zh":"团队","pos":"n.","example":"We are a good team.","exampleZh":"我们是很好的团队。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":591},{"en":"tear","zh":"撕；眼泪","pos":"v.","example":"Do not tear the page.","exampleZh":"别把书页撕破。","forms":{"infinitive":"tear","present":"tears","ing":"tearing","past":"teared","pastParticiple":"teared"},"defaultObject":"the page","tags":["object"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2098},{"en":"telephone","zh":"电话","pos":"n.","example":"The telephone rang twice.","exampleZh":"电话响了两声。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1833},{"en":"television","zh":"电视","pos":"n.","example":"We watch television every night.","exampleZh":"我们每晚看电视。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1753},{"en":"tell","zh":"告诉","pos":"v.","example":"Please tell me the truth.","exampleZh":"请告诉我实话。","forms":{"infinitive":"tell","present":"tells","ing":"telling","past":"told","pastParticiple":"told"},"defaultObject":"a story","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":94},{"en":"temple","zh":"寺庙","pos":"n.","example":"The temple is on the hill.","exampleZh":"寺庙在山上。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2922},{"en":"ten","zh":"十","pos":"num.","example":"I have ten books.","exampleZh":"我有十本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["it_is_adj"],"rank":598},{"en":"tent","zh":"帐篷","pos":"n.","example":"We sleep in a tent.","exampleZh":"我们睡在帐篷里。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2932},{"en":"term","zh":"学期；术语","pos":"n.","example":"The term ends in June.","exampleZh":"学期六月结束。","forms":null,"defaultObject":null,"tags":["school","nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2935},{"en":"terrible","zh":"可怕的","pos":"adj.","example":"The weather is terrible.","exampleZh":"天气很糟糕。","forms":null,"defaultObject":null,"tags":["food","nature","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":803},{"en":"terribly","zh":"非常；糟糕地","pos":"adv.","example":"I am terribly sorry.","exampleZh":"我非常抱歉。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2345},{"en":"terrific","zh":"极好的","pos":"adj.","example":"That is a terrific idea.","exampleZh":"那主意太棒了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1510},{"en":"test","zh":"测试","pos":"n.","example":"We have a test next week.","exampleZh":"我们下周有考试。","forms":null,"defaultObject":null,"tags":["school","daily"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":880},{"en":"than","zh":"比","pos":"conj.","example":"I am taller than you.","exampleZh":"我比你高。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":167},{"en":"thank","zh":"感谢","pos":"v.","example":"Thank you for your help.","exampleZh":"谢谢你的帮助。","forms":{"infinitive":"thank","present":"thanks","ing":"thanking","past":"thanked","pastParticiple":"thanked"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":123},{"en":"that","zh":"那个","pos":"pron.","example":"That is my book.","exampleZh":"那是我的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":9},{"en":"the","zh":"这/那（定冠词）","pos":"art.","example":"The book is on the table.","exampleZh":"书在桌子上。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":3},{"en":"theater","zh":"剧院","pos":"n.","example":"The theater was almost full.","exampleZh":"剧院几乎坐满了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2312},{"en":"their","zh":"他们的","pos":"det.","example":"Their house is next to ours.","exampleZh":"他们家在我们家隔壁。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":185},{"en":"them","zh":"他们（宾格）","pos":"pron.","example":"I will tell them the news.","exampleZh":"我会告诉他们这个消息。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":89},{"en":"themselves","zh":"他们自己","pos":"pron.","example":"The children dressed themselves.","exampleZh":"孩子们自己穿好了衣服。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1399},{"en":"then","zh":"然后","pos":"adv.","example":"Wash your hands, then eat.","exampleZh":"洗手，然后吃饭。","forms":null,"defaultObject":null,"tags":["food","body","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":105},{"en":"theory","zh":"理论","pos":"n.","example":"That is only a theory.","exampleZh":"那只是个理论。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2001},{"en":"therapy","zh":"治疗","pos":"n.","example":"She started therapy last month.","exampleZh":"她上个月开始接受治疗。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2818},{"en":"there","zh":"那里","pos":"adv.","example":"There is a book on the desk.","exampleZh":"桌子上有一本书。","forms":null,"defaultObject":null,"tags":["school","object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":42},{"en":"therefore","zh":"因此","pos":"adv.","example":"It rained, therefore we stayed home.","exampleZh":"下雨了，所以我们待在家。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2586},{"en":"these","zh":"这些","pos":"pron.","example":"These are my books.","exampleZh":"这些是我的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":142},{"en":"they","zh":"他们","pos":"pron.","example":"They are my friends.","exampleZh":"他们是我的朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":44},{"en":"thief","zh":"小偷","pos":"n.","example":"The thief ran away.","exampleZh":"小偷跑掉了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2295},{"en":"thin","zh":"薄的；瘦的","pos":"adj.","example":"She is thin.","exampleZh":"她很瘦。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2629},{"en":"thing","zh":"东西","pos":"n.","example":"This is a good thing.","exampleZh":"这是一件好事。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":131},{"en":"think","zh":"想；认为","pos":"v.","example":"I think you are right.","exampleZh":"我认为你是对的。","forms":{"infinitive":"think","present":"thinks","ing":"thinking","past":"thought","pastParticiple":"thought"},"defaultObject":"about it","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":65},{"en":"third","zh":"第三","pos":"num.","example":"This is the third time.","exampleZh":"这是第三次了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":965},{"en":"thirty","zh":"三十","pos":"num.","example":"There are thirty students.","exampleZh":"有三十名学生。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2961},{"en":"this","zh":"这个","pos":"pron.","example":"This is my book.","exampleZh":"这是我的书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":17},{"en":"those","zh":"那些","pos":"pron.","example":"Those are my friends.","exampleZh":"那些是我的朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":166},{"en":"though","zh":"虽然","pos":"conj.","example":"It was cold, though the sun was out.","exampleZh":"虽然出太阳了，但还是很冷。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["it_is_adj"],"rank":517},{"en":"thought","zh":"想法","pos":"v.","example":"I thought about it.","exampleZh":"我考虑过这件事。","forms":{"infinitive":"thought","present":"thoughts","ing":"thoughting","past":"thoughted","pastParticiple":"thoughted"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":155},{"en":"thousand","zh":"千","pos":"num.","example":"A thousand people came.","exampleZh":"来了一千人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1037},{"en":"threat","zh":"威胁","pos":"n.","example":"There is a threat of rain.","exampleZh":"有下雨的威胁。","forms":null,"defaultObject":null,"tags":["food","nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2585},{"en":"three","zh":"三","pos":"num.","example":"I have three apples.","exampleZh":"我有三个苹果。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":214},{"en":"threw","zh":"扔（过去式）","pos":"v.","example":"He threw the ball.","exampleZh":"他扔了球。","forms":{"infinitive":"threw","present":"threws","ing":"threwing","past":"threwed","pastParticiple":"threwed"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1535},{"en":"throat","zh":"喉咙","pos":"n.","example":"My throat hurts this morning.","exampleZh":"我今天早上嗓子疼。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1673},{"en":"through","zh":"通过","pos":"prep.","example":"We walked through the park.","exampleZh":"我们穿过了公园。","forms":null,"defaultObject":null,"tags":["place","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":209},{"en":"throw","zh":"扔","pos":"v.","example":"Please throw the ball to me.","exampleZh":"请把球扔给我。","forms":{"infinitive":"throw","present":"throws","ing":"throwing","past":"threw","pastParticiple":"thrown"},"defaultObject":"the ball","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":639},{"en":"thursday","zh":"星期四","pos":"n.","example":"We have music on Thursday.","exampleZh":"我们周四有音乐课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2302},{"en":"ticket","zh":"票","pos":"n.","example":"I bought a ticket.","exampleZh":"我买了一张票。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1412},{"en":"tie","zh":"领带；系","pos":"n.","example":"He wears a tie to work.","exampleZh":"他上班打领带。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1444},{"en":"tiger","zh":"老虎","pos":"n.","example":"The tiger is a strong animal.","exampleZh":"老虎是一种强壮的动物。","forms":null,"defaultObject":null,"tags":["nature","object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2817},{"en":"tight","zh":"紧的","pos":"adj.","example":"The shoes are too tight.","exampleZh":"鞋子太紧了。","forms":null,"defaultObject":null,"tags":["object","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1303},{"en":"till","zh":"直到","pos":"prep.","example":"Wait till tomorrow.","exampleZh":"等到明天。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["it_is_adj"],"rank":547},{"en":"time","zh":"时间","pos":"n.","example":"What time is it?","exampleZh":"现在几点？","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":83},{"en":"times","zh":"次数；时代","pos":"n.","example":"I go there three times a week.","exampleZh":"我每周去那里三次。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":449},{"en":"tiny","zh":"微小的","pos":"adj.","example":"The baby is tiny.","exampleZh":"宝宝很小。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1841},{"en":"tip","zh":"小费；尖端","pos":"n.","example":"We left a tip on the table.","exampleZh":"我们在桌上留了小费。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2054},{"en":"tired","zh":"疲倦的","pos":"adj.","example":"I am very tired.","exampleZh":"我很累。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":693},{"en":"title","zh":"标题；头衔","pos":"n.","example":"I forgot the title of the book.","exampleZh":"我忘了书名。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2810},{"en":"to","zh":"到；向","pos":"prep.","example":"I go to school every day.","exampleZh":"我每天去上学。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":4},{"en":"toast","zh":"吐司","pos":"n.","example":"I had toast for breakfast.","exampleZh":"我早饭吃的吐司。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1774},{"en":"today","zh":"今天","pos":"adv.","example":"Today is a nice day.","exampleZh":"今天天气很好。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":268},{"en":"together","zh":"一起","pos":"adv.","example":"Let us sing together.","exampleZh":"我们一起唱吧。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":287},{"en":"toilet","zh":"厕所","pos":"n.","example":"Where is the toilet?","exampleZh":"厕所在哪里？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1985},{"en":"tomorrow","zh":"明天","pos":"adv.","example":"I will go tomorrow.","exampleZh":"我明天去。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":1,"frameworks":["it_is_adj"],"rank":319},{"en":"tongue","zh":"舌头","pos":"n.","example":"Don\'t stick out your tongue.","exampleZh":"别吐舌头。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1890},{"en":"tonight","zh":"今晚","pos":"adv.","example":"I will stay home tonight.","exampleZh":"我今晚呆在家。","forms":null,"defaultObject":null,"tags":["place","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":276},{"en":"too","zh":"也；太","pos":"adv.","example":"This shirt is too big.","exampleZh":"这件衬衫太大了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":110},{"en":"tooth","zh":"牙齿","pos":"n.","example":"My tooth has been hurting all week.","exampleZh":"我牙疼了一整周。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":3508},{"en":"top","zh":"顶部","pos":"n.","example":"The book is on the top shelf.","exampleZh":"书在最上面的架子上。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":624},{"en":"total","zh":"总数","pos":"n.","example":"The total comes to fifty.","exampleZh":"总共五十。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1620},{"en":"totally","zh":"完全","pos":"adv.","example":"That is totally different.","exampleZh":"那完全不一样。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":860},{"en":"touch","zh":"触摸","pos":"v.","example":"Don\'t touch the wet paint.","exampleZh":"别碰未干的油漆。","forms":{"infinitive":"touch","present":"touches","ing":"touching","past":"touched","pastParticiple":"touched"},"defaultObject":"the screen","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":590},{"en":"tough","zh":"坚韧的","pos":"adj.","example":"The meat is tough.","exampleZh":"肉很硬。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":819},{"en":"tour","zh":"旅行","pos":"n.","example":"We went on a tour of the city.","exampleZh":"我们参加了城市观光。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1902},{"en":"toward","zh":"朝向","pos":"prep.","example":"She walked toward the door.","exampleZh":"她朝门口走去。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2395},{"en":"tower","zh":"塔","pos":"n.","example":"The tower is very tall.","exampleZh":"塔很高。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2402},{"en":"town","zh":"城镇","pos":"n.","example":"I live in a small town.","exampleZh":"我住在一个小镇上。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":400},{"en":"trace","zh":"追踪","pos":"v.","example":"They traced the call to a shop.","exampleZh":"他们追踪到电话来自一家店。","forms":{"infinitive":"trace","present":"traces","ing":"tracing","past":"traced","pastParticiple":"traced"},"defaultObject":"the call","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2706},{"en":"track","zh":"轨道；跟踪","pos":"n.","example":"We run on the track.","exampleZh":"我们在跑道上跑步。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1209},{"en":"trade","zh":"贸易；交易","pos":"n.","example":"Trade between the two towns grew.","exampleZh":"两镇之间的贸易增长了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1706},{"en":"traffic","zh":"交通","pos":"n.","example":"The traffic is heavy.","exampleZh":"交通很拥挤。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2007},{"en":"trail","zh":"小径","pos":"n.","example":"The trail goes up the hill.","exampleZh":"小径通向山上。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2726},{"en":"train","zh":"火车","pos":"n.","example":"The train leaves at six.","exampleZh":"火车六点开。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":791},{"en":"transfer","zh":"转移；转账","pos":"v.","example":"I transferred the money this morning.","exampleZh":"我今天早上转了账。","forms":{"infinitive":"transfer","present":"transfers","ing":"transferring","past":"transferred","pastParticiple":"transferred"},"defaultObject":"the money","tags":["daily"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2601},{"en":"trap","zh":"陷阱","pos":"n.","example":"The mouse walked into the trap.","exampleZh":"老鼠走进了陷阱。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2330},{"en":"trash","zh":"垃圾","pos":"n.","example":"Please take out the trash.","exampleZh":"请把垃圾拿出去。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2433},{"en":"trauma","zh":"创伤","pos":"n.","example":"He is still dealing with the trauma.","exampleZh":"他还在应对那份创伤。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2974},{"en":"travel","zh":"旅行","pos":"v.","example":"I love to travel.","exampleZh":"我喜欢旅行。","forms":{"infinitive":"travel","present":"travels","ing":"travelling","past":"travelled","pastParticiple":"travelled"},"defaultObject":"something","tags":["emotion"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1782},{"en":"treasure","zh":"宝藏","pos":"n.","example":"We found a treasure box.","exampleZh":"我们找到了一个宝箱。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2749},{"en":"treat","zh":"对待；招待","pos":"v.","example":"He treats everyone with respect.","exampleZh":"他尊重每一个人。","forms":{"infinitive":"treat","present":"treats","ing":"treating","past":"treated","pastParticiple":"treated"},"defaultObject":"the patient","tags":["emotion"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1280},{"en":"treatment","zh":"治疗","pos":"n.","example":"The treatment lasted three months.","exampleZh":"治疗持续了三个月。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2715},{"en":"tree","zh":"树","pos":"n.","example":"The tree is tall.","exampleZh":"这棵树很高。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1081},{"en":"trick","zh":"把戏；诀窍","pos":"n.","example":"He showed us a card trick.","exampleZh":"他给我们表演了牌技。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1372},{"en":"tried","zh":"尝试（过去式）","pos":"v.","example":"I tried to help.","exampleZh":"我努力帮忙了。","forms":{"infinitive":"tried","present":"trieds","ing":"trieding","past":"trieded","pastParticiple":"trieded"},"defaultObject":"something","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":509},{"en":"trip","zh":"旅行","pos":"n.","example":"We went on a trip.","exampleZh":"我们去旅行了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":894},{"en":"trouble","zh":"麻烦","pos":"n.","example":"What is the trouble?","exampleZh":"有什么麻烦？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":440},{"en":"truck","zh":"卡车","pos":"n.","example":"The truck carries goods.","exampleZh":"卡车运货。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":980},{"en":"true","zh":"真的","pos":"adj.","example":"Is that story true?","exampleZh":"那故事是真的吗？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":392},{"en":"truly","zh":"真正地","pos":"adv.","example":"I am truly sorry.","exampleZh":"我真的很抱歉。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1680},{"en":"trunk","zh":"树干；后备箱","pos":"n.","example":"The elephant has a long trunk.","exampleZh":"大象有一个长鼻子。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2667},{"en":"trust","zh":"信任","pos":"v.","example":"I trust him completely.","exampleZh":"我完全信任他。","forms":{"infinitive":"trust","present":"trusts","ing":"trusting","past":"trusted","pastParticiple":"trusted"},"defaultObject":"her","tags":["emotion"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":524},{"en":"truth","zh":"真相","pos":"n.","example":"Please tell me the truth.","exampleZh":"请告诉我真相。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":498},{"en":"try","zh":"尝试","pos":"v.","example":"Please try again.","exampleZh":"请再试一次。","forms":{"infinitive":"try","present":"tries","ing":"trying","past":"tried","pastParticiple":"tried"},"defaultObject":"again","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":245},{"en":"tuesday","zh":"星期二","pos":"n.","example":"We have PE on Tuesday.","exampleZh":"我们周二有体育课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2344},{"en":"tunnel","zh":"隧道","pos":"n.","example":"The tunnel is two miles long.","exampleZh":"隧道有两英里长。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2890},{"en":"turkey","zh":"火鸡","pos":"n.","example":"We cooked a turkey for the holiday.","exampleZh":"过节我们烤了只火鸡。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2424},{"en":"turn","zh":"转弯","pos":"v.","example":"Please turn left.","exampleZh":"请左转。","forms":{"infinitive":"turn","present":"turns","ing":"turning","past":"turned","pastParticiple":"turned"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":341},{"en":"turtle","zh":"海龟","pos":"n.","example":"The turtle walks slowly.","exampleZh":"乌龟爬得很慢。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2976},{"en":"tv","zh":"电视","pos":"n.","example":"Turn off the tv, please.","exampleZh":"请把电视关了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":749},{"en":"twelve","zh":"十二","pos":"num.","example":"I have twelve books.","exampleZh":"我有十二本书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2772},{"en":"twenty","zh":"二十","pos":"num.","example":"There are twenty students.","exampleZh":"有二十名学生。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["it_is_adj"],"rank":2096},{"en":"twice","zh":"两次","pos":"adv.","example":"I have read that book twice.","exampleZh":"那本书我读过两遍。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1115},{"en":"two","zh":"二","pos":"num.","example":"I have two pencils.","exampleZh":"我有两支铅笔。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":134},{"en":"type","zh":"类型；打字","pos":"v.","example":"Please type the letter.","exampleZh":"请把这封信打出来。","forms":{"infinitive":"type","present":"types","ing":"typing","past":"typed","pastParticiple":"typed"},"defaultObject":"something","tags":["general"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1137},{"en":"ugly","zh":"丑陋的","pos":"adj.","example":"The bug is ugly.","exampleZh":"这只虫子很丑。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1502},{"en":"unbelievable","zh":"难以置信的","pos":"adj.","example":"The price was unbelievable.","exampleZh":"价格贵得难以置信。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1960},{"en":"uncle","zh":"叔叔","pos":"n.","example":"My uncle lives in Beijing.","exampleZh":"我叔叔住在北京。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":650},{"en":"under","zh":"在……下面","pos":"prep.","example":"The cat is under the table.","exampleZh":"猫在桌子底下。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":383},{"en":"understand","zh":"理解","pos":"v.","example":"I understand the question.","exampleZh":"我理解这个问题。","forms":{"infinitive":"understand","present":"understands","ing":"understanding","past":"understood","pastParticiple":"understood"},"defaultObject":"the problem","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":242},{"en":"understood","zh":"理解（过去式）","pos":"v.","example":"He understood the lesson.","exampleZh":"他听懂了这课。","forms":{"infinitive":"understood","present":"understoods","ing":"understooding","past":"understooded","pastParticiple":"understooded"},"defaultObject":"something","tags":["school"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1845},{"en":"underwear","zh":"内衣","pos":"n.","example":"I packed clean underwear.","exampleZh":"我带了干净的内衣。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2492},{"en":"unfortunately","zh":"不幸地","pos":"adv.","example":"Unfortunately, the shop was closed.","exampleZh":"不巧的是，店关门了。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1832},{"en":"uniform","zh":"制服","pos":"n.","example":"The children wear a uniform.","exampleZh":"孩子们穿校服。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2256},{"en":"union","zh":"工会；联合","pos":"n.","example":"The workers joined the union.","exampleZh":"工人们加入了工会。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2482},{"en":"unit","zh":"单位；单元","pos":"n.","example":"We live in unit five.","exampleZh":"我们住五单元。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1670},{"en":"universe","zh":"宇宙","pos":"n.","example":"The universe is very old.","exampleZh":"宇宙非常古老。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2231},{"en":"university","zh":"大学","pos":"n.","example":"He studies at a university.","exampleZh":"他在一所大学读书。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2348},{"en":"unless","zh":"除非","pos":"conj.","example":"We will go unless it rains.","exampleZh":"除非下雨，否则我们就去。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":2,"frameworks":["it_is_adj"],"rank":690},{"en":"until","zh":"直到","pos":"prep.","example":"Wait here until I come back.","exampleZh":"在这里等到我回来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":344},{"en":"unusual","zh":"不寻常的","pos":"adj.","example":"This is an unusual day.","exampleZh":"这是不寻常的一天。","forms":null,"defaultObject":null,"tags":["nature","daily","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2339},{"en":"up","zh":"向上","pos":"adv.","example":"Please stand up.","exampleZh":"请站起来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":50},{"en":"upon","zh":"在……上","pos":"prep.","example":"Once upon a time, there was a king.","exampleZh":"从前有一位国王。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1113},{"en":"upset","zh":"沮丧的","pos":"adj.","example":"I am upset about the news.","exampleZh":"我对这个消息感到难过。","forms":null,"defaultObject":null,"tags":["emotion","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":966},{"en":"upstairs","zh":"楼上","pos":"adv.","example":"My bedroom is upstairs.","exampleZh":"我的卧室在楼上。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":2,"frameworks":["it_is_adj"],"rank":1005},{"en":"us","zh":"我们（宾格）","pos":"pron.","example":"Please give us the books.","exampleZh":"请把书给我们。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":96},{"en":"use","zh":"使用","pos":"v.","example":"You can use my pen.","exampleZh":"你可以用我的笔。","forms":{"infinitive":"use","present":"uses","ing":"using","past":"used","pastParticiple":"used"},"defaultObject":"a phone","tags":["object"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":311},{"en":"useless","zh":"无用的","pos":"adj.","example":"This old phone is useless now.","exampleZh":"这旧手机现在没用了。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2651},{"en":"usual","zh":"通常的","pos":"adj.","example":"She arrived at the usual time.","exampleZh":"她照常时间到了。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1636},{"en":"usually","zh":"通常","pos":"adv.","example":"I usually get up at seven.","exampleZh":"我通常七点起床。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1106},{"en":"vacation","zh":"假期","pos":"n.","example":"We are on vacation next week.","exampleZh":"我们下周休假。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1812},{"en":"valley","zh":"山谷","pos":"n.","example":"The valley is green in spring.","exampleZh":"春天山谷一片绿。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2246},{"en":"value","zh":"价值","pos":"n.","example":"This watch has great value.","exampleZh":"这块手表价值很高。","forms":null,"defaultObject":null,"tags":["food","body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2503},{"en":"van","zh":"厢式车","pos":"n.","example":"They moved everything in a van.","exampleZh":"他们用一辆货车搬完了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1282},{"en":"vehicle","zh":"车辆","pos":"n.","example":"No vehicles beyond this point.","exampleZh":"车辆禁止入内。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2423},{"en":"very","zh":"非常","pos":"adv.","example":"Thank you very much.","exampleZh":"非常感谢你。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":117},{"en":"victory","zh":"胜利","pos":"n.","example":"We won a great victory.","exampleZh":"我们赢得了伟大的胜利。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2514},{"en":"video","zh":"视频","pos":"n.","example":"I watched a video online.","exampleZh":"我在网上看了一个视频。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1524},{"en":"view","zh":"景色；看法","pos":"n.","example":"The room has a nice view.","exampleZh":"房间景色很好。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1594},{"en":"village","zh":"村庄","pos":"n.","example":"I grew up in a small village.","exampleZh":"我在一个小村子里长大。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1766},{"en":"virgin","zh":"纯净的；处女的","pos":"adj.","example":"We used virgin olive oil.","exampleZh":"我们用的是初榨橄榄油。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":5,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2768},{"en":"virus","zh":"病毒","pos":"n.","example":"A virus is going around the office.","exampleZh":"办公室里有病毒在传。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2759},{"en":"vision","zh":"视力；愿景","pos":"n.","example":"She has good vision.","exampleZh":"她的视力很好。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2325},{"en":"visit","zh":"参观","pos":"v.","example":"I will visit my friend tomorrow.","exampleZh":"我明天会去拜访我的朋友。","forms":{"infinitive":"visit","present":"visits","ing":"visitting","past":"visitted","pastParticiple":"visitted"},"defaultObject":"a museum","tags":["nature"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1173},{"en":"voice","zh":"声音","pos":"n.","example":"She has a beautiful voice.","exampleZh":"她有很美的嗓音。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":855},{"en":"vote","zh":"投票","pos":"v.","example":"I will vote in the election.","exampleZh":"我会参加选举投票。","forms":{"infinitive":"vote","present":"votes","ing":"voting","past":"voted","pastParticiple":"voted"},"defaultObject":"something","tags":["transport"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1736},{"en":"wagon","zh":"货车","pos":"n.","example":"The wagon carried the boxes.","exampleZh":"货车拉着箱子。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2900},{"en":"wait","zh":"等待","pos":"v.","example":"Please wait for me.","exampleZh":"请等我一下。","forms":{"infinitive":"wait","present":"waits","ing":"waiting","past":"waited","pastParticiple":"waited"},"defaultObject":"something","tags":["general"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":152},{"en":"wake","zh":"醒来","pos":"v.","example":"I wake up at six every day.","exampleZh":"我每天六点醒来。","forms":{"infinitive":"wake","present":"wakes","ing":"waking","past":"woke","pastParticiple":"woken"},"defaultObject":"up early","tags":["nature","daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":722},{"en":"walk","zh":"走路","pos":"v.","example":"I walk to school every day.","exampleZh":"我每天走路去上学。","forms":{"infinitive":"walk","present":"walks","ing":"walking","past":"walked","pastParticiple":"walked"},"defaultObject":"the dog","tags":["transport","school","nature","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":458},{"en":"wall","zh":"墙","pos":"n.","example":"The wall is white.","exampleZh":"墙是白色的。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1006},{"en":"wallet","zh":"钱包","pos":"n.","example":"I left my wallet at home.","exampleZh":"我把钱包落在家里了。","forms":null,"defaultObject":null,"tags":["place","object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2408},{"en":"want","zh":"想要","pos":"v.","example":"I want to be a teacher.","exampleZh":"我想成为一名老师。","forms":{"infinitive":"want","present":"wants","ing":"wanting","past":"wanted","pastParticiple":"wanted"},"defaultObject":"a break","tags":["school"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":64},{"en":"war","zh":"战争","pos":"n.","example":"We hope for no more wars.","exampleZh":"我们希望不再有战争。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":530},{"en":"warm","zh":"温暖的","pos":"adj.","example":"The weather is warm today.","exampleZh":"今天天气很温暖。","forms":null,"defaultObject":null,"tags":["food","nature","daily","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1276},{"en":"warn","zh":"警告","pos":"v.","example":"Please warn him about the dog.","exampleZh":"请提醒他关于那条狗。","forms":{"infinitive":"warn","present":"warns","ing":"warning","past":"warned","pastParticiple":"warned"},"defaultObject":"something","tags":["general"],"difficulty":4,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2224},{"en":"was","zh":"是（过去式）","pos":"v.","example":"I was at home yesterday.","exampleZh":"我昨天在家里。","forms":{"infinitive":"was","present":"wases","ing":"wassing","past":"wassed","pastParticiple":"wassed"},"defaultObject":"something","tags":["nature","place","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":31},{"en":"wash","zh":"洗","pos":"v.","example":"Please wash your hands before eating.","exampleZh":"吃东西前请洗手。","forms":{"infinitive":"wash","present":"washes","ing":"washing","past":"washed","pastParticiple":"washed"},"defaultObject":"my hands","tags":["food","body","daily","object"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1539},{"en":"waste","zh":"浪费","pos":"v.","example":"Do not waste food.","exampleZh":"别浪费食物。","forms":{"infinitive":"waste","present":"wastes","ing":"wasting","past":"wasted","pastParticiple":"wasted"},"defaultObject":"time","tags":["food"],"difficulty":3,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":1249},{"en":"watch","zh":"手表；观看","pos":"v.","example":"I watch TV every night.","exampleZh":"我每晚看电视。","forms":{"infinitive":"watch","present":"watches","ing":"watching","past":"watched","pastParticiple":"watched"},"defaultObject":"a movie","tags":["body","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":323},{"en":"water","zh":"水","pos":"n.","example":"We need to drink water every day.","exampleZh":"我们每天需要喝水。","forms":null,"defaultObject":null,"tags":["food","nature","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":438},{"en":"wave","zh":"挥手；波浪","pos":"v.","example":"She waved goodbye from the train.","exampleZh":"她在火车上挥手告别。","forms":{"infinitive":"wave","present":"waves","ing":"waving","past":"waved","pastParticiple":"waved"},"defaultObject":"goodbye","tags":["transport"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2536},{"en":"way","zh":"方式；路","pos":"n.","example":"This way to the station, please.","exampleZh":"请走这条路去车站。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":107},{"en":"we","zh":"我们","pos":"pron.","example":"We are good friends.","exampleZh":"我们是好朋友。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":16},{"en":"weak","zh":"虚弱的","pos":"adj.","example":"She felt weak after the illness.","exampleZh":"生病后她觉得虚弱。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1874},{"en":"wear","zh":"穿","pos":"v.","example":"I wear a coat in winter.","exampleZh":"我冬天穿外套。","forms":{"infinitive":"wear","present":"wears","ing":"wearing","past":"wore","pastParticiple":"worn"},"defaultObject":"a coat","tags":["nature","daily"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":709},{"en":"weather","zh":"天气","pos":"n.","example":"The weather is nice today.","exampleZh":"今天天气很好。","forms":null,"defaultObject":null,"tags":["food","nature","daily"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1741},{"en":"wedding","zh":"婚礼","pos":"n.","example":"The wedding is next Saturday.","exampleZh":"婚礼在下周六。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":752},{"en":"wednesday","zh":"星期三","pos":"n.","example":"We have math on Wednesday.","exampleZh":"我们周三有数学课。","forms":null,"defaultObject":null,"tags":["school","nature","daily"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2847},{"en":"week","zh":"周","pos":"n.","example":"There are seven days in a week.","exampleZh":"一周有七天。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":418},{"en":"weekend","zh":"周末","pos":"n.","example":"I visit my grandparents on the weekend.","exampleZh":"我周末去看望爷爷奶奶。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1131},{"en":"weight","zh":"重量；体重","pos":"n.","example":"He lost weight last year.","exampleZh":"他去年瘦了。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1665},{"en":"weird","zh":"奇怪的","pos":"adj.","example":"That noise sounds weird.","exampleZh":"那声音很奇怪。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":754},{"en":"welcome","zh":"欢迎","pos":"adj.","example":"You are always welcome here.","exampleZh":"这里随时欢迎你。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":522},{"en":"well","zh":"好；井","pos":"adv.","example":"I am very well, thank you.","exampleZh":"我很好，谢谢你。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":61},{"en":"went","zh":"去（过去式）","pos":"v.","example":"I went to the park yesterday.","exampleZh":"我昨天去了公园。","forms":{"infinitive":"went","present":"wents","ing":"wenting","past":"wented","pastParticiple":"wented"},"defaultObject":"something","tags":["nature","place","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":277},{"en":"were","zh":"是（过去式复数）","pos":"v.","example":"They were at school yesterday.","exampleZh":"他们昨天在学校。","forms":{"infinitive":"were","present":"weres","ing":"wering","past":"wered","pastParticiple":"wered"},"defaultObject":"something","tags":["school","nature","place","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":98},{"en":"west","zh":"西方","pos":"n.","example":"The sun sets in the west.","exampleZh":"太阳从西边落下。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1140},{"en":"wet","zh":"湿的","pos":"adj.","example":"The clothes are still wet.","exampleZh":"衣服还是湿的。","forms":null,"defaultObject":null,"tags":["object","general"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1571},{"en":"what","zh":"什么","pos":"pron.","example":"What is your name?","exampleZh":"你叫什么名字？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":12},{"en":"whatever","zh":"无论什么","pos":"pron.","example":"Order whatever you like.","exampleZh":"你想点什么就点什么。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":1,"frameworks":["it_is_adj"],"rank":404},{"en":"wheel","zh":"轮子","pos":"n.","example":"The front wheel needs air.","exampleZh":"前轮该打气了。","forms":null,"defaultObject":null,"tags":["transport"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2093},{"en":"when","zh":"当……时候","pos":"adv.","example":"When do you go to school?","exampleZh":"你什么时候去上学？","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":77},{"en":"whenever","zh":"无论何时","pos":"conj.","example":"Call me whenever you need help.","exampleZh":"你需要帮忙随时打给我。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1713},{"en":"where","zh":"哪里","pos":"adv.","example":"Where is the bathroom?","exampleZh":"洗手间在哪里？","forms":null,"defaultObject":null,"tags":["body","place","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":88},{"en":"wherever","zh":"无论哪里","pos":"conj.","example":"I will find you wherever you go.","exampleZh":"你去哪我都能找到你。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1959},{"en":"whether","zh":"是否","pos":"conj.","example":"I do not know whether she is coming.","exampleZh":"我不知道她来不来。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1061},{"en":"which","zh":"哪个","pos":"pron.","example":"Which book do you like?","exampleZh":"你喜欢哪本书？","forms":null,"defaultObject":null,"tags":["school","emotion"],"difficulty":1,"frameworks":["it_is_adj"],"rank":244},{"en":"while","zh":"当……时候","pos":"conj.","example":"Please be quiet while I study.","exampleZh":"我学习时请保持安静。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":304},{"en":"white","zh":"白色的","pos":"adj.","example":"Snow is white.","exampleZh":"雪是白色的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":537},{"en":"who","zh":"谁","pos":"pron.","example":"Who is your English teacher?","exampleZh":"你的英语老师是谁？","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":71},{"en":"whoever","zh":"无论谁","pos":"pron.","example":"Whoever finishes first can leave.","exampleZh":"谁先做完谁就能走。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1476},{"en":"whole","zh":"整个的","pos":"adj.","example":"I ate the whole cake.","exampleZh":"我吃了整个蛋糕。","forms":null,"defaultObject":null,"tags":["food","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":285},{"en":"whom","zh":"谁（宾格）","pos":"pron.","example":"Whom did you give the book to?","exampleZh":"你把书给了谁？","forms":null,"defaultObject":null,"tags":["school"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1705},{"en":"whose","zh":"谁的","pos":"pron.","example":"Whose pen is this?","exampleZh":"这是谁的笔？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1116},{"en":"why","zh":"为什么","pos":"adv.","example":"Why are you so late today?","exampleZh":"你今天为什么这么晚？","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":70},{"en":"wide","zh":"宽的","pos":"adj.","example":"The river is very wide here.","exampleZh":"这里河面很宽。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2331},{"en":"wife","zh":"妻子","pos":"n.","example":"His wife is a teacher.","exampleZh":"他妻子是老师。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":305},{"en":"wild","zh":"野生的","pos":"adj.","example":"We saw wild birds by the river.","exampleZh":"我们在河边看到了野鸟。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1188},{"en":"will","zh":"将要","pos":"modal v.","example":"I will help you.","exampleZh":"我会帮助你的。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":74},{"en":"win","zh":"赢","pos":"v.","example":"I hope our team will win.","exampleZh":"我希望我们队能赢。","forms":{"infinitive":"win","present":"wins","ing":"winning","past":"won","pastParticiple":"won"},"defaultObject":"the game","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":622},{"en":"wind","zh":"风","pos":"n.","example":"The wind is strong today.","exampleZh":"今天风很大。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1159},{"en":"window","zh":"窗户","pos":"n.","example":"Please open the window.","exampleZh":"请打开窗户。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":2,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":858},{"en":"wine","zh":"葡萄酒","pos":"n.","example":"We drink wine at the party.","exampleZh":"我们在聚会上喝葡萄酒。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":3,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1142},{"en":"winner","zh":"获胜者","pos":"n.","example":"The winner gets a free trip.","exampleZh":"获胜者能得到一次免费旅行。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":1887},{"en":"winter","zh":"冬天","pos":"n.","example":"Winter is very cold.","exampleZh":"冬天很冷。","forms":null,"defaultObject":null,"tags":["nature"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2145},{"en":"wipe","zh":"擦","pos":"v.","example":"Wipe the table before we eat.","exampleZh":"吃饭前擦下桌子。","forms":{"infinitive":"wipe","present":"wipes","ing":"wiping","past":"wiped","pastParticiple":"wiped"},"defaultObject":"the table","tags":["food"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2997},{"en":"wire","zh":"电线","pos":"n.","example":"Do not touch that wire.","exampleZh":"别碰那根电线。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2065},{"en":"wise","zh":"明智的","pos":"adj.","example":"That was a wise choice.","exampleZh":"那是个明智的选择。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":2009},{"en":"wish","zh":"希望","pos":"v.","example":"I wish you a happy birthday.","exampleZh":"我祝你生日快乐。","forms":{"infinitive":"wish","present":"wishes","ing":"wishing","past":"wished","pastParticiple":"wished"},"defaultObject":"something","tags":["emotion","daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":425},{"en":"with","zh":"和；用","pos":"prep.","example":"I go to school with my friend.","exampleZh":"我和朋友一起去上学。","forms":null,"defaultObject":null,"tags":["school"],"difficulty":1,"frameworks":["it_is_adj"],"rank":36},{"en":"within","zh":"在……之内","pos":"prep.","example":"Please answer within two days.","exampleZh":"请在两天内回复。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":3,"frameworks":["it_is_adj"],"rank":1164},{"en":"without","zh":"没有","pos":"prep.","example":"I cannot read without my glasses.","exampleZh":"没有眼镜我看不了书。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":298},{"en":"wolf","zh":"狼","pos":"n.","example":"The wolf lives in the forest.","exampleZh":"狼住在森林里。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2623},{"en":"woman","zh":"女人","pos":"n.","example":"The woman is a doctor.","exampleZh":"那位女士是一名医生。","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":266},{"en":"wonder","zh":"想知道","pos":"v.","example":"I wonder where he went.","exampleZh":"我想知道他去哪了。","forms":{"infinitive":"wonder","present":"wonders","ing":"wonderring","past":"wonderred","pastParticiple":"wonderred"},"defaultObject":"why","tags":["general"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":681},{"en":"wonderful","zh":"极好的","pos":"adj.","example":"We had a wonderful time.","exampleZh":"我们玩得非常开心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":553},{"en":"wood","zh":"木头","pos":"n.","example":"The table is made of wood.","exampleZh":"桌子是木头做的。","forms":null,"defaultObject":null,"tags":["body","object"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2100},{"en":"word","zh":"单词","pos":"n.","example":"What is the English word for this?","exampleZh":"这个的英语单词是什么？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":423},{"en":"work","zh":"工作","pos":"v.","example":"I work in a hospital.","exampleZh":"我在医院工作。","forms":{"infinitive":"work","present":"works","ing":"working","past":"worked","pastParticiple":"worked"},"defaultObject":"hard","tags":["daily"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":157},{"en":"works","zh":"作品；工厂","pos":"v.","example":"He works in a big company.","exampleZh":"他在一家大公司工作。","forms":{"infinitive":"works","present":"workses","ing":"worksing","past":"worksed","pastParticiple":"worksed"},"defaultObject":"something","tags":["place"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":723},{"en":"world","zh":"世界","pos":"n.","example":"The world is a big place.","exampleZh":"世界是一个很大的地方。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":252},{"en":"worried","zh":"担心的","pos":"adj.","example":"She looked worried all morning.","exampleZh":"她一早上看起来都很担心。","forms":null,"defaultObject":null,"tags":["emotion"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":794},{"en":"worry","zh":"担心","pos":"v.","example":"Do not worry about the money.","exampleZh":"别担心钱的事。","forms":{"infinitive":"worry","present":"worries","ing":"worrying","past":"worried","pastParticiple":"worried"},"defaultObject":"about it","tags":["emotion"],"difficulty":1,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":358},{"en":"worse","zh":"更糟的","pos":"adj.","example":"My cold is getting worse.","exampleZh":"我的感冒越来越严重了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":770},{"en":"worth","zh":"值得","pos":"adj.","example":"This book is worth reading.","exampleZh":"这本书值得一读。","forms":null,"defaultObject":null,"tags":["school","general"],"difficulty":2,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":710},{"en":"would","zh":"会；将要","pos":"modal v.","example":"I would like a cup of tea.","exampleZh":"我想要一杯茶。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":90},{"en":"wound","zh":"伤口","pos":"n.","example":"He got a wound on his arm.","exampleZh":"他手臂上有一条伤口。","forms":null,"defaultObject":null,"tags":["body"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2127},{"en":"wow","zh":"哇","pos":"int.","example":"Wow! That is amazing!","exampleZh":"哇！太神奇了！","forms":null,"defaultObject":null,"tags":["general"],"difficulty":2,"frameworks":["it_is_adj"],"rank":560},{"en":"wrap","zh":"包裹","pos":"v.","example":"Please wrap the gift for me.","exampleZh":"请把礼物帮我包起来。","forms":{"infinitive":"wrap","present":"wraps","ing":"wrapping","past":"wrapped","pastParticiple":"wrapped"},"defaultObject":"something","tags":["object"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2897},{"en":"write","zh":"写","pos":"v.","example":"She writes a letter to her mother.","exampleZh":"她给妈妈写信。","forms":{"infinitive":"write","present":"writes","ing":"writing","past":"wrote","pastParticiple":"written"},"defaultObject":"a letter","tags":["school"],"difficulty":2,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":642},{"en":"writer","zh":"作家","pos":"n.","example":"She is a famous writer.","exampleZh":"她是一位著名作家。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2351},{"en":"wrong","zh":"错误的","pos":"adj.","example":"I think you have the wrong answer.","exampleZh":"我认为你的答案错了。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":217},{"en":"yard","zh":"院子","pos":"n.","example":"The children play in the yard.","exampleZh":"孩子们在院子里玩。","forms":null,"defaultObject":null,"tags":["place"],"difficulty":4,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2240},{"en":"year","zh":"年","pos":"n.","example":"She spent a year traveling around Asia.","exampleZh":"她花了一年时间环游亚洲。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":1,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":370},{"en":"yell","zh":"喊叫","pos":"v.","example":"The coach yelled at the players to run faster.","exampleZh":"教练大声喊叫着让球员们跑快点。","forms":{"infinitive":"yell","present":"yells","ing":"yelling","past":"yelled","pastParticiple":"yelled"},"defaultObject":"something","tags":["general"],"difficulty":5,"frameworks":["i_like_to","i_am_ing","do_you","i_want_to","let_me","can_you","i_am_planning_to","i_should_have","i_am_not_used_to","what_are_you","i_was_ing","he_has_already","i_did_not","dont","i_enjoy","will_you","if_i_had","i_wish_i_had","she_would_rather","i_have_been_ing","cannot_help","had_i_known","it_is_worth","lets","they_looking_forward","why_didnt_you"],"rank":2828},{"en":"yellow","zh":"黄色的","pos":"adj.","example":"The school bus is always painted bright yellow.","exampleZh":"校车总是漆成亮黄色。","forms":null,"defaultObject":null,"tags":["transport","school","general"],"difficulty":4,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":1759},{"en":"yes","zh":"是的","pos":"adv.","example":"Yes, I would love to join you for dinner.","exampleZh":"是的，我很愿意和你一起吃晚饭。","forms":null,"defaultObject":null,"tags":["food","emotion","daily"],"difficulty":1,"frameworks":["it_is_adj"],"rank":80},{"en":"yesterday","zh":"昨天","pos":"adv.","example":"I met your sister at the supermarket yesterday.","exampleZh":"我昨天在超市遇到了你妹妹。","forms":null,"defaultObject":null,"tags":["nature","daily"],"difficulty":2,"frameworks":["it_is_adj"],"rank":782},{"en":"yet","zh":"还；然而","pos":"adv.","example":"I haven\'t finished my homework yet.","exampleZh":"我还没有完成我的家庭作业。","forms":null,"defaultObject":null,"tags":["school","place"],"difficulty":1,"frameworks":["it_is_adj"],"rank":314},{"en":"you","zh":"你","pos":"pron.","example":"You are the only person I can trust.","exampleZh":"你是我唯一可以信任的人。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":1},{"en":"young","zh":"年轻的","pos":"adj.","example":"The young tree needs to be watered every day.","exampleZh":"这棵小树需要每天浇水。","forms":null,"defaultObject":null,"tags":["nature","daily","general"],"difficulty":1,"frameworks":["the_weather_is","it_is_adj","the_movie_is","the_food_was","situation_must_be","how_adj"],"rank":409},{"en":"your","zh":"你的","pos":"det.","example":"Is this your jacket on the chair?","exampleZh":"椅子上是你的夹克吗？","forms":null,"defaultObject":null,"tags":["object"],"difficulty":1,"frameworks":["it_is_adj"],"rank":23},{"en":"yourself","zh":"你自己","pos":"pron.","example":"You should be proud of yourself.","exampleZh":"你该为自己骄傲。","forms":null,"defaultObject":null,"tags":["general"],"difficulty":1,"frameworks":["it_is_adj"],"rank":267},{"en":"yourselves","zh":"你们自己","pos":"pron.","example":"Please help yourselves to the fruit.","exampleZh":"水果请自便。","forms":null,"defaultObject":null,"tags":["food"],"difficulty":4,"frameworks":["it_is_adj"],"rank":1983},{"en":"zero","zh":"零","pos":"num.","example":"The temperature dropped to zero degrees last night.","exampleZh":"昨晚气温降到了零度。","forms":null,"defaultObject":null,"tags":["daily"],"difficulty":5,"frameworks":["it_is_adj"],"rank":2513},{"en":"zone","zh":"区域","pos":"n.","example":"This area is a no-parking zone.","exampleZh":"这个区域是禁止停车区。","forms":null,"defaultObject":null,"tags":["transport","place"],"difficulty":5,"frameworks":["there_is_a","i_have_a","she_goes_to","i_bought_a"],"rank":2639}]';
exports.WORDS = JSON.parse(_WORDS_RAW);
/** 按英文查词（忽略大小写） */
function getWordByEn(en) {
    return exports.WORDS.find((w) => w.en.toLowerCase() === en.toLowerCase());
}

});

__def("shared/data/frameworks", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRAMEWORKS = exports.EXCLUDED_FRAMEWORK_VERBS = void 0;
exports.getFrameworkById = getFrameworkById;
// —— 框架选词白名单（人工按语义域策展，避免"The weather is tough"这类废句）——
// 生成脚本 scripts/curate-frameworks（见 commit 说明）；改词库后需同步复核。
const WEATHER_ADJ = ['cold', 'hot', 'warm', 'cool', 'nice', 'fine', 'clear', 'wet', 'terrible', 'awful', 'beautiful', 'perfect', 'bad', 'good', 'great', 'calm'];
const THING_ADJ = ['easy', 'hard', 'difficult', 'big', 'small', 'huge', 'tiny', 'new', 'old', 'good', 'bad', 'great', 'nice', 'fine', 'cold', 'hot', 'warm', 'cool', 'clean', 'dark', 'deep', 'high', 'low', 'long', 'short', 'fast', 'slow', 'cheap', 'expensive', 'dangerous', 'wet', 'full', 'clear', 'broken', 'closed', 'fixed', 'lost', 'ready', 'real', 'true', 'false', 'right', 'wrong', 'strange', 'weird', 'odd', 'obvious', 'perfect', 'thin', 'tight', 'loud', 'quiet', 'quick', 'sweet', 'ugly', 'beautiful', 'amazing', 'awesome', 'awful', 'terrible', 'brilliant', 'ridiculous', 'scary', 'boring', 'exciting', 'serious', 'special', 'fair', 'rough', 'impossible', 'red', 'blue', 'black', 'white', 'green', 'brown', 'yellow'];
const MOVIE_ADJ = ['boring', 'exciting', 'good', 'bad', 'great', 'terrible', 'awful', 'amazing', 'awesome', 'brilliant', 'fabulous', 'terrific', 'sad', 'scary', 'long', 'short', 'popular', 'famous', 'ridiculous', 'unbelievable', 'impressive', 'beautiful', 'perfect', 'weird'];
const FOOD_ADJ = ['delicious', 'good', 'bad', 'great', 'terrible', 'awful', 'amazing', 'fresh', 'sweet', 'hot', 'cold', 'cheap', 'expensive', 'fabulous', 'terrific', 'fine', 'perfect', 'rich', 'warm'];
const SITUATION_ADJ = ['serious', 'difficult', 'hard', 'bad', 'dangerous', 'terrible', 'awful', 'tough', 'strange', 'scary', 'impossible', 'obvious', 'clear', 'sad', 'crazy', 'weird'];
const GRADABLE_ADJ = ['big', 'small', 'hard', 'easy', 'deep', 'high', 'low', 'long', 'short', 'fast', 'slow', 'hot', 'cold', 'old', 'new', 'expensive', 'cheap', 'huge', 'thin', 'strong', 'serious', 'bad', 'dangerous', 'difficult'];
const EXISTS_NOUN = ['actor', 'address', 'animal', 'apartment', 'aunt', 'avenue', 'bag', 'ball', 'band', 'bank', 'bar', 'base', 'basement', 'bathroom', 'bear', 'bedroom', 'bell', 'belt', 'bible', 'block', 'board', 'booth', 'border', 'bowl', 'box', 'boy', 'boyfriend', 'bridge', 'buck', 'button', 'cabin', 'cable', 'cake', 'camera', 'camp', 'candy', 'cap', 'casino', 'castle', 'center', 'chair', 'channel', 'chick', 'chicken', 'child', 'chip', 'church', 'circle', 'city', 'closet', 'club', 'collection', 'community', 'computer', 'copy', 'corner', 'couch', 'council', 'country', 'county', 'cousin', 'cow', 'creature', 'cup', 'customer', 'daughter', 'desert', 'desk', 'device', 'diamond', 'disaster', 'district', 'dog', 'doll', 'door', 'downtown', 'dragon', 'drama', 'dress', 'driver', 'duck', 'dude', 'duke', 'earl', 'edge', 'egg', 'elevator', 'estate', 'family', 'fella', 'field', 'file', 'fire', 'fish', 'flight', 'floor', 'fox', 'friend', 'garden', 'gate', 'gift', 'god', 'governor', 'grandfather', 'grandma', 'grandmother', 'guard', 'guide', 'hall', 'hat', 'heaven', 'hole', 'hook', 'horse', 'hospital', 'hotel', 'house', 'human', 'inspector', 'island', 'job', 'joke', 'key', 'king', 'kit', 'kitchen', 'lake', 'land', 'lane', 'law', 'liar', 'light', 'line', 'list', 'machine', 'maid', 'mall', 'mama', 'man', 'map', 'market', 'mayor', 'mess', 'mirror', 'model', 'monkey', 'motel', 'mother', 'mouse', 'museum', 'neighborhood', 'note', 'nurse', 'object', 'office', 'orange', 'outfit', 'pack', 'package', 'page', 'palace', 'park', 'pen', 'person', 'pet', 'phone', 'picture', 'pie', 'pig', 'pilot', 'pipe', 'pizza', 'place', 'plane', 'plant', 'plate', 'pocket', 'pool', 'pot', 'present', 'prize', 'program', 'purse', 'queen', 'radio', 'restaurant', 'roof', 'room', 'rose', 'salad', 'sandwich', 'school', 'screen', 'shirt', 'shoe', 'shop', 'sign', 'snake', 'song', 'spot', 'square', 'store', 'street', 'sweetie', 'swing', 'switch', 'table', 'tape', 'team', 'telephone', 'temple', 'thief', 'thing', 'tie', 'tiger', 'toilet', 'tour', 'tower', 'town', 'treasure', 'trip', 'turkey', 'tv', 'uncle', 'video', 'village', 'wall', 'wallet', 'window', 'wire', 'wolf', 'woman', 'writer', 'yard'];
const OWNABLE_NOUN = ['bag', 'ball', 'belt', 'board', 'book', 'bottle', 'bowl', 'box', 'button', 'cable', 'cake', 'camera', 'cap', 'car', 'chair', 'chip', 'clock', 'closet', 'coat', 'computer', 'copy', 'couch', 'cup', 'desk', 'device', 'diamond', 'doll', 'dress', 'egg', 'file', 'gift', 'hat', 'hook', 'key', 'kit', 'light', 'list', 'machine', 'mirror', 'note', 'orange', 'outfit', 'pack', 'package', 'pen', 'pet', 'phone', 'picture', 'pie', 'pipe', 'pizza', 'plate', 'pot', 'present', 'purse', 'radio', 'ring', 'rose', 'salad', 'sandwich', 'screen', 'shirt', 'shoe', 'sign', 'table', 'tape', 'telephone', 'ticket', 'tie', 'tv', 'wallet', 'watch', 'wire'];
const PLACE_NOUN = ['apartment', 'bank', 'bar', 'basement', 'bathroom', 'bedroom', 'cabin', 'casino', 'castle', 'church', 'city', 'club', 'country', 'county', 'district', 'elevator', 'garden', 'hall', 'hospital', 'hotel', 'house', 'island', 'kitchen', 'mall', 'market', 'motel', 'museum', 'neighborhood', 'office', 'palace', 'park', 'pool', 'restaurant', 'roof', 'room', 'school', 'shop', 'store', 'street', 'temple', 'village', 'yard'];
// 动词框架排除：被当成独立词条的变位形式（was/goes/made…）+
// 无法命令、无法"喜欢做"的静态动词（seem/belong/exist…）。i_bought_a 与 i_have_a 共用可拥有物品表。
exports.EXCLUDED_FRAMEWORK_VERBS = new Set(['am', 'are', 'is', 'be', 'been', 'was', 'were', 'bought', 'brought', 'came', 'caught', 'comes', 'did', 'drew', 'eating', 'enjoying', 'felt', 'fired', 'goes', 'got', 'grew', 'had', 'looking', 'losing', 'made', 'said', 'sat', 'saw', 'seen', 'sent', 'spent', 'stood', 'thought', 'threw', 'tried', 'understood', 'went', 'works', 'bleeding', 'born', 'seem', 'appear', 'belong', 'exist', 'owe', 'depend', 'deserve', 'matter', 'remain', 'dare', 'bet', 'afford', 'intend', 'happen', 'occur', 'arise', 'consist']);
exports.FRAMEWORKS = [
    // ===== Phase 1：冷启动（difficulty 1-2）=====
    {
        id: 'there_is_a',
        template: 'There is a {}.',
        templateZh: '有一个{}。',
        slotType: 'noun',
        slotPos: 'n.',
        example: 'There is a book.',
        exampleZh: '有一本书。',
        difficulty: 1,
        grammarPoint: 'There is + 单数名词，表示"有某物存在"',
        phase: 1,
        subject: '',
        compatibleTags: ['object', 'place', 'food'],
        slotWhitelist: EXISTS_NOUN,
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'the_weather_is',
        template: 'The weather is {}.',
        templateZh: '天气很{}。',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'The weather is nice.',
        exampleZh: '天气很好。',
        difficulty: 1,
        grammarPoint: '主系表结构：主语 + be 动词 + 形容词',
        phase: 1,
        subject: 'weather',
        compatibleTags: ['general'],
        slotWhitelist: WEATHER_ADJ,
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'i_like_to',
        template: 'I like to {}.',
        templateZh: '我喜欢{}。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'I like to read.',
        exampleZh: '我喜欢阅读。',
        difficulty: 1,
        grammarPoint: 'like to + 动词原形',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_am_ing',
        template: 'I am {} now.',
        templateZh: '我正在{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'I am reading now.',
        exampleZh: '我正在阅读。',
        difficulty: 2,
        grammarPoint: '现在进行时：be + 现在分词',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_have_a',
        template: 'I have a {}.',
        templateZh: '我有一个{}。',
        slotType: 'noun',
        slotPos: 'n.',
        example: 'I have a car.',
        exampleZh: '我有一辆车。',
        difficulty: 1,
        grammarPoint: 'have 表示拥有',
        phase: 1,
        subject: '',
        compatibleTags: ['object', 'food'],
        slotWhitelist: OWNABLE_NOUN,
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'do_you',
        template: 'Do you {}?',
        templateZh: '你{}吗？',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'Do you swim?',
        exampleZh: '你游泳吗？',
        difficulty: 2,
        grammarPoint: '一般疑问句：Do + 主语 + 动词原形',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'interrogative',
        person: 2,
    },
    {
        id: 'i_want_to',
        template: 'I want to {}.',
        templateZh: '我想要{}。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'I want to sleep.',
        exampleZh: '我想睡觉。',
        difficulty: 1,
        grammarPoint: 'want to + 动词原形',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'let_me',
        template: 'Let me {}.',
        templateZh: '让我{}。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'Let me try.',
        exampleZh: '让我试试。',
        difficulty: 2,
        grammarPoint: 'let + 宾语 + 动词原形',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'it_is_adj',
        template: 'It is {}.',
        templateZh: '它很{}。',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'It is easy.',
        exampleZh: '这很容易。',
        difficulty: 1,
        grammarPoint: 'it 作形式主语的主系表结构',
        phase: 1,
        subject: '',
        compatibleTags: ['general'],
        slotWhitelist: THING_ADJ,
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'she_goes_to',
        template: 'She goes to the {}.',
        templateZh: '她去{}。',
        slotType: 'noun',
        slotPos: 'n.',
        example: 'She goes to the park.',
        exampleZh: '她去公园。',
        difficulty: 2,
        grammarPoint: '第三人称单数 + go to the + 地点',
        phase: 1,
        subject: '',
        compatibleTags: ['place'],
        slotWhitelist: PLACE_NOUN,
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'can_you',
        template: 'Can you {}?',
        templateZh: '你会{}吗？',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'Can you drive?',
        exampleZh: '你会开车吗？',
        difficulty: 2,
        grammarPoint: '情态动词 can + 动词原形 的疑问句',
        phase: 1,
        subject: '',
        compatibleTags: [],
        sentenceType: 'interrogative',
        person: 2,
    },
    {
        id: 'the_movie_is',
        template: 'The movie is {}.',
        templateZh: '这部电影很{}。',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'The movie is boring.',
        exampleZh: '这部电影很无聊。',
        difficulty: 2,
        grammarPoint: '主系表结构：具体主语 + be + 形容词',
        phase: 1,
        subject: 'movie',
        compatibleTags: ['general'],
        slotWhitelist: MOVIE_ADJ,
        sentenceType: 'declarative',
        person: 3,
    },
    // ===== Phase 2：阻抗突围（difficulty 2-3）=====
    {
        id: 'i_am_planning_to',
        template: "I'm planning to {}.",
        templateZh: '我打算{}。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: "I'm planning to drive.",
        exampleZh: '我打算开车。',
        difficulty: 2,
        grammarPoint: 'plan to + 动词原形，表示计划',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_should_have',
        template: 'I should have {}.',
        templateZh: '我本该{}。',
        slotType: 'pastParticiple',
        slotPos: 'v.',
        example: 'I should have known.',
        exampleZh: '我本该知道的。',
        difficulty: 3,
        grammarPoint: 'should have + 过去分词，表示"本该做而没做"',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_am_not_used_to',
        template: "I'm not used to {}.",
        templateZh: '我不习惯{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: "I'm not used to driving.",
        exampleZh: '我不习惯开车。',
        difficulty: 3,
        grammarPoint: 'be used to + doing，这里的 to 是介词，后接动名词',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'what_are_you',
        template: 'What are you {}?',
        templateZh: '你在{}什么？',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'What are you reading?',
        exampleZh: '你在读什么？',
        difficulty: 2,
        grammarPoint: '特殊疑问句 + 现在进行时',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'interrogative',
        person: 2,
    },
    {
        id: 'i_was_ing',
        template: 'I was {} when you called.',
        templateZh: '你打电话时我正在{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'I was sleeping when you called.',
        exampleZh: '你打电话时我正在睡觉。',
        difficulty: 3,
        grammarPoint: '过去进行时：was/were + 现在分词',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'he_has_already',
        template: 'He has already {}.',
        templateZh: '他已经{}了。',
        slotType: 'pastParticiple',
        slotPos: 'v.',
        example: 'He has already left.',
        exampleZh: '他已经走了。',
        difficulty: 3,
        grammarPoint: '第三人称现在完成时：has + 过去分词',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'i_did_not',
        template: "I didn't {} yesterday.",
        templateZh: '我昨天没有{}。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: "I didn't drive yesterday.",
        exampleZh: '我昨天没开车。',
        difficulty: 2,
        grammarPoint: '一般过去时否定：didn\'t + 动词原形（时态已由 did 承担）',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_bought_a',
        template: 'I bought a {}.',
        templateZh: '我买了一个{}。',
        slotType: 'noun',
        slotPos: 'n.',
        example: 'I bought a car.',
        exampleZh: '我买了一辆车。',
        difficulty: 2,
        grammarPoint: '一般过去时 + 名词宾语',
        phase: 2,
        subject: '',
        compatibleTags: ['object', 'food'],
        slotWhitelist: OWNABLE_NOUN,
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'the_food_was',
        template: 'The food was {}.',
        templateZh: '食物很{}。',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'The food was delicious.',
        exampleZh: '食物很美味。',
        difficulty: 2,
        grammarPoint: '过去时主系表：主语 + was + 形容词',
        phase: 2,
        subject: 'food',
        compatibleTags: ['general'],
        slotWhitelist: FOOD_ADJ,
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'dont',
        template: "Don't {}!",
        templateZh: '别{}！',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: "Don't run!",
        exampleZh: '别跑！',
        difficulty: 2,
        grammarPoint: '祈使句否定：Don\'t + 动词原形',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'imperative',
        person: 2,
    },
    {
        id: 'i_enjoy',
        template: 'I enjoy {}.',
        templateZh: '我享受{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'I enjoy swimming.',
        exampleZh: '我享受游泳。',
        difficulty: 2,
        grammarPoint: 'enjoy + doing，enjoy 后只能接动名词',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'will_you',
        template: 'Will you {}?',
        templateZh: '你会{}吗？',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'Will you come?',
        exampleZh: '你会来吗？',
        difficulty: 2,
        grammarPoint: '一般将来时疑问句：Will + 主语 + 动词原形',
        phase: 2,
        subject: '',
        compatibleTags: [],
        sentenceType: 'interrogative',
        person: 2,
    },
    // ===== Phase 3：肌内固化（difficulty 3-5）=====
    {
        id: 'if_i_had',
        template: 'If I had {}, I would be happy.',
        templateZh: '如果我{}了，我会很开心。',
        slotType: 'pastParticiple',
        slotPos: 'v.',
        example: 'If I had known, I would be happy.',
        exampleZh: '如果我知道了，我会很开心。',
        difficulty: 4,
        grammarPoint: '虚拟语气：If + 过去完成时，主句 would + 动词原形',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'i_wish_i_had',
        template: 'I wish I had {}.',
        templateZh: '我希望我当时{}了。',
        slotType: 'pastParticiple',
        slotPos: 'v.',
        example: 'I wish I had driven.',
        exampleZh: '我希望我当时开车了。',
        difficulty: 4,
        grammarPoint: 'wish + 过去完成时，表示对过去的遗憾',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'situation_must_be',
        template: 'The situation must be {}.',
        templateZh: '情况一定很{}。',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'The situation must be serious.',
        exampleZh: '情况一定很严重。',
        difficulty: 3,
        grammarPoint: 'must be 表示对现在的肯定推测',
        phase: 3,
        subject: 'situation',
        compatibleTags: ['general'],
        slotWhitelist: SITUATION_ADJ,
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'she_would_rather',
        template: 'She would rather {} than wait.',
        templateZh: '她宁愿{}也不愿等。',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: 'She would rather leave than wait.',
        exampleZh: '她宁愿离开也不愿等。',
        difficulty: 4,
        grammarPoint: 'would rather + 动词原形 + than + 动词原形',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'i_have_been_ing',
        template: 'I have been {} for two hours.',
        templateZh: '我已经{}两个小时了。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'I have been reading for two hours.',
        exampleZh: '我已经读了两个小时了。',
        difficulty: 4,
        grammarPoint: '现在完成进行时：have been + 现在分词',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'how_adj',
        template: 'How {} is it?',
        templateZh: '它有多{}？',
        slotType: 'adjective',
        slotPos: 'adj.',
        example: 'How big is it?',
        exampleZh: '它有多大？',
        difficulty: 3,
        grammarPoint: 'How + 形容词 引导的特殊疑问句',
        phase: 3,
        subject: '',
        compatibleTags: ['general'],
        slotWhitelist: GRADABLE_ADJ,
        sentenceType: 'interrogative',
        person: 2,
    },
    {
        id: 'cannot_help',
        template: 'I cannot help {} when I see it.',
        templateZh: '我看到它时忍不住{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'I cannot help crying when I see it.',
        exampleZh: '我看到它时忍不住哭。',
        difficulty: 4,
        grammarPoint: 'cannot help + doing，表示"忍不住做某事"',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'had_i_known',
        template: 'Had I known, I would have {}.',
        templateZh: '早知道的话，我就{}了。',
        slotType: 'pastParticiple',
        slotPos: 'v.',
        example: 'Had I known, I would have left.',
        exampleZh: '早知道的话，我就走了。',
        difficulty: 5,
        grammarPoint: '倒装虚拟语气：省略 if，把 had 提前',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'it_is_worth',
        template: 'It is worth {}.',
        templateZh: '这值得{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'It is worth trying.',
        exampleZh: '这值得一试。',
        difficulty: 3,
        grammarPoint: 'be worth + doing，主动形式表被动含义',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 1,
    },
    {
        id: 'lets',
        template: "Let's {} together!",
        templateZh: '我们一起{}吧！',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: "Let's swim together!",
        exampleZh: '我们一起游泳吧！',
        difficulty: 3,
        grammarPoint: "祈使句提建议：Let's + 动词原形",
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'imperative',
        person: 1,
    },
    {
        id: 'they_looking_forward',
        template: 'They are looking forward to {}.',
        templateZh: '他们期待{}。',
        slotType: 'ing',
        slotPos: 'v.',
        example: 'They are looking forward to coming.',
        exampleZh: '他们期待到来。',
        difficulty: 4,
        grammarPoint: 'look forward to + doing，to 是介词后接动名词',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'declarative',
        person: 3,
    },
    {
        id: 'why_didnt_you',
        template: "Why didn't you {}?",
        templateZh: '你为什么没{}？',
        slotType: 'infinitive',
        slotPos: 'v.',
        example: "Why didn't you come?",
        exampleZh: '你为什么没来？',
        difficulty: 3,
        grammarPoint: 'Why + didn\'t + 主语 + 动词原形',
        phase: 3,
        subject: '',
        compatibleTags: [],
        sentenceType: 'interrogative',
        person: 2,
    },
];
/** 按 id 查框架 */
function getFrameworkById(id) {
    return exports.FRAMEWORKS.find((f) => f.id === id);
}

});

__def("shared/data/usageNotes", function (module, exports, require) {
"use strict";
// 多义词用法详解。单独成文件，便于逐批复审与扩充；键为 word.en 的小写。
// 只给高频多义词做（介词、核心动词、助词性副词、少数多义名词/形容词），
// 单义词（hospital / panda）不做——加了是噪音。
//
// 结构：core = 一句话核心意象；senses = 各义项，每项一个用法标签 + 例句 + 中文。
// 例句尽量给"词块"（thanks for / for now），因为母语者脑子里存的是块不是词。
Object.defineProperty(exports, "__esModule", { value: true });
exports.USAGE_NOTES = void 0;
exports.getUsageNote = getUsageNote;
exports.USAGE_NOTES = {
    for: {
        core: '指向一个对象 / 目标——指向谁、指向多久、指向为了什么',
        senses: [
            { use: '给谁 / 对象', en: 'This gift is for you.', zh: '这礼物是给你的。' },
            { use: '持续多久（和"为了"无关）', en: 'I waited for two hours.', zh: '我等了两个小时。' },
            { use: '目的 / 为了', en: 'I did it for money.', zh: '我为了钱才做的。' },
            { use: '换取 / 价格', en: 'I bought it for ten euros.', zh: '我花十欧买的。' },
            { use: '因为 / 就……而言', en: 'Thanks for your help.', zh: '谢谢你的帮忙。' },
        ],
    },
    to: {
        core: '朝向并到达一个终点——方向、对象、或程度的终点',
        senses: [
            { use: '去往 / 方向', en: 'I go to school.', zh: '我去学校。' },
            { use: '给谁', en: 'Give it to me.', zh: '给我。' },
            { use: '不定式标记（to + 动词原形）', en: 'I want to eat.', zh: '我想吃东西。' },
            { use: '到……为止', en: 'from nine to five', zh: '从九点到五点' },
            { use: '对……来说', en: "It's important to me.", zh: '这对我很重要。' },
        ],
    },
    on: {
        core: '附着在表面之上，引申为"进行中、关于"',
        senses: [
            { use: '在……上面', en: 'The book is on the table.', zh: '书在桌子上。' },
            { use: '某天 / 日期', en: 'on Monday', zh: '在周一' },
            { use: '关于', en: 'a book on animals', zh: '一本关于动物的书' },
            { use: '开着 / 进行中', en: 'The light is on.', zh: '灯开着。' },
            { use: '靠……维生 / 依赖', en: 'live on rice', zh: '靠米饭生活' },
        ],
    },
    get: {
        core: '获得，或"到达某个状态"——英语最万能的动词之一',
        senses: [
            { use: '得到 / 拿到', en: 'I got a new job.', zh: '我找到了新工作。' },
            { use: '变得（get + 形容词）', en: "It's getting cold.", zh: '天变冷了。' },
            { use: '到达', en: 'I get home at six.', zh: '我六点到家。' },
            { use: '听懂 / 明白', en: "I don't get it.", zh: '我没听懂。' },
            { use: '让……做 / 使', en: 'I got the car fixed.', zh: '我把车修好了。' },
        ],
    },
    take: {
        core: '拿取、带走，引申为"花费、接受、乘坐"',
        senses: [
            { use: '拿 / 带', en: 'Take your umbrella.', zh: '带上你的伞。' },
            { use: '花费（时间）', en: 'It takes an hour.', zh: '要花一个小时。' },
            { use: '乘坐', en: 'take the bus', zh: '坐公交车' },
            { use: '服用', en: 'take this medicine', zh: '吃这个药' },
            { use: '接受 / 承受', en: "He can't take a joke.", zh: '他开不起玩笑。' },
        ],
    },
    run: {
        core: '跑，引申为"运转、经营、流淌"',
        senses: [
            { use: '跑步', en: 'I run every morning.', zh: '我每天早上跑步。' },
            { use: '运转（机器）', en: 'The engine runs well.', zh: '发动机运转良好。' },
            { use: '经营', en: 'She runs a small shop.', zh: '她经营一家小店。' },
            { use: '流淌', en: 'My nose is running.', zh: '我在流鼻涕。' },
            { use: '要迟到 / 超时', en: "We're running late.", zh: '我们要迟到了。' },
        ],
    },
    // ===== 介词批 =====
    about: {
        core: '围绕一个话题或大致的范围',
        senses: [
            { use: '关于', en: 'a book about animals', zh: '一本关于动物的书' },
            { use: '大约', en: 'about ten people', zh: '大约十个人' },
            { use: '正要（be about to）', en: "I'm about to leave.", zh: '我正要走。' },
        ],
    },
    at: {
        core: '一个精确的点——地点、时刻或目标',
        senses: [
            { use: '在（某地点）', en: 'at the door', zh: '在门口' },
            { use: '在（某时刻）', en: 'at six o’clock', zh: '在六点' },
            { use: '朝向（目标）', en: 'Look at me.', zh: '看着我。' },
            { use: '擅长 / 在某方面', en: 'good at math', zh: '擅长数学' },
        ],
    },
    in: {
        core: '在某个范围之内——空间、时间段、状态',
        senses: [
            { use: '在……里', en: 'in the classroom', zh: '在教室里' },
            { use: '在（月份 / 年 / 长时段）', en: 'in July', zh: '在七月' },
            { use: '……之后（将来）', en: 'in ten minutes', zh: '十分钟后' },
            { use: '穿着 / 用某语言', en: 'in English', zh: '用英语' },
        ],
    },
    of: {
        core: '所属、构成、或与之相关',
        senses: [
            { use: '……的（所属）', en: 'the door of the room', zh: '房间的门' },
            { use: '由……构成 / ……之中', en: 'a cup of tea', zh: '一杯茶' },
            { use: '关于 / 想到', en: 'I often think of you.', zh: '我常想起你。' },
        ],
    },
    by: {
        core: '在旁边、经由某方式、或不迟于某时',
        senses: [
            { use: '在旁边', en: 'sit by the window', zh: '坐在窗边' },
            { use: '乘坐 / 用某方式', en: 'by bus', zh: '坐公交' },
            { use: '被（动作发出者）', en: 'written by her', zh: '由她写的' },
            { use: '不迟于 / 到……为止', en: 'by Friday', zh: '在周五前' },
        ],
    },
    from: {
        core: '一个起点——地点、时间、来源',
        senses: [
            { use: '从……（地点 / 时间）', en: 'from nine to five', zh: '从九点到五点' },
            { use: '来自 / 出自', en: 'a letter from Tom', zh: '汤姆寄来的信' },
            { use: '分辨 / 区分（tell A from B）', en: 'tell right from wrong', zh: '分辨对错' },
        ],
    },
    with: {
        core: '伴随——一起、用、或带有',
        senses: [
            { use: '和……一起', en: 'Come with me.', zh: '跟我来。' },
            { use: '用（工具）', en: 'cut it with a knife', zh: '用刀切' },
            { use: '带有 / 具有', en: 'a girl with long hair', zh: '长头发的女孩' },
        ],
    },
    over: {
        core: '在上方（常带跨越 / 覆盖）、超过、或结束',
        senses: [
            { use: '在……上方 / 越过', en: 'a bridge over the river', zh: '河上的桥' },
            { use: '超过', en: 'over fifty people', zh: '五十多人' },
            { use: '结束了', en: 'The game is over.', zh: '比赛结束了。' },
            { use: '遍及 / 在……期间', en: 'all over the world', zh: '全世界' },
        ],
    },
    under: {
        core: '在下方、少于、或处于某状态之下',
        senses: [
            { use: '在……下面', en: 'under the table', zh: '在桌子底下' },
            { use: '少于 / 未满', en: 'under ten euros', zh: '不到十欧' },
            { use: '处于……之下', en: 'under pressure', zh: '在压力之下' },
        ],
    },
    into: {
        core: '从外进入、发生变化、或撞上',
        senses: [
            { use: '进入', en: 'come into the room', zh: '进入房间' },
            { use: '变成', en: 'cut it into pieces', zh: '切成小块' },
            { use: '撞上', en: 'run into a car', zh: '撞上一辆车' },
        ],
    },
    through: {
        core: '从一端穿到另一端——空间、时间、或手段',
        senses: [
            { use: '穿过', en: 'walk through the park', zh: '穿过公园' },
            { use: '从头到尾', en: 'all through the night', zh: '整整一夜' },
            { use: '通过（手段）', en: 'I heard it through a friend.', zh: '我从一个朋友那儿听说的。' },
        ],
    },
    after: {
        core: '在……之后（时间、顺序），或追随',
        senses: [
            { use: '在……之后', en: 'after dinner', zh: '晚饭后' },
            { use: '追赶 / 追随', en: 'run after the bus', zh: '追公交车' },
            { use: '一个接一个', en: 'day after day', zh: '日复一日' },
        ],
    },
    before: {
        core: '在……之前——时间、位置、或顺序',
        senses: [
            { use: '在……之前（时间）', en: 'before dinner', zh: '晚饭前' },
            { use: '在……前面（位置）', en: 'stand before the class', zh: '站在全班面前' },
            { use: '排在……前', en: 'put family before work', zh: '把家庭放在工作前面' },
        ],
    },
    behind: {
        core: '在……后面——位置、进度、或立场',
        senses: [
            { use: '在……后面', en: 'behind the door', zh: '在门后面' },
            { use: '落后', en: 'behind schedule', zh: '落后于计划' },
            { use: '在背后支持', en: "We're behind you.", zh: '我们支持你。' },
        ],
    },
    around: {
        core: '围绕、在周围、或大约',
        senses: [
            { use: '围绕', en: 'sit around the table', zh: '围着桌子坐' },
            { use: '在附近 / 四处', en: 'look around', zh: '四处看看' },
            { use: '大约', en: 'around ten o’clock', zh: '大约十点' },
        ],
    },
    against: {
        core: '反方向的接触或对抗',
        senses: [
            { use: '反对', en: 'vote against the plan', zh: '投票反对这个计划' },
            { use: '靠着', en: 'lean against the wall', zh: '靠在墙上' },
            { use: '对阵', en: 'play against their team', zh: '和他们队比赛' },
        ],
    },
    along: {
        core: '沿着一条线，或一起（前进）',
        senses: [
            { use: '沿着', en: 'walk along the river', zh: '沿着河走' },
            { use: '一起 / 带着', en: 'bring your sister along', zh: '把你妹妹带上' },
        ],
    },
    across: {
        core: '从一边到另一边，或在对面',
        senses: [
            { use: '穿过', en: 'walk across the road', zh: '穿过马路' },
            { use: '在……对面', en: 'the shop across the street', zh: '街对面的店' },
        ],
    },
    above: {
        core: '在……上方 / 高于',
        senses: [
            { use: '在……上方', en: 'The bird flew above the tree.', zh: '鸟在树的上方飞。' },
            { use: '高于 / 超过', en: 'above average', zh: '高于平均' },
        ],
    },
    below: {
        core: '在……下方 / 低于',
        senses: [
            { use: '在……下方', en: 'the flat below mine', zh: '我楼下的那户' },
            { use: '低于', en: 'below zero', zh: '零度以下' },
        ],
    },
    between: {
        core: '在两者之间——位置或选择',
        senses: [
            { use: '（空间）在……之间', en: 'between the bank and the shop', zh: '在银行和商店之间' },
            { use: '（选择 / 关系）之间', en: 'choose between the two', zh: '在两者之间选' },
        ],
    },
    // ===== 核心动词批 =====
    make: {
        core: '做出、制造，引申"使得、赚得、凑成"',
        senses: [
            { use: '制作', en: 'make a cake', zh: '做蛋糕' },
            { use: '使得（make sb / sth + 形容词）', en: 'It made me happy.', zh: '这让我很开心。' },
            { use: '赚（钱）', en: 'make money', zh: '赚钱' },
            { use: '做出 / 凑成', en: 'make a decision', zh: '做决定' },
        ],
    },
    do: {
        core: '做（万能动作词），也当助动词',
        senses: [
            { use: '做（某事）', en: 'do your homework', zh: '做作业' },
            { use: '助动词（疑问 / 否定）', en: "Do you know? I don't.", zh: '你知道吗？我不知道。' },
            { use: '行 / 够了', en: 'That will do.', zh: '这样就行了。' },
            { use: '从事（工作）', en: 'What do you do?', zh: '你做什么工作？' },
        ],
    },
    have: {
        core: '拥有，引申"吃、经历、让……做"',
        senses: [
            { use: '拥有', en: 'I have a car.', zh: '我有辆车。' },
            { use: '吃 / 喝', en: 'have breakfast', zh: '吃早饭' },
            { use: '经历 / 进行', en: 'have a meeting', zh: '开会' },
            { use: '让 / 使（have sth done）', en: 'have the car fixed', zh: '把车修好' },
        ],
    },
    go: {
        core: '去、离开，引申"变成、进展、运转"',
        senses: [
            { use: '去', en: 'go to school', zh: '去上学' },
            { use: '变成（多指变坏）', en: 'The milk went bad.', zh: '牛奶坏了。' },
            { use: '进展', en: 'How is it going?', zh: '进展如何？' },
            { use: '消失 / 用完', en: 'My money is all gone.', zh: '我的钱都没了。' },
        ],
    },
    come: {
        core: '来（朝说话者），引申"变成、来自"',
        senses: [
            { use: '来', en: 'Come here.', zh: '过来。' },
            { use: '变成 / 实现', en: 'come true', zh: '成真' },
            { use: '来自 / 出自', en: 'She comes from China.', zh: '她来自中国。' },
        ],
    },
    give: {
        core: '给，引申"发出、放弃"',
        senses: [
            { use: '给', en: 'Give me the book.', zh: '把书给我。' },
            { use: '发出（动作 / 表情）', en: 'give a speech', zh: '做演讲' },
            { use: '放弃（give up）', en: "Don't give up.", zh: '别放弃。' },
        ],
    },
    see: {
        core: '看见，引申"明白、会面、判断"',
        senses: [
            { use: '看见', en: 'I can see the sea.', zh: '我能看见大海。' },
            { use: '明白', en: 'I see.', zh: '我懂了。' },
            { use: '见（医生）/ 会面', en: 'see a doctor', zh: '看医生' },
            { use: '看看 / 判断', en: "Let's see.", zh: '我们看看吧。' },
        ],
    },
    look: {
        core: '主动地看，或显得',
        senses: [
            { use: '看（look at）', en: 'Look at me.', zh: '看着我。' },
            { use: '看起来 / 显得', en: 'You look tired.', zh: '你看起来很累。' },
            { use: '寻找（look for）', en: 'look for my keys', zh: '找我的钥匙' },
            { use: '当心（look out）', en: 'Look out!', zh: '小心！' },
        ],
    },
    put: {
        core: '放置，引申"表达、使处于某状态"',
        senses: [
            { use: '放', en: 'put it on the table', zh: '放桌上' },
            { use: '穿上（put on）', en: 'put on your coat', zh: '穿上外套' },
            { use: '推迟（put off）', en: 'put off the meeting', zh: '推迟会议' },
            { use: '表达', en: 'to put it simply', zh: '简单来说' },
        ],
    },
    keep: {
        core: '保持、留住',
        senses: [
            { use: '保持（某状态）', en: 'keep quiet', zh: '保持安静' },
            { use: '留着 / 保存', en: 'You can keep it.', zh: '你可以留着。' },
            { use: '继续（keep doing）', en: 'keep trying', zh: '不断尝试' },
            { use: '饲养', en: 'keep a dog', zh: '养狗' },
        ],
    },
    turn: {
        core: '转动、转向，引申"变成"',
        senses: [
            { use: '转 / 拐', en: 'turn left', zh: '左转' },
            { use: '开 / 关（turn on/off）', en: 'turn on the light', zh: '开灯' },
            { use: '变成（turn into）', en: 'turn red', zh: '变红' },
            { use: '轮到（名词）', en: "It's your turn.", zh: '轮到你了。' },
        ],
    },
    hold: {
        core: '握住、保持、容纳',
        senses: [
            { use: '拿着 / 握', en: 'Hold my hand.', zh: '握着我的手。' },
            { use: '容纳', en: 'The room holds fifty.', zh: '这房间能容纳五十人。' },
            { use: '举办', en: 'hold a party', zh: '办派对' },
            { use: '稍等（hold on）', en: 'Hold on a second.', zh: '稍等一下。' },
        ],
    },
    break: {
        core: '弄断、打破，引申"中断、违反"',
        senses: [
            { use: '弄坏 / 打破', en: 'break the glass', zh: '打碎玻璃杯' },
            { use: '休息（名词 a break）', en: 'take a break', zh: '休息一下' },
            { use: '违反', en: 'break the rules', zh: '违反规则' },
            { use: '出故障（break down）', en: 'The car broke down.', zh: '车抛锚了。' },
        ],
    },
    bring: {
        core: '带来（朝说话者），引申"导致"',
        senses: [
            { use: '带来', en: 'Bring your book tomorrow.', zh: '明天带上你的书。' },
            { use: '导致 / 带来（结果）', en: 'Spring brings warm weather.', zh: '春天带来温暖天气。' },
            { use: '抚养 / 提起（bring up）', en: 'bring up a child', zh: '抚养孩子' },
        ],
    },
    set: {
        core: '放置、设定',
        senses: [
            { use: '摆放', en: 'set the table', zh: '摆餐具' },
            { use: '设定', en: 'set the alarm', zh: '定闹钟' },
            { use: '（太阳）落下', en: 'The sun sets in the west.', zh: '太阳从西边落下。' },
            { use: '出发（set off / out）', en: 'We set off early.', zh: '我们很早出发。' },
        ],
    },
    call: {
        core: '呼喊、称呼、打电话',
        senses: [
            { use: '打电话', en: 'Call me later.', zh: '晚点打给我。' },
            { use: '称呼 / 叫作', en: 'They call him Tom.', zh: '他们叫他汤姆。' },
            { use: '喊 / 叫', en: 'call for help', zh: '呼救' },
        ],
    },
    leave: {
        core: '离开，引申"留下、剩下"',
        senses: [
            { use: '离开', en: 'I leave home at eight.', zh: '我八点出门。' },
            { use: '留下 / 忘带', en: 'I left my bag at home.', zh: '我把包落在家里了。' },
            { use: '剩下', en: 'There are two left.', zh: '还剩两个。' },
            { use: '让……保持', en: 'Leave the door open.', zh: '让门开着。' },
        ],
    },
    let: {
        core: '允许、让',
        senses: [
            { use: '让 / 允许', en: 'Let me help you.', zh: '让我帮你。' },
            { use: '提议（let’s）', en: "Let's go.", zh: '我们走吧。' },
            { use: '出租（英式）', en: 'a room to let', zh: '一间待租的房' },
        ],
    },
    mean: {
        core: '意思是、意味着、打算',
        senses: [
            { use: '意思是', en: 'What does it mean?', zh: '这是什么意思？' },
            { use: '意味着', en: 'This means trouble.', zh: '这意味着麻烦。' },
            { use: '打算（mean to）', en: 'I meant to call you.', zh: '我本想给你打电话。' },
            { use: '认真的', en: 'I mean it.', zh: '我是认真的。' },
        ],
    },
    mind: {
        core: '介意、当心（名词：头脑 / 想法）',
        senses: [
            { use: '介意', en: 'Do you mind if I sit here?', zh: '你介意我坐这吗？' },
            { use: '当心', en: 'Mind the step.', zh: '当心台阶。' },
            { use: '改变主意（名词）', en: 'I changed my mind.', zh: '我改主意了。' },
        ],
    },
    miss: {
        core: '错过、思念、没赶上',
        senses: [
            { use: '想念', en: 'I miss you.', zh: '我想你。' },
            { use: '错过 / 没赶上', en: 'miss the bus', zh: '错过公交' },
            { use: '没击中 / 没听清', en: "I missed what you said.", zh: '我没听清你说的。' },
        ],
    },
    move: {
        core: '移动，引申"搬家、感动"',
        senses: [
            { use: '移动', en: "Don't move.", zh: '别动。' },
            { use: '搬家', en: 'We moved to a new house.', zh: '我们搬进了新房子。' },
            { use: '感动', en: 'The story moved me.', zh: '这故事打动了我。' },
        ],
    },
    pass: {
        core: '经过、传递、通过',
        senses: [
            { use: '经过', en: 'We pass the school every day.', zh: '我们每天经过那所学校。' },
            { use: '递给', en: 'Pass me the salt.', zh: '把盐递给我。' },
            { use: '通过（考试）', en: 'pass the exam', zh: '通过考试' },
            { use: '（时间）流逝', en: 'Time passes quickly.', zh: '时间过得快。' },
        ],
    },
    play: {
        core: '玩、进行（运动）、演奏、扮演',
        senses: [
            { use: '玩', en: 'play games', zh: '玩游戏' },
            { use: '打（球）/ 比赛', en: 'play football', zh: '踢足球' },
            { use: '演奏', en: 'play the piano', zh: '弹钢琴' },
            { use: '扮演 / 播放', en: 'play a small role', zh: '演一个小角色' },
        ],
    },
    point: {
        core: '指向；名词：要点 / 分数 / 意义',
        senses: [
            { use: '指（point at / to）', en: 'point at the door', zh: '指向门' },
            { use: '要点（名词）', en: "That's the point.", zh: '这才是关键。' },
            { use: '分数（名词）', en: 'score five points', zh: '得五分' },
            { use: '意义（名词）', en: "What's the point?", zh: '这有什么意义？' },
        ],
    },
    catch: {
        core: '抓住、赶上、染上',
        senses: [
            { use: '抓住 / 接住', en: 'Catch the ball!', zh: '接住球！' },
            { use: '赶上（交通）', en: 'catch the last bus', zh: '赶上末班车' },
            { use: '染上（病）', en: 'catch a cold', zh: '感冒' },
            { use: '听清', en: "I didn't catch that.", zh: '我没听清。' },
        ],
    },
    pick: {
        core: '挑选、捡起、接（人）',
        senses: [
            { use: '挑选', en: 'Pick any card.', zh: '任选一张牌。' },
            { use: '捡起（pick up）', en: 'pick up the pen', zh: '捡起那支笔' },
            { use: '接（人）（pick up）', en: "I'll pick you up at six.", zh: '我六点来接你。' },
        ],
    },
    carry: {
        core: '携带、搬运、支撑',
        senses: [
            { use: '拿 / 提', en: 'carry a heavy bag', zh: '提一个重包' },
            { use: '运送', en: 'The truck carries goods.', zh: '卡车运货。' },
            { use: '继续（carry on）', en: 'carry on working', zh: '继续工作' },
        ],
    },
    fall: {
        core: '落下、倒下，引申"进入某状态"',
        senses: [
            { use: '落下 / 摔倒', en: 'She fell down the stairs.', zh: '她从楼梯上摔下来。' },
            { use: '下降', en: 'Prices fell last month.', zh: '上个月价格下跌了。' },
            { use: '进入某状态（fall asleep / ill）', en: 'fall asleep', zh: '睡着' },
        ],
    },
    stand: {
        core: '站立，引申"忍受"（名词：立场）',
        senses: [
            { use: '站', en: 'Please stand up.', zh: '请站起来。' },
            { use: '位于 / 立着', en: 'The tower stands on a hill.', zh: '塔立在山上。' },
            { use: '忍受（can’t stand）', en: "I can't stand the noise.", zh: '我受不了这噪音。' },
        ],
    },
    watch: {
        core: '观看、看守、当心（名词：手表）',
        senses: [
            { use: '看 / 观看', en: 'watch TV', zh: '看电视' },
            { use: '看守 / 照看', en: 'watch the kids', zh: '看着孩子' },
            { use: '当心', en: 'Watch your step.', zh: '当心脚下。' },
            { use: '手表（名词）', en: 'a new watch', zh: '一块新手表' },
        ],
    },
    meet: {
        core: '遇见、会面，引申"满足"',
        senses: [
            { use: '遇见 / 认识', en: 'Nice to meet you.', zh: '很高兴认识你。' },
            { use: '会合', en: "Let's meet at six.", zh: '我们六点见。' },
            { use: '满足（需求）', en: 'meet the needs', zh: '满足需求' },
        ],
    },
    feel: {
        core: '感觉、触摸、认为',
        senses: [
            { use: '感觉', en: 'I feel tired today.', zh: '我今天觉得累。' },
            { use: '摸起来', en: 'It feels soft.', zh: '摸起来很软。' },
            { use: '认为（feel that）', en: 'I feel you are right.', zh: '我觉得你是对的。' },
        ],
    },
    find: {
        core: '找到、发现、觉得',
        senses: [
            { use: '找到', en: "I can't find my keys.", zh: '我找不到钥匙。' },
            { use: '发现', en: 'I found a mistake.', zh: '我发现了一个错误。' },
            { use: '觉得（find sth + 形容词）', en: 'I find it hard.', zh: '我觉得这很难。' },
        ],
    },
    work: {
        core: '工作，引申"运转、奏效"',
        senses: [
            { use: '工作', en: 'I work in a bank.', zh: '我在银行工作。' },
            { use: '运转 / 好使', en: "The pen doesn't work.", zh: '这笔不好使。' },
            { use: '奏效 / 起作用', en: 'The medicine worked.', zh: '药起作用了。' },
        ],
    },
    change: {
        core: '改变、更换（名词：零钱 / 变化）',
        senses: [
            { use: '改变 / 变化', en: 'The weather changes fast.', zh: '天气变得快。' },
            { use: '更换', en: 'change your clothes', zh: '换衣服' },
            { use: '换乘', en: 'change trains', zh: '换乘火车' },
            { use: '零钱（名词）', en: 'Do you have any change?', zh: '你有零钱吗？' },
        ],
    },
    wear: {
        core: '穿戴（状态），引申"磨损"',
        senses: [
            { use: '穿 / 戴', en: 'wear a coat', zh: '穿外套' },
            { use: '磨损（wear out）', en: 'My shoes wore out.', zh: '我的鞋磨坏了。' },
        ],
    },
    // ===== 助词性副词 / 多义副词 · 形容词 · 名词 批 =====
    up: {
        core: '向上，引申"起来、完全用尽、发生"',
        senses: [
            { use: '向上 / 起来', en: 'stand up', zh: '站起来' },
            { use: '完全（做完 / 用光）', en: 'Eat it up.', zh: '把它吃光。' },
            { use: '发生（口语 what’s up）', en: "What's up?", zh: '怎么了？' },
        ],
    },
    down: {
        core: '向下，引申"记下、坏了"',
        senses: [
            { use: '向下 / 坐下', en: 'sit down', zh: '坐下' },
            { use: '记下（write down）', en: 'Write it down.', zh: '把它记下来。' },
            { use: '出故障（be down）', en: 'The system is down.', zh: '系统崩了。' },
        ],
    },
    out: {
        core: '向外，引申"用完、出现、大声"',
        senses: [
            { use: '向外 / 出去', en: 'go out', zh: '出去' },
            { use: '用完 / 熄灭（run out）', en: 'We ran out of milk.', zh: '我们牛奶用完了。' },
            { use: '出现 / 问世（come out）', en: 'The book came out.', zh: '这书出版了。' },
        ],
    },
    off: {
        core: '离开、分离，引申"关掉、休假、取消"',
        senses: [
            { use: '脱下 / 起飞（take off）', en: 'Take off your coat.', zh: '脱掉外套。' },
            { use: '关掉（turn off）', en: 'turn off the light', zh: '关灯' },
            { use: '休假（a day off）', en: 'I have a day off.', zh: '我休一天假。' },
            { use: '取消（call off）', en: 'They called it off.', zh: '他们取消了。' },
        ],
    },
    back: {
        core: '向后、回原处',
        senses: [
            { use: '回来 / 回去（come back）', en: 'Come back soon.', zh: '早点回来。' },
            { use: '归还（give back）', en: 'Give it back to me.', zh: '把它还给我。' },
            { use: '支持（back sb）', en: "I'll back you.", zh: '我支持你。' },
        ],
    },
    away: {
        core: '离开、在远处',
        senses: [
            { use: '走开 / 离开', en: 'Go away.', zh: '走开。' },
            { use: '拿走（take away）', en: 'Take it away.', zh: '把它拿走。' },
            { use: '（距离）之远', en: 'The station is two miles away.', zh: '车站在两英里外。' },
        ],
    },
    still: {
        core: '仍然；也作"静止的、更"',
        senses: [
            { use: '仍然', en: "I'm still here.", zh: '我还在。' },
            { use: '静止不动（形容词）', en: 'Sit still.', zh: '坐着别动。' },
            { use: '更（+比较级）', en: 'still better', zh: '更好' },
        ],
    },
    just: {
        core: '刚好、仅仅',
        senses: [
            { use: '刚刚', en: 'I just arrived.', zh: '我刚到。' },
            { use: '只是 / 仅仅', en: 'just a little', zh: '就一点点' },
            { use: '正好 / 就', en: "That's just right.", zh: '正好合适。' },
        ],
    },
    even: {
        core: '甚至；也作"平的 / 偶数、势均力敌"',
        senses: [
            { use: '甚至', en: "He didn't even call.", zh: '他甚至没打电话。' },
            { use: '平的 / 偶数（形容词）', en: 'an even number', zh: '偶数' },
            { use: '势均力敌', en: 'The score is even.', zh: '比分打平。' },
        ],
    },
    well: {
        core: '好地（副词），也作"健康的、那么、井"',
        senses: [
            { use: '好地（副词）', en: 'She sings well.', zh: '她唱得好。' },
            { use: '健康的（形容词）', en: 'I feel well.', zh: '我感觉挺好。' },
            { use: '嗯 / 那么（语气词）', en: 'Well, let me think.', zh: '嗯，让我想想。' },
        ],
    },
    pretty: {
        core: '漂亮的；（口语）相当',
        senses: [
            { use: '漂亮的', en: 'a pretty dress', zh: '一条漂亮裙子' },
            { use: '相当（副词）', en: 'pretty good', zh: '相当不错' },
        ],
    },
    like: {
        core: '像；喜欢',
        senses: [
            { use: '像 / 如同（介词）', en: 'It looks like rain.', zh: '看起来要下雨。' },
            { use: '喜欢（动词）', en: 'I like tea.', zh: '我喜欢茶。' },
            { use: '比如', en: 'fruit like apples', zh: '像苹果这样的水果' },
        ],
    },
    right: {
        core: '对的、右边、正好、权利',
        senses: [
            { use: '对的 / 正确', en: "You're right.", zh: '你说得对。' },
            { use: '右边', en: 'turn right', zh: '右转' },
            { use: '正好 / 就（副词）', en: 'right now', zh: '就现在' },
            { use: '权利（名词）', en: 'human rights', zh: '人权' },
        ],
    },
    hard: {
        core: '硬的、难的、努力地',
        senses: [
            { use: '难的', en: 'a hard question', zh: '一道难题' },
            { use: '硬的', en: 'a hard bed', zh: '一张硬床' },
            { use: '努力地 / 使劲（副词）', en: 'work hard', zh: '努力工作' },
        ],
    },
    fine: {
        core: '好的、细的；也作"罚款"',
        senses: [
            { use: '好的 / 没事', en: "I'm fine, thanks.", zh: '我很好，谢谢。' },
            { use: '细的 / 精细', en: 'fine sand', zh: '细沙' },
            { use: '罚款（名词 / 动词）', en: 'pay a fine', zh: '交罚款' },
        ],
    },
    kind: {
        core: '善良的（形容词）；种类（名词）',
        senses: [
            { use: '善良的', en: 'a kind person', zh: '一个善良的人' },
            { use: '种类（名词）', en: 'What kind of music?', zh: '哪种音乐？' },
        ],
    },
    fair: {
        core: '公平的；也作"集市"，习语 fair enough = 有道理',
        senses: [
            { use: '公平的', en: "That's not fair.", zh: '这不公平。' },
            { use: '有道理 / 可以接受（fair enough）', en: 'Fair enough.', zh: '有道理，就这样吧。' },
            { use: '集市 / 展会（名词）', en: 'a book fair', zh: '书展' },
        ],
    },
    way: {
        core: '路、方法、方向、程度',
        senses: [
            { use: '路 / 方向', en: 'the way home', zh: '回家的路' },
            { use: '方法', en: 'a good way to learn', zh: '一个学习的好方法' },
            { use: '程度（way too）', en: 'way too expensive', zh: '贵得太离谱' },
        ],
    },
    thing: {
        core: '东西、事情；（things）情况',
        senses: [
            { use: '东西', en: "What's this thing?", zh: '这东西是什么？' },
            { use: '事情', en: 'A strange thing happened.', zh: '发生了件怪事。' },
            { use: '情况（things）', en: 'Things are getting better.', zh: '情况在好转。' },
        ],
    },
    place: {
        core: '地方；名次；放置',
        senses: [
            { use: '地方', en: 'a nice place to eat', zh: '一个吃饭的好地方' },
            { use: '名次', en: 'She came in first place.', zh: '她得了第一名。' },
            { use: '放置（动词）', en: 'Place it on the shelf.', zh: '把它放到架子上。' },
        ],
    },
    sense: {
        core: '感觉、理智、意义',
        senses: [
            { use: '感觉 / 感官', en: 'a sense of humor', zh: '幽默感' },
            { use: '讲得通（make sense）', en: 'That makes sense.', zh: '这说得通。' },
            { use: '常识 / 判断力', en: 'common sense', zh: '常识' },
        ],
    },
    matter: {
        core: '事情、要紧、物质',
        senses: [
            { use: '事情（what’s the matter）', en: "What's the matter?", zh: '怎么了？' },
            { use: '要紧（动词）', en: "It doesn't matter.", zh: '没关系。' },
            { use: '物质（名词）', en: 'solid matter', zh: '固态物质' },
        ],
    },
    order: {
        core: '命令、订购、顺序、整齐',
        senses: [
            { use: '命令', en: 'give an order', zh: '下命令' },
            { use: '点餐 / 订购', en: 'order a coffee', zh: '点一杯咖啡' },
            { use: '顺序', en: 'in the right order', zh: '按正确顺序' },
            { use: '故障（out of order）', en: 'The lift is out of order.', zh: '电梯坏了。' },
        ],
    },
    deal: {
        core: '交易、大量、处理',
        senses: [
            { use: '交易 / 协议', en: "It's a deal.", zh: '成交。' },
            { use: '大量（a great deal）', en: 'a great deal of time', zh: '大量时间' },
            { use: '处理（deal with）', en: 'deal with a problem', zh: '处理问题' },
        ],
    },
};
/** 取某词的用法详解，没有则 null */
function getUsageNote(en) {
    var _a;
    return (_a = exports.USAGE_NOTES[en.toLowerCase()]) !== null && _a !== void 0 ? _a : null;
}

});

__def("shared/data/dialogues/builder", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = d;
exports.countYourTurns = countYourTurns;
/**
 * 造一个对话场景。
 *
 * 写法：d(phase, id, 标题, 情境, [ ['p', 英, 中], ['y', 英, 中, 意图], … ])
 *
 * 'y' 轮多一个「意图」字段，是给用户看的提示。之所以不直接把中文译文当提示：
 * 看着中文译英，练的是翻译；看着「答不用，你自己带了袋子」去组句，练的才是表达。
 * 英文只是一种参考说法，不是标准答案——对话本来就没有标准答案。
 */
function d(phase, id, title, scene, turns) {
    return {
        id,
        phase,
        title,
        scene,
        turns: turns.map((t) => t[0] === 'p'
            ? { speaker: 'partner', en: t[1], zh: t[2] }
            : { speaker: 'you', en: t[1], zh: t[2], intent: t[3] }),
    };
}
/** 一个对话里你要接几次话 —— 配额按接话轮数算，不按篇数 */
function countYourTurns(dlg) {
    return dlg.turns.filter((t) => t.speaker === 'you').length;
}

});

__def("shared/data/dialogues/phase1", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE1_DIALOGUES = void 0;
const builder_1 = require("./builder");
exports.PHASE1_DIALOGUES = [
    (0, builder_1.d)(1, 'd1-checkout', '超市结账', '你在超市收银台，正把东西放上传送带。', [
        ['p', 'Hi there. Did you find everything okay?', '你好，都找到了吗？'],
        ['y', 'Yes, thanks.', '找到了，谢谢。', '回答找到了，道个谢'],
        ['p', 'Do you need a bag?', '需要袋子吗？'],
        ['y', "No, I brought my own.", '不用，我自己带了。', '说不用，你自己带了袋子'],
        ['p', "That's four ninety. Card or cash?", '四块九。刷卡还是现金？'],
        ['y', 'Card, please.', '刷卡。', '说你要刷卡'],
        ['p', 'Perfect. Have a nice day!', '好嘞，祝你今天愉快！'],
        ['y', 'You too. Thanks.', '你也是，谢谢。', '回一句「你也一样」'],
    ]),
    (0, builder_1.d)(1, 'd1-coffee', '咖啡店点单', '你在咖啡店柜台前，后面还排着人。', [
        ['p', 'What can I get you?', '想要点什么？'],
        ['y', 'A flat white, please.', '一杯馥芮白，谢谢。', '点一杯咖啡'],
        ['p', 'Sure. To have here or take away?', '好的。堂食还是带走？'],
        ['y', 'Take away, please.', '带走，谢谢。', '说你要带走'],
        ['p', "Any milk? We've got oat and soy.", '要加奶吗？有燕麦奶和豆奶。'],
        ['y', 'Oat milk, please.', '燕麦奶，谢谢。', '选燕麦奶'],
        ['p', "Three fifty. What's the name for the order?", '三块五。请问怎么称呼？'],
        ['y', "It's Ash.", '我叫 Ash。', '报上你的名字'],
    ]),
    (0, builder_1.d)(1, 'd1-directions', '问路', '你在街上迷路了，看到一个路人。', [
        ['y', 'Excuse me, how do I get to the station?', '打扰一下，请问车站怎么走？', '拦住路人，问车站怎么走'],
        ['p', 'The station? Go straight down this road and turn left at the lights.', '车站？沿这条路直走，到红绿灯左转。'],
        ['y', 'Is it far?', '远吗？', '问远不远'],
        ['p', "About ten minutes on foot. You'll see it on your right.", '走路大概十分钟，在你右手边。'],
        ['y', 'Thank you so much.', '太谢谢你了。', '道谢'],
        ['p', 'No problem. Have a good one.', '不客气，一切顺利。'],
    ]),
    (0, builder_1.d)(1, 'd1-neighbour', '邻居打招呼', '你刚搬来，在楼道里碰到一个邻居。', [
        ['p', "Morning! You're the new neighbour, right?", '早上好！你是新搬来的吧？'],
        ['y', 'Yes, I moved in last week.', '是的，我上周搬来的。', '承认，说你上周搬来的'],
        ['p', "Welcome! I'm Tom, I live upstairs.", '欢迎！我叫 Tom，住楼上。'],
        ['y', "Nice to meet you. I'm Ash.", '很高兴认识你，我叫 Ash。', '自我介绍'],
        ['p', 'If you need anything, just knock.', '有需要就来敲门。'],
        ['y', "That's very kind, thanks.", '你人真好，谢谢。', '谢谢他的好意'],
    ]),
    (0, builder_1.d)(1, 'd1-delivery', '快递签收', '门铃响了，快递员站在门口。', [
        ['p', 'Delivery for flat 3B. Can you sign here?', '3B 的快递。能在这儿签个字吗？'],
        ['y', 'Sure, one second.', '好的，稍等一下。', '答应，让他等一下'],
        ['p', "It's a bit heavy, sorry.", '有点沉，不好意思。'],
        ['y', "That's fine. Where do I sign?", '没事。在哪儿签？', '说没关系，问在哪儿签'],
        ['p', 'Just here, with your finger.', '就这儿，用手指签。'],
        ['y', 'Done. Thanks a lot.', '好了，多谢。', '签好了，道谢'],
    ]),
    (0, builder_1.d)(1, 'd1-bakery', '面包店', '你早上去面包店买早餐。', [
        ['p', 'Good morning! What would you like?', '早上好！要点什么？'],
        ['y', 'Two croissants, please.', '两个可颂，谢谢。', '要两个可颂'],
        ['p', 'Anything else?', '还要别的吗？'],
        ['y', 'Is the bread fresh today?', '面包是今天的吗？', '问面包新不新鲜'],
        ['p', 'Baked this morning. Still warm.', '今早烤的，还热着呢。'],
        ['y', "I'll take one loaf then.", '那再来一条。', '那就再要一条'],
        ['p', "That's six euros altogether.", '一共六欧。'],
    ]),
    (0, builder_1.d)(1, 'd1-restaurant', '餐厅点餐', '你和朋友刚坐下，服务员走过来。', [
        ['p', 'Are you ready to order?', '可以点单了吗？'],
        ['y', 'Not yet, could you give us a minute?', '还没，能再给我们一分钟吗？', '还没想好，请他等一下'],
        ['p', 'Of course. Can I get you a drink while you wait?', '当然。先来点喝的吗？'],
        ['y', 'Just tap water, please.', '自来水就行，谢谢。', '要一杯自来水'],
        ['p', "Sure. I'll be back in a moment.", '好的，我一会儿回来。'],
        ['y', 'Actually, what do you recommend?', '对了，你推荐什么？', '叫住他，问有什么推荐'],
        ['p', 'The fish is very good today.', '今天的鱼很不错。'],
    ]),
    (0, builder_1.d)(1, 'd1-pharmacy', '药店买药', '你咳嗽好几天了，来药店问问。', [
        ['p', 'Hello, how can I help?', '你好，有什么能帮你的？'],
        ['y', 'I have a cough.', '我咳嗽。', '说你咳嗽'],
        ['p', 'How long have you had it?', '咳多久了？'],
        ['y', 'About three days.', '大概三天。', '说三天左右'],
        ['p', 'Any fever?', '发烧吗？'],
        ['y', 'No, just the cough.', '没有，就是咳嗽。', '说没有，只是咳嗽'],
        ['p', 'Try this syrup. Twice a day, after meals.', '试试这个糖浆。一天两次，饭后吃。'],
        ['y', 'Thanks. How much is it?', '谢谢。多少钱？', '道谢并问价钱'],
    ]),
    (0, builder_1.d)(1, 'd1-bus', '公交问询', '你站在公交站台，不确定这趟车对不对。', [
        ['y', 'Excuse me, does this bus go to the city centre?', '打扰一下，这车去市中心吗？', '问这趟车去不去市中心'],
        ['p', 'No, you want the number 12. It stops across the road.', '不去，你要坐 12 路，在马路对面停。'],
        ['y', 'How often does it come?', '多久一班？', '问多久来一班'],
        ['p', 'Every ten minutes or so.', '大概十分钟一班。'],
        ['y', 'Great, thanks for your help.', '太好了，谢谢你。', '道谢'],
    ]),
    (0, builder_1.d)(1, 'd1-colleague', '同事早上寒暄', '周一早上你刚到办公室，同事走过来。', [
        ['p', 'Morning! How was your weekend?', '早！周末过得怎么样？'],
        ['y', 'Pretty good, thanks. How about yours?', '挺好的，谢谢。你呢？', '说还不错，反问他'],
        ['p', 'Quiet. I just stayed home and slept.', '挺清静的，就在家睡觉。'],
        ['y', 'Sounds nice, actually.', '这样其实挺好。', '说这样其实挺好'],
        ['p', "Coffee? I'm making one.", '要咖啡吗？我正要煮。'],
        ['y', 'Yes, please. That would be great.', '好啊，那太好了。', '接受他的好意'],
    ]),
    (0, builder_1.d)(1, 'd1-return', '商店退货', '你买的衣服不合身，拿回店里。', [
        ['p', 'Hi, what can I do for you?', '你好，需要什么帮助？'],
        ['y', "I'd like to return this. It doesn't fit.", '我想退这个，尺码不合适。', '说你要退货，因为不合身'],
        ['p', 'Do you have the receipt?', '有小票吗？'],
        ['y', 'Yes, here it is.', '有，给你。', '说有，递给他'],
        ['p', 'Would you like a refund or an exchange?', '你想退款还是换货？'],
        ['y', 'A refund, please.', '退款，谢谢。', '说你要退款'],
    ]),
    (0, builder_1.d)(1, 'd1-haircut', '理发店', '你走进理发店，理发师招呼你坐下。', [
        ['p', 'Hi! Take a seat. What are we doing today?', '你好！请坐。今天想怎么剪？'],
        ['y', 'Just a trim, please.', '就修一下，谢谢。', '说只修一下'],
        ['p', 'How short?', '剪多短？'],
        ['y', 'Not too short. Maybe two centimetres.', '别太短，大概两厘米。', '别太短，大概两厘米'],
        ['p', 'And the sides?', '两边呢？'],
        ['y', 'Leave them as they are.', '两边不动。', '说两边保持原样'],
    ]),
];

});

__def("shared/data/dialogues/phase2", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE2_DIALOGUES = void 0;
const builder_1 = require("./builder");
exports.PHASE2_DIALOGUES = [
    (0, builder_1.d)(2, 'd2-doctor', '看医生', '你头疼两周了，来看家庭医生。', [
        ['p', 'Come in, take a seat. What brings you in today?', '请进，坐。今天哪里不舒服？'],
        ['y', "I've been having headaches for about two weeks.", '我头疼大概两周了。', '说你头疼两周左右了'],
        ['p', 'Every day, or now and then?', '每天都疼，还是偶尔？'],
        ['y', 'Most days, usually in the afternoon.', '大多数日子，一般下午。', '说大多数日子，通常在下午'],
        ['p', 'Are you sleeping well?', '睡得好吗？'],
        ['y', 'Not really. I wake up a lot at night.', '不太好，夜里老醒。', '说睡不好，夜里经常醒'],
        ['p', 'It could be stress. Have you had any changes at work?', '可能是压力。工作上有什么变化吗？'],
        ['y', 'Yes, I started a new job last month.', '有，上个月换了新工作。', '说有，上个月开始了新工作'],
        ['p', "Let's check your blood pressure first.", '先量个血压吧。'],
        ['y', 'Sure. Should I roll up my sleeve?', '好的。要卷袖子吗？', '答应，问要不要卷起袖子'],
    ]),
    (0, builder_1.d)(2, 'd2-bank', '银行开户', '你刚来这个国家，需要一个本地账户。', [
        ['p', 'Good afternoon. How can I help you today?', '下午好，有什么可以帮您？'],
        ['y', "I'd like to open a bank account.", '我想开一个账户。', '说你想开个银行账户'],
        ['p', 'Of course. Do you have proof of address?', '好的。有地址证明吗？'],
        ['y', 'I have my rental contract. Would that work?', '我有租房合同，可以吗？', '说你有租房合同，问行不行'],
        ['p', "That's fine. And an ID or passport?", '可以。身份证或护照呢？'],
        ['y', "Here's my passport.", '这是我的护照。', '把护照递过去'],
        ['p', 'Great. Do you want a current account or a savings account?', '好。要活期还是储蓄账户？'],
        ['y', 'A current account, please. What are the fees?', '活期，谢谢。手续费怎么算？', '要活期账户，顺便问手续费'],
        ['p', "It's free if you pay in at least a thousand a month.", '每月存入一千以上就免费。'],
        ['y', 'That should be fine.', '那应该没问题。', '说那应该没问题'],
    ]),
    (0, builder_1.d)(2, 'd2-sim', '办手机卡', '你走进一家电信营业厅。', [
        ['p', 'Hi! Are you looking for a new plan?', '你好！要办新套餐吗？'],
        ['y', 'Yes, I need a SIM card with data.', '是的，我要一张带流量的卡。', '说你要一张有流量的手机卡'],
        ['p', 'How much data do you use?', '你一般用多少流量？'],
        ['y', "I'm not sure. I mostly use wifi at home.", '不太确定，在家基本用 wifi。', '说不确定，你在家主要用 wifi'],
        ['p', "Then ten gigabytes should be plenty. That's fifteen a month.", '那 10G 绰绰有余，每月十五。'],
        ['y', 'Is there a contract?', '有合约期吗？', '问有没有合约期'],
        ['p', "You can cancel any time, with one month's notice.", '随时可以取消，提前一个月说就行。'],
        ['y', "Okay, I'll take it.", '好，就办这个。', '说好，就要这个'],
        ['p', 'Can I see some ID?', '能看一下证件吗？'],
        ['y', 'Sure, one moment.', '当然，稍等。', '答应，让他等一下'],
    ]),
    (0, builder_1.d)(2, 'd2-flat', '看房', '中介带你看一套公寓。', [
        ['p', 'So this is the living room. It gets a lot of light in the morning.', '这是客厅，早上光线很好。'],
        ['y', "It's bigger than I expected.", '比我想的大。', '说比你预想的大'],
        ['p', "The bedroom's through here. Kitchen's on the left.", '卧室在这边，厨房在左边。'],
        ['y', 'Are the bills included in the rent?', '水电费包在房租里吗？', '问水电费包不包含在房租里'],
        ['p', 'Water is, but not electricity.', '水费包，电费不包。'],
        ['y', 'How much is electricity, roughly?', '电费大概多少？', '问电费大概多少钱'],
        ['p', 'The last tenant paid about fifty a month.', '上一位租客每月大概五十。'],
        ['y', "That's reasonable. When is it available?", '还算合理。什么时候能住？', '说还合理，问什么时候可以入住'],
        ['p', 'From the first of next month.', '下个月一号起。'],
        ['y', 'Can I think about it and call you tomorrow?', '我能考虑一下明天给你电话吗？', '问能不能考虑一下，明天答复'],
    ]),
    (0, builder_1.d)(2, 'd2-gym', '健身房办卡', '你路过一家健身房，进去问问。', [
        ['p', 'Hi! Are you here to join?', '你好！是来办卡的吗？'],
        ['y', "I'd like to have a look around first.", '我想先看看。', '说你想先四处看看'],
        ['p', "Sure, I'll show you. Do you train often?", '好，我带你看。你常练吗？'],
        ['y', 'I used to, but I stopped last year.', '以前练，去年停了。', '说以前练，去年停了'],
        ['p', 'We do a free trial week. No commitment.', '我们有免费体验周，不用承诺什么。'],
        ['y', 'That sounds good. What does membership cost?', '听起来不错。会员费多少？', '说听着不错，问会员费多少'],
        ['p', 'Thirty a month, or twenty-five if you pay for a year.', '每月三十，年付的话二十五。'],
        ['y', "I'd rather pay monthly for now.", '我暂时更想按月付。', '说你现在更想按月付'],
    ]),
    (0, builder_1.d)(2, 'd2-heating', '给房东报修', '暖气昨晚开始不热了，你打给房东。', [
        ['p', 'Hello?', '喂？'],
        ['y', "Hi, it's Ash from flat 3B. The heating isn't working.", '你好，我是 3B 的 Ash。暖气不工作了。', '自报家门，说暖气坏了'],
        ['p', 'Since when?', '从什么时候开始？'],
        ['y', 'Since yesterday evening.', '从昨天晚上开始。', '说从昨天晚上开始'],
        ['p', "Have you checked the boiler? There's a reset button.", '你看过锅炉了吗？上面有个复位键。'],
        ['y', 'I tried that. Nothing happened.', '我试过了，没反应。', '说你试过了，没有用'],
        ['p', "Alright, I'll send someone. Are you home tomorrow morning?", '好，我派人过去。你明天上午在家吗？'],
        ['y', 'I have to work, but I can be here after five.', '我要上班，五点以后可以。', '说你要上班，但五点以后可以'],
    ]),
    (0, builder_1.d)(2, 'd2-complain', '餐厅投诉', '你点的汤端上来是凉的，服务员过来问。', [
        ['p', 'Is everything alright with your meal?', '菜都还好吗？'],
        ['y', 'Actually, the soup is cold.', '其实这汤是凉的。', '说汤是凉的'],
        ['p', "Oh, I'm so sorry. Would you like me to heat it up?", '啊，非常抱歉。要我拿去热一下吗？'],
        ['y', 'Could you bring a fresh one instead?', '能换一份新的吗？', '问能不能换一份新的'],
        ['p', "Of course. It'll be a few minutes.", '当然，要等几分钟。'],
        ['y', "That's fine, thank you.", '没关系，谢谢。', '说没关系，谢谢'],
        ['p', "And it's on the house, of course.", '这份当然算我们的。'],
        ['y', "That's very kind, but you don't have to.", '太客气了，其实不必。', '说他太客气了，不必这样'],
    ]),
    (0, builder_1.d)(2, 'd2-dentist', '电话预约牙医', '你有颗牙喝凉水会疼，打电话预约。', [
        ['p', 'Dental practice, good morning.', '牙科诊所，早上好。'],
        ['y', "Hi, I'd like to make an appointment.", '你好，我想预约。', '说你想预约'],
        ['p', 'Are you registered with us?', '您在我们这儿建过档吗？'],
        ['y', 'No, this would be my first time.', '没有，这是第一次。', '说没有，这是你第一次来'],
        ['p', 'No problem. Is it a check-up, or is something wrong?', '没关系。是例行检查还是哪里不舒服？'],
        ['y', 'One of my teeth hurts when I drink something cold.', '我有颗牙一喝凉的就疼。', '说有一颗牙喝凉的会疼'],
        ['p', 'We could fit you in Thursday at two, or Friday at ten.', '周四两点或周五十点可以安排。'],
        ['y', 'Friday works better for me.', '周五对我更方便。', '说周五更合适'],
        ['p', 'Great. Can I take your name and date of birth?', '好的。能给我您的姓名和出生日期吗？'],
        ['y', "It's Ash, and I was born in 1990.", '我叫 Ash，1990 年出生。', '报上名字和出生年份'],
    ]),
    (0, builder_1.d)(2, 'd2-airport', '机场值机', '你在值机柜台，行李可能超重。', [
        ['p', 'Good morning. Can I see your passport and booking?', '早上好。护照和订单给我看一下？'],
        ['y', 'Here you go.', '给你。', '把东西递过去'],
        ['p', 'Any bags to check in?', '有要托运的行李吗？'],
        ['y', 'Just this one.', '就这一件。', '说只有一件'],
        ['p', 'Pop it on the scale, please. Did you pack it yourself?', '请放到秤上。是您自己装的吗？'],
        ['y', 'Yes, I did.', '是的。', '确认是你自己装的'],
        ['p', "It's two kilos over. That'll be forty euros.", '超重两公斤，要收四十欧。'],
        ['y', 'Can I move something into my hand luggage?', '我能拿点东西放随身行李吗？', '问能不能挪点东西到随身行李'],
        ['p', 'Sure, go ahead.', '可以，请便。'],
        ['y', 'Thanks. Is that better?', '谢谢。现在行了吗？', '道谢，问现在够不够'],
    ]),
    (0, builder_1.d)(2, 'd2-lunch', '同事约午饭', '同事来问你要不要一起吃午饭。', [
        ['p', "We're going for lunch at one. Want to join?", '我们一点去吃饭，一起吗？'],
        ['y', "I'd love to, but I've got a call at one.", '很想去，但我一点有个电话。', '说很想去，但一点有个电话会议'],
        ['p', 'No worries. We can wait until half past.', '没事，我们可以等到一点半。'],
        ['y', 'Really? That would be great.', '真的吗？那太好了。', '有点意外又高兴，说那太好了'],
        ['p', "Any preference? There's a Thai place round the corner.", '想吃什么？拐角有家泰餐。'],
        ['y', "Anything's fine with me.", '我都行。', '说你都可以'],
        ['p', 'Thai it is, then.', '那就泰餐。'],
        ['y', 'See you at half one.', '一点半见。', '说一点半见'],
    ]),
    (0, builder_1.d)(2, 'd2-service', '网购客服', '你买的台灯到货就是碎的，打客服电话。', [
        ['p', 'Customer service, how can I help?', '客服您好，有什么可以帮您？'],
        ['y', 'I ordered a lamp last week and it arrived broken.', '我上周订了盏台灯，到货是碎的。', '说上周买的台灯到货就碎了'],
        ['p', "I'm sorry about that. Do you have the order number?", '很抱歉。有订单号吗？'],
        ['y', "Yes, it's four four two nine.", '有，4429。', '说有，把号码报出来'],
        ['p', 'Thank you. Would you like a replacement or a refund?', '谢谢。您要换货还是退款？'],
        ['y', 'A replacement, if you have it in stock.', '换货，如果有现货的话。', '想换货，前提是有货'],
        ['p', "We do. I'll send one out today. Can you return the broken one?", '有货，今天就发。碎的那个能寄回吗？'],
        ['y', 'Do I have to pay for the return?', '退货运费要我出吗？', '问退货运费是不是你出'],
        ['p', "No, we'll email you a free label.", '不用，我们会发个免费面单给您。'],
        ['y', 'Perfect, thanks for sorting it out.', '太好了，谢谢你帮我解决。', '说太好了，谢谢他帮忙处理'],
    ]),
    (0, builder_1.d)(2, 'd2-post', '邮局寄包裹', '你要往中国寄一个包裹。', [
        ['p', 'Next, please. What are you sending?', '下一位。您要寄什么？'],
        ['y', "I'd like to send this to China.", '我想把这个寄到中国。', '说你要寄到中国'],
        ['p', "What's inside?", '里面是什么？'],
        ['y', 'Just books and some clothes.', '就是书和一些衣服。', '说是书和一些衣服'],
        ['p', 'Standard or express? Standard takes about three weeks.', '普通还是快递？普通大约三周。'],
        ['y', 'How much is express?', '快递多少钱？', '问快递要多少钱'],
        ['p', 'Forty-five. Standard is eighteen.', '四十五。普通十八。'],
        ['y', "Standard's fine. There's no rush.", '普通就行，不急。', '说普通的就行，不着急'],
        ['p', 'Fill in this form, please.', '请填一下这张表。'],
        ['y', 'Do I need to list everything?', '每样都要列出来吗？', '问是不是每样东西都要写'],
    ]),
];

});

__def("shared/data/dialogues/phase3", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE3_DIALOGUES = void 0;
const builder_1 = require("./builder");
exports.PHASE3_DIALOGUES = [
    (0, builder_1.d)(3, 'd3-interview', '工作面试', '你在面试一个比现在责任更大的岗位。', [
        ['p', 'Thanks for coming in. Tell me a bit about yourself.', '感谢你过来。先简单介绍一下自己吧。'],
        ['y', "I've been working in marketing for five years, mostly with small companies.", '我做市场五年了，主要是在小公司。', '简单介绍：做市场五年，主要在小公司'],
        ['p', 'What made you apply for this role?', '你为什么想应聘这个岗位？'],
        ['y', "I'm looking for something with more responsibility.", '我想找一个责任更大的岗位。', '说你想找责任更重的工作'],
        ['p', 'This job involves a lot of teamwork. How do you handle disagreement?', '这份工作需要大量协作。你怎么处理分歧？'],
        ['y', 'I try to understand the other side first, then explain my reasons.', '我会先弄懂对方的立场，再说我的理由。', '说你会先理解对方，再讲自己的理由'],
        ['p', 'Can you give me an example?', '能举个例子吗？'],
        ['y', 'Last year my team wanted to drop a project I believed in. We talked it through and found a middle ground.', '去年我的团队想砍掉一个我看好的项目。我们谈开了，找到了折中方案。', '举例：去年团队想砍掉你看好的项目，谈过之后找到折中'],
        ['p', 'Interesting. Do you have any questions for us?', '有意思。你有什么想问我们的吗？'],
        ['y', 'Yes — what would a typical week look like?', '有——典型的一周大概是什么样？', '反问：典型的一周是什么样子'],
    ]),
    (0, builder_1.d)(3, 'd3-rent', '跟房东谈涨租', '房东通知一月起涨一百，你想谈一谈。', [
        ['p', "I wanted to let you know the rent's going up by a hundred from January.", '跟你说一声，一月起房租涨一百。'],
        ['y', "That's quite a jump. Can I ask why?", '涨得挺多。能问问为什么吗？', '说涨幅不小，问问原因'],
        ['p', 'Costs have gone up. Everything has, really.', '成本涨了，其实什么都涨了。'],
        ['y', 'I understand, but a hundred is more than I budgeted for.', '我理解，但一百超出我的预算了。', '表示理解，但说这超出了你的预算'],
        ['p', "I'm afraid it's the same for everyone in the building.", '恐怕这栋楼里每户都一样。'],
        ['y', 'Would you consider fifty, if I sign for another two years?', '如果我再签两年，能不能只涨五十？', '提议：再签两年，只涨五十'],
        ['p', 'Hmm. Two years, you say?', '嗯……你说两年？'],
        ['y', "I've never been late with the rent, and I'd rather not move.", '我从没晚交过房租，也不想搬。', '强调你从没晚交过租，也不想搬走'],
        ['p', "Let me think about it. I'll get back to you this week.", '让我想想，这周答复你。'],
        ['y', "That's all I'm asking. Thanks for hearing me out.", '我就是想请你考虑一下。谢谢你肯听。', '说这就够了，谢谢他愿意听你说'],
    ]),
    (0, builder_1.d)(3, 'd3-disagree', '跟同事意见不合', '同事想下周就上线，你认为太早。', [
        ['p', "I think we should launch next week. We've waited long enough.", '我觉得下周就该上线，等够久了。'],
        ['y', "I see your point, but the testing isn't finished.", '我明白你的意思，但测试还没做完。', '表示理解他，但指出测试还没完成'],
        ['p', 'It never will be. At some point you just have to ship.', '测试永远做不完。总得有个时候把东西发出去。'],
        ['y', 'True, though last time we rushed, it cost us two weeks of fixes.', '有道理，不过上次赶工，我们花了两周修 bug。', '承认有道理，但提醒上次赶工反而多花两周'],
        ['p', 'So what are you suggesting?', '那你的意思是？'],
        ['y', "Give it one more week, and I'll make sure the testing is done.", '再给一周，我保证测试做完。', '提议再给一周，你保证测试完成'],
        ['p', "One week. And if it's not ready?", '一周。要是还没好呢？'],
        ['y', "Then we launch anyway. That's fair.", '那就照样上线。这样公平。', '说那就照发，这样才公平'],
        ['p', "Alright. Let's do that.", '行，就这么办。'],
    ]),
    (0, builder_1.d)(3, 'd3-party', '聚会上认识新朋友', '你被邻居拉来一个派对，有人过来搭话。', [
        ['p', "I don't think we've met. I'm Lena.", '我们好像没见过。我是 Lena。'],
        ['y', "Hi Lena, I'm Ash. How do you know Tom?", '你好 Lena，我是 Ash。你怎么认识 Tom 的？', '打招呼，问她怎么认识主人的'],
        ['p', 'We used to work together. You?', '我们以前是同事。你呢？'],
        ['y', "He's my neighbour. He dragged me along.", '他是我邻居，把我拽来的。', '说他是你邻居，把你拉来的'],
        ['p', "Ha! Well, I'm glad he did. What do you do?", '哈！那挺好。你做什么工作？'],
        ['y', "I work in marketing. It's less exciting than it sounds.", '我做市场，没听起来那么有意思。', '说你做市场，没听上去那么精彩'],
        ['p', 'Everyone says that about their job.', '谁说起自己的工作都这样。'],
        ['y', "You're probably right. What about you?", '你大概说得对。你呢？', '说她八成说得对，反问她'],
        ['p', "I'm a nurse. Definitely less exciting than it sounds.", '我是护士，绝对没听起来那么精彩。'],
        ['y', "Now that I don't believe.", '这个我可不信。', '打趣一句：这个你才不信'],
    ]),
    (0, builder_1.d)(3, 'd3-insurance', '保险理赔', '你的车停着被人撞了，你打给保险公司。', [
        ['p', "Claims department. What's happened?", '理赔部。发生什么事了？'],
        ['y', 'Someone drove into my car while it was parked.', '我的车停着，被人撞了。', '说车停着的时候被人撞了'],
        ['p', 'Were you there at the time?', '当时您在场吗？'],
        ['y', 'No, I came back and found the damage.', '不在，我回来才发现撞坏了。', '说不在场，回来才发现'],
        ['p', 'Did they leave any details?', '对方留下联系方式了吗？'],
        ['y', 'There was a note with a phone number.', '留了张纸条，上面有个电话。', '说留了纸条，上面有电话'],
        ['p', "That's lucky. Have you taken photos?", '那算走运。拍照片了吗？'],
        ['y', 'Yes, I took some before I moved it.', '拍了，挪车之前拍的。', '说拍了，是在挪车之前拍的'],
        ['p', "Good. Send those over and we'll open a case.", '很好。发过来，我们就立案。'],
        ['y', 'How long does this usually take?', '这一般要多久？', '问通常需要多长时间'],
        ['p', 'Two to three weeks, if the other side cooperates.', '两到三周，前提是对方配合。'],
    ]),
    (0, builder_1.d)(3, 'd3-reschedule', '跟朋友改期', '你和朋友约了周六，但你得改期。', [
        ['p', 'Are we still on for Saturday?', '周六还算数吧？'],
        ['y', "About that — something's come up.", '这事儿……出了点情况。', '开口说这事有变，出了点状况'],
        ['p', 'Oh no. Everything okay?', '不会吧。没事吧？'],
        ['y', "Nothing serious. My sister's visiting that weekend.", '没什么大事，我妹妹那个周末来。', '说没什么大事，妹妹那周末来'],
        ['p', 'No problem. Shall we say the week after?', '没问题。那下下周？'],
        ['y', 'That works. Same time?', '可以。时间照旧？', '说可以，问时间是不是照旧'],
        ['p', 'Same time. And bring your sister if she\'s still around.', '照旧。你妹妹要是还在，带上她。'],
        ['y', "She'd like that. I'll ask her.", '她会喜欢的，我问问她。', '说她会喜欢，你去问问她'],
    ]),
    (0, builder_1.d)(3, 'd3-timeoff', '跟老板请假', '你想在三月最忙的时候请一周假。', [
        ['p', 'You wanted to see me?', '你找我？'],
        ['y', "Yes, I'd like to take a week off in March.", '是的，我想三月请一周假。', '说你想三月请一周假'],
        ['p', 'March is busy. Which week?', '三月很忙。哪一周？'],
        ['y', "The second week, if that's possible.", '第二周，如果可以的话。', '说第二周，如果可以的话'],
        ['p', "That's right before the deadline.", '那正好在截止日期前。'],
        ['y', "I know. I'd finish everything before I go.", '我知道。我走之前会把事情做完。', '说你知道，走之前会把活干完'],
        ['p', 'Can you hand over to someone?', '能交接给别人吗？'],
        ['y', "Tom knows the project. I'd brief him properly.", 'Tom 熟悉这个项目，我会好好跟他交接。', '说 Tom 熟悉项目，你会认真交接'],
        ['p', "Alright, put it in writing and I'll approve it.", '行，写个申请我就批。'],
        ['y', 'Thanks, I really appreciate it.', '谢谢，真的很感激。', '道谢，说你真心感激'],
    ]),
    (0, builder_1.d)(3, 'd3-noise', '跟邻居说噪音', '楼上昨晚吵到两点，你去敲门。', [
        ['p', 'Hi — everything alright?', '嗨——有事吗？'],
        ['y', 'Sorry to bother you, but the music was quite loud last night.', '不好意思打扰，昨晚音乐有点吵。', '客气地开口：昨晚音乐有点大声'],
        ['p', "Was it? I had a few friends over. I didn't realise.", '是吗？我叫了几个朋友，没意识到。'],
        ['y', 'It went on until about two.', '一直到两点左右。', '说一直响到两点左右'],
        ['p', "God, I'm sorry. The walls are thinner than I thought.", '天，抱歉。这墙比我想的薄。'],
        ['y', "It's fine, it doesn't happen often.", '没事，也不常这样。', '说没关系，也不常发生'],
        ['p', "I'll keep it down next time. Promise.", '下次我小声点，保证。'],
        ['y', "That's all I wanted to say. Have a good one.", '我就想说这个。祝你愉快。', '说你就是想说这个，道别'],
    ]),
    (0, builder_1.d)(3, 'd3-film', '聊一部电影的看法', '朋友推荐的电影你看了，但不太买账。', [
        ['p', 'Did you watch that film I sent you?', '我发你那部电影看了吗？'],
        ['y', "I did. I'm not sure I got it, to be honest.", '看了。老实说，我不确定看懂了。', '说看了，但坦白说没太看懂'],
        ['p', "What didn't you get?", '哪里没懂？'],
        ['y', 'The ending. Was it all in his head, or not?', '结局。那到底是不是他脑子里想的？', '说结局：那到底是不是他想象出来的'],
        ['p', "That's the point, I think. You're meant to decide.", '我觉得这就是重点，让你自己判断。'],
        ['y', "I don't love that. I'd rather the film told me.", '我不太喜欢这样，我宁愿电影告诉我。', '说你不太喜欢这种处理，宁愿电影直说'],
        ['p', "Really? I think that's what makes it good.", '真的？我倒觉得这才是它好的地方。'],
        ['y', "Maybe. It stayed with me, I'll give it that.", '也许吧。它确实让我一直想着，这点我承认。', '让一步：也许吧，至少它让你一直惦记着'],
        ['p', 'See? It worked, then.', '你看，那不就成了。'],
    ]),
    (0, builder_1.d)(3, 'd3-apology', '澄清一个误会', '同事觉得你在会上当众怪他。', [
        ['p', 'Have you got a minute? I want to clear something up.', '有空吗？我想说清楚一件事。'],
        ['y', 'Sure. Is this about the meeting?', '当然。是开会那事吗？', '答应，问是不是开会那件事'],
        ['p', 'Yes. It felt like you were blaming me in front of everyone.', '对。感觉你当着大家的面在怪我。'],
        ['y', "That wasn't what I meant at all.", '我完全不是那个意思。', '说你完全不是那个意思'],
        ['p', "Well, that's how it came across.", '可听起来就是那样。'],
        ['y', "I'm sorry. I should have spoken to you first.", '对不起，我应该先跟你说的。', '道歉，说你应该先私下找他'],
        ['p', "I'd have appreciated that.", '那样我会感激的。'],
        ['y', "You're right. It won't happen again.", '你说得对，不会再有下次。', '承认他说得对，保证不再发生'],
        ['p', "Thanks. That's all I needed to hear.", '谢谢，我就想听这句。'],
    ]),
    (0, builder_1.d)(3, 'd3-contract', '谈合同条款', '中介把租房合同给你，你想改几处。', [
        ['p', "So, here's the contract. Take your time.", '合同给你，慢慢看。'],
        ['y', 'Can I check a couple of things?', '我能确认几件事吗？', '问能不能确认几个问题'],
        ['p', 'Of course.', '当然。'],
        ['y', "It says three months' notice. Is that negotiable?", '上面写提前三个月通知，这个能商量吗？', '指出写着三个月通知期，问能不能商量'],
        ['p', "It's fairly standard, but I could ask.", '这挺标准的，不过我可以问问。'],
        ['y', "Two would suit me better, if that's possible.", '两个月对我更合适，如果可以的话。', '说两个月对你更合适，如果可能的话'],
        ['p', "I'll see what I can do. Anything else?", '我尽量。还有别的吗？'],
        ['y', 'What happens if I need to leave earlier?', '如果我需要提前搬走会怎样？', '问如果你需要提前离开会怎么样'],
        ['p', "You'd have to pay the remaining rent, unless we find someone.", '你得付剩下的房租，除非我们找到接手的人。'],
        ['y', "That's fair enough. Let me read the rest.", '这挺公道。我把剩下的看完。', '说这算公道，让你把剩下的读完'],
    ]),
    (0, builder_1.d)(3, 'd3-symptoms', '跟医生描述复杂症状', '你的胃断断续续难受一个月了。', [
        ['p', 'You said on the phone it\'s your stomach?', '你电话里说是胃的问题？'],
        ['y', "Yes, it's been bothering me on and off for a month.", '对，断断续续折腾我一个月了。', '说是的，断断续续难受一个月了'],
        ['p', 'Can you describe the pain?', '能描述一下怎么个疼法吗？'],
        ['y', "It's more of a burning feeling, usually after eating.", '更像是烧灼感，一般在饭后。', '说更像烧灼感，通常在饭后'],
        ['p', 'Does anything make it better?', '什么情况下会好一点？'],
        ['y', "It goes away if I don't eat, but that's not much of a solution.", '不吃就好了，但这算不上办法。', '说不吃就好，但那算不上解决办法'],
        ['p', 'Have you changed your diet recently? More coffee, more stress?', '最近饮食有变化吗？咖啡变多、压力变大？'],
        ['y', 'Both, actually. New job, and I drink far too much coffee.', '其实两样都有。新工作，咖啡喝得太多。', '说两样都占了：新工作，咖啡喝太多'],
        ['p', "That would explain a lot. Let's try cutting the coffee first.", '那就说得通了。先试试把咖啡戒了。'],
        ['y', "I was afraid you'd say that.", '就怕你这么说。', '开个玩笑：就怕你说这句'],
        ['p', 'Everyone is. Give it two weeks and come back.', '人人都怕。两周后再来。'],
    ]),
];

});

__def("shared/data/dialogues/index", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countYourTurns = exports.DIALOGUES = void 0;
exports.getUnlockedDialogues = getUnlockedDialogues;
const phase1_1 = require("./phase1");
const phase2_1 = require("./phase2");
const phase3_1 = require("./phase3");
exports.DIALOGUES = [
    ...phase1_1.PHASE1_DIALOGUES,
    ...phase2_1.PHASE2_DIALOGUES,
    ...phase3_1.PHASE3_DIALOGUES,
];
/** 该阶段及之前解锁的所有对话——低阶场景不会因为升阶就用不上了 */
function getUnlockedDialogues(phase) {
    return exports.DIALOGUES.filter((dlg) => dlg.phase <= phase);
}
var builder_1 = require("./builder");
Object.defineProperty(exports, "countYourTurns", { enumerable: true, get: function () { return builder_1.countYourTurns; } });

});

__def("shared/data/passages/builder", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = p;
exports.shuffleOptions = shuffleOptions;
/**
 * 造一篇短文。
 *
 * 约定：题目选项的第一个永远是正确答案，写的时候不用操心顺序。
 * 展示前会由 shuffleOptions 打乱——正确答案恒在首位是致命的，
 * 一路点第一个就能满分，听力测试直接失效。
 */
function p(phase, id, title, lines, quizzes) {
    return {
        id,
        phase,
        title,
        lines: lines.map((l) => l[0]),
        linesZh: lines.map((l) => l[1]),
        source: 'builtin',
        questions: quizzes.map(([q, options]) => ({ q, options, answer: 0 })),
    };
}
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
/**
 * 打乱一篇短文里每道题的选项，并把 answer 重新指向正确项。
 *
 * 在选中篇目时调用（而不是模块加载时）：这样同一篇重练也会换顺序，
 * 记住的是"哪句对"而不是"点第几个"。
 */
function shuffleOptions(passage) {
    return {
        ...passage,
        questions: passage.questions.map((q) => {
            const correct = q.options[q.answer];
            const options = shuffle(q.options);
            return { ...q, options, answer: options.indexOf(correct) };
        }),
    };
}

});

__def("shared/data/passages/phase1", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE1 = void 0;
// Phase 1 · 冷启动：3-4 句，一般现在时/过去时为主，日常最基础的场景
// 主语与句式刻意轮换（I / She / We / They / There is / 疑问 / 祈使 / 对话），避免通篇“I ...”
const builder_1 = require("./builder");
exports.PHASE1 = [
    // ---------- 起居 ----------
    (0, builder_1.p)(1, 'p1_morning', '早晨', [
        ['I get up at seven every morning.', '我每天早上七点起床。'],
        ['I wash my face and eat breakfast.', '我洗脸然后吃早饭。'],
        ['Then I go to school by bus.', '然后我坐公交车去学校。'],
    ], [
        ['他每天几点起床？', ['七点', '六点', '八点', '九点']],
        ['他怎么去学校？', ['坐公交车', '走路', '骑自行车', '开车']],
    ]),
    (0, builder_1.p)(1, 'p1_night', '睡前', [
        ['My mother reads me a story every night.', '妈妈每晚给我读故事。'],
        ['Then she turns off the light.', '然后她关灯。'],
        ['I close my eyes and fall asleep.', '我闭上眼睛睡着了。'],
    ], [
        ['谁给他读故事？', ['妈妈', '爸爸', '姐姐', '老师']],
        ['读完故事后她做什么？', ['关灯', '开窗', '唱歌', '离开']],
    ]),
    (0, builder_1.p)(1, 'p1_room', '我的房间', [
        ['There is a small bed in my room.', '我房间里有一张小床。'],
        ['My books are on the desk.', '我的书在桌子上。'],
        ['The window is next to the bed.', '窗户在床旁边。'],
        ['I like my room very much.', '我很喜欢我的房间。'],
    ], [
        ['他的书在哪里？', ['桌子上', '床上', '地上', '包里']],
        ['窗户在哪里？', ['床旁边', '门后面', '桌子上', '房间外']],
    ]),
    (0, builder_1.p)(1, 'p1_clean', '打扫房间', [
        ['My room was very dirty last Sunday.', '上周日我的房间很脏。'],
        ['I cleaned the floor and the desk.', '我打扫了地板和桌子。'],
        ['It took me two hours.', '花了我两个小时。'],
    ], [
        ['他什么时候打扫的？', ['上周日', '上周六', '昨天', '今天早上']],
        ['花了多长时间？', ['两个小时', '一个小时', '半小时', '一整天']],
    ]),
    (0, builder_1.p)(1, 'p1_laundry', '洗衣服', [
        ['My father washes his clothes on Saturday.', '爸爸周六洗衣服。'],
        ['He puts them near the window.', '他把衣服放在窗边。'],
        ['The sun dries them quickly.', '太阳很快把它们晒干。'],
    ], [
        ['爸爸什么时候洗衣服？', ['周六', '周日', '周一', '每天']],
        ['衣服放在哪里？', ['窗边', '床上', '门口', '院子里']],
    ]),
    // ---------- 饮食 ----------
    (0, builder_1.p)(1, 'p1_breakfast', '早餐', [
        ['We eat bread and eggs for breakfast.', '我们早餐吃面包和鸡蛋。'],
        ['My sister drinks milk.', '我妹妹喝牛奶。'],
        ['I drink water.', '我喝水。'],
    ], [
        ['早餐吃什么？', ['面包和鸡蛋', '米饭和鱼', '面条', '水果']],
        ['妹妹喝什么？', ['牛奶', '水', '茶', '果汁']],
    ]),
    (0, builder_1.p)(1, 'p1_food', '午饭', [
        ['We have lunch at twelve.', '我们十二点吃午饭。'],
        ['Today we eat rice and fish.', '今天我们吃米饭和鱼。'],
        ['I like fish very much.', '我很喜欢鱼。'],
    ], [
        ['他们几点吃午饭？', ['十二点', '十一点', '一点', '十点']],
        ['他喜欢吃什么？', ['鱼', '米饭', '肉', '菜']],
    ]),
    (0, builder_1.p)(1, 'p1_tea', '喝茶', [
        ['My grandmother drinks tea every afternoon.', '奶奶每天下午喝茶。'],
        ['The tea is hot and green.', '茶是热的绿茶。'],
        ['She often sits by the window.', '她常常坐在窗边。'],
    ], [
        ['奶奶什么时候喝茶？', ['每天下午', '每天早上', '晚上', '中午']],
        ['她常坐在哪里？', ['窗边', '门口', '桌子旁', '床上']],
    ]),
    (0, builder_1.p)(1, 'p1_bakery', '买面包', [
        ['My mother goes to the shop.', '我妈妈去商店。'],
        ['She buys some milk and bread.', '她买了一些牛奶和面包。'],
        ['The bread is very fresh.', '面包很新鲜。'],
    ], [
        ['妈妈买了什么？', ['牛奶和面包', '肉和菜', '水果', '鸡蛋']],
        ['面包怎么样？', ['很新鲜', '很贵', '很硬', '很甜']],
    ]),
    (0, builder_1.p)(1, 'p1_market', '超市', [
        ['There are many people in the supermarket.', '超市里有很多人。'],
        ['My father buys meat and vegetables.', '爸爸买肉和蔬菜。'],
        ['I carry the bag for him.', '我帮他拎袋子。'],
    ], [
        ['爸爸买了什么？', ['肉和蔬菜', '面包和牛奶', '水果', '鱼']],
        ['他做了什么？', ['帮爸爸拎袋子', '推车', '付钱', '在外面等']],
    ]),
    (0, builder_1.p)(1, 'p1_water', '喝水', [
        ['Do you drink enough water every day?', '你每天喝够水了吗？'],
        ['I drink eight cups.', '我喝八杯。'],
        ['It is good for my body.', '这对我的身体有好处。'],
    ], [
        ['他每天喝几杯水？', ['八杯', '六杯', '十杯', '四杯']],
        ['他为什么喝水？', ['对身体好', '因为渴', '医生要求', '习惯']],
    ]),
    // ---------- 天气 ----------
    (0, builder_1.p)(1, 'p1_weather', '今天的天气', [
        ['It is raining today.', '今天在下雨。'],
        ['I cannot play outside.', '我不能在外面玩。'],
        ['So I stay at home and read a book.', '所以我待在家里看书。'],
    ], [
        ['今天天气怎么样？', ['下雨', '晴天', '下雪', '刮风']],
        ['他在家里做什么？', ['看书', '睡觉', '看电视', '做饭']],
    ]),
    (0, builder_1.p)(1, 'p1_sunny', '晴天', [
        ['The sun is bright today.', '今天阳光明亮。'],
        ['The sky is blue and clean.', '天空又蓝又干净。'],
        ['We want to go to the park.', '我们想去公园。'],
    ], [
        ['天空是什么样的？', ['又蓝又干净', '灰色的', '有很多云', '暗的']],
        ['他们想去哪里？', ['公园', '学校', '商店', '海边']],
    ]),
    (0, builder_1.p)(1, 'p1_winter', '冬天', [
        ['It is very cold in winter.', '冬天很冷。'],
        ['Snow falls on the trees and the road.', '雪落在树上和路上。'],
        ['Children make a snowman together.', '孩子们一起堆雪人。'],
    ], [
        ['雪落在哪里？', ['树上和路上', '房子上', '车上', '河里']],
        ['孩子们做什么？', ['堆雪人', '滑冰', '打雪仗', '回家']],
    ]),
    (0, builder_1.p)(1, 'p1_summer', '夏天', [
        ['Summer is hot here.', '这里夏天很热。'],
        ['We often swim in the river.', '我们常在河里游泳。'],
        ['My brother eats ice cream every day.', '我弟弟每天吃冰淇淋。'],
    ], [
        ['他们常在哪里游泳？', ['河里', '海里', '游泳池', '湖里']],
        ['弟弟每天吃什么？', ['冰淇淋', '西瓜', '面包', '糖']],
    ]),
    (0, builder_1.p)(1, 'p1_wind', '刮风', [
        ['The wind is strong this morning.', '今天早上风很大。'],
        ['My hat flew away.', '我的帽子被吹跑了。'],
        ['A boy helped me find it.', '一个男孩帮我找到了它。'],
    ], [
        ['什么被吹跑了？', ['帽子', '书', '伞', '纸']],
        ['谁帮了他？', ['一个男孩', '一个女孩', '他妈妈', '老师']],
    ]),
    // ---------- 上学 ----------
    (0, builder_1.p)(1, 'p1_classroom', '教室', [
        ['Our classroom is big and clean.', '我们的教室又大又干净。'],
        ['There are forty desks in it.', '里面有四十张桌子。'],
        ['The blackboard is in front.', '黑板在前面。'],
    ], [
        ['教室里有多少张桌子？', ['四十张', '三十张', '五十张', '二十张']],
        ['黑板在哪里？', ['前面', '后面', '左边', '右边']],
    ]),
    (0, builder_1.p)(1, 'p1_teacher', '我的老师', [
        ['My teacher is kind and patient.', '我的老师又和蔼又有耐心。'],
        ['She never gets angry with us.', '她从不对我们生气。'],
        ['All the students love her.', '所有学生都爱她。'],
    ], [
        ['老师是什么样的人？', ['和蔼有耐心', '很严厉', '很安静', '很忙']],
        ['她会对学生生气吗？', ['从不', '经常', '有时候', '每天']],
    ]),
    (0, builder_1.p)(1, 'p1_homework', '做作业', [
        ['I do my homework after dinner.', '我晚饭后做作业。'],
        ['Today the math is difficult.', '今天数学很难。'],
        ['My father helps me with it.', '爸爸帮我做。'],
    ], [
        ['他什么时候做作业？', ['晚饭后', '早饭前', '上学前', '睡觉前']],
        ['今天什么很难？', ['数学', '英语', '语文', '音乐']],
    ]),
    (0, builder_1.p)(1, 'p1_classmate', '同学', [
        ['Tom sits next to me in class.', '汤姆在班上坐我旁边。'],
        ['He is good at drawing.', '他擅长画画。'],
        ['We often play together after school.', '我们放学后常一起玩。'],
    ], [
        ['汤姆坐在哪里？', ['他旁边', '他后面', '他前面', '教室最后']],
        ['汤姆擅长什么？', ['画画', '唱歌', '跑步', '数学']],
    ]),
    (0, builder_1.p)(1, 'p1_library_book', '借书', [
        ['Can I borrow this book?', '我能借这本书吗？'],
        ['Yes, you can keep it for two weeks.', '可以，你能借两周。'],
        ['That is great, thanks.', '太好了，谢谢。'],
    ], [
        ['能借多久？', ['两周', '一周', '一个月', '三天']],
        ['这是在哪里的对话？', ['图书馆', '商店', '学校办公室', '书店']],
    ]),
    (0, builder_1.p)(1, 'p1_late', '迟到', [
        ['I was late for school yesterday.', '我昨天上学迟到了。'],
        ['The bus came very slowly.', '公交车来得很慢。'],
        ['My teacher was not angry.', '老师没生气。'],
    ], [
        ['他为什么迟到？', ['公交车来得慢', '睡过头', '走错路', '下雨']],
        ['老师的反应是？', ['没生气', '很生气', '让他站着', '罚他']],
    ]),
    (0, builder_1.p)(1, 'p1_exam_simple', '小测验', [
        ['We had a short test this morning.', '今天早上我们有个小测验。'],
        ['The questions were easy.', '题目很简单。'],
        ['I finished it in ten minutes.', '我十分钟就做完了。'],
    ], [
        ['题目怎么样？', ['很简单', '很难', '很长', '很奇怪']],
        ['他用了多长时间？', ['十分钟', '半小时', '一小时', '五分钟']],
    ]),
    // ---------- 出行 ----------
    (0, builder_1.p)(1, 'p1_dialog_hello', '对话：问路', [
        ['Excuse me, where is the school?', '打扰一下，学校在哪里？'],
        ['It is near the park.', '它在公园附近。'],
        ['Thank you very much.', '非常感谢。'],
        ['You are welcome.', '不客气。'],
    ], [
        ['他在找什么地方？', ['学校', '公园', '商店', '医院']],
        ['那个地方在哪里？', ['公园附近', '学校后面', '很远', '在左边']],
    ]),
    (0, builder_1.p)(1, 'p1_bus', '坐公交', [
        ['The bus stop is in front of my house.', '公交站在我家前面。'],
        ['I wait there every morning.', '我每天早上在那里等。'],
        ['The bus is often full of people.', '公交车常常挤满了人。'],
    ], [
        ['公交站在哪里？', ['他家前面', '他家后面', '街角', '学校旁边']],
        ['公交车常常怎么样？', ['挤满了人', '很空', '晚点', '很快']],
    ]),
    (0, builder_1.p)(1, 'p1_bike', '骑车', [
        ['My brother rides his bike to work.', '我哥哥骑车上班。'],
        ['It takes him twenty minutes.', '他要二十分钟。'],
        ['He says it is good exercise.', '他说这是很好的锻炼。'],
    ], [
        ['哥哥怎么上班？', ['骑车', '坐公交', '开车', '走路']],
        ['要多长时间？', ['二十分钟', '十分钟', '半小时', '一小时']],
    ]),
    (0, builder_1.p)(1, 'p1_walk', '走路回家', [
        ['We walk home together after class.', '下课后我们一起走回家。'],
        ['The road passes a small river.', '路上会经过一条小河。'],
        ['Sometimes we stop and watch the fish.', '有时我们停下来看鱼。'],
    ], [
        ['路上经过什么？', ['一条小河', '一座桥', '一个公园', '一家商店']],
        ['他们有时停下来做什么？', ['看鱼', '买东西', '休息', '拍照']],
    ]),
    (0, builder_1.p)(1, 'p1_lost_key', '找钥匙', [
        ['Where is my key?', '我的钥匙在哪里？'],
        ['I looked in my bag but it was not there.', '我在包里找了但没有。'],
        ['It was on the table all the time.', '它一直在桌子上。'],
    ], [
        ['钥匙最后在哪里？', ['桌子上', '包里', '口袋里', '门上']],
        ['他先在哪里找的？', ['包里', '桌子上', '床上', '车里']],
    ]),
    // ---------- 宠物与自然 ----------
    (0, builder_1.p)(1, 'p1_cat', '我的猫', [
        ['I have a small cat.', '我有一只小猫。'],
        ['Its name is Mimi.', '它叫咪咪。'],
        ['It likes to sleep on my bed.', '它喜欢睡在我床上。'],
        ['It is very lovely.', '它很可爱。'],
    ], [
        ['猫叫什么名字？', ['咪咪', '花花', '小白', '豆豆']],
        ['猫喜欢在哪里睡觉？', ['他的床上', '沙发上', '地上', '椅子上']],
    ]),
    (0, builder_1.p)(1, 'p1_dog', '遛狗', [
        ['My uncle has a big dog.', '我叔叔有一只大狗。'],
        ['They walk in the park every evening.', '他们每天傍晚在公园散步。'],
        ['The dog runs after birds.', '狗会追鸟。'],
    ], [
        ['他们什么时候散步？', ['每天傍晚', '每天早上', '周末', '中午']],
        ['狗会追什么？', ['鸟', '猫', '球', '孩子']],
    ]),
    (0, builder_1.p)(1, 'p1_birds', '鸟', [
        ['Two birds live in the tree near my window.', '两只鸟住在我窗边的树上。'],
        ['They sing early in the morning.', '它们清早唱歌。'],
        ['I like their sound.', '我喜欢它们的声音。'],
    ], [
        ['有几只鸟？', ['两只', '三只', '一只', '很多']],
        ['它们什么时候唱歌？', ['清早', '傍晚', '中午', '半夜']],
    ]),
    (0, builder_1.p)(1, 'p1_garden', '花园', [
        ['There are many flowers in the garden.', '花园里有很多花。'],
        ['My grandmother waters them every day.', '奶奶每天给它们浇水。'],
        ['The red ones are the most beautiful.', '红色的最漂亮。'],
    ], [
        ['谁给花浇水？', ['奶奶', '妈妈', '爷爷', '他自己']],
        ['哪种花最漂亮？', ['红色的', '黄色的', '白色的', '蓝色的']],
    ]),
    (0, builder_1.p)(1, 'p1_moon', '晚上', [
        ['The moon is round tonight.', '今晚月亮是圆的。'],
        ['We sit outside and look at the sky.', '我们坐在外面看天空。'],
        ['My father tells us an old story.', '爸爸给我们讲一个老故事。'],
    ], [
        ['今晚月亮怎么样？', ['是圆的', '看不见', '很小', '被云挡住了']],
        ['爸爸做什么？', ['讲老故事', '唱歌', '看书', '睡觉']],
    ]),
    // ---------- 玩耍与爱好 ----------
    (0, builder_1.p)(1, 'p1_football', '踢球', [
        ['The boys play football after school.', '男孩们放学后踢足球。'],
        ['Our team won the game.', '我们队赢了比赛。'],
        ['Everyone was very happy.', '大家都很开心。'],
    ], [
        ['比赛结果如何？', ['他们队赢了', '他们队输了', '平局', '没比完']],
        ['他们什么时候踢球？', ['放学后', '上学前', '周末', '中午']],
    ]),
    (0, builder_1.p)(1, 'p1_swim', '游泳', [
        ['I learned to swim last summer.', '我去年夏天学会了游泳。'],
        ['At first I was afraid of the water.', '一开始我怕水。'],
        ['Now I swim every week.', '现在我每周都游。'],
    ], [
        ['他什么时候学会游泳的？', ['去年夏天', '今年夏天', '小时候', '上个月']],
        ['一开始他怎么样？', ['怕水', '很喜欢', '游得很好', '不想学']],
    ]),
    (0, builder_1.p)(1, 'p1_drawing', '画画', [
        ['My sister draws a picture of our house.', '妹妹画了一幅我们家的画。'],
        ['She uses green for the trees.', '她用绿色画树。'],
        ['The picture is on the wall now.', '这幅画现在挂在墙上。'],
    ], [
        ['她画的是什么？', ['他们家', '一棵树', '一只猫', '学校']],
        ['画现在在哪里？', ['墙上', '桌子上', '书里', '她房间地上']],
    ]),
    (0, builder_1.p)(1, 'p1_music', '听音乐', [
        ['My father listens to music when he cooks.', '爸爸做饭时听音乐。'],
        ['He likes old songs.', '他喜欢老歌。'],
        ['Sometimes he sings, too.', '有时他也跟着唱。'],
    ], [
        ['爸爸什么时候听音乐？', ['做饭时', '开车时', '睡前', '工作时']],
        ['他喜欢什么音乐？', ['老歌', '新歌', '外国歌', '安静的音乐']],
    ]),
    (0, builder_1.p)(1, 'p1_tv', '看电视', [
        ['We watch TV together on Friday night.', '周五晚上我们一起看电视。'],
        ['My mother chooses the program.', '妈妈选节目。'],
        ['We eat fruit while we watch.', '我们边看边吃水果。'],
    ], [
        ['他们什么时候一起看电视？', ['周五晚上', '周六晚上', '每天', '周日下午']],
        ['谁选节目？', ['妈妈', '爸爸', '他', '大家一起']],
    ]),
    (0, builder_1.p)(1, 'p1_reading', '读书', [
        ['Reading is my favorite thing.', '读书是我最喜欢的事。'],
        ['I read before I sleep every night.', '我每晚睡前读书。'],
        ['This week I am reading a book about animals.', '这周我在读一本关于动物的书。'],
    ], [
        ['他什么时候读书？', ['每晚睡前', '早上', '午饭后', '上学路上']],
        ['这周读的书是关于什么的？', ['动物', '历史', '科学', '旅行']],
    ]),
    // ---------- 社交 ----------
    (0, builder_1.p)(1, 'p1_greeting', '打招呼', [
        ['Good morning! How are you today?', '早上好！你今天怎么样？'],
        ['I am fine, thank you.', '我很好，谢谢。'],
        ['See you after class.', '下课后见。'],
    ], [
        ['这是什么时候的对话？', ['早上', '晚上', '下午', '半夜']],
        ['他们什么时候再见？', ['下课后', '明天', '放学后', '午饭时']],
    ]),
    (0, builder_1.p)(1, 'p1_introduce', '介绍朋友', [
        ['This is my friend Lily.', '这是我朋友莉莉。'],
        ['She comes from a small town.', '她来自一个小镇。'],
        ['She is new in our class.', '她是我们班的新同学。'],
    ], [
        ['莉莉来自哪里？', ['一个小镇', '一个大城市', '外国', '这里']],
        ['莉莉是什么身份？', ['班上的新同学', '老师', '邻居', '亲戚']],
    ]),
    (0, builder_1.p)(1, 'p1_birthday', '生日', [
        ['Today is my birthday.', '今天是我的生日。'],
        ['My friends give me a big cake.', '朋友们给我一个大蛋糕。'],
        ['We sing and laugh all afternoon.', '我们唱歌笑闹了一下午。'],
    ], [
        ['朋友们给了他什么？', ['一个大蛋糕', '一本书', '一个礼物盒', '一张卡片']],
        ['他们玩了多久？', ['一下午', '一晚上', '一小时', '一整天']],
    ]),
    (0, builder_1.p)(1, 'p1_thanks', '道谢', [
        ['You helped me a lot yesterday.', '你昨天帮了我很多。'],
        ['Thank you for your time.', '谢谢你花时间。'],
        ['It was nothing. I was glad to help.', '没什么，我很乐意帮忙。'],
    ], [
        ['他为什么道谢？', ['对方昨天帮了他', '对方送了礼物', '对方请客', '对方来看他']],
        ['对方怎么回答？', ['很乐意帮忙', '不用谢我', '下次注意', '别客气了']],
    ]),
    (0, builder_1.p)(1, 'p1_sorry', '道歉', [
        ['I am sorry I broke your cup.', '对不起，我打碎了你的杯子。'],
        ['It is all right. Do not worry.', '没关系，别担心。'],
        ['I will buy you a new one.', '我会给你买个新的。'],
    ], [
        ['他做错了什么？', ['打碎了杯子', '弄丢了书', '迟到了', '忘了约定']],
        ['他打算怎么做？', ['买个新的', '修好它', '道歉就行', '不管了']],
    ]),
    (0, builder_1.p)(1, 'p1_invite', '邀请', [
        ['Would you like to come to my house?', '你想来我家吗？'],
        ['We can play games and eat cake.', '我们可以玩游戏、吃蛋糕。'],
        ['That sounds great!', '听起来太棒了！'],
    ], [
        ['他邀请对方做什么？', ['来他家', '去公园', '一起上学', '看电影']],
        ['他们打算做什么？', ['玩游戏吃蛋糕', '看书', '踢球', '做作业']],
    ]),
    // ---------- 家庭与帮忙 ----------
    (0, builder_1.p)(1, 'p1_family', '我的家', [
        ['There are four people in my family.', '我家有四口人。'],
        ['My parents work in a hospital.', '我父母在医院工作。'],
        ['My sister and I go to the same school.', '我和妹妹在同一所学校。'],
    ], [
        ['他家有几口人？', ['四口', '三口', '五口', '六口']],
        ['父母在哪里工作？', ['医院', '学校', '商店', '工厂']],
    ]),
    (0, builder_1.p)(1, 'p1_help_mom', '帮妈妈', [
        ['My mother was busy in the kitchen.', '妈妈在厨房里很忙。'],
        ['I helped her wash the vegetables.', '我帮她洗菜。'],
        ['She said I was a good child.', '她说我是个好孩子。'],
    ], [
        ['他帮妈妈做了什么？', ['洗菜', '做饭', '洗碗', '扫地']],
        ['妈妈说了什么？', ['他是个好孩子', '让他去玩', '让他做作业', '谢谢他']],
    ]),
    (0, builder_1.p)(1, 'p1_phone_call', '打电话', [
        ['Hello, may I speak to Tom?', '你好，请问汤姆在吗？'],
        ['He is not at home now.', '他现在不在家。'],
        ['Please tell him I called.', '请告诉他我打过电话。'],
    ], [
        ['他要找谁？', ['汤姆', '莉莉', '老师', '妈妈']],
        ['汤姆在哪里？', ['不在家', '在睡觉', '在学校', '在打电话']],
    ]),
    (0, builder_1.p)(1, 'p1_cold', '感冒', [
        ['My little brother has a cold.', '我弟弟感冒了。'],
        ['He stays in bed and drinks hot water.', '他躺在床上喝热水。'],
        ['The doctor says he will be fine soon.', '医生说他很快就会好。'],
    ], [
        ['弟弟怎么了？', ['感冒了', '受伤了', '发烧了', '肚子疼']],
        ['医生怎么说？', ['他很快会好', '要住院', '要吃药', '要休息一周']],
    ]),
    (0, builder_1.p)(1, 'p1_wash_hands', '洗手', [
        ['Wash your hands before dinner!', '吃饭前洗手！'],
        ['My mother says this every day.', '妈妈每天都这么说。'],
        ['Now it is my habit.', '现在这成了我的习惯。'],
    ], [
        ['妈妈让他什么时候洗手？', ['吃饭前', '吃饭后', '睡觉前', '回家后']],
        ['现在这件事对他来说是什么？', ['习惯', '麻烦', '规矩', '任务']],
    ]),
    (0, builder_1.p)(1, 'p1_shopping_pen', '买笔', [
        ['How much is this pen?', '这支笔多少钱？'],
        ['It is three yuan.', '三块钱。'],
        ['I will take two, please.', '我要两支。'],
    ], [
        ['一支笔多少钱？', ['三块', '两块', '五块', '一块']],
        ['他买了几支？', ['两支', '一支', '三支', '没买']],
    ]),
];

});

__def("shared/data/passages/phase2", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE2 = void 0;
// Phase 2 · 阻抗突围：4-5 句，过去时 / 从句 / 进行时，成年人的日常交流场景
const builder_1 = require("./builder");
exports.PHASE2 = [
    // ---------- 求职与职场 ----------
    (0, builder_1.p)(2, 'p2_interview', '面试', [
        ['I had an interview at a small company yesterday.', '昨天我在一家小公司面试。'],
        ['The manager asked me why I wanted the job.', '经理问我为什么想要这份工作。'],
        ['I told her about my last project.', '我跟她讲了我上一个项目。'],
        ['She said they would call me this week.', '她说这周会给我打电话。'],
    ], [
        ['经理问了什么？', ['为什么想要这份工作', '期望薪水', '什么时候能上班', '为什么离职']],
        ['他回答时讲了什么？', ['上一个项目', '他的学校', '他的爱好', '他的家庭']],
        ['结果如何？', ['公司这周会联系他', '当场录用', '被拒绝了', '要再面一轮']],
    ]),
    (0, builder_1.p)(2, 'p2_first_day', '第一天上班', [
        ['On my first day, I arrived half an hour early.', '第一天我提前半小时到。'],
        ['A woman at the door showed me my desk.', '门口一位女士带我去我的工位。'],
        ['Everyone was busy, so I read the documents alone.', '大家都很忙，所以我自己看文件。'],
        ['At noon two people invited me to lunch.', '中午有两个人叫我一起吃午饭。'],
    ], [
        ['他提前多久到的？', ['半小时', '一小时', '十分钟', '刚好准时']],
        ['上午他做了什么？', ['自己看文件', '开会', '和同事聊天', '参观公司']],
        ['中午发生了什么？', ['有人叫他吃午饭', '他一个人吃', '他回家了', '他没吃']],
    ]),
    (0, builder_1.p)(2, 'p2_meeting', '开会', [
        ['We had a long meeting this morning.', '今天上午我们开了个长会。'],
        ['My boss was explaining the new plan.', '老板在讲新计划。'],
        ['Nobody asked any questions.', '没人提问。'],
        ['I think most people did not understand it.', '我觉得大部分人没听懂。'],
    ], [
        ['老板在讲什么？', ['新计划', '上季度业绩', '人事变动', '客户投诉']],
        ['会上有人提问吗？', ['没有', '有很多', '只有他', '只有一个人']],
        ['他怎么看？', ['大部分人没听懂', '大家都懂了', '计划很好', '会开得太短']],
    ]),
    (0, builder_1.p)(2, 'p2_overtime', '加班', [
        ['I worked until nine last night.', '昨晚我工作到九点。'],
        ['The report was due this morning.', '报告今天早上就要交。'],
        ['My wife kept my dinner warm.', '我妻子给我留了热饭。'],
        ['I was too tired to eat it.', '我累得吃不下。'],
    ], [
        ['他昨晚工作到几点？', ['九点', '八点', '十点', '半夜']],
        ['为什么加班？', ['报告今早要交', '老板要求', '事情太多', '同事请假']],
        ['回家后他吃饭了吗？', ['太累没吃', '吃完了', '只吃了一点', '出去吃了']],
    ]),
    (0, builder_1.p)(2, 'p2_day_off', '请假', [
        ['Could I take tomorrow off?', '我明天能请一天假吗？'],
        ['Is something wrong?', '有什么事吗？'],
        ['My son is going to the hospital for a check.', '我儿子要去医院检查。'],
        ['Of course. Family comes first.', '当然可以。家人第一。'],
    ], [
        ['他为什么请假？', ['儿子要去医院检查', '自己生病', '家里有客人', '要出差']],
        ['老板的态度是？', ['同意，家人第一', '不同意', '让他调休', '让他考虑清楚']],
    ]),
    (0, builder_1.p)(2, 'p2_colleague', '同事', [
        ['A new colleague joined our team last month.', '上个月一位新同事加入我们组。'],
        ['She used to work in another city.', '她以前在另一个城市工作。'],
        ['She learns everything very fast.', '她学什么都很快。'],
        ['We often have coffee together in the morning.', '我们常常早上一起喝咖啡。'],
    ], [
        ['新同事以前在哪里工作？', ['另一个城市', '同一家公司', '国外', '学校']],
        ['她有什么特点？', ['学得很快', '很安静', '经验丰富', '很爱说话']],
    ]),
    (0, builder_1.p)(2, 'p2_boss', '被表扬', [
        ['My boss called me into his office.', '老板叫我进他办公室。'],
        ['At first I thought I had made a mistake.', '一开始我以为我做错了什么。'],
        ['But he wanted to thank me for the work.', '但他是想为那份工作感谢我。'],
        ['I felt relaxed when I walked out.', '走出来时我松了口气。'],
    ], [
        ['他一开始以为发生了什么？', ['自己做错了事', '要被辞退', '要加薪', '要出差']],
        ['实际上老板要做什么？', ['感谢他的工作', '批评他', '给他新任务', '问他意见']],
    ]),
    // ---------- 餐饮 ----------
    (0, builder_1.p)(2, 'p2_restaurant', '餐厅点餐', [
        ['Are you ready to order?', '您可以点餐了吗？'],
        ['Yes, I will have the fish and a glass of water.', '好的，我要鱼和一杯水。'],
        ['Would you like anything else?', '还需要别的吗？'],
        ['No, thank you. That is all.', '不用了，谢谢，就这些。'],
    ], [
        ['他点了什么？', ['鱼和一杯水', '牛肉和茶', '面条', '汤和面包']],
        ['他还要别的吗？', ['不要了', '要甜点', '要咖啡', '再想想']],
    ]),
    (0, builder_1.p)(2, 'p2_delivery_food', '点外卖', [
        ['We ordered food on the phone last night.', '昨晚我们用手机点了外卖。'],
        ['They said it would arrive in thirty minutes.', '他们说三十分钟送到。'],
        ['It came after an hour and it was cold.', '一小时后才到，而且是凉的。'],
        ['We will not order from that place again.', '我们不会再从那家点了。'],
    ], [
        ['商家说多久送到？', ['三十分钟', '一小时', '二十分钟', '没说']],
        ['实际情况怎么样？', ['一小时才到还是凉的', '准时送到', '送错了', '没送到']],
        ['他们的决定是？', ['不再从那家点', '投诉商家', '要求退款', '下次早点点']],
    ]),
    (0, builder_1.p)(2, 'p2_coffee_shop', '咖啡店', [
        ['The coffee shop near my office is always full.', '我办公室附近的咖啡店总是满的。'],
        ['I go there when I need to think.', '我需要思考时会去那里。'],
        ['The noise does not bother me.', '嘈杂声不影响我。'],
        ['Somehow I work better there than at home.', '不知为什么我在那里比在家工作得好。'],
    ], [
        ['他什么时候去咖啡店？', ['需要思考时', '每天早上', '午休时', '下班后']],
        ['嘈杂声对他有影响吗？', ['没有影响', '很烦人', '让他分心', '他戴耳机']],
    ]),
    (0, builder_1.p)(2, 'p2_cook', '学做饭', [
        ['My friend was teaching me to cook last Sunday.', '上周日我朋友在教我做饭。'],
        ['She said the fire was too big.', '她说火太大了。'],
        ['The vegetables turned black in a minute.', '菜一分钟就黑了。'],
        ['We laughed and ordered noodles instead.', '我们笑了笑，改点了面条。'],
    ], [
        ['朋友指出了什么问题？', ['火太大', '油太多', '菜没洗', '锅太小']],
        ['最后他们吃了什么？', ['点的面条', '烧黑的菜', '出去吃', '没吃']],
    ]),
    (0, builder_1.p)(2, 'p2_dinner_guest', '请客', [
        ['We invited our neighbors to dinner on Saturday.', '周六我们请邻居来吃饭。'],
        ['My husband cooked all afternoon.', '我丈夫做了一下午饭。'],
        ['They brought a bottle of wine and some fruit.', '他们带来一瓶酒和一些水果。'],
        ['We talked until midnight.', '我们聊到半夜。'],
    ], [
        ['谁做的饭？', ['她丈夫', '她自己', '邻居', '一起做的']],
        ['邻居带了什么？', ['一瓶酒和水果', '蛋糕', '花', '什么都没带']],
        ['他们聊到什么时候？', ['半夜', '十点', '天亮', '晚饭后就散了']],
    ]),
    // ---------- 购物 ----------
    (0, builder_1.p)(2, 'p2_return', '退货', [
        ['I bought these shoes last week.', '这双鞋我上周买的。'],
        ['They are too small for me.', '对我来说太小了。'],
        ['Do you have the receipt?', '您有小票吗？'],
        ['Yes, here it is.', '有，在这里。'],
    ], [
        ['鞋子有什么问题？', ['太小了', '太大了', '颜色不对', '坏了']],
        ['店员要求什么？', ['小票', '身份证', '包装盒', '付款记录']],
    ]),
    (0, builder_1.p)(2, 'p2_online_shop', '网购', [
        ['She spends too much money online.', '她网购花太多钱。'],
        ['Last month she bought three coats.', '上个月她买了三件外套。'],
        ['Two of them are still in the box.', '其中两件还在盒子里。'],
        ['She says she will stop, but nobody believes her.', '她说会停手，但没人信。'],
    ], [
        ['她上个月买了什么？', ['三件外套', '两双鞋', '一个包', '很多书']],
        ['其中几件还没拆？', ['两件', '一件', '三件都没拆', '都拆了']],
    ]),
    (0, builder_1.p)(2, 'p2_package', '快递', [
        ['My package did not arrive yesterday.', '我的快递昨天没到。'],
        ['I called the company this morning.', '今天早上我打电话给公司。'],
        ['They said the driver went to the wrong street.', '他们说司机走错街了。'],
        ['It will come again this afternoon.', '今天下午会再送。'],
    ], [
        ['快递为什么没到？', ['司机走错街了', '地址写错了', '天气原因', '没人签收']],
        ['什么时候会再送？', ['今天下午', '明天', '今晚', '下周']],
    ]),
    (0, builder_1.p)(2, 'p2_bargain', '讲价', [
        ['This bag looks nice. How much?', '这个包不错，多少钱？'],
        ['Two hundred, but I can give it to you for one eighty.', '两百，不过可以给你一百八。'],
        ['Can you make it one fifty?', '一百五行吗？'],
        ['All right, because you are my first customer today.', '好吧，因为你是我今天第一个客人。'],
    ], [
        ['最后成交多少钱？', ['一百五', '一百八', '两百', '没谈成']],
        ['老板为什么同意？', ['他是今天第一个客人', '包有瑕疵', '快关门了', '他是熟客']],
    ]),
    // ---------- 出行 ----------
    (0, builder_1.p)(2, 'p2_rain', '没带伞', [
        ['It started to rain when I left the office.', '我离开办公室的时候开始下雨了。'],
        ['I did not bring my umbrella that day.', '那天我没带伞。'],
        ['I ran to the bus stop as fast as I could.', '我用最快的速度跑到公交站。'],
        ['My clothes were all wet when I got on the bus.', '上车的时候我衣服全湿了。'],
    ], [
        ['什么时候开始下雨的？', ['他离开办公室时', '早上', '半夜', '他到家后']],
        ['他为什么淋湿了？', ['没带伞', '伞坏了', '雨太大', '走得太慢']],
    ]),
    (0, builder_1.p)(2, 'p2_taxi', '打车', [
        ['Could you take me to the train station?', '能送我去火车站吗？'],
        ['Sure. Are you in a hurry?', '好的。您赶时间吗？'],
        ['My train leaves in forty minutes.', '我的火车四十分钟后开。'],
        ['Do not worry, we have enough time.', '别担心，时间够。'],
    ], [
        ['他要去哪里？', ['火车站', '机场', '公司', '医院']],
        ['他的火车多久后开？', ['四十分钟后', '二十分钟后', '一小时后', '半小时后']],
    ]),
    (0, builder_1.p)(2, 'p2_traffic', '堵车', [
        ['We were driving to the airport this morning.', '今天早上我们开车去机场。'],
        ['The traffic did not move for twenty minutes.', '车堵着二十分钟没动。'],
        ['My friend was getting nervous.', '我朋友越来越紧张。'],
        ['In the end we caught the plane.', '最后我们还是赶上了飞机。'],
    ], [
        ['车堵了多久没动？', ['二十分钟', '十分钟', '一小时', '半小时']],
        ['结果怎么样？', ['赶上了飞机', '错过了飞机', '改签了', '取消了行程']],
    ]),
    (0, builder_1.p)(2, 'p2_subway', '地铁', [
        ['The subway is crowded at eight in the morning.', '早上八点地铁很挤。'],
        ['People stand very close to each other.', '人们挨得很近。'],
        ['I usually listen to music and close my eyes.', '我通常听着音乐闭上眼。'],
        ['Twenty minutes later I am at work.', '二十分钟后我就到公司了。'],
    ], [
        ['地铁什么时候最挤？', ['早上八点', '下午六点', '中午', '晚上']],
        ['他在地铁上做什么？', ['听音乐闭眼', '看手机', '看书', '睡觉']],
    ]),
    (0, builder_1.p)(2, 'p2_train_station', '火车站', [
        ['There were hundreds of people at the station.', '车站有几百人。'],
        ['A voice told us the train was thirty minutes late.', '广播说火车晚点三十分钟。'],
        ['An old man asked me to help him find his seat number.', '一位老人请我帮他找座位号。'],
        ['He thanked me three times before I left.', '我走之前他谢了我三次。'],
    ], [
        ['火车怎么了？', ['晚点三十分钟', '取消了', '提前了', '换站台了']],
        ['老人请他帮什么忙？', ['找座位号', '拿行李', '买票', '打电话']],
    ]),
    (0, builder_1.p)(2, 'p2_hotel', '订酒店', [
        ['I would like a room for two nights.', '我想订两晚的房间。'],
        ['Do you want a room with a window?', '要有窗户的房间吗？'],
        ['Yes, and a quiet one if possible.', '要，如果可以的话要安静的。'],
        ['We have one on the top floor.', '我们顶层有一间。'],
    ], [
        ['他要住几晚？', ['两晚', '一晚', '三晚', '一周']],
        ['最后给他的房间在哪里？', ['顶层', '一楼', '中间层', '后院']],
    ]),
    (0, builder_1.p)(2, 'p2_beach', '海边', [
        ['Last summer we spent a week by the sea.', '去年夏天我们在海边待了一周。'],
        ['The children were playing in the sand all day.', '孩子们整天在沙滩上玩。'],
        ['My wife read three books in that week.', '我妻子那周读了三本书。'],
        ['Nobody wanted to go home.', '没人想回家。'],
    ], [
        ['他们在海边待了多久？', ['一周', '三天', '两周', '一个月']],
        ['妻子那周做了什么？', ['读了三本书', '游泳', '拍照', '睡觉']],
    ]),
    (0, builder_1.p)(2, 'p2_photo', '拍照', [
        ['We took many photos on the mountain.', '我们在山上拍了很多照片。'],
        ['My phone died before we reached the top.', '还没到山顶我手机就没电了。'],
        ['Luckily my brother took some for me.', '幸好我哥帮我拍了几张。'],
        ['He sent them to me that evening.', '那天晚上他发给了我。'],
    ], [
        ['他手机怎么了？', ['没到山顶就没电了', '摔坏了', '丢了', '进水了']],
        ['最后照片怎么来的？', ['哥哥帮他拍并发给他', '别人帮拍的', '没拍到', '用相机拍的']],
    ]),
    (0, builder_1.p)(2, 'p2_dialog_plan', '对话：周末计划', [
        ['What are you doing this Saturday?', '这周六你要做什么？'],
        ["I'm planning to visit my grandmother.", '我打算去看我奶奶。'],
        ['That sounds nice. Where does she live?', '听起来不错。她住在哪里？'],
        ['She lives in a small village near the river.', '她住在河边的一个小村子里。'],
    ], [
        ['他周六打算做什么？', ['去看奶奶', '去上班', '在家休息', '去旅行']],
        ['奶奶住在哪里？', ['河边的小村子', '城市里', '山上', '海边']],
    ]),
    (0, builder_1.p)(2, 'p2_weekend', '上周末', [
        ['Last weekend I went to the mountain with my friends.', '上周末我和朋友们去了山里。'],
        ['The weather was sunny and warm.', '天气晴朗又温暖。'],
        ['We took many photos there.', '我们在那里拍了很多照片。'],
        ['We came back home in the evening.', '我们傍晚回到家。'],
        ['I was tired but very happy.', '我很累但是很开心。'],
    ], [
        ['他上周末去了哪里？', ['山里', '海边', '公园', '城市']],
        ['他们在那里做了什么？', ['拍了很多照片', '游泳', '买东西', '吃饭']],
        ['他回家后感觉怎么样？', ['累但开心', '很生气', '很难过', '很饿']],
    ]),
    // ---------- 健康 ----------
    (0, builder_1.p)(2, 'p2_doctor', '看医生', [
        ['I have had a headache for three days.', '我头疼三天了。'],
        ['Do you sleep well at night?', '晚上睡得好吗？'],
        ['Not really. I work until very late.', '不太好，我工作到很晚。'],
        ['Then rest more and drink more water.', '那就多休息、多喝水。'],
    ], [
        ['他哪里不舒服？', ['头疼', '肚子疼', '嗓子疼', '发烧']],
        ['医生认为原因可能是什么？', ['睡得不好、工作太晚', '感冒', '吃坏了', '压力大']],
        ['医生的建议是？', ['多休息多喝水', '吃药', '去医院检查', '换工作']],
    ]),
    (0, builder_1.p)(2, 'p2_pharmacy', '药店', [
        ['Do you have anything for a cough?', '有治咳嗽的药吗？'],
        ['How long have you been coughing?', '您咳多久了？'],
        ['About a week.', '大概一周。'],
        ['If it does not stop, please see a doctor.', '如果不见好，请去看医生。'],
    ], [
        ['他咳了多久？', ['大概一周', '三天', '一个月', '两天']],
        ['店员提醒了什么？', ['不见好要看医生', '按时吃药', '多喝水', '不要吃冷的']],
    ]),
    (0, builder_1.p)(2, 'p2_gym', '健身房', [
        ['I joined a gym near my house in March.', '三月我在家附近办了张健身卡。'],
        ['At the beginning I went four times a week.', '一开始我一周去四次。'],
        ['Now I go once a month.', '现在一个月去一次。'],
        ['The card cost me a lot of money.', '这张卡花了我不少钱。'],
    ], [
        ['一开始他一周去几次？', ['四次', '三次', '两次', '每天']],
        ['现在呢？', ['一个月一次', '一周一次', '完全不去', '还是四次']],
    ]),
    (0, builder_1.p)(2, 'p2_running', '跑步', [
        ['My neighbor runs by the river every morning.', '我邻居每天早上沿河跑步。'],
        ['He is over sixty but very strong.', '他六十多了但很硬朗。'],
        ['He told me he started thirty years ago.', '他说他三十年前开始跑的。'],
        ['I want to try, but I always find an excuse.', '我想试试，但总能找到借口。'],
    ], [
        ['邻居多大年纪？', ['六十多', '五十多', '七十多', '四十多']],
        ['他跑了多久了？', ['三十年', '十年', '二十年', '三年']],
        ['说话人自己呢？', ['想跑但总找借口', '也跟着跑', '不感兴趣', '刚开始跑']],
    ]),
    (0, builder_1.p)(2, 'p2_hurt', '受伤', [
        ['I fell down while I was playing football.', '我踢球时摔倒了。'],
        ['My knee hurt a lot that night.', '那天晚上我膝盖很疼。'],
        ['The doctor said nothing was broken.', '医生说没骨折。'],
        ['I had to rest for two weeks.', '我不得不休息两周。'],
    ], [
        ['他怎么受伤的？', ['踢球时摔倒', '跑步时', '骑车摔的', '走路滑倒']],
        ['医生怎么说？', ['没骨折', '需要手术', '要打石膏', '很严重']],
    ]),
    // ---------- 居住 ----------
    (0, builder_1.p)(2, 'p2_rent', '租房', [
        ['I am looking for a flat near the subway.', '我在找地铁附近的公寓。'],
        ['How much can you pay each month?', '您每月能付多少？'],
        ['Under three thousand, if possible.', '如果可以的话三千以内。'],
        ['I have two rooms to show you tomorrow.', '我明天可以带您看两间。'],
    ], [
        ['他想租在哪里？', ['地铁附近', '公司附近', '市中心', '学校附近']],
        ['他的预算是？', ['三千以内', '两千以内', '四千以内', '没说']],
    ]),
    (0, builder_1.p)(2, 'p2_landlord', '房东', [
        ['The water in my bathroom stopped this morning.', '今天早上我卫生间没水了。'],
        ['I sent a message to my landlord.', '我给房东发了消息。'],
        ['He answered after four hours.', '他四小时后才回。'],
        ['A worker is coming tomorrow morning.', '明天早上有工人来。'],
    ], [
        ['出了什么问题？', ['卫生间没水', '没电', '门坏了', '窗户漏风']],
        ['房东多久回复的？', ['四小时后', '马上', '第二天', '一直没回']],
    ]),
    (0, builder_1.p)(2, 'p2_internet', '装网络', [
        ['The worker came to install the internet at ten.', '工人十点来装网络。'],
        ['He worked for two hours in the small room.', '他在小房间里干了两个小时。'],
        ['Everything was fine when he left.', '他走的时候一切正常。'],
        ['But at night the internet stopped again.', '但晚上网络又断了。'],
    ], [
        ['工人干了多久？', ['两个小时', '一个小时', '一上午', '半小时']],
        ['晚上发生了什么？', ['网络又断了', '一切正常', '工人又来了', '停电了']],
    ]),
    (0, builder_1.p)(2, 'p2_move', '搬家', [
        ['We moved to a new flat last month.', '上个月我们搬到新公寓。'],
        ['Three friends came to help us.', '三个朋友来帮忙。'],
        ['The heaviest thing was the old piano.', '最重的是那架旧钢琴。'],
        ['We gave them dinner and a lot of thanks.', '我们请他们吃了饭，谢了又谢。'],
    ], [
        ['几个朋友来帮忙？', ['三个', '两个', '四个', '一个']],
        ['最重的东西是什么？', ['旧钢琴', '床', '书柜', '冰箱']],
    ]),
    (0, builder_1.p)(2, 'p2_neighbor', '邻居', [
        ['Our neighbor plays music late at night.', '我们邻居半夜放音乐。'],
        ['My wife could not sleep for a week.', '我妻子一周都睡不好。'],
        ['I finally knocked on his door and talked to him.', '我最后敲了他的门跟他谈。'],
        ['He was very sorry and it has been quiet since then.', '他很抱歉，从那以后就安静了。'],
    ], [
        ['邻居做了什么？', ['半夜放音乐', '养狗吵闹', '装修', '开派对']],
        ['他怎么解决的？', ['敲门当面谈', '报警', '写纸条', '忍着']],
        ['结果如何？', ['从那以后安静了', '邻居不理他', '吵起来了', '他搬走了']],
    ]),
    // ---------- 金钱 ----------
    (0, builder_1.p)(2, 'p2_bank', '银行开户', [
        ['I would like to open an account.', '我想开个户。'],
        ['Please fill in this form and show me your card.', '请填这张表并出示您的证件。'],
        ['How long will it take?', '要多久？'],
        ['About fifteen minutes.', '大概十五分钟。'],
    ], [
        ['他要办什么？', ['开户', '取钱', '换钱', '办卡']],
        ['要多久？', ['大概十五分钟', '半小时', '五分钟', '一小时']],
    ]),
    (0, builder_1.p)(2, 'p2_atm', '取钱', [
        ['The machine ate my card last night.', '昨晚机器把我的卡吞了。'],
        ['I waited outside the bank until it opened.', '我在银行外等到开门。'],
        ['The woman inside got it back in a minute.', '里面的女士一分钟就取回来了。'],
        ['I felt silly for worrying all night.', '我为担心了一整夜感到好笑。'],
    ], [
        ['发生了什么？', ['机器吞了他的卡', '卡丢了', '取不出钱', '密码错了']],
        ['问题解决得怎么样？', ['一分钟就取回来了', '花了很久', '卡作废了', '要补办']],
    ]),
    (0, builder_1.p)(2, 'p2_bill', '账单', [
        ['My phone bill was much higher this month.', '我这个月话费高了很多。'],
        ['I called them and asked why.', '我打电话问为什么。'],
        ['They said I used the internet abroad.', '他们说我在国外用了流量。'],
        ['I had forgotten to turn it off on my trip.', '我旅行时忘了关。'],
    ], [
        ['账单怎么了？', ['比平时高很多', '没收到', '算错了', '重复扣费']],
        ['原因是什么？', ['旅行时忘关国外流量', '换了套餐', '打电话太多', '系统错误']],
    ]),
    (0, builder_1.p)(2, 'p2_lend', '借钱给朋友', [
        ['A friend asked me for money last year.', '去年一个朋友向我借钱。'],
        ['I lent him two thousand without asking why.', '我没问原因就借了他两千。'],
        ['He paid me back three months later.', '三个月后他还了我。'],
        ['He also brought a box of tea to say thanks.', '他还带了一盒茶来道谢。'],
    ], [
        ['他借了多少？', ['两千', '一千', '三千', '五千']],
        ['朋友多久还的？', ['三个月后', '一个月后', '半年后', '一年后']],
    ]),
    // ---------- 娱乐与生活 ----------
    (0, builder_1.p)(2, 'p2_movie', '看电影', [
        ['We went to see a film on Friday night.', '周五晚上我们去看了场电影。'],
        ['The story was slow at the beginning.', '故事开头很慢。'],
        ['But the last twenty minutes were wonderful.', '但最后二十分钟精彩极了。'],
        ['My friend even cried a little.', '我朋友还哭了一点。'],
    ], [
        ['电影开头怎么样？', ['很慢', '很精彩', '看不懂', '很吵']],
        ['朋友的反应是？', ['哭了一点', '睡着了', '中途走了', '不喜欢']],
    ]),
    (0, builder_1.p)(2, 'p2_concert', '演唱会', [
        ['The tickets sold out in five minutes.', '票五分钟就卖光了。'],
        ['My sister was lucky and got two.', '我妹妹运气好抢到了两张。'],
        ['We stood for three hours and sang every song.', '我们站了三小时，每首歌都跟着唱。'],
        ['My voice was gone the next day.', '第二天我嗓子哑了。'],
    ], [
        ['票多久卖光的？', ['五分钟', '一小时', '一天', '十分钟']],
        ['第二天他怎么了？', ['嗓子哑了', '腿疼', '感冒了', '很困']],
    ]),
    (0, builder_1.p)(2, 'p2_game', '打游戏', [
        ['My son plays that game every evening.', '我儿子每晚都玩那个游戏。'],
        ['He was playing when I came home yesterday.', '昨天我回家时他正在玩。'],
        ['I asked him to stop after one hour.', '我让他一小时后停。'],
        ['He agreed, but he did not.', '他答应了，但没做到。'],
    ], [
        ['他要求儿子怎么做？', ['一小时后停', '不许玩', '做完作业再玩', '只能周末玩']],
        ['儿子做到了吗？', ['答应了但没做到', '做到了', '不同意', '关机了']],
    ]),
    (0, builder_1.p)(2, 'p2_series', '追剧', [
        ['My wife and I started a new series last week.', '上周我和妻子开始追一部新剧。'],
        ['We said we would watch one part each night.', '我们说好每晚看一集。'],
        ['On the first night we watched five.', '第一晚我们看了五集。'],
        ['We went to bed at two in the morning.', '我们凌晨两点才睡。'],
    ], [
        ['他们说好每晚看几集？', ['一集', '两集', '三集', '看到困为止']],
        ['第一晚实际看了几集？', ['五集', '一集', '三集', '两集']],
    ]),
    (0, builder_1.p)(2, 'p2_library', '图书馆', [
        ['The library on the third floor is very quiet.', '三楼的图书馆很安静。'],
        ['Students are reading there from morning to night.', '学生们从早到晚在那里看书。'],
        ['You must turn off your phone before you enter.', '进去之前必须关手机。'],
        ['I go there when I need to finish something.', '我需要完成什么事时就去那里。'],
    ], [
        ['图书馆在几楼？', ['三楼', '二楼', '一楼', '四楼']],
        ['进去之前要做什么？', ['关手机', '登记', '存包', '换鞋']],
    ]),
    (0, builder_1.p)(2, 'p2_exam', '考试', [
        ['I took an English exam last Friday.', '上周五我考了英语。'],
        ['The listening part was much harder than I thought.', '听力部分比我想的难得多。'],
        ['I could not catch the last question at all.', '最后一题我完全没听清。'],
        ['I will practice listening every day from now on.', '从现在起我要每天练听力。'],
    ], [
        ['哪部分最难？', ['听力', '阅读', '写作', '口语']],
        ['他的打算是？', ['每天练听力', '再考一次', '报班', '放弃']],
    ]),
    (0, builder_1.p)(2, 'p2_class_sign', '报名课程', [
        ['I want to sign up for the cooking class.', '我想报名烹饪课。'],
        ['It starts next Monday evening.', '下周一晚上开课。'],
        ['Is there any room left?', '还有位置吗？'],
        ['Only two, so you should decide today.', '只剩两个，所以您今天得决定。'],
    ], [
        ['课什么时候开始？', ['下周一晚上', '下周六', '明天', '下个月']],
        ['还剩几个位置？', ['两个', '一个', '很多', '没有了']],
    ]),
    (0, builder_1.p)(2, 'p2_birthday_party', '生日聚会', [
        ['We were preparing the room when she arrived.', '她到的时候我们正在布置房间。'],
        ['She did not know anything about the party.', '她完全不知道有派对。'],
        ['Her face was so funny when we turned on the light.', '我们开灯时她的表情太好笑了。'],
        ['She said it was her best birthday.', '她说这是她最好的生日。'],
    ], [
        ['她知道有派对吗？', ['完全不知道', '早就知道', '猜到了', '朋友告诉她了']],
        ['她怎么评价？', ['最好的生日', '太吵了', '没准备好', '很意外']],
    ]),
    (0, builder_1.p)(2, 'p2_gift', '送礼物', [
        ['What should I buy for my mother?', '我该给妈妈买什么？'],
        ['She likes flowers, but they die so fast.', '她喜欢花，但花谢得太快。'],
        ['Why not buy her a plant instead?', '那为什么不买盆植物？'],
        ['That is a good idea. Thank you.', '好主意，谢谢。'],
    ], [
        ['为什么不买花？', ['花谢得太快', '妈妈不喜欢', '太贵', '买不到']],
        ['最后决定买什么？', ['一盆植物', '一束花', '衣服', '还没决定']],
    ]),
    (0, builder_1.p)(2, 'p2_goodbye', '告别', [
        ['My colleague is leaving for another city.', '我同事要去另一个城市了。'],
        ['We had dinner together last night.', '昨晚我们一起吃了饭。'],
        ['Everyone said they would visit her.', '大家都说会去看她。'],
        ['I wonder how many of us really will.', '我想知道我们当中有几个真会去。'],
    ], [
        ['同事要去哪里？', ['另一个城市', '国外', '回老家', '别的公司']],
        ['说话人的想法是？', ['怀疑有几个人真会去', '很期待去看她', '很难过', '无所谓']],
    ]),
    (0, builder_1.p)(2, 'p2_phone_dead', '手机没电', [
        ['My phone died while I was waiting for my friend.', '等朋友的时候我手机没电了。'],
        ['I could not call her or check the time.', '我没法打电话也看不了时间。'],
        ['I sat on a bench and watched the street.', '我坐在长椅上看街景。'],
        ['It was the quietest hour of my whole week.', '那是我整周最安静的一小时。'],
    ], [
        ['手机没电后他做了什么？', ['坐长椅上看街景', '找地方充电', '回家了', '借电话']],
        ['他怎么评价那段时间？', ['整周最安静的一小时', '很焦虑', '浪费时间', '很生气']],
    ]),
    (0, builder_1.p)(2, 'p2_umbrella_lost', '丢伞', [
        ['I have lost four umbrellas this year.', '今年我已经丢了四把伞。'],
        ['I always leave them in taxis or shops.', '我总是把它们落在出租车或店里。'],
        ['Now I buy the cheapest ones.', '现在我只买最便宜的。'],
        ['My wife thinks I should just get wet.', '我妻子觉得我干脆淋雨算了。'],
    ], [
        ['今年丢了几把伞？', ['四把', '三把', '两把', '五把']],
        ['他现在怎么做？', ['只买最便宜的', '不带伞了', '买很多把', '用别人的']],
    ]),
];

});

__def("shared/data/passages/phase3", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE3 = void 0;
// Phase 3 · 肌内固化：5-6 句，现在完成时 / 虚拟语气 / 被动 / 转折与让步
const builder_1 = require("./builder");
exports.PHASE3 = [
    // ---------- 职场 ----------
    (0, builder_1.p)(3, 'p3_job', '入职两个月', [
        ['I have been working at this company for two months.', '我在这家公司已经工作两个月了。'],
        ['On my first day, I was so nervous that I could not say a word.', '第一天我紧张得说不出话来。'],
        ['My manager noticed it and came to talk with me.', '我的经理注意到了，走过来和我说话。'],
        ['She told me that everyone feels the same at the beginning.', '她告诉我每个人一开始都是这种感觉。'],
        ['Now I enjoy working here, and I have made several good friends.', '现在我很享受在这里工作，还交了几个好朋友。'],
    ], [
        ['他在这家公司工作多久了？', ['两个月', '两年', '两周', '两天']],
        ['第一天他为什么说不出话？', ['太紧张', '生病了', '不会英语', '在生气']],
        ['经理对他说了什么？', ['每个人一开始都这样', '让他快点适应', '批评了他', '让他回家']],
    ]),
    (0, builder_1.p)(3, 'p3_promotion', '升职', [
        ['I was offered a higher position last week.', '上周公司给了我一个更高的职位。'],
        ['I should have been happy, but I hesitated for three days.', '我本该高兴，却犹豫了三天。'],
        ['The new job means more money and much less free time.', '新工作意味着更多钱和少得多的自由时间。'],
        ['If I had no children, I would have said yes at once.', '如果我没有孩子，我会当场答应。'],
        ['In the end I took it, and I am still not sure.', '最后我接了，到现在也不确定。'],
    ], [
        ['他犹豫了多久？', ['三天', '一周', '一天', '没犹豫']],
        ['他犹豫的原因是？', ['自由时间会少很多', '钱不够多', '不喜欢新岗位', '要搬家']],
        ['最后的结果是？', ['接了但仍不确定', '拒绝了', '还在考虑', '辞职了']],
    ]),
    (0, builder_1.p)(3, 'p3_rejected', '面试被拒', [
        ['I had prepared for that interview for two weeks.', '那场面试我准备了两周。'],
        ['The email came on a Friday afternoon.', '邮件是周五下午来的。'],
        ['It said they had chosen someone with more experience.', '上面说他们选了经验更丰富的人。'],
        ['I was disappointed, but I asked them for advice.', '我很失望，但我向他们请教了建议。'],
        ['What they told me helped me get my next job.', '他们说的话帮我拿到了下一份工作。'],
    ], [
        ['他准备了多久？', ['两周', '一周', '三天', '一个月']],
        ['被拒的理由是什么？', ['他们选了经验更丰富的人', '他迟到了', '薪水谈不拢', '岗位取消了']],
        ['他做了什么不一样的事？', ['向对方请教建议', '再申请一次', '投诉', '什么都没做']],
    ]),
    (0, builder_1.p)(3, 'p3_quit', '辞职', [
        ['She had worked there for eight years before she left.', '她在那里工作了八年才离开。'],
        ['Everybody thought she would stay until she retired.', '所有人都以为她会做到退休。'],
        ['She said the work had stopped teaching her anything.', '她说那份工作已经教不了她任何东西了。'],
        ['Her friends did not understand her decision at all.', '她的朋友完全不理解她的决定。'],
        ['A year later, she looks younger than before.', '一年后，她看起来比以前年轻。'],
    ], [
        ['她在那里工作了多久？', ['八年', '五年', '十年', '三年']],
        ['她离开的原因是？', ['工作教不了她东西了', '薪水太低', '和同事不合', '身体不好']],
        ['一年后她怎么样？', ['看起来比以前年轻', '后悔了', '找不到工作', '又回去了']],
    ]),
    (0, builder_1.p)(3, 'p3_remote', '远程办公', [
        ['I have been working from home since last year.', '从去年起我一直在家办公。'],
        ['At first it seemed perfect: no traffic, no noise.', '起初似乎完美：不堵车、不吵。'],
        ['But my kitchen table has become my office.', '但我的餐桌变成了办公室。'],
        ['I often find myself answering emails at eleven at night.', '我常发现自己晚上十一点还在回邮件。'],
        ['The line between work and life has almost disappeared.', '工作和生活的界线几乎消失了。'],
    ], [
        ['他从什么时候开始在家办公？', ['去年', '今年', '两年前', '疫情时']],
        ['起初他觉得好在哪里？', ['不堵车不吵', '省钱', '时间自由', '离家人近']],
        ['现在的问题是什么？', ['工作和生活界线消失', '效率低', '太孤独', '网络不好']],
    ]),
    (0, builder_1.p)(3, 'p3_colleague_left', '同事离职', [
        ['The person who taught me everything left last month.', '教会我一切的那个人上个月走了。'],
        ['I had never told her how much she had helped me.', '我从没告诉过她她帮了我多少。'],
        ['On her last day I finally said it.', '她最后一天我终于说了。'],
        ['She smiled and said she had always known.', '她笑着说她一直都知道。'],
        ['I wish I had said it much earlier.', '我真希望我早点说。'],
    ], [
        ['他一直没说什么？', ['她帮了他多少', '自己要辞职', '不喜欢她', '要送她礼物']],
        ['她的回应是？', ['她一直都知道', '很惊讶', '很感动', '没说话']],
        ['他现在的感受是？', ['后悔没早点说', '轻松了', '很难过', '无所谓']],
    ]),
    // ---------- 习惯与自我 ----------
    (0, builder_1.p)(3, 'p3_habit', '早起这件事', [
        ['I used to sleep until noon on weekends.', '我以前周末总睡到中午。'],
        ['Last year I decided to change this habit.', '去年我决定改掉这个习惯。'],
        ['At first, getting up at six was really hard for me.', '一开始，六点起床对我来说真的很难。'],
        ['I have been doing it for almost a year now.', '现在我已经坚持快一年了。'],
        ['It is worth trying, because my mornings feel much longer.', '这值得一试，因为我的早晨感觉长多了。'],
    ], [
        ['他以前周末睡到几点？', ['中午', '早上八点', '下午', '十点']],
        ['他坚持早起多久了？', ['快一年', '几个月', '两年', '一周']],
        ['他觉得早起的好处是什么？', ['早晨感觉更长', '身体更好', '工作更快', '省钱']],
    ]),
    (0, builder_1.p)(3, 'p3_diet', '戒糖', [
        ['My doctor told me to eat less sugar.', '医生让我少吃糖。'],
        ['I had never realized how much I was eating.', '我从没意识到自己吃了那么多。'],
        ['Even the bread I bought every day was full of it.', '连我每天买的面包里都是糖。'],
        ['The first two weeks were terrible.', '头两周很难受。'],
        ['Now fruit tastes sweeter than it ever did.', '现在水果尝起来比以前甜多了。'],
    ], [
        ['他发现了什么？', ['连面包里都是糖', '糖很贵', '医生说错了', '水果也有糖']],
        ['头两周怎么样？', ['很难受', '很轻松', '没感觉', '瘦了很多']],
        ['现在的变化是？', ['水果尝起来更甜', '不想吃东西', '睡得更好', '瘦了']],
    ]),
    (0, builder_1.p)(3, 'p3_sleep', '失眠', [
        ['I have not slept well for the past month.', '过去一个月我一直睡不好。'],
        ['I lie in bed and my mind keeps working.', '我躺在床上，脑子停不下来。'],
        ['A friend told me to leave my phone in another room.', '一个朋友让我把手机放到别的房间。'],
        ['I laughed at first, but I tried it anyway.', '我起初笑了，但还是试了。'],
        ['That night I slept for eight hours.', '那晚我睡了八小时。'],
    ], [
        ['他多久睡不好了？', ['过去一个月', '一周', '半年', '几天']],
        ['朋友的建议是？', ['把手机放别的房间', '喝牛奶', '运动', '看医生']],
        ['结果如何？', ['那晚睡了八小时', '没效果', '更糟了', '第二天才好']],
    ]),
    (0, builder_1.p)(3, 'p3_stress', '压力', [
        ['There have been too many things on my list lately.', '最近我的清单上事情太多了。'],
        ['I cannot help checking my phone every ten minutes.', '我忍不住每十分钟看一次手机。'],
        ['My wife asked me to walk with her after dinner.', '妻子让我晚饭后和她散步。'],
        ['We do not talk about work during those walks.', '散步时我们不聊工作。'],
        ['Those thirty minutes have become the best part of my day.', '那三十分钟成了我一天中最好的时光。'],
    ], [
        ['他的习惯问题是什么？', ['每十分钟看手机', '熬夜', '不吃饭', '抽烟']],
        ['散步时他们不聊什么？', ['工作', '孩子', '钱', '家人']],
        ['他怎么评价那三十分钟？', ['一天中最好的时光', '浪费时间', '太短', '很累']],
    ]),
    (0, builder_1.p)(3, 'p3_english', '学英语的挫折', [
        ['I have studied English since I was ten.', '我十岁起就学英语。'],
        ['I can read a newspaper without any problem.', '我读报纸完全没问题。'],
        ['But when someone speaks to me, my mind goes blank.', '但别人跟我说话时，我脑子一片空白。'],
        ['I have always translated everything in my head first.', '我一直都在脑子里先翻译。'],
        ['If I had listened more and read less, things might be different.', '如果我当初多听少读，情况可能不一样。'],
    ], [
        ['他的强项是什么？', ['读报纸没问题', '口语', '听力', '写作']],
        ['他的问题是什么？', ['别人说话时脑子空白', '词汇量小', '语法差', '发音不准']],
        ['他觉得原因是？', ['一直在脑子里先翻译', '学得太晚', '不够努力', '没有环境']],
    ]),
    (0, builder_1.p)(3, 'p3_phone_addict', '手机依赖', [
        ['My phone tells me how long I use it every week.', '我的手机每周告诉我用了多久。'],
        ['Last week the number was over forty hours.', '上周这个数字超过四十小时。'],
        ['That is almost a full working week.', '那几乎是一个完整的工作周。'],
        ['I have tried to put it away, but my hand finds it by itself.', '我试过把它收起来，但我的手会自己找到它。'],
        ['If I had those hours back, I could learn a language.', '如果那些时间能还给我，我能学会一门语言。'],
    ], [
        ['上周他用了多久手机？', ['超过四十小时', '二十小时', '三十小时', '六十小时']],
        ['他试过什么办法？', ['把手机收起来', '删掉应用', '关机', '换旧手机']],
        ['他的感慨是？', ['那些时间够学一门语言', '要少用手机', '手机很有用', '控制不住']],
    ]),
    // ---------- 人际 ----------
    (0, builder_1.p)(3, 'p3_fight', '和朋友吵架', [
        ['We had not spoken to each other for six months.', '我们有六个月没说过话。'],
        ['The argument had started over something very small.', '争吵起因非常小。'],
        ['Neither of us could remember who said it first.', '我们谁都想不起是谁先说的。'],
        ['Last week I sent him a photo from our school days.', '上周我给他发了一张学生时代的照片。'],
        ['He called me one minute later.', '一分钟后他就打来了电话。'],
    ], [
        ['他们多久没说话？', ['六个月', '三个月', '一年', '两个月']],
        ['争吵的起因是？', ['非常小的事', '钱', '工作', '误会']],
        ['是什么打破了僵局？', ['一张学生时代的照片', '一句道歉', '朋友劝和', '偶然遇见']],
    ]),
    (0, builder_1.p)(3, 'p3_comfort', '安慰朋友', [
        ['My friend lost her job two weeks ago.', '我朋友两周前失业了。'],
        ['I did not know what I should say to her.', '我不知道该对她说什么。'],
        ['So I just sat with her and made tea.', '所以我只是陪她坐着、泡茶。'],
        ['She talked for two hours and I listened.', '她说了两个小时，我听着。'],
        ['Later she told me that was exactly what she had needed.', '后来她告诉我那正是她需要的。'],
    ], [
        ['他做了什么？', ['陪她坐着泡茶听她说', '给她建议', '帮她找工作', '借钱给她']],
        ['她说了多久？', ['两个小时', '一小时', '一下午', '几分钟']],
        ['她后来的评价是？', ['那正是她需要的', '希望得到建议', '觉得没用', '很感动']],
    ]),
    (0, builder_1.p)(3, 'p3_miss_home', '想念家乡', [
        ['I have lived in this city for ten years.', '我在这座城市住了十年。'],
        ['Everything I need is here, and yet something is missing.', '我需要的一切都在这里，可总缺点什么。'],
        ['Last month I went back to my hometown for three days.', '上个月我回老家待了三天。'],
        ['The streets had changed, but the smell of the air had not.', '街道变了，但空气的味道没变。'],
        ['I cried in the taxi, and I could not explain why.', '我在出租车里哭了，说不清为什么。'],
    ], [
        ['他在这座城市住了多久？', ['十年', '五年', '二十年', '三年']],
        ['老家什么没变？', ['空气的味道', '街道', '老房子', '邻居']],
        ['他在出租车里怎么了？', ['哭了但说不清为什么', '睡着了', '很开心', '打电话']],
    ]),
    (0, builder_1.p)(3, 'p3_parents', '父母老了', [
        ['My father has always been the strongest man I knew.', '父亲一直是我认识的最强壮的人。'],
        ['Last month I saw him stop to rest on the stairs.', '上个月我看见他在楼梯上停下来休息。'],
        ['He said nothing, and neither did I.', '他什么也没说，我也是。'],
        ['That evening I booked a check-up for him at the hospital.', '那天晚上我给他约了医院检查。'],
        ['Some things cannot be talked about, only done.', '有些事没法说，只能做。'],
    ], [
        ['他看到父亲怎么了？', ['在楼梯上停下休息', '摔倒了', '生病了', '瘦了']],
        ['当时父子俩的反应？', ['都什么也没说', '聊了很久', '争执起来', '父亲解释了']],
        ['他做了什么？', ['给父亲约了医院检查', '搬回家住', '请了护工', '劝父亲锻炼']],
    ]),
    (0, builder_1.p)(3, 'p3_child', '孩子长大', [
        ['My daughter used to hold my hand everywhere.', '我女儿以前去哪都牵着我的手。'],
        ['Now she walks three steps in front of me.', '现在她走在我前面三步。'],
        ['She would rather talk to her friends than to us.', '她宁愿跟朋友说话也不跟我们说。'],
        ['I know this is normal and it should make me glad.', '我知道这很正常，也该为此高兴。'],
        ['Still, I miss those small fingers.', '可我还是想念那双小手指。'],
    ], [
        ['女儿现在怎么走路？', ['走在他前面三步', '还是牵着手', '不肯出门', '跟朋友走']],
        ['他知道这意味着什么？', ['这很正常，该高兴', '她变坏了', '她讨厌他', '要管管她']],
    ]),
    (0, builder_1.p)(3, 'p3_pet_duty', '养宠物的责任', [
        ['My son had asked for a dog for two years.', '我儿子要了两年的狗。'],
        ['He promised he would walk it every single day.', '他保证会每天遛它。'],
        ['We have had the dog for six months now.', '狗养到现在六个月了。'],
        ['Guess who walks it in the rain at seven in the morning.', '猜猜早上七点下雨天是谁在遛它。'],
        ['I do not mind as much as I thought I would.', '我并不像自己以为的那么介意。'],
    ], [
        ['儿子保证了什么？', ['每天遛狗', '自己喂', '不影响学习', '不哭闹']],
        ['实际是谁在遛狗？', ['说话人自己', '儿子', '妻子', '轮流']],
        ['他的态度是？', ['没自己以为的那么介意', '很生气', '很后悔', '要把狗送走']],
    ]),
    // ---------- 旅行意外 ----------
    (0, builder_1.p)(3, 'p3_travel', '错过的火车', [
        ['I had planned to take the early train to the city.', '我本来计划坐早班火车进城。'],
        ['But I woke up late because my phone did not ring.', '但是我睡过头了，因为我手机没响。'],
        ['By the time I reached the station, the train had already left.', '等我到车站的时候，火车已经开走了。'],
        ['I had to wait two hours for the next one.', '我不得不等两个小时坐下一班。'],
        ['If I had gone to bed earlier, I would not have missed it.', '如果我早点睡，就不会错过了。'],
    ], [
        ['他为什么睡过头？', ['手机没响', '太累了', '忘了定闹钟', '停电了']],
        ['他到车站时发生了什么？', ['火车已经开走了', '火车晚点了', '车站关门了', '票卖完了']],
        ['他后悔什么？', ['没有早点睡', '没有打车', '没有买票', '没有带手机']],
    ]),
    (0, builder_1.p)(3, 'p3_flight_cancel', '航班取消', [
        ['Our flight was cancelled because of the storm.', '我们的航班因为风暴取消了。'],
        ['Hundreds of people were waiting in one long line.', '几百人排在一条长队里。'],
        ['A woman behind me was crying on the phone.', '我后面一个女人在电话里哭。'],
        ['She had been trying to get home for her father.', '她一直想赶回家看她父亲。'],
        ['The man at the desk gave her the last seat.', '柜台的人把最后一个座位给了她。'],
    ], [
        ['航班为什么取消？', ['风暴', '机械故障', '罢工', '雾']],
        ['那个女人为什么哭？', ['一直想赶回家看父亲', '丢了行李', '钱不够', '错过了会议']],
        ['结果如何？', ['柜台把最后一个座位给了她', '她没走成', '她改签了', '大家帮她']],
    ]),
    (0, builder_1.p)(3, 'p3_luggage', '行李丢了', [
        ['My bag did not come out at the airport.', '我的行李在机场没出来。'],
        ['I waited until the belt stopped moving.', '我一直等到传送带停下。'],
        ['Everything I needed for the meeting was inside it.', '开会要用的东西全在里面。'],
        ['I bought a shirt at the airport shop that night.', '那晚我在机场商店买了件衬衫。'],
        ['The bag arrived two days later, after the meeting had ended.', '行李两天后才到，会议已经结束了。'],
    ], [
        ['行李里有什么？', ['开会要用的东西', '衣服和礼物', '电脑', '证件']],
        ['他当晚怎么办的？', ['在机场买了件衬衫', '借了衣服', '推迟会议', '穿旧的']],
        ['行李什么时候到的？', ['两天后，会议已结束', '第二天', '当晚', '一周后']],
    ]),
    (0, builder_1.p)(3, 'p3_lost_city', '在陌生城市迷路', [
        ['My phone had no signal in that old part of town.', '在那片老城区我手机没信号。'],
        ['I had been walking in circles for half an hour.', '我已经绕了半小时的圈。'],
        ['An old woman saw me and pointed at a street.', '一位老太太看见我，指了一条街。'],
        ['We could not understand each other at all.', '我们完全听不懂对方说话。'],
        ['She walked with me for ten minutes until I found my hotel.', '她陪我走了十分钟，直到我找到酒店。'],
    ], [
        ['他遇到什么问题？', ['手机没信号，绕圈半小时', '钱包丢了', '天黑了', '下雨了']],
        ['他和老太太能沟通吗？', ['完全听不懂对方', '能简单交流', '用手机翻译', '她会英语']],
        ['老太太做了什么？', ['陪他走了十分钟到酒店', '画了地图', '叫了车', '找人帮忙']],
    ]),
    (0, builder_1.p)(3, 'p3_language', '语言不通', [
        ['I had learned some words before the trip.', '旅行前我学了一些词。'],
        ['But nobody speaks as slowly as the app does.', '但没人像应用里说得那么慢。'],
        ['In the restaurant I just pointed at another table.', '在餐厅我只好指了指别人的桌子。'],
        ['The waiter laughed and brought me the same dish.', '服务员笑了，给我上了同样的菜。'],
        ['It turned out to be the best meal of the week.', '那竟成了那周最好吃的一顿。'],
    ], [
        ['他发现的问题是？', ['没人像应用里说得那么慢', '词学少了', '口音太重', '语法不对']],
        ['他在餐厅怎么点的餐？', ['指别人的桌子', '用翻译软件', '看图片', '让服务员推荐']],
        ['结果如何？', ['成了那周最好吃的一顿', '上错了菜', '很难吃', '很贵']],
    ]),
    (0, builder_1.p)(3, 'p3_dialog_help', '对话：搬家', [
        ['I heard you are moving to a new place next month.', '我听说你下个月要搬到新地方。'],
        ['Yes, I have been looking for a bigger flat for half a year.', '是的，我找更大的公寓已经找了半年了。'],
        ['Do you need any help with moving your things?', '搬东西需要帮忙吗？'],
        ['That would be great. I have more books than I thought.', '那太好了。我的书比我想的还多。'],
        ['Let me know the date, and I will come with my car.', '告诉我日期，我开车过来。'],
    ], [
        ['他找新公寓找了多久？', ['半年', '一个月', '两年', '一周']],
        ['他搬家时的主要困难是什么？', ['书太多', '没有车', '东西太重', '时间不够']],
        ['对方打算怎么帮忙？', ['开车来帮忙', '找人来帮忙', '给他钱', '帮他打包']],
    ]),
    // ---------- 消费与金钱 ----------
    (0, builder_1.p)(3, 'p3_save', '存钱买房', [
        ['We have been saving money for six years.', '我们已经存了六年钱。'],
        ['Every month a part of my pay goes straight to the bank.', '每个月一部分工资直接进银行。'],
        ['We have not taken a real holiday since we started.', '开始存钱后我们没休过一次真正的假。'],
        ['Sometimes I wonder whether it is worth it.', '有时我想这值不值。'],
        ['Then I look at my son and I keep going.', '然后我看看儿子，就继续下去。'],
    ], [
        ['他们存了多久？', ['六年', '三年', '十年', '两年']],
        ['为了存钱他们放弃了什么？', ['没休过真正的假', '换车', '孩子的兴趣班', '看病']],
        ['是什么让他坚持？', ['看看儿子', '妻子的鼓励', '房价上涨', '习惯了']],
    ]),
    (0, builder_1.p)(3, 'p3_car', '二手车', [
        ['The car had been used for five years before I bought it.', '我买之前那车已经开了五年。'],
        ['The seller told me everything was perfect.', '卖家告诉我一切完美。'],
        ['Two weeks later a strange sound came from the engine.', '两周后发动机传来奇怪的声音。'],
        ['The repair cost me almost half of the price of the car.', '修车花了我几乎半个车价。'],
        ['I should have asked a friend who knows cars to come with me.', '我本该叫个懂车的朋友一起去。'],
    ], [
        ['车买之前开了几年？', ['五年', '三年', '两年', '八年']],
        ['修车花了多少？', ['几乎半个车价', '一点点', '比车还贵', '保修免费']],
        ['他觉得自己错在哪？', ['没叫懂车的朋友同去', '买得太急', '没试车', '没砍价']],
    ]),
    (0, builder_1.p)(3, 'p3_complain', '餐厅投诉', [
        ['The soup was brought to our table cold.', '汤端上来是凉的。'],
        ['My friend wanted to say nothing and just leave.', '我朋友想什么都不说直接走。'],
        ['I called the waiter and told him quietly.', '我叫来服务员，低声告诉他。'],
        ['He changed it at once and did not charge us for it.', '他立刻换了，而且没收我们的钱。'],
        ['Saying something politely is often better than saying nothing.', '礼貌地说出来，常常比什么都不说好。'],
    ], [
        ['汤有什么问题？', ['是凉的', '太咸', '有头发', '上错了']],
        ['朋友想怎么做？', ['什么都不说直接走', '大声投诉', '要求退钱', '再点一份']],
        ['结果如何？', ['立刻换了且没收钱', '被拒绝了', '等了很久', '打了折']],
    ]),
    (0, builder_1.p)(3, 'p3_shop_regret', '冲动消费', [
        ['I had wanted that machine for months.', '那台机器我想要好几个月了。'],
        ['When it was finally cheaper, I bought it in one minute.', '它终于便宜了，我一分钟就买了。'],
        ['It has been standing in the corner since then.', '从那以后它就一直立在墙角。'],
        ['I have used it exactly twice.', '我总共用过两次。'],
        ['Now I wait a week before I buy anything I want.', '现在我想买什么会先等一周。'],
    ], [
        ['他用过几次？', ['两次', '一次', '很多次', '一次都没用']],
        ['他现在的做法是？', ['想买什么先等一周', '不再网购', '记账', '把东西卖掉']],
    ]),
    // ---------- 生活与社会 ----------
    (0, builder_1.p)(3, 'p3_volunteer', '做志愿者', [
        ['I had never thought I would spend my Saturday like this.', '我从没想过会这样度过周六。'],
        ['We were painting the walls of an old school.', '我们在给一所旧学校刷墙。'],
        ['By noon my arms could hardly move.', '到中午我胳膊几乎抬不起来。'],
        ['The children brought us water and drew pictures for us.', '孩子们给我们送水，还给我们画画。'],
        ['I have gone back every month since then.', '从那以后我每个月都回去。'],
    ], [
        ['他们在做什么？', ['给旧学校刷墙', '教孩子读书', '打扫公园', '送物资']],
        ['孩子们做了什么？', ['送水并画画给他们', '一起刷墙', '在旁边看', '唱歌']],
        ['之后他怎么做的？', ['每个月都回去', '再没去过', '带朋友去', '捐了钱']],
    ]),
    (0, builder_1.p)(3, 'p3_garbage', '垃圾分类', [
        ['Our building started sorting garbage last spring.', '去年春天我们楼开始垃圾分类。'],
        ['At first everyone complained about the extra work.', '起初大家都抱怨多出来的麻烦。'],
        ['An old man stood by the bins every evening to help.', '一位老人每天傍晚站在垃圾桶边帮忙。'],
        ['Nobody had asked him to do it.', '没人要求他这么做。'],
        ['Six months later, the complaints have stopped.', '六个月后，抱怨声消失了。'],
    ], [
        ['起初大家的反应是？', ['抱怨麻烦', '很支持', '不理会', '搬走了']],
        ['老人为什么这么做？', ['没人要求，他自愿的', '被安排的', '有报酬', '是管理员']],
        ['六个月后怎么样？', ['抱怨声消失了', '大家还是抱怨', '制度取消了', '老人走了']],
    ]),
    (0, builder_1.p)(3, 'p3_news', '假消息', [
        ['A message about our city was sent to everyone yesterday.', '昨天一条关于我们城市的消息发给了所有人。'],
        ['My mother called me and she was really afraid.', '我妈打电话给我，她真的很害怕。'],
        ['I searched for it and found nothing on any real news site.', '我查了，正规新闻网站上什么都没有。'],
        ['By the evening, the message had been proved false.', '到晚上，那条消息被证明是假的。'],
        ['But by then half the city had already believed it.', '但那时半个城市已经信了。'],
    ], [
        ['妈妈的反应是？', ['真的很害怕', '不相信', '转发了', '打电话确认']],
        ['他做了什么？', ['去正规新闻网站查', '直接相信', '转发提醒', '报警']],
        ['最后的问题是什么？', ['半个城市已经信了', '没人在意', '发布者被抓', '消息是真的']],
    ]),
    (0, builder_1.p)(3, 'p3_social', '社交媒体', [
        ['Her life looks perfect in every photo.', '她每张照片里的生活都很完美。'],
        ['We had lunch together last week for the first time in years.', '上周我们多年来第一次一起吃午饭。'],
        ['She told me she had been feeling lonely for a long time.', '她告诉我她孤独很久了。'],
        ['I would never have guessed it from her pictures.', '从她的照片我绝对猜不到。'],
        ['We only show the part we want to be seen.', '我们只展示想被看见的那一面。'],
    ], [
        ['她的照片给人什么印象？', ['生活很完美', '很普通', '很忙', '不常发']],
        ['她实际的状态是？', ['孤独很久了', '很快乐', '很忙', '生病了']],
        ['说话人的结论是？', ['人只展示想被看见的一面', '照片会骗人', '不该用社交媒体', '她在演戏']],
    ]),
    (0, builder_1.p)(3, 'p3_cake', '烤蛋糕失败', [
        ['I had followed every step in the book.', '我照着书上每一步做的。'],
        ['The cake came out as flat as a plate.', '蛋糕烤出来像盘子一样平。'],
        ['My daughter said it looked like a big cookie.', '我女儿说它像块大饼干。'],
        ['We ate the whole thing with ice cream anyway.', '我们还是配着冰淇淋把它吃完了。'],
        ['She has asked me to make that big cookie again.', '她已经让我再做一次那块大饼干了。'],
    ], [
        ['蛋糕怎么了？', ['扁得像盘子', '烤糊了', '没熟', '太甜']],
        ['女儿说它像什么？', ['一块大饼干', '一张纸', '面包', '石头']],
        ['后来女儿要求什么？', ['再做一次那块大饼干', '别再做了', '买现成的', '教她做']],
    ]),
    (0, builder_1.p)(3, 'p3_repair', '修东西', [
        ['The chair had been broken for three months.', '那把椅子坏了三个月。'],
        ['Every time I walked past it, I told myself I would fix it.', '每次路过我都告诉自己会修。'],
        ['Last Sunday it took me exactly eleven minutes.', '上周日我用了整整十一分钟修好。'],
        ['I had spent three months avoiding an eleven-minute job.', '我花了三个月躲一件十一分钟的活。'],
        ['I wonder what else on my list is like that chair.', '我在想清单上还有多少事像那把椅子。'],
    ], [
        ['椅子坏了多久？', ['三个月', '一年', '一个月', '一周']],
        ['修好用了多久？', ['十一分钟', '一小时', '一下午', '两天']],
        ['他的感悟是？', ['花三个月躲一件十一分钟的活', '要请人修', '椅子该扔了', '自己很懒']],
    ]),
    (0, builder_1.p)(3, 'p3_year', '回顾这一年', [
        ['I looked at the notes I had written last January.', '我看了看去年一月写的笔记。'],
        ['I had promised myself five big things.', '我给自己许了五件大事。'],
        ['Only one of them has been finished.', '只完成了一件。'],
        ['But three things I had never planned turned out to matter more.', '但三件我从没计划过的事反而更重要。'],
        ['Perhaps a year is not a line but a road with turns.', '也许一年不是一条直线，而是有拐弯的路。'],
    ], [
        ['他许了几件大事？', ['五件', '三件', '十件', '一件']],
        ['完成了几件？', ['一件', '三件', '五件都完成了', '一件都没有']],
        ['他的结论是？', ['一年不是直线而是有拐弯的路', '计划没用', '自己太懒', '明年要努力']],
    ]),
    (0, builder_1.p)(3, 'p3_neighbor_fight', '邻里纠纷', [
        ['The family upstairs had been fighting almost every night.', '楼上那家几乎每晚都在吵。'],
        ['We could hear doors and voices through the floor.', '我们隔着楼板能听见摔门和喊声。'],
        ['My wife wanted to call someone, but I said we should wait.', '我妻子想报警，但我说再等等。'],
        ['One morning we met the woman in the lift, and she looked away.', '一天早上我们在电梯里遇见那位太太，她别过脸去。'],
        ['I still do not know whether waiting was right.', '我到现在也不知道等待是不是对的。'],
    ], [
        ['楼上发生了什么？', ['几乎每晚吵架', '装修', '开派对', '养狗']],
        ['妻子想怎么做？', ['报警', '上去劝', '搬走', '写纸条']],
        ['他现在的想法是？', ['不知道等待是否正确', '当初该报警', '不关自己的事', '后悔搬来']],
    ]),
    (0, builder_1.p)(3, 'p3_old_friend', '老朋友', [
        ['We had not met for fifteen years.', '我们十五年没见了。'],
        ['I was afraid we would have nothing to say.', '我担心我们会无话可说。'],
        ['The first five minutes were indeed difficult.', '头五分钟确实很尴尬。'],
        ['Then he mentioned our old teacher, and everything came back.', '然后他提起我们的老师，一切都回来了。'],
        ['We talked until the restaurant closed.', '我们聊到餐厅打烊。'],
    ], [
        ['他们多久没见了？', ['十五年', '十年', '五年', '二十年']],
        ['他事先担心什么？', ['会无话可说', '认不出对方', '对方变了', '尴尬']],
        ['是什么打开了话匣子？', ['提起老师', '看老照片', '喝了酒', '聊工作']],
    ]),
    (0, builder_1.p)(3, 'p3_retire', '退休计划', [
        ['My uncle has been counting the days to his retirement.', '我叔叔一直在数退休的日子。'],
        ['He has planned to travel around the country by car.', '他计划开车环游全国。'],
        ['Last week the day finally came.', '上周那天终于到了。'],
        ['He got up at six on Monday out of habit.', '周一他习惯性六点就起了。'],
        ['Then he sat in the kitchen, not knowing what to do.', '然后他坐在厨房里，不知道该做什么。'],
    ], [
        ['他的退休计划是？', ['开车环游全国', '带孙子', '钓鱼', '回老家']],
        ['退休第一个周一他怎么样？', ['习惯性六点起然后不知所措', '睡到中午', '立刻出发', '很开心']],
    ]),
    (0, builder_1.p)(3, 'p3_gift_wrong', '送错礼物', [
        ['I had spent a week choosing a present for her.', '我花了一周给她挑礼物。'],
        ['When she opened it, she said it was lovely.', '她打开时说很可爱。'],
        ['But I saw her face for half a second before she smiled.', '但在她微笑前，我看到了她半秒的表情。'],
        ['The gift has never appeared in her house since.', '从那以后那礼物再没在她家出现过。'],
        ['Next time I will simply ask her what she wants.', '下次我会直接问她想要什么。'],
    ], [
        ['他挑礼物花了多久？', ['一周', '一天', '一个月', '几分钟']],
        ['他从哪里看出问题？', ['她微笑前半秒的表情', '她说的话', '她退了礼物', '朋友告诉他']],
        ['他的打算是？', ['下次直接问她想要什么', '不再送礼', '送贵的', '送同样的']],
    ]),
    (0, builder_1.p)(3, 'p3_promise', '答应帮忙', [
        ['I had said yes before I looked at my week.', '我还没看这周的安排就答应了。'],
        ['By Wednesday I had three things I could not finish.', '到周三我有三件事完不成。'],
        ['I had to call him and take back my word.', '我不得不打电话给他，收回承诺。'],
        ['He was kind about it, which made it worse.', '他很体谅，这反而让我更难受。'],
        ['Now I always check my week before I answer.', '现在我回答前一定先看这周的安排。'],
    ], [
        ['他犯的错是什么？', ['没看安排就答应', '忘了这件事', '答应了两个人', '做错了事']],
        ['对方的反应是？', ['很体谅', '很生气', '不理他', '找了别人']],
        ['他现在怎么做？', ['回答前先看这周安排', '不再答应任何人', '直接拒绝', '硬着头皮做']],
    ]),
    (0, builder_1.p)(3, 'p3_apology', '迟到的道歉', [
        ['I had been wrong, and I had known it for years.', '我错了，而且我知道很多年了。'],
        ['Every time I picked up the phone, I put it down again.', '每次拿起电话，我又放下。'],
        ['Last month I wrote him a letter instead.', '上个月我改成给他写了封信。'],
        ['He answered with only four words: I had forgotten it.', '他只回了四个词：我早忘了。'],
        ['I read those words twenty times.', '那几个字我读了二十遍。'],
    ], [
        ['他知道自己错了多久？', ['很多年', '几个月', '几天', '刚知道']],
        ['他最后用什么方式道歉？', ['写信', '打电话', '当面', '发消息']],
        ['对方回了什么？', ['我早忘了', '不原谅', '没回', '骂了他']],
    ]),
    (0, builder_1.p)(3, 'p3_new_city', '搬到新城市', [
        ['I have been in this city for three months.', '我到这座城市三个月了。'],
        ['I can find the supermarket and the subway without a map.', '我不用地图就能找到超市和地铁。'],
        ['But I still do not know anyone well enough to call at night.', '但我还没有一个熟到能半夜打电话的人。'],
        ['Yesterday a woman in the lift asked about my plant.', '昨天电梯里一位女士问起我的植物。'],
        ['We talked for two floors, and it made my whole day.', '我们聊了两层楼的时间，我一整天都很好。'],
    ], [
        ['他来这座城市多久了？', ['三个月', '一年', '一个月', '半年']],
        ['他还缺什么？', ['熟到能半夜打电话的人', '工作', '房子', '钱']],
        ['电梯里发生了什么？', ['有人问起他的植物，聊了两层楼', '没人说话', '遇到同事', '有人帮他']],
    ]),
    (0, builder_1.p)(3, 'p3_start_over', '重新开始', [
        ['At forty, he went back to school.', '四十岁时，他重新回到学校。'],
        ['His classmates were half his age.', '他的同学只有他一半年纪。'],
        ['For the first month he sat at the back and said nothing.', '头一个月他坐在最后排，一句话不说。'],
        ['A young student asked him to join their group.', '一个年轻学生请他加入他们的小组。'],
        ['He has told me that was the moment he stopped feeling old.', '他告诉我，那一刻他不再觉得自己老了。'],
    ], [
        ['他多大回学校的？', ['四十岁', '三十岁', '五十岁', '三十五岁']],
        ['头一个月他怎么样？', ['坐最后排一句话不说', '很活跃', '想退学', '成绩很好']],
        ['转折点是什么？', ['一个年轻学生请他加入小组', '考试得高分', '老师鼓励', '习惯了']],
    ]),
    (0, builder_1.p)(3, 'p3_umbrella_shared', '共伞', [
        ['The rain had been falling since early morning.', '雨从清早就一直在下。'],
        ['I was standing at the door of the shop, waiting for it to stop.', '我站在店门口等雨停。'],
        ['A stranger opened his umbrella and looked at me.', '一个陌生人撑开伞看着我。'],
        ['We walked together to the corner without saying a word.', '我们一言不发地一起走到街角。'],
        ['He turned left, I turned right, and I never saw him again.', '他向左，我向右，我再也没见过他。'],
    ], [
        ['雨下了多久？', ['从清早一直下', '刚开始下', '下了一夜', '下了几分钟']],
        ['他们一路上说了什么？', ['一言不发', '聊了很多', '互相道谢', '问了名字']],
        ['最后怎么样？', ['各走各的，再没见过', '成了朋友', '交换了电话', '他送他回家']],
    ]),
    (0, builder_1.p)(3, 'p3_late_night_work', '深夜办公室', [
        ["By ten o'clock the whole floor had gone quiet.", '到十点整层楼都安静了。'],
        ["Only my lamp and the cleaner's radio were still on.", '只剩我的台灯和清洁工的收音机还开着。'],
        ['She asked me why young people never go home.', '她问我年轻人为什么从不回家。'],
        ['I did not have a good answer for her.', '我给不出一个像样的回答。'],
        ['I packed my bag and left with her that night.', '那晚我收拾包，和她一起走了。'],
    ], [
        ['十点时办公室还剩什么？', ['他的台灯和清洁工的收音机', '很多人在加班', '只有他一个人', '灯全关了']],
        ['清洁工问了什么？', ['年轻人为什么从不回家', '他在忙什么', '要不要帮忙', '什么时候走']],
        ['他最后怎么做的？', ['收拾包和她一起走', '继续加班', '解释了原因', '在公司睡了']],
    ]),
    (0, builder_1.p)(3, 'p3_bad_habit', '改掉一个毛病', [
        ['I had been late for almost every meeting for years.', '多年来我几乎每个会都迟到。'],
        ['I always thought five minutes did not matter.', '我总觉得五分钟没什么。'],
        ['Then a colleague said she had stopped counting on me.', '后来一位同事说她已经不指望我了。'],
        ['Those words stayed in my head for a whole week.', '那句话在我脑子里待了整整一周。'],
        ['I have not been late since that day.', '从那天起我再没迟到过。'],
    ], [
        ['他的毛病是什么？', ['几乎每个会都迟到', '不回消息', '忘事', '打断别人']],
        ['同事说了什么？', ['她已经不指望他了', '让他改', '很生气', '要报告上级']],
        ['结果如何？', ['从那天起再没迟到', '偶尔还迟到', '和同事吵架', '换了部门']],
    ]),
    (0, builder_1.p)(3, 'p3_first_snow', '第一场雪', [
        ['My friend from the south had never seen snow.', '我南方来的朋友从没见过雪。'],
        ['It started falling while we were having dinner.', '我们吃晚饭时开始下了。'],
        ['She ran out with no coat and stood in the street.', '她没穿外套就跑出去站在街上。'],
        ['People walking past must have thought she was strange.', '路过的人一定觉得她很奇怪。'],
        ['She said it was the quietest sound she had ever heard.', '她说那是她听过最安静的声音。'],
    ], [
        ['朋友来自哪里？', ['南方', '北方', '国外', '山里']],
        ['她跑出去时怎么样？', ['没穿外套', '带了相机', '叫上了大家', '打着伞']],
        ['她怎么形容雪？', ['听过最安静的声音', '很冷', '很美', '像糖']],
    ]),
];

});

__def("shared/data/passages/index", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSAGES = exports.shuffleOptions = void 0;
exports.getUnlockedPassages = getUnlockedPassages;
const phase1_1 = require("./phase1");
const phase2_1 = require("./phase2");
const phase3_1 = require("./phase3");
var builder_1 = require("./builder");
Object.defineProperty(exports, "shuffleOptions", { enumerable: true, get: function () { return builder_1.shuffleOptions; } });
exports.PASSAGES = [...phase1_1.PHASE1, ...phase2_1.PHASE2, ...phase3_1.PHASE3];
/** 取某阶段及之前解锁的所有短文 */
function getUnlockedPassages(phase) {
    return exports.PASSAGES.filter((p) => p.phase <= phase);
}

});

__def("shared/utils/inflect", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRREGULAR_VERBS = void 0;
exports.getIngForm = getIngForm;
exports.getPastForm = getPastForm;
exports.getPresentForm = getPresentForm;
exports.getForms = getForms;
exports.allForms = allForms;
exports.findFormInSentence = findFormInSentence;
/** 不规则动词变形表 */
exports.IRREGULAR_VERBS = {
    be: { present: 'is', ing: 'being', past: 'was', pastParticiple: 'been' },
    go: { present: 'goes', ing: 'going', past: 'went', pastParticiple: 'gone' },
    do: { present: 'does', ing: 'doing', past: 'did', pastParticiple: 'done' },
    have: { present: 'has', ing: 'having', past: 'had', pastParticiple: 'had' },
    say: { present: 'says', ing: 'saying', past: 'said', pastParticiple: 'said' },
    make: { present: 'makes', ing: 'making', past: 'made', pastParticiple: 'made' },
    come: { present: 'comes', ing: 'coming', past: 'came', pastParticiple: 'come' },
    take: { present: 'takes', ing: 'taking', past: 'took', pastParticiple: 'taken' },
    see: { present: 'sees', ing: 'seeing', past: 'saw', pastParticiple: 'seen' },
    get: { present: 'gets', ing: 'getting', past: 'got', pastParticiple: 'gotten' },
    know: { present: 'knows', ing: 'knowing', past: 'knew', pastParticiple: 'known' },
    think: { present: 'thinks', ing: 'thinking', past: 'thought', pastParticiple: 'thought' },
    give: { present: 'gives', ing: 'giving', past: 'gave', pastParticiple: 'given' },
    find: { present: 'finds', ing: 'finding', past: 'found', pastParticiple: 'found' },
    tell: { present: 'tells', ing: 'telling', past: 'told', pastParticiple: 'told' },
    become: { present: 'becomes', ing: 'becoming', past: 'became', pastParticiple: 'become' },
    leave: { present: 'leaves', ing: 'leaving', past: 'left', pastParticiple: 'left' },
    feel: { present: 'feels', ing: 'feeling', past: 'felt', pastParticiple: 'felt' },
    bring: { present: 'brings', ing: 'bringing', past: 'brought', pastParticiple: 'brought' },
    begin: { present: 'begins', ing: 'beginning', past: 'began', pastParticiple: 'begun' },
    keep: { present: 'keeps', ing: 'keeping', past: 'kept', pastParticiple: 'kept' },
    hold: { present: 'holds', ing: 'holding', past: 'held', pastParticiple: 'held' },
    write: { present: 'writes', ing: 'writing', past: 'wrote', pastParticiple: 'written' },
    hear: { present: 'hears', ing: 'hearing', past: 'heard', pastParticiple: 'heard' },
    mean: { present: 'means', ing: 'meaning', past: 'meant', pastParticiple: 'meant' },
    meet: { present: 'meets', ing: 'meeting', past: 'met', pastParticiple: 'met' },
    run: { present: 'runs', ing: 'running', past: 'ran', pastParticiple: 'run' },
    pay: { present: 'pays', ing: 'paying', past: 'paid', pastParticiple: 'paid' },
    sit: { present: 'sits', ing: 'sitting', past: 'sat', pastParticiple: 'sat' },
    speak: { present: 'speaks', ing: 'speaking', past: 'spoke', pastParticiple: 'spoken' },
    read: { present: 'reads', ing: 'reading', past: 'read', pastParticiple: 'read' },
    grow: { present: 'grows', ing: 'growing', past: 'grew', pastParticiple: 'grown' },
    lose: { present: 'loses', ing: 'losing', past: 'lost', pastParticiple: 'lost' },
    fall: { present: 'falls', ing: 'falling', past: 'fell', pastParticiple: 'fallen' },
    send: { present: 'sends', ing: 'sending', past: 'sent', pastParticiple: 'sent' },
    build: { present: 'builds', ing: 'building', past: 'built', pastParticiple: 'built' },
    draw: { present: 'draws', ing: 'drawing', past: 'drew', pastParticiple: 'drawn' },
    break: { present: 'breaks', ing: 'breaking', past: 'broke', pastParticiple: 'broken' },
    spend: { present: 'spends', ing: 'spending', past: 'spent', pastParticiple: 'spent' },
    rise: { present: 'rises', ing: 'rising', past: 'rose', pastParticiple: 'risen' },
    drive: { present: 'drives', ing: 'driving', past: 'drove', pastParticiple: 'driven' },
    buy: { present: 'buys', ing: 'buying', past: 'bought', pastParticiple: 'bought' },
    wear: { present: 'wears', ing: 'wearing', past: 'wore', pastParticiple: 'worn' },
    choose: { present: 'chooses', ing: 'choosing', past: 'chose', pastParticiple: 'chosen' },
    throw: { present: 'throws', ing: 'throwing', past: 'threw', pastParticiple: 'thrown' },
    catch: { present: 'catches', ing: 'catching', past: 'caught', pastParticiple: 'caught' },
    deal: { present: 'deals', ing: 'dealing', past: 'dealt', pastParticiple: 'dealt' },
    win: { present: 'wins', ing: 'winning', past: 'won', pastParticiple: 'won' },
    forget: { present: 'forgets', ing: 'forgetting', past: 'forgot', pastParticiple: 'forgotten' },
    eat: { present: 'eats', ing: 'eating', past: 'ate', pastParticiple: 'eaten' },
    teach: { present: 'teaches', ing: 'teaching', past: 'taught', pastParticiple: 'taught' },
    sleep: { present: 'sleeps', ing: 'sleeping', past: 'slept', pastParticiple: 'slept' },
    drink: { present: 'drinks', ing: 'drinking', past: 'drank', pastParticiple: 'drunk' },
    swim: { present: 'swims', ing: 'swimming', past: 'swam', pastParticiple: 'swum' },
    ring: { present: 'rings', ing: 'ringing', past: 'rang', pastParticiple: 'rung' },
    sink: { present: 'sinks', ing: 'sinking', past: 'sank', pastParticiple: 'sunk' },
    fly: { present: 'flies', ing: 'flying', past: 'flew', pastParticiple: 'flown' },
    dig: { present: 'digs', ing: 'digging', past: 'dug', pastParticiple: 'dug' },
    bite: { present: 'bites', ing: 'biting', past: 'bit', pastParticiple: 'bitten' },
    ride: { present: 'rides', ing: 'riding', past: 'rode', pastParticiple: 'ridden' },
    hide: { present: 'hides', ing: 'hiding', past: 'hid', pastParticiple: 'hidden' },
    shine: { present: 'shines', ing: 'shining', past: 'shone', pastParticiple: 'shone' },
    freeze: { present: 'freezes', ing: 'freezing', past: 'froze', pastParticiple: 'frozen' },
    bear: { present: 'bears', ing: 'bearing', past: 'bore', pastParticiple: 'borne' },
    blow: { present: 'blows', ing: 'blowing', past: 'blew', pastParticiple: 'blown' },
    cry: { present: 'cries', ing: 'crying', past: 'cried', pastParticiple: 'cried' },
    fry: { present: 'fries', ing: 'frying', past: 'fried', pastParticiple: 'fried' },
    stand: { present: 'stands', ing: 'standing', past: 'stood', pastParticiple: 'stood' },
    understand: {
        present: 'understands',
        ing: 'understanding',
        past: 'understood',
        pastParticiple: 'understood',
    },
    lie: { present: 'lies', ing: 'lying', past: 'lay', pastParticiple: 'lain' },
    lay: { present: 'lays', ing: 'laying', past: 'laid', pastParticiple: 'laid' },
    lead: { present: 'leads', ing: 'leading', past: 'led', pastParticiple: 'led' },
    feed: { present: 'feeds', ing: 'feeding', past: 'fed', pastParticiple: 'fed' },
    fight: { present: 'fights', ing: 'fighting', past: 'fought', pastParticiple: 'fought' },
    seek: { present: 'seeks', ing: 'seeking', past: 'sought', pastParticiple: 'sought' },
    sell: { present: 'sells', ing: 'selling', past: 'sold', pastParticiple: 'sold' },
    shake: { present: 'shakes', ing: 'shaking', past: 'shook', pastParticiple: 'shaken' },
    sing: { present: 'sings', ing: 'singing', past: 'sang', pastParticiple: 'sung' },
    wake: { present: 'wakes', ing: 'waking', past: 'woke', pastParticiple: 'woken' },
    wear_out: { present: 'wears', ing: 'wearing', past: 'wore', pastParticiple: 'worn' },
    hurt: { present: 'hurts', ing: 'hurting', past: 'hurt', pastParticiple: 'hurt' },
    cut: { present: 'cuts', ing: 'cutting', past: 'cut', pastParticiple: 'cut' },
    put: { present: 'puts', ing: 'putting', past: 'put', pastParticiple: 'put' },
    let: { present: 'lets', ing: 'letting', past: 'let', pastParticiple: 'let' },
    set: { present: 'sets', ing: 'setting', past: 'set', pastParticiple: 'set' },
    cost: { present: 'costs', ing: 'costing', past: 'cost', pastParticiple: 'cost' },
    hit: { present: 'hits', ing: 'hitting', past: 'hit', pastParticiple: 'hit' },
    shut: { present: 'shuts', ing: 'shutting', past: 'shut', pastParticiple: 'shut' },
    spread: { present: 'spreads', ing: 'spreading', past: 'spread', pastParticiple: 'spread' },
    quit: { present: 'quits', ing: 'quitting', past: 'quit', pastParticiple: 'quit' },
};
const VOWELS = 'aeiou';
/** 判断是否 辅音-元音-辅音 结尾（需要双写末尾字母） */
function isCVC(w) {
    if (w.length < 3)
        return false;
    const [a, b, c] = [w[w.length - 3], w[w.length - 2], w[w.length - 1]];
    // w/x/y 结尾不双写
    if ('wxy'.includes(c))
        return false;
    return !VOWELS.includes(a) && VOWELS.includes(b) && !VOWELS.includes(c);
}
/** 现在分词 */
function getIngForm(w) {
    var _a;
    if (w.endsWith('ie'))
        return w.slice(0, -2) + 'ying'; // die → dying
    if (w.endsWith('e') && !VOWELS.includes((_a = w[w.length - 2]) !== null && _a !== void 0 ? _a : ''))
        return w.slice(0, -1) + 'ing';
    if (isCVC(w))
        return w + w[w.length - 1] + 'ing';
    return w + 'ing';
}
/** 过去式 */
function getPastForm(w) {
    var _a;
    if (w.endsWith('e'))
        return w + 'd';
    if (w.endsWith('y') && !VOWELS.includes((_a = w[w.length - 2]) !== null && _a !== void 0 ? _a : ''))
        return w.slice(0, -1) + 'ied';
    if (isCVC(w))
        return w + w[w.length - 1] + 'ed';
    return w + 'ed';
}
/** 第三人称单数 */
function getPresentForm(w) {
    var _a;
    if (/(s|x|o|ch|sh|z)$/.test(w))
        return w + 'es';
    if (w.endsWith('y') && !VOWELS.includes((_a = w[w.length - 2]) !== null && _a !== void 0 ? _a : ''))
        return w.slice(0, -1) + 'ies';
    return w + 's';
}
/** 生成完整变形表；非动词返回 null */
function getForms(en, pos) {
    if (!pos.toLowerCase().startsWith('v'))
        return null;
    const key = en.toLowerCase();
    const irr = exports.IRREGULAR_VERBS[key];
    if (irr) {
        return { infinitive: en, ...irr };
    }
    return {
        infinitive: en,
        present: getPresentForm(en),
        ing: getIngForm(en),
        past: getPastForm(en),
        pastParticiple: getPastForm(en),
    };
}
/** 列出一个词所有可能的形态（含名词复数/形容词比较级的粗略推导） */
function allForms(en) {
    const forms = new Set([en]);
    const irr = exports.IRREGULAR_VERBS[en.toLowerCase()];
    if (irr) {
        forms.add(irr.present);
        forms.add(irr.ing);
        forms.add(irr.past);
        forms.add(irr.pastParticiple);
    }
    forms.add(getPresentForm(en));
    forms.add(getIngForm(en));
    forms.add(getPastForm(en));
    return Array.from(forms);
}
/**
 * 在句子中查找目标词的实际出现形态（最长匹配优先）。
 * 用于语境模式的挖空。
 */
function findFormInSentence(en, sentence) {
    const candidates = allForms(en).sort((a, b) => b.length - a.length);
    for (const form of candidates) {
        // 词边界匹配，忽略大小写
        const re = new RegExp(`\\b${form.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        const m = re.exec(sentence);
        if (m)
            return { form: m[0], index: m.index };
    }
    return null;
}

});

__def("shared/utils/text", function (module, exports, require) {
"use strict";
// 文本比对工具（Shadowing 跟读匹配用）
Object.defineProperty(exports, "__esModule", { value: true });
exports.levenshtein = levenshtein;
exports.tokenize = tokenize;
exports.compareSpeech = compareSpeech;
/** Levenshtein 编辑距离 */
function levenshtein(a, b) {
    if (a === b)
        return 0;
    if (a.length === 0)
        return b.length;
    if (b.length === 0)
        return a.length;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
        const cur = [i];
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        }
        prev = cur;
    }
    return prev[b.length];
}
/** 分词并去掉标点、转小写。含弯引号——否则 that's 会带着 ’ 参与比对而永远配不上 */
function tokenize(s) {
    return s
        .toLowerCase()
        .replace(/[.,!?;:"'’‘“”()]/g, '')
        .split(/\s+/)
        .filter(Boolean);
}
/**
 * 逐词比对原句与识别结果，编辑距离 ≤1 视为匹配（容忍识别误差）。
 * 每个转写词只能被消耗一次，避免重复词虚高。
 */
function compareSpeech(original, spoken) {
    const oWords = tokenize(original);
    const sWords = tokenize(spoken);
    const used = new Array(sWords.length).fill(false);
    const words = [];
    let hits = 0;
    for (const ow of oWords) {
        let matched = -1;
        for (let i = 0; i < sWords.length; i++) {
            if (used[i])
                continue;
            if (levenshtein(ow, sWords[i]) <= 1) {
                matched = i;
                break;
            }
        }
        if (matched >= 0) {
            used[matched] = true;
            hits++;
            words.push({ word: ow, hit: true });
        }
        else {
            words.push({ word: ow, hit: false });
        }
    }
    return {
        accuracy: oWords.length === 0 ? 0 : hits / oWords.length,
        words,
    };
}

});

__def("shared/utils/options", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMeaningOptions = buildMeaningOptions;
const words_1 = require("../data/words");
/**
 * 1 个正确释义 + 3 个同词性干扰项，打乱后返回。
 * 同词性词不够时用全库补足。
 */
function buildMeaningOptions(target, count = 4) {
    const pool = words_1.WORDS.filter((w) => w.pos === target.pos && w.en !== target.en);
    const fallback = words_1.WORDS.filter((w) => w.en !== target.en);
    const source = pool.length >= count - 1 ? pool : fallback;
    const distractors = new Set();
    let guard = 0;
    while (distractors.size < count - 1 && guard < 200) {
        const pick = source[Math.floor(Math.random() * source.length)];
        if (pick && pick.exampleZh !== target.exampleZh)
            distractors.add(pick.exampleZh);
        guard++;
    }
    const options = [target.exampleZh, ...distractors];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

});

__def("shared/utils/framework", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorrectAnswer = getCorrectAnswer;
exports.selectWordForFramework = selectWordForFramework;
exports.fillTemplate = fillTemplate;
exports.fillTemplateZh = fillTemplateZh;
exports.selectFramework = selectFramework;
exports.buildFormOptions = buildFormOptions;
const inflect_1 = require("./inflect");
const frameworks_1 = require("../data/frameworks");
/** 根据 slotType 取该词的正确形态 */
function getCorrectAnswer(word, slotType) {
    var _a, _b, _c, _d, _e;
    var _f, _g, _h, _j, _k;
    switch (slotType) {
        case 'infinitive':
            return (_f = (_a = word.forms) === null || _a === void 0 ? void 0 : _a.infinitive) !== null && _f !== void 0 ? _f : word.en;
        case 'present':
            return (_g = (_b = word.forms) === null || _b === void 0 ? void 0 : _b.present) !== null && _g !== void 0 ? _g : (0, inflect_1.getPresentForm)(word.en);
        case 'ing':
            return (_h = (_c = word.forms) === null || _c === void 0 ? void 0 : _c.ing) !== null && _h !== void 0 ? _h : (0, inflect_1.getIngForm)(word.en);
        case 'past':
            return (_j = (_d = word.forms) === null || _d === void 0 ? void 0 : _d.past) !== null && _j !== void 0 ? _j : (0, inflect_1.getPastForm)(word.en);
        case 'pastParticiple':
            return (_k = (_e = word.forms) === null || _e === void 0 ? void 0 : _e.pastParticiple) !== null && _k !== void 0 ? _k : (0, inflect_1.getPastForm)(word.en);
        case 'noun':
        case 'adjective':
            return word.en;
    }
}
/**
 * 为框架选一个语义合适的词。
 * 依次按词性 → compatibleTags → 排除已掌握 → 难度上限过滤，逐层放宽以保证有词可选。
 */
function selectWordForFramework(framework, words, records, currentPhase) {
    // 1. 词性过滤
    let candidates = words.filter((w) => w.pos === framework.slotPos);
    if (candidates.length === 0)
        return null;
    // 1.5 动词框架：剔除被当成独立词条的变位形式（was/goes/made…）与
    //     无法命令、无法"喜欢做"的静态动词（seem/belong/exist…）
    if (framework.slotPos === 'v.') {
        const usable = candidates.filter((w) => !frameworks_1.EXCLUDED_FRAMEWORK_VERBS.has(w.en));
        if (usable.length > 0)
            candidates = usable;
    }
    // 2. 选词收窄：优先用白名单（主语/语义写死的框架），否则退回标签
    //    白名单是人工按语义域策展的，能杜绝"The weather is tough"这类废句
    if (framework.slotWhitelist && framework.slotWhitelist.length > 0) {
        const wl = new Set(framework.slotWhitelist);
        const listed = candidates.filter((w) => wl.has(w.en));
        if (listed.length > 0)
            candidates = listed;
    }
    else if (framework.compatibleTags.length > 0) {
        const tagged = candidates.filter((w) => w.tags.some((t) => framework.compatibleTags.includes(t)));
        if (tagged.length > 0)
            candidates = tagged;
    }
    // 3. 排除已掌握的词（全掌握时不收窄）
    const notMastered = candidates.filter((w) => { var _a; return !((_a = records[w.en.toLowerCase()]) === null || _a === void 0 ? void 0 : _a.mastered); });
    if (notMastered.length > 0)
        candidates = notMastered;
    // 4. 难度不超过当前阶段（无匹配则不收窄）
    const leveled = candidates.filter((w) => w.difficulty <= currentPhase + 1);
    if (leveled.length > 0)
        candidates = leveled;
    return candidates[Math.floor(Math.random() * candidates.length)];
}
/**
 * 把答案填进模板，并修正不定冠词 a→an。
 * 模板里的冠词是写死的（"There is a {}."），填进元音开头的词就成了
 * "a egg"，得在成句后统一纠正。词库里没有 university/hour 这类
 * "元音字母辅音音"或"辅音字母元音音"的反例，故按首字母判断即可。
 */
function fillTemplate(template, answer) {
    const filled = template.replace('{}', answer);
    return filled.replace(/\b([Aa]) (?=[aeiou])/g, (_m, a) => a === 'A' ? 'An ' : 'an ');
}
/**
 * 填中文模板。形容词的释义多半带"的"（美丽的 / 奇怪的），
 * 套进"天气很{}。"就成了"天气很美丽的。"——去掉这个多余的"的"。
 * 只对形容词槽处理：名词/动词的释义不该动。
 */
function fillTemplateZh(templateZh, zh, slotType) {
    const cleaned = slotType === 'adjective' ? zh.replace(/的$/, '') : zh;
    return templateZh.replace('{}', cleaned);
}
/**
 * 按 Leitner 盒子反向加权抽一个框架：box 越低（越常答错）越容易被抽到。
 *
 * 这里不用 9 级 SRS：SRS_GAPS 走到毕业需要 239 天，而整个计划只有 60 天，
 * 36 个框架每天练 5-10 题本来两三天就轮一遍，长间隔在这个盘子里是空转的。
 * 加权抽取能拿到"薄弱的多练、熟的少练"这个主要收益，且不引入调度机器。
 *
 * @param used 本场次已经出过的框架 id。Phase 1 只解锁 12 个框架、每天要做 8 题，
 *   每题独立加权抽取的话，一场里撞见三四次同一个句型是常态——用户看到的就是
 *   "翻来覆去那几个句子"。传入已出过的 id 可以保证一场之内不重复，
 *   池子用完了才开下一轮。
 */
function selectFramework(pool, records, used) {
    if (pool.length === 0)
        return null;
    const usedSet = used instanceof Set ? used : new Set(used || []);
    let candidates = pool.filter((f) => !usedSet.has(f.id));
    if (candidates.length === 0)
        candidates = pool; // 一轮出完了，重新开一轮
    const today = new Date().toDateString();
    // box 1..5 → 权重 5..1；没练过的按 box 1 处理，优先亮相
    const weights = candidates.map((f) => {
        var _a;
        const rec = records[f.id];
        const box = (_a = rec && rec.box) !== null && _a !== void 0 ? _a : 1;
        let w = Math.max(1, 6 - Math.min(5, box));
        // 今天已经练过的框架降权：12 个框架配 8 道题，天与天之间必然重叠，
        // 但至少让昨天没轮到的那几个先上
        if (rec && rec.lastPracticed) {
            const last = new Date(rec.lastPracticed);
            if (!isNaN(last.getTime()) && last.toDateString() === today)
                w = w * 0.35;
        }
        return w;
    });
    const total = weights.reduce((s, w) => s + w, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < candidates.length; i++) {
        roll -= weights[i];
        if (roll <= 0)
            return candidates[i];
    }
    return candidates[candidates.length - 1];
}
/** 第 2 级提示用的形态三选一（含正确答案） */
function buildFormOptions(word, slotType) {
    const correct = getCorrectAnswer(word, slotType);
    const pool = word.forms
        ? [
            word.forms.infinitive,
            word.forms.present,
            word.forms.ing,
            word.forms.past,
            word.forms.pastParticiple,
        ]
        : [word.en, (0, inflect_1.getPresentForm)(word.en), (0, inflect_1.getIngForm)(word.en)];
    const distractors = Array.from(new Set(pool)).filter((f) => f !== correct);
    // 洗牌后取两个干扰项
    for (let i = distractors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
    }
    const options = [correct, ...distractors.slice(0, 2)];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

});

__def("shared/utils/srs", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIFFICULT_GAP_FACTOR = exports.MAX_STAGE = exports.SRS_GAPS = void 0;
exports.emptyRecord = emptyRecord;
exports.getRecord = getRecord;
exports.reviewWord = reviewWord;
exports.hasFreshWords = hasFreshWords;
exports.getDueCount = getDueCount;
exports.getWordQuota = getWordQuota;
exports.buildQueue = buildQueue;
/**
 * SRS 间隔天数，索引对应 stage。
 *
 * 首个间隔从 2 天改成 1 天：记忆研究里比较一致的一条是，新学的项目应在
 * 过夜巩固之后尽快提取一次——睡眠参与记忆固化，"当天学 + 隔天回忆"是
 * 早期最有效的组合。原来是 2 天，且中间零接触（单词页当时也没有当堂补考），
 * 于是一个新词学完就消失两天，第二次见面时基本等于重学。
 * SM-2、Anki 的首个间隔也都是 1 天。
 *
 * 注意：这个改动对复习总量几乎没影响（模拟 365 天，日均 61 vs 61），
 * 改它纯粹是为了学习效果，不是为了效率。
 *
 * 索引 0 只在失误退级到底时用到；"通过"时 stage 从 0 直接跳到 1。
 */
exports.SRS_GAPS = [1, 1, 3, 7, 15, 30, 60, 120, 240];
/**
 * 失误后退几级。
 *
 * 原来是一律归零：一个已经背了两个月、走到 stage 5 的词，手滑错一次就
 * 退回原点，58 天的积累作废，而且要重新占用 8 次复习额度。
 * SM-2 / Anki / FSRS 都不这么做——失误意味着记忆强度下降，不是清零。
 *
 * 实测（失误率 30%，365 天）：归零 → 日均 111 次复习、每词 21.3 次；
 * 退 2 级 → 日均 90 次、每词 17.4 次，且一年内达"已巩固"的比例从 94% 升到 99%。
 * 归零那套还会把日均推过复习上限 100，反过来掐断新词投放。
 */
exports.LAPSE_DEMOTE = 2;
/**
 * 累计失误多少次后自动按难词处理（间隔减半），见 reviewWord。
 *
 * 定 8 次，和 Anki 判定 leech（顽固词）的默认阈值一致。实测扫过 3/5/8：
 * 阈值越低被判难词的越多，但复习总量几乎不变（58 vs 56/天），
 * 而阈值 3 在失误率 30% 时会有 68% 的词被判难词——那就不叫"难词"了，
 * 而且间隔减半推高日负担、撞上复习上限，一年反而少学 174 个词。
 * 8 次是真正反复记不住的词，对这些缩短间隔才有意义。
 */
exports.AUTO_HARD_LAPSES = 8;
exports.MAX_STAGE = exports.SRS_GAPS.length - 1; // 8
/** 新建一条空记录 */
function emptyRecord() {
    return {
        seen: false,
        stage: 0,
        due: null,
        mastered: false,
        box: 1,
        favorite: false,
        markedDifficult: false,
        testSkipped: false,
        // 累计失误次数，用于自动识别难词（见 AUTO_HARD_LAPSES）
        lapses: 0,
    };
}
/** 取记录，不存在则返回空记录 */
function getRecord(records, en) {
    var _a;
    return (_a = records[en.toLowerCase()]) !== null && _a !== void 0 ? _a : emptyRecord();
}
/** 标记为难词时，复习间隔打的折扣（间隔减半，最少 1 天） */
exports.DIFFICULT_GAP_FACTOR = 0.5;
/**
 * 答题后推进记录。
 * 答对 stage+1（到顶则 mastered），答错 stage 归零、明天重来。
 *
 * 用户标记的难词走同一套 stage 推进，但复习间隔减半——它会更频繁地回到队列里，
 * 而不是只在积压超过 maxReviewPerDay 时才被优先照顾（那种情况几个月才出现一次）。
 */
function reviewWord(record, correct, calendarDay) {
    var _a;
    const next = { ...record, seen: true };
    const lapses = (_a = record.lapses) !== null && _a !== void 0 ? _a : 0;
    // 反复失误的词自动按难词处理：间隔减半、更频繁地回到队列。
    // 不去改 markedDifficult——那是用户手动标的，覆盖它会让人莫名其妙
    const hard = record.markedDifficult || lapses >= exports.AUTO_HARD_LAPSES;
    const gapFor = (stage) => hard
        ? Math.max(1, Math.round(exports.SRS_GAPS[stage] * exports.DIFFICULT_GAP_FACTOR))
        : exports.SRS_GAPS[stage];
    if (correct) {
        next.stage = Math.min(record.stage + 1, exports.MAX_STAGE);
        next.box = Math.min(record.box + 1, 5);
        next.due = calendarDay + gapFor(next.stage);
        // 毕业条件对难词一视同仁：mastered 参与掌握率、掌握率又卡阶段推进，
        // 若难词不能毕业，标记难词就会悄悄堵住 Phase 推进——那是用户想不到的副作用
        if (next.stage >= exports.MAX_STAGE)
            next.mastered = true;
    }
    else {
        // 退级而不是归零，见 LAPSE_DEMOTE。stage 0 时 SRS_GAPS[0]=1，明天重来
        next.stage = Math.max(0, record.stage - exports.LAPSE_DEMOTE);
        next.box = Math.max(1, record.box - exports.LAPSE_DEMOTE);
        next.mastered = false;
        next.lapses = lapses + 1;
        next.due = calendarDay + gapFor(next.stage);
    }
    return next;
}
/**
 * 词库里是否还有没学过的词。用来判断该不该进维持模式——
 * 维持模式的含义是"没有新词可发了，转为守成"，而不是"到了第 61 天"。
 */
function hasFreshWords(allWords, records) {
    return allWords.some((w) => {
        const r = records[w.en.toLowerCase()];
        return !r || (!r.seen && !r.testSkipped && !r.mastered);
    });
}
/** 到期复习词数量（供首页显示） */
function getDueCount(records, calendarDay) {
    return Object.values(records).filter((r) => r.seen && !r.mastered && r.due !== null && r.due <= calendarDay).length;
}
/** Fisher-Yates 洗牌 */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
/**
 * 今日新词投放量。
 *
 * 只在真的还不完债时才少发新词——即到期量超过了复习上限、有词被顺延。
 * 早先的写法是 `dailyNewLimit - floor(min(due, cap) / 3)`，把新词投放挂在了
 * 复习上限上，导致上限调得越高新词越少（cap=999、due≥60 时直接发 0 个），
 * 20 关下来只发得出一百多个词，远达不到设计的 400。
 */
function computeNewCount(dailyNewLimit, dueCount, maxReviewPerDay) {
    const backlog = Math.max(0, dueCount - maxReviewPerDay);
    return Math.max(0, dailyNewLimit - backlog);
}
/**
 * 今日单词任务量 = 实际要做的复习数 + 新词数。
 * 纯计算，不产生顺延写回，供首页与通关判定取"今天该做多少词"。
 *
 * 关键：Phase 2/3 传 dailyNewLimit=0，配额就等于当天的到期复习数——
 * 这样"不发新词"不等于"不用复习"。原先把 Phase 2/3 的 words 目标写死成 0，
 * 结果第 21-60 关一次复习都不强制，Phase 1 学的词到第 60 关全部逾期一个月。
 */
function getWordQuota(allWords, records, calendarDay, dailyNewLimit, maxReviewPerDay) {
    let dueCount = 0;
    let freshCount = 0;
    for (const w of allWords) {
        const r = records[w.en.toLowerCase()];
        if (!r) {
            freshCount++;
            continue;
        }
        if (r.mastered || r.testSkipped)
            continue;
        if (!r.seen)
            freshCount++;
        else if (r.due !== null && r.due <= calendarDay)
            dueCount++;
    }
    const reviews = Math.min(dueCount, maxReviewPerDay);
    const news = Math.min(freshCount, computeNewCount(dailyNewLimit, dueCount, maxReviewPerDay));
    return reviews + news;
}
/**
 * 构建今日学习队列：到期复习词优先，新词补足。
 * 复习词超过 maxReviewPerDay 时顺延到明天。
 *
 * @param startRank 入门测试定出的学习起点（词频 rank）。rank 小于它的词**不会被跳过**，
 *   只是排到队列后面——等起点之后的词学完了照样会轮到。
 *   做成"重排序"而不是"排除"，是因为 20 道自评题不足以断定你真的会那上千个词；
 *   排序错了最多让你晚点学到，排除错了就是永久丢失。
 */
function buildQueue(allWords, records, calendarDay, dailyNewLimit, maxReviewPerDay, startRank) {
    const due = [];
    const fresh = [];
    for (const w of allWords) {
        const r = records[w.en.toLowerCase()];
        if (!r) {
            fresh.push(w);
            continue;
        }
        if (r.mastered || r.testSkipped)
            continue;
        if (!r.seen) {
            fresh.push(w);
        }
        else if (r.due !== null && r.due <= calendarDay) {
            due.push(w);
        }
    }
    // 逾期最久的先还，否则 due 只按词库顺序切，积压时靠后的词会被无限期晾着
    due.sort((a, b) => {
        var _a, _b;
        const da = (_a = records[a.en.toLowerCase()]) === null || _a === void 0 ? void 0 : _a.due;
        const db = (_b = records[b.en.toLowerCase()]) === null || _b === void 0 ? void 0 : _b.due;
        return (da !== null && da !== void 0 ? da : 0) - (db !== null && db !== void 0 ? db : 0);
    });
    // 过载保护：超出上限的到期词今天不做。
    //
    // 这里**不再**把它们的 due 改写成 calendarDay + 1。改写有两个害处：
    // 1. 它把积压administratively抹平了——computeNewCount 看的是"到期总量减去上限"，
    //    顺延写回之后到期量正好等于上限，积压归零，新词闸门重新打开。
    //    也就是说"还不完债就先别发新词"这条保护被它自己的写回给绕过去了，
    //    债只是滚到明天，明天再滚一次，永远触发不了刹车。
    // 2. 它让同一天里 getWordQuota 的答案发生变化：首页先算出目标 100，
    //    打开单词页触发写回后再算就变成 112——目标和队列长度对不上。
    //
    // 逾期就是逾期，due 保持原值，r.due <= calendarDay 照样会把它们收进来，
    // 只是排在后面，等前面的还完。
    const takenDue = due.slice(0, maxReviewPerDay);
    const deferred = due.slice(maxReviewPerDay);
    // 只有真的还不完债（有词被顺延）才少发新词
    const newCount = computeNewCount(dailyNewLimit, due.length, maxReviewPerDay);
    // 新词按口语词频从高到低引入，保证先学的是日常真会听到的词。
    // 有学习起点时，起点之后的词先出，起点之前的（你自评已经会的）排到最后。
    const from = startRank || 0;
    const orderKey = (w) => (w.rank >= from ? w.rank - from : w.rank + Number.MAX_SAFE_INTEGER / 2);
    const takenNew = [...fresh].sort((a, b) => orderKey(a) - orderKey(b)).slice(0, newCount);
    return {
        queue: shuffle([...takenDue, ...takenNew]),
        // 今天做不完、留到后面的到期词数量（仅供显示，不写回存档）
        deferredCount: deferred.length,
        newCount: takenNew.length,
        reviewCount: takenDue.length,
    };
}

});

__def("shared/utils/plan", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORD_MAX_MISSES = exports.WORD_STEPS = exports.ASSESSMENT_SAMPLE_SIZE = exports.PHASE_NAMES = exports.PHASE_GATES = exports.RETAINED_STAGE = exports.OUTPUT_TARGETS = void 0;
exports.getDailyTarget = getDailyTarget;
exports.todayStr = todayStr;
exports.calculateCalendarDay = calculateCalendarDay;
exports.isRetained = isRetained;
exports.getRetainedCount = getRetainedCount;
exports.getRetainedRatio = getRetainedRatio;
exports.getPhaseGate = getPhaseGate;
exports.checkPhaseProgression = checkPhaseProgression;
exports.applyPhaseGate = applyPhaseGate;
exports.getUnlockedFrameworks = getUnlockedFrameworks;
exports.emptyCompletion = emptyCompletion;
exports.isTaskDone = isTaskDone;
exports.isLevelComplete = isLevelComplete;
exports.hasClearedToday = hasClearedToday;
exports.getLevelState = getLevelState;
exports.canPlayActiveLevel = canPlayActiveLevel;
exports.refreshPlan = refreshPlan;
exports.resumeActiveLevel = resumeActiveLevel;
exports.settleLevel = settleLevel;
exports.completeTask = completeTask;
const frameworks_1 = require("../data/frameworks");
/**
 * 各阶段的输出类任务量（不含 words —— 单词量由当天队列决定，见 getDailyTarget）。
 *
 * 按"每天 1 小时"配平，每题耗时按 造句25s / 跟读30s / 听辨22s / 对话每轮23s / 单词10s 估算。
 *
 * 对话是后加的第五项，时间从 shadowing 里匀出来——两者都是"开口说"，
 * 而对话是回合制交际、比孤立单句跟读更接近真实场景，是更高价值的那个。
 * 匀完每阶段输出总时长反而略降：
 *   Phase 1 ≈ 15.6 分、Phase 2 ≈ 22.5 分、Phase 3 ≈ 26.5 分（另加单词稳态约 30 分）
 */
exports.OUTPUT_TARGETS = {
    '1': { framework: 8, shadowing: 14, listening: 8, dialogue: 6 },
    '2': { framework: 12, shadowing: 20, listening: 12, dialogue: 8 },
    '3': { framework: 15, shadowing: 24, listening: 12, dialogue: 10 },
    // 词库发完后不再有新词，省下的时间全部让给听说
    maintenance: { framework: 10, shadowing: 28, listening: 12, dialogue: 10 },
};
/**
 * "巩固"的门槛：stage 3 意味着这个词连续答对 3 次、间隔走到 1→3→7 天，
 * 下次复习在 7 天后——即"隔了一周还记得"。
 *
 * 不能用 mastered（stage 8）：那需要 1+2+4+7+15+30+60+120 = 239 天，
 * 早期用户几个月内一个词都毕不了业，掌握率恒等于"测试认识的词 / 学过的词"，
 * 学得越多反而越低，阶段门槛永远无法满足。
 */
exports.RETAINED_STAGE = 3;
/**
 * 阶段推进的能力门槛：巩固词数 + 巩固率，双条件。
 *
 * 不能只看比率：开局只有入门测试认识的那几十个词，比率天然 100%，
 * 会在第一关就直接跳到 Phase 3。词数下限保证有足够的语料基础。
 *
 * 也不再看关卡数（原来是 planDay≥20 / ≥40）——那是把 60 天日历
 * 换了个名字，用户学快学慢都被同一把尺子卡住。
 */
exports.PHASE_GATES = {
    1: { retainedWords: 300, ratio: 0.6 },
    2: { retainedWords: 700, ratio: 0.7 },
};
/**
 * 入门测试的题量。放在这里而不是 assessment 页里，是因为首页的引导文案
 * 也要显示这个数——写死在两处的结果就是改了题量只改到一半。
 */
exports.ASSESSMENT_SAMPLE_SIZE = 20;
/**
 * 单词模块每种情形要走哪几步。
 *
 * 放在 shared 而不是各自的页面里：小程序端和网页端都要用，写死在两边
 * 就等于每改一次学习设计要同步两遍，迟早分叉——网页版的核心逻辑本来就是
 * 从 shared 打包的，这里归进来才闭环。
 *
 * new    新词：翻卡 → 听写 → 语境。翻卡会把答案摆出来，后两步都是提取。
 *        原来末尾还有一步听辨（听整句四选一），删掉的理由不是"和听写/语境重复"
 *        （听写考的是孤立单词的音频，语境的输入根本是文字），而是：
 *        · 它和独立的「听辨训练」模块是同一份代码、同一套题——
 *          两边都是 buildMeaningOptions(word,4) + 播 example + 选 exampleZh；
 *        · 例句音频不依赖这一步：words 页每答完一步都会播一遍例句，
 *          新词本来就能听到三遍句子。
 *        删掉损失的只是"学习当下的四选一理解检查"，而那是整条链里最弱的信号
 *        （25% 能蒙对、考再认不考产出），且每天的听辨训练会在同一批材料上补上。
 * review 复习：只做语境——在例句里填对词形。这一步同时考回忆和词形产出，
 *        是四步里信息量最大的一个。实测 1902 个词有 1897 个能正常挖空，
 *        剩下 5 个不规则动词找不到词形会直接放行（0.3%，可忽略）。
 *        原先后面还跟一步听辨，但那是四选一的再认题，比语境容易得多，
 *        放在语境之后基本不产生额外信息，只增加时间。
 * free   自由复习：翻卡 + 听写，和 review 互补，一天内四种模式都碰得到。
 */
exports.WORD_STEPS = {
    new: ['flip', 'dictation', 'context'],
    review: ['context'],
    free: ['flip', 'dictation'],
};
/**
 * 各情形允许错几次仍算通过。
 *
 * 新词留 1 次不是宽松，而是必须的：翻卡问"认识/不认识"，一个真正的新词
 * 你本来就该点"不认识"——那一下必然算一次 miss。留 1 次正好把它吸收掉，
 * 于是实际含义是"翻卡可以不认识，但听写和语境两步都得对"。
 * 复习/自由复习没有翻卡这种必然失手的步骤，所以要求全对。
 */
exports.WORD_MAX_MISSES = { new: 1, review: 0, free: 0 };
exports.PHASE_NAMES = {
    1: '冷启动',
    2: '阻抗突围',
    3: '肌内固化',
};
/**
 * 取某关的任务目标。
 *
 * @param wordQuota 今天该做多少个词，由 srs.getWordQuota 按当天队列算出
 *   （= 到期复习 + 新词）。不能写死成常数：
 *   · 写死 20 而用户把每日新词量调到 5 → 队列只有 5 个词，永远做不满 20，死锁；
 *   · Phase 2/3 写死 0 → 不强制任何复习，Phase 1 学的词全部烂掉。
 *   用当天队列长度当目标，两个问题一起解决："今天该做的都做完"。
 */
function getDailyTarget(phase, mode, wordQuota) {
    const out = mode === 'maintenance'
        ? exports.OUTPUT_TARGETS.maintenance
        : exports.OUTPUT_TARGETS[String(phase)];
    return { ...out, words: Math.max(0, wordQuota) };
}
/** 本地日期字符串 YYYY-MM-DD（不用 toISOString，避免时区偏移） */
function todayStr(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
/** 真实天数：从开始日期到今天（第一天为 1） */
function calculateCalendarDay(startDate) {
    const start = new Date(startDate + 'T00:00:00');
    const now = new Date(todayStr() + 'T00:00:00');
    const diff = Math.floor((now.getTime() - start.getTime()) / 86400000);
    return Math.max(1, diff + 1);
}
/** 一个词是否算"已巩固"：走到 stage 3（隔一周还记得）或已彻底掌握 */
function isRetained(r) {
    return r.mastered || r.testSkipped || r.stage >= exports.RETAINED_STAGE;
}
/** 已巩固的词数 */
function getRetainedCount(records) {
    return Object.values(records).filter(isRetained).length;
}
/**
 * 已学词中已巩固的比例。阶段推进就卡这个值。
 * 用 stage≥3 而非 mastered 的原因见 RETAINED_STAGE 的注释。
 */
function getRetainedRatio(records) {
    const all = Object.values(records);
    const learned = all.filter((r) => r.seen || r.testSkipped);
    if (learned.length === 0)
        return 0;
    return learned.filter(isRetained).length / learned.length;
}
/** 进入下一阶段的门槛；Phase 3 已是最高阶段，返回 null */
function getPhaseGate(phase) {
    return phase === 3 ? null : exports.PHASE_GATES[phase];
}
/**
 * 检查阶段推进：巩固词数与巩固率双达标，与学了多少天无关。
 * 学得快的人几周就能进 Phase 2，学得慢的人多练几关，尺子是同一把——能力。
 */
function checkPhaseProgression(currentPhase, records) {
    const gate = getPhaseGate(currentPhase);
    if (!gate)
        return { shouldAdvance: false, reason: '' };
    const ratio = getRetainedRatio(records);
    const count = getRetainedCount(records);
    const pct = Math.round(ratio * 100);
    const nextPhase = currentPhase + 1;
    if (count >= gate.retainedWords && ratio >= gate.ratio) {
        return { shouldAdvance: true, reason: `已巩固 ${count} 词、巩固率 ${pct}%，进入 Phase ${nextPhase}` };
    }
    if (count < gate.retainedWords) {
        return {
            shouldAdvance: false,
            reason: `已巩固 ${count}/${gate.retainedWords} 词，再积累一些就能进 Phase ${nextPhase}`,
        };
    }
    return {
        shouldAdvance: false,
        reason: `巩固率 ${pct}%，达到 ${Math.round(gate.ratio * 100)}% 就能进 Phase ${nextPhase}`,
    };
}
/**
 * 应用阶段门槛：满足条件才升一级。
 * 抽出来是因为通关和每日刷新两处都要用——早先只有刷新处走门槛，
 * 而 completeTask 直接按关卡号设 currentPhase，等于把门槛绕过去了。
 */
function applyPhaseGate(plan, records) {
    if (plan.mode === 'maintenance')
        return { ...plan, currentPhase: 3 };
    const { shouldAdvance } = checkPhaseProgression(plan.currentPhase, records);
    if (shouldAdvance && plan.currentPhase < 3) {
        return {
            ...plan,
            currentPhase: (plan.currentPhase + 1),
            phaseReady: true,
        };
    }
    return { ...plan, phaseReady: shouldAdvance };
}
/** 该阶段及之前解锁的所有框架 */
function getUnlockedFrameworks(phase) {
    return frameworks_1.FRAMEWORKS.filter((f) => f.phase <= phase);
}
/** 空的关卡完成记录 */
function emptyCompletion() {
    return { words: 0, framework: 0, shadowing: 0, listening: 0, dialogue: 0 };
}
/** 某一项是否达标（目标为 0 表示本阶段不需要做） */
function isTaskDone(done, target) {
    return target === 0 || done >= target;
}
/** 某关五项任务是否都做满了目标量 */
function isLevelComplete(completion, target) {
    if (!completion)
        return false;
    return (isTaskDone(completion.words, target.words) &&
        isTaskDone(completion.framework, target.framework) &&
        isTaskDone(completion.shadowing, target.shadowing) &&
        isTaskDone(completion.listening, target.listening) &&
        isTaskDone(completion.dialogue, target.dialogue));
}
/** 今天是否已经通过一关（一天只能通一关，防止猛刷压垮 SRS） */
function hasClearedToday(plan) {
    return plan.lastClearedDate === todayStr();
}
/** 某关的状态：已通关 / 当前可闯 / 未解锁 */
function getLevelState(plan, level) {
    if (plan.cleared.includes(level))
        return 'cleared';
    if (level === plan.planDay)
        return 'active';
    return 'locked';
}
/**
 * 是否允许现在闯 activeLevel 这一关的新内容。
 * 硬卡关：今天已经通关过就得等明天；回刷已通关的关卡不受此限。
 */
function canPlayActiveLevel(plan) {
    if (plan.activeLevel < plan.planDay)
        return true; // 回刷旧关，随时可以
    return !hasClearedToday(plan);
}
/**
 * 每次打开 app 时刷新：只更新真实天数与阶段，不碰 planDay。
 * planDay 只由通关推进，所以请假多久回来都还在原来那关。
 *
 * @param hasFreshWords 词库里还有没学过的词吗。没有了就进维持模式——
 *   维持模式的触发条件是"词库发完"，而不是"到了第 61 天"。
 */
function refreshPlan(store, hasFreshWords) {
    let plan = { ...store.plan };
    plan.calendarDay = calculateCalendarDay(plan.startDate);
    if (!hasFreshWords)
        plan.mode = 'maintenance';
    plan = applyPhaseGate(plan, store.words);
    return plan;
}
/**
 * 冷启动时把 activeLevel 归位到当前关 —— 只在 app 启动时调用一次。
 *
 * 关卡页可以点进已通关的旧关回刷，那会把 activeLevel 指过去。如果用户就这么退出，
 * 下次进来所有练习仍记在那个旧关上，而旧关已经在 cleared 里、justCleared 恒为 false，
 * planDay 再也不前进——练一辈子也不通关。
 *
 * 归位放在启动而不是每次 onShow：onShow 会在「关卡页设置 activeLevel → 跳回首页」
 * 的中间触发，在那里归位等于把用户刚点的回刷立刻撤销。回刷因此只在本次会话内有效。
 */
function resumeActiveLevel(plan) {
    if (plan.activeLevel !== plan.planDay && plan.cleared.includes(plan.activeLevel))
        return { ...plan, activeLevel: plan.planDay };
    return plan;
}
/**
 * 补判通关 —— 每次打开 app 时跑一遍。
 *
 * isLevelComplete 原先全项目只有一个调用点：completeTask 内部。也就是说
 * "通关"只可能发生在你完成某一个练习单元的那一瞬间。但单词目标是浮动的
 * （= 到期复习 + 新词，每天都在变），于是能走进这样一个死锁：
 *
 *   昨天五项差一点没通关 → 今天到期词清零、目标降下来 → 五项其实都达标了
 *   → 可五个页面的 remain 都是 0，做不了任何单元 → completeTask 永不再触发
 *   → 这一关永远停在 100%，planDay 再也不前进。
 *
 * 每次刷新补判一次，把这个状态解开。
 *
 * 不写 lastClearedDate：这一关的活是前几天干的，不该占掉今天的通关名额，
 * 否则用户一开 app 就被"今天已练完"挡在门外。
 */
function settleLevel(plan, target) {
    const level = plan.activeLevel;
    // 已通关的关卡不重复结算。注意这里**不能**顺手把 activeLevel 拨回当前关——
    // settleLevel 每次 onShow 都会跑，而关卡页正是「设置 activeLevel → 跳回首页」，
    // 一拨就把用户刚选的回刷关卡撤销了。归位只在 app 启动时做，见 resumeActiveLevel。
    if (plan.cleared.includes(level))
        return plan;
    const completion = plan.levels[level];
    if (!completion || !isLevelComplete(completion, target))
        return plan;
    const next = {
        ...plan,
        cleared: [...plan.cleared, level].sort((a, b) => a - b),
    };
    if (level === plan.planDay) {
        next.planDay = plan.planDay + 1;
        next.activeLevel = plan.planDay + 1;
    }
    return next;
}
/**
 * 给某关的一项任务记一笔完成量；五项都做满目标才通关，planDay 前进一格。
 * 回刷已通关的旧关不会推进 planDay。
 *
 * @param amount 本次完成量，默认 1。单词模块清空队列时会一次性补满。
 */
function completeTask(plan, level, key, amount, wordQuota) {
    var _a;
    // 用 currentPhase 而非关卡号：巩固率没到门槛时人还留在 Phase 1，
    // 内容也该是 Phase 1 的。按关卡号算会让第 21 关直接跳 Phase 2 目标，
    // 和实际解锁的框架对不上。
    const target = getDailyTarget(plan.currentPhase, plan.mode, wordQuota);
    const cur = (_a = plan.levels[level]) !== null && _a !== void 0 ? _a : emptyCompletion();
    const nextCompletion = { ...cur, [key]: cur[key] + amount };
    const next = {
        ...plan,
        levels: { ...plan.levels, [level]: nextCompletion },
    };
    const justCleared = isLevelComplete(nextCompletion, target) && !plan.cleared.includes(level);
    if (justCleared) {
        next.cleared = [...plan.cleared, level].sort((a, b) => a - b);
        next.lastClearedDate = todayStr();
        // 只有闯当前关才推进进度；回刷旧关不算。关卡数不设上限。
        if (level === plan.planDay) {
            next.planDay = plan.planDay + 1;
            next.activeLevel = plan.planDay + 1;
            // 注意：不在这里设 currentPhase 或 mode —— 那会绕过能力门槛。
            // 阶段推进一律走 applyPhaseGate，维持模式由"词库发完"触发（见 refreshPlan）。
        }
    }
    return next;
}

});

__def("shared/utils/stats", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_DAILY_SECONDS = exports.MAX_SESSION_SECONDS = void 0;
exports.formatDuration = formatDuration;
exports.last7Days = last7Days;
exports.totalLearned = totalLearned;
exports.frameworkAccuracy = frameworkAccuracy;
exports.listeningAccuracy = listeningAccuracy;
exports.passageAccuracy = passageAccuracy;
exports.totalPlayedLevels = totalPlayedLevels;
exports.addStudyTime = addStudyTime;
exports.sanitizeStats = sanitizeStats;
const plan_1 = require("./plan");
/** 秒 → "X小时Y分钟" */
function formatDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0)
        return `${h}小时${m}分钟`;
    if (m > 0)
        return `${m}分钟`;
    return `${Math.floor(seconds)}秒`;
}
/** 近 7 天学习时长（从 6 天前到今天） */
function last7Days(dailyStudyTime) {
    var _a;
    const labels = ['日', '一', '二', '三', '四', '五', '六'];
    const out = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = (0, plan_1.todayStr)(d);
        out.push({ date: key, label: labels[d.getDay()], seconds: (_a = dailyStudyTime[key]) !== null && _a !== void 0 ? _a : 0 });
    }
    return out;
}
/** 累计学过的词数（不含入门测试跳过的） */
function totalLearned(store) {
    return Object.values(store.words).filter((r) => r.seen && !r.testSkipped).length;
}
/** 框架练习正确率 */
function frameworkAccuracy(store) {
    const recs = Object.values(store.framework);
    const attempts = recs.reduce((s, r) => s + r.attempts, 0);
    if (attempts === 0)
        return 0;
    return recs.reduce((s, r) => s + r.correct, 0) / attempts;
}
/** 听辨正确率 */
function listeningAccuracy(store) {
    if (store.listening.totalAttempts === 0)
        return 0;
    return store.listening.correctCount / store.listening.totalAttempts;
}
/** 连续听力理解正确率 */
function passageAccuracy(store) {
    if (store.passage.totalAttempts === 0)
        return 0;
    return store.passage.correctCount / store.passage.totalAttempts;
}
/** 有过练习记录的关卡数（含未通关的） */
function totalPlayedLevels(store) {
    return Object.keys(store.plan.levels).length;
}
/**
 * 单次记账的上限（秒）。
 *
 * 原先只有下限（elapsed > 5）没有上限，而 startTime 只在 onLoad/onShow 重置——
 * 手机锁屏、切走 App、微信在后台被杀，onHide 都可能不触发，startTime 就停在
 * 几小时前，之后某次 onUnload 把这一大段一次性记进去。再叠加"时间记在记账
 * 那一刻的日期"（addStudyTime 用 todayStr()），昨天挂着的幽灵时长全算到今天，
 * 于是单日冒出 26 小时这种不可能的数。
 *
 * 现在计时改成心跳累加（见 store/index.startStudyTimer）：每 15 秒记那 15 秒，
 * 中途被挂起时间隔会异常，直接丢弃。这个上限是第二道防线，兼容老的调用路径。
 */
exports.MAX_SESSION_SECONDS = 300;
/** 单日上限：24 小时是物理边界，超过必然是 bug 产物 */
exports.MAX_DAILY_SECONDS = 24 * 3600;
/** 把一段学习时长累加进 stats */
function addStudyTime(stats, seconds) {
    var _a;
    const sec = Math.max(0, Math.min(Math.floor(seconds) || 0, exports.MAX_SESSION_SECONDS));
    if (sec <= 0)
        return stats;
    const key = (0, plan_1.todayStr)();
    const cur = (_a = stats.dailyStudyTime[key]) !== null && _a !== void 0 ? _a : 0;
    const next = Math.min(cur + sec, exports.MAX_DAILY_SECONDS);
    return {
        ...stats,
        // 单日被截断时总时长也只加实际计入的那部分，两个数才对得上
        totalStudyTime: stats.totalStudyTime + (next - cur),
        dailyStudyTime: { ...stats.dailyStudyTime, [key]: next },
    };
}
/**
 * 修复历史数据里不可能的时长。
 *
 * 老版本记出过单日 20+ 小时的值，这些是上面那个 bug 的产物、无法还原成真实值。
 * 这里只做物理边界上的截断（单日 ≤ 24h），并把总时长压到不超过各日之和——
 * 不去猜"合理值"替用户改数，超出物理可能的部分才动。
 */
function sanitizeStats(stats) {
    const daily = {};
    let sum = 0;
    for (const [k, v] of Object.entries((stats && stats.dailyStudyTime) || {})) {
        const s = Math.max(0, Math.min(Math.floor(v) || 0, exports.MAX_DAILY_SECONDS));
        daily[k] = s;
        sum += s;
    }
    const total = Math.max(0, Math.floor((stats && stats.totalStudyTime) || 0));
    return { ...stats, dailyStudyTime: daily, totalStudyTime: Math.min(total, sum) };
}

});

__def("shared/utils/store", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStore = defaultStore;
const plan_1 = require("./plan");
function defaultStore() {
    return {
        words: {},
        framework: {},
        shadowing: { totalAttempts: 0, bestAccuracy: 0, practicedWords: [], history: [] },
        listening: { totalAttempts: 0, correctCount: 0, history: [] },
        passage: { totalAttempts: 0, correctCount: 0, completed: [], history: [] },
        dialogue: { totalTurns: 0, practiced: [], history: [] },
        customPassages: [],
        assessment: {
            completed: false,
            testDate: null,
            sampleSize: 0,
            knownCount: 0,
            masteryRatio: 0,
        },
        plan: {
            startDate: (0, plan_1.todayStr)(),
            calendarDay: 1,
            planDay: 1,
            currentPhase: 1,
            phaseReady: false,
            levels: {},
            cleared: [],
            lastClearedDate: null,
            activeLevel: 1,
            mode: 'training',
            // 当天的单词目标快照，见 store/index.resolveWordTarget
            dayTarget: null,
            // 入门测试定出的学习起点（词频 rank），0 = 从最常用的词开始
            startRank: 0,
            // 当天新学的词，供自由复习用，见 store/index.recordTodayNew
            todayNew: null,
            // 起点自动校准的状态，见 store/index.recordNewWordResult
            calib: { recent: [], skipped: 0, lastSkip: 0, lastDate: null },
        },
        stats: {
            totalStudyTime: 0,
            dailyStudyTime: {},
            totalWordsLearned: 0,
            totalFrameworkAttempts: 0,
            totalShadowingAttempts: 0,
            averageShadowingAccuracy: 0,
        },
        settings: {
            autoSpeak: true,
            speechRate: 1.0,
            preferredVoice: null,
            // 单词改成四模式串联（翻卡→听写→语境→听辨）后，每个词约 45 秒、
            // 是原来单模式的四倍，原先按 10 秒/词配的 20 新词 + 180 上限已不成立：
            // 模拟 300 天，峰值 120 词 ≈ 106 分钟，有 69 天超过 1.5 小时。
            dailyNewWords: 12,
            // 60 太紧：SRS 阶梯有 8 级，每个词一生要复习 8 次，稳态复习负荷
            // ≈ 新词速率 × 8 = 96/天，必然撞破 60。而一旦到期量超过上限，
            // computeNewCount 会把新词一刀砍到 0——模拟 300 天有 129 天发不出新词，
            // 1902 个词只学得到 1549 个，词库根本发不完。
            // 提到 100（≈ 8 × dailyNewWords）后 300 天可以学完全部 1902 词。
            // 上限仍然保留，断更后的积压依旧顺延，不会全砸在回来那天。
            maxReviewPerDay: 100,
            notificationEnabled: false,
            notificationTime: '20:00',
            // 起点自动校准：新词太简单时自动往后跳，见 store/index.recordNewWordResult
            autoCalibrate: true,
        },
    };
}

});

__def("shared/utils/migrate", function (module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateStore = migrateStore;
const store_1 = require("./store");
const plan_1 = require("./plan");
const stats_1 = require("./stats");
/**
 * 布尔完成度转计数。旧数据只知道"做过"，不知道做了几个，
 * 所以 true 折算成一个大数（视为已达标），false 折算成 0——
 * 宁可把过去的努力算足，也别让用户回来发现旧关卡凭空退回未完成。
 */
const DONE_ENOUGH = 9999;
function toCounts(c) {
    // 对话是后加的任务：老关卡若四项都做完了（即已通关），
    // 把 dialogue 也置为已达标——总不能因为新增了任务，
    // 就让用户已经通关的旧关卡凭空退回未完成。没通关的置 0。
    const wasCleared = Boolean(c.words && c.framework && c.shadowing && c.listening);
    return {
        words: c.words ? DONE_ENOUGH : 0,
        framework: c.framework ? DONE_ENOUGH : 0,
        shadowing: c.shadowing ? DONE_ENOUGH : 0,
        listening: c.listening ? DONE_ENOUGH : 0,
        dialogue: wasCleared ? DONE_ENOUGH : 0,
    };
}
/**
 * 给 v2 存档（有 planDay，但没 dialogue 字段）的关卡完成记录补上 dialogue。
 *
 * 不补的后果是硬 bug：completeTask 会算 `cur.dialogue + amount` = NaN，
 * 该关的对话任务永远做不满、卡死通关。
 * 已通关的关卡补 DONE_ENOUGH（回刷时不显示为未完成），其余补 0。
 */
function backfillDialogue(levels, cleared) {
    var _a, _b, _c, _d, _e;
    const out = {};
    for (const [k, c] of Object.entries(levels)) {
        const level = Number(k);
        out[level] = {
            words: (_a = c.words) !== null && _a !== void 0 ? _a : 0,
            framework: (_b = c.framework) !== null && _b !== void 0 ? _b : 0,
            shadowing: (_c = c.shadowing) !== null && _c !== void 0 ? _c : 0,
            listening: (_d = c.listening) !== null && _d !== void 0 ? _d : 0,
            dialogue: (_e = c.dialogue) !== null && _e !== void 0 ? _e : (cleared.includes(level) ? DONE_ENOUGH : 0),
        };
    }
    return out;
}
/** 是否是尚未迁移的旧存档 */
function isLegacy(plan) {
    return (typeof plan === 'object' &&
        plan !== null &&
        !('planDay' in plan) &&
        ('currentDay' in plan || 'dailyCompleted' in plan));
}
/**
 * 把任意版本的存档补齐成当前结构。
 * 原则：宁可保守（进度算少一点），也不能凭空多给通关数。
 */
/** 历代出厂默认值——只有还停在这些数上的存档才跟着调 */
var LEGACY_DAILY_NEW = [20];
var LEGACY_MAX_REVIEW = [180, 60];
/**
 * 迁移设置项：只有值仍等于某一代出厂默认时才跟着调，用户自己调过的数字不动。
 *
 * 20/180 → 单词改四模式串联后每词耗时翻四倍，那套数会让峰值到 106 分钟。
 * 60 → 太紧：稳态复习负荷 ≈ 新词速率 × 8 = 96/天，撞破上限后新词被砍到 0，
 *      300 天里有 129 天一个新词都发不出、1902 个词学不完。
 */
function migrateSettings(base, raw) {
    var merged = { ...base, ...(raw || {}) };
    if (LEGACY_DAILY_NEW.indexOf(merged.dailyNewWords) >= 0) merged.dailyNewWords = base.dailyNewWords;
    if (LEGACY_MAX_REVIEW.indexOf(merged.maxReviewPerDay) >= 0) merged.maxReviewPerDay = base.maxReviewPerDay;
    return merged;
}
/**
 * 把旧存档里 testSkipped 的词转成正常的 SRS 记录。
 *
 * 入门测试答"认识"的词过去被标成 testSkipped，代价是全方位的：
 * 永不进入复习队列、永久算作"已巩固"（Phase 1 的 300 词门槛最多 100 个是白送的）、
 * 还被排除在跟读/听辨素材之外。而它们从来没被真正考过——那只是一次自评。
 *
 * 转换落在 stage 3（= RETAINED_STAGE）而不是 0：
 * · 落 0 等于否定用户的自评，巩固率会当场从 65% 掉到个位数，进度凭空倒退；
 * · 落 3 表示"暂且信你"，它们仍算已巩固，但从此进入复习轮转，
 *   哪天答错了才掉回 0。数字变诚实是靠抽查兑现的，不是靠一次性清零。
 *
 * due 摊到未来两周，避免上百个词在同一天集体到期。
 * 转换后不再有 testSkipped 记录，重复执行是幂等的。
 */
function convertTestSkipped(words, calendarDay) {
    const out = {};
    let i = 0;
    for (const [key, r] of Object.entries(words || {})) {
        if (!r || !r.testSkipped) {
            out[key] = r;
            continue;
        }
        out[key] = {
            ...r,
            testSkipped: false,
            seen: true,
            stage: plan_1.RETAINED_STAGE,
            box: Math.max(r.box || 1, 3),
            due: calendarDay + 1 + (i % 14),
        };
        i++;
    }
    return out;
}
function migrateStore(raw) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const base = (0, store_1.defaultStore)();
    const merged = {
        ...base,
        ...raw,
        // 这几个是后加的字段，旧存档里没有，用默认值兜底
        passage: { ...base.passage, ...((_a = raw.passage) !== null && _a !== void 0 ? _a : {}) },
        dialogue: { ...base.dialogue, ...((_b = raw.dialogue) !== null && _b !== void 0 ? _b : {}) },
        customPassages: (_c = raw.customPassages) !== null && _c !== void 0 ? _c : [],
        // 老版本的计时 bug 记出过单日 20+ 小时，这里截断到物理可能的范围
        stats: (0, stats_1.sanitizeStats)({ ...base.stats, ...((_d = raw.stats) !== null && _d !== void 0 ? _d : {}) }),
        settings: migrateSettings(base.settings, (_e = raw.settings) !== null && _e !== void 0 ? _e : undefined),
        assessment: { ...base.assessment, ...((_f = raw.assessment) !== null && _f !== void 0 ? _f : {}) },
        plan: base.plan,
    };
    const rawPlan = raw.plan;
    // 入门测试跳过的词转成正常 SRS 记录（见 convertTestSkipped）。
    // 要在 plan 重建之前拿到 calendarDay，因此这里单独算一次。
    merged.words = convertTestSkipped(raw.words, (0, plan_1.calculateCalendarDay)((rawPlan && rawPlan.startDate) || base.plan.startDate));
    if (isLegacy(rawPlan)) {
        const startDate = (_g = rawPlan.startDate) !== null && _g !== void 0 ? _g : base.plan.startDate;
        // 旧的 dailyCompleted 按日期存，新的按关卡号存。
        // 按日期先后把完成过的天依次映射成第 1、2、3… 关。
        const dates = Object.keys((_h = rawPlan.dailyCompleted) !== null && _h !== void 0 ? _h : {}).sort();
        const levels = {};
        const cleared = [];
        dates.forEach((d, i) => {
            var _a;
            const c = (_a = rawPlan.dailyCompleted) === null || _a === void 0 ? void 0 : _a[d];
            if (!c)
                return;
            const level = i + 1;
            levels[level] = toCounts(c);
            // 只把"四项全做完"的天算作已通关，避免白送进度
            if (c.words && c.framework && c.shadowing && c.listening)
                cleared.push(level);
        });
        // 关卡不设上限，直接接着已通关数往下走
        const planDay = cleared.length + 1;
        merged.plan = {
            startDate,
            calendarDay: (0, plan_1.calculateCalendarDay)(startDate),
            planDay,
            // 阶段一律回落到 1，由 applyPhaseGate 按巩固词数/巩固率重新判定：
            // 旧存档的 currentPhase 是按关卡号推的，那把尺子已经废弃了
            currentPhase: 1,
            phaseReady: false,
            levels,
            cleared,
            // 旧存档没有这个概念，置空表示"今天还没通关"，不平白卡住用户
            lastClearedDate: null,
            activeLevel: planDay,
            mode: (_j = rawPlan.mode) !== null && _j !== void 0 ? _j : 'training',
            dayTarget: null,
            todayNew: null,
            startRank: 0,
            calib: { recent: [], skipped: 0, lastSkip: 0, lastDate: null },
        };
        return merged;
    }
    // 已是新结构：补齐可能缺失的字段
    const p = (rawPlan !== null && rawPlan !== void 0 ? rawPlan : {});
    const startDate = (_k = p.startDate) !== null && _k !== void 0 ? _k : base.plan.startDate;
    const planDay = (_l = p.planDay) !== null && _l !== void 0 ? _l : 1;
    const cleared = (_m = p.cleared) !== null && _m !== void 0 ? _m : [];
    merged.plan = {
        startDate,
        calendarDay: (0, plan_1.calculateCalendarDay)(startDate),
        planDay,
        currentPhase: (_o = p.currentPhase) !== null && _o !== void 0 ? _o : 1,
        phaseReady: (_p = p.phaseReady) !== null && _p !== void 0 ? _p : false,
        // 关卡完成记录补 dialogue 字段——不补会让 completeTask 算出 NaN、卡死通关
        levels: backfillDialogue(((_q = p.levels) !== null && _q !== void 0 ? _q : {}), cleared),
        cleared,
        lastClearedDate: (_r = p.lastClearedDate) !== null && _r !== void 0 ? _r : null,
        activeLevel: (_s = p.activeLevel) !== null && _s !== void 0 ? _s : planDay,
        mode: (_t = p.mode) !== null && _t !== void 0 ? _t : 'training',
        // migrate 每次启动都重建整个 plan，不显式带上就会把这两个字段抹掉
        dayTarget: p.dayTarget || null,
        todayNew: p.todayNew || null,
        startRank: p.startRank || 0,
        calib: p.calib || { recent: [], skipped: 0, lastSkip: 0, lastDate: null },
    };
    return merged;
}

});

__def("store/index", function (module, exports, require) {
"use strict";
// 全局状态管理工具：页面通过此模块读写学习数据。
// 封装 getApp() 调用，提供类型安全的高层接口。
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStore = getStore;
exports.updateStore = updateStore;
exports.setStore = setStore;
exports.resetStore = resetStore;
exports.hasStore = hasStore;
exports.createInitialStore = createInitialStore;
exports.refreshStore = refreshStore;
exports.completeLevelTask = completeLevelTask;
exports.recordStudyTime = recordStudyTime;
exports.startStudyTimer = startStudyTimer;
exports.stopStudyTimer = stopStudyTimer;
exports.updateWordRecord = updateWordRecord;
exports.recordNewWordResult = recordNewWordResult;
exports.recordTodayNew = recordTodayNew;
exports.getTodayNewWords = getTodayNewWords;
exports.getTodayWordQueue = getTodayWordQueue;
exports.getTodayTargets = getTodayTargets;
exports.getActiveLevelCompletion = getActiveLevelCompletion;
exports.canPlayCurrentLevel = canPlayCurrentLevel;
exports.getDueReviewCount = getDueReviewCount;
exports.getSettings = getSettings;
exports.updateSettings = updateSettings;
const store_1 = require("../shared/utils/store");
const plan_1 = require("../shared/utils/plan");
const srs_1 = require("../shared/utils/srs");
const words_1 = require("../shared/data/words");
const stats_1 = require("../shared/utils/stats");
/** 获取 app 实例 */
function app() {
    return getApp();
}
/** 获取当前存档 */
function getStore() {
    return app().getStore();
}
/** 更新存档（函数式更新 + 自动持久化） */
function updateStore(updater) {
    app().updateStore(updater);
}
/** 设置全新存档 */
function setStore(store) {
    app().setStore(store);
}
/** 重置存档 */
function resetStore() {
    app().resetStore();
}
/** 是否已有存档（决定是否显示入门测试引导） */
function hasStore() {
    return getStore() !== null;
}
/**
 * 创建初始存档（入门测试完成后调用）。
 * @param knownWords 入门测试中认识的词列表
 * @param sampleSize 抽样大小
 */
function createInitialStore(knownWords, sampleSize, startRank) {
    const store = (0, store_1.defaultStore)();
    // 不再把答"认识"的词写成 testSkipped。那个标记的代价远大于收益：
    // 被标记的词永久算作"已巩固"（Phase 1 的 300 词门槛最多 100 个是白送的）、
    // 巩固率虚高、还被排除在跟读/听辨素材之外。而它省下的学习时间，
    // 在 100 题的版本里也只有你最先学的 100 个词里的约 5 个。
    //
    // 现在测试的产出是 startRank：一个排序起点，没有任何词被跳过或被算作已会。
    store.plan.startRank = startRank || 0;
    store.assessment = {
        completed: true,
        testDate: (0, plan_1.todayStr)(),
        sampleSize,
        knownCount: knownWords.length,
        masteryRatio: sampleSize > 0 ? knownWords.length / sampleSize : 0,
    };
    store.plan.calendarDay = 1;
    store.plan.startDate = (0, plan_1.todayStr)();
    setStore(store);
    return store;
}
/**
 * 刷新存档（每次进入页面时调用）。
 * 更新真实天数、阶段判定、维持模式。
 */
function refreshStore() {
    const store = getStore();
    if (!store)
        return;
    const fresh = (0, srs_1.hasFreshWords)(words_1.WORDS, store.words);
    updateStore((s) => ({
        ...s,
        plan: (0, plan_1.refreshPlan)(s, fresh),
    }));
    // 补判通关：目标是浮动的，可能在"没有任何练习单元可做"的时刻才达标，
    // 那时 completeTask 不会再被调用，只能靠这里把关卡结掉（见 plan.settleLevel）
    const target = getTodayTargets();
    updateStore((s) => ({
        ...s,
        plan: (0, plan_1.settleLevel)(s.plan, target),
    }));
}
/**
 * 今日单词目标（按天快照，写在 plan.dayTarget 里）。
 *
 * 两个坑一起填：
 *
 * 1. 关卡完成量是跨天累加的，而单词配额是按天算的。直接拿"今天的配额"当目标，
 *    昨天做了 27 个、今天到期 15 个时 remaining = 27 - 27 = 0，
 *    今天这 15 个到期词一个都做不了 —— SRS 就这么烂掉。
 *    所以目标 = 这一关已做的量 + 今天还该做的量。
 *
 * 2. 原先每次调用都实时重算，而配额会随着你做题一路下滑（复习完的词
 *    当天不再到期），于是首页出现"27/12"这种完成量大于目标的反常显示。
 *    按 日期+关卡 快照，当天就不再动。
 */
function resolveWordTarget() {
    var _a;
    const store = getStore();
    const today = (0, plan_1.todayStr)();
    const level = store.plan.activeLevel;
    const snap = store.plan.dayTarget;
    if (snap && snap.date === today && snap.level === level)
        return snap.words;
    const quota = (0, srs_1.getWordQuota)(words_1.WORDS, store.words, store.plan.calendarDay, store.settings.dailyNewWords, store.settings.maxReviewPerDay);
    const done = ((_a = store.plan.levels[level]) === null || _a === void 0 ? void 0 : _a.words) || 0;
    const words = done + quota;
    updateStore((s) => ({
        ...s,
        plan: { ...s.plan, dayTarget: { date: today, level, words } },
    }));
    return words;
}
/**
 * 完成一项任务并记录到当前关卡。
 * @param key 任务类型
 * @param amount 完成量
 */
function completeLevelTask(key, amount = 1) {
    const store = getStore();
    if (!store)
        return;
    const wordTarget = resolveWordTarget();
    updateStore((s) => ({
        ...s,
        plan: (0, plan_1.completeTask)(s.plan, s.plan.activeLevel, key, amount, wordTarget),
    }));
}
/** 记录学习时长 */
function recordStudyTime(seconds) {
    updateStore((s) => ({
        ...s,
        stats: (0, stats_1.addStudyTime)(s.stats, seconds),
    }));
}
/**
 * 学习计时：心跳累加。
 *
 * 老做法是"进页面记 startTime、离开时把 now - startTime 一次性记进去"。
 * 问题是 startTime 只在 onLoad/onShow 重置，而锁屏、切走 App、微信在后台
 * 被杀，onHide 都可能不触发——startTime 停在几小时前，之后某次 onUnload
 * 把这一大段全记进去，于是出现单日 26 小时这种不可能的数。
 *
 * 现在每 TICK 秒记一次那 TICK 秒。被挂起时定时器不走（或走得不准），
 * 恢复后两次心跳的间隔会明显偏大，那一段直接丢弃不计。
 * 这样漏掉任何生命周期回调，最多少记一个心跳，绝不会多记。
 */
const TICK_SECONDS = 15;
let _tickTimer = null;
let _lastTick = 0;
function tickOnce() {
    const now = Date.now();
    const delta = Math.floor((now - _lastTick) / 1000);
    _lastTick = now;
    // 只认接近一个心跳的间隔；偏大说明中间被挂起过，那段不是学习时间
    if (delta > 0 && delta <= TICK_SECONDS * 2)
        recordStudyTime(delta);
}
/** 进入学习页面时调用 */
function startStudyTimer() {
    stopStudyTimer();
    if (!hasStore())
        return;
    _lastTick = Date.now();
    _tickTimer = setInterval(tickOnce, TICK_SECONDS * 1000);
}
/** 离开学习页面时调用；会补记最后不足一个心跳的零头 */
function stopStudyTimer() {
    if (_tickTimer) {
        clearInterval(_tickTimer);
        _tickTimer = null;
        tickOnce();
    }
}
/**
 * 起点自动校准。
 *
 * 入门测试只有 40 道选择题、量的是"再认"，而 app 教到的标准是产出
 * （听写要拼出来、语境要填对词形）。用户每天在单词模块做几十个词的四步测验，
 * 那才是量对了东西的数据——一周的真实表现比任何入门测试都准。
 *
 * 规则：最近 CALIB_WINDOW 个**新词**里"四步零失误通过"的比例超过 CALIB_TARGET，
 * 说明这批材料对你太简单，把起点往后跳；跳幅正比于超出目标多少，
 * 越接近目标跳得越小（经典自适应步长），跳完清空窗口、重新取证。
 *
 * 实测（每天 12 个新词）：真实水平在第 900 个词的用户，测试落到 615，
 * 第 7 天走到 859、第 14 天 943，一次性多学 125 个已会的词——
 * 只靠测试不校准的话这个数是 285，而且永远修不回来。
 *
 * 只往后跳、不往前退：跳过头的词仍留在队列后面会轮到（startRank 只是重排序，
 * 不是排除），代价可控；而往前退会让人反复学同一批词，体验更差。
 */
const CALIB_WINDOW = 20;
const CALIB_TARGET = 0.75;
const CALIB_MAX_JUMP = 400;
let _sortedByRank = null;
function sortedByRank() {
    if (!_sortedByRank)
        _sortedByRank = [...words_1.WORDS].sort((a, b) => a.rank - b.rank);
    return _sortedByRank;
}
/**
 * 记一个新词的结果。只有新词参与——复习词的表现反映的是记忆保持，
 * 跟"这批材料是不是太简单"无关。
 *
 * @param cleanPass 四步全对（零失误）才算 true
 */
function recordNewWordResult(cleanPass) {
    const store = getStore();
    if (!store || store.settings.autoCalibrate === false)
        return;
    const list = sortedByRank();
    updateStore((s) => {
        var _a;
        const calib = (_a = s.plan.calib) !== null && _a !== void 0 ? _a : { recent: [], skipped: 0, lastSkip: 0, lastDate: null };
        const recent = [...calib.recent, cleanPass ? 1 : 0].slice(-CALIB_WINDOW);
        if (recent.length < CALIB_WINDOW)
            return { ...s, plan: { ...s.plan, calib: { ...calib, recent } } };
        // 窗口满了就评判一次，然后**无论跳不跳都清空**，下次重新取证。
        // 早先是滑动窗口、每做完一个词都查一次，等于用重叠的样本反复抽奖：
        // 真实零失误率只有 50% 的人，200 个词里也会误触发 0.28 次（60% 时 1.45 次）。
        // 改成不重叠分块后降到 0.06 / 0.50 次，而该跳的情形几乎不受影响
        // （85% 时 8.89 → 8.28 次，95% 时 9.97 → 9.97 次）。
        const rate = recent.reduce((a, b) => a + b, 0) / recent.length;
        if (rate <= CALIB_TARGET)
            return { ...s, plan: { ...s.plan, calib: { ...calib, recent: [] } } };
        // 起点往后跳。startRank 存的是 rank 值而不是下标，所以要在排好序的
        // 列表里找到当前位置、前进 jump 个位置、再取那个词的 rank
        const jump = Math.min(CALIB_MAX_JUMP, Math.round((rate - CALIB_TARGET) / (1 - CALIB_TARGET) * CALIB_MAX_JUMP));
        if (jump <= 0)
            return { ...s, plan: { ...s.plan, calib: { ...calib, recent } } };
        let at = list.findIndex((w) => w.rank >= (s.plan.startRank || 0));
        if (at < 0)
            at = 0;
        const next = Math.min(list.length - 1, at + jump);
        if (next <= at)
            return { ...s, plan: { ...s.plan, calib: { ...calib, recent } } };
        return {
            ...s,
            plan: {
                ...s.plan,
                startRank: list[next].rank,
                calib: {
                    recent: [], // 跳完重新取证，别拿旧窗口连着跳
                    skipped: calib.skipped + (next - at),
                    lastSkip: next - at,
                    lastDate: (0, plan_1.todayStr)(),
                },
            },
        };
    });
}
/**
 * 记下"今天新学的词"，供当天的自由复习用（不计任务、不动 SRS）。
 * 跨天自动清空——这个列表的意义就是"今天刚学的"。
 */
function recordTodayNew(en) {
    const today = (0, plan_1.todayStr)();
    updateStore((s) => {
        var _a;
        const cur = (_a = s.plan.todayNew) !== null && _a !== void 0 ? _a : { date: today, words: [] };
        const words = cur.date === today ? cur.words : [];
        if (words.indexOf(en) >= 0)
            return s;
        return { ...s, plan: { ...s.plan, todayNew: { date: today, words: [...words, en] } } };
    });
}
/** 今天新学的词（跨天视为空） */
function getTodayNewWords() {
    const store = getStore();
    if (!store || !store.plan.todayNew)
        return [];
    return store.plan.todayNew.date === (0, plan_1.todayStr)() ? store.plan.todayNew.words : [];
}
/** 更新单词记录（答题后） */
function updateWordRecord(en, correct) {
    const store = getStore();
    const key = en.toLowerCase();
    const oldRecord = (0, srs_1.getRecord)(store.words, key);
    const newRecord = (0, srs_1.reviewWord)(oldRecord, correct, store.plan.calendarDay);
    updateStore((s) => ({
        ...s,
        words: { ...s.words, [key]: newRecord },
    }));
    return newRecord;
}
/** 获取今日单词队列 */
function getTodayWordQueue() {
    const store = getStore();
    if (!store)
        return { queue: [], deferredCount: 0, newCount: 0, reviewCount: 0 };
    // 纯读取，不再写回任何东西——buildQueue 以前会把超出上限的到期词
    // 顺延成 due+1 并写回存档，那个副作用会让同一天里 getWordQuota
    // 前后算出两个不同的目标，并且把"欠债时暂停新词"的保护绕过去
    return (0, srs_1.buildQueue)(words_1.WORDS, store.words, store.plan.calendarDay, store.settings.dailyNewWords, store.settings.maxReviewPerDay, store.plan.startRank);
}
/** 获取今日任务目标 */
function getTodayTargets() {
    const store = getStore();
    return (0, plan_1.getDailyTarget)(store.plan.currentPhase, store.plan.mode, resolveWordTarget());
}
/** 获取当前关卡的完成情况 */
function getActiveLevelCompletion() {
    const store = getStore();
    return store.plan.levels[store.plan.activeLevel];
}
/** 是否可以闯当前关 */
function canPlayCurrentLevel() {
    const store = getStore();
    return (0, plan_1.canPlayActiveLevel)(store.plan);
}
/** 获取到期复习词数 */
function getDueReviewCount() {
    const store = getStore();
    if (!store)
        return 0;
    return (0, srs_1.getDueCount)(store.words, store.plan.calendarDay);
}
/** 获取设置项 */
function getSettings() {
    const store = getStore();
    return store.settings;
}
/** 更新设置项 */
function updateSettings(partial) {
    updateStore((s) => ({
        ...s,
        settings: { ...s.settings, ...partial },
    }));
}

});

})(typeof window !== 'undefined' ? window : globalThis);
