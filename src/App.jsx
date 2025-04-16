import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

// 혈당 반응 차트 데이터
const bloodSugarData = [
  { time: '0', adult: 100, child: 100, name: '섭취 전' },
  { time: '15', adult: 145, child: 135, name: '15분 후' },
  { time: '30', adult: 160, child: 140, name: '30분 후' },
  { time: '60', adult: 150, child: 125, name: '60분 후' },
  { time: '90', adult: 125, child: 110, name: '90분 후' },
  { time: '120', adult: 110, child: 105, name: '120분 후' }
];

// 권장 탄수화물 섭취량 데이터
const carbIntakeData = [
  { name: '어린이 (3~5세)', amount: 130, percentage: 55 },
  { name: '성인여성 (40~45세)', amount: 210, percentage: 50 }
];

// 글리세믹 지수 데이터
const giData = [
  { name: '흰쌀밥', gi: 85 },
  { name: '현미밥', gi: 65 },
  { name: '잡곡밥', gi: 55 },
  { name: '찹쌀밥', gi: 95 },
  { name: '감자', gi: 75 },
  { name: '고구마', gi: 55 },
  { name: '통밀빵', gi: 50 },
  { name: '백미빵', gi: 70 }
];

// 사용자 정의 링크 컴포넌트
const CustomLink = ({ href, text }) => (
  <span className="inline-flex" data-state="closed">
    <a href={href} target="_blank" className="group/tag relative h-[18px] rounded-full inline-flex items-center overflow-hidden -translate-y-px cursor-pointer">
      <span className="relative transition-colors h-full max-w-[180px] overflow-hidden px-1.5 inline-flex items-center font-styrene text-xs tracking-tight rounded-full border-0.5 border-border-300 bg-bg-200 font-normal group-hover/tag:bg-accent-secondary-900 group-hover/tag:border-accent-secondary-100/60">
        <span className="text-nowrap text-text-300 break-all truncate font-normal group-hover/tag:text-text-200">{text}</span>
      </span>
      <span className="transition-all opacity-[0%] h-[17px] absolute right-[0.5px] inline rounded-r-full flex items-center px-1.5 bg-gradient-to-r from-accent-secondary-900/0 via-accent-secondary-900/100 via-30% to-accent-secondary-900/100 group-hover/tag:opacity-[100%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="transition-all group-hover/tag:ease-out duration-[500ms] ease-in text-accent-secondary-100 group-hover/tag:scale-[100%] scale-[80%] group-hover/tag:opacity-[100%] opacity-[0%] -mr-[2px]">
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      </span>
    </a>
  </span>
);

function App() {
  return (
    <div className="research-report">
      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h1 className="text-2xl font-bold mt-1 text-text-100" level="1">탄수화물과 혈당 스파이크: 연령과 성별에 따른 차이</h1>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">요약</h2>
        <p className="whitespace-pre-wrap break-words">
          탄수화물, 특히 흰쌀밥과 빵이 혈당에 미치는 영향은 연령과 성별에 따라 다르게 나타납니다. 
          어린이(3~5세)와 성인여성(40~45세)은 신체 구성, 대사율, 호르몬 상태, 에너지 요구량에서 
          큰 차이가 있어 동일한 탄수화물 섭취 지침을 적용하기 어렵습니다. 균형 잡힌 식이와 
          전체적인 식사 패턴이 단일 음식의 제한보다 중요하며, 개인의 생리적 특성을 고려한 
          맞춤형 접근이 필요합니다.
        </p>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">연령에 따른 혈당 반응 차이</h2>
        <p className="whitespace-pre-wrap break-words">
          어린이와 성인은 동일한 탄수화물을 섭취하더라도 혈당 반응 패턴에 차이가 있습니다. 
          일반적으로 어린이는 성인보다 인슐린 감수성이 더 높아 혈당 처리 능력이 우수하지만, 
          개인차가 있을 수 있습니다. 아래 그래프는 어린이와 성인이 동일한 양의 흰쌀밥을 
          섭취했을 때의 이론적 혈당 반응 차이를 보여줍니다.
        </p>
        
        <div className="chart-container" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={bloodSugarData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: '혈당수치 (mg/dL)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="adult" name="성인여성" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="child" name="어린이" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">연령 및 성별에 따른 탄수화물 필요량</h2>
        <p className="whitespace-pre-wrap break-words">
          어린이(3~5세)는 성장 발달을 위해 체중당 더 많은 에너지와 탄수화물이 필요합니다. 
          성인여성(40~45세)은 호르몬 변화와 대사적 특성에 따라 탄수화물 요구량과 처리 능력이 
          다를 수 있습니다. 아래 차트는 하루 권장 탄수화물 섭취량 비교를 보여줍니다.
        </p>

        <div className="chart-container" style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={carbIntakeData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: '탄수화물 (g/일)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" name="권장 탄수화물 섭취량(g)" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">어린이(3~5세)의 탄수화물 섭취 특성</h2>
        <p className="whitespace-pre-wrap break-words">어린이는 성인과 다른 영양적 요구사항을 가지고 있습니다:</p>
        <ul className="list-disc pl-7 mb-3">
          <li className="mb-2">성장과 발달을 위한 에너지원으로 적절한 탄수화물 섭취가 중요합니다.</li>
          <li className="mb-2">어린이의 신체는 탄수화물을 성장 에너지로 효율적으로, 우선적으로 활용합니다.</li>
          <li className="mb-2">균형 잡힌 식사가 가장 중요하며, 과일, 채소, 전체곡물을 포함한 다양한 식품을 섭취해야 합니다.</li>
          <li className="mb-2">단순당(과자, 청량음료 등)의 과도한 섭취는 제한하는 것이 좋습니다.</li>
          <li className="mb-2">극단적인 식이제한은 성장 발달에 부정적 영향을 줄 수 있습니다.</li>
        </ul>
        <p className="whitespace-pre-wrap break-words">
          소화 기능이 미숙한 어린이의 경우, 잡곡밥보다 백미가 소화에 더 적합할 수 있으며, 
          식이섬유의 과도한 섭취는 영양소 흡수를 방해할 수 있습니다. 
          <CustomLink 
            href="https://www.hankookilbo.com/News/Read/A2022100111180002809" 
            text="한국일보" 
          />
        </p>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">성인여성(40~45세)의 탄수화물 섭취 특성</h2>
        <p className="whitespace-pre-wrap break-words">40~45세 여성의 대사적 특성과 탄수화물 섭취 고려사항:</p>
        <ul className="list-disc pl-7 mb-3">
          <li className="mb-2">호르몬 변화로 인해 인슐린 감수성이 달라질 수 있어 탄수화물 대사에 영향을 미칩니다.</li>
          <li className="mb-2">폐경 전후 체중 증가와 지방 분포 변화가 혈당 조절에 영향을 줄 수 있습니다.</li>
          <li className="mb-2">정제된 탄수화물보다 전체곡물, 식이섬유가 풍부한 음식이 혈당 안정에 도움이 됩니다.</li>
          <li className="mb-2">총 에너지의 45-65%를 탄수화물로 섭취하는 것이 권장됩니다.</li>
          <li className="mb-2">개인의 활동량, 건강상태에 따라 탄수화물 필요량을 조절할 필요가 있습니다.</li>
        </ul>
        <p className="whitespace-pre-wrap break-words">
          연구 결과에 따르면, 채소-단백질-탄수화물 순서로 식사하면 혈당 스파이크를 줄일 수 있습니다. 
          <CustomLink 
            href="https://my-doctor.io/healthLab/info/684" 
            text="나에게 딱 맞는 건강 꿀팁" 
          />
        </p>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">다양한 식품의 글리세믹 지수(GI) 비교</h2>
        <p className="whitespace-pre-wrap break-words">
          글리세믹 지수(GI)는 식품이 혈당에 미치는 영향을 측정하는 지표입니다. 
          높은 GI 식품은 혈당을 빠르게 상승시키지만, 연령과 신체 상태에 따라 그 영향은 다를 수 있습니다. 
          아래 그래프는 주요 탄수화물 식품의 GI 비교를 보여줍니다. 
          <CustomLink 
            href="https://www.frontiersin.org/articles/10.3389/fnut.2021.695620/full" 
            text="Frontiers in Nutrition" 
          />
        </p>

        <div className="chart-container" style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={giData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} label={{ value: '글리세믹 지수(GI)', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="gi" name="글리세믹 지수(GI)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">실용적인 권장사항</h2>
        <h3 className="text-lg font-bold text-text-100 mt-1 -mb-1.5" level="3">어린이(3~5세)를 위한 권장사항</h3>
        <ul className="list-disc pl-7 mb-3">
          <li className="mb-2">균형 잡힌 식사로 다양한 영양소를 공급하세요.</li>
          <li className="mb-2">단순당(과자, 음료수)의 과다 섭취를 제한하세요.</li>
          <li className="mb-2">연령에 맞는 적절한 양의 탄수화물을 제공하세요.</li>
          <li className="mb-2">소화기능을 고려해 잡곡과 백미의 적절한 조합을 활용하세요.</li>
          <li className="mb-2">극단적인 식단 제한은 피하세요.</li>
        </ul>

        <h3 className="text-lg font-bold text-text-100 mt-1 -mb-1.5" level="3">성인여성(40~45세)을 위한 권장사항</h3>
        <ul className="list-disc pl-7 mb-3">
          <li className="mb-2">정제된 탄수화물보다 전체곡물을 선택하세요.</li>
          <li className="mb-2">탄수화물과 함께, 단백질, 건강한 지방을 균형있게 섭취하세요.</li>
          <li className="mb-2">채소-단백질-탄수화물 순서로 식사하세요.</li>
          <li className="mb-2">개인의 신체 활동과 건강 상태에 맞게 탄수화물 섭취를 조절하세요.</li>
          <li className="mb-2">
            일본 연구에 따르면 쌀 기반 식단이 심혈관 질환 위험을 낮출 수 있습니다. 
            <CustomLink 
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9183110/" 
              text="PMC" 
            />
          </li>
        </ul>
      </div>

      <div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0 py-3 px-10 flex flex-col gap-3 overflow-hidden research-report-content">
        <h2 className="text-xl font-bold text-text-100 mt-1 -mb-0.5" level="2">결론</h2>
        <p className="whitespace-pre-wrap break-words">
          탄수화물 섭취와 혈당 관리는 연령과 성별에 따라 다른 접근이 필요합니다. 
          어린이와 성인여성의 생리적 차이를 고려한 맞춤형 식이 접근법이 중요하며, 
          단일 식품의 제한보다는 전체적인 식사 패턴의 질을 개선하는 것이 더 효과적입니다. 
          탄수화물의 질(정제된 곡물 vs 전체곡물), 섭취량, 다른 영양소와의 균형이 건강한 혈당 관리의 핵심입니다. 
          <CustomLink 
            href="https://www.thelancet.com/article/S0140-6736(18)31809-9/fulltext" 
            text="The Lancet" 
          />
        </p>
        <p className="whitespace-pre-wrap break-words">
          특히 어린이의 경우 성장에 필요한 충분한 에너지 공급이 중요하고, 중년 여성은 호르몬 변화와 
          대사 변화를 고려한 식이 접근이 필요합니다. 극단적인 탄수화물 제한보다는 균형 잡힌 식이와 
          생활습관 개선이 장기적인 건강에 더 도움이 됩니다.
        </p>
      </div>
      
      <footer className="grid-cols-1 grid gap-2.5 py-3 px-10 flex flex-col gap-3 mt-5 text-center">
        <p>© 2025 혈당 연구 프로젝트</p>
      </footer>
    </div>
  )
}

export default App