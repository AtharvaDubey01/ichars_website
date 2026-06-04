import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CheckListItem {
  content: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

interface CheckListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: (React.ReactNode | CheckListItem)[];
  iconClassName?: string;
  itemClassName?: string;
  className?: string;
}

export const CheckList = ({ items, className, iconClassName, itemClassName, ...props }: CheckListProps) => {
  return (
    <ul className={cn("space-y-3", className)} {...props}>
      {items.map((item, index) => {
        const isObj = typeof item === 'object' && item !== null && 'content' in item;
        const content = isObj ? (item as CheckListItem).content : item;
        const specificClass = isObj ? (item as CheckListItem).className : '';
        const customIcon = isObj ? (item as CheckListItem).icon : null;
        
        return (
          <li key={index} className={cn("flex items-start gap-3 text-base text-brand-secondary-text", itemClassName, specificClass)}>
            {customIcon ? customIcon : <CheckCircle2 className={cn("w-5 h-5 text-brand-soft-teal shrink-0 mt-0.5", iconClassName)} />}
            <span>{content}</span>
          </li>
        );
      })}
    </ul>
  );
};
