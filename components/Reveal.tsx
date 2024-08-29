// Code from https://github.com/KeluhingBavui/portfolio-v2/blob/master/src/components/custom/reveal.tsx
"use client";

import { AnimationProps, TargetAndTransition, VariantLabels, motion } from 'framer-motion';
interface Props {
    children: React.ReactNode;
    initial: AnimationProps['initial'];
    whileInView: TargetAndTransition | VariantLabels | undefined;
    onAnimationComplete?: any;
}

export const Reveal = ({ children, initial, whileInView, onAnimationComplete }: Props) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            onAnimationComplete={onAnimationComplete}
        > {children}</ motion.div>
    );
};