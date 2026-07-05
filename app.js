const DATA = {
  hotels: [
    {
      name: "青岛五四广场小麦岛桔子水晶酒店",
      area: "五四广场/小麦岛/香港中路",
      nights: "7月6日-7月8日，住2晚",
      price: "大床房预估 460-780 元/晚",
      text: "D1 先走石老人-海之恋-小麦岛-五四广场这条东海岸最顺；D2 再切去老城、八大关和第二海水浴场；D3 只去啤酒博物馆后离开青岛。",
      query: "青岛五四广场小麦岛桔子水晶酒店",
    },
    {
      name: "全季酒店 烟台火车站所城里店",
      area: "烟台站/所城里/朝阳街",
      nights: "7月8日-7月10日，住2晚",
      price: "大床房预估 320-520 元/晚",
      text: "D3晚上朝阳街、所城里步行或短打车；D4烟台山、滨海广场、渔人码头、养马岛一线出发方便；D5去烟台港也顺。",
      query: "全季酒店 烟台火车站所城里店",
    },
    {
      name: "桔子酒店 大连东港港湾广场店",
      area: "东港/港湾广场/中山广场",
      nights: "7月10日-7月12日，住2晚",
      price: "大床房预估 380-650 元/晚",
      text: "D5到大连后直接东港夜景；D6从星海向老虎滩、东港推进，晚上不折返；D7去周水子机场也稳。",
      query: "桔子酒店 大连东港港湾广场店",
    },
  ],
  days: [
    {
      id: "day1",
      date: "7月6日",
      title: "福州飞青岛，先走东海岸风景线",
      summary: "青岛胶东机场 → 青岛五四广场小麦岛桔子水晶酒店 → 石老人海水浴场 → 海之恋公园 → 小麦岛公园 → 五四广场 → 前海沿 → 奥帆中心夜景 → 酒店",
      routeNote: "从最东边的石老人一路往西走到五四广场，正好顺着小麦岛片区回收，不走回头路。",
      stops: [
        ["08:55", "福州长乐国际机场", "福州长乐国际机场", "厦航早班机从福州起飞，11:15 抵达青岛胶东。", 12, 78, "driving"],
        ["12:50", "青岛五四广场小麦岛桔子水晶酒店", "青岛五四广场小麦岛桔子水晶酒店", "先寄存行李，落地当天不硬塞老城。", 26, 64, "driving", "桔子水晶酒店"],
        ["13:30", "石老人海水浴场", "青岛 石老人海水浴场", "东海岸第一站，先从最东边开始往西走。", 78, 24, "driving"],
        ["14:30", "海之恋公园", "青岛 海之恋公园", "小众安静的海滨公园，适合短停拍照。", 67, 36, "driving"],
        ["15:40", "小麦岛公园", "青岛 小麦岛公园", "草坪、海岸步道和日落都很出片。", 54, 48, "driving"],
        ["16:50", "五四广场", "青岛 五四广场", "五月的风和海边广场，顺路回市区。", 42, 58, "driving"],
        ["18:00", "前海沿·青岛菜 五四广场永旺店", "前海沿 青岛菜 五四广场永旺店", "吃海肠捞饭、鲅鱼水饺、老青岛炸肉。下午饿可补众品老方子锅贴甜沫。", 34, 70, "walking", "前海沿"],
        ["19:40", "青岛奥帆中心", "青岛 奥帆中心", "看夜景后回酒店，第一天节奏放松。", 24, 82, "walking"],
      ],
    },
    {
      id: "day2",
      date: "7月7日",
      title: "海泊桥早市+老城街巷+八大关+第二海水浴场",
      summary: "酒店 → 海泊桥早市 → 圣弥额尔大教堂 → 栈桥 → 鲁迅公园 → 银鱼巷 → 信号山 → 小鱼山 → 双合园 → 福山支路 → 大学路 → 黄县路/龙江路 → 八大关 → 第二海水浴场 → 台东步行街",
      routeNote: "先把西部老城走完，再顺着大学路推到八大关和第二海水浴场，最后北切台东吃夜市。",
      stops: [
        ["08:00", "青岛五四广场小麦岛桔子水晶酒店", "青岛五四广场小麦岛桔子水晶酒店", "第二天从酒店出发。", 14, 78, "driving", "桔子水晶酒店"],
        ["08:30", "海泊桥早市", "青岛 海泊桥早市", "重点吃海阳喜饼、开花大馒头。没吃够可加众品老方子锅贴甜沫。", 30, 24, "driving"],
        ["09:30", "圣弥额尔大教堂", "青岛 圣弥额尔大教堂", "老城经典点，和栈桥、银鱼巷顺路。", 42, 34, "driving"],
        ["10:10", "栈桥", "青岛 栈桥", "老城海边第一站，短停拍照。", 51, 45, "walking"],
        ["10:50", "鲁迅公园", "青岛 鲁迅公园", "红礁海岸和松林，补上小红书推荐点。", 60, 52, "driving"],
        ["11:20", "银鱼巷", "青岛 银鱼巷", "老城小巷拍照，随后去信号山和小鱼山。", 66, 40, "walking"],
        ["12:00", "信号山公园", "青岛 信号山公园", "俯瞰栈桥和老城全景。", 75, 30, "walking"],
        ["12:40", "小鱼山公园", "青岛 小鱼山公园", "看汇泉湾和红瓦绿树，体力不足可二选一。", 82, 45, "walking"],
        ["13:20", "双合园·海鲜水饺青岛菜 上清路店", "双合园 海鲜水饺青岛菜 上清路店", "午餐吃墨鱼水饺、鲅鱼饺子、海鲜疙瘩汤。", 72, 62, "driving", "双合园"],
        ["14:40", "大学路网红墙", "青岛 大学路 鱼山路 网红墙", "经福山支路、黄县路/龙江路走文艺街巷。", 58, 74, "walking"],
        ["16:20", "八大关风景区", "青岛 八大关风景区", "下午走树荫和建筑群，别绕回老城。", 44, 82, "driving"],
        ["17:10", "第二海水浴场", "青岛 第二海水浴场", "和八大关相邻，顺手看海。", 31, 72, "walking"],
        ["18:40", "台东步行街", "青岛 台东步行街 松和路1号生烤香肠 胡初鑫猪蹄", "晚餐分段吃松和路1号生烤香肠、胡初鑫猪蹄。", 18, 58, "driving"],
      ],
    },
    {
      id: "day3",
      date: "7月8日",
      title: "青岛啤酒博物馆后转烟台",
      summary: "青岛酒店 → 青岛啤酒博物馆 → 众品老方子锅贴甜沫或双合园 → 青岛站/青岛北站 → 烟台站 → 全季酒店烟台火车站所城里店 → 朝阳街 → 所城里",
      routeNote: "第三天只保留啤酒博物馆这一个青岛景点，逛完直接吃饭去车站。",
      stops: [
        ["09:00", "青岛五四广场小麦岛桔子水晶酒店", "青岛五四广场小麦岛桔子水晶酒店", "退房或寄存行李后出发。", 15, 76, "driving", "桔子水晶酒店"],
        ["09:50", "青岛啤酒博物馆", "青岛啤酒博物馆", "当天唯一青岛景点，室内避暑，边逛边喝。", 42, 42, "driving"],
        ["12:00", "众品老方子锅贴甜沫", "青岛 众品老方子锅贴甜沫", "啤酒博物馆后轻松吃锅贴甜沫；想吃水饺则改双合园上清路店。", 55, 56, "driving"],
        ["14:00", "青岛北站", "青岛北站", "坐高铁或动车去烟台，优先选到烟台站。", 72, 38, "driving"],
        ["17:00", "全季酒店 烟台火车站所城里店", "全季酒店 烟台火车站所城里店", "入住后去朝阳街和所城里。", 68, 70, "driving", "烟台全季酒店"],
        ["18:30", "百纳·观澜·烟台海鲜鲁菜", "百纳 观澜 烟台海鲜鲁菜 朝阳街百年四合院店", "晚餐吃海肠捞饭、鲅鱼水饺、三鲜焖子。", 48, 78, "walking", "百纳观澜"],
        ["20:00", "朝阳街和所城里", "烟台 朝阳街 所城里", "饭后步行逛夜景，不再跑远。", 28, 64, "walking"],
      ],
    },
    {
      id: "day4",
      date: "7月9日",
      title: "烟台山到养马岛",
      summary: "酒店 → 8鲜蓬莱小面 → 烟台山 → 滨海广场 → 月亮湾 → 东炮台 → 渔人码头 → 养马岛 → 酒店",
      routeNote: "从老城沿滨海中路一路向东，养马岛放最后。",
      stops: [
        ["08:30", "8鲜蓬莱小面 胜利路店", "8鲜蓬莱小面 胜利路店 烟台", "早餐吃蓬莱小面。", 15, 72, "walking"],
        ["09:20", "烟台山景区", "烟台山景区", "灯塔和领事馆建筑群。", 28, 55, "walking"],
        ["11:20", "滨海广场", "烟台 滨海广场", "从烟台山顺路到海边。", 40, 45, "walking"],
        ["12:30", "万盛合 渔人码头店", "万盛合 渔人码头店 烟台", "午餐吃海肠捞饭、三鲜焖子、九转大肠。", 55, 56, "driving", "万盛合"],
        ["14:00", "东炮台海滨风景区", "烟台 东炮台海滨风景区", "去养马岛前的顺路海岸点。", 68, 42, "driving"],
        ["15:00", "烟台渔人码头", "烟台 渔人码头", "拍欧式海边建筑。", 76, 58, "driving"],
        ["16:20", "养马岛", "烟台 养马岛", "下午看海，建议打车或包车。", 86, 32, "driving"],
        ["19:00", "旺角小渔村 明珠海岸店", "旺角小渔村 明珠海岸店 烟台", "晚餐吃胶东小海鲜、烟台焖子、鲅鱼水饺。", 62, 78, "driving"],
      ],
    },
    {
      id: "day5",
      date: "7月10日",
      title: "烟台轮渡到大连",
      summary: "烟台酒店 → 烟台港 → 大连港/湾新港 → 桔子酒店大连东港港湾广场店 → 中山广场 → 俄罗斯风情街 → 东港",
      routeNote: "轮渡日不排重景点，抵达后只在中山和东港活动。",
      stops: [
        ["08:30", "全季酒店 烟台火车站所城里店", "全季酒店 烟台火车站所城里店", "退房，按船班提前出发。", 16, 68, "driving", "烟台全季酒店"],
        ["09:30", "烟台港客运站", "烟台港客运站", "提前确认码头、船班和安检。", 34, 48, "driving"],
        ["12:00", "船上简餐", "烟台港", "自备水、零食、晕船药。", 50, 40, "driving"],
        ["15:30", "大连港客运站", "大连港客运站", "到港后先去酒店。", 64, 58, "driving"],
        ["16:30", "桔子酒店 大连东港港湾广场店", "桔子酒店 大连东港港湾广场店", "入住东港片区。", 76, 42, "driving", "大连桔子酒店"],
        ["17:30", "中山广场", "大连 中山广场", "轻松拍建筑。", 82, 60, "walking"],
        ["18:30", "喜鼎海胆水饺 东港店", "喜鼎海胆水饺 东港店 大连", "晚餐吃海胆水饺、海肠水饺、奇妙虾球。", 72, 76, "driving", "喜鼎东港店"],
        ["20:00", "东方威尼斯水城", "大连 东方威尼斯水城", "东港夜景收尾。", 56, 82, "walking"],
      ],
    },
    {
      id: "day6",
      date: "7月11日",
      title: "大连星海到老虎滩",
      summary: "酒店 → 星海广场 → 跨海大桥观景点 → 莲花山 → 傅家庄 → 菱角湾 → 老虎滩 → 东港",
      routeNote: "从星海向东推进到老虎滩，晚上回东港，不折返星海。",
      stops: [
        ["08:40", "星海广场", "大连 星海广场", "上午先到星海。", 16, 68, "driving"],
        ["10:00", "星海湾跨海大桥最佳观景点", "大连 星海湾跨海大桥最佳观景点", "拍跨海大桥。", 30, 44, "driving", "跨海大桥观景点"],
        ["11:00", "莲花山观景台", "大连 莲花山观景台", "看大连全景。", 42, 32, "driving"],
        ["12:30", "旅大印象·大连家常海鲜馆 星海店", "旅大印象 大连家常海鲜馆 星海店", "午餐吃海肠捞饭、海胆石锅豆腐。", 52, 48, "driving", "旅大印象"],
        ["14:30", "傅家庄公园", "大连 傅家庄公园", "沿南部海岸线向东。", 62, 64, "driving"],
        ["16:00", "菱角湾", "大连 菱角湾", "拍渔人码头视角。", 72, 50, "driving"],
        ["17:00", "老虎滩海洋公园", "大连 老虎滩海洋公园", "可只作为海岸线节点，不一定入园。", 84, 38, "driving"],
        ["18:30", "品海楼 老虎滩店", "品海楼 老虎滩店 大连", "晚餐吃海肠捞饭、海胆锅贴、三鲜焖子。", 78, 72, "walking"],
        ["20:30", "东港音乐喷泉广场", "大连 东港音乐喷泉广场", "晚上回东港。", 56, 84, "driving"],
      ],
    },
    {
      id: "day7",
      date: "7月12日",
      title: "大连市区收尾，返福州",
      summary: "酒店 → 中山广场 → 大连美术馆/俄罗斯风情街 → 青泥洼桥 → 午餐 → 大连周水子机场",
      routeNote: "返程日只在中山和青泥洼桥活动，给机场留足时间。",
      stops: [
        ["09:00", "桔子酒店 大连东港港湾广场店", "桔子酒店 大连东港港湾广场店", "退房或寄存行李。", 18, 74, "walking", "大连桔子酒店"],
        ["09:30", "中山广场", "大连 中山广场", "补拍建筑群。", 34, 58, "walking"],
        ["10:20", "大连美术馆/俄罗斯风情街", "大连美术馆 俄罗斯风情街", "和中山广场顺路。", 48, 46, "walking", "大连美术馆"],
        ["11:20", "青泥洼桥", "大连 青泥洼桥", "买伴手礼，控制时间。", 62, 56, "driving"],
        ["12:30", "日月昇渔家菜 五一广场店", "日月昇渔家菜 五一广场店 大连", "午餐吃石锅海胆豆腐、鲅鱼水饺、家焖杂拌鱼。", 74, 42, "driving", "日月昇"],
        ["14:30", "大连周水子国际机场", "大连周水子国际机场", "按返程航班提前 2.5-3 小时出发。", 84, 72, "driving"],
      ],
    },
  ],
  foods: [
    ["青岛", "D1 东海岸", "前海沿·青岛菜（五四广场永旺店）：海肠捞饭、鲅鱼水饺、老青岛炸肉；下午饿再补众品老方子锅贴甜沫。"],
    ["青岛", "D2 老城+台东", "海泊桥早市吃海阳喜饼、开花大馒头；中午双合园；晚上台东步行街吃松和路1号生烤香肠、胡初鑫猪蹄。"],
    ["青岛/烟台", "D3 转场日", "青岛啤酒博物馆后吃众品老方子锅贴甜沫或双合园；晚上烟台百纳·观澜吃海肠捞饭、鲅鱼水饺、三鲜焖子。"],
    ["烟台", "D4 滨海线", "早餐8鲜蓬莱小面；午餐万盛合渔人码头店；晚餐旺角小渔村明珠海岸店或一块豆腐。"],
    ["大连", "D5 东港夜景", "轮渡日午餐自备简餐；晚餐喜鼎海胆水饺东港店，点海胆水饺、海肠水饺、奇妙虾球。"],
    ["大连", "D6 海岸线", "午餐旅大印象星海店；晚餐品海楼老虎滩店或正黄旗海鲜烧烤大排档。"],
    ["大连", "D7 返程前", "午餐日月昇渔家菜五一广场店，点石锅海胆豆腐、鲅鱼水饺、家焖杂拌鱼。"],
  ],
};

const dayTabs = document.querySelectorAll(".day-tab");
const routeDayButtons = document.querySelectorAll(".route-day-button");
const routeMap = document.querySelector("#routeMap");
const navStops = document.querySelector("#navStops");
const dayPanels = document.querySelector("#dayPanels");
const foodGrid = document.querySelector("#foodGrid");
const hotelList = document.querySelector("#hotelList");

function toStop(item) {
  return {
    time: item[0],
    name: item[1],
    query: item[2],
    note: item[3],
    x: item[4],
    y: item[5],
    mode: item[6],
    mapLabel: item[7],
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
  }[char]));
}

function amapSearchUrl(item) {
  const params = new URLSearchParams({
    keyword: item.query,
    view: "map",
    src: "codex_qyd_h5",
  });
  return `https://uri.amap.com/search?${params.toString()}`;
}

function amapDirectionUrl(stop, origin) {
  const params = new URLSearchParams({
    destination: stop.query,
    mode: stop.mode || "driving",
    src: "codex_qyd_h5",
  });
  if (origin) params.set("origin", origin.query);
  return `https://uri.amap.com/navigation?${params.toString()}`;
}

function renderRoute(dayKey) {
  const day = DATA.days.find((item) => item.id === dayKey);
  if (!day || !routeMap || !navStops) return;
  const stops = day.stops.map(toStop);
  routeMap.innerHTML = [
    '<div class="map-path" aria-hidden="true"></div>',
    ...stops.map((stop, index) => `
      <button class="map-stop${index === 0 ? " active" : ""}" type="button" data-stop-index="${index}" style="--x: ${stop.x}%; --y: ${stop.y}%">
        <strong>${String(index + 1).padStart(2, "0")}</strong>
        <span>${escapeHtml(stop.mapLabel || stop.name)}</span>
      </button>
    `),
  ].join("");
  navStops.innerHTML = stops.map((stop, index) => {
    const prev = stops[index - 1];
    return `
      <li class="nav-stop" id="stop-${dayKey}-${index}">
        <div class="nav-stop-header">
          <span class="nav-stop-index">${index + 1}</span>
          <div>
            <h3>${escapeHtml(stop.time)} · ${escapeHtml(stop.name)}</h3>
            <p>${escapeHtml(stop.note)}</p>
          </div>
        </div>
        <div class="nav-actions">
          <a class="nav-action primary" target="_blank" rel="noopener" href="${amapDirectionUrl(stop, null)}">导航到这里</a>
          <a class="nav-action${prev ? "" : " disabled"}" target="_blank" rel="noopener" href="${prev ? amapDirectionUrl(stop, prev) : "#"}">从上一站导航</a>
          <a class="nav-action" target="_blank" rel="noopener" href="${amapSearchUrl(stop)}">高德搜点</a>
        </div>
      </li>`;
  }).join("");
  routeMap.querySelectorAll(".map-stop").forEach((button) => {
    button.addEventListener("click", () => {
      routeMap.querySelectorAll(".map-stop").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#stop-${dayKey}-${button.dataset.stopIndex}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function renderPlanner() {
  dayPanels.innerHTML = DATA.days.map((day, index) => {
    const stops = day.stops.map(toStop);
    return `
      <article class="day-panel${index === 0 ? " active" : ""}" id="${day.id}">
        <header>
          <h3>${escapeHtml(day.title)}</h3>
          <p>${escapeHtml(day.summary)}</p>
          <p class="route-note">${escapeHtml(day.routeNote)}</p>
        </header>
        <ol class="timeline">
          ${stops.map((stop) => `<li><time>${escapeHtml(stop.time)}</time><span>${escapeHtml(stop.name)}：${escapeHtml(stop.note)}</span></li>`).join("")}
        </ol>
      </article>`;
  }).join("");
}

function renderFood() {
  foodGrid.innerHTML = DATA.foods.map(([city, title, text]) => `
    <article>
      <p class="kicker">${escapeHtml(city)}</p>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </article>
  `).join("");
}

function renderHotels() {
  hotelList.innerHTML = DATA.hotels.map((hotel) => `
    <article>
      <p class="kicker">${escapeHtml(hotel.nights)}</p>
      <h3>${escapeHtml(hotel.name)}</h3>
      <p>${escapeHtml(hotel.area)}</p>
      <p>${escapeHtml(hotel.text)}</p>
      <p class="price">${escapeHtml(hotel.price)}</p>
      <div class="nav-actions"><a class="nav-action primary" target="_blank" rel="noopener" href="${amapSearchUrl(hotel)}">高德搜酒店</a></div>
    </article>
  `).join("");
}

routeDayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    routeDayButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderRoute(button.dataset.routeDay);
  });
});

dayTabs.forEach((button) => {
  button.addEventListener("click", () => {
    dayTabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    document.querySelectorAll(".day-panel").forEach((panel) => panel.classList.remove("active"));
    document.querySelector(`#${button.dataset.day}`)?.classList.add("active");
  });
});

renderPlanner();
renderFood();
renderHotels();
renderRoute("day1");
