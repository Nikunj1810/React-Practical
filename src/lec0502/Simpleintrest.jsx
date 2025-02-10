import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      const si = (p * r * t) / 100;
      setInterest(si);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6 w-96 shadow-lg bg-white">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Simple Interest Calculator</h2>
          <div className="mb-2">
            <Input
              type="number"
              placeholder="Principal Amount"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Input
              type="number"
              placeholder="Rate of Interest (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Input
              type="number"
              placeholder="Time (Years)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <Button className="w-full mt-4" onClick={calculateInterest}>
            Calculate Interest
          </Button>
          {interest !== null && (
            <p className="mt-4 text-lg font-semibold">
              Simple Interest: ₹{interest.toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
