// components/ActivityChart.tsx
"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export default function ActivityChart({ data }: { data: { date: string; count: number }[] }) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="date" hide/>
          <YAxis allowDecimals={false} width={24}/>
          <Tooltip formatter={(value) => [value as any, "Contributions"]} labelFormatter={(l) => new Date(l).toDateString()} />
          <Area type="monotone" dataKey="count" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}