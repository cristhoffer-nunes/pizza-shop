import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MounthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-muted-foreground text-xs">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
