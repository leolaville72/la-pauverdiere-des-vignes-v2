type ChevronDirection = "left" | "right";

type ChevronIconProps = {
  direction?: ChevronDirection;
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function ChevronIcon({
  direction = "right",
  color = "#6d675f",
  size = 20,
  strokeWidth = 2.2,
  className
}: ChevronIconProps) {
  const points = direction === "left" ? "14 6 8 12 14 18" : "10 6 16 12 10 18";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <polyline
        points={points}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}