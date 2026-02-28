interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-medium text-dark mb-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-text text-sm max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
