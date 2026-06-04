import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './Blocks';
import { cn } from '../lib/utils';

export interface ActionCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    buttonText: string;
    href: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

export const ActionCard = ({ title, description, icon: Icon, buttonText, href, className, variant = 'outline' }: ActionCardProps) => {
    return (
        <div className={cn("bg-white p-8 rounded-2xl border border-brand-soft-neutral/50 shadow-sm flex flex-col justify-between group hover:border-[#6EBAB5]/50 transition-colors", className)}>
            <div>
                <div className="w-12 h-12 bg-[#6EBAB5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#6EBAB5]" />
                </div>
                <h3 className="text-xl font-bold text-brand-structural-navy mb-4">{title}</h3>
                <p className="text-base font-medium text-brand-secondary-text mb-8">{description}</p>
            </div>
            <Button href={href} variant={variant} className="w-full justify-center group/btn text-base">
                {buttonText} {variant === 'outline' && <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />}
            </Button>
        </div>
    );
};
