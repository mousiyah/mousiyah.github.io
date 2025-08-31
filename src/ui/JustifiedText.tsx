interface JustifiedTextProps {
  children: string;
  className?: string;
}

export default function JustifiedText({
  children,
  className = "",
}: JustifiedTextProps) {
  return (
    <p
      className={`${className} text-justify`}
      style={{
        textAlignLast: "center",
      }}
    >
      {children}
    </p>
  );
}
