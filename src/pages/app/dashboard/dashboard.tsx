import { Helmet } from "react-helmet-async";

import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MounthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { MounthOrdersAmountCard } from "./month-orders-amount-card";
import { MonthRevenueCard } from "./month-revenue-card";
import { PopularProductsChart } from "./popular-products-chart";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MounthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MounthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
