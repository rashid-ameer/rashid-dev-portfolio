import { LucideProps } from "lucide-react";
import Link from "next/link";

type ContactItemProps = {
  icon: React.ComponentType<LucideProps>;
  label: string;
  value: string;
  href?: string;
};

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="hover:bg-muted/35 flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors group">
      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      <div className="text-left">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block">
      {content}
    </Link>
  ) : (
    content
  );
}

export default ContactItem;
