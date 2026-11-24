import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 z-[45] h-[2.5px] pointer-events-none bg-white/[0.04]"
    >
      <motion.div
        className="h-full w-full origin-left transform-gpu bg-gradient-to-r from-[#B48E48] via-[#D4B475] to-[#E7CE99] shadow-[0_0_10px_rgba(212,180,117,0.45)]"
        style={{
          scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress,
        }}
      />
    </div>
  );
}
