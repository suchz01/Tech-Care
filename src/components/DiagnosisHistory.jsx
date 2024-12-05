import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const DiagnosisHistory = ({ currentPatient }) => {
  const [timeRange, setTimeRange] = useState("Last 6 months"); // Default time range

  const diagnosisHistory = currentPatient?.diagnosis_history || [];

  const mostRecentDiagnosis = diagnosisHistory.reduce((latest, diagnosis) => {
    const currentDate = new Date(
      diagnosis.year,
      new Date(`${diagnosis.month} 1, ${diagnosis.year}`).getMonth(),
      1
    );
    const latestDate = new Date(
      latest.year,
      new Date(`${latest.month} 1, ${latest.year}`).getMonth(),
      1
    );
    return currentDate > latestDate ? diagnosis : latest;
  }, diagnosisHistory[0]);

  const filterDiagnosisHistory = (range) => {
    if (!mostRecentDiagnosis) return [];

    const mostRecentDate = new Date(
      mostRecentDiagnosis.year,
      new Date(
        `${mostRecentDiagnosis.month} 1, ${mostRecentDiagnosis.year}`
      ).getMonth(),
      1
    );
    const filteredHistory = diagnosisHistory.filter((diagnosis) => {
      const diagnosisDate = new Date(
        diagnosis.year,
        new Date(`${diagnosis.month} 1, ${diagnosis.year}`).getMonth(),
        1
      );
      const monthsDiff =
        (mostRecentDate.getFullYear() - diagnosisDate.getFullYear()) * 12 +
        (mostRecentDate.getMonth() - diagnosisDate.getMonth());

      if (range === "Last 6 months" && monthsDiff <= 6) {
        return true;
      } else if (range === "Last 1 year" && monthsDiff <= 12) {
        return true;
      }
      return false;
    });

    return filteredHistory;
  };

  const filteredDiagnosisHistory = filterDiagnosisHistory(timeRange);

  const reversedDiagnosisHistory = filteredDiagnosisHistory.reverse();

  const bpData = reversedDiagnosisHistory.map((diagnosis) => ({
    name: `${diagnosis.month}, ${diagnosis.year}`,
    Systolic: diagnosis.blood_pressure.systolic.value,
    Diastolic: diagnosis.blood_pressure.diastolic.value,
  }));

  const latestDiagnosis =
    reversedDiagnosisHistory[reversedDiagnosisHistory.length - 1];
  const systolicLevel = latestDiagnosis?.blood_pressure.systolic.levels;
  const diastolicLevel = latestDiagnosis?.blood_pressure.diastolic.levels;
  const heartRate = latestDiagnosis?.heart_rate;
  const respiratoryRate = latestDiagnosis?.respiratory_rate;
  const temperature = latestDiagnosis?.temperature;
  // console.log(respiratoryRate);
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg pb-2">
      <h2 className="text-2xl font-semibold mb-4">Diagnosis History</h2>

      <div className="bg-[#F4F0FE] p-4 pb-2 rounded-lg mb-6 flex">
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Blood Pressure</p>
            <select
              className="text-sm bg-transparent border-none rounded-lg p-1"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="Last 6 months">Last 6 months</option>
              <option value="Last 1 year">Last 1 year</option>
            </select>
          </div>
          <LineChart
            width={450}
            height={300}
            data={bpData}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="Systolic"
              stroke="#E66FD2"
              strokeWidth={2}
              dot={{ r: 6, fill: "#E66FD2" }}
            />
            <Line
              type="monotone"
              dataKey="Diastolic"
              stroke="#8C6FE6"
              strokeWidth={2}
              dot={{ r: 6, fill: "#8C6FE6" }}
            />
            <CartesianGrid stroke="#555555" strokeDasharray="" />
            <XAxis dataKey="name" ticks={[]} />
            <YAxis
              domain={[60, 180]}
              ticks={[60, 80, 100, 120, 140, 160, 180]}
            />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>

        <div className="ml-20 p-5 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="bg-[#E66FD2] w-4 h-4 rounded-full"></div>
            <p className="text-lg">Systolic</p>
          </div>
          <p className="font-semibold text-black text-2xl">
            {latestDiagnosis?.blood_pressure.systolic.value}
          </p>
          <div className="flex items-center space-x-2">
            {systolicLevel !== "Normal" && (
              <span className="material-symbols-outlined">
                {systolicLevel === "Higher than Average"
                  ? "stat_1"
                  : "stat_minus_1"}
              </span>
            )}
            <p>{systolicLevel}</p>
          </div>

          <hr className="border-gray-400" />

          <div className="flex items-center space-x-2">
            <div className="bg-[#8C6FE6] w-4 h-4 rounded-full"></div>
            <p className="text-lg">Diastolic</p>
          </div>
          <p className="font-semibold text-black text-2xl">
            {latestDiagnosis?.blood_pressure.diastolic.value}
          </p>
          <div className="flex items-center space-x-2">
            {diastolicLevel !== "Normal" && (
              <span className="material-symbols-outlined">
                {diastolicLevel === "Higher than Average"
                  ? "stat_1"
                  : "stat_minus_1"}
              </span>
            )}
            <p>{diastolicLevel}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
          <SummaryCard prop={respiratoryRate} imgsrc="../assets/respiratory rate.svg" metric="bpm" text="Respiratory Rate" bgcol="bg-[#E0F3FA]"/>
          <SummaryCard prop={temperature} imgsrc="../assets/temperature.svg" metric="°F" text="Temperature" bgcol="bg-[#FFE6E9]"/>
          <SummaryCard prop={heartRate} imgsrc="../assets/HeartBPM.svg" metric="bpm" text="Heart Rate" bgcol="bg-[#FFE6F1]"/>

      </div>
    </div>
  );
};

const SummaryCard=({prop,imgsrc,metric,text,bgcol})=>{
  console.log(prop);
 return( <div className={`${bgcol} p-4 space-y-2 rounded-xl`}>
          <img src={imgsrc} alt="" />
          <p className="text-lg font-semibold">{text}</p>
          <p className="font-semibold text-2xl">{`${prop.value} ${metric}`}</p>
          <div className="flex items-center space-x-2">
            {prop.levels !== "Normal" && (
              <span className="material-symbols-outlined">
                {prop.levels === "Higher than Average"
                  ? "stat_1"
                  : "stat_minus_1"}
              </span>
            )}
            <p>{prop.levels}</p>
          </div>
        </div>);
}

export default DiagnosisHistory;
