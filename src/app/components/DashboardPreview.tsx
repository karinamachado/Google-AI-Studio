import { motion } from "motion/react";
import { Activity, Users, TrendingUp, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { StatCard } from "./StatCard";

export function DashboardPreview() {
  const metrics = [
    { icon: Activity, label: "Treinos Hoje", value: "142", color: "#E8400A" },
    { icon: Users, label: "Alunos Ativos", value: "1,247", color: "#FF4D0D" },
    { icon: TrendingUp, label: "Taxa de Retenção", value: "94%", color: "#B22A00" },
    { icon: Zap, label: "Energia Total", value: "8.5k", color: "#E8400A" }
  ];

  const recentActivities = [
    { user: "Carlos M.", activity: "Completou Treino de Força", time: "Há 5 min" },
    { user: "Ana S.", activity: "Nova Personal Record - Agachamento", time: "Há 12 min" },
    { user: "João P.", activity: "Check-in Matinal", time: "Há 18 min" },
    { user: "Maria L.", activity: "Sessão de Cardio Finalizada", time: "Há 23 min" }
  ];

  return (
    <div className="min-h-screen bg-[#111111] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-['Bebas_Neue',sans-serif] text-6xl text-white mb-2">
            DASHBOARD <span className="text-[#E8400A]">ADMINISTRATIVO</span>
          </h1>
          <p className="text-[#B0B0B0]">Visão geral das operações em tempo real</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded"
                      style={{ backgroundColor: `${metric.color}20` }}
                    >
                      <Icon size={24} style={{ color: metric.color }} />
                    </div>
                  </div>
                  <CardContent>
                    <p className="text-[#6B6B6B] text-xs uppercase tracking-wider mb-2">
                      {metric.label}
                    </p>
                    <p className="font-['Bebas_Neue',sans-serif] text-4xl text-white">
                      {metric.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Charts and Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start justify-between py-3 border-b border-[#2A2A2A] last:border-0 hover:bg-[#1E1E1E]/50 px-2 -mx-2 rounded transition-colors"
                    >
                      <div>
                        <p className="text-white font-medium">{activity.user}</p>
                        <p className="text-[#B0B0B0] text-sm">{activity.activity}</p>
                      </div>
                      <p className="text-[#6B6B6B] text-xs">{activity.time}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Status do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <StatCard label="Ocupação Atual" value="78%" />
                  <StatCard label="Próximas Aulas" value="12" />
                  <StatCard label="Equipamentos Disponíveis" value="95%" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
