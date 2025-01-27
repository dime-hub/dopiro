interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroProps) => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 text-center text-gray-900 dark:text-gray-200 px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ctaLink}
            className="bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-700 transition-colors text-sm sm:text-base"
          >
            {ctaText}
          </a>
          {secondaryCtaText && secondaryCtaLink && (
            <a
              href={secondaryCtaLink}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};