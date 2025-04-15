import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
// import { StandardMarkDown } from "@ant/chat/components/StandardMarkDown";
import ReactMarkdown from 'react-markdown';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


<div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h1 class="text-2xl font-bold mt-1 text-text-100" level="1">탄수화물과 혈당 스파이크: 연령과 성별에 따른 차이</h1></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">요약</h2>
<p class="whitespace-pre-wrap break-words">탄수화물, 특히 흰쌀밥과 빵이 혈당에 미치는 영향은 연령과 성별에 따라 다르게 나타납니다. 어린이(3<del>5세)와 성인여성(40</del>45세)은 신체 구성, 대사율, 호르몬 상태, 에너지 요구량에서 큰 차이가 있어 동일한 탄수화물 섭취 지침을 적용하기 어렵습니다. 균형 잡힌 식이와 전체적인 식사 패턴이 단일 음식의 제한보다 중요하며, 개인의 생리적 특성을 고려한 맞춤형 접근이 필요합니다.</p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">연령에 따른 혈당 반응 차이</h2>
<p class="whitespace-pre-wrap break-words">어린이와 성인은 동일한 탄수화물을 섭취하더라도 혈당 반응 패턴에 차이가 있습니다. 일반적으로 어린이는 성인보다 인슐린 감수성이 더 높아 혈당 처리 능력이 우수하지만, 개인차가 있을 수 있습니다. 아래 그래프는 어린이와 성인이 동일한 양의 흰쌀밥을 섭취했을 때의 이론적 혈당 반응 차이를 보여줍니다.</p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">연령 및 성별에 따른 탄수화물 필요량</h2>
<p class="whitespace-pre-wrap break-words">어린이(3<del>5세)는 성장 발달을 위해 체중당 더 많은 에너지와 탄수화물이 필요합니다. 성인여성(40</del>45세)은 호르몬 변화와 대사적 특성에 따라 탄수화물 요구량과 처리 능력이 다를 수 있습니다. 아래 차트는 하루 권장 탄수화물 섭취량 비교를 보여줍니다.</p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">어린이(3~5세)의 탄수화물 섭취 특성</h2>
<p class="whitespace-pre-wrap break-words">어린이는 성인과 다른 영양적 요구사항을 가지고 있습니다:</p>
<ul class="[&amp;:not(:last-child)_ul]:pb-1 [&amp;:not(:last-child)_ol]:pb-1 list-disc space-y-1.5 pl-7" depth="0">
<li class="whitespace-normal break-words" index="0">성장과 발달을 위한 에너지원으로 적절한 탄수화물 섭취가 중요합니다.</li>
<li class="whitespace-normal break-words" index="1">어린이의 신체는 탄수화물을 성장 에너지로 효율적으로, 우선적으로 활용합니다.</li>
<li class="whitespace-normal break-words" index="2">균형 잡힌 식사가 가장 중요하며, 과일, 채소, 전체곡물을 포함한 다양한 식품을 섭취해야 합니다.</li>
<li class="whitespace-normal break-words" index="3">단순당(과자, 청량음료 등)의 과도한 섭취는 제한하는 것이 좋습니다.</li>
<li class="whitespace-normal break-words" index="4">극단적인 식이제한은 성장 발달에 부정적 영향을 줄 수 있습니다.</li>
</ul>
<p class="whitespace-pre-wrap break-words">소화 기능이 미숙한 어린이의 경우, 잡곡밥보다 백미가 소화에 더 적합할 수 있으며, 식이섬유의 과도한 섭취는 영양소 흡수를 방해할 수 있습니다. <span class="inline-flex" data-state="closed"><a href="https://www.hankookilbo.com/News/Read/A2022100111180002809" target="_blank" class="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer"><span class="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60"><span class="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">한국일보</span></span><span class="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></span></a></span></p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">성인여성(40~45세)의 탄수화물 섭취 특성</h2>
<p class="whitespace-pre-wrap break-words">40~45세 여성의 대사적 특성과 탄수화물 섭취 고려사항:</p>
<ul class="[&amp;:not(:last-child)_ul]:pb-1 [&amp;:not(:last-child)_ol]:pb-1 list-disc space-y-1.5 pl-7" depth="0">
<li class="whitespace-normal break-words" index="0">호르몬 변화로 인해 인슐린 감수성이 달라질 수 있어 탄수화물 대사에 영향을 미칩니다.</li>
<li class="whitespace-normal break-words" index="1">폐경 전후 체중 증가와 지방 분포 변화가 혈당 조절에 영향을 줄 수 있습니다.</li>
<li class="whitespace-normal break-words" index="2">정제된 탄수화물보다 전체곡물, 식이섬유가 풍부한 음식이 혈당 안정에 도움이 됩니다.</li>
<li class="whitespace-normal break-words" index="3">총 에너지의 45-65%를 탄수화물로 섭취하는 것이 권장됩니다.</li>
<li class="whitespace-normal break-words" index="4">개인의 활동량, 건강상태에 따라 탄수화물 필요량을 조절할 필요가 있습니다.</li>
</ul>
<p class="whitespace-pre-wrap break-words">연구 결과에 따르면, 채소-단백질-탄수화물 순서로 식사하면 혈당 스파이크를 줄일 수 있습니다. <span class="inline-flex" data-state="closed"><a href="https://my-doctor.io/healthLab/info/684" target="_blank" class="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer"><span class="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60"><span class="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">나에게 딱 맞는 건강 꿀팁</span></span><span class="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></span></a></span></p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">다양한 식품의 글리세믹 지수(GI) 비교</h2>
<p class="whitespace-pre-wrap break-words">글리세믹 지수(GI)는 식품이 혈당에 미치는 영향을 측정하는 지표입니다. 높은 GI 식품은 혈당을 빠르게 상승시키지만, 연령과 신체 상태에 따라 그 영향은 다를 수 있습니다. 아래 그래프는 주요 탄수화물 식품의 GI 비교를 보여줍니다. <span class="inline-flex" data-state="closed"><a href="https://www.frontiersin.org/articles/10.3389/fnut.2021.695620/full" target="_blank" class="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer"><span class="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60"><span class="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">Frontiers in Nutrition</span></span><span class="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></span></a></span></p></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">실용적인 권장사항</h2>
<h3 class="text-lg font-bold text-text-100 mt-1 -mb-1.5" level="3">어린이(3~5세)를 위한 권장사항</h3>
<ul class="[&amp;:not(:last-child)_ul]:pb-1 [&amp;:not(:last-child)_ol]:pb-1 list-disc space-y-1.5 pl-7" depth="0">
<li class="whitespace-normal break-words" index="0">균형 잡힌 식사로 다양한 영양소를 공급하세요.</li>
<li class="whitespace-normal break-words" index="1">단순당(과자, 음료수)의 과다 섭취를 제한하세요.</li>
<li class="whitespace-normal break-words" index="2">연령에 맞는 적절한 양의 탄수화물을 제공하세요.</li>
<li class="whitespace-normal break-words" index="3">소화기능을 고려해 잡곡과 백미의 적절한 조합을 활용하세요.</li>
<li class="whitespace-normal break-words" index="4">극단적인 식단 제한은 피하세요.</li>
</ul>
<h3 class="text-lg font-bold text-text-100 mt-1 -mb-1.5" level="3">성인여성(40~45세)을 위한 권장사항</h3>
<ul class="[&amp;:not(:last-child)_ul]:pb-1 [&amp;:not(:last-child)_ol]:pb-1 list-disc space-y-1.5 pl-7" depth="0">
<li class="whitespace-normal break-words" index="0">정제된 탄수화물보다 전체곡물을 선택하세요.</li>
<li class="whitespace-normal break-words" index="1">탄수화물과 함께, 단백질, 건강한 지방을 균형있게 섭취하세요.</li>
<li class="whitespace-normal break-words" index="2">채소-단백질-탄수화물 순서로 식사하세요.</li>
<li class="whitespace-normal break-words" index="3">개인의 신체 활동과 건강 상태에 맞게 탄수화물 섭취를 조절하세요.</li>
<li class="whitespace-normal break-words" index="4">일본 연구에 따르면 쌀 기반 식단이 심혈관 질환 위험을 낮출 수 있습니다. <span class="inline-flex" data-state="closed"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9183110/" target="_blank" class="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer"><span class="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60"><span class="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">PMC</span></span><span class="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></span></a></span></li>
</ul></div><div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content"><h2 class="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">결론</h2>
<p class="whitespace-pre-wrap break-words">탄수화물 섭취와 혈당 관리는 연령과 성별에 따라 다른 접근이 필요합니다. 어린이와 성인여성의 생리적 차이를 고려한 맞춤형 식이 접근법이 중요하며, 단일 식품의 제한보다는 전체적인 식사 패턴의 질을 개선하는 것이 더 효과적입니다. 탄수화물의 질(정제된 곡물 vs 전체곡물), 섭취량, 다른 영양소와의 균형이 건강한 혈당 관리의 핵심입니다. <span class="inline-flex" data-state="closed"><a href="https://www.thelancet.com/article/S0140-6736(18)31809-9/fulltext" target="_blank" class="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer"><span class="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60"><span class="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">The Lancet</span></span><span class="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg></span></a></span></p>
<p class="whitespace-pre-wrap break-words">특히 어린이의 경우 성장에 필요한 충분한 에너지 공급이 중요하고, 중년 여성은 호르몬 변화와 대사 변화를 고려한 식이 접근이 필요합니다. 극단적인 탄수화물 제한보다는 균형 잡힌 식이와 생활습관 개선이 장기적인 건강에 더 도움이 됩니다.</p></div>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
