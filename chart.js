const chart_info = "./chartdb.json";
const chart_list = document.querySelector(".chart_list");

// chartdb.json
fetch(chart_info)
  .then((response) => response.json())
  .then((data) => {
    const charts = {
      data: data.data.map((item) => ({
        ...item,
      })),
    };

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

    // json chart data로 dom 생성 및 브라우저 출력
    const importData = () => {
      charts.data.map((chart) => {
        createList(chart);
      });
    };
    importData();

    // 뮤직플레이어 버튼 작동
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
  })
  .catch((error) => {
    console.error(error);
  });

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
