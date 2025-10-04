import { useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CryoShatter() {
  const data = [
    { name: "Plastics", value: 5000 },
    { name: "Metals", value: 3800 },
    { name: "Textiles", value: 2500 },
    { name: "Glass", value: 1300 },
  ];

  const COLORS = ["#00BFFF", "#FF6347", "#FFD700", "#ADFF2F"];

  useEffect(() => {
    document.title = "CRYO-SHATTER Finance Model";
  }, []);

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CRYO-SHATTER: Recycling for Mars Survival
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Turning astronaut trash into mission-critical materials.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("funding").scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore the Model
        </motion.button>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-20 px-6 bg-[#0a0b12]">
        <h2 className="text-4xl font-bold text-center mb-12">
          Start-Up Fund: $40M
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Sonic Pulverizer", cost: "$15M" },
            { name: "Sieving & Sorting", cost: "$5M" },
            { name: "Storage Bins", cost: "$3M" },
            { name: "Brick Press & Molders", cost: "$7M" },
            { name: "Research & Testing", cost: "$10M" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#10121a] p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-blue-400">{item.cost}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Materials & System Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Low Mass. Multi-Functional. Martian-Ready.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-[#10121a] p-6 rounded-2xl">
            <h3 className="font-bold mb-2">Lightweight Equipment</h3>
            <p>100–200 kg total</p>
          </div>
          <div className="bg-[#10121a] p-6 rounded-2xl">
            <h3 className="font-bold mb-2">Efficient Power Use</h3>
            <p>~2 kW solar/nuclear powered</p>
          </div>
          <div className="bg-[#10121a] p-6 rounded-2xl">
            <h3 className="font-bold mb-2">Self-Sufficient</h3>
            <p>Uses crew waste + Martian ice</p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-6 bg-[#0a0b12]">
        <h2 className="text-4xl font-bold text-center mb-12">Return on Investment</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div>
            <p className="text-lg mb-4">Cost per kg to Mars: $10,000</p>
            <p className="text-lg mb-4">Waste recycled: 12,600 kg</p>
            <p className="text-lg mb-4">Savings: $126M</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Financial Summary */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Financial Summary</h2>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-2">Start-Up Cost: $40M</p>
          <p className="text-lg mb-2">Material Savings: $126M</p>
          <p className="text-lg mb-2">Net ROI: $86M</p>
          <p className="text-lg text-blue-400 mt-4 italic">
            Bonus: survival benefits → tools, shelter, spare parts
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#0a0b12] text-gray-400">
        <p>“On Mars, waste isn’t waste — it’s survival.”</p>
      </footer>
    </div>
  );
}
