import { cn } from "~/lib/utils";

//  union type TypographyVariant h1, h2, h3, h4, h5, h6, p, blockquote, table, list, inline code, lead, large, small, muted
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'table' | 'list' | 'inline-code' | 'lead' | 'large' | 'small' | 'muted';
// const typographyComponentVariants: Record<TypographyVariant, string> = {
  // h1: "span",
  // h2: "span",
  // h3: "span",
  // h4: "span",
  // h5: "span",
  // h6: "span",
  // p: "span",
  // blockquote: "span",
  // table: "span",
  // list: "span",
  // "inline-code": "span",
  // lead: "span",
  // large: "span",
  // small: "span",
  // muted: "span",
// };

export default function Typography({
  variant,
  children,
  className,
  ...props
}: {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = "span";
  return (
    <Comp className={cn(className)} {...props}>
      {children}
    </Comp>
  );
}