const top10_info = "./top10db.json";
const week_info = "./weekdb.json";
const month_info = "./monthdb.json";

const chart_list = document.querySelector(".chart_list");

// chart category btns
const cate_top10 = document.querySelector(".top10");
const cate_week = document.querySelector(".week");
const cate_month = document.querySelector(".month");

cate_top10.addEventListener("click", (e) => {
  e.preventDefault();
  cate_top10.classList.add("active");
  cate_week.classList.remove("active");
  cate_month.classList.remove("active");
});

cate_week.addEventListener("click", (e) => {
  e.preventDefault();
  cate_top10.classList.remove("active");
  cate_week.classList.add("active");
  cate_month.classList.remove("active");
});

cate_month.addEventListener("click", (e) => {
  e.preventDefault();
  cate_top10.classList.remove("active");
  cate_week.classList.remove("active");
  cate_month.classList.add("active");
});

//top10 DB
const top10db = async () => {
  const response = await fetch(top10_info);
  const { data } = await response.json();
  return data;
};

//week DB
const weekdb = async () => {
  const response = await fetch(week_info);
  const { data } = await response.json();
  return data;
};

//month DB
const monthdb = async () => {
  const response = await fetch(month_info);
  const { data } = await response.json();
  return data;
};

//Promise DBs
const getCharts = async () => {
  const [top10, week, month] = await Promise.all([
    top10db(),
    weekdb(),
    monthdb(),
  ]);

  // 찾아온 json chart data로 dom 생성 함수
  const createList = (chart) => {
    const li = document.createElement("li");
    const chart_bg = document.createElement("div");
    chart_bg.className = "chart_bg";
    chart_bg.style.backgroundImage = `url("${chart.chart_bg}")`;

    const favorite_number = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(chart.favorite);

    li.innerHTML = `
        <div class="ranking">
          <h4 class="rank_num">${chart.rank}</h4>
          <figure class="icon ${chart.updown}">
            <img src="./imgs/chart_rank_icon.svg" alt="rankIconblack" />
            <img src="./imgs/chart_rank_icon_w.svg" alt="rankIconwhite" />
            <img src="./imgs/chart_rank_icon_no.svg" alt="rankIconnone" />
            </figure>
        </div>
        <div class="music_info">
          <figure>
            <img
              src="${chart.albumimg}"
              alt="${chart.album}"
            />
          </figure>
          <div class="music_names">
            <h4>${chart.title}</h4>
            <h5>${chart.singer}</h5>
          </div>
        </div>
        <div class="music_album">
          <p>${chart.album}</p>
        </div>
        <div class="music_favorite">
          <button>
            <img src="./imgs/favorite_line.svg" alt="Heart1" />
            <img src="./imgs/favorite_fill.svg" alt="Heart2" />
          </button>
          <span class="favorite_num">${favorite_number}</span>
        </div>
        <div class="music_player">
          <button class="player_btn">
            <img src="./imgs/player_icon.svg" alt="playerIcon" />
            <img src="./imgs/player_icon_stop.svg" alt="playerIcon" />
            </button>
          <audio src="${chart.player_music}"></audio>
        </div>
        `;

    li.append(chart_bg);

    chart_list.append(li);
  };

  // category btns event
  cate_top10.classList.add("active");

  function updateChart() {
    chart_list.innerHTML = "";
    if (cate_top10.classList.contains("active")) {
      top10.forEach((chart) => {
        createList(chart);
      });
    } else if (cate_week.classList.contains("active")) {
      week.forEach((chart) => {
        createList(chart);
      });
    } else if (cate_month.classList.contains("active")) {
      month.forEach((chart) => {
        createList(chart);
      });
    }

    //뮤직플레이어 버튼 작동
    const music_players = document.querySelectorAll(".music_player");

    let current_btn = null;
    let current_audio = null;

    music_players.forEach((player) => {
      const player_btn = player.querySelector("button");
      const player_audio = player.querySelector("audio");

      player_btn.addEventListener("click", (e) => {
        if (current_audio && current_audio !== player_audio) {
          current_btn.classList.remove("playing");
          current_audio.pause();
          current_audio.load();
        }

        if (player_btn.classList.contains("playing")) {
          player_btn.classList.remove("playing");
          player_audio.pause();
          player_audio.load();
          current_btn = null;
          current_audio = null;
        } else {
          player_btn.classList.add("playing");
          player_audio.play();
          current_btn = player_btn;
          current_audio = player_audio;
        }
      });
    });

    // 좋아요 클릭 이벤트
    const favorite_btns = document.querySelectorAll(".music_favorite > button");
    const fovorite_nums = document.querySelectorAll(".favorite_num");

    favorite_btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        let favorite_count = parseInt(
          fovorite_nums[index].innerText.replace(/,/g, "")
        );

        if (!btn.classList.contains("click")) {
          btn.classList.add("click");
          favorite_count += 1;
        } else {
          btn.classList.remove("click");
          favorite_count -= 1;
        }

        fovorite_nums[index].innerText = favorite_count.toLocaleString();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateChart();
  });

  const observer = new MutationObserver(updateChart);

  const categories = [cate_top10, cate_week, cate_month];

  categories.forEach((category) => {
    observer.observe(category, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  updateChart();
};

getCharts();

// 차트 시간 실시간 연동
const chart_realtime = document.querySelector(".chart_realtime");
const chart_date = chart_realtime.querySelector(".date");
const chart_time = chart_realtime.querySelector(".time");

let chart_current = new Date();
let currentYear = chart_current.getFullYear();
let currentMonth = chart_current.getMonth() + 1;
let currentDate = chart_current.getDate();
let currentHours = chart_current.getHours();

currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
currentDate = currentDate < 10 ? "0" + currentDate : currentDate;
currentHours = currentHours < 10 ? "0" + currentHours : currentHours;

chart_date.innerText = `${currentYear}.${currentMonth}.${currentDate}`;
chart_time.innerText = `${currentHours}:00 기준`;

//   .catch((error) => {
//     console.error(error);
//   });
