export const PlanetIcon = ({size = "24", color = "#fff"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.292 6A8.967 8.967 0 0 0 3 12c0 .687.077 1.357.223 2m2.069-8a9.003 9.003 0 0 1 15.485 4M5.292 6H12m8.777 4a9 9 0 0 1-15.485 8m15.485-8H15M3.223 14H13m-9.777 0a8.975 8.975 0 0 0 2.069 4m0 0H11m1-8h-2m-3 0h0m9 4h0"
      />
    </svg>
  );
};
