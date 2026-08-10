const CATEGORY_STYLES = {
  heritage: 'bg-turmeric/20 text-madder-dark border-turmeric',
  nature: 'bg-teal/10 text-teal border-teal',
  adventure: 'bg-sandstone/20 text-sandstone border-sandstone',
  religious: 'bg-madder/10 text-madder border-madder'
};

export default function CategoryBadge({ category }) {
  if (!category) return null;
  const style = CATEGORY_STYLES[category.slug] || 'bg-ink/10 text-ink border-ink';

  return (
    <span className={`inline-block border px-2 py-0.5 label-eyebrow ${style}`}>
      {category.name}
    </span>
  );
}
