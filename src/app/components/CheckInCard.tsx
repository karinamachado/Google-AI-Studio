import { motion } from "motion/react";

export type CheckInStatus = "Em dia" | "Vencendo" | "Em atraso";

export interface CheckInCardProps {
  id: number;
  name: string;
  status: CheckInStatus;
  plan: "BASIC" | "PREMIUM" | "ELITE";
  avatar: string;
  checkInDate: string; // "22/02/2026"
  checkInTime: string; // "18:45"
  delay?: number;
}

function statusColor(s: CheckInStatus) {
  if (s === "Em dia")    return "text-[#4ADE80]";
  if (s === "Vencendo")  return "text-[#FBBF24]";
  if (s === "Em atraso") return "text-[#E8271A]";
  return "text-[#606060]";
}

/* Inline calendar icon — matches Figma vector exactly */
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.333 1.333V4M10.667 1.333V4M2 6.667H14M2.667 2.667h10.666C13.403 2.667 14 3.264 14 4v10.667c0 .736-.597 1.333-1.333 1.333H2.667C1.93 16 1.333 15.403 1.333 14.667V4c0-.736.597-1.333 1.334-1.333z"
        stroke="#606060" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.333 9.333H5.34M8 9.333H8.007M10.667 9.333H10.674M5.333 12H5.34M8 12H8.007M10.667 12H10.674"
        stroke="#606060" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Inline clock icon — matches Figma vector */
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.667" stroke="#606060" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 4.667V8l2.667 1.333" stroke="#606060" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckInCard({
  name, status, plan, avatar,
  checkInDate, checkInTime, delay = 0,
}: CheckInCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
      className="bg-[#1A1A1A] border border-[#303030] rounded-[10px] flex items-center justify-between gap-4 px-4 py-[0.833px] min-h-[82px] hover:border-[#3A3A3A] hover:bg-[#1D1D1D] transition-all"
    >
      {/* Left: avatar + info */}
      <div className="flex items-center gap-4 min-w-0 flex-1">
        {/* Avatar */}
        <div className="relative shrink-0 w-12 h-12 rounded-full">
          <img src={avatar} alt={name} className="w-full h-full object-cover rounded-full" />
          <div
            className="absolute inset-0 rounded-full border-[1.667px] border-[rgba(232,39,26,0.2)] pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Name + status row */}
        <div className="min-w-0">
          {/* Name */}
          <p className="text-[#F2F2F2] font-medium font-['Inter',sans-serif] text-[16px] leading-6 truncate">
            {name}
          </p>
          {/* Status • Plan */}
          <div className="flex items-center gap-3 mt-[4px] flex-wrap">
            <span
              className={`font-['JetBrains_Mono',sans-serif] text-[12px] leading-4 ${statusColor(status)}`}
              aria-label={`Status: ${status}`}
            >
              {status}
            </span>
            <span className="text-[#606060] font-['Inter',sans-serif] text-[12px] select-none" aria-hidden="true">
              •
            </span>
            <span className="text-[#606060] font-['JetBrains_Mono',sans-serif] text-[12px] uppercase tracking-[0.2px]">
              {plan}
            </span>
          </div>
        </div>
      </div>

      {/* Right: date + time */}
      <div className="shrink-0 flex flex-col gap-[4px] items-start">
        {/* Date */}
        <div className="flex items-center gap-1.5">
          <CalendarIcon />
          <span className="text-[#F2F2F2] font-['Inter',sans-serif] text-[14px] leading-5 tabular-nums">
            {checkInDate}
          </span>
        </div>
        {/* Time */}
        <div className="flex items-center gap-1.5">
          <ClockIcon />
          <span className="text-[#606060] font-['Inter',sans-serif] text-[12px] leading-4 tabular-nums">
            {checkInTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}