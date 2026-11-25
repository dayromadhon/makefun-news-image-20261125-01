# The World Today — 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/dayromadhon/makefun-news-image-20261125-01/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/dayromadhon/makefun-news-image-20261125-01/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A newspaper front page summing up the world news of **Wednesday 25 November 2026** in one image.

## The stories

- **Lead — Pakistan's first astronaut reaches orbit.** Shenzhou-24 lifts off from Jiuquan at 08:18, carrying Muhammad Zeeshan Ali to China's Tiangong station — the first Pakistani in space and the first foreign astronaut ever to visit Tiangong.
- **Huawei convicted in US criminal trial.** A Brooklyn jury finds the Chinese telecom giant guilty on 10 of 12 counts — bank fraud, sanctions violations and conspiring to steal trade secrets; cleared of racketeering.
- **AI stocks slide as tariff threat returns.** Nasdaq −1.5%, Nvidia −5.9%, after reports the US is preparing tariff hikes on China, the EU and 14 other economies.
- **Kyiv admits ship strike in Gulf of Finland.** Zelenskiy confirms Ukraine's drone hit on the Russian cargo ship Sparta II; ally Norway urges caution.
- **Also reported today:** Riyadh's tallest tower struck again (11 wounded); Trump awards Giuliani the Medal of Freedom; a 5.6 quake shakes eastern Nepal with no casualties reported.

Every story was verified against live reporting before it was drawn. All artwork is original — simple drawn shapes and icons; no photographs.

## How it works

`page.html` is the front page (HTML + inline SVG art). It was rendered once in this session with headless Chromium to `entry.png` (1024×1024). `main.ts` (Node 22, standard library only) copies `entry.png` to the output directory, so both runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=sf3mmt2f&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
