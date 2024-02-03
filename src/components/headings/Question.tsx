type QuestionProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className: string;
};

export default function Question({ children, className, as }: QuestionProps) {
  const Element = as || 'h2';
  return <Element className={className}>{children}</Element>;
}
