// Styled stand-ins for Glamio app screenshots. Replace with real PNGs from the
// Glamio mock when available (save in public/images/glamio/ and swap these out).

function Phone({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="rounded-[26px] bg-brand-ink p-1.5 shadow-lg">
        <div className="flex aspect-[9/17] flex-col gap-2 overflow-hidden rounded-[20px] bg-white p-3 text-[10px] leading-tight text-slate-900">
          {children}
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-current opacity-80">{label}</figcaption>
    </figure>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <p className="font-heading text-[13px] font-bold text-brand-indigo">{children}</p>;
}

export function ServicesScreen({ className }: { className?: string }) {
  const rows = [
    ["Skin fade", "45 min"],
    ["Beard trim", "20 min"],
    ["Hair colour", "90 min"],
    ["Kids cut", "30 min"],
  ];
  return (
    <Phone label="Customer: services" className={className}>
      <p className="text-slate-500">Studio Nine</p>
      <Title>Services</Title>
      <div className="flex gap-1">
        <span className="rounded-full bg-brand-indigo px-2 py-0.5 text-white">Hair</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5">Beard</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5">Colour</span>
      </div>
      {rows.map(([name, time], i) => (
        <div
          key={name}
          className={`flex justify-between rounded-lg border p-2 ${i === 0 ? "border-brand-gold bg-brand-tint" : "border-slate-200"}`}
        >
          <span className="font-semibold">{name}</span>
          <span className="text-slate-500">{time}</span>
        </div>
      ))}
      <div className="mt-auto rounded-lg bg-brand-gold p-2 text-center font-semibold text-brand-indigo">Continue</div>
    </Phone>
  );
}

export function TimeScreen({ className }: { className?: string }) {
  const days = ["12", "13", "14", "15"];
  const times = ["10:00", "11:30", "14:30", "16:00", "17:15", "18:30"];
  return (
    <Phone label="Customer: pick a time" className={className}>
      <Title>Pick a time</Title>
      <p className="text-slate-500">Skin fade · Ali · November</p>
      <div className="grid grid-cols-4 gap-1 text-center">
        {days.map((d) => (
          <span key={d} className={`rounded-md py-1 ${d === "14" ? "bg-brand-indigo text-white" : "bg-slate-100"}`}>
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 text-center">
        {times.map((t) => (
          <span
            key={t}
            className={`rounded-md border py-1.5 ${t === "14:30" ? "border-brand-gold bg-brand-tint font-semibold" : "border-slate-200"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="rounded-lg bg-brand-mist p-2">
        <p className="font-semibold text-brand-indigo">Pay at the salon</p>
        <p className="text-slate-500">Free cancellation until 24 h before</p>
      </div>
      <div className="mt-auto rounded-lg bg-brand-gold p-2 text-center font-semibold text-brand-indigo">Confirm 14:30</div>
    </Phone>
  );
}

export function StaffScreen({ className }: { className?: string }) {
  const items = [
    ["10:00", "Hamza", "Skin fade", "Done"],
    ["11:30", "Usman", "Beard trim", "Done"],
    ["14:30", "Bilal", "Skin fade", "Next"],
    ["16:00", "Walk-in", "Kids cut", "Booked"],
  ];
  return (
    <Phone label="Staff: today's schedule" className={className}>
      <p className="text-slate-500">Saturday, 14 Nov</p>
      <Title>Today · Ali</Title>
      {items.map(([time, who, what, status]) => (
        <div key={time} className="flex flex-col gap-0.5 rounded-lg border border-slate-200 p-2">
          <span className="flex items-center justify-between gap-1">
            <span className="font-semibold text-brand-indigo">{time}</span>
            <span
            className={`rounded-full px-1.5 py-0.5 ${
              status === "Next" ? "bg-brand-gold text-brand-indigo" : status === "Done" ? "bg-slate-100 text-slate-600" : "bg-brand-tint text-brand-purple-dark"
            }`}
          >
              {status}
            </span>
          </span>
          <span className="truncate">
            <span className="font-semibold">{who}</span> <span className="text-slate-500">· {what}</span>
          </span>
        </div>
      ))}
    </Phone>
  );
}

export function OwnerScreen({ className }: { className?: string }) {
  const stats = [
    ["Today", "14"],
    ["This week", "62"],
    ["No-shows", "3%"],
  ];
  const bars = [40, 65, 50, 80, 70, 95, 60];
  return (
    <Phone label="Owner: dashboard" className={className}>
      <Title>Dashboard</Title>
      <div className="grid grid-cols-3 gap-1">
        {stats.map(([k, v]) => (
          <div key={k} className="rounded-lg bg-brand-mist p-1.5">
            <p className="text-slate-500">{k}</p>
            <p className="font-heading text-[14px] font-bold text-brand-indigo">{v}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold">Bookings, last 7 days</p>
      <div className="flex h-16 items-end gap-1">
        {bars.map((h, i) => (
          <span key={i} className="flex-1 rounded-t bg-brand-purple" style={{ height: `${h}%`, opacity: i === 5 ? 1 : 0.45 }} />
        ))}
      </div>
      <p className="font-semibold">Top services</p>
      {["Skin fade", "Beard trim", "Hair colour"].map((s, i) => (
        <div key={s} className="flex justify-between border-b border-slate-100 pb-1">
          <span>{s}</span>
          <span className="text-slate-500">{[28, 19, 9][i]}</span>
        </div>
      ))}
    </Phone>
  );
}
