import React from "react";

export default function WhyFinancialPlanningMatters() {
  return (
    <section className="w-full bg-neutral py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center text-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Why <span className="text-primary">Financial Planning</span> Matters
        </h2>

        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Proper financial planning gives you clarity, control, and confidence. It helps you
          manage your income, track expenses, build savings, and prepare for a secure future.
          No matter your income level, planning your finances makes life easier and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-primary">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl shadow-md bg-accent-content border border-accent">
            <h3 className="text-xl font-semibold text-primary mb-3">Better Control</h3>
            <p className="text-sm md:text-base">
              Know exactly where your money goes and avoid overspending.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl shadow-md bg-accent-content border border-accent">
            <h3 className="text-xl font-semibold text-primary mb-3">Build Savings</h3>
            <p className="text-sm md:text-base">
              Set aside money every month to achieve long-term goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl shadow-md bg-accent-content border border-accent">
            <h3 className="text-xl font-semibold text-primary mb-3">Reduce Stress</h3>
            <p className="text-sm md:text-base">
              When your finances are organized, you feel more confident and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}