// components/ActivityChart.tsx
"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export default function ActivityChart({ data }: { data: { date: string; count: number }[] }) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="date"

            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickLine={{ stroke: "hsl(var(--border))" }}
            minTickGap={24}

            hide />
          <YAxis allowDecimals={false} width={24} />
          <Tooltip

            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 12,
              color: "hsl(var(--foreground))"
            }}
            labelStyle={{ color: "hsl(var(--muted-foreground))" }}


            formatter={(value) => [value as any, "Contributions"]} labelFormatter={(l) => new Date(l).toDateString()} />
          <Area type="monotone" dataKey="count" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}