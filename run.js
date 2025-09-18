//#region 变量
callDotNet({ type: 'unreload' })
var searchs = new URLSearchParams(location.search);
var channel_uid = searchs.get('channel_uid')
var selectchange = "config.value = config.list.indexOf(select.value);config.displayText=='换装' && changepro('att');savesetting();";

var tabConfig = [
    {
        id: "tabmain",
        title: "主选",
        active: true
    },
    {
        id: "tabzhandou",
        title: "战斗"
    },
    {
        id: "tabxilian",
        title: "洗炼"
    },
    {
        id: "tabautoget",
        title: "领取"
    },
    {
        id: "tabother",
        title: "其他"
    },
];
var initvalue = [
    { "name": "玛雅大陆", "list": [{ "fbid": 1058, "name": "森林深处" }, { "fbid": 1011, "name": "骷髅洞3层" }, { "fbid": 1018, "name": "采矿所2层" }, { "fbid": 1019, "name": "尸王殿" }, { "fbid": 1021, "name": "盟重沙漠" }, { "fbid": 1027, "name": "生死之间" }, { "fbid": 1031, "name": "死亡棺材" }, { "fbid": 1034, "name": "沃玛寺庙3层" }, { "fbid": 1038, "name": "石墓3层" }, { "fbid": 1042, "name": "石墓7层" }, { "fbid": 1051, "name": "祖玛大殿" }, { "fbid": 1056, "name": "峡谷广场" }, { "fbid": 1061, "name": "恶魔祭坛" }, { "fbid": 1062, "name": "赤月巢穴" }, { "fbid": 4006, "name": "魔龙旧寨" }, { "fbid": 4008, "name": "魔龙岭" }, { "fbid": 4010, "name": "魔龙谷" }, { "fbid": 4012, "name": "魔龙血域" }, { "fbid": 4102, "name": "火龙地带" }, { "fbid": 4103, "name": "火龙巢穴" }, { "fbid": 4104, "name": "火龙神殿" }] }, { "name": "苍月岛", "list": [{ "fbid": 2105, "name": "寂静之森" }, { "fbid": 2201, "name": "恶灵之地" }, { "fbid": 2204, "name": "尸魔洞3层" }, { "fbid": 2304, "name": "骨魔洞3层" }, { "fbid": 2306, "name": "骨魔洞5层" }, { "fbid": 2404, "name": "牛魔寺3层" }, { "fbid": 2408, "name": "牛魔大殿" }, { "fbid": 2421, "name": "狐月桃林" }, { "fbid": 2424, "name": "镇狐塔3层" }, { "fbid": 2426, "name": "狐月秘境" }, { "fbid": 2429, "name": "狐月神殿" }] }, { "name": "卧龙山庄", "list": [{ "fbid": 4209, "name": "卧龙岗哨" }, { "fbid": 4203, "name": "废弃船遗" }, { "fbid": 4205, "name": "卧龙矿坑" }, { "fbid": 4207, "name": "矿坑底部" }, { "fbid": 4225, "name": "卧龙禁地" }, { "fbid": 4211, "name": "卧龙庄门" }, { "fbid": 4216, "name": "炼药房" }, { "fbid": 4215, "name": "练功房" }, { "fbid": 4219, "name": "演武场" }, { "fbid": 4222, "name": "藏宝室" }, { "fbid": 4221, "name": "后院" }, { "fbid": 4223, "name": "山庄内院" }, { "fbid": 4224, "name": "庄主居所" }] }
];
// 配置数据结构
var configData = {
    wwc: { value: 0, displayText: "竞技场", tab: "main" },
    kfwwc: { value: 0, displayText: "跨服33", change: selectchange, list: ["禁用", "单人", "组队"] },
    kfwwc1: { value: "", displayText: "队友", text: "config.value = txt.value" },
    qiyu: { value: 1, displayText: "奇遇" },
    //"金青云山","金玉龙湖","银梅花岭","银飞鹤峰","银紫薇城","铜龙泉寺","铜金陵郡","铜银河渡","铜碧水镇","铜灵石岛","铜霜雪谷","铜丹阳府"
    huangmo: { value: 1, displayText: "荒漠", tab: "zhandou", change: selectchange, list: ["禁止", "依次占领", "依次金", "依次银", "依次铜"] },
    huangmo1: { value: "", displayText: "进队", tab: "zhandou", text: "config.value = txt.value" },
    mojie: { value: 3, displayText: "魔界", tab: "zhandou", change: selectchange, list: ["禁用", "1", "2", "3"] },
    autowakuang: { value: 0, displayText: "自动挖矿" },
    lunhui: { value: 0, displayText: "轮回" },
    team: { value: 0, displayText: "自动组队" },
    team1: { value: "", displayText: "进队", text: "config.value = txt.value" },
    teammode: { value: 0, displayText: "模式", change: selectchange, list: ["和平", "行会", "全体", "组队"] },
    skzj: { value: 0, displayText: "时空", change: selectchange, list: ["禁用", "1巨锤", "2巨斧", "3狼牙", "4剑盾", "5流星", "6弓箭", "7兽祭", "1钳虫", "2蚁后", "3镰飞蝗", "4人面", "5蝎王", "6剧毒", "7触龙神", "1尸王", "2统领", "3将军", "4骷髅王", "5死祭", "6死灵王", "7时主"] },
    xingyu: { button: "gotoxingyurun(button)", displayText: "星域", list1: ["用领35", "用领20", "用领55", "用领50", "打工20", "打工35", "打工55", "打工50"] },
    xingyuteam: { button: "StardomainCT.ins().roomId <= 0?StardomainCT.ins().reqBuildRoom(StardomainCT.ins().curSelId):StardomainCT.ins().reqInvitePlayer(ActorCC.myName+'开启了星域副本，赶快加入一起战斗吧！' + gettext(\"|E:12,{0},&U:&C:{1}&T:快速加入\", StardomainCT.ins().roomId, 65280))", displayText: "快速组队" },
    liudao: { button: "showsix()", displayText: "六道地图" },
    liudaofollow: { value: 0, displayText: "六道跟随" },
    tfl: { button: "usetfl(button)", displayText: "讨伐令", list1: ["小", "中", "大"] },
    // exp: { button: "changepro('exp')", displayText: "经验装备" },
    // att: { button: "changepro('att')", displayText: "攻击装备" },
    //gameclub: { button: "win.open(GameClubOCWin);", displayText: "游戏圈" },
    //online: { button: "win.open(OnlineTimeAwardWin);", displayText: "在线奖励" },
    //Share: { button: "win.open(WxGameShareWin);", displayText: "微信分享" },
    debugTS: { button: "urlParam.debugTS = !urlParam.debugTS", displayText: "debugTS " },
    // skzj:{value: 0, displayText: "添加时空",button:"addskzj(button)", list1:["巨锤兽人","巨斧牛魔","狼牙兽人","剑盾兽人","流星兽人","弓箭兽人","兽人祭祀","邪恶钳虫","赤月蚁后","镰飞蝗","人面蜘蛛","半兽蝎王","剧毒蜘蛛","触龙神","死灵尸王","骷髅统领","骷髅将军","骷髅王","死灵祭祀","死灵王","时空之主"]},
    // clearskzj: { button: "skzjs=[],document.getElementById('clearskzjinfo').innerText = '';", displayText: "清空时空",info:"" },
    // autologin: { button: "autologin()", displayText: "自动登录" },
    empty: { button: "emptypro(button)", displayText: "一键卸下" },
    xiaohao: { value: 1, displayText: "小号模式" },
    autochange: { value: 0, displayText: "换装", change: selectchange, list: ["禁用", "全局", "血量"] },
    hdinfo: { button: "showhdinfo(button)", displayText: "活动", list1: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    autokillhdboss: { value: 0, displayText: "击杀活动怪" },
    reloadgame: { button: "location.reload();", displayText: "游戏重载" },
    loginout: { button: "loginout()", displayText: "游戏离线" },
    offlinetujian: { value: 0, displayText: "离线刷图鉴" },
    // Rogue: { button: "win.open(RogueAttributeWin)", displayText: "肉鸽" },
    guajifbid: { tab: "zhandou", initvalue: initvalue, displayText: "挂机副本", value: 4221, default: 4221 },
    boss: { value: 0, displayText: "自动挂机", inguaji: 1 },
    tujian: { value: 0, displayText: "智能刷图鉴", inguaji: 1 },
    canyue: { value: 0, displayText: "强制苍月", inguaji: 1 },
    maya: { value: 0, displayText: "玛雅", change: selectchange, list: ["禁用", "后2只", "后4只", "后6只", "全部"], inguaji: 1 },

    tjatt2: { value: 1, displayText: "图鉴生命", inguaji: 1 },
    tjatt3: { value: 1, displayText: "图鉴法力", inguaji: 1 },
    tjatt5: { value: 1, displayText: "图鉴防御", inguaji: 1 },
    tjatt141: { value: 1, displayText: "图鉴攻击", inguaji: 1 },
    tjatt143: { value: 1, displayText: "图鉴道术", inguaji: 1 },
    tjatt145: { value: 1, displayText: "图鉴魔法", inguaji: 1 },
    xilian1: { displayText: "洗炼", tab: "xilian", listtype: ["全技能", "幸运12", "幸运11", "幸运10", "幸运9"], listquality: ["传说", "远古", "神器"], listpos: ["武器", "头盔", "衣服", "项链", "护腕", "腰带", "戒指", "鞋子"], listjob: ["本职业", "全职业"], lvs: [0, 59], maxnum: 10000, value: ["全技能", "传说", "武器", "本职业", "0-59", "10000"] },
    innerguaji: { value: 1, displayText: "开启内挂", tab: 'other' },
    email: { value: 1, displayText: "提取邮件", tab: 'other' },
    autosell: { value: 1, displayText: "卖装备", tab: 'other' },
    autobroke: { value: 1, displayText: "分解技能", tab: 'other' },
    autouse: { value: 1, displayText: "自动使用", tab: 'other' },
    mergel: { value: 1, displayText: "自动合成", tab: 'other' },
    broketuteng: { value: 1, displayText: "分解图腾", tab: 'other' },
    ronglian: { value: 1, displayText: "熔炼矿石", tab: 'other' },
    Bookup: { value: 1, displayText: "图鉴升级", tab: 'autoget' },
    mobai: { value: 1, displayText: "巅峰膜拜", tab: 'autoget' },
    zhushenmobai: { value: 1, displayText: "诸神膜拜", tab: 'autoget' },
    hanghui: { value: 1, displayText: "行会操作", tab: 'other' },
    checkin: { value: 1, displayText: "每日签到", tab: 'autoget' },
    worldgift: { value: 1, displayText: "天下礼包", tab: 'autoget' },
    tequan: { value: 1, displayText: "特权领取", tab: 'autoget' },
    dabiao33: { value: 1, displayText: "33达标", tab: 'autoget' },
    duanwei33: { value: 1, displayText: "33段位", tab: 'autoget' },
    getdayorweek: { value: 1, displayText: "日常领取", tab: 'autoget' },
    zhangling: { value: 1, displayText: "战令领取", tab: 'autoget' },
    duihuangxiuwei: { value: 1, displayText: "兑换修为", tab: 'other' },
    tongtianta: { value: 1, displayText: "通天塔领取", tab: 'autoget' },
    luopan: { value: 1, displayText: "罗盘领取", tab: 'autoget' },
    buybiaoche: { value: 0, displayText: "镖车", tab: 'other', change: selectchange, list: ['禁用', '普通', '高级', '极品'] },
    everyday: { value: 1, displayText: "每日返利", tab: 'autoget' },
    toupiao: { value: 1, displayText: "万界投票", tab: 'other' },
    baoming: { value: 1, displayText: "巅峰赛报名", tab: 'other' },
    lingjing: { value: 1, displayText: "灵境清怪", tab: 'other' },
    autogoldbuy: { value: 1, displayText: "买金币商品", tab: 'autoget' },
    autobuymp: { value: 1, displayText: "自动买蓝", tab: 'other' },
    autochangefullmp: { value: 0, displayText: "切图回蓝", tab: 'other' },
    shabake: { value: 4, displayText: "沙巴克", tab: 'other', change: selectchange, list: ['禁用', '城门', '左城', '右城', '殿前', '皇宫'] },
    tunshi: { value: 1, displayText: "单倍吞噬", tab: 'autoget' },
    autoGot: { value: 1, displayText: "传奇庆典", tab: 'autoget' },
    autorelive: { value: 0, displayText: "自动复活", tab: 'other' },
    shenbingup: { value: 0, displayText: "神兵", change: selectchange, list: ['禁用', '狂风项链', '雷霆之刃'], tab: 'other' },
    reflashtili: { value: 0, displayText: "刷新领", change: selectchange, list: ['禁用', '时空', '任务'], tab: 'other' },

    showmsg: { value: 1, displayText: "统计信息", tab: 'other' },
};
//#region 其他变量
var inmojie = !1;
var inmozhu = !1;
var huanmotime = 0;
if (typeof setting === 'undefined') {
    const newset = Object.entries(configData).reduce((acc, [key, val]) => {
        acc[key] = val.value;
        return acc;
    }, {});
    window.setting = { ...newset, ...JSON.parse(localStorage.getItem('setting' + channel_uid) || '{}') || {} };
}
if (typeof lastweatherType === 'undefined') {
    window.lastweatherType = -1;
}
if (typeof protype === 'undefined') {
    window.protype = '';
}
if (typeof lastweatherenergy === 'undefined') {
    window.lastweatherenergy = -1;
}
window.savetimer = 0;
window.mapopen = !0;
window.outteamlist = [];
window.lastgotoid = '-1';
window.inskzj = 0;
window.skzjs = [];
window.isclearing = !1;
window.clearinfo = '';
window.isxilian = !1;
typeof gotopath == 'undefined' && (window.gotopath = []);
window.lineitems = [];
window.hmscale = 0.485;
var starttime = typeof starttime == 'number' ? starttime : new Date().getTime();
//#endregion
//#endregion

//#region 每分执行一次
async function autoRun() {
    if (typeof BagCT === 'undefined') {
        return;
    }
    if (iskuafu())
        return;

    //#region 单倍吞噬
    setting.tunshi && TunTianEquipSystem.ins().tunsiInfo.length && TunTianEquipSystem.ins().tunsiInfo[0].endtime < GameServerCC.serverTime && TunTianEquipSystem.ins().sendTunsi(2)
    //#endregion

    //#region 内挂,不勾选boss，统计经验效率
    async function autofight() {
        if (!RexueDideCT.ins().isOpenAutoFight) {
            RexueDideCT.ins().sendAutomatichosting(1, 1);
        }
        else if (+RexueDideCT.ins().AutoOverTimeStr.split(':')[0] >= 12 || (RexueDideCT.ins().infos && RexueDideCT.ins().infos[3].value > 200000)) {
            //关闭内挂        
            RexueDideCT.ins().stopAutoBoss()
            RexueDideCT.ins().sendStopAutomatichosting()
            await new Promise(resolve => setTimeout(resolve, 1000));
            RexueDideCT.ins().allBossIdArr = [MainUICC.getMapBossList(1).map(i => i.bossId), [], [], []]
            RexueDideCT.ins().sendAutomatichosting(1, 1);
        }
    }
    setting.innerguaji && autofight();
    //#endregion

    //#region 自动提取邮件
    function MailByReceiveAndRead() {
        var e = MailCT.ins().getMailByReceive();
        if (!e.length) {
            var i = MailCT.ins().getMailByReceiveAndRead();
            if (!i.length)
                return
            for (var n = [], r = 0; r < i.length; r++)
                n.push(i[r].handle);
            return void MailCT.ins().sendGetItem(n)
        }
        for (var l = [], r = 0; r < e.length; r++)
            l.push(e[r].handle);
        MailCT.ins().sendGetItem(l);
    }
    setting.email && MailByReceiveAndRead();
    //#endregion

    //#region 自动回收装备技能书和残卷

    //#region 回收装备
    async function autosell() {
        const lessbag = BagCT.ins().getAllSurplusCount();
        var shopCbPer = BagCT.ins().shopCbPer;
        if (lessbag < 50 || shopCbPer >= 150) {
            while (shopCbPer < 150) {
                BagCT.ins().sendUseCb();
                await new Promise(resolve => setTimeout(resolve, 1000));
                shopCbPer = BagCT.ins().shopCbPer;
            }

            for (let i = 0; i < 4; i++) {
                BagCT.ins().sendCbequip(1, SmeltCC.getEqCbNum2(i, !0, 1))
            }

            if (shopCbPer > 170) {
                var g = SmeltCC.getEqCbNum2(4, !0, 1);
                const targetNames1 = []//getprolist('传说', 59, "武器", "法师");
                const targetNames = []// getprolist([2, 3, 4, 5, 6], [60, 90], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ActorCC.jobId).filter(item => item.supExtAtt.filter(item1 => item1.type == 156 && item1.value > 600).length);
                BagCT.ins().sendCbequip(1, g.filter(item => ![...targetNames, ...targetNames1].includes(item)));
                g = SmeltCC.getEqCbNum2(5, !0, 1);
                BagCT.ins().sendCbequip(1, g.filter(item => item.itemConfig.level < 60));
            }
        }
    }
    setting.autosell && autosell();
    //#endregion

    //#region 分解技能书和残卷
    async function autobroke() {

        const job = SubRoles.ins().getSubRoleByIndex(0).job;
        // 职业映射关系
        const jobMap = [
            [104003, 104006, 104015, 104033, 104017, 104018, 104016], // 战士
            [104001, 104010, 104030, 104028, 104021, 104022, 104023], // 法师
            [104004, 104002, 104012, 104007, 104025, 104014, 104027], // 道士
            [104035, 104036, 104037, 104038, 104039, 104040, 104041], // 刺客
            [104042, 104043, 104044, 104045, 104046, 104047, 104048]  // 弓手
        ];
        // 获取当前职业对应的排除数组
        const excludeNumbers = jobMap[job - 1] || [];
        // 过滤掉当前职业对应的数值
        const filteredNumbers = jobMap.flat().filter(num => !excludeNumbers.includes(num));
        if (SubRoles.ins().getSubRoleByIndex(0).skillsData[0].lv >= 11) {
            filteredNumbers.push(jobMap[job - 1][0]);
        }
        var skillslist = SubRoles.ins().getSubRoleByIndex(0).skillsData.map(item => item.lv - item.supLv);
        const keepnums = [1, 2, 3, 5, 10, 20, 30, 40, 45, 50];
        for (let i = 1; i < skillslist.length; i++) {
            var skillnum = jobMap[job - 1][i];
            if (skillslist[i] >= 10) {
                filteredNumbers.push(skillnum);
            }
            else {
                var neednums = 0;
                for (var j = skillslist[i]; j < keepnums.length; j++) {
                    neednums += keepnums[j];
                }
                var skilldata = BagCT.ins().getBagItemSById(skillnum);
                var skillbooknum = skilldata[0]?.count;
                if (skillbooknum > neednums) {
                    BagCT.ins().sendCbequip(3, skilldata, skillbooknum - neednums);
                }
            }
        }
        var s = []
        for (let i = 0; i < filteredNumbers.length; i++) {
            const num = filteredNumbers[i];
            for (var A = BagCT.ins().getBagItemSById(num), p = 0; p < A.length; p++) {
                s.push(A[p])
            }
        }
        BagCT.ins().sendCbequip(3, s)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const numbers1 = [104101, 104102, 104103, 104104, 104105, 104106, 104107]
        s = []
        for (let i = 0; i < numbers1.length; i++) {
            const num = numbers1[i];
            for (var A = BagCT.ins().getBagItemSById(num), p = 0; p < A.length; p++) {
                s.push(A[p])
            }
        }
        BagCT.ins().sendCbequip(3, s)
    }
    setting.autobroke && autobroke()
    //#endregion

    //#region 自动使用物品
    function autouse() {
        const othenlist = BagCT.ins().bagModel[0];
        const uselist = ['元宝', "魔界宝箱", '神饰碎片', '特戒碎片', '奇遇', '讨伐宝箱ddd', '金条', '3V3', '帮贡', '0精华', "每日宝箱", "占领宝箱", "领主宝箱", "征途礼包", "尸皇宝箱", "石墓宝箱", "牛魔宝箱", "虚空宝箱", "深渊宝箱", "随机符印", "随机神羽碎片", "积分宝箱", "胜利宝箱", "押镖奖励"]
        othenlist.filter(item => {
            for (var nid in uselist)
                item.itemConfig.name.includes(uselist[nid]) && FloatWinCT.ins().onUse(item, item.count)
        })
    }
    setting.autouse && autouse()

    //#endregion

    //#region 自动合并
    // GlobalConfig.MergeConfig
    async function mergel() {
        window.notips = !0;
        var Mergelist = [
            101, 102, 103, 104, 105,    //红药
            201, 202, 203, 204, 205,    //蓝药
            301, 302, 305, 310, 314     //初，中神符碎片,初级祭炼石,至尊宝箱，卷轴宝箱
        ]
        const startNumber = 401;        //传奇或以下的副装
        for (let i = 0; i < 28; i++) {
            Mergelist.push(startNumber + i);
        }
        Mergelist.forEach(async item => {
            var mdata = GlobalConfig.SyntheticConfig[item];
            var id = mdata.cost[0].id, count = mdata.cost[0].count;
            var hasnum = getBagGoodsCountById(id);
            if (hasnum >= count) {
                await BagCT.ins().sendMerge(item, parseInt(hasnum / count));
            }
        })
        setTimeout(() => { window.notips = !1; }, 1e3)
    }
    setting.mergel && mergel();
    //锁定60级远古
    getprolist(5, [60, 69]).map(i => !i.lock && EquipCT.ins().sendEquipLock(i.handle, -1))
    //#endregion

    //#region 自动分解多余图腾
    if (setting.broketuteng) {
        var wearlist = BagCT.ins().bagModel[0].filter(item => item.itemConfig.name.includes('·') && TotemCT.ins().returnIsWearSmallerType(item.configID) && TotemCT.ins().returnIsLowerQualityComItem(item.configID)).map(item => { return { id: item.configID, count: item.count } });
        wearlist.length && BagCT.ins().sendMergeMost(wearlist, 1e6);
    }
    //#endregion

    //#region 自动熔炼矿石
    if (setting.ronglian) {
        var kslist = BagCT.ins().bagModel[0].filter(item => item.itemConfig.id > 10000 && item.itemConfig.id <= 10007 && item.itemConfig.id != 10006);
        kslist.length && BagCT.ins().sendCbequip(2, kslist)
    }
    //#endregion

    //#endregion

    //#region 自动激活图鉴
    function Bookup() {
        for (var oIndex in Book.ins().bookdir) {
            var a = Book.ins().bookdir[oIndex]
            for (var t = 0; t < a.length; t++) {
                var e = GlobalConfig.HandbookConfig
                    , i = GlobalConfig.HandbookListConfig
                    , n = e[oIndex].list
                    , r = n[t]
                    , h = a[t].lv + 1
                    , u = i[r][h] ? i[r][h] : i[r][a[t].lv];
                if (a[t].num >= u.nums) {
                    Book.ins().sendup(oIndex, a[t].listId)
                }
            }
        }
    }
    setting.Bookup && Bookup();
    //#endregion

    //#region 奇遇
    if (setting.qiyu && TaskCT.ins().checkQiyuBossOpen()) {
        var qiyucount = ActorCC.actorID == TaskCT.ins().qiyuBossInfo.touchoffPlayerId ? 3 : 2;
        !TaskCT.ins().qiyuBossInfo.buyTimes && TaskCT.ins().reqByQiyuBossTimes(), qiyucount++;
        var lesstimes = qiyucount - TaskCT.ins().qiyuBossInfo.ackTimes;
        for (var i = 0; i < lesstimes; i++) {
            TaskCT.ins().reqJoinQiyuBoss();
            await new Promise(resolve => setTimeout(resolve, 1000));
            iskuafu() && send(Ts.exitFB)
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
    //#endregion

    //#region 膜拜

    function mobai() {
        if (PeakedSys.ins().worshipNum >= GlobalConfig.PeakRaceBase.mobaiNum)
            return;
        if (!PeakedSys.ins().kfPlayer2Data?.winId)
            return;
        if (BagCT.ins().getAllSurplusCount(1) < 0)
            return;
        PeakedSys.ins().sendWorship();
        PeakedSys.ins().sendWorship();
        PeakedSys.ins().sendWorship();
    }
    setting.mobai && mobai();
    //#endregion

    //#region 轮回
    async function lunhui() {
        var lunhuiLv = LhCT.ins().lv || 0;
        if (lunhuiLv && lunhuiLv < 31) {
            ActorCC.level > GlobalConfig.SamsaraBaseConfig.minLevel && !LhCT.ins().nowExp && LhCT.ins().sendLhUp(1);
            await new Promise(resolve => setTimeout(resolve, 2000));
            const _timeGo = (DateUtils.formatMiniDateTime(LhCT.ins().TimesOut || 0) - GameServerCC.serverTime) / 1e3;
            _timeGo <= 0 && LhCT.ins().nowExp && LhCT.ins().sendLhUp(2);
        }
    }
    setting.lunhui && lunhui();
    //#endregion

    //#region 洗炼

    async function clearEquip() {
        const dhours = (new Date()).getHours()
        if (window.isclearing)
            return;
        //if (window.isclearing || dhours < 1 || dhours > 9)
        //    return;
        window.isclearing = !0;
        var xldata = setting.xilian1
        var maxxilianNum = +xldata[5];
        var neednum = xldata[0] == "全技能" ? 1 : (+xldata[0].replace('幸运'));
        var lvs = xldata[4].split('-').map(i => +i);
        lvs.length < 2 && lvs.unshift(0)
        console.error(new Date().toLocaleString(), '开始洗炼')
        var glist = getprolist(xldata[1], lvs, xldata[2], xldata[3] == '本职业' ? ActorCC.jobId : (void 0));
        var xiliantype = xldata[0] == "全技能" ? 159 : 155;
        var hasluckpro = glist.find(i => getproluckinfo(i.supExtAtt, i.supExtAttQuality, xiliantype)[0] >= neednum);
        if (hasluckpro) {
            clearinfo = '已存在' + xldata[0] + '的' + xldata[1] + xldata[2];
            isxilian = !1;
            window.isclearing = !1;
            return;
        }
        if (glist.length > 0) {
            win.close("ReformWin");
            EquipCT.ins().clearTab = 1;
            EquipCT.ins().clearEquipUid = glist[0].handle;
            win.open("ReformWin");
            const level = glist[0].itemConfig.level;
            const name = glist[0].itemConfig.name;
            const w = GlobalConfig.EquipAffixCostConfig[glist[0].quality]
            var costNums = 0;
            for (var r in w) {
                var I = w[r];
                if (level >= I.interval[0] && level <= I.interval[1]) {
                    costNums = I.costNums;
                    break;
                }
            }
            var nowxilianNum = BagCT.ins().getBagGoodsCountById(BagCT.BAG_TYPE_OTHTER, GlobalConfig.EquipAffixBaseConfig.costItemId);
            var xilianNum = glist[0].xilianNum;
            if (nowxilianNum < maxxilianNum)
                return;
            var luckinfo = getproluckinfo(glist[0].supExtAtt, glist[0].supExtAttQuality, xiliantype);
            var colornum = luckinfo[1];
            var locks = luckinfo[2];
            var colors = luckinfo[3];
            while (xilianNum <= maxxilianNum) {
                if (xilianNum > maxxilianNum / 2 && locks.length < 2 && colornum < 3) {
                    await EquipCT.ins().sendEquipClear(glist[0].handle, 1, 0, colors[0] || 0, colors[1] || 0) //洗炼
                    xilianNum += costNums * (1 << (colors.length > 2 ? 2 : colors.length));
                }
                else {
                    await EquipCT.ins().sendEquipClear(glist[0].handle, 1, 0, locks[0] || 0, locks[1] || 0) //洗炼
                    xilianNum += costNums * (1 << (locks.length > 2 ? 2 : locks.length));
                }
                await new Promise(resolve => setTimeout(resolve, 160));
                var newluckinfo = getproluckinfo(EquipCT.ins().extAttrs, EquipCT.ins().quily, xiliantype);
                var newlucknum = newluckinfo[0];
                var newcolornum = newluckinfo[1];
                var newlocks = newluckinfo[2];
                var newcolors = newluckinfo[3];
                if (newlucknum >= neednum) {
                    EquipCT.ins().sendSaveEquip(glist[0].handle, -1) //保存
                    clearinfo = '已存在' + xldata[0] + '的' + xldata[1] + xldata[2];
                    isxilian = !1;
                    window.isclearing = !1;
                    return;
                }
                else if ((locks.length < newlocks.length && locks.length < 2) || (newcolornum > colornum && colornum < 3)) {
                    await EquipCT.ins().sendSaveEquip(glist[0].handle, -1) //保存
                    colornum = newcolornum;
                    locks = newlocks.slice(0, 2);
                    colors = newcolors;
                    await new Promise(resolve => setTimeout(resolve, 160));
                    // oldinfo = newinfo;
                    // clearinfo = AttributeData.getAttrShowStrNoColor(EquipCT.ins().extAttrs, ":", !1, 0, !0)
                }
                glist[0].xilian = xilianNum
            }
            var gts = BagCT.ins().bagModel[1].find(i => i.handle == glist[0].handle)
            luckinfo = getproluckinfo(gts.supExtAtt, gts.supExtAttQuality, xiliantype);
            colornum = luckinfo[1];
            if (colornum >= 3) {
                glist[0].lock && EquipCT.ins().sendEquipLock(glist[0].handle, -1);//锁定或解锁
                BagCT.ins().sendCbequip(1, [glist[0]]);
            }
            else {
                !glist[0].lock && EquipCT.ins().sendEquipLock(glist[0].handle, -1);//锁定或解锁
            }
        }
        console.error(new Date().toLocaleString(), '结束洗炼')
        win.close("ReformWin");
        window.isclearing = !1;
        clearinfo = '';
    }
    window.isxilian && clearEquip();
    //#endregion

    //#region 行会操作
    async function hanghui() {
        //捐献金币
        GuildStore.ins().sendInfo();
        Guild.ins().sendMyGuildInfo();
        Guild.ins().sendConCount();
        var concount = Guild.ins().getConCount()
        if (concount.length && concount[1]) {
            for (var i = 0; i < 5; i++)
                Guild.ins().sendCon(2), Guild.ins().sendGuildMembers();
        };
        //捐献篝火
        var bonfire = BagCT.ins().getBagItemById(GlobalConfig.GuildConfig.bonfireItem)?.count;
        bonfire && Guild.ins().sendToFire(bonfire, bonfire);

        //扫荡
        GuildSoulsLandCT.ins().challenge && GuildSoulsLandCT.ins().cur > 8 ? GuildSoulsLandCT.ins().sendSweep() : GuildSoulsLandCT.ins().sendEnterSoulsLand(GuildSoulsLandCT.ins().cur, 1, 1);

        //领取
        var e = GuildSoulsLandCT.ins().rewardInfo;
        for (var i = 1; i < 9; i++) {
            var hasuse = (e >> i - 1 & 1) > 0;
            !hasuse && GuildSoulsLandCT.ins().isPassStage(i) && GuildSoulsLandCT.ins().sendGetStageReward(i);
        }
        1 == GuildBattleCT.ins().getModel().singinStatus && GuildBattleCT.ins().requestDayReward()
    }
    setting.hanghui && hanghui();
    //#endregion

    //#region 签到
    setting.checkin && DailyCheckIn.ins().getCheckInState(DailyCheckIn.ins()._loginTimes) === 1 && DailyCheckIn.ins().sendCheckIn(DailyCheckIn.ins()._loginTimes)
    //#endregion

    //#region 天下胜利礼包领取
    setting.worldgift && DominateWorldCT.ins().resultAward == 2 && DominateWorldCT.ins().sendAwardDominate();
    //#endregion

    //#region 特权领取
    setting.tequan && !Recharge.ins().recycleIsGet && Recharge.ins().sendRecycle(), !Recharge.ins().godOfWarIsGet && Recharge.ins().sendGodOfWar();
    //#endregion

    //#region 33达标领取
    if (setting.dabiao33) {
        const arr = KfArenaRedPoint.ins().JoinRedPoint
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        if (sum) {
            for (var i = 1; i < arr.length; i++) {
                arr[i] && KfArenaSys.ins().sendJoinRewards(i);
            }
        }
    }
    //#endregion

    //#region 日常领取
    function getdayorweek() {
        var tasklist = TaskCT.ins().dayTask;
        for (var l in tasklist) {
            tasklist[l].state == 1 && TaskCT.ins().sendGetTask(tasklist[l].id);
        }
        tasklist = TaskCT.ins().weekTask;
        for (var l in tasklist) {
            tasklist[l].state == 1 && TaskCT.ins().sendWeekGetTask(tasklist[l].id);
        }
        for (var j = 1; j < 5; j++) {
            {
                var i = GlobalConfig.DailyAwardConfig[j];
                if (TaskCT.ins().vitality >= i.valueLimit) {
                    var n = TaskCT.ins().getVitalityAwardsById(j, 0);
                    0 == n.state && TaskCT.ins().sendGetVitalityAwards(j)
                }
            }
            {
                var i = GlobalConfig.WeekAwardConfig[j];
                if (TaskCT.ins().weekVitality >= i.valueLimit) {
                    var n = TaskCT.ins().getVitalityAwardsById(j, 1);
                    0 == n.state && TaskCT.ins().sendGetdWeekVitalityAwards(j)
                }
            }
        }
    }
    setting.getdayorweek && getdayorweek();
    //#endregion

    //#region 战令领取
    function zhangling() {
        var n = Activity.ins().activityData[27], t = GlobalConfig.ActivityType41Config[27], list = TaskCT.ins().getInvestmentAllTask(t.taskid).tasks;
        for (var index in list) {
            var i = list[index];
            if (!index && 1 != i.status)
                continue;
            !i.free && TaskCT.ins().sendInvestmentTaskData(t.taskid, index, 1);
            n.ybhasBuy && !i.pay && TaskCT.ins().sendInvestmentTaskData(t.taskid, index, 2);
            n.hasBuy && TaskCT.ins().sendInvestmentTaskData(t.taskid, index, 0);
        }
    }
    setting.zhangling && zhangling();
    //#endregion

    //#region 33段位领取
    setting.duanwei33 && KfArenaRedPoint.ins().joinState == 1 && KfArenaSys.ins().sendDailyRewards(); //33段位领取
    //#endregion

    //#region 经验兑换修为
    if (setting.duihuangxiuwei && 3 - ZsCT.ins().upgradeCount[0]) {
        ZsCT.ins().sendGetXiuWei(1)
        ZsCT.ins().sendGetXiuWei(1)
        ZsCT.ins().sendGetXiuWei(1)
    }
    //#endregion

    //#region 诸神免费膜拜
    setting.zhushenmobai && HegemonyCT.ins().leftWordship == 60 && HegemonyCT.ins().sendWorship(1);
    //#endregion

    //#region 通天塔领取
    if (setting.tongtianta) {
        Fb2CT.ins().sendrequestDayReward();//更新通天塔奖励
        SkyLevelModel.ins().rewardTimes > 0 && Fb2CT.ins().sendGetDayReward();//通天塔领取
        SkyLevelModel.ins().rewardTimes > 0 && Fb2CT.ins().sendGetDayReward();//通天塔领取
    }
    //#endregion    

    //#region 罗盘奖励自动领取
    setting.luopan && CompassCT.ins().rewardInfoArr.map(item => item.freeCount && CompassCT.ins().sendGetReward(1, item.idx) || item.purchasedCount && CompassCT.ins().sendGetReward(2, item.idx))
    //#endregion

    //#region 购买镖车
    if (setting.buybiaoche && CrossDartCarCT.ins().checkInActTime() && JSON.stringify(CrossDartCarCT.ins().carTypeDic) === '{}') {
        CrossDartCarCT.ins().sendJoin(setting.buybiaoche);
        CrossDartCarCT.ins().sendJoin(setting.buybiaoche);
    }
    //#endregion

    //#region 每日返利
    setting.everyday && Recharge.ins().rechargeTotal.totalDay > Recharge.ins().rechargeTotal.hasGetDays.length && Recharge.ins().getRechargeTotalAward(Recharge.ins().rechargeTotal.totalDay)
    //#endregion

    //#region 隐藏奖励
    if (!OtherCT.ins().isGetAll() && OtherCT.ins().nowTime > 90 * 60) {
        for (var i = 1; i < 6; i++)
            OtherCT.ins().sendOnlineId(i)
    }
    for (var i = 1; i < 5; i++)
        TikTokCT.ins().returnInfoDataByType(i).isAward == 0 && TikTokCT.ins().getTikTokAwardById(i)

    ShareCT.ins().dayCount < 3 && ShareCT.ins().sendShareSuc()
    ShareCT.ins().dayGet == 1 && ShareCT.ins().sendGetDay()
    ShareCT.ins().firstGet == 1 && ShareCT.ins().sendGetFirst()

    //#endregion

    //#region 自动挖矿
    setting.autowakuang && mineins();
    //#endregion

    //#region 万界争霸投票
    setting.toupiao && !HegemonyCT.ins().isVote && HegemonyCT.ins().voteData?.length && HegemonyCT.ins().sendVote(HegemonyCT.ins().voteData[0].id)
    //#endregion

    //#region 巅峰赛报名
    setting.baoming && PeakedSys.ins()?.dzRp?.v && PeakedSys.ins().sendSignUp()
    //#endregion

    //#region 自动领取传奇庆典
    setting.autoGot && autoGot();
    //#endregion

    //#region 神兵升级
    setting.shenbingup && shenbingup();
    //#endregion

    //#region 更新灵境信息    
    LingJingCT.ins().sendLingJingMapInfo()
    LingJingCT.ins().sendLingJingWeather()
    LingJingCT.ins().sendLingJingEnergy()
    LingJingCT.ins().sendLingJingMaterial()
    LingJingCT.ins().sendPlayerMapInfo()
    LingJingCT.ins().sendLingJingBuilding()

    Rank.ins().sendGetRankingData(RankDataType.TYPE_LINGJING)
    if (!setting.xiaohao) {
        var weatherType = LingJingCT.ins().weatherType;
        var energy = LingJingCT.ins().energy;
        var myrank = Rank.ins().rankModel.length > 30 ? Rank.ins().rankModel[70]._dataList.find(item => item.id == ActorCC.actorID) : 0;
        if (!myrank && weatherType == 4 && weatherType != lastweatherType) {
            var windDir = LingJingCT.ins().windDir;
            windDir = { '1': "↑", '2': "←", '-1': "↓", '-2': "→" }[windDir];
            lastweatherType = weatherType;
            callDotNet({ type: 'push', msg: '灵境天气:刮风' + windDir });
            //Guild.ins().sendGuildMessage('灵境天气:刮风')
        }
        else if (lastweatherType == -1) {
            lastweatherType = weatherType;
        }
        if (!myrank && lastweatherenergy != energy) {
            lastweatherenergy = energy;
            if (energy == 96) {
                callDotNet({ type: 'push', msg: '灵境能量:满' });
            }
        }
    }
    //#endregion

    //#region 灵境拿到名次后自动打怪
    setting.lingjing && lingjingautorun();
    //#endregion

}

//#endregion

//#region 每秒执行一次
async function autoRun1() {
    if (typeof BagCT === 'undefined') {
        return;
    }

    //#region 统计信息
    showgameinfo();
    //#endregion


    if (iskuafu())
        return;

    jsloadlogin();

    win.get(LoadingScene) && win.close(LoadingScene);

    //#region 隔天购买等
    if (setting.autogoldbuy && 100 - Shop.ins().weekLimitDatas[4]) { //购买
        GuildStore.ins().sendInfo();
        Guild.ins().sendMyGuildInfo();
        Guild.ins().sendConCount();
        // Shop.ins().sendBuyWeekLimit(3, 300);//技能丹
        Shop.ins().sendBuyWeekLimit(4, 100);//洗练石
        // Shop.ins().sendBuyWeekLimit(5, 200);//书页
        Shop.ins().sendBuyWeekLimit(7, 10);//挑战令
        // Shop.ins().sendBuyWeekLimit(8, 2);//3级残卷
        // Shop.ins().sendBuyWeekLimit(9, 2);
        // Shop.ins().sendBuyWeekLimit(10, 2);
        // Shop.ins().sendBuyWeekLimit(11, 2);

        // GlobalConfig.WeekLimitedStore;
        Shop.ins().sendBuyWeekLimit(51, 99);//中级神符碎片 荣誉
        Shop.ins().sendBuyWeekLimit(70, 1);//上古精魄 幽冥

        //巅峰令购买 CommonUtils.objectToArray(GlobalConfig.FeatsStore).sort(function (t, e) { return Algorithm.sortAscAttr(t, e, "sort") }).map(item => { return { index: item.index, name: GlobalConfig.ItemConfig[item.goods[0].id].name } })
        Shop.ins().sendBuyMedal(4, 1); //讨伐令
        Shop.ins().sendBuyMedal(7, 1); //五彩石
        Shop.ins().sendBuyMedal(15, 1);//护身碎片
        Shop.ins().sendBuyMedal(16, 1);//复活碎片
        for (var i = 1; i < 4; i++)
            GameclubCT.ins().sendGameclubAward(2, i);
        for (var i = 0; i < 5; i++)
            Guild.ins().sendCon(2), Guild.ins().sendGuildMembers();

        Recharge.ins().sendRecycle();
        Recharge.ins().sendGodOfWar();
        var kggl = BagCT.ins().bagModel[0].find(item => item.itemConfig.name == '矿工干粮')
        kggl?.count && FloatWinCT.ins().onUse(kggl, kggl.count > 10 ? 10 : kggl.count)
        setting.autowakuang && mineins();
        !setting.xiaohao && setTimeout(() => {
            if (setting.reflashtili == 1) {
                setting.skzj = 21;
                document.getElementById('cbskzj').value = '7时主';
            }
            if (setting.reflashtili == 2) {
                setting.autokillhdboss = 1;
                document.getElementById('autokillhdboss').checked = !0;
            }
        }, 6e4);
    }
    //#endregion

    //#region 荒漠
    // GlobalConfig.DesertInvasionNodeConfig //荒漠列表
    async function desert() {
        if (setting.huangmo && typeof hhh !== 'undefined' && hhh?.InvadeCT.ins().bolOpen) {
            if (window.huangmoInterval) {
                return
            }
            outteamlist = [];
            window.huangmoInterval && clearInterval(window.huangmoInterval), (window.huangmoInterval = void 0);
            var weekday = (new Date).getDay();
            !weekday && (weekday = 7);
            var weekTimeStamp = hhh.InvadeCT.ins().weekTimeStamp[weekday];
            var huangmoindex = 0;
            window.huangmoInterval = setInterval(async () => {
                if (2 !== hhh?.InvadeCT.ins().fightPhase && !hhh?.InvadeCT.ins().invadeTeamBaseId) {
                    var teamstr = setting.huangmo1 || ''
                    var teams = teamstr.split(',');
                    if (teamstr.length) {
                        ChatCT.ins().chatListData3.source.reverse().map(item => {
                            var str = item.str || item.content;
                            if (str.includes("开启了荒漠入侵队伍") && teams.find(i => str.includes(i))) {
                                var n = str, o = n.indexOf("|E:");
                                if (!outteamlist.includes(n)) {
                                    outteamlist.push(n)
                                    n = n.slice(o + 3, Number.MAX_VALUE);
                                    var s;
                                    n.indexOf(",") >= 0 ? s = n.split(",") : n.indexOf("*") >= 0 && (s = n.split("*"));
                                    hhh?.InvadeCT.ins().sendJoinTeam(+s[1]);
                                }
                            }
                        });
                    }
                    var roundsTime = weekTimeStamp.roundsTime.find(i => GameServerCC.serverTime > i[0] - 9e4 && GameServerCC.serverTime < i[0]);
                    if (roundsTime || !teamstr.length) {
                        hhh?.InvadeCT.ins().sendCreateTeam();
                        await new Promise(resolve => setTimeout(resolve, 200));
                        //"金青云山","金玉龙湖","银梅花岭","银飞鹤峰","银紫薇城","铜龙泉寺","铜金陵郡","铜银河渡","铜碧水镇","铜灵石岛","铜霜雪谷","铜丹阳府"
                        var count = 12;
                        var start = 0;
                        setting.huangmo == 1 && (count = 12)
                        setting.huangmo == 2 && (count = 2)
                        setting.huangmo == 3 && (count = 3, start = 2)
                        setting.huangmo == 4 && (count = 7, start = 5)
                        huangmoindex = (huangmoindex + count + 1) % count + start;
                        hhh?.InvadeCT.ins().sendJoin(huangmoindex);
                    }
                }
                if (GameServerCC.serverTime > weekTimeStamp.endTime) {
                    window.huangmoInterval && clearInterval(window.huangmoInterval), (window.huangmoInterval = void 0);
                }
            }, 111)
        }
    }
    desert();
    //#endregion

    //#region 魔界
    if (setting.mojie) {
        if (!inmojie) {
            var bossindex = +setting.mojie || 3;
            var t = (new Date()).getHours() == 16 ? GlobalConfig.DevilBossBase.startTime2 : GlobalConfig.DevilBossBase.startTime, e = t[0], i = t[1], o = new Date(GameServerCC.serverTime);
            o.setHours(e, i, 0, 0);
            var devilStartTime = o.getTime();
            if (!inmojie && GameServerCC.serverTime >= devilStartTime && !iskuafu() && !DevildomSys.ins().killedState[bossindex]) {
                setting.autochange && changepro('att')
                inmojie = true
                //win.open("DevilInvadeWin");
                //await new Promise(resolve => setTimeout(resolve, 500));
                //callDotNet('mojie');
                SkillCT.ins().sendAutoSKill(3, 0)
                DevildomSys.ins().sendEnter(bossindex);
                setTimeout(() => { inmojie = false }, 1000 * 60 * 60);
                runout();
            }
        }
        async function mozhu() {
            if (inmozhu)
                return;
            if (!MainUICC.devilEnterShow())
                return;
            if (KfArenaSys.ins().macthState == 1)
                return;
            var h = DevildomSys.ins();
            var l = (h.enterCD - egret.getTimer()) / 1e3 >> 0;
            if (l > 0)
                return;
            if (h.bossState || h.killedState[h.bossId])
                return;
            setting.autochange && changepro('att')
            inmozhu = true
            //win.open("DevilInvadeWin");
            //await new Promise(resolve => setTimeout(resolve, 500));
            //callDotNet('mojie');
            h.sendEnter(h.bossId)
            setTimeout(() => { inmozhu = false }, 1000 * 60 * 60 * 24);
            runout();
        }

        mozhu();
    }
    //#endregion

    //#region 打boss
    async function gotoboss() {
        if (iskuafu())
            return;
        if (setting.maya) {
            if (window.inmaya)
                return;
            var mayanum = setting.maya * 2;
            mayanum == 8 && (mayanum = 11)
            var mayaboss = MainUICC.getKFBossList().reverse().find(i => i.id > 11 - mayanum && getbosstime(i.bossId) < 10 && GameLogic.ins().kfCost >= (i.id > 9 ? 35 : i.id > 7 ? 30 : i.id > 5 ? 25 : 20));
            if (mayaboss) {
                var mayaid = mayaboss.id
                if (GameMap.fubenID != mayaboss.fbId) {
                    window.inmaya = !0
                    KFBossSys.ins().sendKfBossGo(mayaid);
                    window.mayaInterval && clearInterval(window.mayaInterval), (window.mayaInterval = void 0);
                    window.mayaInterval1 && clearInterval(window.mayaInterval1), (window.mayaInterval1 = void 0);
                    window.mayaInterval = setInterval(() => {
                        if (getbosstime(mayaboss.bossId) > 0) {
                            window.mayaInterval && clearInterval(window.mayaInterval), (window.mayaInterval = void 0);
                            iskuafu() && send(Ts.exitFB);
                            window.mayaInterval1 = setInterval(() => {
                                if (!iskuafu()) {
                                    window.mayaInterval1 && clearInterval(window.mayaInterval1), (window.mayaInterval1 = void 0);
                                    setTimeout(() => { window.inmaya = !1 }, 2.5e4);
                                }
                            }, 1e3);
                        }
                    }, 300)
                    return;
                }
            }
        }
        const overlist = getoverlist();
        // const guajifbid = 4221;//后院
        // const guajifbid = 4222;//藏宝室
        // const guajifbid = 4223;//内院
        for (var b = 2; b > 0; b--) {
            if (!CityCC.ins().teamId && b == 2 && !setting.canyue)//队伍未组队
                continue;
            const waittime = b == 2 ? 9 : 2;
            var bosslist = MainUICC.getMapBossList(b);
            var bossid = bosslist.find(item => item.fbId == GameMap.fubenID);
            if (bossid) {//当前房间boss已出现
                var time = getbosstime(bossid.bossId);
                if (time < waittime) {
                    time > 4 && b == 2 && AccMoveTo(3, 2);
                    return;
                }
            }
            bosslist.reverse();
            for (var i = 0; i < bosslist.length; i++) {
                var bossid = bosslist[i].bossId;
                var fbId = bosslist[i].fbId;
                if (b == 2 && (overlist.includes(fbId) || setting.xiaohao) && !setting.canyue)//图鉴已满
                    continue;
                var time = getbosstime(bossid);
                if (time < waittime) {
                    CityCC.ins().sendCityGo(0, fbId)
                    setjineng(b == 2 ? 0 : 1)
                    return;
                }
            }
        }
        if (setting.tujian) {
            var tujianlist = [];
            var needtflfbids = MainUICC.getMapBossList(3).map(item => item.fbId)
            for (var oIndex in Book.ins().bookdir) {
                !win.get("BagWin", 1) && Book.ins().sendInfo(oIndex)
                var a = Book.ins().bookdir[oIndex]
                for (var t = 0; t < a.length; t++) {
                    var e = GlobalConfig.HandbookConfig
                        , i = GlobalConfig.HandbookListConfig
                        , n = e[oIndex].list
                        , r = n[t]
                        , h = a[t].lv + 1
                        , u = i[r][h] ? i[r][h] : i[r][a[t].lv];
                    var bossid = getBoosIdByFbid(u.mapId);
                    var lessnum = u.nums - a[t].num
                    //2生命 3法力 5防御 141攻击 143道术 145魔法 && u.attr.find(i=> [2,145].includes(i.type))
                    var atts = [];
                    setting.tjatt2 && atts.push(2);
                    setting.tjatt3 && atts.push(3);
                    setting.tjatt5 && atts.push(5);
                    setting.tjatt141 && atts.push(141);
                    setting.tjatt143 && atts.push(143);
                    setting.tjatt145 && atts.push(145);
                    if (i[r][h] && lessnum && GlobalConfig.MonstersConfig[bossid]?.name !== u.name && u.attr.find(i => atts.includes(i.type))) {//未满的小怪图鉴
                        var maplevel = parseInt(oIndex / 10000);
                        var mapname = e[oIndex].mapname + '-' + GlobalConfig.InstanceConfig[u.mapId].name;
                        var lvnums = CommonUtils.objectToArray(i[r]).filter(i => i.lv >= h).map(i => i.nums);
                        var neednum = lvnums.reduce((total, item2) => total + (item2 || 0), 0) - a[t].num;
                        var tujian = { lv: h, less: lessnum, need: neednum, name: u.name, mapname: mapname, mapId: u.mapId, u: u, maplv: maplevel, lvs: lvnums }
                        u.name == '掷斧骷髅' && (tujian.mapId = 1009)
                        u.name == '骷髅枪兵' && (tujian.mapId = 2306)
                        u.name == '素狐' && (tujian.mapId = 2427)
                        if (GameLogic.ins().kfCost > 20 && needtflfbids.includes(u.mapId) && bossid) {
                            if (getbosstime(bossid) > 120)
                                tujianlist.push(tujian)
                        }
                        else
                            tujianlist.push(tujian)
                    }
                }
            }
            if (tujianlist.length) {
                tujianlist = tujianlist.sort((a, b) => a.less - b.less);
                window.tujianlist = tujianlist;
                for (var i = 3; i >= 0; i--) {
                    var newlist = tujianlist.filter(item => item.maplv == i);
                    if (newlist.length) {
                        !newlist.slice(0, 1).map(item => item.mapId).includes(GameMap.fubenID) && CityCC.ins().sendCityGo(0, newlist[0].mapId), setjineng(1);
                        break;
                    }
                }
            }
        }
        else {
            var bossid = getBoosIdByFbid(setting.guajifbid);
            if (!bossid) {
                if (GameMap.fubenID !== setting.guajifbid) {
                    CityCC.ins().sendCityGo(0, setting.guajifbid);
                    setjineng(1);
                }
            }
            else {
                var time = getbosstime(bossid);
                if (time <= 10 && GameLogic.ins().kfCost > 20) {
                    if (GameMap.fubenID !== configData.guajifbid.default) {
                        CityCC.ins().sendCityGo(0, configData.guajifbid.default)
                        setjineng(1);
                    }
                }
                else if (GameMap.fubenID !== setting.guajifbid) {
                    CityCC.ins().sendCityGo(0, setting.guajifbid);
                    setjineng(1);
                }
            }
        }
        if (setting.teammode && CampCC.mode !== setting.teammode) {
            await new Promise(resolve => setTimeout(resolve, 3000));
            CampCC.selectMode(setting.teammode)
        }
    }
    function setjineng(b) {
        if (SubRoles.ins().getSubRoleByIndex(0).skillsData[2].autoUse == !!b)
            return
        for (var i = 2; i < 6; i++) {
            i != 3 && SkillCT.ins().sendAutoSKill(i, b)
        }
    }
    setting.boss && (!FbCT.ins().tfPurgatoryTeamID || FbCT.ins().tfPurgatoryPassID == 8) && gotoboss();// 自动打boss，炼狱副本组队时不打
    setting.autochangefullmp && autochangefullmp();
    //#endregion

    //#region 购买蓝药
    if (setting.autobuymp) {
        const keepnum = 10000;
        ActorCC.gold >= 220 * keepnum && BagCT.ins().getBagItemById(100025).count < keepnum && Shop.ins().sendBuy(1, [[12, keepnum]]);
    }
    //#endregion

    //#region 竞技场,时空或星域组队时不打，竞技场开放时间为周一10点到周日22点
    var today = new Date();
    var days = today.getDay();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var totalMinutes = hours * 60 + minutes;
    var canwwc = !!setting.wwc;
    if (canwwc) {
        canwwc = canwwc && (
            (days === 1 && hours >= 10) ||  // 周一10点后
            (days >= 2 && days <= 6) ||      // 周二至周六全天
            (days === 0 && hours <= 21)     // 周日22点前
        );
        //每天19:25到21:35之间不打
        canwwc = canwwc && !(
            totalMinutes >= 1165 && // 19:25（19*60+25=1165分钟）
            totalMinutes < 1295     // 21:35（21*60+35=1295分钟）
        );
        canwwc = canwwc && !iskuafu();
        canwwc = canwwc && !window.isclearing;
        canwwc = canwwc && BurningDesertCT.ins().roomId <= 0;
        canwwc = canwwc && StardomainCT.ins().roomId <= 0;
        canwwc = canwwc && Ladder.ins().challgeNum && !win.get("LadderChallengeWin")
        canwwc && setting.autochange && changepro('att')
        canwwc && win.open("LadderChallengeWin");
    }
    //#endregion

    //#region 跨服竞技场
    function kuafuwwc() {
        var i = KfArenaSys.ins();
        const d = new Date();
        if (d.getHours() !== 21 || d.getMinutes() > 30 || i.times == 0)
            return;
        KfArenaRedPoint.ins().postRedPoint();
        if (1 == i.macthState)
            return;
        if (0 == i.isStartIng)
            return;
        if (!i.checkFunIsOpen())
            return;
        if (!i.getIsJoinTeam())
            return void setting.kfwwc == 2 ? i.sendCreateTeam() : i.sendPersonalMatch();
        if (!i.isTFCaptain)
            return;
        var n = i.getIsNoOnline();
        if ("" != n)
            return;
        if (setting.kfwwc == 2) {
            i.sendGuilds(1);
            var teamer = setting.kfwwc1.split(',');
            i.tfMembers.filter(item => !teamer.includes(item.roleName) && item.roleName != ActorCC.myName).map(item => i.sendOutTeam(item.roleID))
            var names = i.tfMembers.map(item => item.roleName);
            if (i.tfMembers.length < 3) {
                (i.worldTimeCd - egret.getTimer()) / 1e3 >> 0 <= 0 && i.sendWorldInvite();
                !Rank.ins().rankModel[0]._dataList.length && Rank.ins().sendGetRankingData(RankDataType.TYPE_POWER)
                var sendInvitelist = Rank.ins().rankModel[0]._dataList?.filter(item => teamer.includes(item.player) && !names.includes(item.player)) || [];
                sendInvitelist.map(item => i.sendInvite(item.id))
                return
            } else {
                if (names.filter(i => teamer.includes(i)).length == 2) {
                    i.sendStartMacth()
                }
            }
        }
        else
            i.sendStartMacth()
    }
    setting.kfwwc && kuafuwwc();
    //#endregion

    //#region 组队
    async function manageTeam() {
        //var appnamelist = ["矿工", "不闻不问", "幸运的肉肉", "箭来"]
        var appnamelist = setting.team1?.split(",") || [];
        CityCC.ins().sendTeamList(), CityCC.ins().postChangeApplyList(), CityCC.ins().sendTeamPlayerInfo(), CityCC.ins().sendTeamItemInfo(); // 更新队伍信息
        await new Promise(resolve => setTimeout(resolve, 1000));
        var teamid = CityCC.ins().teamId; // 当前队伍id
        var teamlist = CityCC.ins().teamList; // 所有队伍列表
        var currentMembers = CityCC.ins().teamNumberSList.map(item => item.name);
        //currentMembers.push('矿工');
        if (!teamlist.length) {
            CityCC.ins().sendTeamList(), CityCC.ins().postChangeApplyList(), CityCC.ins().sendTeamPlayerInfo(), CityCC.ins().sendTeamItemInfo(); // 更新队伍信息
        }
        //else if (!!teamlist.find(item => item.name == ActorCC.myName && item.id == teamid)) {
        //    if (StardomainCT.ins().roomId > 0 || BurningDesertCT.ins().roomId > 0)
        //        !CityCC.ins().isAtuoTeam && CityCC.ins().sendTeamChange(6)
        //    else
        //        CityCC.ins().isAtuoTeam && CityCC.ins().sendTeamChange(6)
        //    var applist = CityCC.ins().teamApplyList;
        //    applist.filter(item => {
        //        CityCC.ins().sendTeamChange(4, appnamelist.includes(item.name) ? 1 : 0, item.actId)
        //    })
        //    CityCC.ins().teamApplyList = [];
        //}
        // 检查是否在队伍中但成员列表不存在自己
        if (teamid && !currentMembers.includes(ActorCC.myName)) {
            CityCC.ins().sendTeamChange(2); // 退出队伍
            CityCC.ins().teamApplyList = [];
            await new Promise(resolve => setTimeout(resolve, 500));
            return manageTeam(); // 重新执行流程
        }
        if (!teamid) {
            if (setting.xiaohao) {
                CityCC.ins().sendTeamChange(1); // 创建队伍
                return;
            }
            var team = teamlist.find(item => appnamelist.includes(item.name) && item.count < 4);
            if (team && team.count < 4) {
                CityCC.ins().sendTeamChange(3, team.id);// 加入队伍
                await new Promise(resolve => setTimeout(resolve, 500));
                CityCC.ins().sendTeamList(), CityCC.ins().postChangeApplyList(), CityCC.ins().sendTeamPlayerInfo(), CityCC.ins().sendTeamItemInfo(); // 更新队伍信息
                await new Promise(resolve => setTimeout(resolve, 500));
                !CityCC.ins().teamId && CityCC.ins().sendTeamChange(1); // 创建队伍
            } else {
                CityCC.ins().sendTeamChange(1); // 创建队伍
            }
        }
        else if (currentMembers.length == 1) {
            var team = teamlist.find(item => appnamelist.includes(item.name) && item.count < 4);
            if (team && team.count < 4) {
                CityCC.ins().sendTeamChange(2); // 退出队伍
            }
        }
    }
    setting.team && manageTeam();
    //#endregion

    //#region 沙巴克
    if (setting.shabake && OpenSystem.ins().checkSysOpen(SystemType.GuildBattle) && GuildBattleCT.ins().getModel().isWatStart && GuildBattleCT.ins().getModel().actLeftTime > 0 && Guild.ins().guildID) {
        setting.autochange && changepro('att');
        GuildBattleCT.ins().reqJoinAc();
        setting.autochange && changepro('att');
        window.gotoNextGuildInterval && clearInterval(window.gotoNextGuildInterval);
        setTimeout(() => { window.gotoNextGuildInterval = setInterval(gotoNextGuild, 111) }, 1e4)
    }


    //#endregion

    //#region 自动进矿工或小号的星域和时空以及副本
    var namelist = ["矿工"].map(name => [name, `[|C:1487615&T:${name}|]`, `[|C:0x16B2FF&T:${name}|]`]).flat();
    var typelist = ["开启了星域副本", "开启了时空之境副本", "开启了新手村副本", "开启了炼狱新手村副本", "创建了跨服竞技战队"]
    var combinations = namelist.flatMap(name => typelist.map(type => `${name}${type}`));
    var chatlist = ChatCT.ins().chatListData3.source.filter(item => {
        var res = item.type == 7 || item.type == 13;
        var str = item.str;
        res = res && combinations.find(prefix => str.indexOf(prefix) === 0) !== undefined;
        return res;
    }
    )
    !chatlist.length && (outteamlist = []);
    chatlist.map(item => {
        var n = item.str || item.content, o = n.indexOf("|E:");
        if (!outteamlist.includes(n)) {
            outteamlist.push(n)
            n = n.slice(o + 3, Number.MAX_VALUE);
            var s;
            n.indexOf(",") >= 0 ? s = n.split(",") : n.indexOf("*") >= 0 && (s = n.split("*"));
            if ("7" == s[0] && BurningDesertCT.ins().roomId <= 0) {//时空
                BurningDesertCT.ins().reqEnterRoom(+s[1]);
            }
            else if ("12" == s[0] && StardomainCT.ins().roomId <= 0) {//星域
                StardomainCT.ins().reqEnterRoom(+s[1])
            }
            else if ("8" == s[0]) {//地狱副本
                GlobalConfig.TeamFuBenBaseConfig.needZsLv > ZsCT.ins().stage ? void TipsCT.ins().showTips(gettext("{0}转后可以挑战", GlobalConfig.TeamFuBenBaseConfig.needZsLv)) : void FbCT.ins().sendEnterPurgatoryTFRoom(+s[1]);
            }
            else if ("1" == s[0]) {//普通副本
                GlobalConfig.TeamFuBenBaseConfig.needZsLv > ZsCT.ins().stage ? void TipsCT.ins().showTips(gettext("{0}转后可以挑战", GlobalConfig.TeamFuBenBaseConfig.needZsLv)) : FbCT.ins().sendEnterTFRoom(+s[1]);
            }
            else if ("2" == s[0]) {//跨服竞技场
                KfArenaSys.ins().sendJoinTeam(+s[1]);
            }
        }
    })

    //#endregion

    //#region 时空之境
    function skzj() {
        BurningDesertCT.ins().reqBossInfo();
        var index = setting.skzj - 1;
        if (checkskzjboss(index)) {
            gotoskzj(index);
        }
        else {
            BurningDesertCT.ins().roomId > 0 && BurningDesertCT.ins().reqExitRoom();
            var cost = parseInt(index / 7) * 10 + 30;
            GameLogic.ins().kfCost < cost && (setting.skzj = 0, document.getElementById('cbskzj').value = '禁用')
        }
    }
    setting.skzj && skzj();
    //#endregion

    //#region 击杀活动boss
    setting.autokillhdboss && autokillhdboss()
    //#endregion
    setting.offlinetujian && !(
        totalMinutes >= 1165 + (today.getDay() == 1 ? 60 : 0) && // 19:25（19*60+25=1165分钟）
        totalMinutes < 1295     // 21:35（21*60+35=1295分钟）
    ) && today.getTime() - starttime > 1000 * 60 * 6 && loginout();
}
//#endregion

//#region 功能函数
/**
 * 自动登录
 */
async function autologin() {
    console.log("自动登录")
    while (!urlParam?.last?.srvid)
        await new Promise(resolve => setTimeout(resolve, 500));
    urlParam.srvid = urlParam.last.srvid + ""
    Main.enterGameMain(urlParam.last.idx, !0)
    while (!win.get(SelectRole2))
        await new Promise(resolve => setTimeout(resolve, 500));
    await Main.ins.startLoad();
    await new Promise(resolve => setTimeout(resolve, 500));
    await GameApp.prototype.init();
    await new Promise(resolve => setTimeout(resolve, 500));
    await Main.ins.enterGame();
}

function jsload() {
    if (localStorage.getItem('postReload' + channel_uid)) {
        typeof autologin === 'function' && setTimeout(() => { autologin() }, 1e3);
    }
}
function jsloadlogin() {
    if (localStorage.getItem('postReload' + channel_uid)) {
        localStorage.removeItem('postReload' + channel_uid);
        if (!RexueDideCT.ins().isStopBoss) {
            RexueDideCT.ins().stopAutoBoss()
            RexueDideCT.ins().sendStopAutomatichosting()
        }
        BagCT.ins().settingBag.map((i, t) => t < 6 && (i.value = 0));
        BagCT.ins().sendSetBag();
    }
}
async function loginout() {
    var list = getrefreshtime();
    if (list.length > 0) {
        var bosslist = MainUICC.getMapBossList(1).filter(i => getbosstime(i.bossId) < 10);
        if (bosslist.length > 0)
            return
        var mintime = Math.min(...list);
        if (mintime < 600)
            return
        var tujiandata = tujianlist.filter(i => i.mapId == GameMap.fubenID)
        if (tujiandata.length == 0)
            return
        var lesslist = tujiandata.map(i => i.less);
        var minless = Math.min(...lesslist);
        minless = minless / 1000 * 20 * 60;
        var time = Math.min(mintime - 180, minless);
        time = Math.max(time, 300);

        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        const currentSeconds = now.getSeconds();
        const currentTimeInMinutes = currentHours * 60 + currentMinutes;

        time = Math.min(time, currentHours < 8 ? 7200 : 3240)
        const criticalTimes = [
            { hour: 16, minute: 27 },
            { hour: 19, minute: 27 },
            { hour: 20, minute: 27 }
        ];
        now.getDay() == 1 && (criticalTimes[1].hour = 20)
        for (const ct of criticalTimes) {
            const criticalTimeInMinutes = ct.hour * 60 + ct.minute;
            const timeDiff = criticalTimeInMinutes - currentTimeInMinutes;

            if (timeDiff > 0 && timeDiff <= time / 60) {
                console.log(`检测到休眠将跨越 ${ct.hour}:${ct.minute}，调整休眠时间`);
                time = timeDiff * 60 - currentSeconds;
                break;
            }
        }

        if (time < 60)
            return
        window.autoRunInterval && clearInterval(window.autoRunInterval), window.autoRunInterval = void 0;
        window.autoRun1Interval && clearInterval(window.autoRun1Interval), window.autoRun1Interval = void 0;
        if (!RexueDideCT.ins().isStopBoss) {
            RexueDideCT.ins().stopAutoBoss()
            RexueDideCT.ins().sendStopAutomatichosting()
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        RexueDideCT.ins().allBossIdArr = [MainUICC.getMapBossList(1).map(i => i.bossId), [], [], []]
        RexueDideCT.ins().sendAutomatichosting(1, 1);
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.isStopBoss = RexueDideCT.ins().isStopBoss;

        BagCT.ins().settingBag.map((i, t) => t < 6 && (i.value = 1));
        BagCT.ins().sendSetBag();
        await new Promise(resolve => setTimeout(resolve, 1000));

        Socket.ins().close();
        GameLogic.ins().stopHeartbeat();
        document.querySelector('.egret-player').remove();
        localStorage.setItem('postReload' + channel_uid, '1');

        var div = document.createElement('div');
        div.innerHTML = '本次离线时间：' + now.toLocaleTimeString() +
            '<br>本次离线时长：' + (time / 60).toFixed() + '分钟' +
            '<br>下次上线时间：' + new Date(Date.now() + time * 1e3).toLocaleTimeString() +
            '<br>图鉴挂机位置：' + tujiandata[0].mapname +
            '<br>剩余图鉴数量：' + tujiandata.map(i => i.less).join() +
            '<br>苍月刷新时间：' + (mintime / 60).toFixed() + '分钟'
        div.style = 'position: fixed;left: 110px;color: white;top: 10px;font-size: xx-large;'
        time > 0 && callDotNet({ type: 'reload', timeout: parseInt(time * 1e3) });
        document.body.appendChild(div);
    }
}

function getlastwin() {
    return win.$wins[win.openList[win.openList.length - 1]]
}

function getrefreshtime() {
    var overlist = getoverlist();
    var bosslist = MainUICC.getMapBossList(2).filter(i => !overlist.includes(i.fbId));
    return bosslist.map(i => getbosstime(i.bossId))
}

function getoverlist() {
    const overlist = [];//已满Boss图鉴
    for (var oIndex in Book.ins().bookdir) {
        var a = Book.ins().bookdir[oIndex]
        for (var t = 0; t < a.length; t++) {
            var e = GlobalConfig.HandbookConfig
                , i = GlobalConfig.HandbookListConfig
                , n = e[oIndex].list
                , r = n[t]
                , h = a[t].lv + 1
                , u = i[r][h] ? i[r][h] : i[r][a[t].lv];
            var bossid = getBoosIdByFbid(u.mapId);
            if (!i[r][h] && GlobalConfig.MonstersConfig[bossid]?.name == u.name) {
                overlist.push(u.mapId)
            }
        }
    }
    return overlist;
}

function shenbingup() {
    var e = GodWeaponCC.ins().getInfo(setting.shenbingup * 1000);
    if (e) {
        var i = GlobalConfig.GodWeaponLvConfig[e.id];
        if (i) {
            if (ActorCC.level < i.level)
                return
            if (!i.cost)
                return
            for (var n = i.cost, s = 0; s < n.length; s++)
                if (!GlobalFun.checkCost(n[s].count, n[s].id))
                    return
            GodWeaponCC.ins().sendUp(setting.shenbingup, 1);
        }
    }
}

function changeSKillID(s) {
    const skillId = s.data;
    const nebulaConfig = GlobalConfig.NebulaConfig;

    // 检查技能是否已激活且未学习
    if (skillId !== NebulaCT.ins().changeSKillID &&
        !NebulaCT.ins().returnSkillLv(skillId) &&
        nebulaConfig[skillId]?.activate) {
        lineitems.map(i => i.icon.source = "line_black");
        var allPathsinfo = getAllSkillPaths(skillId, nebulaConfig);
        var allPaths = allPathsinfo.path;
        window.total = ['路径还需技能点：' + allPathsinfo.total]
        var e = nebulaConfig;
        function setlinecolor(m, n) {
            var i = allPaths[m];
            var l = allPaths[n];
            var x = e[i].location[0],
                y = e[i].location[1],
                width = MathUtils.getDistance(x, y, e[l].location[0], e[l].location[1]);
            var c = MathUtils.getRadian2(x, y, e[l].location[0], e[l].location[1])
                , g = MathUtils.getAngle(c);
            var rotation = g;
            var setlist = lineitems.find(i => i.x == x && i.y == y && i.rotation == rotation && i.width == width)
            setlist && (setlist.icon.source = "zs_jm_line1");
        }
        for (var j = 0; j < allPaths.length - 1; j++) {
            setlinecolor(j, j + 1)
            setlinecolor(j + 1, j)
        }
    }
}


/**
 * 获取从起点到所有可达终点的完整路径
 * @param {number} startId - 起点技能ID
 * @param {Object} config - 技能配置数据
 * @param {Object} config - 技能配置数据
 * @param {number} [maxDepth=10] - 最大递归深度防止栈溢出
 * @returns {Array} 包含所有完整路径的数组
 */
function getAllSkillPaths(startId, config, maxDepth = 20) {
    const allPaths = [];

    /**
     * 递归追踪路径
     * @param {number} currentId - 当前技能ID
     * @param {Array} currentPath - 当前路径
     */
    function tracePath(currentId, currentPath) {
        if (currentPath.length > maxDepth)
            return

        // 处理复合ID
        const baseId = currentId > 1000 ? Math.floor(currentId / 1000) : currentId;
        const isLearned = NebulaCT.ins().returnSkillLv(baseId);
        const nodeConfig = config[baseId];

        // 添加当前节点到路径
        const newPath = [...currentPath, currentId];

        // 如果是终点（已学习或未激活），保存路径
        if (isLearned || !nodeConfig?.activate) {
            allPaths.push(newPath);
            return;
        }

        // 继续追踪激活的子节点
        if (nodeConfig.activate) {
            nodeConfig.activate
                .filter(id => Math.floor(id / 1000) !== baseId)
                .forEach(id => !newPath.includes(id) && tracePath(id, newPath));
        }
    }

    tracePath(startId, []);
    var allPaths1 = allPaths.map(path => {
        var accskillid = Math.floor(path[path.length - 1] / 1000)
        var skillnum = NebulaCT.ins().returnSkillLv(accskillid);
        var total = path.slice(1).reduce((total, item2) => total + (item2 % 10 || 0), 0);
        total -= skillnum;
        var path1 = path.map(i => i > 1000 ? Math.floor(i / 1000) : i)
        return { total, path: path1, path1: path }
    });
    var min = Math.min(...allPaths1.map(item => item.total))
    return allPaths1.find(i => i.total == min);
}

function setnebulalink(s) {
    s.icon.source = s.data ? "nebula_link1" : "line_black";
    var haslink = lineitems.find(i => i.x == s.x && i.y == s.y && i.rotation == s.rotation && i.width == s.width)
    if (!haslink && !s.data)
        lineitems.push(s);
    else if (haslink && !s.data) {
        var index = lineitems.findIndex(i => i.x == s.x && i.y == s.y && i.rotation == s.rotation && i.width == s.width)
        lineitems[index] = s;
    }
    //zs_jm_line1  line_light line_black
}
/**
 * 前往击杀时空boss
 */
function gotoskzj(index) {
    if (!inskzj) {
        inskzj = !0;
        var type = parseInt(index / 7) + 1;
        BurningDesertCT.ins().reqBuildRoom(1);
        BurningDesertCT.ins().reqEnterBurnDesert(type);
        var fbId = BurningDesertCT.ins().getShiKongZhiJingBossList(0)[index].fbId;
        window.goskzjInterval && clearInterval(window.goskzjInterval)
        window.goskzjInterval = setInterval(() => {
            if ([91000, 91008, 91016].includes(GameMap.fubenID)) {
                BurningDesertCT.ins().reqSwitchMap(fbId)
            }
            var t = BurningDesertCT.ins().sceneBossReliveTime;
            if (GameMap.fubenID == fbId && t > 0) {
                t = DateUtils.formatMiniDateTime(t);
                var e = t - GameServerCC.serverTime;
                if (e > 1e4) {
                    iskuafu() && send(Ts.exitFB)
                    window.goskzjInterval && clearInterval(window.goskzjInterval)
                    setTimeout(() => { inskzj = !1; }, 1e4)
                }
            }
        }, 1111)
    }
}
/**
 * 自动击杀活动boss
 */
function autokillhdboss() {
    function cancleauto() {
        setting.autokillhdboss = 0
        document.getElementById('autokillhdboss').checked = !1
    }
    var today = new Date();
    var hdlist = CommonUtils.objectToArray(GlobalConfig.ActivityConfig)
    window.currhdlist = hdlist.filter(item => new Date(item.startTime) < today && new Date(item.endTime) > today && item.startTime != '9999-0:0' && item.endTime != '9999-0:0');
    if (currhdlist.length > 0) {
        var targethd = currhdlist.find(i => i.activityType == 11);//传奇庆典 降妖伏魔
        if (targethd) {
            var activityid = targethd.Id;
            var Activityinfo = Activity.ins().getActivityDataById(activityid);
            if (!Activityinfo)
                return;
            var targetbossindexs = obj2list(GlobalConfig.ActivityType11_2Config[activityid]).filter(i => i.type == 68 && Activityinfo.achieveInfo[i.index - 1].times < i.dayLimit).map(i => i.param % 1000 - 1);
            !targetbossindexs.length && cancleauto();
            if (targetbossindexs.length) {
                var aliveboss = targetbossindexs.filter(i => checkskzjboss(i, !1));
                aliveboss.length && gotoskzj(aliveboss.pop());
            }
        }
        else
            cancleauto()
    }
    else
        cancleauto()
}
/**
 * 自动领取活动奖励
 */
function autoGot() {
    var today = new Date();
    var hdlist = CommonUtils.objectToArray(GlobalConfig.ActivityConfig)
    window.currhdlist = hdlist.filter(item => new Date(item.startTime) < today && new Date(item.endTime) > today && item.startTime != '9999-0:0' && item.endTime != '9999-0:0');
    if (currhdlist.length > 0) {
        var targethd = currhdlist.find(i => i.activityType == 11);//传奇庆典
        if (targethd) {
            var activityid = targethd.Id;
            var Activityinfo = Activity.ins().getActivityDataById(activityid);
            if (!Activityinfo)
                return;
            obj2list(GlobalConfig.ActivityType11_2Config[activityid]).filter(i => Activityinfo.achieveInfo[i.index - 1].times >= i.dayLimit && !Activityinfo.achieveInfo[i.index - 1].isGot).map(i => Activity.ins().sendReward(activityid, i.index, 2));
            obj2list(GlobalConfig.ActivityType11Config[activityid]).map(i => Activityinfo.getRewardState(i.index) == 1 && Activity.ins().sendReward(activityid, i.index, 1));
        }
    }
}
/**
 * 显示游戏统计信息
 */
async function showgameinfo() {

    //#region 统计信息
    if (typeof mapTjLab !== 'undefined' && setting.showmsg) {
        var myrank = Rank.ins().rankModel.length > 30 ? Rank.ins().rankModel[70]._dataList.find(item => item.id == ActorCC.actorID) : 0;
        const weather = ["晴天", "下雨", "大雾", "刮风"]
        const weatherType = LingJingCT.ins().weatherType || 3
        var windDir = LingJingCT.ins().windDir;
        windDir = { '1': "↑", '2': "←", '-1': "↓", '-2': "→" }[windDir];
        const shopCbPer = BagCT.ins().shopCbPer;
        const atts = (await sendSync(Ts.getRoleAtts)).atts
        const maxatt = atts[AttributeData.JOB_ATTR[ActorCC.jobId][1]]
        const speed = atts[10]
        const liststr = [];
        clearinfo && (liststr.push(clearinfo), liststr.push(''));
        !Recharge.ins().getRechargeData(0).curDayPay && (liststr.push('今日未充值'), liststr.push(''));
        // liststr.push('经验:' + RexueDideCT.ins().infos[3].value);
        // liststr.push('挂机:' + RexueDideCT.ins().AutoOverTimeStr);
        //liststr.push('回收:' + shopCbPer + '%');
        //liststr.push('背包:' + BagCT.ins().getAllSurplusCount());
        !myrank && liststr.push('灵境:' + weather[weatherType - 1] + (weatherType == 4 ? windDir : ''));
        !myrank && liststr.push('体力:' + LingJingCT.ins().energy);
        liststr.push('大攻:' + maxatt);
        liststr.push('攻速:' + speed);
        //liststr.push('90级需经验:')
        //liststr.push(((Object.keys(GlobalConfig.ExpConfig).filter(item => item >= ActorCC.level && item < 90).map(item => GlobalConfig.ExpConfig[item].exp).reduce((acc, curr) => acc + curr, 0) - ActorCC.exp) / 1e8).toFixed(4) + '亿');
        // liststr.push('金币:' + (ActorCC.gold / 100000000).toFixed(4) + '亿');
        liststr.push('讨伐令:' + GameLogic.ins().kfCost);
        liststr.push(BagCT.ins().bagModel[0].filter(item => item.itemConfig.name.includes("讨伐令")).sort((a, b) => a.quality - b.quality).map(item => item.count).join())
        setting.tujian && window.tujianlist && (liststr.push('图鉴:' + [...new Set(window.tujianlist.map(i => i.maplv).sort())].map(i => (window.tujianlist.filter(item => item.maplv == i).reduce((total, item2) => total + (item2.need || 0), 0) / 1e4).toFixed(2)).join(' ')), liststr.push(''), liststr.push(window.tujianlist.filter(i => i.mapId == GameMap.fubenID)?.sort((a, b) => a.u.id - b.u.id).map(i => i.less).join('-') + " >> " + window.tujianlist.filter(item => item.maplv == window.tujianlist.find(i => i.mapId == GameMap.fubenID)?.maplv).length
        ));
        mapTjLab.text = list2str(liststr).trim('\n');
    }
    else if (typeof mapTjLab !== 'undefined') {
        mapTjLab.text = '';
    }
    //#endregion

}
/**
 * 图鉴属性变化
 */
function getAttrShowStr(last, now) {
    if (last) {
        var lastlist = AttributeData.getAttrShowStr(last, ":").split('\n')
        var nowlist = AttributeData.getAttrShowStr(now).split('\n')
        return lastlist.map((i, t) => i + ' => ' + nowlist[t].split('<a >')[1].replace(/[^0-9- ]/g, '')).join('\n')
    }
    return AttributeData.getAttrShowStr(now, ":")
}

/**
 * 森林奖励直接查看
 */
function preDesc(txt_desc, data) {
    var t = GlobalConfig.YoumingForestRewardEventConfig[data.eventId];
    if (t.buff) {
        var e = ForestModel.ins().getBuffId(data.location, data.eventId);
        if (e) {
            var i = GlobalConfig.YoumingForestBuffConfig[e];
            txt_desc.textFlow = TextFlowMaker.generateTextFlow(i.desc)
        }
    } else
        txt_desc.text = t.desc2
}

/**
 * 自动切图回蓝
 */
function autochangefullmp() {
    if (iskuafu())
        return
    var mydata = EntityManager.ins().masterList[ActorCC.handle][0].data
    if (mydata.mp / mydata.mp_max < 0.06) {
        var otherfb = GlobalConfig.InstanceConfig[GameMap.fubenID].otherFb.filter(i => i > 1)[0]
        CityCC.ins().sendCityGo(0, otherfb);
    }
}

/**
 * 转换成数组
 */
function obj2list(o, keyname) {
    keyname == void 0 && (keyname = "keyname");
    var list = CommonUtils.objectToArray(o);
    var keys = Object.keys(o);
    list.forEach((item, index) => {
        item[keyname] = keys[index];
    });
    return list;
}
/**
 * 灵境拿到名次后自动打怪
 */
function lingjingautorun() {
    if (BurningDesertCT.ins().roomId > 0 || StardomainCT.ins().roomId > 0 || setting.isclearing)
        return
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var totalMinutes = hours * 60 + minutes;

    if (totalMinutes >= 1165 && totalMinutes < 1295) // 19:25（19*60+25=1165分钟）// 21:35（21*60+35=1295分钟）
        return
    if (iskuafu())
        return
    LingJingCT.ins().sendLingJingWeather()
    var needpow = 10 - ((LingJingCT.ins().buildInfoDic[3]?.id % 10) * 2)
    var haspow = LingJingCT.ins().energy
    var weatherType = LingJingCT.ins().weatherType || 2
    var windDir = LingJingCT.ins().windDir;
    var myrank = Rank.ins().rankModel.length > 30 ? Rank.ins().rankModel[70]._dataList.find(item => item.id == ActorCC.actorID) : 0;
    if (myrank) {
        if (weatherType == 2)
            return
        var poslist = LingJingCT.ins().mapGridDic.flat().filter(i => ['怪物', '精英怪物'].includes(i?.cfg?.name) && i.state !== 1).map(i => ([i.gridX, i.gridY]))
        if (!poslist.length)
            return
        var mypos = [LingJingCT.ins().curPlayerPos.x, LingJingCT.ins().curPlayerPos.y]
        !gotopath?.length && (gotopath = findOptimalPath(mypos, poslist));
        var nearpos = gotopath[0]
        if (mypos[0] == nearpos[0] && mypos[1] == nearpos[1]) {
            gotopath = findOptimalPath(mypos, poslist)
            nearpos = gotopath[0];
        }
        if (haspow < needpow)
            return
        var nearposlist = LingJingCT.ins().nearGridList.map(i => [i.gridX, i.gridY])
        var gotopos = nearposlist.sort((t, k) => distance(nearpos, t) - distance(nearpos, k))[0]
        if (weatherType == 4) {//逆风不走
            // windDir = { '1': "↑", '2': "←", '-1': "↓", '-2': "→" }[windDir];
            if (windDir == 1 && gotopos[1] - mypos[1] < 0)//↑风往↓走
                return
            if (windDir == -1 && gotopos[1] - mypos[1] > 0)//↓风往↑走
                return
            if (windDir == -2 && gotopos[0] - mypos[0] < 0)//→风往←走
                return
            if (windDir == 2 && gotopos[0] - mypos[0] > 0)//←风往→走
                return
        }
        LingJingCT.ins().sendLingJingGoGrid(gotopos[0], gotopos[1])
    }
    else {
        // if(weatherType == 2)
        //     return
        // // ['树林', '矿洞', '精英怪物', '幻影', '牧场', '怪物', '石山', '石材', '守卫', '恶兽', '祭坛', '灯塔', '恶魔祭坛']
        // var poslist = LingJingCT.ins().mapGridDic.flat().filter(i=>['守卫','幻影','恶魔祭坛'].includes(i?.cfg?.name) && i.state !== 1).map(i=>([i.gridX,i.gridY]))
        // if(!poslist.length)
        //     return    
        // var mypos = [LingJingCT.ins().curPlayerPos.x,LingJingCT.ins().curPlayerPos.y]
        // !gotopath?.length && (gotopath = findOptimalPath(mypos,poslist));
        // var nearpos = gotopath[0]
        // if(mypos[0] == nearpos[0] && mypos[1] == nearpos[1]){
        //     gotopath = findOptimalPath(mypos,poslist)
        //     nearpos = gotopath[0];
        // }
    }
}

/**
 * 灵境拿名次后显示清怪路径
 */
function setitemGrp(itemGrp, data) {
    var myrank = Rank.ins().rankModel.length > 30 ? Rank.ins().rankModel[70]._dataList.find(item => item.id == ActorCC.actorID) : 0;
    setTimeout(() => {
        itemGrp.$children.length > 4 && (itemGrp.$children.length = 4)
        gotopath.map((i, t) => {
            if (i[0] == data.x && i[1] == data.y) {
                var numLabel = new eui.Label();
                numLabel.size = 44;
                numLabel.textColor = 0xffffff;
                numLabel.text = t + 1, // 替换为实际数字
                    itemGrp.addChild(numLabel);
                numLabel.x = (itemGrp.width - numLabel.width) / 2,
                    numLabel.y = (itemGrp.height - numLabel.height) / 2
                var item = LingJingCT.ins().getGridInfo(data.x, data.y);
                var name = item?.cfg?.name;
                if (myrank)
                    itemGrp.$children[1].source = "lingjing" + (t == 0 ? "_char" : t == gotopath.length - 1 ? "_unit2" : "_unit3")
                else
                    itemGrp.$children[1].source = "lingjing" + (name == '幻影' ? "_char" : "_unit3")
                itemGrp.$children[2].visible = !1
            }
        })
        // if(!gotopath.find(i=>i[0]== data.x && i[1] == data.y)){
        //     var item = LingJingCT.ins().getGridInfo(data.x, data.y);
        //     var name = item?.cfg?.name;
        //     if(name && item.state !== 1){
        //         var numLabel = new eui.Label();
        //         numLabel.size = 22;
        //         numLabel.textColor = 0xff0000;
        //         numLabel.text = name;
        //         itemGrp.addChild(numLabel);
        //         numLabel.x = (itemGrp.width - numLabel.width)/2,
        //         numLabel.y = (itemGrp.height - numLabel.height)/2
        //     }
        // }
    }, 0)
}

/**
 * 正六边形，两点距离
 */
function distance(pointA, pointB) {
    // 转换为立方体坐标
    const x1 = pointA[0] - (pointA[1] - (pointA[1] & 1)) / 2;
    const z1 = pointA[1];
    const y1 = -x1 - z1;

    const x2 = pointB[0] - (pointB[1] - (pointB[1] & 1)) / 2;
    const z2 = pointB[1];
    const y2 = -x2 - z2;

    // 立方体坐标距离计算
    return (Math.abs(x1 - x2) + Math.abs(y1 - y2) + Math.abs(z1 - z2)) / 2;
}


function findOptimalPath(currentPosition, points) {
    if (!points.length) return [];
    if (!currentPosition) currentPosition = points[0];

    const allPoints = [currentPosition, ...points.filter(p =>
        p[0] !== currentPosition[0] || p[1] !== currentPosition[1])];

    let path = [...allPoints];
    let improved = true;

    while (improved) {
        improved = false;
        for (let i = 1; i < path.length - 2; i++) {
            for (let j = i + 1; j < path.length - 1; j++) {
                const delta = distance(path[i - 1], path[j]) +
                    distance(path[i], path[j + 1]) -
                    distance(path[i - 1], path[i]) -
                    distance(path[j], path[j + 1]);
                if (delta < 0) {
                    path = [...path.slice(0, i), ...path.slice(i, j + 1).reverse(), ...path.slice(j + 1)];
                    improved = true;
                }
            }
        }
    }

    // 移除起始点（如果不需要返回）
    return path.slice(1);
}
/**
 * 一键卸下、穿戴
 */
function emptypro(button) {
    var sum = SubRoles.ins().getSubRoleByIndex(0).equipsData.map(item => item.item.handle).reduce((total, item2) => total + (item2 || 0), 0);
    if (sum) {
        window.currhandles = SubRoles.ins().getSubRoleByIndex(0).equipsData.map(item => item.item.handle)
        window.mastercurrhandles = SubRoles.ins().getSubRoleByIndex(0).masterEquipDatas.map(item => item.handle)
        for (var i = 0; i < 36; i++)
            EquipCT.ins().sendeMoveEquip(i);
        for (var i = 0; i < 4; i++)
            MasterEquipCT.ins().sendMasterEquipOff(0, i)
    }
    else {
        for (var i = 0; i < 36; i++)
            sendSync(Ts.WearEquip, { handle: currhandles[i], pos: i, roleId: 0 });
        for (var i = 0; i < 4; i++)
            MasterEquipCT.ins().sendMasterEquipWear(0, mastercurrhandles[i], i)
    }
    button.textContent = !sum ? "一键卸下" : "一键穿戴";
}

/**
 * 检查目标时空之境boss是否存活或者讨伐令是否够
 */
function checkskzjboss(index, checkcost) {
    BurningDesertCT.ins().reqBossInfo();
    checkcost == void 0 && (checkcost = !0)
    var cost = parseInt(index / 7) * 10 + 30;
    if (GameLogic.ins().kfCost < cost && checkcost)
        return !1
    var bosslist = BurningDesertCT.ins().getShiKongZhiJingBossList(0)
    var bossinfo = BurningDesertCT.ins().bossInfoDic;
    if (!bosslist || !bossinfo)
        return !1
    var t = bossinfo[bosslist[index].id];
    if (0 >= t || void 0 == t) {
        return !0
    }
    t = DateUtils.formatMiniDateTime(t);
    var e = t - GameServerCC.serverTime;
    // DateUtils.getFormatBySecond(Math.ceil(.001 * e));
    return e > 0 && e < 1e4
}
/**
 * 自动挖坑
 */
function mineins() {
    (!Mine.ins().areaInfos || Mine.ins().areaId != 4) && Mine.ins().sendAreaById(4) //导致多次请求，消耗体力
    if (Mine.ins().power > 10 && !Mine.ins().posId && Mine.ins().areaInfos && Mine.ins().areaId == 4) {
        BaseSystem.ins().regNetMsg(1, Mine.ins().postInfo);
        BaseSystem.ins().regNetMsg(2, Mine.ins().postAreaInfo);
        BaseSystem.ins().regNetMsg(7, Mine.ins().postPosInfo);
        var list = Mine.ins().areaInfos[4];
        !list && Mine.ins().sendAreaById(4) && (list = Mine.ins().areaInfos[4]);
        //var pos = Object.keys(list).find(item => !list[item].actorId)
        //pos && Mine.ins().sendHoldPos(pos)
        var powerlist = Object.keys(Mine.ins().areaInfos[4]).map(posId => Rank.ins().rankModel[0]._dataList.find(item => item.id == Mine.ins().areaInfos[4][posId].actorId)?.power || 0)
        var minpower = Math.min(...powerlist)
        var minindex = powerlist.indexOf(minpower)
        var pos = 4001 + minindex;
        Mine.ins().sendHoldPos(pos);
    }
}


var mapSize = 20;
// 主入口：获取安全路径
function findSafestPath(myPos, enemies, allies) {
    const dangerMap = _calculateDangerMap(enemies, 5);
    const blocked = new Set(allies.map(p => `${p[0]},${p[1]}`));
    const goal = _findMinDangerPos(myPos, dangerMap, blocked, 10);
    return goal
}


// 计算最小攻击步数（考虑斜向移动）
function calculateSteps(start, end) {
    const dx = Math.abs(start[0] - end[0]);
    const dy = Math.abs(start[1] - end[1]);
    return Math.max(dx, dy);
}

// 计算全图危险度
function _calculateDangerMap(enemies, movestep) {
    const map = Array(mapSize).fill().map(() => Array(mapSize).fill(0));
    movestep == void 0 && (movestep = 3);
    enemies.forEach(([x, y]) => {
        for (let dx = 0 - movestep; dx <= movestep; dx++) {
            for (let dy = 0 - movestep; dy <= movestep; dy++) {
                const nx = x + dx, ny = y + dy;
                if (this._isValid([nx, ny])) {
                    const dist = this.calculateSteps([nx, ny], [x, y]);
                    const dangernum = Math.max(0, movestep - dist);
                    map[nx][ny] += dangernum * dangernum;
                }
            }
        }
    });
    return map;
}

// 寻找可达范围内危险度最低的位置
function _findMinDangerPos(start, dangerMap, blocked, maxSteps) {
    // 增加探索边界检查   
    if (!_isValid(start) || maxSteps <= 0)
        return start;
    let minDanger = Infinity;
    var minposs = [];
    const x = start[0], y = start[1];
    for (let dx = 0 - maxSteps; dx <= maxSteps; dx++) {
        for (let dy = 0 - maxSteps; dy <= maxSteps; dy++) {
            const nx = x + dx, ny = y + dy;
            const posKey = _posKey([nx, ny]);
            if (_isValid([nx, ny]) && !blocked.has(posKey)) {
                const currentDanger = dangerMap[nx][nx];
                if (currentDanger < minDanger) {
                    minDanger = currentDanger;
                    minposs = [[nx, ny]];
                }
                else if (currentDanger == minDanger) {
                    minposs.push([nx, ny]);
                }
            }
        }
    }
    return findFarestPoint(start, minposs);
}

// 辅助方法
function _isValid(pos) {
    return pos[0] >= 0 && pos[0] < mapSize && pos[1] >= 0 && pos[1] < mapSize;
}
function _posKey(pos) { return `${pos[0]},${pos[1]}`; }

/**
* 抢到boss后远离
*/
function runout1() {
    window.runoutInverval && clearInterval(window.runoutInverval);
    setTimeout(() => {
        var intomojie = !1;
        window.runoutInverval = setInterval(() => {
            if (iskuafu()) {
                intomojie = !0;
                if (BossCT.ins().attHandle == ActorCC.handle) {
                    var Friendlylist = EntityManager.ins().findAll(SubRoles.lookAtTar, EntityType.All, TargetType.Friendly, !0, null, 5).filter(i => !i.data.isMy).map(i => ([i.data.gridX, i.data.gridY]))
                    var Enemylist = EntityManager.ins().findAll(SubRoles.lookAtTar, EntityType.All, TargetType.Enemy, !0, null, 5).map(i => ([i.data.gridX, i.data.gridY]))
                    var mypos = [SubRoles.lookAtTar?.data.gridX, SubRoles.lookAtTar?.data.gridY]
                    const path = findSafestPath(mypos, Enemylist, Friendlylist);
                    console.error(mypos[0], mypos[1], '-->', path[0], path[1]);
                    AccMoveTo(path[0], path[1]);
                }
            }
            else if (intomojie) {
                SkillCT.ins().sendAutoSKill(3, 1);
                window.runoutInverval && clearInterval(window.runoutInverval);
                window.runoutInverval = void 0;
            }
        }, 333);
    }, 3000);
}

function runout() {
    window.runoutInverval && clearInterval(window.runoutInverval);
    setTimeout(() => {
        var accloc = generateBoundaryCoordinates(20);
        var acclocType = Math.floor(Math.random() * 2) ? 1 : -1;
        var acclocIndex = Math.floor(Math.random() * 4) * 2;
        var intomojie = !1;
        // window.acclocIndex = 0;
        window.runoutInverval = setInterval(() => {
            if (iskuafu()) {
                intomojie = !0;
                BossCT.ins().attHandle == ActorCC.handle && AccMoveTo(accloc[acclocIndex][0], accloc[acclocIndex][1]);
                var data = SubRoles.lookAtTar?.data;
                if (data) {
                    if (Math.abs(data.gridX - accloc[acclocIndex][0]) <= 1 && Math.abs(data.gridY - accloc[acclocIndex][1]) <= 1) {
                        acclocIndex = (acclocIndex + 8 + acclocType) % 8;
                    }
                }
            }
            else if (intomojie) {
                SkillCT.ins().sendAutoSKill(3, 1);
                window.runoutInverval && clearInterval(window.runoutInverval);
                window.runoutInverval = void 0;
            }
        }, 333);
    }, 3000);
}
function generateBoundaryCoordinates(width, height) {
    height == void 0 && (height = width)
    const coordinates = [];
    const halfWidth = Math.floor(width / 2);
    const halfHeight = Math.floor(height / 2);

    // 底部中间到右下角
    coordinates.push([halfWidth, height - 1]);
    coordinates.push([width - 1, height - 1]);

    // 右下角到右上角
    coordinates.push([width - 1, halfHeight]);
    coordinates.push([width - 1, 0]);

    //右上角到左上角
    coordinates.push([halfWidth, 0]);
    coordinates.push([0, 0]);

    // 左上角到左下角
    coordinates.push([0, halfHeight]);
    coordinates.push([0, height - 1]);

    return coordinates;
}

/**
 * 寻找最近的点
 */
function findNearestPoint(currentPos, points) {
    let minDist = Infinity;
    let nearestPoint = null;

    points.forEach(point => {
        const dx = point[0] - currentPos[0];
        const dy = point[1] - currentPos[1];
        const dist = dx * dx + dy * dy; // 平方距离避免开方运算

        if (dist < minDist) {
            minDist = dist;
            nearestPoint = point;
        }
    });

    return nearestPoint;
}
/**
 * 寻找最远的点
 */
function findFarestPoint(currentPos, points) {
    let maxDist = -Infinity;
    let farestPoint = null;

    points.forEach(point => {
        const dx = point[0] - currentPos[0];
        const dy = point[1] - currentPos[1];
        const dist = dx * dx + dy * dy; // 平方距离避免开方运算

        if (dist > maxDist) {
            maxDist = dist;
            farestPoint = point;
        }
    });

    return farestPoint;
}

/**
 * 移动到指定坐标
 */
async function AccMoveTo(x, y) {
    var currentpos = [SubRoles.lookAtTar.data.gridX, SubRoles.lookAtTar.data.gridY];
    if (currentpos[0] == x && currentpos[1] == y)//已经在目标位置
        return;
    function getactor(pos) {
        return {
            gridX: pos[0],
            gridY: pos[1],
            checkFun: function () {
                return SubRoles.lookAtTar ? ControlCC.getDis(SubRoles.lookAtTar.data, {
                    gridX: pos[0],
                    gridY: pos[1]
                }) <= 0 : !0
            }
        }
    }
    var actor = getactor([x, y]);
    //var actorlist = ControlCC.getMoveToFun(actor);
    //if (!actorlist.length) {//没有路可走
    //    var poslist = []
    //    var p = []
    //    for (let dx = -1; dx <= 1; dx++) {
    //        for (let dy = -1; dy <= 1; dy++)
    //            (dx || dy) && p.push([x + dx, y + dy]);
    //    }
    //    if (p.find(item => item[0] == currentpos[0] && item[1] == currentpos[1]))//已经在目标相邻位置
    //        return;
    //    for (var i = 0; i < p.length; i++) {
    //        actor = getactor(p[i]);
    //        actorlist = ControlCC.getMoveToFun(actor);
    //        if (actorlist.length) {
    //            p[i].push(Math.abs(currentpos[0] - p[i][0]) + Math.abs(currentpos[1] - p[i][1]));
    //            poslist.push(p[i]);
    //        }
    //    }
    //    if (poslist.length) {//有可走的相邻位置
    //        poslist = poslist.sort((a, b) => a[2] - b[2])//距离最近的位置
    //        actor = getactor(poslist[0]);
    //    }
    //}
    ControlCC.setAuto(!1)
    ControlCC.setCurTar(null)
    await ControlCC.pushCommand(CommandEnum.move, actor)
    ControlCC.setAuto(!0)
}

/**
 * 沙巴克自动进下一关
 */
function gotoNextGuild() {
    //['禁用', '城门', '左城', '右城', '殿前', '皇宫']
    GuildBattleCT.ins().getModel().killName && (GuildBattleCT.ins().sceneId = 1)
    var y = 6;
    switch (GuildBattleCT.ins().sceneId) {
        case 1:
            y = setting.shabake == 3 ? 3 : 2;
            break;
        case 2:
            y = 4;
            break;
        case 3:
            y = 4;
            break;
        case 4:
            y = 5;
            break;
        default:
            y = 6;
            break;
    }
    if (y > setting.shabake)
        return;
    if (5 == y) {
        if (0 == GuildBattleCT.ins().getModel().flagStatu) {
            return;
        }
    }
    else if (y > 1) {
        var b = GuildBattleCT.ins().sceneId
            , w = GlobalConfig.GuildBattleLevel[b];
        if (w) {
            var I = GameServerCC.serverTime - GuildBattleCT.ins().enterSceneTime;
            if (I < 1e3 * w.switchSceneCd)
                return
        }
    }
    else if (y <= 1 || !iskuafu()) {
        window.gotoNextGuildInterval && clearInterval(window.gotoNextGuildInterval)
        return;
    }
    var _ = GlobalConfig.GuildBattleLevel[y];
    if (_.feats > 0) {
        var S = GuildBattleCT.ins().getModel().gongXun;
        if (S < _.feats)
            return
    }
    GuildBattleCT.ins().requestPlayNextMap(y)
}

/**
 * 带队且有讨伐令时，自动打星域小怪
 */
async function gotoxingyu(cost) {
    if (!caninto)
        return;
    if (iskuafu())
        return
    if (GameMap.checkIsInStardomain())
        return
    if ((GameLogic.ins().kfCost < (cost == 55 ? 20 : cost) && hastfl < 0) || hastfl == 0) {
        window.gotoxingyurunInterval && clearInterval(window.gotoxingyurunInterval), (window.gotoxingyurunInterval = void 0);
        if (StardomainCT.ins().roomId) {
            await new Promise(resolve => setTimeout(resolve, 4000));
            StardomainCT.ins().reqExitRoom();
        }
        return
    }
    StardomainCT.ins().reqBossInfo();
    if (!StardomainCT.ins().checkMeIsLeader())
        return
    Guild.ins().sendGuildMembers();
    var teamerids = StardomainCT.ins().roomInfo.members.filter(i => !i.leaderStatus).map(i => i.roleId);
    var offlineteamers = Guild.ins().getGuildMembers().filter(i => teamerids.includes(i.roleID) && i.downTime > 0);
    if (offlineteamers.length)
        return;
    var list = GlobalConfig.StarDomainBossConfig
    //cost == 55 && (list = list.filter(item => item.type > 5));
    var bosslvs = cost == 55 ? [3, 2] : [cost == 20 ? 3 : cost == 35 ? 2 : 1];
    var idlist = Object.keys(list).filter(item => bosslvs.includes(list[item].bossLv) && list[item].type > 5).reverse();
    var bossInfoDic = StardomainCT.ins().bossInfoDic;
    if (!bossInfoDic)
        return
    var gotoid = idlist.find(item => {
        var t = bossInfoDic[+item] ? bossInfoDic[+item].time : 0;
        t && t > 0 && (t = DateUtils.formatMiniDateTime(t));
        var e = t - GameServerCC.serverTime;
        return e < 0 && lastgotoid != item;
    })
    if (gotoid) {
        caninto = !1;
        await new Promise(resolve => setTimeout(resolve, 2000));
        StardomainCT.ins().reqEnterStardomain(+gotoid) //进入
        lastgotoid = gotoid;
        await new Promise(resolve => setTimeout(resolve, 10000));
        caninto = !0;
        hastfl > 0 && hastfl--;
    }
}

/**
 * 打星域入口
 */
function gotoxingyurun(button) {
    StardomainCT.ins().reqBossInfo();
    window.caninto = !0;
    const value = button.parentElement.querySelector('select').value;
    const cost = +value.slice(2);
    window.hastfl = value.includes('用领') ? -1 : cost == 55 ? 16 : cost == 20 ? 8 : cost == 35 ? 4 : 2;
    window.gotoxingyurunInterval && clearInterval(window.gotoxingyurunInterval), (window.gotoxingyurunInterval = void 0);
    window.gotoxingyurunInterval = setInterval(() => { gotoxingyu(cost); }, 1000);
}

/**
 * 快速使用讨伐令
 */
function usetfl(button) {
    const select = button.parentElement.querySelector('select');
    const othenlist = BagCT.ins().bagModel[0];
    othenlist.filter(item => {
        item.itemConfig.name.includes("讨伐令(" + select.value + ")") && FloatWinCT.ins().onUse(item, 1)
    })
}

/**
 * 获取物品数量
 */
function getBagGoodsCountById(e) {
    return BagCT.ins().getBagGoodsCountById(BagCT.BAG_TYPE_EQUIP, e) || BagCT.ins().getBagGoodsCountById(BagCT.BAG_TYPE_OTHTER, e);
}

/**
 * 获取boss复活的剩余时间
 */
function getbosstime(bossid) {
    var t1 = CityCC.ins().mapBossList[bossid]?.time || obj2list(KFBossSys.ins().kfBossList).find(item => item.bossId == bossid)?.time || 0;
    const t2 = (DateUtils.formatMiniDateTime(t1) - GameServerCC.serverTime) / 1e3;
    return Math.max(0, t2);
}

/**
 * 获取地图boss的id
 */
function getBoosIdByFbid(fbid) {
    for (var i = 1; i < 4; i++) {
        var bossinfos = MainUICC.getMapBossList(i).filter(item => item.fbId == fbid);
        if (bossinfos.length) {
            return bossinfos[0].bossId;
        }
    }
    return 0;
}

/**
 * 调用.net后台方法
 */
function callDotNet(msg) {
    window.chrome.webview?.postMessage(msg);
}

/**
 * 数组转换成字符串
 */
function list2str(list) {
    return list.map((item, index) => {
        let str = String(item);
        let len = getStrWidth(str);

        // 偶数索引加换行
        if (index % 2 === 1) {
            str += '\n';
        } else {
            // 补全到12宽度
            while (len < 12) {
                str += '\t';
                len += 1; // 制表符通常算1个宽度
            }
        }
        return str;
    }).join('');
}

/**
 * boss地图位置
 */
function bossmap() {
    var maplist = [];
    var maptype = ['', '玛雅大陆', '苍月岛', '卧龙山庄'];
    for (var i = 1; i < 4; i++) {
        const bosslist = MainUICC.getMapBossList(i);
        const fblist = [];
        for (var j in bosslist) {
            const fb = GlobalConfig.InstanceConfig[bosslist[j].fbId]
            fblist.push({ fbid: fb.fbid, name: fb.name })
        }
        maplist.push({ name: maptype[i], list: fblist })
    }
    return maplist
}

/**
 * 获取字符串显示宽度（中文算2，英文算1）
 */
function getStrWidth(str) {
    let width = 0;
    for (let c of str) {
        width += /[\u4e00-\u9fa5]/.test(c) ? 2 : 1;
    }
    return width;
}

/**
 * 是否在跨服
 */
function iskuafu() {
    // e.FB_TYPE_GUANQIABOSS = 1,
    // e.FB_TYPE_CITY = 2,
    // e.FB_PVP = 3,
    // e.FB_TYPE_9 = 9,
    // e.FB_KF = 10,
    // e.FB_TEAM = 35,
    // e.FB_TYPE_PEAKED = 30,
    // e.FB_TYPE_DEVILDOM_BOSS = 39,
    // e.FB_TYPE_FOREST = 44,
    // e.FB_TYPE_INVADE = 46,
    // e.FB_TYPE_CROSSDART = 49,
    // e.FB_TYPE_GUILD_WAR = 14,
    // e.FB_TYPE_QIYU_BOSS = 45,
    // e.FB_TYPE_SHI_KONG_ZHI_JING = 100,
    // e.FB_TYPE_LIU_DAO_LUN_HUI = 47,
    // e.FB_TYPE_SOULS = 48,
    // e.FB_TYPE_STARDOMAIN = 52,
    // e.FB_TYPE_LINGJING = 53,
    // e.FB_TYPE_CONTEST0 = 54,
    // e.FB_TYPE_CONTEST = 55,
    // e.FB_TYPE_HEGEMONY = 51,
    // e.FB_TYPE_KF_ARENA = 40,
    // e.FB_TYPE_KF_DOMINATE = 56,
    // e.FB_TYPE_ROGUE = 57,
    setting.autorelive && win.get(ReliveWin) && send(Ts.relive, 1);// 自动复活

    if (GameMap.fbType == 47) {
        var mypos = SixReisCT.ins().pos;
        if (mypos > 0) {
            !!SixReisCT.ins().isCostTools == SixReisCT.ins().isPosUnlock(mypos) && SixReisCT.ins().setTakeTools()
            var teamer = SixReisCT.ins().tfMembers.find(i => i.pos != mypos && i.roleName == '矿工');
            setting.liudaofollow && teamer && SixReisCT.ins().postChangeSixPos(teamer.pos);
        }
    }
    fbautorun();

    return GameMap.fbType != 1 && GameMap.fbType != 2;
}

function fbautorun() {
    if (GameMap.fbType == 35 && win.get("TeamFbResultWin")) {
        var isNormal = FbCT.ins().isNormal;
        var isCaptain = (isNormal ? FbCT.ins().tfMembers : FbCT.ins().tfPurgatoryMembers).find(i => i.position == 1 && i.roleID == ActorCC.actorID)
        var e = isNormal ? GlobalConfig.TeamFuBenConfig : GlobalConfig.TeamFuBenExConfig;
        var fbid = (isNormal ? FbCT.ins().tfTeamID : FbCT.ins().tfPurgatoryTeamID);
        fbid >= Object.keys(e).length ? send(Ts.exitFB) : isCaptain && (isNormal ? FbCT.ins().sendExitTFFb(1) : FbCT.ins().sendExitPurgatoryTFFb(1)), win.close("TeamFbResultWin");
    }
}

/**
 * 获取物品列表
 */
function getprolist(qualitys, levels, types, jobs, lock) {
    typeof qualitys === 'number' && (qualitys = [qualitys])
    typeof levels === 'number' && (levels = [0, levels])
    typeof types === 'number' && (types = [types])
    typeof jobs === 'number' && (jobs = [jobs])
    const typeName = ["武器", "头盔", "衣服", "项链", "护腕", "腰带", "戒指", "鞋子", "护腕2", "戒指2", "护肩", "面甲", "披风", "盾牌", "特戒", "特戒", "特戒", "特戒", "勋章", "玉佩", "神盾", "秘录", "子鼠", "丑牛", "寅虎", "卯兔", "辰龙", "巳蛇", "午马", "未羊", "申猴", "酉鸡", "戌狗", "亥猪", "符咒", "号角"], jobnames = ["通用", "战士", "法师", "道士", "刺客", "弓手"],
        qualitynames = ["普通", "优秀", "精良", "史诗", "传说", "远古", "神器"];
    typeof qualitys === 'string' && (qualitys = [qualitynames.indexOf(qualitys)])
    typeof types === 'string' && (types = [typeName.indexOf(types)])
    typeof jobs === 'string' && (jobs = [jobnames.indexOf(jobs)])

    typeof qualitys === 'object' && (qualitys = qualitys.map(item => qualitynames.indexOf(item) < 0 ? item : qualitynames.indexOf(item)))
    typeof types === 'object' && (types = types.map(item => typeName.indexOf(item) < 0 ? item : typeName.indexOf(item)))
    typeof jobs === 'object' && (jobs = jobs.map(item => jobnames.indexOf(item) < 0 ? item : jobnames.indexOf(item)))

    var list = BagCT.ins().bagModel[1];
    list = list.filter(item => {
        const configID = item.configID;
        const config = GlobalConfig.ItemConfig[configID];
        const job = ItemUtil.getJob(config);
        const type = ItemUtil.getSubType(config);
        const level = item.itemConfig.level;
        const quality = item.quality;
        var res = qualitys == undefined ? !0 : qualitys.includes(quality);
        res &&= jobs == undefined ? !0 : (jobs.includes(job) || job == 0);
        res &&= types == undefined ? !0 : types.includes(type);
        res &&= levels == undefined ? !0 : level >= levels[0] && level <= levels[1];
        res &&= lock == undefined ? !0 : item.lock == lock;
        return res;
    });
    return list;
}


/**
 * 显示六道地图
 */
function showsix() {
    var list = SixReisCT.ins().sixBaseMap;
    var buffnamelist = []
    for (var i in list) {
        var buffname = getBuffname(list[i]);
        var id = list[i].layer;
        SixReisCT.ins().pos == id && (buffname = "★" + buffname);
        buffnamelist.push({ name: buffname, state: list[i].state });
    }
    // 转换为表格数据格式
    var tableData = [];
    for (let row = 0; row < 8; row++) {
        var rowData = {};
        for (let col = 0; col < 9; col++) {
            rowData[`列${col + 1}`] = buffnamelist[row * 9 + col];
        }
        tableData.push(rowData);
    }
    buffnamelist.length && showTablePopup(buffnamelist)
}

/**
 * 显示活动信息
 */
function showhdinfo(weeks) {
    weeks == void 0 && (weeks = 0);
    if (typeof weeks == 'object') {
        var select = weeks.parentElement.querySelector('select');
        weeks = +select.value
    }
    var today = new Date();
    var hdlist = CommonUtils.objectToArray(GlobalConfig.ActivityConfig)
    var currhdid = hdlist.find(item => new Date(item.startTime) < today && new Date(item.endTime) > today && item.endTime != '9999-0:0')?.Id || 0;
    var willhdid = hdlist.find(item => new Date(item.startTime) > today && item.startTime != '9999-0:0').Id
    willhdid = parseInt(willhdid / 100);
    if (currhdid)
        window.currhdlist = hdlist.filter(i => parseInt(i.Id / 100) == parseInt(currhdid / 100) && new Date(i.endTime) > today && i.startTime != '9999-0:0');
    if (willhdid == parseInt(currhdid / 100))
        willhdid = willhdid + 1;
    window.nexthdlist = hdlist.filter(i => parseInt(i.Id / 100) == willhdid + weeks && i.startTime != '9999-0:0');

    const daysDiff = (d1, d2) => Math.floor((new Date(d2) - new Date(d1)) / 864e5) % 5;
    var list = '洗练特惠,书页特惠,神符特惠,神兵特惠,经脉特惠'.split(',');
    var currindex = Object.keys(Shop.ins().weekLoopLimitDatas).pop() / 9 - 1;

    var ybhd = nexthdlist.find(i => i.activityType == 10)
    var lindex = (currindex + daysDiff(today, ybhd.startTime) + 6) % 5
    ybhd.desc = '<span style="color:green">【' + list[lindex] + '】</span>' + ybhd.desc

    var getusename = (hdid) => { return hdid ? GlobalConfig.ItemConfig[GlobalConfig.ActivityType55Config[hdid][1].award[0].id].name : '' }
    nexthdlist.filter(i => i.activityType == 55).map((i, t) => t && (i.desc += '[2]'))

    var nextinfo = ['即将开始:' + getusename(nexthdlist.find(i => i.activityType == 55)?.Id), ...nexthdlist.map(item => (GlobalConfig.ActivityBtnConfig[item.Id]?.title || '') + ' ' + (item.startTime + '=>' + item.endTime).replaceAll('-0:0', '').replaceAll(today.getFullYear() + '.', '') + '  ' + item.desc)];

    var currinfo = weeks ? [] : currhdlist.map(item => (GlobalConfig.ActivityBtnConfig[item.Id]?.title || '') + ' ' + (item.startTime + '=>' + item.endTime).replaceAll('-0:0', '').replaceAll(today.getFullYear() + '.', '') + '  ' + item.desc);
    currinfo.length && currinfo.unshift('当前活动:' + getusename(currhdlist.find(i => i.activityType == 55)?.Id));
    showTablePopup([...deduplicateArray(currinfo), ...deduplicateArray(nextinfo)], 'hdinfo')
}

function getxgth(xgthid) {
    var xgthlist = obj2list(GlobalConfig.ActivityType55Config[xgthid]);
    xgthlist.map(i => (i.award.map(j => j.name = GlobalConfig.ItemConfig[j.id]?.name || '元宝')))
    return xgthlist.map(i => (i.money / 10 + '').padStart(i.money < 100 ? 5 : i.money < 1000 ? 4 : 3, '\u00A0 ') + '元 ' + i.buyTimes + '次 => ' + i.award.map(j => (j.name + '*' + j.count)))
}

function deduplicateArray(arr) {
    const seen = new Set();
    const result = [];

    for (const item of arr) {
        const key = item.replace(/\d+/g, '');
        if (!seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }
    return result;
}
/**
 * 获取buff名称
 */
window.getBuffname = function (p) {
    var mapconfig = GlobalConfig.SixUndergroundPalacesTypeConfig[p.type];
    var bufflist = mapconfig.buffDesc;
    var buffid = (SixReisCT.ins().returnBuffIdx(p.layer) || 0)
    var buffname = "领主";
    var name = mapconfig.mapName;
    var teamer = SixReisCT.ins().tfMembers.find(item => SixReisCT.ins().pos != item.pos && item.pos == p.layer && item.roleID != ActorCC.actorID)?.roleName || '';
    teamer && (teamer += '●')
    buffid && (buffname = bufflist[buffid - 1]);
    if (!p.state)
        buffname = "？" + buffname;
    var no = SixReisCT.ins().sixBaseMap.indexOf(p) + 1;
    var res = (teamer || buffname.split("+")[0]) + (name == "失落遗迹" ? "▲" : "");
    if (!((DateUtils.formatMiniDateTime(p.time) - GameServerCC.serverTime) / 1e3 <= 0)) {
        var f = (DateUtils.formatMiniDateTime(p.time) - GameServerCC.serverTime) / 1e3;
        res += '\n' + DateUtils.getFormatBySecond(f, DateUtils.TIME_FORMAT_1).substring(3)
    }
    return no + res.replace('增幅', '').replace('最大攻击', '大攻').replace('伤害减免', '减免').replace('最小攻击', '小攻').replace('最大防御', '大防').replace('最小防御', '小防').replace('无视防御', '无视');
}

/**
 * 弹框显示
 */
function showTablePopup(buffnamelist, type) {
    // 弹窗已存在，则先移除
    var modal = document.getElementById('popup-modal');
    modal && document.body.removeChild(modal);
    // 创建弹窗容器
    modal = document.createElement('div');
    modal.id = 'popup-modal';
    modal.style = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center; z-index:9999;';

    // 创建表格内容
    const table = document.createElement('table');
    //自适应大小
    table.style = 'background:white; border-collapse:collapse; width:100%; max-width:800px; height:400px;';
    // 表格数据填充逻辑（示例）
    if (type == 'hdinfo') {
        {
            const tr = table.insertRow();
            var list = '洗练特惠,书页特惠,神符特惠,神兵特惠,经脉特惠'.split(',');
            var currindex = Object.keys(Shop.ins().weekLoopLimitDatas).pop() / 9 - 1;
            list[currindex] = '<span style="color:green">' + list[currindex] + '</span>'
            const td = tr.insertCell();
            td.innerHTML = '<span style="color:darkblue">商城限购：\t\t</span>' + list.join('\t\t')
        }
        var showthlb = !1;
        for (let i = 0; i < buffnamelist.length; i++) {
            const tr = table.insertRow();
            const td = tr.insertCell();
            const text = `${buffnamelist[i].replace('活动期间，', '').replace('活动期间', '') || ''}`;
            if (text.includes('当前活动')) {
                td.innerHTML = '<div style="color:green">' + text + ' </div>'
            }
            else if (text.includes('即将开始')) {
                showthlb = !0;
                td.innerHTML = '<div style="color:blue">' + text + ' </div>'
            }
            else if (text.includes('特惠礼包') && showthlb) {
                const brinfo = '<div style="color:' + (!text.includes('[2]') ? 'chocolate' : 'green') + ';cursor:pointer">>>>>>>>>特惠礼包内容<<<<<<<<</div>'
                const thhds = nexthdlist.filter(i => i.activityType == 55);
                const thhdid = text.includes('[2]') ? thhds[1].Id : thhds[0].Id;
                const xgthinfo = text + brinfo + '<div>' + getxgth(thhdid).join('<br>') + '</div>'
                const xgthdiv = document.createElement('div');
                xgthdiv.innerHTML = xgthinfo + brinfo
                td.appendChild(xgthdiv);
                const divlist = td.querySelectorAll('div div')
                divlist.forEach((i, index) => (i.style.cursor = 'pointer', index != 1 && (i.onclick = () => divlist.forEach((i1, index1) => index1 && (i1.style.display = i1.style.display == 'none' ? 'block' : 'none'))), index && (i.style.display = 'none')))
                //td.innerHTML = '<div style="color:blue">' + text + ' </div>'
            }
            else
                td.innerHTML = text;
        }
    }
    else {
        for (let i = 0; i < 8; i++) {
            const tr = table.insertRow();
            for (let j = 0; j < 9; j++) {
                const td = tr.insertCell();
                var buffitem = buffnamelist[i * 9 + j];
                td.style.color = buffitem?.state == 1 ? 'green' : buffitem?.state == 2 ? 'blue' : null;
                var name = buffitem?.name || '';
                name.includes('●') && (td.style.outline = '2px solid green', td.style.outlineOffset = '-4px')
                name.includes('★') && (td.style.color = 'red', td.style.outline = '2px solid red', td.style.outlineOffset = '-4px')
                name.includes('？') && (td.style.color = 'gray')
                name.includes('▲') && (td.style.backgroundColor = 'mistyrose') && (td.style.padding = '5px') && (td.style.backgroundClip = 'content-box')
                name.includes('领主') && (td.style.color = 'red')
                // name.includes('\n') && (td.style.whiteSpace = 'pre-wrap')
                td.style.fontSize = 11 + 'px';
                name = name.replace('●', '').replace('▲', '').replace('？', '').replace('★', '')
                var strs = name.split('\n')
                td.innerHTML = `${strs[0] || ''}` + (strs.length > 1 ? '<br><span style="color:red">' + strs[1] + '</span>' : "");
                td.style.textAlign = 'center';
            }
        }
    }
    modal.appendChild(table);

    document.body.appendChild(modal);

    // 点击弹窗外部，关闭弹窗
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

/**
 * 获取装备列表
 * @param {number} type 类型，155:幸运，159:全技能，156:经验
 * @param {number} subType 子类型：-1时返回全部，位置，0"武器", 1"头盔", 2"衣服", 3"项链", 4"护腕", 5"腰带", 6"戒指", 7"鞋子", 8"护腕2", 9"戒指2"
 * @param {number} num 数量：0时返回全部，1时返回第一个，2时返回前两个
 */
function getprobytype(type, subType, num) {
    if (!BagCT.ins().bagModel[1])
        return []
    var qualityname = ["普通", "优秀", "精良", "史诗", "传说", "远古", "神器"];
    void 0 == subType && (subType = -1)
    void 0 == num && (num = 0)
    var plist = [...BagCT.ins().bagModel[1], ...SubRoles.ins().getSubRoleByIndex(0).equipsData.slice(0, 10).map(item => item.item)].map(item => {
        var p = CommonUtils.objectToArray(item.supExtAtt).filter(item1 => item1.type == type);
        if (p.length && (item.subType == subType || subType == -1) && (item.job == ActorCC.jobId
            || item.job == 0)) {
            var sum = p.reduce((total, item2) => total + (item2.value || 0), 0);
            return { handle: item.handle, supatt: sum, subType: item.subType, qualityname: qualityname[item.quality], name: item.itemConfig.name, item: item }
        }
    }).filter(Boolean).sort((b, a) => a.supatt - b.supatt);
    if (plist.length) {
        return num ? plist.slice(0, num) : plist;
    }
}

/**
 * 一键换装
 * @param {string} type 类型，att:攻击力，exp:经验
 */
function changepro(type) {
    var sum = SubRoles.ins().getSubRoleByIndex(0).equipsData.map(item => item.item.handle).reduce((total, item2) => total + (item2 || 0), 0);
    if (!sum)
        return
    if (protype == type)
        return;
    protype = type;
    for (var i = 0; i < 8; i++) {
        var atttype = type == 'att' ? ((i == 0 || i == 3) ? 155 : 159) : 156
        var num = (i == 4 || i == 6) ? 2 : 1;
        var plist = getprobytype(atttype, i, num)
        if (!plist?.length)
            continue;
        sendSync(Ts.WearEquip, { handle: plist[0].handle, pos: plist[0].subType, roleId: 0 });
        if (num > 1) {
            var offset = i == 4 ? 4 : 3;
            sendSync(Ts.WearEquip, { handle: plist[1].handle, pos: plist[1].subType + offset, roleId: 0 });
        }
    }
}


/**
 * 获取装备信息
 * @param {object} supExtAtt 装备的supExtAtt属性
 * @param {number[]} supExtAttQuality 装备的supExtAttQuality属性
 * @returns {number[]} [幸运值，颜色数量，锁定信息]
 */
function getproluckinfo(supExtAtt, supExtAttQuality, type) {
    void 0 == type && (type = 155)
    var p = CommonUtils.objectToArray(supExtAtt).filter(item => item.type == type);
    var typesum = p.reduce((total, item2) => total + (item2.value || 0), 0);
    var colornum = supExtAttQuality.filter(i => i == 4).length;
    var locks = CommonUtils.objectToArray(supExtAtt).map((i, t) => {
        if (i.type == type && i.value == 3) {
            return parseInt(t / 2) + 1;
        }
    }).filter(Boolean);
    var colors = supExtAttQuality.map((i, t) => {
        if (i == 4) {
            return parseInt(t / 2) + 1;
        }
    }).filter(Boolean).filter(i => !locks.includes(i));
    return [typesum, colornum, locks, [...locks, ...colors]];
}
//#endregion

//#region 入口
window.autoRunInterval && clearInterval(window.autoRunInterval);
window.autoRunInterval = setInterval(async () => { await autoRun(); }, 60000);
autoRun();

window.autoRun1Interval && clearInterval(window.autoRun1Interval);
window.autoRun1Interval = setInterval(autoRun1, 1000);

//#region 自动换装
function autochange() {
    if (setting.autochange && typeof EntityManager !== 'undefined') {
        if (iskuafu()) {
            changepro('att')
        }
        else {
            var bossid = getBoosIdByFbid(GameMap.fubenID);
            var isguajimap = setting.guajifbid == GameMap.fubenID && bossid
            if (isguajimap && setting.autochange == 1) {//多人地图组队，且有队友时
                // CityCC.ins().sendTeamList(), CityCC.ins().sendTeamPlayerInfo(); // 更新队伍信息
                var hasteamr = !!CityCC.ins().teamNumberSList.find(item => item.fbId == setting.guajifbid && item.actId != ActorCC.actorID)
                if (hasteamr) {
                    changepro('exp')
                    return
                }
            }
            var attr = EntityManager.ins().find(SubRoles.lookAtTar, EntityType.Monster, TargetType.Enemy, !0, !1, null, 5)?.data?.attr
            if (attr) {
                var hp = attr[0];
                var maxhp = attr[2];
                //最大血量大于140万，当前血量小于60万
                if (maxhp > 14e5 && hp < 4.5e5) {
                    changepro('exp')
                }
                else {
                    changepro('att')
                }
            }
        }
    }
}
window.autochangeInterval && clearInterval(window.autochangeInterval);
window.autochangeInterval = setInterval(autochange, 100);
//#endregion

//#endregion

//#region 配置面板

// 配置数据结构
var CONFIG = {
    itemsPerRow: 3, // 每行显示的配置项数量
    panelWidth: 130 * 3 + 'px' // 面板宽度
};

function findFbItem(targetFbid) {
    const guajiData = configData.guajifbid.initvalue;
    for (const region of guajiData) {
        const foundItem = region.list.find(item => item.fbid === targetFbid);
        if (foundItem) {
            return region.name
        }
    }
    return null;
}

Object.entries(configData).forEach(([key, config], index) => {
    config.value = setting[key]
});

function savesetting() {
    setting = Object.entries(configData).reduce((acc, [key, val]) => {
        acc[key] = val.value;
        return acc;
    }, {});
    setting.last_time = (new Date().getTime() / 1000).toFixed() * 1
    localStorage.setItem('setting' + channel_uid, JSON.stringify(setting));
    //savetimer && clearTimeout(savetimer);
    //savetimer = setTimeout(() => { callDotNet('save'); }, 60000)

}
// 创建配置项容器
function createConfigContainer() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '15px';
    container.style.marginBottom = '15px';
    return container;
}

// 创建多级选择器
function createMultiLevelSelector(key, config) {
    const container = document.createElement('div');
    container.style.width = '100%';

    const label = document.createElement('div');
    label.style.fontSize = '27px'
    label.textContent = config.displayText;
    container.appendChild(label);

    const container1 = document.createElement('div');
    container1.style = "display: flex; flex-wrap: wrap; gap: 15px;";
    container1.id = 'guajidiv'
    // 创建地区选择
    const regionSelect = document.createElement('select');
    // regionSelect.style.margin = '5px 5px';
    regionSelect.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
    for (var i = config.initvalue.length - 1; i >= 0; i--) {
        var region = config.initvalue[i]
        const option = document.createElement('option');
        option.value = region.name;
        option.textContent = region.name;
        regionSelect.appendChild(option);
    }
    container.appendChild(container1);
    container1.appendChild(regionSelect);

    // 创建副本选择
    const fbSelect = document.createElement('select');
    // fbSelect.style.margin = '5px 5px';
    fbSelect.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
    // fbSelect.style.width = '100%';

    // 更新副本列表函数
    const updateFbList = () => {
        fbSelect.innerHTML = '';
        const selectedRegion = config.initvalue.find(r => r.name === regionSelect.value);
        for (var i = selectedRegion.list.length - 1; i >= 0; i--) {
            var fb = selectedRegion.list[i];
            const option = document.createElement('option');
            option.value = fb.fbid;
            option.textContent = `${fb.name}`;// (${fb.fbid})`;
            fbSelect.appendChild(option);
        }
    };

    regionSelect.addEventListener('change', updateFbList);
    fbSelect.addEventListener('change', () => {
        config.value = fbSelect.value * 1; savesetting()
    });
    updateFbList(); // 初始化
    regionSelect.value = findFbItem(config.value)
    fbSelect.value = config.value
    container1.appendChild(fbSelect);
    return container;
}

// 移除现有元素
var cleanExistingElements = () => {
    const existing = document.getElementById('config-float-panel');
    existing?.parentNode?.removeChild(existing);
    const existingBtn = document.getElementById('config-toggle-btn');
    existingBtn?.parentNode?.removeChild(existingBtn);
};

// 创建多级选择器
function createXilian(key, config) {
    const container = document.createElement('div');
    container.style.width = '100%';

    var label = document.createElement('div');
    label.style.fontSize = '27px'
    label.textContent = config.displayText;
    container.appendChild(label);

    const container1 = document.createElement('div');
    container1.style = "display: flex; flex-wrap: wrap; gap: 15px;";
    container1.id = 'xiliandiv'
    container.appendChild(container1);

    var slist = [];
    var v = config.value;
    var l = ['listtype', 'listquality', 'listpos', 'listjob']
    var ltext = ['类型', '品质', '部位', '职业']
    for (var j = 0; j < l.length; j++) {
        const item = document.createElement('div');
        item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
        const select = document.createElement('select');
        slist.push(select);
        for (var i = 0; i < config[l[j]].length; i++) {
            var region = config[l[j]][i]
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            select.appendChild(option);
        }
        select.value = v[j];
        item.innerText = ltext[j] + ' '
        item.appendChild(select);
        container1.appendChild(item);
    }

    var t = ['lvs', 'maxnum']
    var ttext = ['等级', '洗炼石']
    for (var j = 0; j < t.length; j++) {
        var item = document.createElement('div');
        item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
        var input = document.createElement('input');
        slist.push(input);
        input.type = j ? "number" : "text";
        input.style = `width:45%`;
        input.value = v[j + 4] || [config[t[j]]].flat().join('-')
        item.innerText = ttext[j] + ' '
        item.appendChild(input);
        container1.appendChild(item);
    }

    var item = document.createElement('div');
    item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = key;
    var label = document.createElement('label');
    label.htmlFor = key;
    label.textContent = '开始洗炼';
    label.style.marginLeft = '8px';
    item.append(checkbox, label);
    container1.appendChild(item);
    checkbox.onchange = () => { isxilian = !isxilian; };
    checkbox.checked = isxilian;

    var item = document.createElement('div');
    item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
    var button = document.createElement('button');
    button.textContent = '保存';
    //config.button存储的是函数名
    button.onclick = () => {
        config.value = slist.map(i => i.value);
        savesetting();
    };
    item.appendChild(button);
    container1.appendChild(item);

    return container;
}

// 初始化悬浮面板
function initFloatPanel() {
    cleanExistingElements();

    var floatPanel = document.createElement('div');
    floatPanel.id = 'config-float-panel';
    floatPanel.appendChild(createTabSystem(tabConfig));
    Object.assign(floatPanel.style, {
        position: 'fixed', top: '45px', left: '10px',
        zIndex: '9999', backgroundColor: '#fff',
        padding: '15px', borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        width: CONFIG.panelWidth, maxHeight: '80vh',
        overflowY: 'auto', display: 'none'
    });

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'config-toggle-btn';
    toggleBtn.textContent = '配置';
    Object.assign(toggleBtn.style, {
        position: 'fixed', top: '5px', left: '5px',
        zIndex: '10000', padding: '5px 5px'
    });

    var hidepanel
    toggleBtn.onmouseenter = () => {
        floatPanel.style.display = 'block';
        hidepanel && clearTimeout(hidepanel);
    };
    toggleBtn.onmouseleave = () => {
        hidepanel = setTimeout(() => {
            floatPanel.style.display = 'none';
        }, 2000);
    };

    floatPanel.onmouseenter = () => {
        hidepanel && clearTimeout(hidepanel);
    };

    floatPanel.onmouseleave = () => {
        floatPanel.style.display = 'none';
    };
    document.body.append(toggleBtn, floatPanel);

    tabConfig.map(tab => {
        var floatPanel1 = document.getElementById(tab.id)
        // 创建配置项
        let currentContainer = createConfigContainer();
        floatPanel1.appendChild(currentContainer);
        Object.entries(configData).filter(c => 'tab' + (c[1]?.tab || 'main') == tab.id).forEach(([key, config], index) => {
            // 每CONFIG.itemsPerRow个项换行
            if (index % CONFIG.itemsPerRow === 0 && index !== 0 && currentContainer.children.length > 0) {
                currentContainer = createConfigContainer();
                floatPanel1.appendChild(currentContainer);
            }

            if ('initvalue' in config) {
                // 多级选择器单独一行
                if (currentContainer.children.length > 0) {
                    currentContainer = createConfigContainer();
                    floatPanel1.appendChild(currentContainer);
                }
                currentContainer.appendChild(createMultiLevelSelector(key, config));
                currentContainer.style.width = '100%';
            }
            else if ('listtype' in config) {
                // 多级选择器单独一行
                if (currentContainer.children.length > 0) {
                    currentContainer = createConfigContainer();
                    floatPanel.appendChild(currentContainer);
                }
                currentContainer.appendChild(createXilian(key, config));
                currentContainer.style.width = '100%';
            }
            else if ('list' in config) {
                const item = document.createElement('div');
                item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
                const select = document.createElement('select');
                select.id = 'cb' + key;
                for (var i = 0; i < config.list.length; i++) {
                    var region = config.list[i]
                    const option = document.createElement('option');
                    option.value = region;
                    option.textContent = region;
                    select.appendChild(option);
                }
                item.innerText = config.displayText + ' '
                item.appendChild(select);
                select.addEventListener('change', () => { eval(config.change) });
                select.value = config.list[config.value];
                if ('inguaji' in config) {
                    setTimeout(() => {
                        var guajidiv = document.querySelector('#guajidiv');
                        guajidiv && guajidiv.appendChild(item);
                    }, 0)
                }
                else
                    currentContainer.appendChild(item);
            }
            else if ('button' in config) {
                // 普通按钮
                const item = document.createElement('div');
                item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;
                const button = document.createElement('button');
                button.textContent = config.displayText;
                //config.button存储的是函数名
                button.onclick = () => { eval(config.button) };
                if ('list1' in config) {
                    const select = document.createElement('select');
                    for (var i = 0; i < config.list1.length; i++) {
                        var region = config.list1[i]
                        const option = document.createElement('option');
                        option.value = region;
                        option.textContent = region;
                        select.appendChild(option);
                    }
                    item.appendChild(select);
                    item.append(' ')
                }
                item.appendChild(button);
                if ('info' in config) {
                    const info = document.createElement('div');
                    info.id = key + 'info';
                    info.innerText = config.info;
                    item.appendChild(info);
                }
                currentContainer.appendChild(item);
            }
            else if ('text' in config) {
                const item = document.createElement('div');
                item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;

                const txt = document.createElement('input');
                txt.type = 'text';
                txt.style = `width:45%`;
                txt.id = key;
                txt.value = config.value || ''
                txt.onchange = () => { eval(config.text); console.error(txt.value); savesetting() };

                const label = document.createElement('label');
                label.textContent = config.displayText;
                label.style.marginRight = '8px';

                item.append(label, txt);
                currentContainer.appendChild(item);

            }
            else {
                // 普通复选框
                const item = document.createElement('div');
                item.style = `width:calc(${100 / CONFIG.itemsPerRow}% - 15px)`;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;
                checkbox.checked = config.value === 1;
                checkbox.onchange = () => { configData[key].value = checkbox.checked ? 1 : 0; savesetting() };

                const label = document.createElement('label');
                label.htmlFor = key;
                label.textContent = config.displayText;
                label.style.marginLeft = '8px';

                item.append(checkbox, label);
                if ('inguaji' in config) {
                    setTimeout(() => {
                        var guajidiv = document.querySelector('#guajidiv');
                        guajidiv && guajidiv.appendChild(item);
                    }, 0)
                }
                else
                    currentContainer.appendChild(item);
            }
        });
    })

}
document.getElementById('cssstyleElement')?.remove();
var styleElement = document.createElement('style');
styleElement.id = 'cssstyleElement'
styleElement.type = 'text/css';
var cssText = `
.tab-buttons { display: flex; border-bottom: 1px solid #ddd; }
.tab-btn { 
    padding: 10px 20px; 
    background: none; 
    border: none; 
    cursor: pointer; 
    font-size: 16px;
}
.tab-btn.active { 
    border-bottom: 3px solid #4285f4; 
    color: #4285f4;
}
.tab-panel { display: none; margin-top: 20px; }
.tab-panel.active { display: block; }
`;
styleElement.appendChild(document.createTextNode(cssText));
document.head.appendChild(styleElement);

initFloatPanel();

function createTabSystem(config) {
    var container = document.createElement('div');
    container.className = 'tab-container'

    const tabHeader = document.createElement('div');
    tabHeader.className = 'tab-buttons';

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';

    config.forEach(tab => {
        const tabButton = document.createElement('button');
        tabButton.textContent = tab.title;
        tabButton.dataset.tabId = tab.id;
        tabButton.className = 'tab-btn'
        tabButton.addEventListener('click', () => switchTab(tab.id));
        tabHeader.appendChild(tabButton);

        const tabPanel = document.createElement('div');
        tabPanel.id = tab.id;
        tabPanel.className = 'tab-panel'
        tabPanel.innerHTML = tab.content || '';
        tabPanel.style.display = tab.active ? 'block' : 'none';
        tabContent.appendChild(tabPanel);
        if (tab.active) {
            tabButton.classList.add('active'), tabPanel.classList.add('active');
        }
    });

    container.appendChild(tabHeader);
    container.appendChild(tabContent);

    function switchTab(tabId) {
        document.querySelectorAll('.tab-btn, .tab-panel').forEach(el => {
            el.classList.remove('active');
        });
        config.forEach(tab => {
            const panel = document.getElementById(tab.id);
            const button = document.querySelector(`[data-tab-id="${tab.id}"]`);
            if (panel && button) {
                panel.style.display = tab.id === tabId ? 'block' : 'none';
                button.style.fontWeight = tab.id === tabId ? 'bold' : 'normal';
                tab.id === tabId && button.classList.add('active'), panel.classList.add('active');
            }
        });
    }
    return container
}

//#endregion
