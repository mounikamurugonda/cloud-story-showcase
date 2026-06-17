import { motion } from "framer-motion";

interface ImagePlateProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  className?: string;
}

export function ImagePlate({ src, alt, caption, aspect = "aspect-[3/2]", className = "" }: ImagePlateProps) {
  return (
    <figure className="space-y-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className={`${aspect} w-full overflow-hidden bg-zinc-100 outline outline-1 -outline-offset-1 outline-black/5 ${className}`}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      {caption ? (
        <figcaption className="text-[11px] italic text-lead">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
