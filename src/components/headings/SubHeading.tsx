type SubHeadingProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export default function SubHeading({
  children,
  as,
  className,
}: SubHeadingProps) {
  const Element = as || 'h2';
  return <Element className={className}>{children}</Element>;
}
