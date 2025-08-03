import {
  Users,
  Dumbbell,
  Trophy,
  Clock,
} from "lucide-react"; // You can also use HeroIcons or Image icons if needed

export default function GymStats() {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      value: "2,500+",
      label: "Active Members",
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-red-500" />,
      value: "300+",
      label: "Equipment Pieces",
    },
    {
      icon: <Trophy className="w-10 h-10 text-red-500" />,
      value: "1,200+",
      label: "Success Stories",
    },
    {
      icon: <Clock className="w-10 h-10 text-red-500" />,
      value: "24/7",
      label: "Operating Hours",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
